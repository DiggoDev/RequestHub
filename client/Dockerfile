FROM node:25-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json from server folder
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

RUN npm run build

# Copy the rest of the server code
COPY . .

# Expose port 3000
EXPOSE 3000

  # Start server with custom command
CMD ["npm", "run", "start"]