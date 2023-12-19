## Введение

Ключевая задача - сверстать простую веб-страницу с использованием HTML5, CSS/SCSS, JavaScript и PHP. 

## Макет

Вам предоставляется макет в Figma, который содержит дизайн веб-страницы. Ваша задача - сверстать эту страницу, следуя дизайну в макете. 
Вы можете получить доступ [к макету по ссылке]
(https://www.figma.com/file/RIRJzIEVHYFjkT0879pyOZ/%D0%B4%D0%BB%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B?type=design&node-id=0%3A1&mode=design&t=pGLl7kxZV67uwf3m-1)

## Задачи

1. **HTML/CSS/SCSS:**
    - Создайте HTML-файл и сверстайте веб-страницу, используя HTML5 и CSS/SCSS.
    - Обратите внимание на семантику HTML и использование современных CSS-свойств.
    - Используйте SCSS для управления стилями. (*По желанию*) Разделите стили на множество модулей и используйте переменные и миксины для повторного использования стилей.
    - Убедитесь, что веб-страница отзывчива и хорошо выглядит на различных устройствах (мобильных, планшетах, настольных компьютерах) и в различных браузерах.
    (*Меню на мобильной версии позволяется не верстать)*
    - Все функциональные элементы должны быть доступны и управляемы с помощью клавиатуры.
2. **JavaScript**
Добавьте интерактивность на веб-страницу, используя JavaScript. Реализуйте следующие функции:
    - При нажатии на кнопки консультаций, должно отображаться [дополнительное содержимое на странице](https://www.figma.com/proto/qfiqED1O0plme0qo6TBHyB/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D1%8B%D0%B9?page-id=91%3A3537&type=design&node-id=91-3805&viewport=142%2C603%2C0.17&t=QljoSWhVHfICtwUU-1&scaling=min-zoom&starting-point-node-id=91%3A3805&mode=design).
    - Реализуйте простую валидацию формы: проверьте, что все обязательные поля заполнены перед отправкой формы.
    - Реализуйте простую анимацию для элементов на странице (например, плавное появление или исчезновение).
    - Сохраняйте данные в LocalStorage
3. **PHP**
    - Добавьте обработчик почтового оповещения для формы. При заполнение формы, должен срабатывать скрипт отправки письма на 2 любых почты.
   *Преимуществом будет: Если вы будете вызывать этот скрипт посредством AJAX.*
    - Данное число должно формироваться на Back-End и рендериться при загрузке. Оно должно быть равно сумме цифровых значений даты.
   Пример: Если сегодня 01.01.2000, то сумма `0 + 1 + 0 + 1 + 2 + 0 + 0 + 0 = 4`
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2edda732-a208-4f19-aa18-f05b10ea4708/93070e49-4781-4d0e-bca9-e6129c2ba5cb/Untitled.png)
        
    - Данное число должно формироваться на Back-End и рендериться при загрузке. Оно должно быть равно курсу “`GBP`" из следующего эндпоинта -
   `https://www.cbr-xml-daily.ru/daily_json.js` округленное до целого числа.
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2edda732-a208-4f19-aa18-f05b10ea4708/8201e6c0-c8e8-420d-939d-0f544c212a6b/Untitled.png)
        
4. **WordPress (*желательно, но не обязательно*):**
- Создайте новый сайт на платформе WordPress.
- Создайте новую страницу в WordPress и используйте ваш сверстанный HTML-код, чтобы вставить его в WordPress.
- Убедитесь, что стили и скрипты сохраняются и работают должным образом после вставки кода в WordPress.
- Опубликуйте страницу и убедитесь, что она отображается корректно на сайте WordPress.

## Дополнительные требования

- Используйте современные подходы и лучшие практики во время верстки.
- При верстке и разработке следуйте принципам отзывчивого дизайна (responsive design).
- Обратите внимание на чистоту и организацию вашего кода.
- Документируйте код, где это необходимо, чтобы облегчить понимание вашего подхода.

## Примечание

Вы можете использовать любые необходимые библиотеки или фреймворки, чтобы ускорить разработку. Однако, убедитесь, что вы объясните, 
почему выбрали определенную библиотеку или фреймворк, и как она помогла вам в реализации функциональности.

После завершения задания, предоставьте ссылку на GitHub репозиторий с вашими файлами верстки, а также, при наличии, ссылку на ваш WordPress-сайт, где размещена задача.

На собеседованиях люди сами на себя не похожи, поэтому считаю что понять что человек будет за работник можно только по его работе) 
После выполнения задания будет собеседование уже больше на совместимость личностей, уровень необходимых знаний и трудоспособность покажет тестовое
