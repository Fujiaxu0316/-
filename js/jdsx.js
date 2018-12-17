


var gdjd=document.getElementById('gdjd1');
gdjd1.onclick=function(){
    window.location.href="gdjd.html"
}


var xiala=document.getElementById('xiala');
var diming=document.getElementById('diming');
var i=document.getElementById('i');
var i1=document.getElementById('i1');
var cx=document.getElementById('cx');
var cha1=document.getElementById('cha1');
var rq11=document.getElementById('rq11');
var cha2=document.getElementById('cha2');
var hdl1=document.getElementById('hdl1');
var cha3=document.getElementById('cha3');
var hdl2=document.getElementById('hdl2');
var cha4=document.getElementById('cha4');
var jd=document.getElementById('jd');
var str="";
arr.forEach(function(item,index){
	if(index===6){
	str+=`<li><a href="#" class="gat">${item}</a></li>`
	}else{
	str+=`<li><a href="#">${item}</a></li>`
	}
})
xiala.innerHTML=str;
var str1="";
var k=1;
arr1.forEach(function(item,index){
	if(index===4*k){
	str1+=`<li><a  class="zz">${item}</a></li>`
	}else if(index===(4*k)+1){
	str1+=`<li><a class="aa">${item}</a></li>`
	}else{
	str1+=`<li><a >${item}</a></li>`
	}
	k++;
})
diming.innerHTML=str1;

i.onclick=function(){

	cx.style.display="block";
	cha1.style.display="block";
	hdl1.style.display="none";
	cha2.style.display="none";
	hdl2.style.display="none";
	cha3.style.display="none";
	cha4.style.display="none";
	jd5.style.display="none";
}
cha1.onclick=function(){
	cx.style.display="none";
	cha1.style.display="none";
}
var dms2=document.querySelectorAll("#diming li a")
var dm=document.getElementById('dm');
for(i=0;i<dms2.length;i++){
		dms2[i].onclick=function(ev){
		dm.value="";
		dm.value+=this.innerHTML;
		cx.style.display="none"
		cha1.style.display="none";
		ev.stopPropagation();
	}
	}	

rq11.onclick=function(){

		hdl1.style.display="block";
		cha2.style.display="block";
		cx.style.display="none";
		cha1.style.display="none";
		hdl2.style.display="none";
		cha3.style.display="none";
		cha4.style.display="none";
		jd5.style.display="none";
}

cha2.onclick=function(){
	hdl1.style.display="none";
	cha2.style.display="none";
}

rq12.onclick=function(){

		hdl2.style.display="block";
		cha3.style.display="block";
		cx.style.display="none";
		cha1.style.display="none";
		hdl1.style.display="none";
		cha2.style.display="none";
		cha4.style.display="none";
		jd5.style.display="none";
		rq12.flage=true;
}
cha3.onclick=function(){
	hdl2.style.display="none";
	cha3.style.display="none";
}
i1.flage=false;
i1.onclick=function(){
	if(i1.flage){
		jd5.style.display="none";
		cha4.style.display="none";
		i1.flage=false;
	}else{
		jd5.style.display="block";
		cha4.style.display="block";
		cx.style.display="none";
		cha1.style.display="none";
		hdl1.style.display="none";
		cha2.style.display="none";
		hdl2.style.display="none";
		cha3.style.display="none";
		i1.flage=true;
}}
cha4.onclick=function(){
	jd5.style.display="none";
	cha4.style.display="none";
}
var date=new Date();
  var year=date.getFullYear();
  var month=date.getMonth();
  var tian=date.getDate();
  var hour=date.getHours();
  var min=date.getMinutes();
  var sec=date.getSeconds();
  var xqs=document.querySelectorAll("#xq div");
  var lis=document.querySelectorAll("#rz li");
  var lis1=document.querySelectorAll("#rz1 li");
  var riqi=document.getElementById('riqi');
  var riqi1=document.getElementById('riqi1');
  var ri=document.getElementById('ri');
var a=setInterval(function(){
    var date=new Date;
    var day=date.getDay();
    switch(day){
      case 0: day="星期日";break;
      case 1: day="星期一";break;
      case 2: day="星期二";break;
      case 3: day="星期三";break;
      case 4: day="星期四";break;
      case 5: day="星期五";break;
      case 6: day="星期六";break;
    }
    var str=date.toLocaleTimeString('Chinese',{hour12:false});    
riqi.innerHTML="<u id='fs'>"+year+"年"+(month+1)+"月</u>"+tian+"日"+"<i id='ssj'>"+str+" "+day+"</i>"
riqi1.innerHTML="<u id='fs1'>"+year+"年"+(month+1)+"月</u>"+tian+"日"+"<i id='ssj'>"+str+" "+day+"</i>"

  },1000)
	var date=new Date();
