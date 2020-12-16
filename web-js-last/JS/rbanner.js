var lbanner1 = document.getElementById("lbanner1");
var lbanner2 = document.getElementById("lbanner2");
var lbanner3 = document.getElementById("lbanner3");
var rbanner1 = document.getElementById("rbanner1");
var rbanner2 = document.getElementById("rbanner2");
var rbanner3 = document.getElementById("rbanner3");
var rright = document.getElementById("rright");
var lleft = document.getElementById("lleft");
var lright = document.getElementById("lright");
var rleft = document.getElementById("rleft");
var judge2 = true;
var num4 = 0;
var num5 = 496;
var num6 = -496;
var time1 = 0;
rleft.onclick = function(){

	var speed = 31;
	var judge1 = false;
	if(judge2 == true){
		var timeid1 =  setInterval(function(){
		if(rbanner1.style.left == "-496px"){
			console.log("2");
			num5 = 992;
		}
		if(rbanner2.style.left=="-496px"){
			num4 = 992;
		}	
		if(rbanner3.style.left=="-496px"){
			num6 = 992;
		}
		judge2 = false;	
		if(judge1 == true && time1 % 496 == 0 ){
			judge2 = true;	
			judge1 = false;
			clearInterval(timeid1);	
		}
		judge1 = true;
		rbanner2.style.left = num4+"px";
		rbanner1.style.left = num5+"px";
		rbanner3.style.left = num6+"px";
		num4-=speed;
		num5-=speed;
		num6-=speed;
		time1+=speed;
		speed--;
	},20)
	}
}
rright.onclick = function(){

	var speed = 31;
	var judge1 = false;
	if(judge2 == true){
		var timeid1 =  setInterval(function(){
		if(rbanner1.style.left == "496px"){
			console.log("2");
			num5 = -992;
		}
		if(rbanner2.style.left=="496px"){
			num4 = -992;
		}	
		if(rbanner3.style.left=="496px"){
			num6 = -992;
		}
		judge2 = false;	
		if(judge1 == true && time1 % 496 == 0 ){
			judge2 = true;	
			judge1 = false;
			clearInterval(timeid1);	
		}
		judge1 = true;
		rbanner2.style.left = num4+"px";
		rbanner1.style.left = num5+"px";
		rbanner3.style.left = num6+"px";
		num4+=speed;
		num5+=speed;
		num6+=speed;
		time1+=speed;
		speed--;
	},20)
	}
}