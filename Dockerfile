# --- Build stage ---
FROM node:20-alpine AS builder
WORKDIR /app

# Alpine compatibility for Node/Next
RUN apk add --no-cache libc6-compat

# Build-time env
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Install deps
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source
COPY . .

# Make env vars available to Next.js build
COPY .env.prod .env.production

# Build Next.js
RUN npm run build

# --- Runtime stage ---
FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production

# Copy built app
COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]
