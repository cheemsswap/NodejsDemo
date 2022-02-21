const http = require('http');
const { URL } = require('url')
const { routes } = require('./modules/route')
http.createServer(async (request, response) => {
    try {
        await routes['static'](request, response, "static")
    } catch (error) {
        const myUrl = new URL(request.url, 'http://127.0.0.1')
        const router = myUrl.pathname
        try {
            routes[router](request, response)
        } catch (error) {
            routes['error'](request, response)
        }
    }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');