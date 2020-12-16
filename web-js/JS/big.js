
var imgs = document.getElementsByClassName("imgs");
var timeid2;
var timeid3;
var timeid4;
var timeid5;
var timeid6;
var timeid7;
var timeid8;
var timeid9;
var n1=300;
var n2=300;
var n3=300;
img2.onmouseover = function(){
	clearInterval(timeid3);
	clearInterval(timeid5);
	timeid2 =  setInterval(function(){
		imgs[1].style.width=n1+"px";
		imgs[1].style.height=n1*(2/3)+"px";
		n1+=12;
		if(n1 == 540){
			clearInterval(timeid2);
		}
	},1)
	 timeid4 =  setInterval(function(){
	 	
		
		imgs[0].style.width = n2+"px";
		imgs[2].style.width = n2+"px";
		imgs[3].style.width = n2+"px";
		n2-=12/3;
		
		if(parseInt(n2) == 220){
			clearInterval(timeid4);
		}
	},1)
}
img2.onmouseout = function(){
	clearInterval(timeid2);
	clearInterval(timeid4);
	timeid3 = setInterval(function(){
		
		n1-=12;
		imgs[1].style.width=n1+"px";
		imgs[1].style.height=n1*(2/3)+"px";		
		if(n1 <= 300){
			clearInterval(timeid3);
		}

	},1)

	 timeid5 =  setInterval(function(){
		n2+=12/3;
		imgs[0].style.width = n2+"px";
		imgs[2].style.width = n2+"px";
		imgs[3].style.width = n2+"px";
		
		if(n2 >= 300){
			clearInterval(timeid5);
		}
	},1)
}

// img2.onmouseover = function(){
// 	clearInterval(timeid3);
// 	clearInterval(timeid5);
// 	timeid2 =  setInterval(function(){
// 		img2.style.width=num4+"px";
// 		num4+=12;
// 		if(num4 == 300){
// 			clearInterval(timeid2);
// 		}
// 	},1)
// 	 timeid4 =  setInterval(function(){
	 	
// 		if(parseInt(ul.style.width)<=parseInt(document.body.style.width));
// 		img1.style.width = num5+"px";
// 		img3.style.width = num5+"px";
// 		img4.style.width = num5+"px";
// 		num5-=12/3;
		
// 		if(parseInt(num5) == 140){
// 			clearInterval(timeid4);
// 		}
// 	},1)
// }
// img2.onmouseout = function(){
// 	clearInterval(timeid2);
// 	clearInterval(timeid4);
// 	timeid3 = setInterval(function(){
		
// 		num4-=12;
// 		img2.style.width=num4+"px";
// 		if(num4 == 180){
// 			clearInterval(timeid3);
// 		}

// 	},1)

// 	 timeid5 =  setInterval(function(){
// 		num5+=12/3;
// 		img1.style.width = num5+"px";
// 		img3.style.width = num5+"px";
// 		img4.style.width = num5+"px";
		
// 		if(num5 == 180){
// 			clearInterval(timeid5);
// 		}
// 	},1)
// }