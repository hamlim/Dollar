$(document).ready(function(){
    //ok we want to get the button press
    $('#dollar-login-login_btn').click(function(){
        var usernameElem = document.getElementById('dollar-login-username'),
            passwordElem = document.getElementById('dollar-login-password'),
            remembermeElem = document.getElementById('dollar-login-remember');
        var username = usernameElem.value,
            password = passwordElem.value,
            remember = remembermeElem.value;

        if(username === "" || password === ""){
            // the user clicked the button without any input in the fields
            notie.alert(3, "Please make sure to enter your username and password before clicking the login button!", 7);

        } else {
            
        }
    });
});