var year=date.getFullYear();
var month=date.getMonth();

      function fn(a,b,c,d){

 
  var time=new Date(a,b+1,0)
  var time1=new Date(a,b,0);
  var day=time.getDate();

  var firstDay=new Date(a,b,1);
  var weekDay=firstDay.getDay();
  var days=new Array();
  var day1=0;


  for(j=0;j<d.length;j++){
    d[j].innerHTML="";
  if(j>=weekDay&&day1<day){
    day1++;
    d[j].innerHTML=day1;
  }
  d[j].onclick=function(){
      c.value=fs.innerHTML+this.innerHTML+"日"
  }
} 
 }
var rq1= document.getElementById('rq1');
var rq2= document.getElementById('rq2');
 fn(year,month,rq1,lis);
 fn(year,month,rq2,lis1);
var zjt= document.getElementById('zjt');
var yjt= document.getElementById('yjt');
var zjt1= document.getElementById('zjt1');
var yjt1= document.getElementById('yjt1');

zjt.onclick=function(){
  	month--;
    if(month<0){
      year--;
      month=11;
      fn(year,month,rq1,lis);
    }else{
      fn(year,month,rq1,lis)
    }
  }
yjt.onclick=function(){
    	month++;
    if(month>=12){
      year++;
      month=0;
      fn(year,month,rq1,lis);
    }else{
      fn(year,month,rq1,lis)
    } 
  }	
zjt1.onclick=function(){
  	month--;
    if(month<0){
      year--;
      month=11;
      fn(year,month,rq1,lis);
    }else{
      fn(year,month,rq1,lis)
    }
  }
yjt1.onclick=function(){
    	month++;
    if(month>=12){
      year++;
      month=0;
      fn(year,month,rq1,lis);
    }else{
      fn(year,month,rq1,lis)
    }
  
  }    
 var kzms1=document.getElementById('kzms1');
 kzms1.onclick=function(){
 	window.location.href="kzms.html";
 } 							
var rmjd1=document.getElementById('rmjd1');
var rmjd2=document.getElementById('rmjd2');
var rmjd3=document.getElementById('rmjd3');
var rmjd4=document.getElementById('rmjd4');
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
				frr.innerHTML=`<p>${bb}</p>`+aa;
				
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
ajax("get","jdsx.php","user=1",rmjd1,"热门景点")
ajax("get","jdsx.php","user=2",rmjd2,"机场车站")
ajax("get","jdsx.php","user=3",rmjd3,"热门品牌")
ajax("get","jdsx.php","user=4",rmjd4,"地铁线路")

var zkgd=document.getElementById('zkgd');
var sxk=document.getElementById('sxk');
var sx=document.getElementById('sx');
zkgd.flage=false;
zkgd.onclick=function(){
	if(zkgd.flage){
		sxk.style.height="248px";
		sx.style.height="302px";
		zkgd.innerHTML="展开更多"
		zkgd.flage=false;

	}else{
		sxk.style.height="332px";
		sx.style.height="386px";
		zkgd.innerHTML="收起更多"
		zkgd.flage=true;
	}
}
var jdt=document.getElementById('jdt')
var jdt1=document.getElementById('jdt1')
var sxk=document.getElementById('sxk')
window.onscroll=function(){
	if(parseInt(window.getComputedStyle(sxk)['height'])===332){
		if(document.documentElement.scrollTop>=554){
		jdt1.style.display="block"
	}else{
		jdt1.style.display="none"
	}
	}else{
	if(document.documentElement.scrollTop>=465){
		jdt1.style.display="block"
	}else{
		jdt1.style.display="none"
	}
}
}

var ul1s=document.querySelectorAll("#ul1 li");
var us=document.querySelectorAll("#ul1 u");
var rmwz=document.getElementById('rmwz');
var xzq=document.getElementById('xzq');
var dtxl=document.getElementById('dtxl');
var czjc=document.getElementById('czjc');
var ggjd=document.getElementById('ggjd');
var yyyy=document.getElementById('yyyy');
var dx=document.getElementById('dx');
var jyjd=document.getElementById('jyjd');
var jtwz=document.getElementById('jtwz');
var jtwztow=document.getElementById('jtwztow');
var jtwz1=document.getElementById('jtwz1');
var jtwz2=document.getElementById('jtwz2');
var bj1=document.getElementById('bj1');
var bj2=document.getElementById('bj2');
var bg3=document.getElementById('bg3');
var bj4=document.getElementById('bj4');
var bj5=document.getElementById('bj5');
var bj6=document.getElementById('bj6');
var bj7=document.getElementById('bj7');
var bj8=document.getElementById('bj8');


