function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    const p = document.getElementById("result").value;
    const q = eval(p);
    document.getElementById("result").value = q;
}
function clearscreen() {
  document.getElementById("result").value = "";
}
function squaredisplay(){
    const p = document.getElementById("result").value;
    document.getElementById("result"). value = p ** 2;
}

function cubedisplay(){
    const p = document.getElementById("result").value;
    document.getElementById("result"). value = p**3 ;
}

function squarerootdisplay() {
    const p = document.getElementById("result").value;
    document.getElementById("result"). value = Math.sqrt(p);
}

function sin() {
    const p = document.getElementById("result").value;
    document.getElementById("result"). value = Math.sin(p);
}
