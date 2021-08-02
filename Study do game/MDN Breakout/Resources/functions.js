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

// функція зміни розміру вікна
// canva - елемент
// id - індентифікатор елемента
// koef - коефіцієнт екранування
function ResizeCanva(canva, koef) {
    // масштаб піксселів реальних і css
    let realToCSSPixels = window.devicePixelRatio;
    
    canva.clientWidth = `${winSize.GetWidth() * koef * realToCSSPixels}px`;
    canva.clientHeight = `${winSize.GetHeight() * koef * realToCSSPixels }px`;

    canva.width = canva.clientWidth;
    canva.height = canva.clientHeight;

    canva.style.width = canva.clientWidth;
    canva.style.height = canva.clientHeight;

    console.log(koef);
    console.log(realToCSSPixels);
    console.log(canva.style.width);
    console.log(canva.style.height);
    console.log(canva.width);
    console.log(canva.height);
    console.log(canva.clientWidth);
    console.log(canva.clientHeight);
}

// функція зміни розміру body
// element - елемент
// koef - коефіцієнт екранування
function ResizeBody(element, koef) {
    element.style.width = `${winSize.GetWidth() * koef}px`;
    element.style.height = `${winSize.GetHeight() * koef}px`;
}
