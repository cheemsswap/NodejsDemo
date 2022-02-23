# 1、使用命令行启动

mongo

# 2、查看数据库

show dbs

# 3、创建数据库 （通过切换到该数据库然后 插入数据则自动创建）

use  test

# 4、删除数据库

use test

db.dropDatabase()

# 5、创建集合

use test
db.createCollection('user')

# 6、列出当前数据库的所有集合

use test

show collections

# 7、删除集合

use test
db.user.drop()

# 8、插入文档

use test

db.user.insert({'username':'张1','age':16})

db.user.insert({'username':'张2','age':17})

db.user.insert({'username':'张3','age':18})

db.user.insert({'username':'张4','age':19})

db.user.insert({'username':'张5','age':20})

db.user.insert({'username':'张6','age':21})

db.user.insert({'username':'张7','age':22})

db.user.insert({'username':'王1','age':16})

db.user.insert({'username':'王2','age':16})

db.user.insert({'username':'王3','age':17})

db.user.insert({'username':'王4','age':17})

db.user.insert({'username':'王5','age':18})

db.user.insert({'username':'王6','age':21})

db.user.insert({'username':'王7','age':22})

### 循环插入文档

use test
for (var i = 1; i < 1000; i++) {
	db.user.insert({'username':"张"+i,"age":i})
}

# 9、删除文档

### 删除指定的一条数据

//方法一

db.user.remove({'username':'张三','age':16},{justOne:true})

//方法二

db.user.remove({'username':'张三','age':16},{justOne:1})

//方法三

db.user.remove({'username':'张三','age':16},true)

### 删除指定的全部数据

//方法一

db.user.remove({'username':'张三','age':16},{justOne:false})

//方法二

db.user.remove({'username':'张三','age':16})

### 删除全部->其实就是删除集合了

//方法一

db.user.drop()

//方法二

db.user.remove({})

# 10、查询文档

use test

//查询全部

db.user.find() 

//查询指定

db.user.find({'age':16})

//漂亮的查询

db.user.find({'age':16}).pretty()

### 查询显示第一条匹配的数据

//方法一

db.user.findOne()

//方法二

db.user.find().limit(1)

### 查询计数

db.user.find().count()

### 普通单条件查询

// 查询年龄小于20岁的

db.user.find({'age':{$lt:20}})

//查询年龄小于等于20岁

db.user.find({'age':{$lte:20}})

//查询年龄大于18岁的

db.user.find({'age':{$gt:18}})

//查询年龄大于等于18岁的

db.user.find({'age':{$gte:18}})

### 条件查询之“与”条件查询

//查询年龄 [18,20) 岁的

db.user.find({'age':{$gte:18,$lt:20}})

### 条件查询之“或”条件查询

//查询年龄 小于18岁 或者 大于20岁的

db.user.find({$or:[{'age':{$lt:18}},{'age':{$gt:20}}]})

### 模糊查询

//模糊查询 姓张的

db.user.find({'username':/^张/})

//查询姓名中有3的

db.user.find({'username':/3/})

//查询姓名中以3结尾的

db.user.find({'username':/3$/})

### 排序查询

//查询 根据年龄升序排序

db.user.find().sort({age:1})

//查询 根据年龄降序排序

db.user.find().sort({age:-1})

### 多优先级排序查询

//优先根据姓名排序  其次是年龄

db.user.find().sort({age:1}).sort({'username':1})

### 指定查询数量或者范围内的

//查询前5条数据

db.user.find().limit(5)

//查询5条以后的所有数据

db.user.find().skip(5)

//查询介于第6条~第10条的数据

db.user.find().limit(5).skip(5)

# 11、修改文档

## 修改

### 只修改指定条件的一条文档(没有则不操作)

//方法一

db.user.update({'username':'张18'},{$set:{'age':19}})

//方法二

db.user.update({'username':'张18'},{$set:{'age':19}},{upsert:false,multi:false})

