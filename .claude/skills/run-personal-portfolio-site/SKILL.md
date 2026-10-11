--- 
name: run-personal-portfolio-site
description: Launch and verify the personal portfolio website using a local HTTP server and curl
---

# Run Personal Portfolio Website

This skill launches the personal portfolio website using a local HTTP server and provides programmatic ways to verify its content.

## Prerequisites

- Node.js with npx (available in this environment)
- The site is a static HTML/CSS/JS website with no build process required

## Run (Agent Path)

This skill uses `npx http-server` to serve the site and `curl` to verify its content.

```bash
# Start HTTP server in background
npx http-server -p 8000 &
SERVER_PID=$!

# Wait for server to start
sleep 3

# Verify the site loads and check key content
echo "Checking homepage title..."
curl -s http://localhost:8000/ | grep -i "vado" | head -1

echo "Checking navigation links..."
curl -s http://localhost:8000/ | grep -o 'href="[^"]*"' | grep -E "(about|work|interests)" | head -3

echo "Checking for project section..."
curl -s http://localhost:8000/ | grep -i "notebook explorations" | head -1

# Clean up
kill $SERVER_PID 2>/dev/null || true
```

## Run (Human Path)

For manual interaction, you can:
1. Serve the site: `npx http-server -p 8000` then visit `http://localhost:8000`
2. Or open `index.html` directly in a web browser

## Gotchas

- The server runs on port 8000 by default; if this port is in use, the skill will fail
- Some corporate networks may block certain ports; if 8000 is unavailable, modify the port in the skill
- The site uses relative paths, so it must be served via HTTP for proper asset loading (CSS, JS, images)

## Troubleshooting

- **Server fails to start**: Check if port 8000 is already in use (`netstat -ano | findstr :8000` in Windows CMD or `lsof -i :8000` in Git Bash) and kill the existing process
- **npx http-server not found**: Ensure Node.js and npx are installed and available in your PATH
- **Empty response**: Make sure the HTTP server is running and accessible before running curl commands
- **Content not found**: Verify you're in the correct project directory when running the skill