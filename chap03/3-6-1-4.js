const fs = require('fs').promises;

console.log('시작');
// promise로 수정 필요
fs.readFile('../nodejs-book/chap03/readme.txt')
  .then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('../nodejs-book/chap03/readme.txt');
  })
  .then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('../nodejs-book/chap03/readme.txt');
  })
  .then((data) => {
    console.log('3번', data.toString());
    console.log('끝');
  })
  .catch((err) => {
    console.error(err);
  });
