var lb=document.querySelectorAll(".dian1")
var tu=document.querySelectorAll(".bannertu li")
var con12=document.querySelector(".bannerkuang")
//  var obj=lb[0]
Array.from(lb).forEach(function (ele,index) {
    ele.onmouseover=function () {
        num12=index;
        for(var b=0;b<lb.length;b++){
            lb[b].style.background="#F1F1F1"
            tu[b].style.zIndex=1
            tu[b].style.opacity=0.5
        }
        this.style.background = "#A2A2A2"
        tu[index].style.zIndex=2
        tu[index].style.opacity=1
    }
})
var num12=0;
var r=setInterval(fn,1000)
function fn() {
    num12++;
    if(num12==lb.length){
        num12=0;
    }
    for(var b=0;b<lb.length;b++){
        lb[b].style.background="#F1F1F1"
        tu[b].style.zIndex=1
        tu[b].style.opacity=0.5

    }
    lb[num12].style.background ="#A2A2A2"
    tu[num12].style.zIndex=2
    tu[num12].style.opacity=1
}
con12.onmouseover=function () {
    clearInterval(r);
}
con12.onmouseout=function () {
    r=setInterval(fn,1000)
}



var btn1=document.querySelector(".zuojian");
var btn2=document.querySelector(".youjian");
var con1=document.querySelector(".fangtu-main");
btn1.onclick=function(){
    con1.style.marginLeft=-1226+"px";
    btn1.style.color="#B0B0B3";
}
btn2.onclick=function(){
    con1.style.marginLeft=0+"px";
    btn2.style.color="#B0B0B3";
}
btn1.onmouseover=function(){
    btn1.style.color="red";
}
btn2.onmouseover=function(){
    btn2.style.color="red";
}
btn1.onmouseout=function(){
    btn1.style.color="#E0E0E0";
}
btn2.onmouseout=function(){
    btn2.style.color="#E0E0E0";
}
var num1=0;
setInterval(function () {
    if(num1==0){
        con1.style.transition="all 1s";
    } num1++;
    if(num1==2){num1=0}

    con1.style.marginLeft=-1226*num1+"px";
    // 图片显示位置
},3000)

// con1.addEventListener("transitionend",function () {     //瞬间回到第一张
//     if(num1==1){
//         con1.style.marginLeft=0;
//         con1.style.transition="none";
//         num1=0;
//     }
// });
var num01=0;
function nrbo(a,b,c) {
    num01++;
    if(num01>a){
        num01=a
    }
    if(num01<0){
        num01=0
    }
    b.css({marginLeft:-num01*298+"px"})
    b.css({transition:"all 0.6s"})
    c.eq(num01).css({border:" 2px solid #FF6700"}).siblings().css({border:" 0"})
}
$(".qq").click(function () {
    nrbo(2,$(".qq1"),$(".q1"))
})
$(".ll").click(function () {
    num01-=2;
    nrbo(2,$(".qq1"),$(".q1"))
})
$(".ww2").click(function () {
    nrbo(2,$(".qq2"),$(".w11"))
})
$(".ww1").click(function () {
    num01-=2;
    nrbo(2,$(".qq2"),$(".w11"))
})
$(".ww4").click(function () {
    nrbo(2,$(".qq3"),$(".w112"))
})
$(".ww3").click(function () {
    num01-=2;
    nrbo(2,$(".qq3"),$(".w112"))
})
$(".ww6").click(function () {
    nrbo(2,$(".qq4"),$(".w211"))
})
$(".ww5").click(function () {
    num01-=2;
    nrbo(2,$(".qq4"),$(".w211"))
})
//	$(".lunyuankuang li").each(function (index,val) {
//				$(this)[index].css({border:"2px solid #FF6700;"})
//				$(".ulk2")[index].css({marginLeft:"298px"})
//	})
$(".zj1").hover(function () {
    $(".houj1").css({height:206})
},function () {
    $(".houj1").css({height:0})
})
$(".zj2").hover(function () {
    $(".houj2").css({height:206})
},function () {
    $(".houj2").css({height:0})
})
$(".zj3").hover(function () {
    $(".houj3").css({height:206})
},function () {
    $(".houj3").css({height:0})
})
$(".zj5").hover(function () {
    $(".houj5").css({height:206})
},function () {
    $(".houj5").css({height:0})
})
$(".zj6").hover(function () {
    $(".houj6").css({height:206})
},function () {
    $(".houj6").css({height:0})
})
$(".zj7").hover(function () {
    $(".houj7").css({height:206})
},function () {
    $(".houj7").css({height:0})
})
$(".liji1").hover(function () {
    $(".sec1").css({display: "block"})
},function () {
    $(".sec1").css({display: "none"})
})
$(".liji2").hover(function () {
    $(".sec2").css({display: "block"})
},function () {
    $(".sec2").css({display: "none"})
})
$(".liji3").hover(function () {
    $(".sec3").css({display: "block"})
},function () {
    $(".sec3").css({display: "none"})
})
$(".liji4").hover(function () {
    $(".sec4").css({display: "block"})
},function () {
    $(".sec4").css({display: "none"})
})
$(".liji5").hover(function () {
    $(".sec5").css({display: "block"})
},function () {
    $(".sec5").css({display: "none"})
})
$(".liji6").hover(function () {
    $(".sec6").css({display: "block"})
},function () {
    $(".sec6").css({display: "none"})
})
$(".liji7").hover(function () {
    $(".sec7").css({display: "block"})
},function () {
    $(".sec7").css({display: "none"})
})
$(".liji8").hover(function () {
    $(".sec8").css({display: "block"})
},function () {
    $(".sec8").css({display: "none"})
})
$(".liji9").hover(function () {
    $(".sec9").css({display: "block"})
},function () {
    $(".sec9").css({display: "none"})
})
$(".liji10").hover(function () {
    $(".sec10").css({display: "block"})
},function () {
    $(".sec10").css({display: "none"})
})