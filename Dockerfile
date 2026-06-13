# ─────────────────────────────────────────────────────────────────────────────
# Stage 1 — BUILD
# Node 22 Alpine: smallest Node image with full npm/build toolchain
# ─────────────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

# Install build-time OS deps (needed by some native npm packages)
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy dependency manifests first — leverages Docker layer cache.
# If package.json / package-lock.json haven't changed, npm install is skipped.
COPY package.json package-lock.json* ./

# Clean install — deterministic, ignores local node_modules
RUN npm ci --prefer-offline

# Copy the rest of the source
COPY . .

# Vite production build → outputs to /app/dist
RUN npm run build

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2 — SERVE
# nginx:alpine ≈ 7 MB; zero Node runtime in the final image
# ─────────────────────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS production

# Remove default nginx config and default site
RUN rm /etc/nginx/conf.d/default.conf \
 && rm -rf /usr/share/nginx/html/*

# Copy our hardened nginx config
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Copy compiled static assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Non-root user for security (nginx master still needs root to bind :80,
# but worker processes run as nginx user — this is the nginx-alpine default)
# Ensure correct ownership
RUN chown -R nginx:nginx /usr/share/nginx/html \
 && chmod -R 755 /usr/share/nginx/html \
 && chown -R nginx:nginx /var/cache/nginx \
 && chown -R nginx:nginx /var/log/nginx \
 && touch /var/run/nginx.pid \
 && chown nginx:nginx /var/run/nginx.pid

# EasyPanel / reverse proxy: bind on 80 (EasyPanel handles TLS termination)
EXPOSE 80

# Lightweight healthcheck — nginx replies 200 on /health (see nginx.conf)
HEALTHCHECK --interval=15s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:80/health || exit 1

# Run nginx in foreground (required for Docker)
CMD ["nginx", "-g", "daemon off;"]
