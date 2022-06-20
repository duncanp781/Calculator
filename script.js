const calculator = {
  displayValue: 0,
  currentOperation: null,
  num1: 0,
  num2: 0,
  onNum1: true,
};
updateDisplay(calculator);

const numbers = document.querySelector('#numbers');

for(let i = 9; i >= 0; i--){
  if(i === 0){
    const c = document.createElement('button');
    c.id = 'c';
    c.textContent  ='C';
    c.classList.add('function');
    numbers.appendChild(c);

  }
  const num = document.createElement('button');
  num.setAttribute('id', String(i));
  num.textContent = i;
  num.classList.add('num');
  numbers.appendChild(num);
  if (i=== 0){
    const equals = document.createElement('button');
    equals.id = 'equals';
    equals.classList.add('function');
    equals.textContent = '=';
    numbers.append(equals);
  }
}

const nums = document.querySelectorAll('.num');
nums.forEach((num) =>{
  num.addEventListener('click', event => addNumEventHandler(event));
});

const operators = document.querySelectorAll('.operator')
operators.forEach((operator) => {
  operator.addEventListener('click', event => addOperatorHandler(event));
})

const equals = document.querySelector('#equals');
equals.addEventListener('click', (e) => equalsHandler(e));

const clear = document.querySelector('#c');
clear.addEventListener('click', (e) => clearHandler(e));

function clearHandler(e){
  clearCalculator(calculator);
}

function clearCalculator(calculator){
  console.log('clearing');
  calculator.num1 = 0;
  calculator.num2 = 0;
  calculator.onNum1 = true;
  calculator.currentOperation = null;
  updateDisplay(calculator);
}

function equalsHandler(e){
  evaluate(calculator);
}

function addOperatorHandler(e){
  changeOperator(e.target.textContent, calculator);
}

function addNumEventHandler(e){
  addToDisplay(parseInt(e.target.textContent), calculator);
}

function changeOperator(operator, calculator){
  if(operator == calculator.currentOperation) return;
  if(calculator.currentOperation == null){
    calculator.currentOperation = operator;
    calculator.onNum1 = false;
  }else{
    evaluate(calculator);
    calculator.currentOperation = operator;
    calculator.onNum1 = false;
  }
}

function evaluate(calculator){
  if(calculator.currentOperation != null){
    calculator.onNum1 = true;
    calculator.num1 = operate(calculator.currentOperation, calculator.num1, calculator.num2);
    calculator.currentOperation = null;
    calculator.num2 = 0;
  }
  updateDisplay(calculator);
}

function addToDisplay(num, calculator){
  if(calculator.onNum1){
    calculator.num1 = calculator.num1*10 + num;
  }else{
    calculator.num2 = calculator.num2*10 + num;
  }
  updateDisplay(calculator);
}

function updateDisplay(calculator){
  const display = document.querySelector('#display');
  if(calculator.onNum1){
    display.textContent = calculator.num1;
  }else{
    display.textContent = calculator.num2;
  }
}

function operate(operation, a, b){
  switch (operation){
    case '+':
      return add(a,b);
    break;
    case '-':
      return subtract(a,b);
    break;
    case 'x':
      return multiply(a,b);
    break;
    case '/':
      return divide(a,b);
    break;
  }
}


function add(a,b){
  return a+b;
}

function subtract(a,b){
  return a-b;
}

function multiply(a,b){
  return a*b;
}

function divide(a,b){
  return a/b;
}
