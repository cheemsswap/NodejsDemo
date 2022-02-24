const { MongoClient } = require("mongodb");

const uri = "mongodb://testadmin:123456@127.0.0.1:27017/test";

const Selecttest = async () => {
    try {
        var client = new MongoClient(uri);
        client.connect();
        const db = client.db("test")
        //查找数据
        const data = await db.collection('user').find({ 'age': 18 }).toArray()
        console.log(data);
    }
    catch (error) {
        console.log("数据库连接失败");
    }
    finally {
        await client.close()
    }
}

const Inserttest = async () => {
    try {
        var client = new MongoClient(uri);
        client.connect();
        const db = client.db("test")
        //插入数据
        const userData = await db.collection('user').insertOne({ 'username': "测试名称2", 'age': 18 })
        console.log(userData);
    }
    catch (error) {
        console.log("数据库连接失败");
    }
    finally {
        await client.close()
    }
}

const Updatetest = async () => {
    try {
        var client = new MongoClient(uri);
        client.connect();
        const db = client.db("test")
        //修改数据
        // const userData = await db.collection('user').updateOne({ 'age': 18 }, { $set: { 'username': "修改后的" } })
        const userData = await db.collection('user').updateMany({ 'age': 18 }, { $set: { 'username': "修改后的" } })
        console.log(userData);
    }
    catch (error) {
        console.log("数据库连接失败");
    }
    finally {
        await client.close()
    }
}

const Deletetest = async () => {
    try {
        var client = new MongoClient(uri);
        client.connect();
        const db = client.db("test")
        //修改数据
        const userData = await db.collection('user').deleteOne({ 'age': 18 })
        console.log(userData);
    }
    catch (error) {
        console.log("数据库连接失败");
    }
    finally {
        await client.close()
    }
}




Selecttest()
// Inserttest()
// Updatetest()
// Deletetest()
