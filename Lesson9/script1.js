// 1. Составьте программу, которая присваивает переменной d значение 7, а затем выводит на экран: в первой строке - это значение, во второй – квадрат этого значения, в третьей – куб этого значения.
// let d = 7;
// for (let i = 1; i <4; i++) {
//     console.log(d**i);
// }

// 2. Составьте программу, которая принимает с клавиатуры целое число и, если оно положительное, увеличивает его вдвое.
// Программа должна выводить на экран новое значение.
// let num1 = Number(promt());
// if(num1 > 0) {
//     console.log(num1*2);
// }

// 3. Составьте программу, которая принимает с клавиатуры два целых числа и, если первое больше второго, выводит на экран их сумму, если же наоборот – выводит на экран их произведение. В случае же, если числа одинаковы, программа выводит на экран сообщение "числа одинаковые".
// let num1 = Number(promt());
// let num2 = Number(promt());
// if(num1 > num2) {
//     console.log(num1+num2);
// }
// else if(num2 > num1) {
//     console.log(num1*num2);
// }
// else {
//     console.log("the same");
// }

// 4. Составьте программу, которая принимает с клавиатуры целое число и выводит на экран его квадрат – но только в том случае, если введенное число отрицательно.
// В противном случае – на экран выводится сообщение "ошибка".
// let num = Number(promt());
// if(num1 < 0) {
//     console.log(num1*num1);
// }
// else {
//     console.log("error");
// }

// 5. Составьте программу, которая принимает с клавиатуры два числа: первое – количество учеников в классе, второе – количество стульев в кабинете.
// Программа проверит соответствие между этими двумя значениями и выведет на экран соответствующую информацию.
// ввод: 24, 28 ⇒ вывод: стульев хватает; ввод: 24, 22 ⇒ вывод: стульев не хватает)
// let num1 = Number(promt("учеников"));
// let num2 = Number(promt("стульев"));
// if(num1 > num2) {
//     console.log("не хватает");
// }
// else {
//     console.log("хватает");
// }

// 6. Составьте программу, которая выводит на экран все однозначные положительные числа в возрастающем порядке.
// Перед началом вывода на экран следует вывести "старт", а после окончания вывода чисел – "финиш".
// вывод: старт, 1, ... 9, финиш)
// console.log("старт");
// for(let i = 1; i <10; i++) {
//     console.log(i);
// }
// console.log("финиш");
// плюсовать к строковой переменной чтобы вывод был вряд

// 7. Составьте программу, которая выводит на экран все двузначные положительные числа, делящиеся без остатка на 5 (начиная с наименьшего).
// for(let i=10;i<100;i+=5) {
//     console.log(i);
// }
// for(let i=10;i<100;i++) {
//     if (i%5==0) {
//         console.log(i);
//     }
// }

// 8. Написать цикл, который выводит те числа из массива, которые больше или равны 15.
// let arr = [4, 23, 7, 39, 19, 0, 9, 14]
// for(let i=0;i<arr.length; i++) {
//     if (arr[i] >=15) {
//         console.log(i);
//     }
// }

// 9. Написать цикл, который выводит только нечетные числа
// let arr = [4, 23, 7, 39, 19, 0, 9, 14]
// for(let i=0;i<arr.length; i++) {
//     if (arr[i]%2 != 0) {
//         console.log(i);
//     }
// }

// 10. Вывести только те значения массива, индекс которых кратен трем
// let arr = [4, 23, 7, 39, 19, 0, 9, 14]
// for(let i=0;i<arr.length; i++) {
//     if (i%3 == 0) {
//         console.log(i);
//     }
// }
// for(let i=3;i<arr.length; i+=3) {
//       console.log(i);
// }
