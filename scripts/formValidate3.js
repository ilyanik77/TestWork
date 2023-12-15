$(document).ready(function () {
    $("modal").submit(function () {
        // Получение ID формы
        const formID = $(this).attr('id');
        // Добавление решётки к имени ID
        const formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'php/sendMail.php',
            data: formNm.serialize(),
            beforeSend: function () {
                // Вывод текста в процессе отправки
                $(formNm).html('<p style="text-align:center">Отправка...</p>');
            },
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html('<p style="text-align:center">'+data+'</p>');
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);
            }
        });
        return false;
    });
});


    // $('#form-ask-us').submit(function(e){
    //     var popup = $('#popup_text');
    //     e.preventDefault();
    //     $.ajax({
    //     url: "/form_ask_us_ru.php",
    //     type: "POST",
    //     data: $('#form-ask-us').serialize(),
    //     success: function(response) {
    //     //обработка успешной отправки
    //      popup.html('Ваше сообщение успешно отправлено!').delay(2000).fadeOut(1000);
        
    //     $('#form-ask-us-name').val('');
    //     $('#form-ask-us-email').val('');
    //     $('#form-ask-us-text').val('');
    //     },
    //     error: function(response) {
    //     //обработка ошибок при отправке
    //     }
    //     });
    //     });


