FROM node:16.15.0

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY yarn.lock ./
COPY public ./public
COPY src ./src
copy . .
  

# Expose port 3000 (assuming your React app runs on port 3000)
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
