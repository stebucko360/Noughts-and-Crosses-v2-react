# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all app files to the container
COPY . .

# Build the React app (use 'npm run build' or your build script)
RUN npm run build

# Expose the port that the React app will run on (if using the default port, e.g., 3000)
EXPOSE 3000

# Command to start the React app (use 'npm start' or your start script)
CMD ["npm", "start"]
