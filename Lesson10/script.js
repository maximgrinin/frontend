// let elements = document.querySelectorAll('li');
// console.log(elements[0].innerHTML);
// for(let element of elements) {
//     console.log(element.innerHTML);
// }

// let elements = document.querySelectorAll('.list, #main');
// for(let element of elements) {
//     console.log(element.innerHTML);
// }

// let elements = document.querySelectorAll('#main li');
// for(let element of elements) {
//     console.log(element.innerHTML);
// }

// let elements = document.querySelectorAll('p');
// for(let element of elements) {
//     console.log(element.innerText);
// }

// let element = document.querySelector('p');
// console.log(element.innerText);

// for(let i=0; i<3; i++) {
//     document.querySelector('p').innerText = "Обработали";
// }

// let paragraph = document.querySelectorAll('.paragraph');
// for(let element of paragraph) {
//    element.innerText = "Обработали"
// }

// let paragraph = document.querySelectorAll('#main');
// for(let element of paragraph) {
//    element.innerText = "я главный элемент"
// }

// let elem = document.querySelector('p');
// console.log(elem.hasAttribute('id'));
// console.log(elem.getAttribute('id'));
// elem.setAttribute('class', 'text');
// elem.removeAttribute('id');

// let link1 = document.querySelector("#google");
// link1.setAttribute('href', "https://www.gooogle.com/");
// link1.setAttribute('target', "_blank");

// let link2 = document.querySelector("#facebook");
// link2.setAttribute('href', "https://www.facebook.com/");
// link2.setAttribute('target', "_blank");

// let imgurl = "https://images.google.ru/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
// // let image = document.querySelector("img");
// // image.setAttribute('src', imgurl)

// images = document.querySelectorAll('img')
// for(let img of images) {
//     img.setAttribute('src', imgurl)
// }

// Задача: Написать скрипт, который находит картинки в блоке с классом main и первым 5 картинкам меняет url на указанное значение.// images = document.querySelectorAll('img')
let imgurl = "https://st.aliexpress.ru/mixer-storage/homePage/snow-homepage/logo-aliexpress.svg";
images = document.querySelectorAll('.main > img');

let i = 0;
for(let img of images) {
    img.setAttribute('src', imgurl);
    i++;
    if(i == 5) {
        break;
    }
}

for(let i = 0; i < 5; i++) {
    images[i].setAttribute('src', imgurl);
}

console.log(images)