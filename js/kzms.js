var jdss1=document.getElementById('jdss1');
var gdjd=document.getElementById('gdjd1');
jdss1.onclick=function(){
    window.location.href="jdsx.html"
}
gdjd1.onclick=function(){
    window.location.href="gdjd.html"
}
$(function(){
        var num=0;
        var timer=null;
        go();
        $("#box").mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            go();
        });
        $(".span_list").eq(0).css("backgroundColor","#1de786");
        function go(){
          timer=setInterval(function(){
                num++;
                if(num>=7){
                    num=0;
                    $(".ul_list").css("margin-left","0px");
                }
                if(num==6){
                    $(".span_list").css("backgroundColor","transparent");
                    $(".span_list").eq(0).css("backgroundColor","#1de786");
                }
                else{
                    $(".span_list").css("backgroundColor","transparent");
                    $(".span_list").eq(num).css("backgroundColor","#1de786");
                }
                $(".ul_list").animate({"marginLeft":-452*num+"px"},580);
            },2000);
        }

        $(".span_list").each(function (index) {
            $(this).click(function () {
                num=index;
                 clearInterval(timer);
                $(".span_list").css("backgroundColor","transparent");
                $(".span_list").eq(num).css("backgroundColor","#1de786");
                $(".ul_list").stop().animate({"marginLeft":-452*num+"px"},580);
            })
        });
       
        $(".right_click").click(function(){
            if(num<=6){num++;}
            if(num>=6){
                num=0;
                $(".ul_list").css("margin-left","0px");
            }
            if(num==6){
                $(".span_list").css("backgroundColor","transparent");
                $(".span_list").eq(0).css("backgroundColor","#1de786");
            }
            else{
                $(".span_list").css("backgroundColor","transparent");
                $(".span_list").eq(num).css("backgroundColor","#1de786");
            }
            $(".ul_list").stop().animate({"marginLeft":-452*num+"px"},580);

        });

        $(".left_click").click(function(){
            if(num>=0){num--;}
            if(num<=0){
                num=5;
                $(".ul_list").css("margin-left","-2358px")
                $(".span_list").css("backgroundColor","transparent");
                $(".span_list").eq(5).css("backgroundColor","#1de786");
            }
            else{
                $(".span_list").css("backgroundColor","transparent");
                $(".span_list").eq(num).css("backgroundColor","#1de786");
            }
            $(".ul_list").stop().animate({"marginLeft":-452*num+"px"},580);

        });


        $(".left_click").hover(function(){
            $(".btn_left").css("opacity","1");
        },function(){
            $(".btn_left").css("opacity","0.5");
        });

        $(".right_click").hover(function(){
            $(".btn_right").css("opacity","1");
        },function(){
            $(".btn_right").css("opacity","0.2");
        });

    });
var arr=["丽江","厦门","大理","成都","三亚","桂林","嘉兴","北京","杭州","青岛","西安"]
var str="";
var lb=document.getElementById('lb')
arr.forEach(function(item){
    str+=`<li><span>${item}</span><u>|</u></li>`
})
lb.innerHTML=str+`<i>全部城市</i>`;
var arr1=[
{tp:"images/inn.png",tp1:"images/inn.png",js:"还没进到客栈就能感受到悠闲，舒适的气息，一个能让你身心完全放松的地方在等着你！",gd:"更多舒缓心情的客栈>>"},
{tp:"images/fir1.jpg",tp1:"丽江桃花岛观景客栈醉文苑",js:"网友评论：位于古城，装修古香古色，很有感觉",gd:190},
{tp:"images/fir2.jpg",tp1:"丽江老班长青年旅舍",js:"网友评论：环境很好，总之很有感觉，出行也方便，",gd:30},
{tp:"images/fir3.jpg",tp1:"丽江天心阁常名客栈",js:"网友评论：所有一切你想做的，都能满足你所有的小梦想",gd:112},
{tp:"images/fir4.jpg",tp1:"丽江瓦古客栈",js:"网友评论：览尽古城风光，院落草木扶疏，花影僮僮",gd:198}
]
var arr2=[
{tp:"images/inn.png",tp1:"images/inn.png",js:"清晨，老树，田野，山峰……一直留在那里，不随来人离开，等待下一批途径者。给他们讲述关于青春的故事。",gd:"更多捡拾青春的客栈>>"},
{tp:"images/sce1.jpg",tp1:"丽江南有暖树客栈",js:"网友评论：院内小桥流水，荷塘月色，精致典雅",gd:190},
{tp:"images/sce2.jpg",tp1:"丽江百合轩精品客栈",js:"网友评论：地理位置方便，自助洗衣服务人性化",gd:200},
{tp:"images/sce3.jpg",tp1:"丽江福临客栈",js:"网友评论：福临是我住过最文艺的一家小栈",gd:145},
{tp:"images/fir2.jpg",tp1:"丽江老班长青年旅舍",js:"网友评论：位于古城，装修古香古色，很有感觉",gd:30}
]
var fir=document.getElementById("fir")
var sce=document.getElementById("sce")
var thr=document.getElementById("thr")
var fou=document.getElementById("fou")
var str1="";
arr1.forEach(function(item,index){
    if(index===0){
    str1+=`<li><i id='dw1'>"舒缓心情"的客栈</i><i id='dw2'></i><p id='dw3'>${item.js}</p><p id='dw4'>${item.gd}</p></li>`
    }else{
          str1+=`<li><i id='dw5'><img src='${item.tp}'></i><p id='dw6'>${item.tp1}</p><p id='dw7'>${item.js}</p><p id='dw8'>￥${item.gd}起</p></li>`  
    }
})
fir.innerHTML=str1;
thr.innerHTML=str1;
var str2="";
arr2.forEach(function(item,index){
    if(index===0){
    str2+=`<li><i id='dw1'>"捡拾青春"的客栈</i><i id='dw2'></i><p id='dw3'>${item.js}</p><p id='dw4'>${item.gd}</p></li>`
    }else{
          str2+=`<li><i id='dw5'><img src='${item.tp}'></i><p id='dw6'>${item.tp1}</p><p id='dw7'>${item.js}</p><p id='dw8'>￥${item.gd}起</p></li>`  
    }
})
sce.innerHTML=str2;
fou.innerHTML=str2;
arr3=["别致院落","萌宠","浪漫情调","老板热情","品茶读书","文艺范儿","观景露台","吃货天堂","交通便利","夜生活","设施齐全","干净卫生"]
var tj=document.getElementById('tj');
var str3="";
arr3.forEach(function(item){
    str3+=`<li>${item}</li>`
})
tj.innerHTML="<p>网友们还关注这些特色</p>"+str3;