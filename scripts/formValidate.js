// ------------  форма валидации  ----------------
const form = document.getElementsByTagName("form")[0];
const validateBtn = document.getElementById("popUpThanksStart");
const userNameEl = document.getElementById("userName");
const userPhoneEl = document.getElementById("userPhone");
const approval = document.getElementById("approval");

const fields = form.querySelectorAll('.field')

const validateForm = function () {
    
    let valid = true;
    removeValidation();

    for (let i = 0; i < fields.length; i++) {
        
        if (!fields[i].value) {
            
            const error = generateError('Заполните обязательное поле')
            form[i].parentElement.insertBefore(error, fields[i])
            valid = false;
        }
    }
    
    return valid;
    
}

const generateError = function (text) {
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.style.marginBottom = "25px";
    error.innerHTML = text;
    return error;
}

const removeValidation = function () {
    const errors = form.querySelectorAll('.error');
  
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }
}

validateBtn.onclick = function(event) {

    if(document.getElementById("approval").checked == false) {
        event.preventDefault();
        alert('Пожалуйста, отметьте согласие с Соглашением')    
    } else if(!validateForm()) {
        event.preventDefault();
        alert('Заполните обязательное поле')
    } else {
        
        event.preventDefault();
        $.ajax({
            type: "post",
            url: 'php/sendMail2.php',
            data: {
                name: $(".userName").val(),
                phone: $(".userPhone").val()
            },
            beforeSend: function () {},
            success: function (data) {
                
                document.querySelector('#popUpCall').style.display = 'none';
                document.querySelector('#popUpThanks').style.display = 'flex';

                console.log("YES!!!!");
            },
            error: function (jqXHR, text, error) {}
        });
        
        removeValidation();
        form.reset();
    }
}