function fn1(c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
	var str2="";
	var str3="";
	if(c.flage){
		jtwz.style.display="none"
		f.style.background="url(images/header_new_v7.png)-153px -21px";
		c.flage=false;
	}else{
	jtwz.style.display="block"
	jtwztow.style.display="none"
	d.forEach(function(item){
		str2+=`<li id='dcq'>${item}</li>`
	})
	jtwz1.innerHTML=str2;
	e.forEach(function(item){
		str3+=`<li id='tam'>${item}</li>`
	})
	jtwz2.innerHTML=str3;
	f.style.background="url(images/header_new_v7.png)-153px -29px";
	g.style.background="url(images/header_new_v7.png)-153px -21px";
	h.style.background="url(images/header_new_v7.png)-153px -21px";
	i.style.background="url(images/header_new_v7.png)-153px -21px";
	j.style.background="url(images/header_new_v7.png)-153px -21px";
	k.style.background="url(images/header_new_v7.png)-153px -21px";
	l.style.background="url(images/header_new_v7.png)-153px -21px";
	m.style.background="url(images/header_new_v7.png)-153px -21px";
	c.flage=true;
	n.flage=false;
	o.flage=false;
	p.flage=false;
	q.flage=false;
	r.flage=false;
	s.flage=false;
	t.flage=false;
}}
rmwz.flage=false;
rmwz.onclick=function(){
	fn1(rmwz,arr2,arr3,bj1,bj2,bj3,bj4,bj5,bj6,bj7,bj8,xzq,dtxl,czjc,ggjd,yyyy,dx,jyjd)
}
function fn2(c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
	var str4="";
	if(c.flage){
		jtwztow.style.display="none"
		e.style.background="url(images/header_new_v7.png)-153px -21px";
		c.flage=false;
	}else{
	jtwztow.style.display="block"
	jtwz.style.display="none"
	d.forEach(function(item){
		str4+=`<li>${item}</li>`
	})
	jtwztow.innerHTML=str4;
	e.style.background="url(images/header_new_v7.png)-153px -29px";
	f.style.background="url(images/header_new_v7.png)-153px -21px";
	g.style.background="url(images/header_new_v7.png)-153px -21px";
	h.style.background="url(images/header_new_v7.png)-153px -21px";
	i.style.background="url(images/header_new_v7.png)-153px -21px";
	j.style.background="url(images/header_new_v7.png)-153px -21px";
	k.style.background="url(images/header_new_v7.png)-153px -21px";
	l.style.background="url(images/header_new_v7.png)-153px -21px";
	c.flage=true;
	m.flage=false;
	n.flage=false;
	o.flage=false;
	p.flage=false;
	q.flage=false;
	r.flage=false;
	s.flage=false;
}
}
xzq.flage=false;
xzq.onclick=function(){
	fn2(xzq,arr4,bj2,bj1,bj3,bj4,bj5,bj6,bj7,bj8,rmwz,dtxl,czjc,ggjd,yyyy,dx,jyjd)
}

dtxl.flage=false;
dtxl.onclick=function(){
	fn1(dtxl,arr5,arr6,bj3,bj2,bj1,bj4,bj5,bj6,bj7,bj8,xzq,rmwz,czjc,ggjd,yyyy,dx,jyjd)
}

czjc.flage=false;
czjc.onclick=function(){
	fn1(czjc,arr7,arr8,bj4,bj2,bj1,bj3,bj5,bj6,bj7,bj8,xzq,rmwz,dtxl,ggjd,yyyy,dx,jyjd)
}

ggjd.flage=false;
ggjd.onclick=function(){
	fn2(ggjd,arr9,bj5,bj2,bj3,bj4,bj1,bj6,bj7,bj8,rmwz,dtxl,czjc,xzq,yyyy,dx,jyjd)
}
yyyy.flage=false;
yyyy.onclick=function(){
	fn2(yyyy,arr10,bj6,bj2,bj3,bj4,bj1,bj5,bj7,bj8,rmwz,dtxl,czjc,xzq,ggjd,dx,jyjd)
}
dx.flage=false;
dx.onclick=function(){
	fn2(dx,arr11,bj7,bj2,bj3,bj4,bj1,bj6,bj5,bj8,rmwz,dtxl,czjc,xzq,yyyy,ggjd,jyjd)
}
jyjd.flage=false;
jyjd.onclick=function(){
	fn2(jyjd,arr12,bj8,bj2,bj3,bj4,bj1,bj6,bj7,bj5,rmwz,dtxl,czjc,xzq,yyyy,dx,ggjd)
}



