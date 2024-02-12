const firstNum = document.getElementById("firstNum");
const secondNum = document.getElementById("secondNum");
const submitBtn = document.getElementById("submit");
const resultElement = document.getElementById("result");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const share = document.getElementById("share");
let action;

plus.onclick = () => {
    action = '+';
}

minus.onclick = () => {
    action = '-';
}

multiply.onclick = () => {
    action = '*';
}

share.onclick = () => {
    action = '/';
}

function printResult(result){
    if(result < 0){
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'green';
    }
    resultElement.textContent = result;
}

function computeNumbersWithAction(){
    const num1 = Number(firstNum.value);
    const num2 = Number(secondNum.value);
    if(action == '+'){
        return num1 + num2;
    } else if (action == '-'){
        return num1 - num2;
    } else if (action == '*'){
        return num1 * num2;
    } else if (action == '/'){
        return num1 / num2;
    }
}

submitBtn.onclick = function(){
    const res = computeNumbersWithAction();
    printResult(res);
}