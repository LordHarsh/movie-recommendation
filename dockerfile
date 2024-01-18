# Development stage
FROM node:20.11.0-alpine as development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY tsconfig.json ./
COPY . .
CMD [ "npm", "run", "dev" ]

# Builder stage
FROM development as builder
WORKDIR /app
# Build the app with devDependencies still installed from "development" stage
RUN npm run build
# Clear dependencies and reinstall for production (no devDependencies)
RUN rm -rf node_modules
RUN npm ci --only=production


# Production stage
FROM alpine:latest as production
RUN apk --no-cache add nodejs ca-certificates
WORKDIR /app
COPY --from=builder /app ./
CMD [ "node", "build/src/index.js" ]