//方法三

db.user.update({'username':'张18'},{$set:{'age':19}},false,false)

### 只修改指定条件的一条文档（如果没有则新插入1条语句）

//方法一

db.user.update({'username':'张18'},{$set:{'age':19}},{upsert:true})

//方法二

db.user.update({'username':'张18'},{$set:{'age':19}},true,false)

### 修改指定条件的全部的文档(没有则不操作)

//方法一

db.user.update({'username':'张18'},{$set:{'age':19}},{multi:true})

//方法二

db.user.update({'username':'张18'},{$set:{'age':19}},false,true)

### 修改指定条件的全部的文档（如果没有则新插入1条语句）

//方法一

db.user.update({'username':'张18'},{$set:{'age':19}},{upsert:true,multi:true})

//方法二

db.user.update({'username':'张18'},{$set:{'age':19}},true,true)

## 替换

### 替换指定条件的一条文档 (没有则不操作)

//方法一

db.user.update({'username':'张18'},{'age':19})

//方法二

db.user.update({'username':'张18'},{'age':19},{upsert:false,multi:false})

//方法三

db.user.update({'username':'张18'},{'age':19},false,false)

### 替换指定条件的一条文档 （只替换一条,如果没有则新插入1条语句）

//方法一

db.user.update({'username':'张18'},{'age':19},{upsert:true})

//方法二

db.user.update({'username':'张18'},{'age':19},true,false)

### 替换指定条件的全部文档 (没有则不操作)

//方法一

db.user.update({'username':'张18'},{'age':19},{multi:true})

//方法二

db.user.update({'username':'张18'},{'age':19},false,true)

### 替换指定条件的全部文档 (如果没有则新插入1条语句)

//方法一

db.user.update({'username':'张18'},{'age':19},{upsert:true,multi:true})

//方法二

db.user.update({'username':'张18'},{'age':19},true,true)

## 带计算的修改

### 指定条件增加10岁

db.user.update({'username':'张18'},{$inc:{'age':10}})

### 指定条件减少10岁

db.user.update({'username':'张18'},{$inc:{'age':-10}})

# 12、MongoDB索引

索引可以提高检索效率

## 创建索引

### 唯一索引

当该字段不能重复的时候 我们可以设置该字段为唯一索引

db.user.createIndex({'username':1},{"unique":true})

### 按升序创建普通索引

db.user.createIndex({"username":1})

### 按降序创建普通索引

db.user.createIndex({"username":-1}) 

### 如果经常检索的时候条件比较多，可以使用复合索引

db.user.createIndex({"username":1,'age':1})

### 创建索引并设置时效 ，假设设为180秒后自动删除

db.user.createIndex({"username":1},{expireAfterSeconds:180}) 

## 查看索引

### 查看索引大小

db.user.totalIndexSize()

## 删除索引

### 删除指定集合的索引

db.user.dropIndex({'username':1})

### 删除指定集合的全部索引

db.user.dropIndexes()

# 13、权限设置 ->创建超级管理员

新安装的mongodb是没有管理员的 我们需要手动创建管理员

### 新建超级管理员用户

use admin
db.createUser({user:'admin',pwd:'123456',roles:[{role:'root',db:'admin'}]})

### 开启权限认证

路径在：C:\Program Files\MongoDB\Server\5.0\bin - > mongod.cfg

增加配置:

security:
  authorization: enabled

### 重启mongodb数据库

# 14、权限设置 -> 普通用户

### 新建普通用户->只能访问指定的集合  注意连接的时候要标注所连的数据库的名称

use test

db.createUser({user:'testadmin',pwd:'123456',roles:[{role:'dbOwner',db:'test'}]})

# 15、权限管理

## 查看当前库的管理员

show users

## 删除当前库的管理员

db.dropUser("testadmin")

## 修改密码

db.updateUser("useradmin",{pwd:"newpassword"})

## 密码验证

db.auth("testadmin","123456")



