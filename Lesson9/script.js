// let user = {
//     name: 'John',
//     age: 30,
//     "likes cars": true
// };

// console.log(user.name);
// user.isAdmin = true;
// console.log(user.isAdmin);
// delete user.age;
// console.log(user.age);
// console.log(user["likes cars"]);
// user["likes cars"] = false;
// console.log(user["likes cars"]);
// let key = 'is married';
// user[key] = false;
// console.log(user[key]);

// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// console.log(user);
// user.name = 'Pete';
// console.log(user);
// delete user.name;
// console.log(user);

// let user = {
//     name: 'John',
//     surname: 'Smith',
//     age: 30,
//     "likes cars": true
// };

// for (let key in user) {
//     console.log(user[key]);
//     if (key == 'name') {
//         console.log(user.name);
//     }
// }

// let codes = {
//     '49': 'Германия',
//     '41': 'Швейцария',
//     '44': 'Великобритания',
//     '1': 'США'
// };
// for (let code in codes) {
//     console.log(code, codes[code]);
// }

// let codes_ = {
//     '+49': 'Германия',
//     '+41': 'Швейцария',
//     '+44': 'Великобритания',
//     '+1': 'США'
// };
// for (let code in codes_) {
//     console.log(code, codes_[code]);
// }

// let numbers = [4, 12, 15, 17, 18, 19, 20, 21];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);

// // У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// let sum = 0;
// for (let person in salaries) {
//     sum += salaries[person];
// }
// console.log(sum);

// Функции
// function showMessage() {
//     let message = 'Hello!';
//     console.log(message);
// }
// showMessage();
// showMessage();

// function showMessage(from = 'Anna', text = 'Hello') {
//     console.log(from, text);
// }
// showMessage('John', 'Hello!');
// showMessage();
// showMessage('Sam');

// function sum(a, b) {
//     return a + b;
// }
// res = sum(3, 6);
// console.log(res);

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     }
//     return false;
// }
// console.log(checkAge(12));

// Объявить функцию, которая считывает значение через prompt и выводит “ДА” если число четное и “НЕТ” в ином случае.
// function checkNumber() {
//     number = Number(prompt("Введите число"));
//     if (number % 2 == 0) {
//         console.log('ДА');
//     }
//     else {
//         console.log('НЕТ');
//     }
// }
// checkNumber();

// function myPow(num, pow) {
//     let res = 1;
//     for (let i = 0; i < pow; i++) {
//         res = res * num;
//     }
//     return res;
// }
// console.log(myPow(2,8));
// console.log(Math.pow(2,8));
// console.log(myPow(2,1));
// console.log(myPow(2,2));
// console.log(myPow(2,3));
