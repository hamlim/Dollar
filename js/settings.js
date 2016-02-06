$(document).ready(function(){
    //pull in user from localStorage
    if(localStorage.length === 0){
        window.location.href = "./login.html";
    } else {
        //user object
        var user = JSON.parse(localStorage.getItem('user'));
        var userKey = user.userKey;
        var username = user.username;
        var userid = user.userID;
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
        var budgets = JSON.parse(localStorage.getItem('budgets'));
        if(budgets != null){
            //we need to get the Budgets
            document.getElementById('food').value = budgets.fields.mb_food;
            document.getElementById('other').value = budgets.fields.mb_other;
            document.getElementById('utilities').value = budgets.fields.mb_utilities;
            document.getElementById('travel').value = budgets.fields.mb_travel;
            document.getElementById('transportation').value = budgets.fields.mb_transportation;
            document.getElementById('home').value = budgets.fields.mb_home;
            document.getElementById('health').value = budgets.fields.mb_health;
            document.getElementById('personal').value = budgets.fields.mb_personal;
            document.getElementById('gifts').value = budgets.fields.mb_gifts;
        } else {
            //we need to go get the budgets again
            var getBudgetSettings = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.airtable.com/v0/applYClUOdBXhRzGf/MonthlyBudgets",
                "method": "GET",
                "headers": {
                    "authorization": "Bearer keyIye3zskPSBMQ6Q"
                }
            }
            $.ajax(getBudgetSettings).done(function(resp){
                console.log(resp);
                for(var w = 0; w<resp.records.length; w++){
                    if(resp.records[w].fields.mb_userIDFK === userid){
                        if(resp.records[w].fields.mb_monthKey  === 0){
                            var bud = resp.records[w];
                            localStorage.setItem('budgets', JSON.stringify(resp.records[w]));
                            document.getElementById('food').value = bud.fields.mb_food;
                            document.getElementById('other').value = bud.fields.mb_other;
                            document.getElementById('utilities').value = bud.fields.mb_utilities;
                            document.getElementById('travel').value = bud.fields.mb_travel;
                            document.getElementById('transportation').value = bud.fields.mb_transportation;
                            document.getElementById('home').value = bud.fields.mb_home;
                            document.getElementById('health').value = bud.fields.mb_health;
                            document.getElementById('personal').value = bud.fields.mb_personal;
                            document.getElementById('gifts').value = bud.fields.mb_gifts;
                        }
                    }
                }

                if(localStorage.getItem('budgets') === null){
                    //user has no Budget yet, set all vals to 0
                    //its already set to 0 in the html
                }
            });
        }
        //handle budgets
        var budgetBTN = document.getElementById('budget-btn');
        // get all input elements from the Tables
        var foodElem = document.getElementById('food');
        var otherElem = document.getElementById('other');
        var utilitiesElem = document.getElementById('utilities');
        var travelElem = document.getElementById('travel');
        var transportationElem = document.getElementById('transportation');
        var homeElem = document.getElementById('home');
        var healthElem = document.getElementById('health');
        var personalElem = document.getElementById('personal');
        var giftsElem = document.getElementById('gifts');
        budgetBTN.onclick = function () {
            //Verify that we have the vals
            var food = foodElem.value;
            var other = otherElem.value;
            var transportation = transportationElem.value;
            var personal = personalElem.value;
            var gifts = giftsElem.value;
            var utilities = utilitiesElem.value;
            var home = homeElem.value;
            var health = healthElem.value;
            var travel = travelElem.value;
            //TODO
        }
    }
})
