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
var num1 = 0;
var num2 = 496;
var num3 = -496;
var time1 = 0;
lleft.onclick = function(){

	var speed = 31;
	var judge1 = false;
	if(judge2 == true){
		var timeid1 =  setInterval(function(){
		if(lbanner1.style.left == "-496px"){
			console.log("2");
			num2 = 992;
		}
		if(lbanner2.style.left=="-496px"){
			num1 = 992;
		}	
		if(lbanner3.style.left=="-496px"){
			num3 = 992;
		}
		judge2 = false;	
		if(judge1 == true && time1 % 496 == 0 ){
			judge2 = true;	
			judge1 = false;
			clearInterval(timeid1);	
		}
		judge1 = true;
		lbanner2.style.left = num1+"px";
		lbanner1.style.left = num2+"px";
		lbanner3.style.left = num3+"px";
		num1-=speed;
		num2-=speed;
		num3-=speed;
		time1+=speed;
		speed--;
	},20)
	}
}
lright.onclick = function(){

	var speed = 31;
	var judge1 = false;
	if(judge2 == true){
		var timeid1 =  setInterval(function(){
		if(lbanner1.style.left == "496px"){
			console.log("2");
			num2 = -992;
		}
		if(lbanner2.style.left=="496px"){
			num1 = -992;
		}	
		if(lbanner3.style.left=="496px"){
			num3 = -992;
		}
		judge2 = false;	
		if(judge1 == true && time1 % 496 == 0 ){
			judge2 = true;	
			judge1 = false;
			clearInterval(timeid1);	
		}
		judge1 = true;
		lbanner2.style.left = num1+"px";
		lbanner1.style.left = num2+"px";
		lbanner3.style.left = num3+"px";
		num1+=speed;
		num2+=speed;
		num3+=speed;
		time1+=speed;
		speed--;
	},20)
	}
}
