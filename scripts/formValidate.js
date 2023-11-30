
const form = document.getElementsByTagName("form")[0];
const validateBtn = document.getElementById("popUpThanksStart");
const userName = document.getElementById("userName");
const userPhone = document.getElementById("userPhone");
const approval = document.getElementById("approval");

const fields = form.querySelectorAll('.field')

const validateForm = function () {

    let valid = true;
    if (document.getElementById("userName").value == "") {
        console.log('Заполните поле', userName)
        var error = generateError('Заполните поле')
        userName.parentElement.insertBefore(error, userName)
        valid = false;
    } else if (document.getElementById("userPhone").value == "") {
        console.log('Заполните поле', userPhone)
        var error = generateError('Заполните поле')
        userPhone.parentElement.insertBefore(error, userPhone)
        valid = false;
    }// } else if (document.getElementById("approval").click) {
    //     console.log('Пожалуйста, отметь согласие с Соглашением', approval)
    //     var error = generateError('Пожалуйста, отметь согласие с Соглашением')
    //     approval.parentElement.insertBefore(error, approval)
    //     valid = false;
    // }
    //removeValidation();
    return valid;
    
}

const generateError = function (text) {
    var error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.style.marginBottom = "25px";
    error.innerHTML = text;
    return error;
}

var removeValidation = function () {
    var errors = form.querySelectorAll('.error');
  
    for (var i = 0; i < errors.length; i++) {
        errors[i].remove();
    }
}

document.getElementById("popUpThanksStart").onclick = function(event) {
    

    if(validateForm() && document.getElementById("approval").checked) {

        
        event.preventDefault();
        removeValidation();
    
        document.querySelector('#popUpThanks').style.display = 'flex';
        document.querySelector('#popUpCall').style.display = 'none';
        
        console.log(validateForm());
    } else {
        event.preventDefault();
        var error = generateError('Пожалуйста, отметьте согласие с Соглашением')
        approval.parentElement.insertBefore(error, approval)
        console.log("NO!!!!!!!!!");
        
    }
    

}
