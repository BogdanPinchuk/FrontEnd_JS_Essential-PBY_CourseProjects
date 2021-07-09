/** @type {HTMLCanvasElement} */
// налаштування для включення ынтелысенсу для контексту канви

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
    () => {
        ResizeWorkPlace(canvas, 0.9);
        ResizeWorkPlace(body, 1);
    }, false);

// контекст канви
let ctx = canvas.getContext('2d');

// спроба щось намалювати
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#ff0000";
ctx.fill();
ctx.closePath();

console.log(canvas);
// console.log(ctx);
