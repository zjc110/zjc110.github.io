
var t = setInterval(move,120);
function move(){
    var processbar = document.getElementById("processbar");
    processbar.style.width = parseInt(processbar.style.width) + 1 + "%";
    processbar.innerHTML = processbar.style.width;
    if(processbar.style.width == "75%"){
        clearInterval(t);
    }
}
var t1 = setInterval(move1,120);
function move1(){
    var processbar1 = document.getElementById("processbar1");
    processbar1.style.width = parseInt(processbar1.style.width) + 1 + "%";
    processbar1.innerHTML = processbar1.style.width;
    if(processbar1.style.width == "80%"){
        clearInterval(t1);
    }
}
var t2 = setInterval(move2,120);
function move2(){
    var processbar2 = document.getElementById("processbar2");
    processbar2.style.width = parseInt(processbar2.style.width) + 1 + "%";
    processbar2.innerHTML = processbar2.style.width;
    if(processbar2.style.width == "90%"){
        clearInterval(t2);
    }
}
var t3 = setInterval(move3,120);
function move3(){
    var processbar3 = document.getElementById("processbar3");
    processbar3.style.width = parseInt(processbar3.style.width) + 1 + "%";
    processbar3.innerHTML = processbar3.style.width;
    if(processbar3.style.width == "90%"){
        clearInterval(t3);
    }
}
//        window.onload = function(){
//            bartimer;
//        }
