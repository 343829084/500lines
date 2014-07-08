var http = require('http');
var template = require('es6-template-strings');

var page = '<html>' +
    '<body>' +
    '<h1>Nitinat/Node V1.0 Page</h1>' +
    '<table>' +
    '<tr>  <td>Date and time</td>  <td>${date_time}</td>   </tr>' +
    '<tr>  <td>Client host</td>    <td>${client_host}</td> </tr>' +
    '<tr>  <td>Client port</td>    <td>${client_port}</td> </tr>' +
    '<tr>  <td>Command</td>        <td>${command}</td>     </tr>' +
    '<tr>  <td>Path</td>           <td>${path}</td>        </tr>' +
    '</body>' +
    '</html>';

var createPage = function (values) {
  return template(page, values);
};

http.createServer(function (req, res) {
  var values = {
    'date_time'   : (new Date()).toString(),
    'client_host' : req.socket.remoteAddress,
    'client_port' : req.socket.remotePort,
    'command'     : req.method,
    'path'        : req.url
  };
  var html = createPage(values);
  res.writeHead(200, {
    'Content-type': 'text/html',
    'Content-Length': html.length
  });
  res.write(html);
  res.end();
}).listen(8080);
