/** @type {HTMLCanvasElement} */
// налаштування для включення інтелісенсу для контексту канви

// установлюємо параметри вікна для гри
let canvas = document.getElementById("myCanvas");

// стандартні налаштування
let body = document.getElementsByTagName("body")[0];
ResizeBody(body, 1);

const koefSize = 1;   // розмір області відносно вікна
ResizeCanva(canvas, 0.9);

// варіант 1
/*
window.onresize = () =>
    ResizeWorkPlace(canva, koefSize);
*/

// варіант 2
// івент на зміну розміру вікна
window.addEventListener('resize',
    () => {
        ResizeBody(body, 1);
        ResizeCanva(canvas, 0.9);
    }, false);

// контекст канви
let ctx = canvas.getContext("2d");

// спроба щось намалювати
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#ff0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();

// console.log(canvas);
// console.log(ctx);

console.log(canvas);
console.log(body);