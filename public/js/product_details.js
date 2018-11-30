
$(function(){
    if(location.search.indexOf("psid=")!=-1){
      var psid=location.search.split("=")[1];
      (async function(){
        var res=await $.ajax({
                url:"http://localhost:3000/details",
                type:"get",
                data:{psid},
                dataType:"json"
        })
        //************************小图片*******************************************
        console.log(res);
        var product=res.product;
        product=product[0];
        var pics=res.pics;
        var $img_content=$(".img_content");
        var mImg=$(".middle-img>a>img");//中图片
        var lgDiv=$(".big-img");//大图片
        var html="";
        for(var pic of pics){
            var {sm,md,lg}=pic;
            html+=` <div class="img_box">
            <img src="${sm}" style="width:70px;height:93px" data-md="${md}" data-lg="${lg}">
            </div>` 
            lgDiv.css("background-image",`url(${lg})`);
        }
        var html1=`<img src="${md}">`;
        $(".middle-img>a").html(html1);

        $img_content.html(html);
        $img_content.css("height","93*pics.length+'px'");
       
        //鼠标进入每个小图片，切换中图片和大图片
        $("#s1").on("click",".img_box",function(e){
            var img=e.target;
           //img.parent().css("border","1px solid #666");
            var md=img.dataset.md;
            var md8=$(".middle-img>a>img");//1
            var lg=img.dataset.lg;
            md8.attr("src",md);
            lgDiv.css("background-image",`url(${lg})`);
    
        })
         //**************************小图片左右移动*********************************
        var $top=//找到上边按钮-后退按钮
            $("prev_button")
        //找到右边按钮-前进按钮
        var $bottom=$("next_button")
        //如果pics中图片总数<=5
        if(pics.length<=5)
            //为下按钮添加disabled class
            $bottom.addClass("disabled")
        var moved=0;//记录已经上移的图片个数
        $top.on("click",function(){
            var $top=$(this);
            if(!$top.is(".disabled")){
                moved--;//已经左移的图片个数-1
            //ul的marginLeft始终等于:-li宽度62*左移图片个数
            $ul.css("marginBottom",-93*moved)//不用px
            $bottom.removeClass("disabled")
            if(moved==0)
                $top.addClass("disabled")
            }
        })
        //遮罩层和大图片都是根据移入移出中图片来控制
            var $mImg=$(mImg),//中图片
            $lgDiv=$(lgDiv),//大图片
            $mask=$("#mask"),//半透明遮罩
            $smask=$("#super-mask");//透明玻璃板
        var MSIZE1=250,//mask的大小
            MSIZE2=350,
            MAX1=560-MSIZE1+102,//left的最大值
            MAX2=710-MSIZE2;//top的最大值
        $smask
        .hover(
            function(){
            $mask.toggleClass("d-none");
            $lgDiv.toggleClass("d-none");
            }
        )
        .mousemove(function(e){
            var left=e.offsetX-MSIZE1/2;
            var top=e.offsetY-MSIZE2/2;
            if(left<102) left=102; 
            else if(left>MAX1) left=MAX1;
            if(top<0) top=0;
            else if(top>MAX2) top=MAX2;
            $mask.css({left,top});
            $lgDiv.css("background-position",
            `-${54/41*left}px -${2*top}px`)
        })
        //*****************加载商品详细信息***********************************
        var html1=` <p class="new_clo"><em>新季</em></p>
        <div class="clo_title">
            <span class="brand"><a href="#">${product.p_brand}</a></span>
            <span class="clo_item">${product.pc_title}</span>
        </div>
        <div class="priceNew">
            <span class="price_now">
                <span>￥${product.pc_price}</span>
                <em>¥12236</em>
            </span>
            <span class="glodprice">
                <span class="glodpriceOne">金牌优惠</span>
                <span class="glodpriceTwo">成为金牌会员下单再减 <span style="  color: #0700c5; margin: 0 5px;">460</span>元</span>
                <span class="glodpriceThree"><a href="#">开通金牌会员></a></span>
            </span>
        </div>
       
        <ul class="clo_color">
            <li>
                <em><b></b></em>
                <span>${product.pc_color}</span></li>
        </ul>
        
        <div class="select_size">
            <ul class="size_list">
                <li><em><b>S</b></em></li>
                <li><em><b>M</b></em></li>
                <li><em><b>X</b></em></li>
                <li><em><b>XL</b></em></li>
                <li><em><b>XXL</b></em></li>
            </ul>
            <div class="stock">
                <span></span>
                <p></p>
            </div>
            <a href="#" class="dz_size">尺码对照</a>
        </div>
        <div class="size_block">
            <div class="block_content">
                <h3>尺码对照表</h3>
                <a href="#">X</a>
                <img src="img/sizeb.png" alt="">
            </div>
        </div>
        
        <div class="jg">
            <a href="shopping.html?psid=${product.psid}" data-lid="${product.psid}">加入购物袋</a>
        </div>
        <div class="select_wish">
            <a href="#">加入愿望清单</a>
            <em></em>
        </div>
        <div class="returnChan">
            <div class="returnOne">
                <img src="img/cai.jpg" alt="">
                <p>海外专柜直采</p>
            </div>
            <div class="returnTwo">
                <img src="img/seven.jpg" alt="">
                <p>不支持7天无理由退换</p>
            </div>
        </div>
        `;
        $(".product_js_content").html(html1);

        
       
        
        //******************手风琴效果***********************************************
        $(".accordion").on("click",".title",function(){
            var $title=$(this); 
            $title.next().toggleClass("in").siblings(".container").removeClass("in");
        })
         //**************************尺码表***********
         $(".dz_size").on("click",function(e){
            e.preventDefault();
            $(".size_block").css("display","block");
        })
        $(".block_content>a").on("click",function(e){
            e.preventDefault();
            $(".size_block").css("display","none");
        })

        //**************加入购物车******************************
        var html2="";
        $(".jg>a").on("click",function(e){
            e.preventDefault();
              (async function(){
                var res=await $.ajax({
                  url:"http://localhost:3000/user/islogin",
                  type:"get",
                  dataType:"json"
                });
                console.log(res);
                if(res.ok==1){
                  var psid=$(".jg").children().attr("data-lid");
                  var uid=$(".mine").attr("data-uid")//如何获取uid
                  await $.ajax({
                    url:"http://localhost:3000/cart/add",
                    type:"get",
                    data:{uid,psid},
                    success: function() {
                      $(".cart_bag").css("display","block");
                      setTimeout(function(){
                        $(".cart_bag").css("display","none");
                      },4000)
                      html2+=`<li>
                          <a href="#"><img src="${sm}" alt=""></a>
                          <div class="wp_mc">
                              <p>${product.p_brand}</p>
                              <p>${product.pc_title}</p>
                          </div>
                          
                          <p class="wp_price">
                          ￥<strong>${product.pc_price}</strong>
                              <i>￥1170</i>
                              <a href="#" class="delete_sp" data-psid="${product.psid}">删除</a>
                          </p>
                      </li>`;
                      $(".bag_wp").html(html2);

                    
                      //总价
                      var num_li=$(".bag_wp").children();
                      var total_number=num_li.length;
                      $(".yx_pr>.yx_number>span").html(total_number);//总数
                      var total_price=0;
                      var bg=$(".bag_wp>li>p>strong");
                      for(var bo=0;bo<bg.length;bo++)
                            total_price+=parseFloat(bg[bo].innerHTML);
                       $(".yx_pr>.yx_price>span").html(total_price);
                     //点击删除
                       var iid=res.iid;
                       console.log(iid);
                       $(".delete_sp").on("click",function(){
                         $(this).parent().parent().css("display","none");
                         console.log(total_number);
                         total_number--;
                         $(".yx_pr>.yx_number>span").html(total_number);//总数
                         // await $.ajax({
                         //     url:"http://localhost:3000/cart/update",
                         //     type:"get",
                         //     data:{count,iid},
                         //     success: function() {}
                         // })   
                       })
                      
                      
                    }

                  })
                  
                }else alert("请先登录,才能使用购物车🙂!");
              })()
             
          });
      
        //点击购物车
        $(".bag").on("click",function(){
            location.href="shopping.html";
        })
        $(".bag").on("mouseover",function(){
            $(".cart_bag").css("display","block");
        })
        $(".bag").on("mouseout",function(){
            $(".cart_bag").css("display","none");
        })
        //点击结算
      
        var js=$(".yx_pr").next();
        console.log( $(js));
        $(js).on("click",function(){
            location.href="shopping.html";
        })
      })()
     
       
       
     } 
 
})



