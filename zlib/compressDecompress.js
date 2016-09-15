const zlib = require('zlib');
const inputBuffer = ' I love node ....';

// deflating
zlib.deflate(inputBuffer, (err, buffer) => {
  if (!err) {
    // eJxT8FTIyS9LVcjLT0lV0AMCAC4nBN4=
    console.log(buffer.toString('base64'));
  } else {
    console.log('error when deflating');
  }
});

// get back compressed string
// what the hell is event loop?
// const buffer = Buffer.from('JxT8FTIyS9LVcjLT0lV0AMCAC4nBN4=', 'base64');
const buffer = Buffer.from('eJxT8FTIyS9LVcjLT0lV0AMCAC4nBN4=', 'base64');
zlib.unzip(buffer, (err, buf) => {
  if (!err) {
    console.log(buf.toString());
  } else {
    console.log('error when unzip');
  }
});
