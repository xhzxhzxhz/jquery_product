$(function(){
    console.log($("[type='button']"));
    $("[type='button']").on("click",function(){
    //先点击然后获取用户名和地址才能进行通过ajax传给服务器
        var phone=$("input[type='text']").val();
        var upwd=$("input[type='password']").val();
        (async function(){
            var res=await $.ajax({
                url:"http://localhost:3000/user/signin",//过去的服务器的端口
                type:"post",
                data:{phone,upwd},//这个就是get方式获取的地址栏问号后面的信息参数
                dataType:"json",//接住json的结果
            })
            if(res.ok==0) alert(res.msg);
            else{
                alert("登录成功")
                if(location.search.startsWith("?back=")){
                    var url=location.search.slice(6)
                }else{
                    var url="index.html";
                }
              
                location.href=url;
            }
        
        })()
    })
    //================登录切换===========================================
    $('.sm').click(function(){
        $('.ewm').show();
        $('.zh').hide();
    })
    $('.zhdl').click(function(){
        $('.zh').show();
        $('.ewm').hide();
    })
    $('.dl-1').click(function(){
        $('.form').show();
        $('.login-method .zh ul li').after({"content":"","width":"7px","height": "7px","background-color": "#000","position": "absolute","top": "8px","left": "45px","z-index": "2","border-radius":"50%"});
        $('.form-1').hide();
    })
    $('.dl-2').click(function(){
        $('.form-1').show();
        $('.form').hide();
    })
})



// function login(){
//    //1.创建连接	
//    var xhr=createXhr();
//    //2.监听
//    xhr.onreadystatechange=function(){
//         if(xhr.readyState==4 && xhr.status==200){
//             var res=xhr.responseText;
                
//                 if(res=='用户名不能为空'){
//                     $('showUname').innerHTML="用户名不能为空";
                    
//                 }
//                 if(res=='密码不能为空'){
//                     $('showUpwd').innerHTML="密码不能为空";
//                 }
//                 if(res=='登录成功'){
//                     location.href="index.html"; 
//                     console.log("11")
//                 }

//         }
//    }
//    //3.打开连接 
//    xhr.open("post","/user/login",true);
//    //4.发送请求
//    //增加消息头
//    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//    var u_uname=$("phone").value;
//    var u_upwd=$("upwd").value;
//    var msg="phone="+u_uname+"&upwd="+u_upwd;
//    xhr.send(msg);

// }