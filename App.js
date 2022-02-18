// --Symbols--
var firstNumber = 0
var operator = ""

const commaButton = () => {
    operator = ","
    result.innerHTML = result.innerHTML + "."
}
const buttonAC = () => {
    operator = "."
    result.innerHTML = ""
}
const negativePositiveButton = () => {
    operator = "."
    result.innerHTML = result.innerHTML / (-1);
}
const percentButton = () => {
    operator = "."
    result.innerHTML = result.innerHTML / 100
}
const divideButton = () => {
    operator = "/"
    firstNumber = result.innerHTML
}
const multipleButton = () => {
    operator = "x"
    firstNumber = result.innerHTML
}
const extractionButton = () => {
    operator = "-"
    firstNumber = result.innerHTML
}
const additionButton = () => {
    operator = "+"
    firstNumber = result.innerHTML
}
const equalButton = () => {
    switch (operator) {
        case "+":
            result.innerHTML = parseFloat(firstNumber) + parseFloat(result.innerHTML)
            break;
        case "-":
            result.innerHTML = parseFloat(firstNumber) - parseFloat(result.innerHTML)
            break
        case "x":
            result.innerHTML = parseFloat(firstNumber) * parseFloat(result.innerHTML)
            break
        case "/":
            result.innerHTML = parseFloat(firstNumber) / parseFloat(result.innerHTML)
            break
        default:
            break;
    }
    operator = ""
}

// --Numbers--
const calculator = document.querySelector('.calculator') //calculator ana divini tutar.
const result = calculator.querySelector('.result-label'); //calculator divinin içindeki result-label'ı tutar. 

const checkOperator = () => {
    if (operator !== "" && firstNumber === result.innerHTML) {
        result.innerHTML = ""
    }
}
const allNumbers = (number) => {
    checkOperator()
    result.innerHTML = result.innerHTML + number

}
