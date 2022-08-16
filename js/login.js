// step 1: add the event listener on the submit button 
document.getElementById('btn-submit').addEventListener('click',function(){
    // step 2: get the email address inside the email field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step 3: get the password inside the password field 
    const passField = document.getElementById('user-pass');
    const password = passField.value;

    if(email === 'sontan@baaper.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else
        alert('Tui password vule gesos!! Tui amar pula na');
})