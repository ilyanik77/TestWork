

// Открытие модального окна
document.querySelector('#popUpCallStart1').addEventListener('click', function () {
    document.querySelector('#popUpCall').style.display = 'flex';
});

document.querySelector('#popUpCallStart2').addEventListener('click', function () {
    document.querySelector('#popUpCall').style.display = 'flex';
});

// Закрытие модального окна
document.querySelector('#popUpCallClose').addEventListener('click', function () {
    document.querySelector('#popUpCall').style.display = 'none';
});

document.querySelector('#popUpThanksClose').addEventListener('click', function () {
    document.querySelector('#popUpThanks').style.display = 'none';
});

// // Обработка заявки (здесь просто выводим сообщение с благодарностью за заявку)
// document.querySelector('#popUpThanksStart').addEventListener('click', function (e) {
//     // Отменяем поведение формы по умолчанию (чтобы не закрывалась)
//     e.preventDefault();
//     document.querySelector('#popUpThanks').style.display = 'flex';
//     document.querySelector('#popUpCall').style.display = 'none';
// });