// alert("Hello!");

// let paragraph = document.querySelector("p");
// let classes = paragraph.className;
// console.log(classes)
// paragraph.className = "paragraph1"
// classes = paragraph.className;
// console.log(classes)

// paragraph.classList.add("paragraph1");
// paragraph.classList.remove("paragraph1");
// paragraph.classList.toggle("paragraph1");
// console.log(paragraph.classList.contains("paragraph1"));

// let div = document.createElement('div');
// div.classList.add('block');
// div.innerText = 'Hello World!';
// document.body.append(div);
// document.body.prepend(div);

// let list = document.querySelector('ol');
// list.before(div);
// list.after(div);
// list.append(div);
// list.prepend(div);

// let div1 = document.querySelector('.block2');
// div1.remove();

// let link = document.createElement('a');
// link.setAttribute('href', 'https://www.google.com');
// link.setAttribute('target', "_blank");
// link.innerText = "GOOGLE";
// document.body.append(link);

// Задание: Напишите интерфейс для создания списка.
// Для каждого пункта:
// 1.	Запрашивайте содержимое пункта(тега li) у пользователя с помощью prompt 10 раз.
// 2.	Создавайте элементы <li> и добавляйте его к <ul>.
// let ul = document.createElement('ul');
// document.body.append(ul);
// for(let i = 0; i < 10; i++) {
//     let data = prompt("Введите текст для элементов списка");
//     let li = document.createElement('li');
//     li.innerText = data;
//     ul.append(li);
// }

// function clear(elem) {
//     let elements = document.querySelectorAll(elem);
//     console.log(elements);
//     for(let element of elements) {
//         element.remove();
//     }
// }

// clear('li');

// function myFunc(callback) {
//     let a = [4, 5, 6];
//     let element = document.querySelector('.p1');
//     callback(element, a);
// }

// function out(elem, arr) {
//     elem.innerText = arr.join(',');
// }

// myFunc(out);


function myFunc() {
    alert("Hello world!");
}


function myFunc2() {
    alert("Hello world 2!");
}


let button = document.querySelector('.click');
button.addEventListener('click', myFunc)
button.addEventListener('mouseover', myFunc2)