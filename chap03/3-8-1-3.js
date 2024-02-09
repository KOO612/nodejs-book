const fs = require('fs');

setInterval(() => {
  fs.unlink('./asfgsgds.js').catch(console.error);
}, 1000);