var xj=document.getElementById("xj");
var pf=document.getElementById("pf");
var jiag=document.getElementById("jiag");
var xjt=document.getElementById("xjt");
var sjt=document.getElementById("sjt");
var xjt1=document.getElementById("xjt1");
var sjt1=document.getElementById("sjt1");
var dui1=document.getElementById("dui1");
var dui2=document.getElementById("dui2");
var yf=document.getElementById("yf");
var tdf=document.getElementById("tdf");



var jjdd=document.getElementById('jjdd')
function fnnn(aaa){
var str13="";
var str12="";
for(var t=0;t<8;t++){
	if(aaa[t].hc===""){
		str12=`<img src='${aaa[t].tp[0]}'>`;
	str13+=`<li id='liebiao'><a href='${aaa[t].lj}'><div id='hxtp' class='hxtp'>${str12}</div></a><i id='zd' class='cd'><</i><i id='yd' class='dd'>></i>
			<i class='xulie'>${t+1}</i><p class='mingzi'>${aaa[t].mz}</p><i class='leixin'>${aaa[t].lx}</i><i class='lpk'>${aaa[t].lpk}</i>
			<p class='weizhi'>${aaa[t].wz}</p><p class='ditu'><i class='dibiao'></i>${aaa[t].dt}</p><p class='pinjia'>“${aaa[t].pj}”</p>
			<i class='t1'></i><i class='t2'></i><i class='pinfen'>${aaa[t].pf}<i class='wuf'>/5分</i></i><i class='dianp'>${aaa[t].dp}</i>
			<p class='shishui'><i class='zan'></i><i class='st'>${aaa[t].sstj}</i><i class='tuijian'></i></p>
			<i class='fj'><img src='${aaa[t].fj}' title='提供接机服务'></i>
			<p class='jiage'>￥<span class='qianshu'>${aaa[t].jg}</span>起></p>
			<p class='guanzhu'><i class='aixin'></i><i class='gzjd'>关注这家酒店</i></p></li>`
	}else if(aaa[t].fj===""){
		str12=`<img src='${aaa[t].tp[0]}'>`;
	str13+=`<li id='liebiao'><a href='${aaa[t].lj}'><div id='hxtp' class='hxtp'>${str12}</div></a><i id='zd' class='cd'><</i><i id='yd' class='dd'>></i>
			<i class='xulie'>${t+1}</i><p class='mingzi'>${aaa[t].mz}</p><i class='leixin'>${aaa[t].lx}</i><i class='lpk'>${aaa[t].lpk}</i>
			<p class='weizhi'>${aaa[t].wz}</p><p class='ditu'><i class='dibiao'></i>${aaa[t].dt}</p><p class='pinjia'>“${aaa[t].pj}”</p>
			<i class='t1'></i><i class='t2'></i><i class='pinfen'>${aaa[t].pf}<i class='wuf'>/5分</i></i><i class='dianp'>${aaa[t].dp}</i>
			<p class='shishui'><i class='zan'></i><i class='st'>${aaa[t].sstj}</i><i class='tuijian'></i></p>
			<i class='hc'><img src='${aaa[t].hc}' title='提供接站服务'></i>
			<p class='jiage'>￥<span class='qianshu'>${aaa[t].jg}</span>起></p>
			<p class='guanzhu'><i class='aixin'></i><i class='gzjd'>关注这家酒店</i></p></li>`
	}else{
	str12=`<img src='${aaa[t].tp[0]}'>`;
	str13+=`<li id='liebiao'><a href='${aaa[t].lj}'><div id='hxtp' class='hxtp'>${str12}</div></a><i id='zd' class='cd'><</i><i id='yd' class='dd'>></i>
			<i class='xulie'>${t+1}</i><p class='mingzi'>${aaa[t].mz}</p><i class='leixin'>${aaa[t].lx}</i><i class='lpk'>${aaa[t].lpk}</i>
			<p class='weizhi'>${aaa[t].wz}</p><p class='ditu'><i class='dibiao'></i>${aaa[t].dt}</p><p class='pinjia'>“${aaa[t].pj}”</p>
			<i class='t1'></i><i class='t2'></i><i class='pinfen'>${aaa[t].pf}<i class='wuf'>/5分</i></i><i class='dianp'>${aaa[t].dp}</i>
			<p class='shishui'><i class='zan'></i><i class='st'>${aaa[t].sstj}</i><i class='tuijian'></i></p>
			<i class='fj'><img src='${aaa[t].fj}' title='提供接机服务'></i><i class='hc'><img src='${aaa[t].hc}' title='提供接站服务'></i>
			<p class='jiage'>￥<span class='qianshu'>${aaa[t].jg}</span>起></p>
			<p class='guanzhu'><i class='aixin'></i><i class='gzjd'>关注这家酒店</i></p></li>`
}		

jjdd.innerHTML=str13;

var zds=document.querySelectorAll("#jjdd .dd")
var yds=document.querySelectorAll("#jjdd .cd")
var hxtps=document.querySelectorAll("#jjdd .hxtp")
for(ab=0;ab<zds.length;ab++){
	let z=0;
	zds[ab].index=ab;
	zds[ab].onclick=function(){
		z++;
		if(z===4){z=0}
	str12=`<img src='${arr13[this.index].tp[z]}'>`;

hxtp[this.index].innerHTML=str12;
	}
}
for(bb=0;bb<yds.length;bb++){
	let z=1;
	yds[bb].index=bb;
	yds[bb].onclick=function(){
		z--;
		if(z===0){z=4}
	str12=`<img src='${arr13[this.index].tp[z]}'>`;

hxtp[this.index].innerHTML=str12;
	}
}
}
fn14(aaa);

}

