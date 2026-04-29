#!/bin/bash

echo "Starting FarmGuard AI Hackathon MVP..."

# Start Backend
echo "Starting Backend API..."
cd /home/manu/Desktop/project/backend
npm install
npm run dev &
BACKEND_PID=$!

# Start Frontend
echo "Starting Frontend UI..."
cd /home/manu/Desktop/project/frontend
npm install
npm run dev &
FRONTEND_PID=$!

echo "FarmGuard AI is running! (Press Ctrl+C to stop)"
wait $BACKEND_PID $FRONTEND_PID
