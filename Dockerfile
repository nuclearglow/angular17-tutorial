# Stage 1: Build the Angular application

# Use an official Node runtime as the base image to build the image
FROM node:20.10 as build

# Set the working directory in the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json into the image
COPY package*.json ./

# Install Angular CLI and dependencies
RUN npm install -g @angular/cli@latest \
    && npm ci --only=production

# Copy the rest of your project's source code into the image
COPY . .

# build the Angular app for production
RUN npm run build:release

# Stage 2: Serve the Angular application from Stage 1 using nginx
FROM nginx:1.25.3-alpine

# Copy the Angular app from Stage 1
COPY --from=build /app/dist/angular17 /app/angular17

# Copy nginx-browser.conf to the image
COPY ./nginx-browser.conf /etc/nginx/conf.d/default.conf

# Install ngssc binary - see https://www.npmjs.com/package/angular-server-side-configuration
ADD https://github.com/kyubisation/angular-server-side-configuration/releases/download/v17.0.2/ngssc_64bit /usr/local/bin/ngssc
RUN chmod +x /usr/local/bin/ngssc

# Expose port 80
EXPOSE 80

# we start nginx and the ngssc insertion at runtime
COPY start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh
CMD ["/usr/local/bin/start.sh"]
