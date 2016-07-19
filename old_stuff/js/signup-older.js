$(document).ready(function(){
    //ok on button click
    $('#dollar-signup-signup_btn').click(function(){
        //now we do some form validation
        var fullNameElem = document.getElementById('dollar-signup-fullname'),
            usernameElem = document.getElementById('dollar-signup-username'),
            emailElem = document.getElementById('dollar-signup-email'),
            passwordElem = document.getElementById('dollar-signup-password');
        var fullname = fullNameElem.value,
            username = usernameElem.value,
            email = emailElem.value,
            password = passwordElem.value;
        if(fullname === "" || username === "" || email === "" || password === "" || password.length <= 4){
            //ok the user incorrectly filled the inputs
            //we will use notie for alerting the user
            notie.alert(3, "Error! One of the fields was incorrect!", 2.5);
        } else {
            //ok everything passes inspection
            //we want to make an object of the user
            var userObj = {
                "u_username": username,
                "u_fullname": fullname,
                "u_password": password,
                "u_email": email
            };
            var packageObj = {
                "fields": userObj
            };
            //now we want to push that to the airtable db
            //ok we want to get all users to make sure that
            // A: this person doesn't already have an account
            // B: this person is trying to use a username that is already taken
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
                // console.log(response);
                //now we want to go through all the users returned
                var isInCurrentUsers = false;
                for(var i=0; i<response.records.length; i++){
                    if(username === response.records[i].fields.u_username){
                        isInCurrentUsers = true;
                        //now we want to check if the email is the same as the one on file
                        if(email === response.records[i].fields.u_email && password === response.records[i].fields.u_password){
                            //ok so this user already has an account
                            var user = response.records[i];
                            var localUser = {
                                "username": user.fields.u_username,
                                "fullname": user.fields.u_fullname,
                                "email": user.fields.u_email,
                                "userID": user.fields.u_userID
                            };
                            //now we want to save that to local storage and also push the browser to ./app.html

                            var localUserString = JSON.stringify(localUser);
                            localStorage.setItem('user', localUserString);
                            window.location.href = "./app.html";
                            //Above is commented only during testing
                        } else {
                            //we need to alert the user that this username is taken
                            var add_word = "super";
                            //lets suggest: username+add_word
                            notie.alert(2, "Warning, that username is already taken, what about super"+username+"?", 7);
                        }
                    }
                }
                if(!isInCurrentUsers){
                    //ok the user is good to be made on the db
                    //here is our ajax to create the user
                    var stringUser = JSON.stringify(packageObj);
                    var postSettings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "https://api.airtable.com/v0/applYClUOdBXhRzGf/Users",
                        "method": "POST",
                        "headers": {
                            "authorization": "Bearer keyIye3zskPSBMQ6Q",
                            "content-type": "application/json"
                        },
                        "data": stringUser
                    }

                    $.ajax(postSettings).done(function (response) {
                        // console.log(response);
                        //ok we want to alert the user that the account was not made if it wasn't
                        if(response.error){
                            console.log(response);
                            notie.alert(3, "We're sorry but it seems that your account wasn't made :(. If you have seen this more than once, please <a href='mailto:hamlim@outlook.com'>Email</a> us!", 5);
                        } else {
                            //we want to save the current user object to local Storage and re-route to app.html
                            var localUser = {
                                "username": username,
                                "fullname": fullname,
                                "email": email,
                                "userID": response.fields.u_userID
                            };
                            //now we want to save that to local storage and also push the browser to ./app.html

                            var localUserString = JSON.stringify(localUser);
                            localStorage.setItem('user', localUserString);
                            window.location.href = "./app.html";
                        }
                    });
                }
            });
        }

    });
});
