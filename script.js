/*let calculator = {
    displayValue:0,
    firstOperand: number,
    typingASecondOperand: true,
    operator:'',

}*/
//setp 0 is when the first numbers is being displayed on the display input(screen)
function switchTheme(theme, activeIconId) {
    document.getElementById('theme-link').href = theme;

    // Toggle active state for icons
    if (activeIconId === 'icon') {
        document.getElementById('icon').classList.add('active');
        document.getElementById('icon2').classList.remove('active');
        document.getElementById('icon3').classList.remove('active');
    } else if (activeIconId === 'icon2') {
        document.getElementById('icon').classList.remove('active');
        document.getElementById('icon2').classList.add('active');
        document.getElementById('icon3').classList.remove('active');
    } else if (activeIconId === 'icon3') {
        document.getElementById('icon').classList.remove('active');
        document.getElementById('icon2').classList.remove('active');
        document.getElementById('icon3').classList.add('active');
    }
}

let num1 = 0
let  num2 = 0
let operation
let result = 0
let numbers1 = []
let numbers2 = []
let step = 0

let display = document.getElementById('display');


    function clickToDisplay(num) {
        display.value += num;

        if (operation) {
            console.log(display.value.split(operation))
            
            num2 = parseFloat(display.value.split(operation)[1]);
        } else {
            num1 = parseFloat(display.value);
        }
        console.log(display.value, 'display.value',num2, 'num2', num1, 'num1')

    }



function getOperator(op) {
    if (operation) {
        calculate(); // If already have an operation, calculate first
    }
    operation = op;
    display.value += op;
}

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
    console.log({operation, num1, num2})

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