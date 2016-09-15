const zlib = require('zlib');

const gzip = zlib.createGzip();
const fs = require('fs');
if (fs.existsSync('./input.txt')) {

  const inp = fs.createReadStream('input.txt');
  const out = fs.createWriteStream('input.txt.gz');

  inp.pipe(gzip).pipe(out);
} else {
  console.error("file not found\n");
}
