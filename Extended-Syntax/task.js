'use strict'

//Задание №1

function calculateQuadraticEquation(){
  let a = +window.a.value;
  let b = +window.b.value;
  let c = +window.c.value;
  let result = getResult(a,b,c);
  window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
  let span = window.result;
  span.textContent = "х = "+result;
};

function getResult(a,b,c){
  if (a == 0) {
    return 'Ошибка, a = 0 - недопустимое значение';
  };
  let d = b * b - 4 * a * c; // Формула дискриминанта 
  let x, x1, x2; // Переменные хранящие значения x, x1 и x2
  let twoRoots = []; // Инициализация пустого массива
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    twoRoots.push(x1, x2);
    console.log(twoRoots);
    console.log(`Корни уравнения: ${twoRoots}`);
    return x = twoRoots;
  } else if (d == 0) {
    x1 = -b / (2 * a);
    console.log(`Один корень уравнения: ${x1}`);
    return x = x1;
  } else if (d < 0) {
    console.log('Корней нет, т.к. d < 0')
    return null;
  };
    return x;
};

//Задание №2

function calculateDrinkTask(){
  let name = window.personName.value;
  let dateOfBirthday = new Date(window.dateOfBirthday.value);
  let drink = askDrink(name, dateOfBirthday);
  window.drink.textContent = drink;
};

function askDrink(name,dateOfBirthday){
  dateOfBirthday.getFullYear(); // С помощью метода getFullYear() получаем год из текущей даты
  let currentDate = new Date(); // Инициализация объекта с текущей датой
  let age = currentDate.getFullYear() - dateOfBirthday.getFullYear(); // Переменная хранящая (возраст), результат вычислений даты рождения и текущей даты
  console.log(age); // Вывод возраста пользователя в консоль
  let result; 
  if (age > 18) {
    result = `Не желаете ли олд-фэшн ${name}`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  };
  return result; // Возврат результата из функции
};

//Задание №3

function calculateAverageRating(){
  let marks = window.marks.value.split(" ").map(Number);
  let averageMark = getAverageMark(marks);
  window.averageMark.textContent = averageMark;
};

function getAverageMark(marks){
  let sum = 0; // Переменная хранящая сумму всех оценок
  let count = 0; // Переменная хранящая кол-во оценок
  let arrayMarks = []; // Инициализация пустого массива

  // С помощью цикла считаем общее колличество введёных в поле оценок
  for (let i = 0; i < marks.length; i++) {
    count += 1;
  };

  // Проверяем, если количество оценок больше 5, то выводим эту информацию в консоль и обрезаем массив
  if (count > 5) {
    console.log(`Всего оценок: ${count}`);
    arrayMarks = marks.slice(0,5);
  };
  
  // С помощью цикла проходим по массиву и складываем все оценки в общую сумму
  for (let i = 0; i < arrayMarks.length; i++) {
    sum += arrayMarks[i];
  };
  console.log(sum / arrayMarks.length); // Вычисляем среднюю оценку
};
