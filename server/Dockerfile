# Use an official Node runtime as the base image
FROM node:20.10

# Set the working directory in the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json into the image
COPY package*.json ./

# Install project dependencies in the image
RUN npm install

# Copy the rest of your project's source code into the image
COPY . .

# Make port 3000 available outside the Docker container
EXPOSE 3000

# Run the server script when the Docker container is run
CMD [ "npm", "run", "server" ]
