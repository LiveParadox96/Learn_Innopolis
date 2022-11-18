const button = document.querySelector('.btn_form');
const email = document.querySelector('.email_input');
const password = document.querySelector('.password_input');
const form = document.createElement('form');

const errEmail= document.querySelector('.err_email')
errEmail.style.display= "none";


const fillingEmail = document.querySelector('.err_email')


button.addEventListener('click', function verification(){
    
    if(email.value.length===0){
        alert('Поле "email" обязательно для заполнения')
    }
    if(password.value.length===0){
        let li = document.createElement('div');
        li.innerHTML += '<div class="add_input" style="background-color: #ff0000";>Поле обязательно для заполнения</div>';
        password.after(li);
        password.style.marginBottom= 0 +"px";        
        
        if(document.querySelector('.password_input').length>1){
            document.querySelector('.add_input').style.display= "none";
            document.querySelector('.add_input').style.marginBottom= 52+"px"
        }
        
    }    
    if(password.value.length===0){
        password.style.borderColor = "red";
    }
    if(password.value.length<8){
        alert("Пароль должен содержать не менее 8 символов")
    }
})
