# Mongoose的使用

## 1、引入连接 Mongodb数据库

```bash
//引入mongoose
const mongoose = require("mongoose");

//连接
mongoose.connect('mongodb://testadmin:123456@localhost:27017/test');
```

## 2、设置Schema和定义model

```bash
//设置Schema
const userSchema = mongoose.Schema({
    uid: Number,
    uname: String,
    uage: {
      type:Number,
      default:20
    }
});
//定义model
// const User = mongoose.model('User', userSchema)  //默认查询users表
const User = mongoose.model('User', userSchema, 'user')  //指定查询user表
```

## 3、操作数据

#### 3.1、增加数据

```bash
const user1 = new User({
    uid: 6,
    uname: "害怕",
    uage: 22
})

user1.save().then((data) => {
    console.log(data);
}).catch(error => {
    console.log("插入失败");
})
```

#### 3.2、删除数据

```bash
User.deleteOne({ '_id': "6219c2f880600f2b6be05395" }, (error, data) => {
    if (data.deletedCount) {
        console.log("删除成功");
    }
    else {
        console.log("删除失败");
    }
})
```

#### 3.3、修改数据

```bash
User.updateOne({ '_id': "6219c2f880600f2b6be05395" }, { 'uname': "瑟瑟发抖" }, (error, data) => {
    if (error) {
        console.log("更新失败");
        return
    }
    console.log(data);
})
```

#### 3.4、查询数据

```bash
User.find({}, (error, result) => {
    if (error) {
        console.log("查询出错");
        return;
    }
    console.log(result);
})
```