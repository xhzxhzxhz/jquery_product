const express=require('express');
//引入mysql连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//====================用户订单==========================
router.get('/checkOrder',(req,res)=>{
    var uid=req.session.uid;
    var $psid=req.query.psid;
    var $count=req.query.count;
    var sql="insert into user_order values(null,?,?,?)";
    pool.query(sql,[uid,$psid,$count],(err,result)=>{
      if(err) throw err;
      console.log(result);
      if(result.affectedRows>0){
        res.send('订单插入成功');//手机号已存在

      }else{
        res.send('订单插入失败');//手机号可用
      }
    });
});
//===================查询用户收货信息======================
router.get('/selectOrder',(req,res)=>{
  var uid=req.session.uid;
  var sql="select * from cart_user_info where uid=?";
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err;
    console.log(result);
      var user=result[0];
      res.write(JSON.stringify({
        uid:user.uid,uname:user.user_name,address:user.address,post:user.post,phone:user.user_phone
      }))

    res.end();
  });
});
//====================提交用户收货信息========================
router.get('/orderInfo',(req,res)=>{
    var $phone=req.query.user_phone;
    var $uname=req.query.user_name;
    var $address=req.query.address;
    var $post=req.query.post;
    var uid=req.session.uid;
    console.log(111);
    if(!$phone){
      res.send('固话、手机至少填写一项');
        return;
    }
    if(!$uname){
      res.send('请填写收货人姓名');
        return;
    }
    if(!$address){
      res.send('请填写收获人详细地址');
        return;
    }
    if(!$phone){
      res.send('手机号不能为空');
        return;
    }
    if(!$post){
      res.send('请填写收货人邮编');
        return;
    }
    var sql='insert into cart_user_info values(null,?,?,?,?,?)';
    pool.query(sql,[uid,$uname,$address,$post,$phone],(err,result)=>{
      if(err) throw err;
      console.log(result);
      if(result.affectedRows>0){
        res.send('信息保存成功');//手机号已存在
      }else{
        res.send('信息保存失败');//手机号可用
      }
    });
  });
module.exports=router;