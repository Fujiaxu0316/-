var shouye=document.getElementById('shouye');
shouye.onclick=function(){
	window.location.href="index.html"
}
var nrqh=document.getElementById('nrqh');
var dmqh=document.getElementById('dmqh');
function ajax1(url,str){
var ajax1=new XMLHttpRequest;
	ajax1.open("get",url+"?"+str,true)
	ajax1.send(null);
	ajax1.onreadystatechange=function(){
		var cc="";
		if(ajax1.readyState===4&&ajax1.status===200){
			var data2=JSON.parse(ajax1.responseText)
			data2.forEach(function(item){
				cc+=`<li>${item}</li>`

			})
				dmqh.innerHTML=cc;
		}	
}}
var str1="";

function ajax(fs,url,str,frr){
		var ajax=new XMLHttpRequest;
		if(fs==="post"){
			ajax.open("past",url,true);
			ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			ajax.send(str);
		}else if(fs==="get"){
			ajax.open("get",url+"?"+str,true);
			ajax.send(null);
		}
		ajax.onreadystatechange=function(){
			var bb="";
			if(ajax.readyState===4&&ajax.status===200){
				var data1=JSON.parse(ajax.responseText);
			data1.forEach(function(item){
				bb+=`<li><img src='${item.tp}' id='yz' style='position:absolute;top:0;left:20px;'><img src='${item.tp}'><span>${item.mz}</span><u><i></i></u></li>`

			})
				frr.innerHTML=bb;

			var liss=document.querySelectorAll("#nrqh i");
			var liss1=document.querySelectorAll("#nrqh span");
			
			for(j=0;j<liss.length;j++){
				liss[j].index=j;
				liss[j].onclick=function(){
						var yzs=document.querySelectorAll("#nrqh #yz");
						for(b=0;b<yzs.length;b++)
						{
						yzs[this.index].style.width=0+"px";
						yzs[this.index].style.height=0+"px";
						yzs[this.index].style.top=155+"px";
						yzs[this.index].style.left=0+"px";
					}



					str1=dmtj.innerHTML;		
					str1+=`<li id="yctj"><i id='tb'></i><i id='nr'>${liss1[this.index].innerHTML}</i><em id='jianh'>-</em><i id='ts'>1天</i><u id='jiah'>+</u><strong id='chahao'></strong></li>`
					if(liss1.length>0){
					bjxc.style.background="#fbac03";
					}
					dmtj.innerHTML=str1;
					sdtj.scrollIntoView();


					var yctj=document.querySelectorAll("#yctj");
					var jiah=document.querySelectorAll("#yctj #jiah");
				var jianh=document.querySelectorAll("#yctj #jianh");
				var ts=document.querySelectorAll("#yctj #ts");
				var chahao=document.querySelectorAll("#yctj #chahao");	
					for(m=0;m<jiah.length;m++){
						jianh[m].index1=m;
						jiah[m].index3=m;
						chahao[m].index2=m;
						jianh[m].num=1;
					jianh[m].onclick=function(ev){
						var str3=""
					if(ev.target.nodeName==="EM"){
						this.num--;
				   	if(this.num<=1){
						this.num=1;
					}
					str3=`${this.num}`;
				   ts[this.index1].innerHTML=str3+"天";
					 
				}
				}	
				jiah[m].onclick=function(ev){
							var str2=""
						if(ev.target.nodeName==="U"){
						jianh[this.index3].num++;
				   str2=`${jianh[this.index3].num}`;
				   ts[this.index3].innerHTML=str2+"天";
					}
					}

					chahao[m].onclick=function(ev){
						if(ev.target.nodeName==="STRONG"){
						dmtj.removeChild(yctj[this.index2]);
						str1=dmtj.innerHTML;
						var liss2=document.querySelectorAll("#dmtj li");
						 if(liss2.length<=1){						 
					bjxc.style.background="#ccc";
					}
					}
					}
				}

				}
				
			}
			
			}
		}
	}
ajax("get","cjxc.php","user=1",nrqh)
var cnxh=document.getElementById('cnxh');
var gn=document.getElementById('gn');
var gat=document.getElementById('gat');
cnxh.onclick=function(){
	cnxh.style.background="#fff"
	gn.style.background="#f8f9f9"
	gat.style.background="#f8f9f9"
	dmqh.style.display="none"
	ajax("get","cjxc.php","user=1",nrqh)
}
gn.onclick=function(){
	gn.style.background="#fff"
	cnxh.style.background="#f8f9f9"
	gat.style.background="#f8f9f9"
	dmqh.style.display="block"
	ajax("get","cjxc.php","user=4",nrqh)
	ajax1("cjxc.php","user=2")
}
gat.onclick=function(){
	gat.style.background="#fff"
	gn.style.background="#f8f9f9"
	cnxh.style.background="#f8f9f9"
	dmqh.style.display="block"
	ajax("get","cjxc.php","user=5",nrqh)
	ajax1("cjxc.php","user=3")
}
var dmqh=document.getElementById('dmqh');
dmqh.onclick=function(ev){
	console.log(ev.target)
	if(ev.target.innerHTML==="甘肃"){
	dmqh.style.display="block";
	ajax("get","cjxc.php","user=甘肃",nrqh)
}
}
var csan=document.getElementById("csan");
csan.onclick=function(){
	alert("穷逼没资格去这里")
}
var csss=document.getElementById("csss");
var box=document.getElementById("box");

function fn(a){
		console.log(a)
		var str="";
		a.data.forEach(function(item){
			str+=`<li class='sout'><a href="https://www.baidu.com/s?ie=utf-8&wd=${item.city}">${item.city}</a></li>`
		})
		box.innerHTML=str;
	}
csss.onkeydown=function(){
	console.log(2222)
		box.style.display="block"
		var s=document.createElement("script");
		var h=document.getElementsByTagName('head')[0];
		s.src=`http://travel.qunar.com/suggest/plan?q=${csss.value}&type=2&limit=7&callback=fn`
		h.appendChild(s);
		h.removeChild(s);
	}
document.onclick=function(){
	box.style.display="none"
}




















