
$(function(){	     
        (async function(){
            var res=await $.ajax({
                url:"http://localhost:3000/user/islogin",
                type:"get",
                dataType:"json"
            });//判断是否登录
            if(res.ok==1){
                var uname=res.uname;
                $(".welcome").children().first().next().html(uname);
                $(".info-name").html(uname);
            }
            else{
                var log=$(".welcome").children().first().next();
                $(log).on("click",function(){
                    location.href="login.html";
                })
            }
        })()
        var out=$(".welcome").children().last();
        $(out).click(function(e){
            e.preventDefault();
            $.ajax({
              url:"http://localhost:3000/user/signout",
              type:"get",
              success:function(){
                location.reload();
              }
            })
          })     
    $('.info').click(function(){
        $('.right-1').show();
        $('.my_yh').hide();
    })	
    $('.my_yhq').click(function(){
        $('.my_yh').show();
        $('.right-1').hide();
    })
    $("ul.xf-menu1").on("click",function(e){
        e.preventDefault();
        var $a=$(e.target);
        if($a.is("a")){
            $a.parent().addClass("curr").siblings().removeClass("curr");
        }
    })
    $(".menu-1").click(function(){
        $(".xf-content21").css("display","block");
        $(".xf-content22").css("display","none");
    })
    $(".menu-2").click(function(){
        $(".xf-content22").css("display","block");
        $(".xf-content21").css("display","none");
    })
    $(".left-menu>ul>li").on("click",function(){
        $(this).css("background","#0700c5");
        $(this).children().css("color","#fff");
        $(this).siblings().css("background","#fff");
        $(this).siblings().children().css("color","#000");
        $(this).parent().siblings().children().css("background","#fff");
        $(this).parent().siblings().children().children().css("color","#000");      
    })

})