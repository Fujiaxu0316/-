var timu=document.getElementById('timu');
var str="";
arr22.forEach(function(item){
	str=`<p class='tm'>${item.mz}</p><p class='dz'>${item.dz}</p><p class='dt'><i class='db'></i>${item.dt}</p><p class='sc'><i class='xin'></i>${item.sc}</p>
		 <p class='pf'>${item.pf}</p><p class='dp'>${item.dp}</p><p class='mf'>/5分</p><p class='bj'></p>`
})
timu.innerHTML=str;


var fdj=document.getElementById('fdj');

function fn(){
var str1="";
arr23.forEach(function(item,index){
	var str3="";
	var str2="";
	item.small.forEach(function(item){
		str2+=`<li class='djsj'><img src='${item}' class='kz'></li>`
	})
	item.small.reverse().forEach(function(item){
		str3+=`<li class='fdtp'><img src='${item}' class='kz1'></li>`
	})
		str1+=`<li class='da1'><img src='${item.big}' class='da'><div class='cx'><div class='xqh'><i class='cha'></i><ul class='dtp'>${str3}</ul><div class='xlb'><i class='zjt'></i><i class='yjt'></i><ul class='xtp'>${str2}</ul></div></div></div></li>`
		
})

arr25.forEach(function(item,index){
	var str3="";
	var str2="";
	item.small.forEach(function(item){
		str2+=`<li class='djsj'><img src='${item}' class='kz'></li>`
	})
	item.small.reverse().forEach(function(item){
		str3+=`<li class='fdtp'><img src='${item}' class='kz1'></li>`
	})
		str1+=`<li class='xiao1'><img src='${item.big}' class='xiao'><div class='cx1'><div class='xqh'><i class='cha1'></i><ul class='dtp1'>${str3}</ul><div class='xlb'><i class='zjt1'></i><i class='yjt1'></i><ul class='xtp1'>${str2}</ul></div></div></div></li>`
	
})

fdj.innerHTML=str1;
}

fn();
var das=document.querySelectorAll("#fdj .da1")
var xiaos=document.querySelectorAll("#fdj .xiao1")
var cxs=document.querySelectorAll("#fdj .cx")
var cx1s=document.querySelectorAll("#fdj .cx1")
var dtps=document.querySelectorAll("#fdj .cx .dtp")
var dtp1s=document.querySelectorAll("#fdj .cx1 .dtp1")

var chas=document.querySelectorAll("#fdj .xqh .cha")
var cha1s=document.querySelectorAll("#fdj .xqh .cha1")
for(i=0;i<das.length;i++){
	xiaos[i].index=i;
	das[i].index=i;
	chas[i].index=i;
	cha1s[i].index=i;
	cha1s[i].onclick=function(ev){
		cxs[this.index].style.display="none"
		cx1s[this.index].style.display="none"
		ev.stopPropagation();
	}
	chas[i].onclick=function(ev){
		cxs[this.index].style.display="none"
		cx1s[this.index].style.display="none"
		ev.stopPropagation();
	}
	das[i].onclick=function(ev){	
		cxs[this.index].style.display="block";		
	
	cxs[this.index].onmousemove=function(){
		document.documentElement.scrollTop=0;
	}}
	xiaos[i].onclick=function(ev){	
		
		cx1s[this.index].style.display="block";
		cx1s[this.index].onmousemove=function(){
		document.documentElement.scrollTop=0;
	}
	}
}
var z=0;
for(j=0;j<dtps.length;j++){
	dtps[j].index=j
	dtp1s[j].index=j
	dtps[j].onmousemove=function(ev){
		for(k=0;k<dtps.length;k++){
			dtps[k].index=k;
			
	if(ev.offsetX<=250){
		dtps[this.index].style.cursor="url(images/zyjt.png),auto"
			let str4="";
			dtps[k].onclick=function(){				
				z++;
				if(z>5){z=0}
					console.log(z);
				console.log(arr23[this.index].small.reverse()[z])
					str4+=`<li class='fdtp'><img src='${arr23[this.index].small.reverse()[z]}' class='kz1'></li>`
				dtps[this.index].innerHTML=str4;
			}
		}else{
			let str6="";
		dtps[this.index].style.cursor="url(images/yyjt.png),auto"
				dtps[k].onclick=function(){
				z--;
				if(z<=0){z=5}
					
					console.log(z);
				console.log(arr23[this.index].small.reverse()[z])
					str6+=`<li class='fdtp'><img src='${arr23[this.index].small.reverse()[z]}' class='kz1'></li>`
				dtps[this.index].innerHTML=str6;
			}
		}
	}
}
var x=0;
dtp1s[j].onmousemove=function(ev){	
		for(k=0;k<dtp1s.length;k++){
			dtp1s[k].index=k;
			
	if(ev.offsetX<=250){
		let str4="";
		dtp1s[this.index].style.cursor="url(images/zyjt.png),auto"			
			dtp1s[k].onclick=function(){				
				x++;
				if(x>5){x=0}	
				console.log(x);
				arr25[this.index].small.reverse()[x];			
					str4+=`<li class='fdtp'><img src='${arr25[this.index].small.reverse()[x]}' class='kz1'></li>`
				dtp1s[this.index].innerHTML=str4;
			}
		}else{
			let str5=""
		dtp1s[this.index].style.cursor="url(images/yyjt.png),auto"
			
				dtp1s[k].onclick=function(){
					x--;
				if(x<0){x=5};	
				console.log(x);
				console.log(arr25[this.index].small.reverse()[x])			
					str5+=`<li class='fdtp'><img src='${arr25[this.index].small.reverse()[x]}' class='kz1'></li>`
				dtp1s[this.index].innerHTML=str5;
			}
		}
	

}
}
}

