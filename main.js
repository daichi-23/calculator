const display = document.getElementById("display");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button_add = document.getElementById("button_add");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button_minus = document.getElementById("button_minus");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button_multiply = document.getElementById("button_multiply");
const button0 = document.getElementById("button0");
const button00 = document.getElementById("button00");
const button_point = document.getElementById("button_point");
const button_divide = document.getElementById("button_divide");
const button_ac = document.getElementById("button_ac");
const button_equal = document.getElementById("button_equal");

const equal = function() {
    display.innerHTML = eval(display.innerHTML);
}
button_equal.addEventListener("click",equal);

const ac = function() {
    display.innerHTML= 0;
}
button_ac.addEventListener("click",ac);

function putNumber(target) {
    if (display.innerHTML == 0) {
        display.innerHTML = target.innerHTML;
    }else {
        display.innerHTML += target.innerHTML;
    }
}


function putPoint(target) {
    if (display.innerHTML.slice(-1) == ".") {
        return;
    }else {
        display.innerHTML += target.innerHTML;
    }
}

function putSign(target) {
    if (display.innerHTML.slice(-1) == "+" ){
        display.innerHTML = display.innerHTML.slice(0,-1) + target.innerHTML;
    } else if (display.innerHTML.slice(-1) == "-" ){
        display.innerHTML = display.innerHTML.slice(0,-1) + target.innerHTML;
    } else if (display.innerHTML.slice(-1) == "*" ){
        display.innerHTML = display.innerHTML.slice(0,-1) + target.innerHTML;
    } else if (display.innerHTML.slice(-1) == "/" ){
        display.innerHTML = display.innerHTML.slice(0,-1) + target.innerHTML;
    } else {
        const preEval = eval(display.innerHTML);
        display.innerHTML = preEval + target.innerHTML;
        
    }
}



