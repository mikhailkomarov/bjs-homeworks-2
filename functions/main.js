'use strict'

// Задание №1 (Корни квадратного уравнения)

//Функция №1 

function getSolution(a,b,c) {
	let d = b * b - 4 * a * c; // Переменная хранящая значение формулы дискриминанта
	let x1, x2; // Инициализация переменных хранящих значение формул для вычисления корней уравнения
  if (d < 0) {
    return {
      D: d
    }
  } else if (d == 0) {
    x1 = -b / (2 * a);
    return {
      roots: [x1],
      D: d
    }
  } else if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    return  {
      roots: [x1, x2],
      D: d
    }
  }
}

//Функция №2

function showSolutionsMessage( a,b,c ) {
  let result = getSolution(a,b,c); // Переменная хранящая результат работы функции getSolution(a,b,c)
  console.log(`Вычисляем корни квадратного уравнения ${a}x^2 + ${b}x + ${c} = 0`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (`${result.D}` < 0) {
    console.log('Уравнение не имеет вещественных корней');
  } else if (`${result.D}` == 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
  } else if (`${result.D}` > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}
showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);



// Задание №2 (Расшифровка данных)

function getPersonData(secretData) {
  if (secretData.aaa === 0 && secretData.bbb === 0) {
    return {
      firstName: 'Родриго',
      lastName: 'Родриго'
    }
  } 
  if (secretData.aaa === 1 && secretData.bbb === 1) {
    return {
      firstName: 'Эмильо',
      lastName: 'Эмильо'
    }
  }
  if (secretData.aaa === 1 && secretData.bbb === 0) {
    return {
      firstName: 'Эмильо',
      lastName: 'Родриго'
    }
  }
  if (secretData.aaa === 0 && secretData.bbb === 1) {
    return {
      firstName: 'Родриго',
      lastName: 'Эмильо'
    }
  }
}

console.log(getPersonData({
  aaa: 0,
  bbb: 0
}));
console.log(getPersonData({
  aaa: 1,
  bbb: 0
}));
console.log(getPersonData({
  aaa: 0,
  bbb: 1
}));
console.log(getPersonData({
  aaa: 1,
  bbb: 1
}));


// Задание №3 (Журнал успеваемости)

// Объект хранящий данные об оценках ученика

let data = {
  algebra: [2,4,5,2,3,4],
  geometry: [2,4,5],
  russian: [3,3,4,5],
  physics: [5,5],
  music: [2,2,6],
  english: [4,4,3],
  poetry: [5,3,4],
  chemistry: [2],
  french: [4,4],
};


//Функция вычисляющая среднее значение оценок в массиве

function getAverageScore(data) {
  let sum = 0; // Переменная хранящая сумму всех оценок
  let result; //  Переменная хранящая результат вычислений средней оценки по предмету (массиву)
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  result = sum / data.length;
  return result;
}

// Функция 

function getAverageValue(data) {
  let objMarks = {}; // Инициализация пустого объекта
  let arrayMarks = []; // Инициализация пустого массива
  for (let key in data) {
    objMarks[key] = getAverageScore(data[key]); 
    arrayMarks.push(objMarks[key]);
  }
  let average = getAverageScore(arrayMarks);
  objMarks.average = average;
  return objMarks;
}

let objectMarks = getAverageValue(data);
console.log(objectMarks);