var djsjs=document.querySelectorAll("#fdj .djsj")
var dtps=document.querySelectorAll("#fdj .cx .dtp")
var dtp1s=document.querySelectorAll("#fdj .cx1 .dtp1")
for(s=0;s<djsjs.length;s++){
	djsjs[s].index=s;
	
	djsjs[s].onclick=function(){
		for(c=0;c<dtps.length;c++){
			dtp1s[c].innerHTML="";
			dtps[c].innerHTML="";
		}
		var str5="";
		str5=`<li class='fdtp'><img src='${arr24[this.index]}' class='kz1'></li>`
		console.log(str5)
		dtp1s[0].innerHTML=str5;
		dtp1s[1].innerHTML=str5;
		dtps[0].innerHTML=str5;
		dtps[1].innerHTML=str5;

	}
}

var zjts=document.querySelectorAll("#fdj .cx .zjt")
var yjts=document.querySelectorAll("#fdj .cx .yjt")
var zjt1s=document.querySelectorAll("#fdj .cx1 .zjt1")
var yjt1s=document.querySelectorAll("#fdj .cx1 .yjt1")
var xtps=document.querySelectorAll("#fdj .cx .xtp")
var xtp1s=document.querySelectorAll("#fdj .cx1 .xtp1")
var l=0;
for(j=0;j<zjts.length;j++){
	zjts[j].index=j;
	yjts[j].index=j;
	zjt1s[j].index=j;
	yjt1s[j].index=j;
	zjts[j].onclick=function(){
		if(l<=0){l=5;}
		l--;
		xtps[this.index].style.left=-125*l+"px";
	}
	zjt1s[j].onclick=function(){
		if(l<=0){l=5;}
		l--;
		xtp1s[this.index].style.left=-125*l+"px";
	}
	yjts[j].onclick=function(){
		l++;
		if(l>=5){l=0;}
		xtps[this.index].style.left=-125*l+"px";
	}
	yjt1s[j].onclick=function(){
		l++;
		if(l>=5){l=0;}
		xtp1s[this.index].style.left=-125*l+"px";
	}
}

function ajax(fs,url,str,frr,bb){
		var ajax=new XMLHttpRequest;
		if(fs==="post"){
			ajax.open("past",url,true);
			ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			ajax.send(str);
		}else if(fs==="get"){
			ajax.open("get",url+"?"+str,true);
			ajax.send(null)
		}
		ajax.onreadystatechange=function(){
			var aa="";
			if(ajax.readyState===4&&ajax.status===200){
				var data=JSON.parse(ajax.responseText);
			data.forEach(function(item){
				aa+=`<li>${item}</li>`

			})
				frr.innerHTML="<i class='wh'>"+bb+"</i>"+aa;
				
			var liss=document.querySelectorAll("#jd5 ul li");
			var xz=document.getElementById('xz');
			var jd5=document.getElementById('jd5');
			for(i=0;i<liss.length;i++){
				liss[i].onclick=function(){			
				xz.value=this.innerHTML;
				jd5.style.display="none";
				}
	}	
			}
		}
	}
