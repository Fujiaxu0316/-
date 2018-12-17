var jdss1=document.getElementById('jdss1');
var kzms=document.getElementById('kzms1');
jdss1.onclick=function(){
    window.location.href="jdsx.html"
}
kzms.onclick=function(){
    window.location.href="kzms.html"
}

  var img=document.querySelectorAll("#lunbo li");
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
  ym[this.index].style.background="#1c90bb";
}
} 
img[jjj].style.opacity=1;
  ym[jjj].style.background="#1c90bb";
  jjj++;
  if(jjj===4){jjj=0};
}
var arr=["三亚","上海","北京","香港","广州","澳门","杭州","深圳","厦门","南京","西安"]
var str="";
var lb=document.getElementById('lb')
arr.forEach(function(item){
    str+=`<li><span>${item}</span><u>|</u></li>`
})
lb.innerHTML=str+`<i>全部城市</i>`;
var jdnr=document.getElementById("jdnr")
var arr1=[
{tp:"images/hhjd1.jpg",mz:"三亚海棠湾9号度假酒店",jg:539,hhx:"豪华型",pj:"网友评价说 : 酒店很大气，硬件设施非常好，房间宽敞舒适，服务员态度很好很亲和。"},
{tp:"images/hhjd2.jpg",mz:"三亚亚龙湾凯莱仙人掌度假酒店",jg:299,hhx:"豪华型"},
{tp:"images/hhjd3.jpg",mz:"三亚湾海居铂尔曼度假酒店",jg:567,hhx:"豪华型"},
{tp:"images/hhjd4.jpg",mz:"三亚鹿岭海湾维景国际大酒店(原三亚海湾维景国际大酒店)",jg:279,hhx:"豪华型"},
{tp:"images/hhjd5.jpg",mz:"三亚玉海国际度假酒店",jg:179,hhx:"豪华型"}
]
var str1="";
arr1.forEach(function(item,index){
  if(index===0){
    str1+=`<li id='dyg'><img src='${item.tp}' id='dyt'><p id='mz111'>${item.mz}</p><p id='hhx'>${item.hhx}</p><p id='pj'>${item.pj}</p><p id='jg'>￥${item.jg}起</p></li>`
  }else{
    str1+=`<li id='deg'><img src='${item.tp}' id='det'><p id='mz122'>${item.mz}</p><p id='hhx1'>${item.hhx}</p><p id='jg1'>￥${item.jg}起</p></li>`

  }
})
jdnr.innerHTML=str1;
















