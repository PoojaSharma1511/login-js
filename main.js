let email = document.forms['form']['email'];
let password = document.forms['form']['password'];

let email_error = document.getElementById('email_error');
let pass_error = document.getElementById('pass_error');

email.addEventListener('TextInput', email_Verify);
password.addEventListener('TextInput', pass_Verify);

form.addEventListener('submit',validated);
function validated(){
    if(email.value.length < 9){
        email.style.border = "2px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }else
    if(password.value.length < 6){
        password.style.border = "2px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
        
    }
    else window.open('./todo.html');
}

function email_Verify(){
    if(email.value.length >= 8){
        email.style.border = "1px solid gray";
        email_error.style.display = "none";
        return true;

}
}
function pass_Verify(){
    if(password.value.length >= 5){
        password.style.border = "1px solid gray";
        pass_error.style.display = "none";
        return true;

}
}  




    


