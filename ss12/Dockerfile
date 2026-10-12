# Stage 1: Build & Base
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# Stage 2: Production Runtime
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Security: Non-root user
USER node

COPY --chown=node:node package*.json ./
COPY --chown=node:node server.js ./

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:8080/health || exit 1

CMD ["node", "server.js"]
