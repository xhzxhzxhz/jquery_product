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



