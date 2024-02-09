const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>hello node</h1>');
    res.end('<p>hello server</p>');
  })
  .listen(3000, () => {
    console.log('3000포트 접속');
  });
