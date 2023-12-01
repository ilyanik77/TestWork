// ------------  Сложная форма валидации(недоработанная) ----------------
const form = document.getElementsByTagName("form")[0];
const validateBtn = document.getElementById("popUpThanksStart");
const userName = document.getElementById("userName");
const userPhone = document.getElementById("userPhone");
const approval = document.getElementById("approval");

const fields = form.querySelectorAll('.field')

const validateForm = function () {
    
    let valid = true;

    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('Заполните поле', fields[i])
            const error = generateError('Заполните поле')
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
    

    if(validateForm() && document.getElementById("approval").checked) {

        
        event.preventDefault();
        removeValidation();
    
        document.querySelector('#popUpThanks').style.display = 'flex';
        document.querySelector('#popUpCall').style.display = 'none';
        
        console.log(validateForm());
    } else {
        event.preventDefault();
        const error = generateError('Пожалуйста, отметьте согласие с Соглашением')
        approval.parentElement.insertBefore(error, approval)
        console.log("NO!!!!!!!!!");
        
    }
    

}
