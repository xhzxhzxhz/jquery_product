
$(function(){
    $.ajax({
        url:"http://localhost:3000/header.html",
        type:"get",
        // dataType:"json",
        success:function(res){
            $("header").replaceWith(res)
            $("#s1").children();
            $(function(){
                //1. 动态创建link引用header.css
                $("<link rel='stylesheet' href='css/header.css'>").appendTo("head")
                //2. ajax请求header.html片段
                $.ajax({
                  url:"http://localhost:3000/header.html",
                  type:"get",
                  // dataType:"jsonp",
                  success:function(res){
                    $("#header").replaceWith(res);
                    /******************搜索框**************** */
                    //1. 查找触发事件的元素
                    var  $input=$('[type="text"]');
                          
                    //2. 绑定事件
                      //  3. 查找要修改的元素
                      //  4. 修改元素 
                    $input.keyup(function(e){
                        var kw=$input.val().trim();
                      if(e.keyCode==13){
                        if(kw!=="")
                        location.href=
                          `products.html?kwords=${kw}`;
                      }
                    })
                    if(location.search.indexOf("kwords")!=-1){
                      var kwords=decodeURI(
                        location.search.split("=")[1]
                      )
                      $input.val(kwords)
                    } 
                    //========================================================
                     //点击登录，跳转到登录界面，并记住返回地址               
                    $.ajax({
                      url:"http://localhost:3000/user/islogin",
                      type:"get",
                      dataType:"json",
                      success:function(res){
                        
                        if(res.ok==1){
                          $(".mine").on("mouseenter",function(){
                            $(".person_list").css("display","block");
                          })
                          $(".mine").on("click",function(){
                            location.href="personal.html";
                          })
                          $(".person_list").on("mouseleave",function(){
                            $(".person_list").css("display","none");
                          })
                     
                          var uid=res.uid;
                          $(".mine").attr("data-uid",uid);
                        }else{
                          $(".mine1").click(function(e){
                            e.preventDefault();
                            location.href="login.html?back="+location.href;
                          })
                        }
                      }
                    })
                    $(".loginout").click(function(e){
                      e.preventDefault();
                      $.ajax({
                        url:"http://localhost:3000/user/signout",
                        type:"get",
                        success:function(){
                          location.reload();
                        }
                      })
                    })     
                    
                    //======================================================
                  }
                })
              })
            
        }
        
    })
      //点一级菜单触发二级菜单
    $("#nav_second1").css("display","block");
    var sexs=$("ul.sex");
    sexs.on("mouseover","li",function(){
      var id=$(this).children().first().attr("data-target");
      $(id).show().siblings().hide();
    })

    //点二级菜单触发三级菜单
    $("#nav_second1").on("mouseenter","a",function(e){
      e.stopPropagation();
        var id=$(this).attr("data-target");
        $(id).show().siblings().hide();
    })

    $("#nav_second2").on("mouseenter","a",function(e){
      e.stopPropagation()
      var id=$(this).attr("data-target");
      $(id).show().siblings().hide();
    })
    $("#nav_second3").on("mouseenter","a",function(e){
      e.stopPropagation();
      var id=$(this).attr("data-target");
      $(id).show().siblings().hide();
    })

    $("#nav_third>div").on("mouseleave","div",function(e){
      e.stopPropagation();
      $(this).hide();
    })

})
