"use strict"
let numFirst = +prompt('Введите первое число');
let numSecond = +prompt('Введите второе число');
let operator = prompt('Введите знак операции'); 

function calcResult(numFirst, numSecond, operator) {
  switch (operator) {
    case '+':
      return numFirst + numSecond;
    case '-':
      return numFirst - numSecond;
    case '*':
      return numFirst * numSecond;
    case '/':
      return numFirst / numSecond;
  }
}console.log(calcResult(numFirst, numSecond, operator));
