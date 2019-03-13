// Задание №1

function initCheckBirthday() {
  const birthday = document.getElementById('birthday').value;

  const result = checkBirthday(birthday) ? "Да" : "Нет";

  document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
  let now = +new Date();
  birthday = +new Date(birthday);
  let diff = now - birthday;
  let age = diff / (365 * 24 * 60 * 60 * 1000 + 21600000);
  return (age >= 18) ? true : false;
}


//Задание №2

function initPrintAnimalSound() {
  const animal = {
    sound: 'grrrr',
  };

  const result = getAnimalSound(animal);

  document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
  let sound = Object.assign({}, animal);
  return ((animal === undefined) ? null : sound.sound);
};




//Задание №3

function initCalculateStatement() {
  for (let idx = 0; idx < 3; idx++) {
    const marks = document.getElementById('learner-' + idx).value.split(',');

    const average = getAverageMark(marks);

    document.getElementById('learner-' + idx + '-average').innerHTML = average;
  }
}

function getAverageMark(marks) {
  let objMarks = []; // Инициализация пустого массива
  let sum = 0; // Переменная хранящая сумму всех оценок
  let roundedAverage = 0; // Переменная хранящая округленный средний балл ученика
  for (let i = 0; i < marks.length; i++) {
    objMarks[i] = parseInt(marks[i], 10); // Проходим циклом по массиву строк и преобразуем в массив чисел
  }
  for (let i = 0; i < objMarks.length; i++) {
    sum += objMarks[i]; // Проходим циклом по массиву чисел и считаем сумму всех оценок массива
  }
  return roundedAverage = Math.round(sum / objMarks.length); // Возвращаем результат вычисления и округления средней оценки
}
  