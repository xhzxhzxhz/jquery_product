//点一级菜单触发二级菜单
$("#nav_second1").css("display","block");
var sexs=$("ul.sex");
sexs.on("mouseover","li",function(){
  var id=$(this).children().first().attr("data-target");
  $(id).show().siblings().hide();
})

//点二级菜单触发三级菜单

$("#nav_second1").on("mouseover","a",function(){
    var id=$(this).attr("data-target");
    $(id).show().siblings().hide();
})

$("#nav_second2").on("mouseover","a",function(){
  var id=$(this).attr("data-target");
  $(id).show().siblings().hide();
})
$("#nav_second3").on("mouseover","a",function(){
  var id=$(this).attr("data-target");
  $(id).show().siblings().hide();
})

$("#nav_third>div").on("mouseout","div",function(){
  $(this).hide();
})