const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculeResult() {
    const value = eval(display.value);
    if (value === undefined){
        alert("Digite um valor!") 
    } else{
       display.value = value ;
    }

}