var fx=document.getElementById("fx")
ajax("get","xq.php","user=1",fx,"?")
var kf=document.getElementById("kf")
function ajax1(fs,url,str,frr){
		var ajax=new XMLHttpRequest;
		if(fs==="post"){
			ajax.open("past",url,true);
			ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			ajax.send(str);
		}else if(fs==="get"){
			ajax.open("get",url+"?"+str,true);
			ajax.send(null)
		}
		ajax.onreadystatechange=function(){
			var aa="";
			if(ajax.readyState===4&&ajax.status===200){
				var data1=JSON.parse(ajax.responseText);
			data1.forEach(function(item){
				aa+=`<li class='kht'><img src='${item.tp}' class='tp'><p class='fjm'>${item.fjm}</p><i style='background:url(${item.tb1})0 -65px' title='最多可入住2人' class='sr'></i><i style='background:url(${item.tb1})-1px -295px' title='wifi已覆盖' class='wifi'></i>
					<i class='gk'></i><p class='wz'>${item.wz}</p><div class='cbk'><img src='${item.zx}' class='zx'><p class='jj'>${item.jj}</p><img src='${item.li}' class='lip'><i class='lpk'>礼品卡</i><i class='zc'>${item.zc}</i>
					<i class='qx'>${item.qx}</i><img src='${item.dj}' class='dj'><i class='jg'>￥<span>${item.jg}</span></i><i class='mj'>${item.mj}</i>
					<i class='yd'>预定</i><i class='zxf'>在线付</i></div><div class='ftp' style='display:none'></div><div class='ftp1' style='display:none'></div><div class='ftp2' style='display:none'></div></li>`

			})
				frr.innerHTML=aa;
			}
			var zxs=document.querySelectorAll("#kf .cbk .zx");
			var ftps=document.querySelectorAll("#kf .ftp");
			var qxs=document.querySelectorAll("#kf .cbk .qx");
			var ftp1s=document.querySelectorAll("#kf .ftp1");
			var lips=document.querySelectorAll("#kf .cbk .lip");
			var ftp2s=document.querySelectorAll("#kf .ftp2");
				for(f=0;f<zxs.length;f++){
				zxs[f].index=f;
				qxs[f].index=f;
				lips[f].index=f;
				zxs[f].onmousemove=function(ev){
					ftps[this.index].style.display="block"
						ftps[this.index].style.left=(ev.offsetX+340)+"px";
						ftps[this.index].style.top=(ev.offsetY+70)+"px";
	
					}
					zxs[f].onmouseout=function(ev){
					ftps[this.index].style.display="none"
				}

				qxs[f].onmousemove=function(ev){
					ftp1s[this.index].style.display="block"
						ftp1s[this.index].style.left=(ev.offsetX+740)+"px";
						ftp1s[this.index].style.top=(ev.offsetY+80)+"px";
	
					}
					qxs[f].onmouseout=function(ev){
					ftp1s[this.index].style.display="none"
				}

				lips[f].onmousemove=function(ev){
					ftp2s[this.index].style.display="block"
						ftp2s[this.index].style.left=(ev.offsetX+440)+"px";
						ftp2s[this.index].style.top=(ev.offsetY+90)+"px";
	
					}
					lips[f].onmouseout=function(ev){
					ftp2s[this.index].style.display="none"
				}
			}
		}
	}
ajax1("get","xq.php","user=2",kf);

var gd1=document.getElementById("gd1")
var fxyd=document.getElementById("fxyd")
var wzjt=document.getElementById("wzjt")
var ssgk=document.getElementById("ssgk")
var dpwd=document.getElementById("dpwd")
window.onscroll=function(){
	if(document.documentElement.scrollTop>=760&&document.documentElement.scrollTop<1759){
		gd1.style.display="block";
		fxyd.style.background="#7b41f1"
		wzjt.style.background="#3cb0d0"
		ssgk.style.background="#3cb0d0"
		dpwd.style.background="#3cb0d0"
	}else if(document.documentElement.scrollTop>=1759&&document.documentElement.scrollTop<2139){
		fxyd.style.background="#3cb0d0"
		wzjt.style.background="#7b41f1"
		ssgk.style.background="#3cb0d0"
		dpwd.style.background="#3cb0d0"
	}else if(document.documentElement.scrollTop>=2139&&document.documentElement.scrollTop<2540){
		ssgk.style.background="#7b41f1"
		wzjt.style.background="#3cb0d0"
		fxyd.style.background="#3cb0d0"
		dpwd.style.background="#3cb0d0"
	}else if(document.documentElement.scrollTop>=2540){
		dpwd.style.background="#7b41f1"
		ssgk.style.background="#3cb0d0"
		wzjt.style.background="#3cb0d0"
		fxyd.style.background="#3cb0d0"
	}else{
		gd1.style.display="none";
	}
}

fxyd.onclick=function(){
	document.documentElement.scrollTop=760
}
wzjt.onclick=function(){
	document.documentElement.scrollTop=1759
}
ssgk.onclick=function(){
	document.documentElement.scrollTop=2139
}
dpwd.onclick=function(){
	document.documentElement.scrollTop=2540
}
			


