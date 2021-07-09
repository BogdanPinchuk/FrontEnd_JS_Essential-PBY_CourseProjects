// установлюємо параметри вікна для гри
let canvas = document.getElementById('myCanvas');

// стандартні налаштування
const koefSize = 1;   // розмір області відносно вікна
ResizeWorkPlace(canvas, 0.9);

let body = document.getElementsByTagName('body')[0];
ResizeWorkPlace(body, 1);

// варіант 1
/*
window.onresize = () =>
    ResizeWorkPlace(canva, koefSize);
*/

// варіант 2
// івент на зміну розміру вікна
window.addEventListener('resize',
    () => ResizeWorkPlace(canvas, koefSize), false);

// контекст канви
let ctx = canvas.getContext('2d');

// спроба щось намалювати


console.log(canvas);
console.log(ctx);
