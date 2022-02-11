document.getElementById('login-btn').addEventListener('click', function () {
    //    get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // error handeler 
    if (userEmail == 'alaminhossaindjp@gmail.com' && userPassword == 'Alamin.hossain') {
        window.location.href = 'banking.html';
    }
    else {
        console.log('Please enter Valid E-mail and Password')
    }

})