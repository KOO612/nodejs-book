function long() {
  console.log('작업 끝');
}

console.log('시작');
setTimeout(long, 0);

console.log('다음 작업');
