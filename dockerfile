# Use official Node.js image as the base image
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Use a lightweight production-ready Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy built Next.js app from the builder stage
COPY --from=builder /app ./

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"]
