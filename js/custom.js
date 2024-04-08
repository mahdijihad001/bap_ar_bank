document.querySelector('.submit').addEventListener('click' , function(){
    const userEmail = document.querySelector('.email');
    const email = userEmail.value;

    const userPassword = document.querySelector('.password');
    const password = userPassword.value;

    if(email === 'jihad@khan.com' && password === '12345'){
        window.location.href = 'bank.html'

    }else{
        alert('You Are not valid User');
    }
})