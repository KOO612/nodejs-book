const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>hello node</h1>');
  res.end('<p>hello server</p>');
});
server.listen(3000);

server.on('listening', () => {
  console.log('3000번 포트');
});

server.on('error', (error) => {
  console.error(error);
});
