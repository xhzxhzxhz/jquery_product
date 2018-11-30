
$(function(){      
    (async function(){
        var res=await $.ajax({
            url:"http://localhost:3000/user/islogin",
            type:"get",
            dataType:"json"
        });//判断是否登录
        if(res.ok==1){
            var uname=res.uname;
            var uid=res.uid;
            $("#currentUser").html(uname);
            var res1=await $.ajax({
            url:"http://localhost:3000/cart/items",
            type:"get",
            dataType:"json"                   
            })  
            var html="";
            for(var product of res1){
              
                html+=`<ul>
                <li class="td chk"><input type="checkbox" class="cb" data-psid="${product.psid}"/></li>
                    <li class="td clo">
                        <div class="cloth">
                            <a href="#"><img src="${product.sm}" /></a>
                        </div>
                        <div class="cloth-info">
                            <p><a href="#">${product.ps_brand}</a></p>
                            <p><a href="#">${product.ps_title}</a></p>
                            <p><a href="#"><em>${product.ps_size}</em></a></p>
                            <p class="not_zc">
                                <img src="shopping/seven-th.jpg" alt="" />
                                <b>不支持7天无理由退换货</b>
                            </p>
                        </div>
                    </li>
                    <li class="td price">
                        <span>￥</span>
                        <span>${product.ps_old_price}</span>
                        ￥<del>${product.ps_new_price}</del>
                    </li>
                    <li class="td number">
                        <div>
                            <span class="amount_minus"></span>
                            <input type="text" value="${product.count}"/>
                            <span class="amount_plus"></span>
                        </div>
                    </li>
                    <li class="td total">
                      ￥<span>${product.ps_new_price}</span>
                    </li>
                    <li class="td control">
                        <div class="sc">
                            <a href="#" class="collect">收藏</a>
                        </div>
                        <a href="#" class="delete">删除</a>
                    </li>
                </ul>`;
            } 
            $(".gwc").html(html);                  
       
        $(".my1").on("click",function(){
            $(".spTabs").css("display","block");
            $(".zf_info").css("display","none");
            //$("div.my3").css("display","none");
        })
        $(".my2").on("click",function(){
            $(".zf_info").css("display","block");
            $(".spTabs").css("display","none");
            // $("div.my3").css("display","none");
        })
        //=================全选功能============================
        
        
        $(".th_chkall>label>input").on("click",function(){
            $(".gwc>ul>li>input").prop("checked",true);    
        })
        $(".gwc>ul").on("click","li>input",function(){
            if($(this).prop("checked")==false)
                $(".th_chkall>label>input").prop("checked",false);
            else{//尝试查找tbody下未选中的chb
                var unchecked=$(this).parent().parent().siblings().children().first().children().prop("checked");
                if(unchecked==false)//如果找到
                    $(".th_chkall>label>input").prop("checked",false);
                else//否则
                    $(".th_chkall>label>input").prop("checked",true);
            }
        })

        //===========删除所选======================
        
        $(".scsx").on("click",function(){
            $(".gwc>ul>li>input:checkbox:checked").parent().parent().remove();
        })
        //============每项删除=======================
        $(".delete").on("click",function(){
            $(this).parent().parent().remove();
        })
         //======================选中项的总价和总数显示================
        $(".cb").click(function(){
            var val=0;
            var num=0;
            $("[class='cb']:checked").each(function(){
                val+=parseInt($(this).parent().parent().children().last().prev().children().last().html());
                num+=parseInt($(this).parent().parent().children().last().prev().prev().children().children().last().prev().val()); 
                
            
             })

            $(".bottom-right").children().first().children().last().html(num);
            $(".bottom-right").children().last().children().last().html(num);
            $(".bottom-right").children().last().prev().children().html(val);

            if($(".bottom-right").children().last().children().html()!==0){
                $(".bottom-right").children().last().css({"background":"#0700c5","color":"#fff"})
            }
        });      
       
        //==============点击结算=====================
        $(".bottom-right>a").on("click",function(){
            var hw=[];
            $("[class='cb']:checked").each(function(i){   

                var psid=$(this).attr("data-psid");
                var count=parseInt($(this).parent().parent().children().last().prev().prev().children().children().last().prev().val());
                 hw[i]={psid:psid,count:count};
            })
            for(var i=0;i<hw.length;i++){
                psid=hw[i].psid;
                count=hw[i].count;
                (async function(){
                    await $.ajax({
                        url:"http://localhost:3000/order/checkOrder",
                        type:"get",
                        data:{psid,count},
                        success:function(){
                        }               
                    })  
                })()
            }
            var qrzf=$(".bottom-right").children().last().prev().children().html();
   
            $(".zf-bottom").children().first().children().last().children().last().html(qrzf);
            $(".aa>p>span").html(qrzf);
            $(".qrzf>p>span").html(qrzf);
    
        })
       
        //============点击+ -号====================    
        $(".gwc").on("click","span",function(e){
            e.preventDefault();
            var number=$(this).parent().children().first().next().val();
            var $span=$(this);
                if($span.attr("class")=="amount_plus"){
                    number++;
                }
                else if(number>0){
                    number--;
                } 
                var price=$(this).parent().parent().prev().children().last().html();
               
                var total=parseInt(price*number);
                $(this).parent().children().first().next().val(number);
                $(this).parent().parent().next().children().first().html(total);
               

                //====================商品总数===============================
                var ul_all=$(".gwc>ul");
                var total_number=0;
                var total_price=0;
                for(var ul_c=0;ul_c<ul_all.length;ul_c++){
                    var $ul_c=ul_all[ul_c];
                   

                    var ul_number=$($ul_c).children().last().prev().prev().children().children().first().next().val();
                    total_number+=parseInt(ul_number);
        
                    var ul_price=$($ul_c).children().last().prev().children().first().html();
                    total_price+=parseInt(ul_price);
                }
        
                $(".bottom-right").children().first().children().html(total_number);
                $(".bottom-right").children().last().children().html(total_number);
                //====================总价======================================
                total_price="￥"+total_price;
                $(".bottom-right").children().last().prev().children().html(total_price);
              
                

               
        })
          //====================结算======================================
          var js=$(".bottom-right").children().last();
          $(js).on("click",function(){//填写信息
              $(".zf_info").css("display","block");
               $(".spTabs").css("display","none");
               $(".my2").addClass("current");
      
          })

        
        //===============保存收货地址=============================
        $(".bc").on("click",function(){
            var user_name=$(".srk1>input").val();
            var address=$(".srk2>input").val();
            var post=$(".srk3>input").val();
            var user_phone=$(".srk4>input").val();
         
            (async function(){
                await $.ajax({
                    url:"http://localhost:3000/order/orderInfo",
                    type:"get",
                    data:{uid,user_name,address,post,user_phone},
                    success:function(){
                        alert("保存成功");

                        $(".zf-bottom>a").on("click",function(){//提交订单
                            $(".my3").addClass("current");
                            $(".zf_info").css("display","none");
                            $(".spTabs").css("display","none");
                            $(".txzf").css("display","block");
                            (async function(){
                   
                                var res5=await $.ajax({
                                    url:"http://localhost:3000/order/selectOrder",
                                    type:"get",
                                    dataType:"json"            
                                }) 
                                $(".name").html(res5.uname); 
                                $(".phone").html(res5.phone); 
                                $(".address").html(res5.address); 
                            })()
                
                        })

                    }               
                })  
            })()
           
        })
        $(".personal").on("click",function(){
            location.href="personal.html";
        })
      
        }else alert("请先登录,才能使用购物车🙂!");
    })()
      
   
})  
 