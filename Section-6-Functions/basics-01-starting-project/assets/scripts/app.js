const defaultResult = 0;
let currentResult = defaultResult;

let logEntries = [];
let operationLog = [];

function getUserInput() {
    return +userInput.value;
}

function createAndWriteOutput(newValue) {
    logEntries.push(newValue);
    let calcDescription = `0 `;
    for (var index in logEntries) {
        calcDescription += `${logEntries[index].operator} ${logEntries[index].number} `;
    }
    outputResult(currentResult, calcDescription);

}

function writeToLog(
    operationSymbol,
    previousResult,
    operatedNumber,
    newResult) {
    const newOpLog = {
        operation: operationSymbol,
        previousResult: previousResult,
        calcNumber: operatedNumber,
        result: newResult
    }
    operationLog.push(newOpLog);
    console.log(operationLog);
}

function calculate(calculationType) {
    const enteredNumber = getUserInput();
    const prevResult = currentResult;
    let mathOperator;

    if (calculationType !== 'ADD' && calculationType !== 'SUBTRACT' && calculationType !== 'MULTIPLY' && calculationType !== 'DIVIDE' || !enteredNumber) {
        return;
    }

    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    const logEntry = {
        operator: mathOperator,
        number: enteredNumber
    }
    writeToLog(calculationType, prevResult, enteredNumber, currentResult)
    createAndWriteOutput(logEntry);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));
console.log(logEntries);




