$(document).ready(function(){
    //pull in user from localStorage
    if(localStorage.length === 0){
        window.location.href = "./login.html";
    } else {
        //user object
        var user = JSON.parse(localStorage.getItem('user'));
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
                    
                }
            }
        }
        //handle settings

    }
})
