const http = require('http');
const app = require('./modules/route')
const { MongoClient } = require("mongodb");
const { URL } = require('url')

const uri = "mongodb://testadmin:123456@127.0.0.1:27017/test";

const Selecttest = async (collectionName, req, page, pageSize) => {
    try {
        var client = new MongoClient(uri);
        client.connect();
        const db = client.db("test")
        //查找数据
        return await db.collection(collectionName).find(req).limit(pageSize).skip(pageSize * (page - 1)).toArray()
    }
    catch (error) {
        console.log(error);
    }
    finally {
        await client.close()
    }
}

http.createServer(app).listen(3000);

app.get('/select', async (request, response) => {
    response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8"` });
    const myUrl = new URL(request.url, 'http://127.0.0.1')
    const page = parseInt(myUrl.searchParams.get('page')) || 1
    const pageSize = parseInt(myUrl.searchParams.get('pagesize')) || 10
    const data = await Selecttest('user', {}, page, pageSize)
    response.end(JSON.stringify(data));
});
console.log('Server running at http://127.0.0.1:3000/')
