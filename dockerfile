# Use the official Node.js LTS image
FROM node:20.11.0-alpine

# Set the working directory inside the container
WORKDIR /server

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

RUN npm run build

# Expose the port defined in the environment variable, or use the default (e.g., 3000)
ENV PORT=$PORT
ENV NODE_ENV=$NODE_ENV
ENV MONGODB_URI=$MONGODB_URI
ENV JWT_SECRET=$JWT_SECRET
ENV LOG_LEVEL=$LOG_LEVEL
ENV TMDB_API_KEY=$TMDB_API_KEY
ENV TMDB_API_URL=$TMDB_API_URL
EXPOSE $PORT

# Command to start the Express server
CMD ["npm", "start"]
