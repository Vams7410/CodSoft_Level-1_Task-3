let currentInput = '';
let display = document.getElementById('display');

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function doubleZero() {
    currentInput += '00';
    updateDisplay();
}

function appendSymbol(symbol) {
    currentInput += symbol;
    updateDisplay();
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function calculatePercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}
