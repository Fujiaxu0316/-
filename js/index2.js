var dl=document.getElementById('dl');
var zc=document.getElementById('zc');
var yhdl=document.getElementById('yhdl');
var yhzc=document.getElementById('yhzc');
var smewm=document.getElementById('smewm');
var bd=document.getElementById('bd');
var bd1=document.getElementById('bd1');
var xz=document.getElementById('xz');
var bbdd=document.getElementById('bbdd');
var zhdl=document.getElementById('zhdl');
var yzmdl=document.getElementById('yzmdl');
var srk=document.getElementById('srk');
dl.onclick=function(){
	window.location.href="index2.html"
}
zc.onclick=function(){
	window.location.href="index3.html"
}

smewm.flag=false;

smewm.onclick=function(){
	
	if(smewm.flag){
	smewm.style.background="url(images/poi.png)";
	smewm.flag=false;

	bd1.style.display="none"

	bd.style.display="block"
	xz.style.display="block";

}else{
	smewm.style.background="url(images/poi.png) -58px -57px";
	smewm.flag=true;
	bd1.style.display="block"
	bd.style.display="none"
	bbdd.style.display="none"
	xz.style.display="none"
}
}
					
var arr=["使用去哪儿客户端",
		"手机扫描安全登录",
		"1.打开去哪儿手机客户端并登录去哪儿账号",
		"2.在去哪儿登录页点击右上角扫描安全登录",
		"3.使用去哪儿客户端左上角扫描功能完成登录",
		"url(images/qqq.png)"
		]
var kehuduan=document.getElementById('kehuduan');
var ctp=document.getElementById('ctp');
var str="";
str="<p class='lanse'>"+arr[0]+"</p><p class='lanse'>"+arr[1]+"</p><p class='huise'>"+arr[2]+"</p><p class='huise'>"+arr[3]+"</p><p class='huise'>"+arr[4]+"</p>"
kehuduan.innerHTML=str;
ctp.style.background="url(images/qqq.png)"

var hyh=document.getElementById('hyh');
var cyzm=document.getElementById('cyzm');
var hyh1=document.getElementById('hyh1');
var cyzm1=document.getElementById('cyzm1');
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
var dh=document.getElementById('dh');
var dg1=document.getElementById('dg1');
var dh1=document.getElementById('dh1');
dg.flag=true;
dg.onclick=function(){
	if(dg.flag){
		dh.style.display="none";
		dg.flag=false;
	}else{
		dh.style.display="block";
		dg.flag=true;
	}
}
dg1.flag=true;
dg1.onclick=function(){
	if(dg1.flag){
		dh1.style.display="none";
		dg1.flag=false;
	}else{
		dh1.style.display="block";
		dg1.flag=true;
	}
}
zhdl.onclick=function(){
	bd.style.display="block"
	bbdd.style.display="none"
}
yzmdl.onclick=function(){
	bbdd.style.display="block"
	bd.style.display="none"
}


var dlan=document.getElementById("dlan");
var cyzm=document.getElementById("cyzm");
var yzm=document.getElementById("yzm");
var zh=document.getElementById("zh");
var mm=document.getElementById("mm");
dlan.onclick=function(){
		var ajax=new XMLHttpRequest;
		ajax.open("post","dl.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("user="+zh.value+"&password="+mm.value);
		ajax.onreadystatechange=function(){
			if(ajax.readyState===4&&ajax.status===200){
				console.log(ajax.responseText)
			var a=JSON.parse(ajax.responseText).code;
			if(a==0){
				alert("用户名不存在")
			}else if(a==1&&yzm.value!==cyzm.innerHTML){
				alert("验证码不正确")
			}else if(a==1&&yzm.value==cyzm.innerHTML){
				alert("登录成功")
			}else {
				alert("密码错误")
			}
			}
		}
	}



var dx=document.getElementById("dx");
var dx1=document.getElementById("dx1");
	dx.onclick=function(){
	var timer="";
	dx1.innerHTML=10+" "+"S";
	dx1.style.display="block";
	dx.style.display="none";
	var str=10;
	timer=setInterval(function(){
		str--;
	dx1.innerHTML=str+" "+"S";

	if(str===0){
		clearInterval(timer);
		dx1.style.display="none";
		dx.style.display="block";
	}
	},1000)
}