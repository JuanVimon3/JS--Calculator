let currNumber = '';
let prevNumber = '';
let operation = null;
let clearNumber = '';

let resultElement = document.getElementById('result');

const appendNumber = (number) => {
    if(currNumber === '0'){
        currNumber = number.toString();
    }else{
        currNumber += number
    }
    updateResult();
}

const operate = (operation, a, b) => {
    const operations = {
        sum: (a, b) => a + b,
        rest: (a, b) => a - b,
        divide: (a, b) => a / b,
        mult: (a, b) => a * b
    }
    return operations[operation](a, b);
}

const calculateResult = () => {
    const current = parseFloat(currNumber);
    const preview = parseFloat(prevNumber);
    const clear = parseFloat(clearNumber)

    if (isNaN(current) || isNaN(preview)) {
        return;
    }
    currNumber = operate(operation, preview, current, clear);
    operation = null;
    prevNumber = '';
    updateResult();
}

const setOperation = (op) => {
    if (currNumber === '') {
        return;
    }
    if (prevNumber !== '') {
        calculateResult();
    }
    operation = op;
    prevNumber = currNumber;
    currNumber = '';
}

const updateResult = () => {
    resultElement.innerText = currNumber;
}

const deletePrev = () => {
    currNumber = currNumber.slice(0, -1) || '0';
    updateResult();
} 

const restart = () => {
    prevNumber = '';
    currNumber = '0';
    operation = null;
    updateResult();
}