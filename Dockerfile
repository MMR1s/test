# Use the official nginx image as the base
FROM nginx:alpine

# Copy the build output from Vite into the nginx container
COPY dist/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