fnnn(arr13);

function fn13(aaa){
var str13="";
var str12="";
for(var t=0;t<aaa.length;t++){
	if(aaa[t].hc===""){
		str12=`<img src='${aaa[t].tp[0]}'>`;
	str13+=`<li id='liebiao'><a href='${aaa[t].lj}'><div id='hxtp' class='hxtp'>${str12}</div></a><i id='zd' class='cd'><</i><i id='yd' class='dd'>></i>
			<i class='xulie'>${t+1}</i><p class='mingzi'>${aaa[t].mz}</p><i class='leixin'>${aaa[t].lx}</i><i class='lpk'>${aaa[t].lpk}</i>
			<p class='weizhi'>${aaa[t].wz}</p><p class='ditu'><i class='dibiao'></i>${aaa[t].dt}</p><p class='pinjia'>“${aaa[t].pj}”</p>
			<i class='t1'></i><i class='t2'></i><i class='pinfen'>${aaa[t].pf}<i class='wuf'>/5分</i></i><i class='dianp'>${aaa[t].dp}</i>
			<p class='shishui'><i class='zan'></i><i class='st'>${aaa[t].sstj}</i><i class='tuijian'></i></p>
			<i class='fj'><img src='${aaa[t].fj}' title='提供接机服务'></i>
			<p class='jiage'>￥<span class='qianshu'>${aaa[t].jg}</span>起></p>
			<p class='guanzhu'><i class='aixin'></i><i class='gzjd'>关注这家酒店</i></p></li>`
	}else if(aaa[t].fj===""){
		str12=`<img src='${aaa[t].tp[0]}'>`;
	str13+=`<li id='liebiao'><a href='${aaa[t].lj}'><div id='hxtp' class='hxtp'>${str12}</div></a><i id='zd' class='cd'><</i><i id='yd' class='dd'>></i>
			<i class='xulie'>${t+1}</i><p class='mingzi'>${aaa[t].mz}</p><i class='leixin'>${aaa[t].lx}</i><i class='lpk'>${aaa[t].lpk}</i>
			<p class='weizhi'>${aaa[t].wz}</p><p class='ditu'><i class='dibiao'></i>${aaa[t].dt}</p><p class='pinjia'>“${aaa[t].pj}”</p>
			<i class='t1'></i><i class='t2'></i><i class='pinfen'>${aaa[t].pf}<i class='wuf'>/5分</i></i><i class='dianp'>${aaa[t].dp}</i>
			<p class='shishui'><i class='zan'></i><i class='st'>${aaa[t].sstj}</i><i class='tuijian'></i></p>
			<i class='hc'><img src='${aaa[t].hc}' title='提供接站服务'></i>
			<p class='jiage'>￥<span class='qianshu'>${aaa[t].jg}</span>起></p>
			<p class='guanzhu'><i class='aixin'></i><i class='gzjd'>关注这家酒店</i></p></li>`
	}else{
	str12=`<img src='${aaa[t].tp[0]}'>`;
	str13+=`<li id='liebiao'><a href='${aaa[t].lj}'><div id='hxtp' class='hxtp'>${str12}</div></a><i id='zd' class='cd'><</i><i id='yd' class='dd'>></i>
			<i class='xulie'>${t+1}</i><p class='mingzi'>${aaa[t].mz}</p><i class='leixin'>${aaa[t].lx}</i><i class='lpk'>${aaa[t].lpk}</i>
			<p class='weizhi'>${aaa[t].wz}</p><p class='ditu'><i class='dibiao'></i>${aaa[t].dt}</p><p class='pinjia'>“${aaa[t].pj}”</p>
			<i class='t1'></i><i class='t2'></i><i class='pinfen'>${aaa[t].pf}<i class='wuf'>/5分</i></i><i class='dianp'>${aaa[t].dp}</i>
			<p class='shishui'><i class='zan'></i><i class='st'>${aaa[t].sstj}</i><i class='tuijian'></i></p>
			<i class='fj'><img src='${aaa[t].fj}' title='提供接机服务'></i><i class='hc'><img src='${aaa[t].hc}' title='提供接站服务'></i>
			<p class='jiage'>￥<span class='qianshu'>${aaa[t].jg}</span>起></p>
			<p class='guanzhu'><i class='aixin'></i><i class='gzjd'>关注这家酒店</i></p></li>`
}		

jjdd.innerHTML=str13;

var zds=document.querySelectorAll("#jjdd .dd")
var yds=document.querySelectorAll("#jjdd .cd")
var hxtps=document.querySelectorAll("#jjdd .hxtp")
for(ab=0;ab<zds.length;ab++){
	let z=0;
	zds[ab].index=ab;
	zds[ab].onclick=function(){
		z++;
		if(z===4){z=0}
	str12=`<img src='${arr13[this.index].tp[z]}'>`;

hxtp[this.index].innerHTML=str12;
	}
}
for(bb=0;bb<yds.length;bb++){
	let z=1;
	yds[bb].index=bb;
	yds[bb].onclick=function(){
		z--;
		if(z===0){z=4}
	str12=`<img src='${arr13[this.index].tp[z]}'>`;

hxtp[this.index].innerHTML=str12;
	}
}
}
fn14(aaa);
}
function fn14(hdl){
	var pagenum1=Math.ceil(hdl.length/8)
Page({
			num:pagenum1,			//页码数
			startnum:1,				//指定页码
			elem:$('#page2'),		//指定的元素
			callback:function(n){	//回调函数
				var bb=n*8
				if(bb>hdl.length){
					bb=hdl.length
				}
			var str13="";
			var str12="";
		for(var k=((n-1)*8);k<bb;k++){

		if(hdl[k].hc===""){
			str12=`<img src='${hdl[k].tp[0]}'>`;
		str13+=`<li id='liebiao'><a href='${hdl[k].lj}'><div id='hxtp' class='hxtp'>${str12}</div></a><i id='zd' class='cd'><</i><i id='yd' class='dd'>></i>
				<i class='xulie'>${k+1}</i><p class='mingzi'>${hdl[k].mz}</p><i class='leixin'>${hdl[k].lx}</i><i class='lpk'>${hdl[k].lpk}</i>
				<p class='weizhi'>${hdl[k].wz}</p><p class='ditu'><i class='dibiao'></i>${hdl[k].dt}</p><p class='pinjia'>“${hdl[k].pj}”</p>
				<i class='t1'></i><i class='t2'></i><i class='pinfen'>${hdl[k].pf}<i class='wuf'>/5分</i></i><i class='dianp'>${hdl[k].dp}</i>
				<p class='shishui'><i class='zan'></i><i class='st'>${hdl[k].sstj}</i><i class='tuijian'></i></p>
				<i class='fj'><img src='${hdl[k].fj}' title='提供接机服务'></i>
				<p class='jiage'>￥<span class='qianshu'>${hdl[k].jg}</span>起></p>
				<p class='guanzhu'><i class='aixin'></i><i class='gzjd'>关注这家酒店</i></p></li>`
		}else if(hdl[k].fj===""){
			str12=`<img src='${hdl[k].tp[0]}'>`;
		str13+=`<li id='liebiao'><a href='${hdl[k].lj}'><div id='hxtp' class='hxtp'>${str12}</div></a><i id='zd' class='cd'><</i><i id='yd' class='dd'>></i>
				<i class='xulie'>${k+1}</i><p class='mingzi'>${hdl[k].mz}</p><i class='leixin'>${hdl[k].lx}</i><i class='lpk'>${hdl[k].lpk}</i>
				<p class='weizhi'>${hdl[k].wz}</p><p class='ditu'><i class='dibiao'></i>${hdl[k].dt}</p><p class='pinjia'>“${hdl[k].pj}”</p>
				<i class='t1'></i><i class='t2'></i><i class='pinfen'>${hdl[k].pf}<i class='wuf'>/5分</i></i><i class='dianp'>${hdl[k].dp}</i>
				<p class='shishui'><i class='zan'></i><i class='st'>${hdl[k].sstj}</i><i class='tuijian'></i></p>
				<i class='hc'><img src='${hdl[k].hc}' title='提供接站服务'></i>
				<p class='jiage'>￥<span class='qianshu'>${hdl[k].jg}</span>起></p>
				<p class='guanzhu'><i class='aixin'></i><i class='gzjd'>关注这家酒店</i></p></li>`
		}else{
		str12=`<img src='${hdl[k].tp[0]}'>`;
		str13+=`<li id='liebiao'><a href='${hdl[k].lj}'><div id='hxtp' class='hxtp'>${str12}</div></a><i id='zd' class='cd'><</i><i id='yd' class='dd'>></i>
				<i class='xulie'>${k+1}</i><p class='mingzi'>${hdl[k].mz}</p><i class='leixin'>${hdl[k].lx}</i><i class='lpk'>${hdl[k].lpk}</i>
				<p class='weizhi'>${hdl[k].wz}</p><p class='ditu'><i class='dibiao'></i>${hdl[k].dt}</p><p class='pinjia'>“${hdl[k].pj}”</p>
				<i class='t1'></i><i class='t2'></i><i class='pinfen'>${hdl[k].pf}<i class='wuf'>/5分</i></i><i class='dianp'>${hdl[k].dp}</i>
				<p class='shishui'><i class='zan'></i><i class='st'>${hdl[k].sstj}</i><i class='tuijian'></i></p>
				<i class='fj'><img src='${hdl[k].fj}' title='提供接机服务'></i><i class='hc'><img src='${hdl[k].hc}' title='提供接站服务'></i>
				<p class='jiage'>￥<span class='qianshu'>${hdl[k].jg}</span>起></p>
				<p class='guanzhu'><i class='aixin'></i><i class='gzjd'>关注这家酒店</i></p></li>`
	}		

	}jjdd.innerHTML=str13;

	var zds=document.querySelectorAll("#jjdd .dd")
	var yds=document.querySelectorAll("#jjdd .cd")
	var hxtps=document.querySelectorAll("#jjdd .hxtp")
	for(ab=0;ab<zds.length;ab++){
		let z=0;
		zds[ab].index=ab;
		zds[ab].onclick=function(){
			z++;
			if(z===4){z=0}
		str12=`<img src='${hdl[this.index].tp[z]}'>`;

	hxtp[this.index].innerHTML=str12;
		}
	}
	for(bb=0;bb<yds.length;bb++){
		let z=1;
		yds[bb].index=bb;
		yds[bb].onclick=function(){
			z--;
			if(z===0){z=4}
		str12=`<img src='${hdl[this.index].tp[z]}'>`;

	hxtp[this.index].innerHTML=str12;
		}
	}
					
			}
		}); 
}
fn14(arr13);


