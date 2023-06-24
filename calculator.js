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
    if (operator === '+') {
        return add(parseInt(val1), parseInt(val2));
    } else if (operator === '-') {
        return subtract(parseInt(val1), parseInt(val2));
    } else if (operator === 'X') {
        return multiply(parseInt(val1), parseInt(val2));
    } else if (operator === '%') {
        return divide(parseInt(val1), parseInt(val2));
    };
};

// Clears display, history, and all stored values in script
function clear() {
    displayValues = [''];
    display.textContent = '';
    historyLines.forEach(line => line.textContent = '');
};

function updateHistory(solution) {
    historyLines[2].textContent = historyLines[1].textContent;
    historyLines[1].textContent = historyLines[0].textContent;
    historyLines[0].textContent = display.textContent + ' = ' + solution;
    display.textContent = '';
};

displayValues = ['']
display = document.getElementById('display');

historyLines = Array.from(document.querySelectorAll('.history'));

clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);

numberButtons = Array.from(document.querySelectorAll('button.numberbutton'));
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
        displayValues[displayValues.length - 1] += button.textContent;
    });
});

operatorButtons = Array.from(document.getElementsByClassName('operatorbutton'));
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (displayValues[displayValues.length - 1] != '') {
            displayValues[displayValues.length] = button.textContent;
            displayValues[displayValues.length] = '';
            display.textContent += ' ' + button.textContent + ' ';
        };
    });
});

equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
    if (displayValues[displayValues.length - 1] != '') {
        while (displayValues.length > 1) {
            updateSolution = operate(displayValues[0], displayValues[1], displayValues[2]);
            displayValues[0] = updateSolution;
            displayValues.splice(1, 2);
        };
        updateHistory(Math.round(displayValues[0] * 100) / 100);
        displayValues = ['']
    };
});