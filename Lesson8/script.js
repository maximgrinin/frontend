// let number1 = Number(prompt('Enter the number 1'));
// let number2 = Number(prompt('Enter the number 2'));
// if (number1 > number2) {
//     console.log('number1 is greater');
// }
// else if (number1 < number2) {
//     console.log('number2 is greater');
// }
// else {
//     console.log('numbers are equal');
// }

// let fruits = ['Яблоко', 'Банан'];
// console.log(fruits.length);
// let first = fruits[0];
// console.log(first);
// let last = fruits[fruits.length-1];
// console.log(last);

// fruits.push('Апельсин');
// console.log(fruits.length);
// console.log(fruits);

// fruits.pop();
// console.log(fruits.length);
// console.log(fruits);

// fruits.unshift('Клубника');
// console.log(fruits.length);
// console.log(fruits);


// fruits.shift('Клубника');
// console.log(fruits.length);
// console.log(fruits);

// let pos = fruits.indexOf('Банан');
// console.log(pos);
// fruits.splice(pos, 1);
// console.log(fruits.length);
// console.log(fruits);

// let arr = [];
// let num1 = Number(prompt('Enter the number 1'));
// let num2 = Number(prompt('Enter the number 2'));
// let num3 = Number(prompt('Enter the number 3'));
// arr.push(num1, num2, num3);
// console.log(arr);

// Задание:
// 1.	Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.	Добавьте «Рок-н-ролл» в конец.
// 3.	Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 4.	Удалите первый элемент массива и покажите его.
// 5.	Вставьте Рэп и Регги в начало массива.

// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// console.log(styles);
// // let mid = Math.ceil(styles.length / 2) - 1;
// let mid = Math.floor(styles.length / 2);
// styles[mid] = 'Классика';
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift('Рэп', 'Рэгги');
// console.log(styles);

// Задание: Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива.
// let arr = [1, 4, 2, 5, 3];
// let sq_arr = [];
// sq_arr.push(Math.pow(arr[0], 2), Math.pow(arr[1], 2), Math.pow(arr[2], 2), Math.pow(arr[3], 2), Math.pow(arr[4], 2));
// console.log(arr);
// console.log(sq_arr);

// for(let num = 0; num <= 5; num++) {
//     console.log(num);
//     if (num == 2) {
//         break;
//     }
// }

let arr = [];
let sq_arr = [];
for (let num = 0; num < 5; num++) {
    arr.push(Number(prompt('Enter the number ' + (num + 1) + ' :')));
    sq_arr.push(Math.pow(arr[num], 2));
}
console.log(arr);
console.log(sq_arr);

// for (let num = 0; num < arr.length; num++) {
//     sq_arr.push(Math.pow(arr[num], 2));
// }
// console.log(sq_arr);
