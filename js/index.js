var a=document.getElementById('ll1');
var b=document.getElementById('bo1');
var d=document.getElementById('bo2');
var f=document.getElementById('bo3');
var h=document.getElementById('bo4');
var j=document.getElementById('bo5');
var jj=document.getElementById('jp');
var dd=document.getElementById('jd');
var hcp=document.getElementById('hcp1');
var dj=document.getElementById('dj1');
var mp=document.getElementById('mp1');
var tg=document.getElementById('tg1');
var cc=document.getElementById('cc1');
var zyx=document.getElementById('zyx1');
var hcp2=document.getElementById('hcp');
var dj2=document.getElementById('dj');
var mp2=document.getElementById('mp');
var tg2=document.getElementById('tg');
var cc2=document.getElementById('cc');
var zyx2=document.getElementById('zyx');
var lunbotu=document.getElementById('lunbotu');
var jh=document.getElementById('i');

jh.onclick=function(){
	var kz=null;
	kz=cf.value;
	cf.value=ddd.value;
	ddd.value=kz;
}
var arr=["国内热门","东南亚","海岛","亚洲","欧洲","美洲","大洋洲"]
var arr1=["上海","北京","成都","昆明","西安","深圳","重庆","杭州","厦门","乌鲁木齐",
      "广州","海口","哈尔滨","南京","武汉","长沙","青岛","郑州","三亚","福州",
      "贵阳","南宁","天津","沈阳","太原","大连","兰州","济南","长春","温州"]
var xl1=document.getElementById('xl1');
var diming1=document.getElementById('diming1');
var xl2=document.getElementById('xl2');
var dm2=document.getElementById('dm2');
var xl3=document.getElementById('xl3');
var dm3=document.getElementById('dm3');
var str="";
arr.forEach(function(item,index){
  if(index===6){
  str+=`<li><a href="#" class="gat">${item}</a></li>`
  }else{
  str+=`<li><a href="#">${item}</a></li>`
  }
})
xl1.innerHTML=str;
xl2.innerHTML=str;
xl3.innerHTML=str;
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
diming1.innerHTML=str1;
dm2.innerHTML=str1;
dm3.innerHTML=str1;
var jpcf=document.getElementById('jpcf');
var jpdd=document.getElementById('jpdd');
var dp=document.getElementById('dp');
var pp=document.getElementById("pp")
var jdcf=document.getElementById('jdcf');
var dp1=document.getElementById('dp1');
var rmjd=document.getElementById('rmjd');
var pp1=document.getElementById('pp1');
var pp1=document.getElementById('pp1');
var ch1=document.getElementById('ch1');
var ch2=document.getElementById('ch2');
var ch3=document.getElementById('ch3');
var ch4=document.getElementById('ch4');
jpcf.flage=false;
jpcf.onclick=function(){
  if(jpcf.flage){
    dp.style.display="none"
     ch1.style.display="none"
     jpcf.flage=false;
  }else{
  dp.style.display="block"
  ch1.style.display="block"
  pp.style.display="none"
  ch2.style.display="none"
  jpcf.flage=true;
}}
jpdd.flage=false;
jpdd.onclick=function(){
  if(jpdd.flage){
  pp.style.display="none"
  ch2.style.display="none"
  jpdd.flage=false;
  }else{
  pp.style.display="block"
  ch2.style.display="block"
  jpdd.flage=true;
}}
jdcf.flage=false;
jdcf.onclick=function(){
  if(jdcf.flage){
  dp1.style.display="none"
  ch3.style.display="none"
  jdcf.flage=false;
  }else{
  dp1.style.display="block"
  ch3.style.display="block"
  pp1.style.display="none"
  ch4.style.display="none"
  jdcf.flage=true;
}}
rmjd.flage=false;
rmjd.onclick=function(){
  if(rmjd.flage){
  pp1.style.display="none"
  ch4.style.display="none"
  rmjd.flage=false;
  }else{
  pp1.style.display="block"
  ch4.style.display="block"
  rmjd.flage=true;
}}
ch1.onclick=function(){
  dp.style.display="none"
  ch1.style.display="none"
}
ch2.onclick=function(){
  pp.style.display="none"
  ch2.style.display="none"
}
ch3.onclick=function(){
  dp1.style.display="none"
  ch3.style.display="none"
}
ch4.onclick=function(){
  pp1.style.display="none"
  ch4.style.display="none"
}
var cf=document.getElementById('cf');
var ddd=document.getElementById('ddd');
var mdd=document.getElementById('mdd');
var dms11=document.querySelectorAll("#diming1 a")
var dms111=document.querySelectorAll("#dm2 a")
var dms211=document.querySelectorAll("#dm3 a")
  for(i=0;i<dms11.length;i++){
    dms11[i].onclick=function(){
    cf.value="";
    cf.value+=this.innerHTML;
    dp.style.display="none"
  }
}

for(i=0;i<dms111.length;i++){
    dms111[i].onclick=function(){
    ddd.value="";
    ddd.value+=this.innerHTML;
  }
}
for(i=0;i<dms211.length;i++){
    dms211[i].onclick=function(){
    mdd.value="";
    mdd.value+=this.innerHTML;
  }
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


      var liss=document.querySelectorAll("#pp1 ul li");
      var xzz=document.getElementById('xz');
      var pp1=document.getElementById('pp1');
      for(i=0;i<liss.length;i++){
        liss[i].onclick=function(){
          pp1.style.display="none"
        xzz.value="";
        xzz.value+=this.innerHTML;
  
        }
  } 
      }
    }
  }
ajax("get","jdsx.php","user=1",rmjd1,"热门景点")
ajax("get","jdsx.php","user=2",rmjd2,"机场车站")
ajax("get","jdsx.php","user=3",rmjd3,"热门品牌")
ajax("get","jdsx.php","user=4",rmjd4,"地铁线路")





  var img=document.querySelectorAll("#lunbotu li");
var ym=document.querySelectorAll("#ym li");
  setInterval(ff,3000)
  var jjj=0;
