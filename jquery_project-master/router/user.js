const express=require('express');
//引入mysql连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//**********************************用户登录*****************************
// router.post('/login',(req,res)=>{
//   var obj=req.body;
//   var $phone=obj.phone;
//   var $upwd=obj.upwd;
//   if(!$phone){
//     res.send('用户名不能为空');
// 	return;
//   }
//   if(!$upwd){
//     res.send('密码不能为空');
// 	return;
//   }
//   var sql='select * from user where phone=? and upwd=?';
//   pool.query(sql,[$phone,$upwd],(err,result)=>{
//     if(err) throw err;
//     if(result.length>0){
//       res.send('登录成功');
//     }else{
//       res.send('用户名或密码错误');
//     }
  
//   });
// });
//*******************************用户注册******************************
router.post('/register',(req,res)=>{
  //浏览器发送的数据
  var obj=req.body;
  //验证表单提交的内容是否为空
  var $phone=obj.phone;
  if($phone==''){
    res.send("手机号不能为空");
	return;//终止函数中的代码继续执行
  }
  var $tx_yzm=obj.tx_yzm;
  if($tx_yzm==''){
    res.send("图形码不能为空");
	return;
  }
  var $message_yzm=obj.message_yzm;
  if($message_yzm==''){
    res.send("验证码不能为空");
	return;
  }
  var $upwd=obj.upwd;
  if($upwd==''){
    res.send("密码不能为空");
  }
 // res.send('注册成功');
  //以上验证都通过了，执行插入数据库操作
  var sql='insert into user values(null,"sp123",?,?)';
  pool.query(sql,[$upwd,$phone],(err,result)=>{
    if(err) throw err;
	//如何判断插入成功——affectedRows
    if(result.affectedRows>0){
	  res.send("注册成功");
	}else{
	  res.send("请检查注册信息");
	}
  });
});

//*****************注册时检查手机号在数据库中是否已存在
router.get('/checkPhone',(req,res)=>{
  var $phone=req.query.phone;
  if(!$phone){
    res.send('手机号不能为空');
	return;
  }
  var sql="select * from user where phone=?";
  pool.query(sql,[$phone],(err,result)=>{
    if(err) throw err;
	if(result.length>0){
	  res.send('1');//手机号已存在
	}else{
	  res.send('0');//手机号可用
	}
  });
});


//********************判断是否登录*************************
router.post("/signin",(req,res)=>{
  var phone=req.body.phone;
  var upwd=req.body.upwd;
  //console.log(phone,upwd);
  var sql= "select * from user where phone=? and upwd=?";
  pool.query(sql,[phone,upwd],(err,result)=>{
      if(err) console.log(err);
     
      if(result.length>0){
        res.writeHead(200);
        var user=result[0];
        req.session.uid=user.uid;
        res.write(JSON.stringify({
         ok:1
        }))
      }else{
        res.write(JSON.stringify({
          ok:0,
          msg:"用户名或密码错误！"
        }))
      }
      res.end();
    }
  )
})
router.get("/islogin",(req,res)=>{
  res.writeHead(200);
  console.log(req.session.uid);
  if(req.session.uid===undefined){
    res.write(JSON.stringify({ok:0}))
    res.end()
  }else{
    var uid=req.session.uid;
    var sql=
     "select * from user where uid=?"
    pool.query(sql,[uid],(err,result)=>{
      if(err) console.log(err);
      var user=result[0];
      res.write(JSON.stringify({
        ok:1,uid:user.uid,uname:user.uname
      }))
      res.end()
    })
  }

})
router.get("/signout",(req,res)=>{
  req.session["uid"]=undefined;
  res.end();
})
//测试：
//http://localhost:3000/users/islogin ok:0
//.../users/signin?uname=dingding&upwd=123456 ok:1
//.../users/islogin ok:1
//.../users/signout
//.../users/islogin ok:0





module.exports=router;