var ddd=arr13.slice(0)
cnm.onclick=function(){
	fnnn(arr13);
}

xj.flage=false;
xj.onclick=function(){
	jiag.style.color=""
	xjt1.style.background="url(images/xjt.png)";
	sjt1.style.background="url(images/sjt.png)";
	if(xj.flage){
		sjt.style.background="url(images/sjt1.png)";
		xjt.style.background="url(images/xjt.png)";
		xj.style.color="#1badb6"
		pf.style.color=""
		xj.flage=false;
	}else{
		sjt.style.background="url(images/sjt.png)";
		xjt.style.background="url(images/xjt1.png)";
		xj.style.color="#1badb6"
		pf.style.color=""
		xj.flage=true;
	}
}
jiag.flage=false;
jiag.onclick=function(){
	xj.style.color=""
	xjt.style.background="url(images/xjt.png)";
	sjt.style.background="url(images/sjt.png)";
	if(jiag.flage){
		sjt1.style.background="url(images/sjt1.png)";
		xjt1.style.background="url(images/xjt.png)";
		jiag.style.color="#1badb6"
		pf.style.color=""
		ddd.sort(function(a,b){
			return	a.jg-b.jg
		})
		fnnn(ddd)
		jiag.flage=false;
	}else{
		sjt1.style.background="url(images/sjt.png)";
		xjt1.style.background="url(images/xjt1.png)";
		jiag.style.color="#1badb6"
		pf.style.color=""
		
		ddd.sort(function(a,b){
			return	b.jg-a.jg
		})
		fnnn(ddd)
		jiag.flage=true;

	}
}
pf.onclick=function(){
	pf.style.color="#1badb6"
	xj.style.color=""
	jiag.style.color=""
	xjt1.style.background="url(images/xjt.png)";
	sjt1.style.background="url(images/sjt.png)";
	xjt.style.background="url(images/xjt.png)";
	sjt.style.background="url(images/sjt.png)";
	ddd.sort(function(a,b){
			return	b.pf-a.pf
		})
		fnnn(ddd)
		jiag.flage=true;
}
tdf.flage=false;
tdf.onclick=function(){
	if(tdf.flage){
		dui1.style.display="none"
		tdf.flage=false;
	}else{
		dui1.style.display="block"
		tdf.flage=true;
	}
}
yf.flage=false;
yf.onclick=function(){
	if(yf.flage){
		dui2.style.display="none"
		yf.flage=false;
	}else{
		dui2.style.display="block"
		yf.flage=true;
	}
}
var quyu=document.getElementById("quyu");
var pinpai=document.getElementById("pinpai");
var str20="";
arr20.forEach(function(item,index){
	if(index===0){
		str20=`<li class='huise'>${item}</li>`
	}else{
		str20+=`<li class='heise'>${item}</li>`
	}
})
quyu.innerHTML=str20;
arr21.forEach(function(item,index){
	if(index===0){
		str21=`<li class='huise'>${item}</li>`
	}else{
		str21+=`<li class='heise'>${item}</li>`
	}
})
pinpai.innerHTML=str21;