function ff(){ 
  

for(i=0;i<ym.length;i++){
  ym[i].index=i;
  img[i].style.opacity=0;
  ym[i].style.background="";
 

  ym[i].onmouseover=function(){
  for(k=0;k<img.length;k++){
    img[k].style.opacity=0;
    ym[k].style.background="";
  }
  img[this.index].style.opacity=1;
  ym[this.index].style.background="pink";
}
} 
img[jjj].style.opacity=1;
  ym[jjj].style.background="pink";
  jjj++;
  if(jjj===5){jjj=0};
}


function fn1(a,b,c,d,e,f,g,h){
	a.style.display="block"
	b.style.display="none"
	c.style.display="none"
	d.style.display="none"
	e.style.display="none"
	f.style.display="none"
	g.style.display="none"
	h.style.display="none"
}

var jipiao=document.getElementById('jpp');
jipiao.onclick=function(){
	fn1(jj,dd,tg2,cc2,zyx2,dj2,mp2,hcp2)
}


var jiudian=document.getElementById('jdd');
jiudian.onclick=function(){
	fn1(dd,jj,tg2,cc2,zyx2,dj2,mp2,hcp2)
}
hcp.onclick=function(){
	fn1(hcp2,jj,tg2,cc2,zyx2,dj2,mp2,dd)
}
dj.onclick=function(){
	fn1(dj2,jj,tg2,cc2,zyx2,hcp2,mp2,dd)
}
mp.onclick=function(){
	fn1(mp2,jj,tg2,cc2,zyx2,dj2,hcp2,dd)
}
tg.onclick=function(){
	fn1(tg2,jj,hcp2,cc2,zyx2,dj2,mp2,dd)
}
cc.onclick=function(){
	fn1(cc2,jj,tg2,hcp2,zyx2,dj2,mp2,dd)
}
zyx.onclick=function(){
	fn1(zyx2,jj,tg2,cc2,hcp2,dj2,mp2,dd)
}

var rq1=document.getElementById('rq1');
var rq2=document.getElementById('rq2');
var rq3=document.getElementById('rq3');
var rq4=document.getElementById('rq4');
var hdl=document.getElementById('hdl');
var hdl1=document.getElementById('hdl1');
var hdl2=document.getElementById('hdl2');
var hdl3=document.getElementById('hdl3');
var p=document.getElementById('p');
var p1=document.getElementById('p1');
var jdsss=document.getElementById('jdsss');
var jpss=document.getElementById('jpss');
jdsss.onclick=function(){
  window.open("jdsx.html")
}
jpss.onclick=function(){
  window.open("jdsx.html")
}

rq1.onclick=function(){
	hdl.style.display="block"
	p.style.display="block"
	p1.style.display="none"
	hdl1.style.display="none"
  rq1.flage=true;
}
p.onclick=function(){
	p.style.display="none"
	hdl.style.display="none"
}

rq2.onclick=function(){
	hdl1.style.display="block"
	p1.style.display="block"
	p.style.display="none"
	hdl.style.display="none"	
  rq2.flage=true;
}
p1.onclick=function(){
	p1.style.display="none"
	hdl1.style.display="none"
}

rq3.onclick=function(){

	hdl2.style.display="block"
	p2.style.display="block"
	p3.style.display="none"
	hdl3.style.display="none"	
  rq3.flage=true;
}
p2.onclick=function(){
	p2.style.display="none"
	hdl2.style.display="none"
}

