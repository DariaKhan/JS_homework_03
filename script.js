/*
Задание 1
Создайте функцию которая возводит переданное число в куб, 
необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
*/

//Вариант 1
function cube(digit) {
  return Math.pow(digit, 3);
}

console.log(cube(2) + cube(3));

//Вариант 2
cubeVariantTwo = (digit) => Math.pow(digit, 3);
console.log(cubeVariantTwo(2) + cubeVariantTwo(3));

/*
Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, 
необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа 
и выводит в консоль текст "Размер заработной платы за вычетом 
налогов равен значение"
*/

function tax(salaryValue) {
  if (!isNaN(salaryValue)) {
    console.log(
      `Размер заработной платы за вычетом налогов равен ${salaryValue * 0.87}`
    );
  } else {
    console.log("Значение задано неверно");
  }
}
let salaryUser = +prompt("Введите размер заработной платы:");
console.log(tax(salaryUser));

/*
Задание 3
Пользователь с клавиатуры вводит 3 числа, 
необходимо создать функцию, которая определяет 
максимальное значение среди этих чисел
*/

function max(digitOne, digitTwo, digitThree) {
  if (digitOne > digitTwo && digitOne > digitThree) {
    console.log(`максимальное значение: ${digitOne}`);
  } else if (digitTwo > digitOne && digitTwo > digitThree) {
    console.log(`максимальное значение: ${digitTwo}`);
  } else {
    console.log(`максимальное значение: ${digitThree}`);
  }
}
let digitOne = +prompt("Введите первое число:");
let digitTwo = +prompt("Введите второе число:");
let digitThree = +prompt("Введите третье число:");
console.log(max(digitOne, digitTwo, digitThree));

/*
Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/

const sum = (digitOne, digitTwo) => digitOne + digitTwo;
const multiply = (digitOne, digitTwo) => digitOne * digitTwo;
const division = (digitOne, digitTwo) => digitOne / digitTwo;
const difference = (digitOne, digitTwo) =>
  digitOne > digitTwo ? (digitOne - digitTwo) : (digitTwo - digitOne);

let userNumberOne = +prompt("Введите первое число:");
let userNumberTwo = +prompt("Введите второе число:");
console.log(`Cумма введенных чисел: ${sum(userNumberOne, userNumberTwo)}`);
console.log(
  `Произведение введенных чисел: ${multiply(userNumberOne, userNumberTwo)}`
);
console.log(
  `Частное введенных чисел: ${division(userNumberOne, userNumberTwo)}`
);
console.log(
  `Разница введенных чисел: ${difference(userNumberOne, userNumberTwo)}`
);
