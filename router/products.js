const express=require("express")
const router=express.Router()
const pool=require("../pool")

//测试地址: http://localhost:3000/products?kwords=新季
router.get("/",(req,res)=>{
  var kwords=req.query.kwords;//"macbook i5 128g"
  //要回发客户端的支持分页的对象
  var output={ pageSize:16 } //每页16个商品
  output.pno=req.query.pno;
  var sql=`SELECT * FROM products_info where ps_bq like '%${kwords}%'`;
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    output.count=result.length;//获得总记录数
    output.pageCount=Math.ceil(//计算总页数
      output.count/output.pageSize);
    output.products=//截取分页后的结果集
      result.slice(output.pno*16,output.pno*16+16);

    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(output))
    res.end()
  })
  //测试地址... products?kwords=i5&pno=1
})

module.exports=router;