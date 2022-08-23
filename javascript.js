// Variables
let displayValue = document.getElementById('current-display');
const buttons = Array.from(document.querySelectorAll("button"));
const prevDisplayvalue = document.querySelector('#prev-display');

let num1;
let num2;

// Click Functionality
buttons.map(button => 
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText)
        switch (e.target.innerText){
            //operators: 

            case "+":
                operator = '+'
                num1 = displayValue.innerText
                prevDisplayvalue.innerText = num1 + '+'
                displayValue.innerText = '';
                break;
            case "-":
                operator = '-'
                num1 = displayValue.innerText
                prevDisplayvalue.innerText = num1 + '-'
                displayValue.innerText = '';
                break;
            case "*":
                operator = '*'
                num1 = displayValue.innerText
                prevDisplayvalue.innerText = num1 + '*'
                displayValue.innerText = '';
                break;
            case "/":
                operator = '/'
                num1 = displayValue.innerText
                prevDisplayvalue.innerText = num1 + '/'
                displayValue.innerText = '';
                break;

            case "=":
            num2 = displayValue.innerText
            calculate(num1, num2, operator)
                break;

            case "AC":
                displayValue.innerText = "";
                prevDisplayvalue.innerText = "";
                num1 = ''
                num2 = ''
                operator = ''
                break;

            case "DEL":
                displayValue.innerText = displayValue.innerText.slice(0, -1);
                break;

            default: 
                displayValue.innerText += e.target.innerText;
                break;
        }
    }
    ));

// Functions 
function add(num1, num2){
    return parseFloat(num1) + parseFloat(num2);
}

function minus(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if (num2 == 0){
        return "Error! Undefined"
    } else {
    return num1 / num2;
}
}

function calculate() {
    if (operator === '+'){
        displayValue.innerText = add(num1,num2)
    }else if  (operator === '-'){
        displayValue.innerText = minus(num1,num2)
    }else if  (operator === '*'){
    displayValue.innerText = multiply(num1,num2)
    }else if  (operator === '/'){
    displayValue.innerText = divide(num1,num2)
}
}



