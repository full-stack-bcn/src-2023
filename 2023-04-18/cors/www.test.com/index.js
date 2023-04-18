const express = require("express");
const app = express();
app.use(express.static(__dirname+"/public"));
app.listen(8088, () => console.log("www.test.com on 8088"));