rq4.onclick=function(){

	hdl3.style.display="block"
	p3.style.display="block"
	p2.style.display="none"
	hdl2.style.display="none"	
  rq4.flage=true;
}
p3.onclick=function(){
	p3.style.display="none"
	hdl3.style.display="none"
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
  var lis2=document.querySelectorAll("#rz2 li");
  var lis3=document.querySelectorAll("#rz3 li");
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
riqi2.innerHTML="<u id='fs2'>"+year+"年"+(month+1)+"月</u>"+tian+"日"+"<i id='ssj'>"+str+" "+day+"</i>"
riqi3.innerHTML="<u id='fs3'>"+year+"年"+(month+1)+"月</u>"+tian+"日"+"<i id='ssj'>"+str+" "+day+"</i>"
 
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
var js3= document.getElementById('js3');
var js4= document.getElementById('js4');
 fn(year,month,js1,lis);
 fn(year,month,js2,lis1);
 fn(year,month,js3,lis3);
 fn(year,month,js4,lis2);
var zjt= document.getElementById('zjt');
var yjt= document.getElementById('yjt');
var zjt1= document.getElementById('zjt1');
var yjt1= document.getElementById('yjt1');

zjt.onclick=function(){
  	month--;
    if(month<0){
      year--;
      month=11;
      fn(year,month,js1,lis);
    }else{
      fn(year,month,js1,lis)
    }
  }
yjt.onclick=function(){
    	month++;
    if(month>=12){
      year++;
      month=0;
      fn(year,month,js1,lis);
    }else{
      fn(year,month,js1,lis)
    }
  
  }
zjt1.onclick=function(){
  	month--;
    if(month<0){
      year--;
      month=11;
      fn(year,month,js2,lis1);
    }else{
      fn(year,month,js2,lis1)
    }
  }
yjt1.onclick=function(){
    	month++;
    if(month>=12){
      year++;
      month=0;
      fn(year,month,js2,lis1);
    }else{
      fn(year,month,js2,lis1)
    }
  
  }
zjt2.onclick=function(){
  	month--;
    if(month<0){
      year--;
      month=11;
      fn(year,month,js3,lis3);
    }else{
      fn(year,month,js3,lis3)
    }
  }
yjt2.onclick=function(){
    	month++;
    if(month>=12){
      year++;
      month=0;
      fn(year,month,js3,lis3);
    }else{
      fn(year,month,js3,lis3)
    }
  
  }
zjt3.onclick=function(){
  	month--;
    if(month<0){
      year--;
      month=11;
      fn(year,month,js4,lis2);
    }else{
      fn(year,month,js4,lis2)
    }
  }
yjt3.onclick=function(){
    	month++;
    if(month>=12){
      year++;
      month=0;
      fn(year,month,js4,lis2);
    }else{
      fn(year,month,js4,lis2)
    }  
  }

var na3s=document.querySelectorAll('#na3 li');
setInterval(fm,8000)
var bb=0;
function fm(){
  
  for(mm=0;mm<na3s.length;mm++){
    na3s[mm].style.opacity=0;
  }
    na3s[bb].style.opacity=1;
    bb++;
    if(bb===6){
      bb=0
    } 
}

  var data=[
  {tp1:"images/lj.jpg",didian:"丽江 - 大理跟团游",juti:"纯玩0元购+双人预定减600",jiage:1610,wz:"https://kmqn1.package.qunar.com/user/detail.jsp?abt=a&abt=a&id=1682648784"},
  {tp1:"images/lj1.jpg",didian:"沈阳-丽江 &nbsp;&nbsp;6天2玩&nbsp;&nbsp; 自由行",juti:"往返机票、2玩古城特色客栈、丽江机票",jiage:2610,wz:"https://ljha1.package.qunar.com/user/detail.jsp?id=702427381"},
  {tp1:"images/sy.jpg",didian:"海口-三亚 &nbsp;&nbsp;2天1玩&nbsp;&nbsp; 跟团游",juti:"中国旅游、海口-三亚2日*临海游*南山都是",jiage:168,wz:"https://hnsz7.package.qunar.com/user/detail.jsp?id=965297022&abt=a"},
  {tp1:"images/aa.jpg",didian:"沈阳 - 三亚自由行",juti:"往返天数可任选，酒店可升级！",jiage:2550,wz:"https://cqly9.package.qunar.com/user/detail.jsp?abt=a&id=3538826376"},
  {tp1:"images/ss.jpg",didian:"大连-三亚 &nbsp;&nbsp;5天4玩&nbsp;&nbsp; 自由行",juti:"亲自蜜月游超值热卖！升级4晚海棠湾",jiage:4180,wz:"https://aiwm3.package.qunar.com/user/detail.jsp?id=4279011067&abt=a"},
  {tp1:"images/xm.jpg",didian:"厦门-厦门 &nbsp;&nbsp;1天&nbsp;&nbsp; 跟团游",juti:"厦门出发-南清土楼云水谣>和贵楼>怀",jiage:138,wz:"https://mtzm3.package.qunar.com/user/detail.jsp?id=2413696248&abt=a"},
  ]
  var data1=[
  {tp1:"images/th1.jpg",didian:"皮影戏门票+自然博物馆（大小同价）",juti:"打开通往自然的大门，去探索大自然的奥秘",jiage:60,wz:"https://piao.qunar.com/daytrip/detail_1722484.html?from=mpsales_sale_product"},
  {tp1:"images/th2.jpg",didian:"【随买随用】鸟巢CAIA会展中心3D美术馆单人票",juti:"感受2008北京奥运的辉煌",jiage:58,wz:"https://piao.qunar.com/daytrip/detail_1717155.html?from=mpsales_sale_product"},
  {tp1:"images/th3.jpg",didian:"海口-三亚 &nbsp;&nbsp;2天1玩&nbsp;&nbsp; 跟团游",juti:"中国旅游、海口-三亚2日*临海游*南山都是",jiage:168,wz:"https://tybj1.piao.qunar.com/shop/detail?productId=3976460406&from=mpsales_sale_product"},
  {tp1:"images/th4.jpg",didian:"沈阳 - 三亚自由行",juti:"往返天数可任选，酒店可升级！",jiage:2550,wz:"https://piao.qunar.com/daytrip/detail_1716764.html?from=mpsales_sale_product"},
  {tp1:"images/th5.jpg",didian:"大连-三亚 &nbsp;&nbsp;5天4玩&nbsp;&nbsp; 自由行",juti:"亲自蜜月游超值热卖！升级4晚海棠湾",jiage:4180,wz:"https://xcmp1.piao.qunar.com/shop/detail?productId=450261485&from=mpsales_sale_product"},
  {tp1:"images/th6.jpg",didian:"厦门-厦门 &nbsp;&nbsp;1天&nbsp;&nbsp; 跟团游",juti:"厦门出发-南清土楼云水谣>和贵楼>怀",jiage:138,wz:"https://paae6.piao.qunar.com/shop/detail?productId=342341127&from=mpsales_sale_product"},
  ]
  var data2=[
  {tp1:"images/th7.jpg",didian:"丽江 - 大理跟团游",juti:"纯玩0元购+双人预定减600",jiage:1610,wz:"http://piao.qunar.com/daytrip/detail_372082.html#from=home_remen"},
  {tp1:"images/th8.jpg",didian:"沈阳-丽江 &nbsp;&nbsp;6天2玩&nbsp;&nbsp; 自由行",juti:"往返机票、2玩古城特色客栈、丽江机票",jiage:2610,wz:"http://piao.qunar.com/daytrip/detail_1692607.html#from=home_remen"},
  {tp1:"images/th9.jpg",didian:"海口-三亚 &nbsp;&nbsp;2天1玩&nbsp;&nbsp; 跟团游",juti:"中国旅游、海口-三亚2日*临海游*南山都是",jiage:168,wz:"http://piao.qunar.com/daytrip/detail_1799371.html#from=home_remen"},
  {tp1:"images/th10.jpg",didian:"沈阳 - 三亚自由行",juti:"往返天数可任选，酒店可升级！",jiage:2550,wz:"http://piao.qunar.com/daytrip/detail_1742660.html#from=home_remen"},
  {tp1:"images/th9.jpg",didian:"大连-三亚 &nbsp;&nbsp;5天4玩&nbsp;&nbsp; 自由行",juti:"亲自蜜月游超值热卖！升级4晚海棠湾",jiage:4180,wz:"http://piao.qunar.com/daytrip/detail_1789025.html#from=home_remen"},
  {tp1:"images/th11.jpg",didian:"厦门-厦门 &nbsp;&nbsp;1天&nbsp;&nbsp; 跟团游",juti:"厦门出发-南清土楼云水谣>和贵楼>怀",jiage:138,wz:"http://piao.qunar.com/daytrip/detail_1799607.html#from=home_remen"},
  ]
var top_1=document.getElementById('top_1');
var jrth=document.getElementById('jrth');
var thmp=document.getElementById('thmp');
var thyry=document.getElementById('thyry');
  
  function fnn(xc){
    var a="";
xc.forEach(function(item,index){
  if(index===0||index===3){
    a+=`<li class="da xx">
              <a href='${item.wz}'><img src="${item.tp1}"></a>
              <p class="p1"><span>${item.didian}</span></p>
              <p class="p2">${item.juti}</p>
              <p class="p3">￥${item.jiage}</p>
            </li>`
  }else{
    a+=`<li class="xiao">
              <a href='${item.wz}'><img src="${item.tp1}"></a>
              <p class="p7">${item.didian}</p>
              <p class="p8">${item.juti}</p>
              <p class="p9">￥${item.jiage}</p>
          </li>`
  }
})
top_1.innerHTML=a;
}
fnn(data)
jrth.onclick=function(){
  fnn(data)
}
thmp.onclick=function(){
  fnn(data1)
}
thyry.onclick=function(){
  fnn(data2)
}
 var arr1=["长白山","红叶谷","镜泊湖风景区","连环湖温泉","大庆","伊春","凤凰山"];
 var arr2=["丽江","张家界","三亚","成都","烟台","呼伦贝尔","桂林","厦门","西安"];
 var arr3=["泰国","日本","俄罗斯","芽庄","法国","巴厘岛","海参崴","普吉岛","新加坡"];
 var arr4=["日本","泰国","韩国","美国","澳大利亚","南非","台湾","新加坡","马来西亚"];
 var yw1=document.getElementById('yw1');
 var yw2=document.getElementById('yw2');
 var yw3=document.getElementById('yw3');
 var yw4=document.getElementById('yw4');
 function fn33(a,b,c){
 	var str="";
 for(i=0;i<a.length;i++){
 	str+="<li>"+a[i]+"</li>";
 }b.innerHTML=c+str;
 }
 fn33(arr1,yw1,"<p class='p1'>周边游</p>");
 fn33(arr2,yw2,"<p class='p1'>国内游</p>");
 fn33(arr3,yw3,"<p class='p1'>出境游</p>");
 fn33(arr4,yw4,"<p class='p1'>签证</p>");
 var arr5=[
 		{tupian:"images/ly1.jpg",nr:"含往返火车票+2晚住宿",jiage:970,wz:"https://utzu3.package.qunar.com/user/detail.jsp?id=1687034161&osrc=tts_tuan&rttp=%E5%9B%BD%E5%86%85%E6%B8%B8"},
 		{tupian:"images/ly2.jpg",nr:"含往返飞机票(含税)+5晚住宿",jiage:3999,wz:"https://pvtz3.package.qunar.com/user/detail.jsp?id=1565367231&rttp=%E5%9B%BD%E5%86%85%E6%B8%B8"},
 		{tupian:"images/ly3.jpg",nr:"含往返飞机票(含税)+5晚住宿",jiage:5281,wz:"https://opjm3.package.qunar.com/user/detail.jsp?id=2404440995&rttp=国内游"},
 		{tupian:"images/ly4.jpg",nr:"含往返飞机票+5晚住宿",jiage:2508,wz:"https://djyx2.package.qunar.com/user/detail.jsp?id=4046487490&rttp=国内游"},
 		{tupian:"images/ly5.jpg",nr:"含往返飞机票(含税)+5晚住宿",jiage:3700,wz:"https://ylya1.package.qunar.com/user/detail.jsp?id=3726286988&rttp=国内游"},
 		{tupian:"images/ly6.jpg",nr:"含往返飞机票+7晚住宿",jiage:3800,wz:"https://bxwa1.package.qunar.com/user/detail.jsp?id=1733356177&osrc=tts_tuan&rttp=出境游"}
 		]
 var yby=document.getElementById('yby')
 var str="";
 	arr5.forEach(function(item){
 		str+=`<div><a href='${item.wz}'><img src="${item.tupian}"></a><p id='nr'>${item.nr}</p><span id='jg'>￥${item.jiage}</span></div>`;
 	})
 	yby.innerHTML=str;
 var arr8=["哈尔滨极地馆","东北虎林园","伏尔加庄园","太阳岛","哈尔滨北方森林动物园","镜泊湖风景区","黑龙江龙塔","哈尔滨香炉山"];
 var arr6=["武汉","北京","上海","三亚","成都","厦门","广州","深圳","杭州","大连","桂林","重庆","青岛","苏州","南京","丽江","天津","昆明","张家界"];
 var arr7=["帽儿山","大秃顶子山","哈尔滨冰雪乐园","中国雪乡","雪乡梦幻家园","伏尔加庄园","平山神鹿风景区","哈尔滨香炉山"];
 var yw5=document.getElementById('yw5');
 var yw6=document.getElementById('yw6');
 var yw7=document.getElementById('yw7');
 fn33(arr8,yw5,"<p class='p1'>热门景点</p>");
 fn33(arr6,yw6,"<p class='p1'>国内目的地</p>");
 fn33(arr7,yw7,"<p class='p1'>品质一日游</p>");
var arr9=[
 		{tupian:"images/ly8.jpg",dm:"伏尔加庄园",nr:"感受俄式建筑独特风情",jiage:102,wz:"http://piao.qunar.com/ticket/detail_38175.html#from=home_remen"},
 		{tupian:"images/ly9.jpg",dm:"哈尔滨极地馆",nr:"全球罕见的极地演艺游乐园",jiage:110,wz:"http://piao.qunar.com/ticket/detail_4477.html?from=mpshouye_hotdest_sight"},
 		{tupian:"images/ly10.jpg",dm:"太阳岛",nr:"位于城市中心的江漫滩湿地草原型风景名胜区",jiage:15,wz:"http://piao.qunar.com/ticket/detail_10869.html#from=home_remen"},
 		{tupian:"images/ly11.jpg",dm:"哈尔滨冰雪大世界",nr:"冰雪百花园 奇幻大世界",jiage:160,wz:"http://piao.qunar.com/ticket/detail_12051.html#from=home_remen"}
 		]
var yby1=document.getElementById('yby1')
var str="";
 	arr9.forEach(function(item){
 		str+=`<div class='xtp'><a href='${item.wz}'><img src="${item.tupian}"></a><p id='dm'>${item.dm}</p><p id='nr'>${item.nr}</p><span id='jg'>￥${item.jiage}</span></div>`;
 	})
 	yby1.innerHTML="<div id='dtp'><a href='http://sale.piao.qunar.com/topic/mk/3498.htm'><img src='images/ly7.jpg'></a></div>"+str;
var arr10=["¥50以下","¥50-¥100","¥100-¥150","¥150-¥200","¥200-¥500","¥500以上"];
var arr11=["禧龙","速8","锦江之星","国际青年旅舍","南苑e家","都市118","如家快捷","布丁","格林豪泰","格林联盟"];
var arr12=["经济型","舒适型","主题酒店","高档豪华","连锁品牌","度假酒店","公寓型酒店","青年旅社","客栈"];
var yw8=document.getElementById('yw8');
var yw9=document.getElementById('yw9');
var yw10=document.getElementById('yw10');
 fn33(arr10,yw8,"<p class='p1'>酒店价格</p>");
 fn33(arr11,yw9,"<p class='p1'>酒店品牌</p>");
 fn33(arr12,yw10,"<p class='p1'>酒店分类</p>");
 var arr13=[
 		{tupian:"images/ly13.jpg",dm:"伏尔加庄园",nr:"感受俄式建筑独特风情",jiage:98,wz:"http://tuan.qunar.com/hotel/haerbin_9814?in_track=home_tuan_content"},
 		{tupian:"images/ly14.jpg",dm:"哈尔滨极地馆",nr:"全球罕见的极地演艺游乐园",jiage:198,wz:"http://tuan.qunar.com/#PAGE/L2JzbmVzL3R1YW5XZWIvbGlzdA__/category/aG90ZWw_/cityCode/aGFlcmJpbg__/city/5ZOI5bCU5ruo/globalCity/aGFlcmJpbg__"},
 		{tupian:"images/ly15.jpg",dm:"太阳岛",nr:"位于城市中心的江漫滩湿地草原型风景名胜区",jiage:520,wz:"http://tuan.qunar.com/hotel/haerbin_13135?in_track=home_tuan_content"},
 		{tupian:"images/ly16.jpg",dm:"哈尔滨冰雪大世界",nr:"冰雪百花园 奇幻大世界",jiage:88,wz:"http://tuan.qunar.com/hotel/haerbin_6787?in_track=home_tuan_content"}
 		]
var yby2=document.getElementById('yby2');
var rx=document.getElementById('rx');
var hh=document.getElementById('hh');
var str="";
 	arr13.forEach(function(item){
 		str+=`<div class='xtp1'><a href='${item.wz}'><img src="${item.tupian}"></a><p id='dm'>${item.dm}</p><p id='nr'>${item.nr}</p><span id='jg'>￥${item.jiage}起</span></div>`;
 	})
 	yby2.innerHTML="<div id='dtp1'><a href='https://touch.qunar.com/mis/22qIbe?bd_source=zthd_807017'><img src='images/ly12.jpg'></a></div>"+str;
rx.style.background="#1ba9ba";
rx.onclick=function(){
	rx.style.background="#1ba9ba";
	hh.style.background="";
	var str="";
 	arr13.forEach(function(item){
 		str+=`<div class='xtp1'><img src="${item.tupian}"><p id='dm'>${item.dm}</p><p id='nr'>${item.nr}</p><span id='jg'>￥${item.jiage}起</span></div>`;
 	})
 	yby2.innerHTML="<div id='dtp1'><img src='images/ly12.jpg'></div>"+str;
}

 var arr14=[
 		{tupian:"images/ly17.jpg",dm:"【其他】哈尔滨万达嘉华度假酒店",gdhh:"高档豪华",dz:"哈尔滨松北区丰源街199号",jiage:700},
 		{tupian:"images/ly18.jpg",dm:"【亚布力滑雪场】亚布力森林温泉酒店",gdhh:"高档豪华",dz:"尚志亚布力旅游度假区(滑雪场)亚布力南站旁",jiage:395},
 		{tupian:"images/ly19.jpg",dm:"【其他】哈尔滨万达文华酒店",gdhh:"高档豪华",dz:"哈尔滨松北区世茂大道87号",jiage:950},
 		{tupian:"images/ly20.jpg",dm:"【新阳路】惟景假日酒店(哈尔滨中央大街店)(原唯景假日酒店)",gdhh:"高档豪华",dz:"哈尔滨道里区建河街9号",jiage:219},
 		{tupian:"images/ly21.jpg",dm:"【其他】宾县英杰温泉酒店",gdhh:"高档豪华",dz:"宾县英杰温泉风景区",jiage:296},
 		{tupian:"images/ly22.jpg",dm:"【红旗大街】哈尔滨同心大厦",gdhh:"高档豪华",dz:"哈尔滨南岗区长江路396-2号",jiage:409}
 		]

 hh.onclick=function(){
 	rx.style.background="";
 	hh.style.background="#1ba9ba";
 	var str1="";
 	arr14.forEach(function(item){
 		str1+=`<div id='rexiao'><img src="${item.tupian}"><p id='dm'>${item.dm}</p><p id='gdhh'>${item.gdhh}
 		<i id='wifi' title='wifi'></i><i id='xljc' title='行李寄存'></i><i id='xy' title='洗浴'></i></p><p id='dz'><i id='bj'></i>${item.dz}</p><span id='jg'>￥${item.jiage}起</span></div>`;
 	})
 	yby2.innerHTML=str1;
 }

var huan= document.getElementById('huan');
var b1= document.getElementById('b1');
var b2= document.getElementById('b2');
var b3= document.getElementById('b3');
 var arr15=[
    {tp1:"images/bmc1.jpg",tp:"images/mc2.jpg",js:"德顺那些“甲天下”的小吃",mz:"一米阳光",rq:"2017-04-21 出发",sj:"共17天",sl:"272张照片",wz:"http://travel.qunar.com/youji/7077312/allView?from=qunarindexTr3_4"},
    {tp1:"images/bmc3.jpg",tp:"images/mc3.jpg",js:"吃不了辣也能在长沙快乐一辈子",mz:"黄小坏",rq:"2016-04-16 出发",sj:"共10天",sl:"156张照片",wz:"http://travel.qunar.com/youji/7033500/allView?from=qunarindexTr3_2"},
    {tp1:"images/bmc4.jpg",tp:"images/mc4.jpg",js:"香港四日，逛吃逛吃",mz:"张老原",rq:"2017-05-28 出发",sj:"共4天",sl:"333张照片",wz:"http://travel.qunar.com/youji/7046105/allView?from=qunarindexTr3_5"},
    {tp1:"images/bmc5.jpg",tp:"images/mc5.jpg",js:"成都两天两夜，够麻辣够地道",mz:"小苏菲",rq:"2016-09-21 出发",sj:"共2天",sl:"472张照片",wz:"http://travel.qunar.com/youji/7071596/allView?from=qunarindexTr3_3"}
 ]
 var arr16=[
    {tp1:"images/bmc7.jpg",tp:"images/mc2.jpg",js:"远东安详的海参崴",mz:"一米阳光",rq:"2017-04-21 出发",sj:"共17天",sl:"272张照片",wz:"http://travel.qunar.com/youji/6774413/allView?from=qunarindexTr2_4"},
    {tp1:"images/bmc8.jpg",tp:"images/mc3.jpg",js:"当梦想照进现实，美丽从清迈开始",mz:"黄小坏",rq:"2016-04-16 出发",sj:"共10天",sl:"156张照片",wz:"http://travel.qunar.com/youji/6656151/allView?from=qunarindexTr2_2"},
    {tp1:"images/bmc9.jpg",tp:"images/mc4.jpg",js:"阆中古城|能留下故事的地方",mz:"张老原",rq:"2017-05-28 出发",sj:"共5天",sl:"333张照片",wz:"http://travel.qunar.com/youji/6685505/allView?from=qunarindexTr2_5"},
    {tp1:"images/bmc10.jpg",tp:"images/mc5.jpg",js:"齐聚云门山，解锁粤北绝妙旅行地",mz:"小苏菲",rq:"2016-09-21 出发",sj:"共7天",sl:"472张照片",wz:"http://travel.qunar.com/youji/6846800/allView?from=qunarindexTr2_3"}
 ]
 var arr17=[
    {tp1:"images/bmc12.jpg",tp:"images/mc2.jpg",js:"新西兰南岛：拼了命接近你的秋天",mz:"一米阳光",rq:"2017-04-21 出发",sj:"共17天",sl:"272张照片",wz:"http://travel.qunar.com/travelbook/topic/3373?from=dsy?from=qunarindexTr1_2"},
    {tp1:"images/bmc13.jpg",tp:"images/mc3.jpg",js:"澳门：四天三夜，魅力新南洋",mz:"黄小坏",rq:"2016-04-16 出发",sj:"共10天",sl:"156张照片",wz:"http://travel.qunar.com/travelbook/topic/3373?from=dsy?from=qunarindexTr1_3"},
    {tp1:"images/bmc14.jpg",tp:"images/mc4.jpg",js:"台湾：用十五首歌寻觅你",mz:"张老原",rq:"2017-05-28 出发",sj:"共5天",sl:"333张照片",wz:"http://travel.qunar.com/travelbook/topic/3373?from=dsy?from=qunarindexTr1_4"},
    {tp1:"images/bmc15.jpg",tp:"images/mc5.jpg",js:"伊犁：初夏草原浪行记",mz:"小苏菲",rq:"2016-09-21 出发",sj:"共7天",sl:"472张照片",wz:"http://travel.qunar.com/travelbook/topic/3373?from=dsy?from=qunarindexTr1_5"}
 ]

 function fn44(a,b,c,d,e,f,g,h,i){
  var str2="";
a.forEach(function(item){
  str2+=`<li id='xmc'><a href='${item.wz}'><img src='${item.tp1}'><u id='smc'><i id='js'>${item.js}</i><img src="${item.tp}" id='tp'><i id='mz'>${item.mz}</i><i id='rq'>${item.rq}</i><i id='sj'>${item.sj}</i><i id='sl'>${item.sl}</i></u></a></li>`
})
huan.innerHTML="<li id='dmc'><a href='"+i+"'><img src='"+b+"' class='ayw'><u id='smc1'><i id='js'>"+d+"</i><img src='"+c+"' id='tp'><i id='mz'>"+e+"</i><i id='rq'>"+f+"</i><i id='sj'>"+g+"</i><i id='sl'>"+h+"</i>"+"</u></a></li>"+str2;
}

b1.style.background="#1ba9ba";
fn44(arr15,"images/bmc2.jpg","images/mc1.jpg","烟雨长安：顽童一梦越千年","烟雨江南","2018-08-05 出发","共7天","472张照片","http://travel.qunar.com/youji/7078477/allView?from=qunarindexTr3_1")
b1.onclick=function(){
  b2.style.background="";
  b3.style.background="";
  b1.style.background="#1ba9ba";
fn44(arr15,"images/bmc2.jpg","images/mc1.jpg","烟雨长安：顽童一梦越千年","烟雨江南","2018-08-05 出发","共7天","472张照片","http://travel.qunar.com/youji/7078477/allView?from=qunarindexTr3_1")
}
b2.onclick=function(){
  b1.style.background="";
  b3.style.background="";
  b2.style.background="#1ba9ba";
fn44(arr16,"images/bmc6.jpg","images/mc1.jpg","哏都：五天四夜吃不完","烟雨江南","2016-09-21 出发","共7天","472张照片","http://travel.qunar.com/youji/6774413/allView?from=qunarindexTr2_1")
}
b3.onclick=function(){
  b2.style.background="";
  b1.style.background="";
  b3.style.background="#1ba9ba";
fn44(arr17,"images/bmc11.jpg","images/mc1.jpg","南浔：一副皮囊，穿越烟雨来见你","烟雨江南","2016-09-21 出发","共7天","472张照片","http://travel.qunar.com/travelbook/topic/3373?from=dsy?from=qunarindexTr1_1")
}

var arr19=[
        {jindian:"杭州",jieshao:"掉进江南温柔乡"},
        {jindian:"乌兰布统",jieshao:"草原唯美金秋"},
        {jindian:"香格里拉",jieshao:"遇到此生最美的风景"},
        {jindian:"大理",jieshao:"一路向西寻找最温柔的讯号"}
        ]

var arr20=[
        {jindian:"斯里兰卡",jieshao:"千与千寻梦幻海上火车"},
        {jindian:"美国加州",jieshao:"一号公路猎获最壮美景色"},
        {jindian:"日本",jieshao:"浪漫红叶遇到最美好的你"},
        {jindian:"波尔图",jieshao:"最美的慢调老城"}
        ]
var zb=document.getElementById('zb');
var yb=document.getElementById('yb');
var str4="";
arr19.forEach(function(item){
    str4+=`<i id='jindian'>${item.jindian} :</i><i id='jieshao'>${item.jieshao}</i>`
})
zb.innerHTML="<p>国内热门目的地</p>"+str4;
var str5="";
arr20.forEach(function(item){
    str5+=`<i id='jindian'>${item.jindian} :</i><i id='jieshao'>${item.jieshao}</i>`
})
yb.innerHTML="<p>海外热门目的地</p>"+str5;

var arr18=[
  {tp1:"images/zt2.jpg",tp2:"images/yz2.jpg",tp3:"images/oz2.jpg",tp4:"images/bmz2.jpg",tp5:"images/dyz2.jpg",
  zthz1:"首尔购物",yzhz1:"北海道",ozhz1:"雷克雅未克",bmzhz1:"温哥华",dyzhz1:"墨尔本",
  ztyy:"Shopping in Seoul",yzyy:"Hokkaido",ozyy:"Reykjavik",bmzyy:"Vancouver",dyzyy:"Melbourne",
  ztzz:"作者：修菱 冷钢",yzzz:"作者：谢牧阳",ozzz:"作者：晓晨",bmzzz:"作者：Jenny Xu",dyzzz:"作者：张青 Vincent.QZ",
  ztsj:" 更新时间: 2015-01-20",yzsj:" 更新时间: 2015-01-10",ozsj:" 更新时间: 2015-01-12",bmzsj:" 更新时间: 2015-08-20",dyzsj:" 更新时间: 2016-01-20",
},
    {tp1:"images/zt3.jpg",tp2:"images/yz3.jpg",tp3:"images/oz3.jpg",tp4:"images/bmz3.jpg",tp5:"images/dyz3.jpg",
    zthz1:"舌尖上的韩国(南部篇)",yzhz1:"迪拜",ozhz1:"格拉斯哥",bmzhz1:"丹佛",dyzhz1:"悉尼",
  ztyy:"Taste of Korea",yzyy:"Dubai",ozyy:"Glasgow",bmzyy:"Denver",dyzyy:"Sydney",
  ztzz:"作者：康怡",yzzz:"毛一鸣",ozzz:"作者：严嫣",bmzzz:"作者：陈雅超、段传成",dyzzz:"作者：王波（一镜收江南",
  ztsj:" 更新时间: 2015-02-09",yzsj:" 更新时间: 2015-05-08",ozsj:" 更新时间: 2015-08-20",bmzsj:" 更新时间: 2015-05-26",dyzsj:" 更新时间: 2011-06-20",
},
    {tp1:"images/zt4.jpg",tp2:"images/yz4.jpg",tp3:"images/oz4.jpg",tp4:"images/bmz4.jpg",tp5:"images/dyz4.jpg",
    zthz1:"幸福民宿 中、南台湾",yzhz1:"高雄",ozhz1:"海德堡",bmzhz1:"费城",dyzhz1:"堪培拉",
  ztyy:"Western Taiwan B&B",yzyy:"Kaohsiung",ozyy:"Heidelberg",bmzyy:"Philadelphia",dyzyy:"Canberra",
  ztzz:"作者：董事长",yzzz:"作者：吴东峻",ozzz:"作者：Petit& Cecilia",bmzzz:"作者：芝麻",dyzzz:"作者：张青 Vincent.QZ",
  ztsj:" 更新时间: 2014-07-21",yzsj:" 更新时间: 2015-06-20",ozsj:" 更新时间: 2015-02-18",bmzsj:" 更新时间: 2015-02-24",dyzsj:" 更新时间: 2017-01-19",
}   
]
var qdz=document.getElementById('qdz')
var zt=document.getElementById('zt')
var yz=document.getElementById('yz')
var oz=document.getElementById('oz')
var bmz=document.getElementById('bmz')
var dyz=document.getElementById('dyz')
var str6="";
var str7="";
var str8="";
var str9="";
var str10="";
arr18.forEach(function(item){
        str6+=`<li id='cxmc'><img src='${item.tp1}'><i id='dfmc'>${item.zthz1}<i id='yy'>${item.ztyy}</i><i id='zz'>${item.ztzz}</i><i id='sjj'>${item.ztsj}</i><i id='xzz'>下载</i></i></li>`
        str7+=`<li id='cxmc'><img src='${item.tp2}'><i id='dfmc'>${item.yzhz1}<i id='yy'>${item.yzyy}</i><i id='zz'>${item.yzzz}</i><i id='sjj'>${item.yzsj}</i><i id='xzz'>下载</i></i></li>` 
        str8+=`<li id='cxmc'><img src='${item.tp3}'><i id='dfmc'>${item.ozhz1}<i id='yy'>${item.ozyy}</i><i id='zz'>${item.ozzz}</i><i id='sjj'>${item.ozsj}</i><i id='xzz'>下载</i></i></li>` 
        str9+=`<li id='cxmc'><img src='${item.tp4}'><i id='dfmc'>${item.bmzhz1}<i id='yy'>${item.bmzyy}</i><i id='zz'>${item.bmzzz}</i><i id='sjj'>${item.bmzsj}</i><i id='xzz'>下载</i></i></li>` 
        str10+=`<li id='cxmc'><img src='${item.tp5}'><i id='dfmc'>${item.dyzhz1}<i id='yy'>${item.dyzyy}</i><i id='zz'>${item.dyzzz}</i><i id='sjj'>${item.dyzsj}</i><i id='xzz'>下载</i></i></li>`   
  })
zt.style.background="#1ba9ba";
qdz.innerHTML="<img src='images/zt1.jpg'>"+str6
function cx(a,b,c,d,e){
  a.style.background="#1ba9ba";
  b.style.background="";
  c.style.background="";
  d.style.background="";
  e.style.background="";
}
zt.onclick=function(){
  cx(zt,yz,oz,bmz,dyz);
  qdz.innerHTML="<img src='images/zt1.jpg'>"+str6
}
yz.onclick=function(){
  cx(yz,zt,oz,bmz,dyz);
  qdz.innerHTML="<img src='images/yz1.png'>"+str7
}
oz.onclick=function(){
  cx(oz,yz,zt,bmz,dyz);
  qdz.innerHTML="<img src='images/oz1.png'>"+str8
}
bmz.onclick=function(){
  cx(bmz,yz,oz,zt,dyz);
  qdz.innerHTML="<img src='images/bmz1.png'>"+str9
}
dyz.onclick=function(){
  cx(dyz,yz,oz,bmz,zt);
  qdz.innerHTML="<img src='images/dyz1.png'>"+str10
}
var arr21=[
        {jindian:"日本花见",jieshao:"烂漫春光，赏尽樱吹雪"},
        {jindian:"素可泰",jieshao:"承载泰国寺庙文化的王朝古都"},
        {jindian:"芭提雅",jieshao:"风光旖旎的东方夏威夷"},
        {jindian:"胡志明市",jieshao:"湄公河上风情浪漫的明珠"}
        ]

var arr22=[
        {jindian:"甲米",jieshao:"诗情画意、宛如天堂秘境的热带半岛"},
        {jindian:"巴厘岛",jieshao:"极具人文&热带风情的度假天堂"},
        {jindian:"苏梅岛",jieshao:"拒绝好莱坞选景荣耀的纯天然海岛"},
        {jindian:"毛里求斯",jieshao:"印度洋的珍珠，欧洲的后花园"}
]
var zb1=document.getElementById('zb1');
var yb1=document.getElementById('yb1');
var str11="";
arr21.forEach(function(item){
    str11+=`<i id='jindian'>${item.jindian} :</i><i id='jieshao'>${item.jieshao}</i>`
})
zb1.innerHTML="<p>热门出境骆驼书</p>"+str11;
var str12="";
arr22.forEach(function(item){
    str12+=`<i id='jindian'>${item.jindian} :</i><i id='jieshao'>${item.jieshao}</i>`
})
yb1.innerHTML="<p>热门海岛骆驼书</p>"+str12;

var arr23=["九寨沟沟口附近","九寨沟甲蕃古城附近","加利西亚当代艺术中心附近","卡龙沟自然风景区附近",
"中国羌族博物馆附近","古尔沟附近","卓克基土司官寨附近","唐克镇附近","亚琛中央火车站附近","四姑娘山附近",
"三江生态旅游区附近","四姑娘山双桥沟附近","九寨黄龙机场附近","中查沟附近","九寨沟风景区附近","仁吉喜目谷附近",
"九寨沟汽车站附近","坪头羌寨附近","Rheinisch-Westf","九寨沟天堂附近","九寨千古情附近","五花海附近",
"圣地亚哥德孔波斯特拉机场附近","九寨沟口旅游客运中心附近","九寨仙池附近"," 九曲黄河第一湾"]
var arr24=["韩国旅游攻略","鼓浪屿旅游攻略","三亚旅游攻略","巴厘岛旅游攻略","杭州旅游攻略","九寨沟旅游攻略",
"成都旅游攻略","北京旅游攻略","上海旅游攻略","千岛湖旅游攻略","南京旅游攻略","苏州旅游攻略","张家界旅游攻略",
"武汉旅游攻略","西藏旅游攻略","乌镇旅游攻略","厦门旅游攻略","云南旅游攻略","婺源旅游攻略","西安旅游攻略",
"香港旅游攻略","西塘旅游攻略","普吉岛旅游攻略","青岛旅游攻略","天津旅游攻略","台湾旅游攻略"]  
var jdjs="";
arr23.forEach(function(item){
  jdjs+=`<i id='jdm'>${item}</i>`
})
jdgl1.innerHTML="<i id='jjdd'>酒店</i>"+jdjs;
var gljs="";
arr24.forEach(function(item){
  gljs+=`<i id='glm'>${item}</i>`
})
jdgl2.innerHTML="<i id='gll'>攻略</i>"+gljs;





var win=document.getElementById("win")

window.onscroll=function(){
  console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop>=1291&&document.documentElement.scrollTop<3990){
    win.style.display="block"
  }else{
    win.style.display="none"
  }
  
}



