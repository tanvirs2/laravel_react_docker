FROM node:18

# Install dependencies
WORKDIR /app/react

# Copy the ReactJS application to the container
COPY . /app/react


RUN npm install

#RUN npm run build

# Expose the ReactJS port
EXPOSE 3000

# Start the ReactJS application
CMD ["npm", "run", "dev"]
