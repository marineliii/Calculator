const display = document.getElementById("display")

function appendToDisplay(input){
    display.value +=input;
}

function clearEverything(){
    display.value=""
}
function calculate(){
    try{

    display.value = eval(display.value)
    }catch(error){
        display.value="Syntax ERROR"
    }
}
window.onload = function(){
    var element = document.querySelector('.display');
    element.scrollLeft = element.scrollWidth;
}