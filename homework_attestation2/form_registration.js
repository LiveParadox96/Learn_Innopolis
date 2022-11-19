const button = document.querySelector('.btn_form');
const email = document.querySelector('.email_input');
const password = document.querySelector('.password_input');
const confir = document.querySelector('.confirmation_input');
const form = document.createElement('form');
const addFieldEm = document.querySelector('.add_elem_email');
const addFieldPas = document.querySelector('.add_elem_password');
const addFieldConf = document.querySelector('.add_elem_conf');
const errEmail= document.querySelector('.err_email');
const errPass= document.querySelector('.err_password');
const errPasRep= document.querySelector('.err_password_repeet');

errEmail.style.display='none';
errPass.style.display='none';
errPasRep.style.display='none'

addFieldEm.style.display='none';
addFieldPas.style.display='none';
addFieldConf.style.display='none';





button.addEventListener('click', function verification(){
    
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email.value).toLowerCase());      
    }
    if(password.value!==confir.value){
        errPasRep.style.display='';
        confir.style.borderColor='red'
        password.borderColor='red'
        password.style.marginBottom = 10 + 'px'
    }
    if (validateEmail(email)) {
        errEmail.style.display='none';
        email.style.borderColor= 'rgba(120, 120, 120, 1)'
    }else{
        errEmail.style.display='';
        email.style.borderColor='red'
    }
    if(email.value.length>=1){
        addFieldEm.style.display= 'none'

    }
    if(password.value.length>=1){
        addFieldPas.style.display='none'

    }
    if(confir.value.length>=1){
        addFieldConf.style.display= 'none'
    }
    

    

    if(password.value.length<8){
        errPass.style.display= '';
        password.style.marginBottom = 10 +'px'
        password.style.borderColor='red'
        
    }

    if(email.value.length===0){
        addFieldEm.style='';
        email.style.marginBottom = 0 +'px';
        email.style.borderColor= 'red';
    }
    if(password.value.length===0){
        addFieldPas.style='';
        password.style.marginBottom = 0 +'px';
        password.style.borderColor = 'red';
    }
    if(confir.value.length===0){
        addFieldConf.style='';
        confir.style.marginBottom = 0 + 'px';
        confir.style.borderColor = 'red';

    }
})


