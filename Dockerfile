# Use the specific Node.js version with Alpine
FROM node:20.11.1-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application (if applicable)
RUN yarn build

# Expose the port your application runs on
EXPOSE 3000

# Command to start the application
CMD ["node", "yarn", "start"]
