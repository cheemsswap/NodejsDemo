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

# 6、删除集合

use test
db.user.drop()

# 7、插入文档

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

# 8、删除文档

use test

db.user.drop({'username':'张三','age':16})

//删除全部

db.user.drop()

# 9、查询文档

use test

//查询全部

db.user.find() 

//查询指定

db.user.find({'age':16})

//漂亮的查询

db.user.find({'age':16}).pretty()

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

db.user.find({"$or":[{'age':{$lt:18}},{'age':{$gt:20}}]})

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
