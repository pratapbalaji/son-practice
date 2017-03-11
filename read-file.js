var fs = require("fs");
var buf = new Buffer(1024);

var filePath = process.argv[2];

fs.open(filePath, 'r+', function (err, fd) {
  if(err) {
    throw err;
  }

  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
  if (err) {
    throw err;
  }

  if(bytes > 0) {

    console.log(buf.slice(0, bytes).toString());
  }

  });
});

