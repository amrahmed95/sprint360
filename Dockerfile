# --- Build stage ---
FROM node:20-alpine AS builder
WORKDIR /app

# Alpine compatibility for Node/Next
RUN apk add --no-cache libc6-compat

# Build-time env - IMPORTANT: We need devDependencies for build
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Install ALL dependencies (including devDependencies) for build
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source
COPY . .

# Make env vars available to Next.js build
COPY .env.prod .env.production

# Build Next.js
RUN npm run build

# --- Runtime stage ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy only necessary files from builder for standalone output
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Remove the package.json copy and npm ci line - standalone doesn't need them

# Switch to non-root user
USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]