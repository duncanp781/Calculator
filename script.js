const numbers = document.querySelector('#numbers');
for(let i = 9; i >= 0; i--){
  const num = document.createElement('button');
  num.setAttribute('id', String(i));
  num.textContent = i;
  num.classList.add('num');
  numbers.appendChild(num);
}

function operate(operation, a, b){
  switch (operation){
    case 'add':
      return add(a,b);
    break;
    case 'subtract':
      return subtract(a,b);
    break;
    case 'multiply':
      return multiply(a,b);
    break;
    case 'divide':
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
