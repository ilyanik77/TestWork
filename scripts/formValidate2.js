// ------------  простая форма валидации ----------------
const form = document.getElementsByTagName("form")[0];
const validateBtn = document.getElementById("popUpThanksStart");
const userName = document.getElementById("userName");
const userPhone = document.getElementById("userPhone");
const approval = document.getElementById("approval");
const fields = form.querySelectorAll('.field')

function validateForm ( ) {
	valid = true;

    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            
            alert ( "Пожалуйста, заполните все поля." );
            valid = false;
        }
    }
    return valid;
    
}

validateBtn.onclick = function(event) {

    if(validateForm() && document.getElementById("approval").checked) {

        event.preventDefault();
        // var formData = $('form').serialize();

        $.ajax({
            type: "post",
            url: 'php/sendMail2.php',
            data: {
                name: $(".userName").value(),
                phone: $(".userPhone").value()
            },
            beforeSend: function () {
                
                
            },
            success: function (data) {
                
                document.querySelector('#popUpCall').style.display = 'none';
                document.querySelector('#popUpThanks').style.display = 'flex';

                console.log(data);
            },
            error: function (jqXHR, text, error) {
                
                console.log("NO!!!!");
            }
        });
        form.reset();

               
    } else {
        event.preventDefault();
        console.log("NO");
        alert ( "Пожалуйста, отметь согласие с Соглашением." );
    }
}
