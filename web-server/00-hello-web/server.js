var http = require('http');
var page = '<html>' +
  '<body>' +
  '<p>Hello, Nitinat!</p>' +
  '</body>' +
  '</html>';

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-type': 'text/html',
    'Content-Length': page.length
  });
  res.write(page);
  res.end();
}).listen(8080);