function ajax2(fs,url,str,frr){
		var ajax=new XMLHttpRequest;
		if(fs==="post"){
			ajax.open("past",url,true);
			ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			ajax.send(str);
		}else if(fs==="get"){
			ajax.open("get",url+"?"+str,true);
			ajax.send(null)
		}
		ajax.onreadystatechange=function(){
			var aa="";
			if(ajax.readyState===4&&ajax.status===200){
				var data2=JSON.parse(ajax.responseText);
			data2.forEach(function(item,index){
				if(index===0){
					aa+=`<li style='height:26px;border:1px solid #ddd;line-height:26px;font-size:12px;'>${item.jccz}</li>`
				}else if(index===5){
					aa+=`<li style='text-align:center;border:1px solid #ddd;font-size:12px;height:27px;line-height:27px;'>${item.jtxx}</li>`
				}else{
					aa+=`<li class='dz' style='height:58px;width:292px;border:1px solid #ddd;position:relative;cursor: pointer;'><i style='background:url(${item.tp});width:16px;
					height:16px;position:absolute;top:10px;left:20px;'></i><i style='position:absolute;top:10px;left:40px;font-size:13px;'>${item.zm}</i><i style='position:absolute;top:30px;left:40px;font-size:11px;color:#666'>${item.lx}</i></li>`
				}
				

			})
				frr.innerHTML=aa;
			}
		}
	}
ajax2("get","xq.php","user=3",jz1);


var dianp_1=document.getElementById("dianp_1")
function ajax3(fs,url,str,frr){
		var ajax=new XMLHttpRequest;
		if(fs==="post"){
			ajax.open("past",url,true);
			ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			ajax.send(str);
		}else if(fs==="get"){
			ajax.open("get",url+"?"+str,true);
			ajax.send(null)
		}
		ajax.onreadystatechange=function(){
			var aa="";
			if(ajax.readyState===4&&ajax.status===200){
				var data3=JSON.parse(ajax.responseText);
			data3.forEach(function(item,index){
				var bb="";
				var cc="";
				if(item.shu===""){
					aa+=`<li class='pj'><img src='${item.tp}' class='tp'><i class='yhm'>${item.yhm}</i>
						<i class='dpxs'>${item.dpxs}</i><i class='ps'>${item.ps}</i><i class='pja'>${item.pj}</i>
						<i class='wh'></i><i style='background:url(${item.fw});display:none;' class='fw'></i><i class='wz'><u class='dh'>√</u>${item.wz}</i>
						<i class='nr'>${item.nr}</i><i class='lz'>${item.lz}</i></li>`
				}else{
					item.shu.forEach(function(item){
					bb+=`<li class='xg'><img src='${item}' class='xxgg'><p class='mc'></p></li>`
				})
					item.shu1.forEach(function(item){
					cc+=`<p class='cdtp'><img src='${item}'style="width: 320px;height: 320px;position: absolute;" class='ayy'></p>`
				})
					aa+=`<li class='pj'><img src='${item.tp}' class='tp'><i class='yhm'>${item.yhm}</i>
						<i class='dpxs'>${item.dpxs}</i><i class='ps'>${item.ps}</i><i class='pja'>${item.pj}</i>
						<i class='wh'></i><i style='background:url(${item.fw});display:none;' class='fw'></i><i class='wz'><u class='dh'>√</u>${item.wz}</i>
						<i class='nr'>${item.nr}</i><ul class='shu'>${bb}</ul><i class='lz'>${item.lz}</i>${cc}</li>`
				}
				

			})
				frr.innerHTML=aa;
			}
			var whs=document.querySelectorAll("#dianp_1 .pj .wh");
			var fws=document.querySelectorAll("#dianp_1 .pj .fw");
			for(var q=0;q<whs.length;q++){
				whs[q].index=q;
				whs[q].onmouseover=function(){
					fws[this.index].style.display="block";
				}
				whs[q].onmouseout=function(){
					fws[this.index].style.display="none";
				}
			}

var kkk=document.getElementsByTagName('body')[0];
var xgs=document.querySelectorAll("#dianp_1 .pj .xxgg");
var ayys=document.querySelectorAll("#dianp_1 .ayy");
var mcs=document.querySelectorAll("#dianp_1 .mc");
var cdtps=document.querySelectorAll("#dianp_1 .pj .cdtp");
for(g=0;g<xgs.length;g++){
	xgs[g].index=g;
xgs[g].onmouseover=function(){
	for(r=0;r<ayys.length;r++){
		cdtps[r].style.display="none"
		ayys[r].style.display="none"
	}
	console.log(cdtps[this.index])
	cdtps[this.index].style.display="block"
	ayys[this.index].style.display="block"
}
xgs[g].onmouseout=function(){
	for(r=0;r<ayys.length;r++){
		cdtps[r].style.display="none"
		ayys[r].style.display="none"
	}
	cdtps[this.index].style.display="none"
	ayys[this.index].style.display="none"
}
}

		}
	}
ajax3("get","xq.php","user=4",dianp_1);



