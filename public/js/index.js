$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/index/get_IndexProducts",
        type:"get",
        dataType:"json",
        success:function(res){
             //cloth1
        var p=res.slice(0,1)
        var {pic}=p[0];
        var html=`
        <a href="#" class="effect">
        <div style="width:1200px;height:750px">
            <img src="${pic}" style="width: 1200px;height: 750px"/>
        </div>
        </a>
            `;

        var divCard=document.querySelector(".cloth1");
        divCard.innerHTML=html;
        //cloth2
        var p=res.slice(1,2)
        var {pic}=p[0];
        var html=`
        <a href="#">
        <div style="width:1200px">
            <img src="${pic}" style="width:1200px"/>
        </div>
        
         </a>
            `;

        var divCard=document.querySelector(".cloth2");
        divCard.innerHTML=html;

        //cloth3
        var p=res.slice(2,3)
        var {pic,title,details}=p[0];
        var html=`
                <div>
                    <img src="${pic}"/>
                </div>
                <p>${title}</p>
                <p>${details}</p>
            `;

        var divCard=document.querySelector(".cloth3-1");
        divCard.innerHTML=html;

       var p=res.slice(3,4);
        var {pic,title,details}=p[0];
        var html=`
                <div>
                    <img src="${pic}"/>
                </div>
                <p>${title}</p>
                <p>${details}</p>
            `;
        var divCard=document.querySelector(".cloth3-2");
        divCard.innerHTML=html;
        //cloth4
        
        var p=res.slice(4,5)
        var {pic,title,details}=p[0];
        var  html=`
        <div style="width: 807px;height:488px;">
            <img src="${pic}" style="width: 807px;height:488px;"/>
        </div>
        <p>${title}</p>
        <p>${details}</p>
        `;
        var divCard=document.querySelector(".cloth4-1");
        divCard.innerHTML=html;

        var p=res.slice(5,6)
        var {pic,title,details}=p[0];
        var  html=`
        <div style="width: 365px;height: 487px;">
        <img src="${pic}" style="width: 365px;height: 487px;"/>
        </div> 
        <p>${title}</p>
        <p>${details}</p>
        `;
        var divCard=document.querySelector(".cloth4-2");
        divCard.innerHTML=html;
        //cloth5
        var p=res.slice(6,7)
        var {pic,title,details}=p[0];
        var  html=`
        <div style="width: 365px;height: 487px;">
        <img src="${pic}" style="width: 365px;height: 487px;"/>
        </div> 
        <p>${title}</p>
        <p>${details}</p>`;
        var divCard=document.querySelector(".cloth5-1");
        divCard.innerHTML=html;


        var p=res.slice(7,8)
        var {pic,title,details}=p[0];
        var  html=`
        <div style="width:807px;height:487px">
        <img src="${pic}" style="width:807px;height:487px"/>
        </div> 
        <p>${title}</p>
        <p>${details}</p>`;

        var divCard=document.querySelector(".cloth5-2");
        divCard.innerHTML=html;
        //cloth6
        var p=res.slice(8,9)
        var {pic,title,details}=p[0];
        var  html=`
        <div style="width:807px;height:487px">
						<img src="${pic}" style="width:807px;height:487px"/>
					</div>
					
					<p>${title}</p>
					<p>${details}</p>`;

        var divCard=document.querySelector(".cloth6-1");
        divCard.innerHTML=html;

        var p=res.slice(9,10)
        var {pic,title,details}=p[0];
        var  html=`
        <div style="width:365px;height:487px">
						<img src="${pic}" style="width:365px;height:487px"/>
					</div>
					<p>${title}</p>
					<p>${details}</p>`;

        var divCard=document.querySelector(".cloth6-2");
        divCard.innerHTML=html;
         //cloth7
            var p=res.slice(10,11)
            var {pic,title,details}=p[0];
            var  html=`
            <div style="width:380px;height:506px">
            <img src="${pic}" style="width:380px;height:506px"/>
            </div>
            <p>${title}</p>
            <p>${details}</p>`;
        
            var divCard=document.querySelector(".cloth7-1");
            divCard.innerHTML=html;

            var p=res.slice(11,12)
            var {pic,title,details}=p[0];
            var  html=`
            <div style="width:380px;height:506px">
            <img src="${pic}" style="width:380px;height:506px"/>
           </div>
           <p>${title}</p>
           <p>${details}</p>`;
            var divCard=document.querySelector(".cloth7-2");
            divCard.innerHTML=html;

            var p=res.slice(12,13)
            var {pic,title,details}=p[0];
            var  html=`
            <div style="width:380px;height:506px">
            <img src="${pic}" style="width:380px;height:506px"/>
           </div>
           <p>${title}</p>
           <p>${details}</p>`;
            var divCard=document.querySelector(".cloth7-3");
            divCard.innerHTML=html;
   
            //cloth8
            var p=res.slice(13,14)
            var {pic,title,details}=p[0];
            var  html=`
            <div style="width:585px;height:367px">
            <img src="${pic}" style="width:585px;height:367px"/>
            </div> 
            <p>${title}</p>
            <p>${details}</p>`;
            var divCard=document.querySelector(".cloth8-1");
            divCard.innerHTML=html;

            var p=res.slice(14,15)
            var {pic,title,details}=p[0];
            var  html=`
            <div style="width:585px;height:367px">
						<img src="${pic}" style="width:585px;height:367px"/>
					</div>
					<p>${title}</p>
					<p>${details}</p>`;
            var divCard=document.querySelector(".cloth8-2");
            divCard.innerHTML=html;
            //cloth9
            var p=res.slice(15,16)
            var {pic,title,details}=p[0];
            var  html=`
            <div style="width:380px;height:506px">
						<img src="${pic}" style="width:380px;height:506px"/>
					</div>
					<p>${title}</p>
					<p>${details}</p>	`;
            var divCard=document.querySelector(".cloth9-1");
            divCard.innerHTML=html;

            var p=res.slice(16,17)
            var {pic,title,details}=p[0];
            var  html=`
            <div style="width:380px;height:506px">
						<img src="${pic}" style="width:380px;height:506px"/>
					</div>					
					<p>${title}</p>
					<p>${details}</p>`;
            var divCard=document.querySelector(".cloth9-2");
            divCard.innerHTML=html;

            var p=res.slice(17,18)
            var {pic,title,details}=p[0];
            var  html=`
            <div style="width:380px;height:506px">
						<img src="${pic}" style="width:380px;height:506px"/>
					</div>					
					<p>${title}</p>
					<p>${details}</p>`;
            var divCard=document.querySelector(".cloth9-2");
            divCard.innerHTML=html;

            var p=res.slice(18,19)
            var {pic,title,details}=p[0];
            var  html=`
            <div style="width:380px;height:506px">
						<img src="${pic}" style="width:380px;height:506px"/>
					</div>					
					<p>${title}</p>
					<p>${details}</p>`;
            var divCard=document.querySelector(".cloth9-3");
            divCard.innerHTML=html;
            //cloth10
            var p=res.slice(19,20)
            var {pic,title,details}=p[0];
            var  html=`
            <div style="width:365px;height:487px;">
            <img src="${pic}" style="width:365px;height:487px;"/>
            </div>
        
            <p>${title}</p>
            <p>${details}</p>`;
            var divCard=document.querySelector(".cloth10-1");
            divCard.innerHTML=html;

            var p=res.slice(19,20)
            var {pic,title,details}=p[0];
            var  html=`
            <div style="width:807px;height:488px">
						<img src="${pic}" style="width:807px;height:488px"/>
					</div>
					
					<p>${title}</p>
					<p>${details}}</p>`;
            var divCard=document.querySelector(".cloth10-2");
            divCard.innerHTML=html;

            //bottom
            var p=res.slice(19,20)
            var {pic,title,details}=p[0];
            var  html=`
            <div style="width:807px;height:488px">
						<img src="${pic}" style="width:807px;height:488px"/>
					</div>
					
					<p>${title}</p>
					<p>${details}}</p>`;
            var divCard=document.querySelector(".cloth10-2");
            divCard.innerHTML=html;

            $("img").on("click",function(){
                location.href=`products.html?kwords=新季`;
            })
        }
    })  

//左按钮
var $left_button=$(".left-button");
var $right_button=$(".right-button");
var $slideo=$(".slideo_trs");
var moved=0;
$left_button.on("click",function(){
	var $left_button=$(this);
	moved--;
	$slideo.css("marginLeft",-214*moved);
	if(moved<-5){
		moved++;
		$slideo.css("marginLeft",-214*moved);
	}
})
$right_button.on("click",function(){
	var $right_button=$(this);
	var $slideo=$(".slideo_trs");
	moved++;
	$slideo.css("marginLeft",-214*moved);
	if(moved>1){
		moved--;
		$slideo.css("marginLeft",-214*moved);
	}
	
})

    //侧边栏
    $(".right").on("mouseenter","img",function(e){
        e.stopPropagation();
        $(this).css("display","none");
        $(this).siblings().css("display","block");
    })
    $(".right").on("mouseleave","img",function(e){
        e.stopPropagation();
        $(this).css("display","block");
        $(this).siblings().css("display","none");
    })


})
