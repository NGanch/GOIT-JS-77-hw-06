

const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const  { email, password } = event.currentTarget.elements;
    const emailRes = email.value;
    const passRes = password.value;
    
    if(emailRes === '' || passRes === ''){
        alert('Please enter all')
    } else{
        console.log({ email: email.value.trim(), password: password.value.trim()});
            event.currentTarget.reset();
    }
    
    })

























