# Use the official Node.js image
FROM node:latest

# Set the working directory
WORKDIR /app

# Clone the repository
RUN git clone https://github.com/thewiilover/AquaDX-Bot.git

# Change directory to the cloned repository
WORKDIR /app/AquaDX-Bot

# Install dependencies
RUN npm install

# Start the application
RUN npm start