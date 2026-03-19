# docker/server/Dockerfile
FROM node:25-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json from server folder
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server code
COPY server/. ./

# Expose port 3000
EXPOSE 3001

# Start server with custom command
CMD ["npm", "run", "dev"]