var xuanzes=document.querySelectorAll("#hhhhh i")
var ybyx=document.getElementById("ybyx");
var ybeb=document.getElementById("ybeb");
var ebsb=document.getElementById("ebsb");
var sbsb=document.getElementById("sbsb");
var sbwb=document.getElementById("sbwb");
var wbys=document.getElementById("wbys");


function ffn(a,b,c,d,e,f,g,h,i){
	a.flage=false;
a.onclick=function(){
	if(a.flage){
		a.style.background="";
		a.flage=false;
		fnnn(arr13);
	}else{
		for(f=0;f<xuanzes.length;f++){
			xuanzes[f].style.background="";
		}
		a.style.background="red"
		var data=arr13.filter(function(item,index){
					return item[b]>=c&&item[b]<=d
				})
		if(data.length>=8){
			fnnn(data);
		}else{
			fn13(data);
		}	
		for(h=0;h<xuanzes.length;h++){
			xuanzes[h].flage=false;;
		}			
				this.flage=true;

				}		
		}
}
ffn(ybyx,"jg",0,100,ybeb,ebsb,sbsb,sbwb,wbys)
ffn(ybeb,"jg",100,200,ybyx,ebsb,sbsb,sbwb,wbys)
ffn(ebsb,"jg",200,300,ybeb,ybyx,sbsb,sbwb,wbys)
ffn(sbsb,"jg",300,400,ybeb,ebsb,ybyx,sbwb,wbys)
ffn(sbwb,"jg",400,500,ybeb,ebsb,sbsb,ybyx,wbys)
ffn(wbys,"jg",500,3000,ybeb,ebsb,sbsb,sbwb,ybyx)

