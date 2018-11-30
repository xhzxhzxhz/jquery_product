const express=require('express');
const bodyPaser=require('body-parser');
const session = require('express-session');
const cors = require("cors");
//构建web服务器
var app=express();
app.listen(3000,()=>{
  console.log('服务器创建成功');
});
app.use(cors({
  origin:[ "http://127.0.0.1:3000","http://localhost:3000"],
  credentials:true
}))
//导入路由器
const user=require('./router/user.js');
const index=require('./router/index.js');
const details=require('./router/details.js');
const products=require('./router/products.js');
const cart=require('./router/cart.js');
const order=require('./router/order.js');
//托管静态资源
app.use(express.static('./public'));
app.use(session({
  secret: '128位随机字符串',
  resave: false,
  saveUninitialized: true,
}))
//使用body-parser中间件
app.use(bodyPaser.urlencoded({
  extended:false
}));
//使用路由器
//把用户路由器挂载到/user下
app.use('/user',user);//后面的user表示路由器，前面的/user表示要挂载的路径，访问时形式为/user/...如：
app.use('/index',index);
app.use('/details',details);
app.use('/products',products);
app.use('/cart',cart);
app.use('/order',order);