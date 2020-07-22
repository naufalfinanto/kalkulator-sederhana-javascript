//Definiikan 3 variabel
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

//layar kalkulator
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

//Mengkonfigurasi angka
const numbers = document.querySelectorAll(".number")

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number
    } 
    else{
        currentNumber += number
    }    
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })  
})

//Konfigurasi operator
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

//definisikan function inputOperator
const inputOperator = (operator) => {
    if (calculationOperator === ''){
    prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign') 

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator){
      case "+":
        result = parseFloat(prevNumber) + parseFloat(currentNumber)
        break  
      case "-":
        result = parseFloat(prevNumber) - parseFloat(currentNumber)
        break 
      case "*":
        result = parseFloat(prevNumber) * parseFloat(currentNumber)
        break 
      case "/":
        result = parseFloat(prevNumber) / parseFloat(currentNumber)
        break 
      default:
        return   
    }
    currentNumber = result
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

//definisikan function clearAll
const clearAll = () =>{
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
    //console.log('AC button is pressed')
    clearAll()
    updateScreen(currentNumber)
})

//definisikan untuk class desimal
const decimal = document.querySelector('.decimal')

//function desimal
inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})