var mfkd=document.getElementById("mfkd");
var jjfw=document.getElementById("jjfw");
var jzfw=document.getElementById("jzfw");
var resh=document.getElementById("resh");
var yyc=document.getElementById("yyc");
var ct=document.getElementById("ct");
function ffnn(a,b){
	a.flage=false;
a.onclick=function(){
	if(a.flage){
		a.style.background="";
		a.flage=false;
		fnnn(arr13);
	}else{
		for(f=0;f<xuanzes.length;f++){
			xuanzes[f].style.background="";
		}
		a.style.background="red"
		var data=arr13.filter(function(item,index){
					return item[b]
				})
		if(data.length>=8){
			fnnn(data);
		}else{
			fn13(data);
		}	
		for(h=0;h<xuanzes.length;h++){
			xuanzes[h].flage=false;;
		}
				this.flage=true;
				}		
		}
}
ffnn(mfkd,"mfkd")
ffnn(jjfw,"jjfw")
ffnn(jzfw,"jzfw")
ffnn(resh,"resh")
ffnn(yyc,"yyc")
ffnn(ct,"ct")

ffnn(jjx,"jjx")
ffnn(exj,"exj")
ffnn(sxj,"sxj")
ffnn(six,"six")
ffnn(wxj,"wxj")

ffnn(jq,"jq")
ffnn(hz,"hz")
ffnn(qdkz,"qdkz")
ffnn(hjt,"hjt")
ffnn(sll,"sll")
ffnn(yq,"yq")
ffnn(rj,"rj")
ffnn(ht,"ht")
ffnn(xt,"xt")

ffnn(k1,"k1")
ffnn(k2,"k2")
ffnn(k3,"k3")
ffnn(k4,"k4")
ffnn(k5,"k5")
ffnn(k6,"k6")
ffnn(k7,"k7")
ffnn(k8,"k8")
ffnn(k9,"k9")
ffnn(k10,"k10")
