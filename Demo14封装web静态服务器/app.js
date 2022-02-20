const http = require('http');
const { static } = require('./modules/route')

http.createServer(function (request, response) {

    static(request, response, "static")

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');