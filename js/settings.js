$(document).ready(function(){
    //pull in user from localStorage
    if(localStorage.length === 0){
        window.location.href = "./login.html";
    } else {
        //user object
        var user = JSON.parse(localStorage.getItem('user'));
        var userKey = user.userKey;
        var username = user.username;
        //relavent elements
        var userGreeting = document.getElementById('username-heading');
        userGreeting.innerHTML = "Hello "+username+"!";
        //account settings elements
        var passReset = document.getElementById('password-reset'),
        usernameReset = document.getElementById('username-reset'),
        accountSbmt = document.getElementById('account-btn');
        accountSbmt.onclick = function(){
            var newPass = passReset.value;
            var newUName = usernameReset.value;
            if(newUName.value != ""){
                //we know newUName is new
                if(newUName != username ){
                    //we want to updat the local and the server versions of the user
                    userGreeting.innerHTML = newUName;
                    user.username = newUName;
                    //now we need to update the server
                    var data = {
                        "u_username": newUName
                    };
                    var packageData = {
                        "fields": data
                    };
                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "https://api.airtable.com/v0/applYClUOdBXhRzGf/Users/"+userKey,
                        "method": "PATCH",
                        "headers": {
                            "authorization": "Bearer keyIye3zskPSBMQ6Q",
                            "content-type": "application/json"
                        },
                        "processData": false,
                        "data": packageData
                    }

                    $.ajax(settings).done(function (response) {
                        console.log(response);
                        notie.alert(1, "Successfully changed your username!", 3);
                    });
                } else {
                    //don't worry about changing
                }
            } else {
                //they didn't enter anything so we don't want to change their username
            }
            if(newPass != ""){
                if(newPass.length > 4){
                    var data = {
                        "u_password": newPass
                    };
                    var packageData = {
                        "fields": data
                    };
                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "https://api.airtable.com/v0/applYClUOdBXhRzGf/Users/"+userKey,
                        "method": "PATCH",
                        "headers": {
                            "authorization": "Bearer keyIye3zskPSBMQ6Q",
                            "content-type": "application/json"
                        },
                        "processData": false,
                        "data": packageData
                    }

                    $.ajax(settings).done(function (response) {
                        console.log(response);
                        notie.alert(1, "Successfully changed your password!", 3);
                    });
                } else {
                    notie.alert(3, "Your new password needs to be longer than 4 characters.", 5);
                }
            }
        }
        //handle settings
        //relevent elements
        var appSbmt = document.getElementById('app-btn'),
        tagOptionOne = document.getElementById('tag-option-one'),
        tagOptionTwo = document.getElementById('tag-option-two'),
        tagOptionThree = document.getElementById('tag-option-three');
        appSbmt.onclick = function(){
            var tagone = tagOptionOne.value;
            var tagtwo = tagOptionTwo.value;
            var tagthree = tagOptionThree.value;
            if(tagone.length != 0){
                if(tagtwo.length != 0){
                    if(tagthree.length != 0){
                        var tagstring = tagone+", "+tagtwo+", "+tagthree;
                        var data = {
                            "u_tags": tagstring
                        };
                        var packageData = {
                            "fields": data
                        };
                        var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": "https://api.airtable.com/v0/applYClUOdBXhRzGf/Users/"+userKey,
                            "method": "PATCH",
                            "headers": {
                                "authorization": "Bearer keyIye3zskPSBMQ6Q",
                                "content-type": "application/json"
                            },
                            "processData": false,
                            "data": packageData
                        }

                        $.ajax(settings).done(function (response) {
                            console.log(response);
                            notie.alert(1, "Successfully updated your Tags!", 3);
                        });
                    } else {
                        var tagstring = tagone+", "+tagtwo+", N/A";
                        var data = {
                            "u_tags": tagstring
                        };
                        var packageData = {
                            "fields": data
                        };
                        var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": "https://api.airtable.com/v0/applYClUOdBXhRzGf/Users/"+userKey,
                            "method": "PATCH",
                            "headers": {
                                "authorization": "Bearer keyIye3zskPSBMQ6Q",
                                "content-type": "application/json"
                            },
                            "processData": false,
                            "data": packageData
                        }

                        $.ajax(settings).done(function (response) {
                            console.log(response);
                            notie.alert(1, "Successfully updated your Tags!", 3);
                        });
                    }
                } else {
                    var tagstring = tagone + ", N/A, N/A";
                    var data = {
                        "u_tags": tagstring
                    };
                    var packageData = {
                        "fields": data
                    };
                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "https://api.airtable.com/v0/applYClUOdBXhRzGf/Users/"+userKey,
                        "method": "PATCH",
                        "headers": {
                            "authorization": "Bearer keyIye3zskPSBMQ6Q",
                            "content-type": "application/json"
                        },
                        "processData": false,
                        "data": packageData
                    }

                    $.ajax(settings).done(function (response) {
                        console.log(response);
                        notie.alert(1, "Successfully updated your Tags!", 3);
                    });
                }
            }
        }
    }
})
