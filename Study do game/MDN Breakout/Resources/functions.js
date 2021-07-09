// отримуємо внутрішній розмір вікна (без полос прокрутки)
let winSize = {
    GetWidth: function () {
        // console.log(document.documentElement.clientWidth);
        return document.documentElement.clientWidth;
    },
    GetHeight: function () {
        // console.log(document.documentElement.clientHeight);
        return document.documentElement.clientHeight;
    },
};

/*
з полосами прокрутки
let windowInnerWidth = window.innerWidth,
    windowInnerHeight = window.innerHeight;
*/

// функція зміни розміру вікна
// canva - область рендера
// koef - коефіцієнт екранування
function ResizeWorkPlace(canva, koef) {
    canva.style.width = `${winSize.GetWidth() * koef}px`;
    canva.style.height = `${winSize.GetHeight() * koef}px`;
}
