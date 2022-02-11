document.getElementById('login-btn').addEventListener('click', function () {
    //    get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail)
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // error handeler 
    if (userEmail == 'sonali.com' && userPassword == 'a') {
        window.location.href = 'banking.html';
    }
    else {
        console.log('Please enter Valid E-mail and Password')
    }

})