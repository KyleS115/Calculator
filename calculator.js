let value1 = Number()
let operator = String()
let value2 = Number()
let equals = Number()

// Adds all arguments together
function add() {
    let editedValue = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        editedValue += arguments[i];
    };
    return editedValue;
};

// Subtracts all remaining arguments from the first argument
function subtract() {
    let editedValue = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        editedValue -= arguments[i];
    };
    return editedValue
};

// Multiplies the first argument by all remaining arguments
function multiply() {
    let editedValue = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        editedValue *= arguments[i];
    };
    return editedValue
};

// Divides the first argument by all remaining arguments
function divide() {
    let editedValue = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        editedValue /= arguments[i];
    };
    return editedValue
};

// Chooses which operator function to use and returns the solution
function operate(val1, operator, val2) {
    if (operator = '+') {
        return add(val1, val2);
    } else if (operator = '-') {
        return subtract(val1, val2);
    } else if (operator = 'x') {
        return multiply(val1, val2);
    } else if (operator = '%') {
        return divide(val1, val2);
    };
};
