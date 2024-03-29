const http = require('http');

const fs = require('fs').promises;

http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile('./server2.html');
      res.writeHead(200, { 'Context-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (error) {
      console.error(error);
      res.writeHead(500, { 'Context-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  })
  .listen(8081, () => {
    console.log('8081 포트 접속');
  });
