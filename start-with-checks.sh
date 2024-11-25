#!/bin/bash

# Check if the backend port (5001) is in use
if lsof -i :5001; then
  echo "Port 5001 is already in use. Terminating the process..."
  kill -9 $(lsof -t -i :5001)
fi

# Check if the frontend port (3000) is in use
if lsof -i :3000; then
  echo "Port 3000 is already in use. Terminating the process..."
  kill -9 $(lsof -t -i :3000)
fi

# Start backend and frontend processes using concurrently
npm run start:all

