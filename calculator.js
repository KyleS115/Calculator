// FUNCTION -------------------------------------------------------

function add(a, b) {
    return a + b
};

function subtract(a, b) {
    return a - b
};

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

    // Shifts history down and clears display
function updateHistory(solution) {
    historyLines[2].textContent = historyLines[1].textContent;
    historyLines[1].textContent = historyLines[0].textContent;
    historyLines[0].textContent = display.textContent + ' = ' + solution;
    display.textContent = '';
};

// DOM ASSIGNMENTS ---------------------------------------------------------

displayValues = ['']

display = document.getElementById('display');

historyLines = Array.from(document.querySelectorAll('.history'));

clearButton = document.getElementById('clear');

numberButtons = Array.from(document.querySelectorAll('button.numberbutton'));

operatorButtons = Array.from(document.getElementsByClassName('operatorbutton'));

equalsButton = document.getElementById('equals');

clearButton.addEventListener('click', clear());

// BUTTON EVENT LISTENERS ----------------------------------------------------

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
        displayValues[displayValues.length - 1] += button.textContent;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (displayValues[displayValues.length - 1] != '') {
            displayValues[displayValues.length] = button.textContent;
            displayValues[displayValues.length] = '';
            display.textContent += ' ' + button.textContent + ' ';
        };
    });
});

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