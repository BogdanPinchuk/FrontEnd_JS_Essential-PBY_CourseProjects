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
// element - елемент
// koef - коефіцієнт екранування
function ResizeWorkPlace(element, koef) {
    element.style.width = `${winSize.GetWidth() * koef}px`;
    element.style.height = `${winSize.GetHeight() * koef}px`;
}
