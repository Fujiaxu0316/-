var dl=document.getElementById('dl');
var zc=document.getElementById('zc');
var xyb=document.getElementById('xyb');
var bd=document.getElementById('bd');
var jianhao=document.getElementById('jianhao');
var jianhao1=document.getElementById('jianhao1');
var jianhao2=document.getElementById('jianhao2');
dl.onclick=function(){
	window.location.href="index2.html"
}
zc.onclick=function(){
	window.location.href="index3.html"
}
var hyh=document.getElementById('hyh');
var cyzm=document.getElementById('cyzm');
var arr=["0","1","2","3","4","5","6","7","8","9",
			"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
			"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
	]
		var str="";
		for(i=0;i<4;i++){
		 str+=arr[Math.floor( Math.random()*arr.length)];
			}cyzm.innerHTML=str;
	hyh.onclick=function(){
		var str="";
		for(i=0;i<4;i++){
		
		 str+=arr[Math.floor( Math.random()*arr.length)];
	}cyzm.innerHTML=str;
}

xyb.onclick=function(){
	if(bd.value===""){
		jianhao.style.display="block";
		jianhao1.style.display="none";
		jianhao2.style.display="none";
	}else if(yzm.value===""){
		alert("请输入验证码");
	}else if(/^[A-z0-9]{1,}@[A-z0-9]{1,}(\.com|\.cn|\.net)$/.test(bd.value)|/^\+\d{12,15}$/.test(bd.value)|
		/^[A-z0-9]{1,}$/.test(bd.value)&&yzm.value===cyzm.innerHTML){
		jianhao.style.display="none";
		jianhao1.style.display="none";
		jianhao2.style.display="block";
		alert("成功");
	}else{
		jianhao.style.display="none";
		jianhao1.style.display="block";
		jianhao2.style.display="none";
	}
}