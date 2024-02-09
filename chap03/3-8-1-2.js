const fs = require('fs');

setInterval(() => {
  fs.unlink('./asgaafa.js', (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);
