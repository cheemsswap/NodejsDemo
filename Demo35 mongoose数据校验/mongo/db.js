const mongoose = require("mongoose");

mongoose.connect("mongodb://testadmin:123456@127.0.0.1:27017/test")

module.exports = mongoose