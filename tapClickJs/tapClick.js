var tapClick = {
	ele:"",
	toggleBg:function(){
		for(var i = 0; i < this.ele.length; i++){
			$(document).on("touchstart", "." + this.ele[i].el, function(){
				if(this.className == "btn") {
					$(this).css({"background":"#db4e45","color":"#ddd"});
				}else {
					$(this).css({"background":"#d9d9d9"});	
				}		
			}).on("touchend", "." + this.ele[i].el, function(){
				$(this).removeAttr("style");
			})
		}
	}
}