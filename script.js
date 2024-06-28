/*let calculator = {
    displayValue:0,
    firstOperand: number,
    typingASecondOperand: true,
    operator:'',

}*/
//setp 0 is when the first numbers is being displayed on the display input(screen)

let num1 = 0
let  num2 = 0
let operation
let result = 0
let numbers1 = []
let numbers2 = []
let step = 0

let display = document.getElementById('display');




/*function clickToDisplay(num1){
   
   
    display.value += num1 ;
   
  }*/
    function clickToDisplay(num) {
        if (operation) {
            num2 = parseFloat(display.value + num);
        } else {
            num1 = parseFloat(display.value + num);
        }
        display.value += num;
    }


/*function getOperator(operator){
    
   display.value = display.value + operator
   
}*/
function getOperator(op) {
    if (operation) {
        calculate(); // If already have an operation, calculate first
    }
    operation = op;
    display.value += op;
}


/*function clearAll(){
display.value = "";
}*/

function clearAll() {
    display.value = "";
    num1 = 0;
    num2 = 0;
    operation = null;
    result = 0;
}

function deleteDisplay(){
display.value = display.value.toString().slice(0,-1);
}





function calculate() {
    if (!operation) return;

    num2 = parseFloat(display.value);

    if (operation == '+') {
        result = num1 + num2;
    } else if (operation == '-') {
        result = num1 - num2;
    } else if (operation == '*') {
        result = num1 * num2;
    } else if (operation == '/') {
        result = num1 / num2;
    }

    display.value = result;
    num1 = result;
    num2 = 0;
    operation = null;
}