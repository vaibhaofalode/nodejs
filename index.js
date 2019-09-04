const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server is running at ${hostname}:${port}`);
});