
$(function(){
    if(location.search.indexOf("kwords=")!=-1){
      var kwords=decodeURI(
        location.search.split("=")[1]
      );
      var pno=0;
      function loadPage(no=0){//no:新页号
        pno=no;
        $.ajax({
          url:"http://localhost:3000/products",
          type:"get",
          data:{kwords,pno},
          dataType:"json",
          success:function(output){
            var { products,pageCount }=output;
            var html="";
            for(var p of products){
              var {psid,i1,i2,ps_bq,ps_new_price,ps_old_price,ps_size,ps_title}=p;
              html+=`<li>
                <a href="product_details.html?psid=${psid}">
                    <div class="cloth_img">
                        <img src="${i1}" class="i1">
                        <img src="${i2}" class="i2">
                        ${ps_size}
                    </div>  
                    <div class="item_details">
                        <span class="item_bq">${ps_bq}</span>
                        <h3>GIVENCHY</h3>
                        <p class="item_t">${ps_title}</p>
                        <p class="item_price">
                            <em></em>
                            <span class="new_price">${ps_new_price}</span>
                            <span class="old_price">${ps_old_price}</span>
                        </p>
                    </div>
                </a>
                </li>`;
            }
            $(".rigth_cloth").html(html);
  
            var html="";
            for(var i=1;i<=pageCount;i++){
              html+=`<a href="#" class="${i==pno+1?'active':''}">${i}</a>`
            }
            $(".page_num").children(":not(:first-child):not(:last-child)").remove()
            //将html追加到上一页后
            $(".page_num").children().first().after(html)
            if(!pno==0)//如果当前页是第一页就禁用上一页
                $(".page_num").children().first().addClass("active")
            
            if(!pno==pageCount-1)
            $(".page_num").children().last().addClass("active")
           
          }
        })
      }
      loadPage();
      //只在页面首次加载时，在分页按钮的父元素上绑定一次
      $(".page_num").on("click","a",function(e){
        e.preventDefault();
        var $a=$(this);
        //除了禁用和当前正在激活按钮之外才能点击
        if(!$a.is("active")){
          if($a.is(":first-child"))//上一页
             var no=pno-1;//新页号=当前页号-1
          else if($a.is(":last-child"))
            var no=pno+1;//新页号=当前页号+1
          else//1、2、3按钮
            var no=$a.html()-1;//新页号=按钮内容-1
          loadPage(no);//重新加载新页号的页面内容
        }
      });

    } 
    
    //=====================================以下是所有点击事件===================================================


    $(".tb").on("click",function(){
        $(".sort_select>ul").toggleClass("display");
        
    })
    $(".p_title>form>label>a").on("click",function(){
         $(this).children().css("background","#ccc");
        //$(this).children().toggleClass("cc");
        $(this).parent().siblings().children().children().css("background","#fff");
    })
  
    $(".ff>ul>li>a").on("click",function(){
        $(".hbj").css("display","block");
        setTimeout(function(){
            $(".hbj").css("display","none");
        },1000)  
    })
    //========================图片大小切换======================       
    $("a.one").on("click",function(){
        $(this).css("background","url(./img/col.png) 0 -22px");
        $("a.two").css("background","url(./img/col.png) 0 -44px");
        $("a.three").css("background","url(./img/col.png) 0 -88px");
        $(".rigth_cloth>li").css("width","240px");
        $("section").css("height","2500px");
    })
    $("a.two").on("click",function(){
        $(this).css("background","url(./img/col.png) 0 -66px");
        $("a.one").css("background","url(./img/col.png) 0 0px");
        $("a.three").css("background","url(./img/col.png)  0 -88px");
        $(".rigth_cloth>li").css("width","317px");

        $("section").css("height","3000px")
    })
    $("a.three").on("click",function(){
        $(this).css("background","url(./img/col.png) 0 -110px");
        $("a.one").css("background","url(./img/col.png) 0 0px");
        $("a.two").css("background","url(./img/col.png) 0 -44px");
        $(".rigth_cloth>li").css("width","480px");
        $("section").css("height","4000px");
    
    })
    //left_menu
    $(".brand_content ul li a").on("click",function(){
        $(this).children().first().css("background","#aaa");
    
    })
    //=====================品类======================
    $(".c1>i").on("click",function(){
        $(".c_content").toggleClass("visiable");
    })
    $(".c_content>ul>.female>a").on("click",function(){
        $(".fm1").toggleClass("display");
        $(this).children().first().css("background","#aaa");
    })
    $(".c_content>ul>.male>a").on("click",function(){
        $(".fm2").toggleClass("display");
        
        $(this).children().first().css("background","#aaa");
    })
    $(".c_content>ul>.children>a").on("click",function(){
        $(".fm3").toggleClass("display");
        $(this).children().first().css("background","#aaa");
    })
    //=====================品牌======================
    $(".c2>i").on("click",function(){
        $(".b1").toggleClass("visiable1");
    
        $(".brand_search").toggleClass("display");
    })
    //=====================尺码======================
    $(".c3>i").on("click",function(){
        $(".size_content").toggleClass("visiable2");
    })
    //=====================颜色======================
    $(".c4>i").on("click",function(){
        $(".color_content").toggleClass("visiable3");
    })
    //=====================价格======================
    $(".c5>i").on("click",function(){
        $(".price_content").toggleClass("visiable4");
    })
    //=======================右边商品=================

    $(".rigth_cloth").on("mouseenter","li",function(){
        $(this).children().children().first().children().first().css({"opacity":0,"display":"none"});
        $(this).children().children().first().children().eq(1).css({"opacity":1,"display":"block"});
        $(this).children().children().first().children().last().css("display","block")
    })
    $(".rigth_cloth").on("mouseleave","li",function(){
        $(this).children().children().first().children().first().css({"opacity":1,"display":"block"});
        $(this).children().children().first().children().eq(1).css({"opacity":0,"display":"none"});
        $(this).children().children().first().children().last().css("display","none")
    })
    //==========================清空所有========================
    $(".left_menu>.clear_all").on("click",function(){
        $(".ff>ul>li>a>i").css("background","#fff");
    })

  })