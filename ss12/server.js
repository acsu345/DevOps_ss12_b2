const http = require('http');

const PORT = process.env.PORT || 8080;
const APP_VERSION = process.env.APP_VERSION || '1.0.0';

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'healthy', timestamp: new Date().toISOString() }));
  }

  if (url.pathname === '/api/version') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      version: APP_VERSION,
      service: 'release-service',
      environment: 'production',
      registry: 'ghcr.io',
      deployedAt: new Date().toISOString()
    }));
  }

  // Default route
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Welcome to Session 12 Exercise 2 - Automated Docker Release on Git Tag',
    documentation: 'https://docs.github.com/en/packages',
    version: APP_VERSION
  }));
});

server.listen(PORT, () => {
  console.log(`[SERVER] release-service v${APP_VERSION} listening on port ${PORT}`);
});
