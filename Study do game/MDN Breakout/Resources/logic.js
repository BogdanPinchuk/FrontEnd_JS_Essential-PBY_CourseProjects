// установлюємо параметри вікна для гри
let canva = document.getElementById('myCanvas');
// стандартні налаштування
const koefSize = 0.9;   // розмір області відносно вікна
canva.style.background = 'red';
ResizeWorkPlace(canva, koefSize);

// варіант 1
/*
window.onresize = () =>
    ResizeWorkPlace(canva, koefSize);
*/

// варіант 2
// івент на зміну розміру вікна
window.addEventListener('resize',
    () => ResizeWorkPlace(canva, koefSize), false);

    console.log(canva);