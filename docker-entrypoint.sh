#!/bin/sh

# Set environment variables for Docker
export HOST=0.0.0.0
export VITE_HOST=0.0.0.0
export VITE_PORT=3000

# Print environment for debugging
echo "Starting app with environment:"
echo "NODE_ENV=$NODE_ENV"
echo "HOST=$HOST"
echo "VITE_HOST=$VITE_HOST"
echo "VITE_PORT=$VITE_PORT"

# Create a symbolic link to the client directory in the root
# This helps Vite find files correctly
ln -sf /app/client/src /app/src

# Start the application
npm run dev