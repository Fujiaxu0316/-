var hyh=document.getElementById('hyh');
var cyzm=document.getElementById('cyzm');
var dl=document.getElementById('dl');
var zc=document.getElementById('zc');
var tyzc=document.getElementById('tyzc');
dl.onclick=function(){
	window.location.href="index2.html"
}
zc.onclick=function(){
	window.location.href="index3.html"
}


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
var dg=document.getElementById('dg');
var dh1=document.getElementById('dh1');

dg.flag=true;
dg.onclick=function(){
	if(dg.flag){
		dh1.style.display="none";
		dg.flag=false;
		tyzc.style.background="#b9bdbe"
		tyzc.style.cursor="none";
		tyzc.style.disable="false"
	}else{
		dh1.style.display="block";
		dg.flag=true;
		tyzc.style.background="#ff8200"
		tyzc.style.cursor="pointer";

	tyzc.onclick=function(){
	if(/^\d{11}$/.test(srsjh.value)&&sryzm.value==cyzm.innerHTML&&srmm.value!==""){
		alert("成功")
	}else{
		alert("注册无效")
	}
}
	}
}
var djxl=document.getElementById("djxl");
var xzgj=document.getElementById("xzgj");
var remen=document.getElementById("remen");
var guojia=document.getElementById("guojia");
var arr1=["热门","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var arr2=["中国 86","俄罗斯 7","加拿大 1","中国台湾 886","德国 49","意大利 39","新加坡 65","新西兰 64",
		  "日本 81","法国 33","泰国 66","澳大利亚 61","中国澳门 853","美国 1","英国 44","菲律宾 63",
		  "西班牙 34","越南 84","韩国 82","中国香港 852"]
var str1="";
arr1.forEach(function(item){
	str1+=`<li class='rm'>${item}</li>`
})
remen.innerHTML=str1;
var str2="";
arr2.forEach(function(item){
	str2+=`<li class='gj'>${item}</li>`
})
guojia.innerHTML=str2;
djxl.flag=false
djxl.onclick=function(){
	if(djxl.flag){
		xzgj.style.display="none"
		djxl.flag=false
	}else{
	xzgj.style.display="block"
	djxl.flag=true
}
}
var gjs=document.querySelectorAll("#guojia .gj");
var jsgj=document.getElementById("jsgj");
for(c=0;c<gjs.length;c++){
	gjs[c].onclick=function(){
		jsgj.value=this.innerHTML;
		xzgj.style.display="none"
	}
}
var srsjh=document.getElementById("srsjh");
var srmm=document.getElementById("srmm");
var sryzm=document.getElementById("sryzm");
var jianhao=document.getElementById("jianhao");
var jianhao1=document.getElementById("jianhao1");
var jianhao2=document.getElementById("jianhao2");
var cyzm=document.getElementById("cyzm");
var jhm=document.getElementById("jhm");
var miaoshu=document.getElementById("miaoshu");
srsjh.onblur=function(){
	if(srsjh.value===""){
		jianhao.style.display="block"
		jianhao1.style.display="none"
		jianhao2.style.display="none"
	}else if(/^\d{11}$/.test(srsjh.value)){
		jianhao2.style.display="block"
		jianhao1.style.display="none"
		jianhao.style.display="none"
	}else{
		jianhao1.style.display="block"
		jianhao2.style.display="none"
		jianhao.style.display="none"
	}
}
srmm.onblur=function(){
	if(srmm.value===""){
		jianhao3.style.display="block"
		jianhao4.style.display="none"
	}else{
		jianhao4.style.display="block"
		jianhao3.style.display="none"
	}
}
sryzm.onblur=function(){
	if(sryzm.value===""){
		jianhao5.style.display="block"
		jianhao6.style.display="none"
		jianhao7.style.display="none"
	}else if(sryzm.value==cyzm.innerHTML){
		jianhao7.style.display="block"
		jianhao6.style.display="none"
		jianhao5.style.display="none"
	}else{
		jianhao6.style.display="block"
		jianhao7.style.display="none"
		jianhao5.style.display="none"
	}
}

jhm.onclick=function(){
	var timer="";
	miaoshu.innerHTML=10+" "+"S";
	miaoshu.style.display="block";
	jhm.style.display="none";
	var str=10;
	timer=setInterval(function(){
		str--;
	miaoshu.innerHTML=str+" "+"S";

	if(str===0){
		clearInterval(timer);
		miaoshu.style.display="none";
		jhm.style.display="block";
	}
	},1000)
}
