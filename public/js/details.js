window.onload=function(){
    if(location.search.indexOf("lid=")!=-1){
        var lid=location.search.split("=")[1];
        (async function(){
            var res=await ajax({
                url:"http://127.0.0.1:3000/details",
                type:"get",
                data:"psid="+psid,
                dataType:"json"
            })
            console.log(res);
            var {product,pics,specs}=res;
            var {title,subtitle,price,promise}=product;
            var divDetails=document.getElementById("details");
            divDetails.children[0].innerHTML=title;
            divDetails.children[1].children[0].innerHTML=subtitle;
            divDetails.children[2].children[0].children[1].innerHTML="￥"+price.toFixed(2);
            divDetails.children[2].children[1].children[1].innerHTML=promise;

            var html="";
            for(var sp of specs){
                html+=`<a class="btn btn-sm btn-outline-secondary ${sp.psid==psid?'active':''}" href="product_details.html?psid=${sp.psid}">
                ${sp.spec}</a>`;
               
            }
            divDetails.children[4].children[1].innerHTML=html;
          
        })()
    }
}