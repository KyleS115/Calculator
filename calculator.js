// Adds all arguments together
function add(a, b) {
    return a + b
};

// Subtracts all remaining arguments from the first argument
function subtract(a, b) {
    return a - b
};

// Multiplies the first argument by all remaining arguments
function multiply(a, b) {
    return a * b
};

function divide(a, b) {
    return a / b
};

// Chooses which operator function to use and returns the solution
function operate(val1, operator, val2) {
    if (operator = '+') {
        return add(parseInt(val1), parseInt(val2));
    } else if (operator = '-') {
        return subtract(parseInt(val1), parseInt(val2));
    } else if (operator = 'X') {
        return multiply(parseInt(val1), parseInt(val2));
    } else if (operator = '%') {
        return divide(parseInt(val1), parseInt(val2));
    };
};

// clears all 
function clear() {
    display.textContent = ''
    historyLines.forEach(line => line.textContent = '');
};

function updateDisplay() {
    
};

displayValues = []
display = document.getElementById('display');

historyLines = document.querySelectorAll('.history')

clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);

numberButtons = document.getElementsByClassName('numberbutton');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator === '') {
            value1 += button.textContent
        }
    })
});

operatorButtons = document.getElementsByClassName('operatorbutton');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (value1 != '' && value2 === '') {
            operator = button.id;
            plotDisplay();
        };
    });
});