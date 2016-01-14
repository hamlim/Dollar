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
            //ok so the user put in something in both fields
            //now we want to get the DB of users
            var getSettings = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.airtable.com/v0/applYClUOdBXhRzGf/Users",
                "method": "GET",
                "headers": {
                    "authorization": "Bearer keyIye3zskPSBMQ6Q"
                }
            }

            $.ajax(getSettings).done(function (response) {
                console.log(response);
            });
        }
    });
});
