var buttons = document.getElementsByClassName('sign1');
var cover = document.getElementById("cover");
var cover1 = document.getElementById("cover1");
var alert = document.getElementById("alert");
var  tops = document.getElementsByClassName("top clear");
var judgeone;
var judgetwo;
console.log(tops[0]);
buttons[3].onclick = function(){
	cover.style.display = "inline-block";
	cover1.style.display = "inline-block";
	alert.style.display = "inline-block";

}

function usernamereq(){
	var x = document.getElementById("one");
	console.log(x.value == "");
	var y = document.getElementsByClassName("focus");
	if(x.value == ""){
		judgeone=false;
	}else{	
	    judgeone=true;
	}
	console.log(judgeone);
}
function keyreq(){
	var x = document.getElementById("two");
	var y = document.getElementsByClassName("focus");
	console.log(x.value == "");
	if(x.value == ""){
		judgetwo=false;
	}else{	
	    judgetwo=true;
	}	

}
function register(){
	x= document.getElementById("people");
	var y = document.getElementById("one");
	var z = document.getElementById("two");
	console.log(judgeone);
	if(judgetwo==true && judgeone==true ){
		cover.style.display = "none";
	    cover1.style.display = "none";
	    alert.style.display = "none";
	    tops[0].style.display ="none";
	    tops[1].style.display ="inline-block";
		x.innerHTML ="用户名："+y.value;
	}
}