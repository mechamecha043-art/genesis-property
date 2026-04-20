#!/bin/bash
cd /home/z/my-project
while true; do
  echo "Starting dev server at $(date)"
  bun run dev 2>&1 | tee dev.log
  echo "Server stopped at $(date), restarting in 5 seconds..."
  sleep 5
done
