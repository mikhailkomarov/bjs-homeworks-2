'use strict'

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
};

function calculateTotalMortgage(percent, contribution, amount, date) {
  let creditTerms = []; // Инициализация пустого массива 
  for (let i = 0; i < arguments.length - 1; i++) {
    creditTerms[i] = parseInt(arguments[i]);
    if (isNaN(arguments[i])) {
      return `Параметр ${i + 1} содержит не правильное значение ${arguments[i]}`;
    }  
  }
  let S = amount - contribution; // Переменная хранящая сумму, которую необходимо вернуть банку
  let P = (percent / 100) / 12; // Переменная хранащая процентную ставку по кредиту
  let currentDate = new Date(); // Переменная хранящая значение текущей даты
  date = new Date(date); // Переменная хранящая значение даты окончания кредита
  let n = ((date.getMonth() - currentDate.getMonth()) + (12 * (date.getFullYear() - currentDate.getFullYear()))); // Коли-во месяцев кредита
  let payment = (S * (P + P / (((1 + P) ** n) - 1))); // Ежемесячный платеж
  let totalAmount = (payment * n).toFixed(2); // Общая сумма к оплате
  return totalAmount;
};


// Задание №2

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
};

// Функция которая проверяет наличие или отсутствие имени 

function getGreeting(name) {
  if (name == 'null' || name == 'undefined') {
    console.log('Привет,мир! Меня зовут Аноним');
    return 'Привет,мир! Меня зовут Аноним'
  } else if (name == Number(name)) {
    console.log('Привет,мир! Меня зовут Аноним');
    return 'Привет,мир! Меня зовут Аноним';
  } else {
    console.log(`Привет, мир! Меня зовут ${name}.`);
    return `Привет, мир! Меня зовут ${name}.`;
  };
};