$(document).ready(function(){
    //pull in user from localStorage
    if(localStorage.length === 0){
        window.location.href = "./login.html";
    } else {
        //user object
        var user = JSON.parse(localStorage.getItem('user'));
        var username = user.username;
        //relavent elements
        var userGreeting = document.getElementById('username-heading').innerHTML = "Hello "+username+"!";

        //handle settings
        
    }
})
