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

console.log(add(2, 5, 7));
console.log(14);

console.log(subtract(5, 3, 1));
console.log(1);

