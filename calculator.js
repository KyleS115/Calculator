// FUNCTION -------------------------------------------------------

function add(a, b) {
    return Math.round((a + b) * 100) / 100
};

function subtract(a, b) {
    return Math.round((a - b) * 100) / 100
};

function multiply(a, b) {
    return Math.round((a * b) * 100) / 100
};

function divide(a, b) {
    return Math.round((a / b) * 100) / 100
};

    // Chooses which operator function to use and returns the solution
function operate(val1, operator, val2) {
    if (operator === '+') {
        return add(val1, val2);
    } else if (operator === '-') {
        return subtract(val1, val2);
    } else if (operator === 'X') {
        return multiply(val1, val2);
    } else if (operator === '%') {
        return divide(val1, val2);
    };
};

    // Clears display, history, and all stored values in script
function clear() {
    displayValues = [''];
    display.textContent = '';
    historyLines[0].textContent = '';
    historyLines[1].textContent = '';
    historyLines[2].textContent = '';
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

allButtons = Array.from(document.querySelectorAll('button'));

// BUTTON EVENT LISTENERS ----------------------------------------------------

clearButton.addEventListener('click', () => {
    clear();
});

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
    console.log(displayValues);
    if (displayValues[displayValues.length - 1] != '') {
        while (displayValues.length > 1) {
            console.log(displayValues);
            updateSolution = operate(parseFloat(displayValues[0]), displayValues[1], parseFloat(displayValues[2]));
            displayValues[0] = updateSolution;
            displayValues.splice(1, 2);
        };
        console.log(displayValues);
        updateHistory(displayValues[0]);
        displayValues = ['']
    };
});

allButtons.forEach(button => {
    button.onmouseover = () => {
        button.style.filter = 'brightness(80%)';
    };
    button.onmouseout = () => {
        button.style.filter = 'brightness(100%)';
    };
});