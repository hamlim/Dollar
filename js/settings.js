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
        //--------------------------------------------------------------
        //                   Password and Username
        //                  #PASS
        //--------------------------------------------------------------
        var passReset = document.getElementById('password-reset'),
        usernameReset = document.getElementById('username-reset'),
        accountSbmt = document.getElementById('account-btn');
        accountSbmt.onclick = function(){
            console.log("Right at onclick");
            console.log("Username input value: ");
            console.log(usernameReset.value);
            console.log(typeof usernameReset.value);
            console.log("Password input value: ");
            console.log(passReset.value);
            console.log(typeof passReset.value);
            var newPassword = passReset.value;
            var newUsername = usernameReset.value;
            if(newUsername != ""){
                console.log("Username change");
                //we know newUName is new
                if(newUsername != username ){
                    console.log("Username does not equal old username");
                    //we want to updat the local and the server versions of the user
                    userGreeting.innerHTML = newUsername;
                    user.username = newUsername;
                    //now we need to update the server
                    var data = {
                        "u_username": newUsername,
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
                        "data": JSON.stringify(packageData)
                    }

                    $.ajax(settings).done(function (response) {
                        console.log(response);
                        // now we need to set these vales to the localstorage data
                        // {"username":"uname","fullname":"Full Name","email":"email","userID":#,"save":true,"tags":"Credit Card, Debit Card, Savings Account","userKey":"something","pass":"something"}
                        var localCopy = {
                            "username": response.fields.u_username,
                            "fullname": response.fields.u_fullname,
                            "email": response.fields.u_email,
                            "userID": response.fields.u_userID,
                            "save": true,
                            "tags": response.fields.u_tags,
                            "userKey": response.id,
                            "pass": response.fields.u_password
                        };
                        localStorage.setItem('user', JSON.stringify(localCopy));
                        notie.alert(1, "Successfully changed your username!", 3);
                    }).fail(function(errormsg){
                        console.log(errormsg);
                        notie.alert(3, "The update failed, please try again, if it doesn't work please contact us!", 10);
                    });
                } else {
                    //don't worry about changing
                }
            } else {
                //they didn't enter anything so we don't want to change their username
            }
            if(newPassword != ""){
                console.log("Changing Password");
                if(newPassword.length > 4){
                    console.log("password is longer than 4 characters");
                    var data = {
                        "u_password": newPassword
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
                        "data": JSON.stringify(packageData)
                    }

                    $.ajax(settings).done(function (response) {
                        console.log(response);
                        // we need to update the local user
                        // {"username":"uname","fullname":"Full Name","email":"email","userID":#,"save":true,"tags":"Credit Card, Debit Card, Savings Account","userKey":"something","pass":"something"}
                        var localCopy = {
                            "username": response.fields.u_username,
                            "fullname": response.fields.u_fullname,
                            "email": response.fields.u_email,
                            "userID": response.fields.u_userID,
                            "save": true,
                            "tags": response.fields.u_tags,
                            "userKey": response.id,
                            "pass": response.fields.u_password
                        };
                        localStorage.setItem('user', JSON.stringify(localCopy));
                        notie.alert(1, "Successfully changed your password!", 3);
                    }).fail(function(errormsg){
                        console.log(errormsg);
                        notie.alert(3, "The update failed, please try again, if it doesn't work please contact us!", 10);
                    });
                } else {
                    notie.alert(3, "Your new password needs to be longer than 4 characters.", 5);
                }
            }
        }
        //--------------------------------------------------------------
        //                        TAGS
        //                       #TAGS
        //--------------------------------------------------------------
        //handle settings
        //relevent elements
        var appSbmt = document.getElementById('app-btn'),
        tagOptionOne = document.getElementById('tag-option-one'),
        tagOptionTwo = document.getElementById('tag-option-two'),
        tagOptionThree = document.getElementById('tag-option-three');
        //set the values to either the user's tags or to nothing if tags doesn't exist
        if(user.tags != ""){
            tagOptionOne.setAttribute('placeholder', 'Credit Card');
            tagOptionTwo.setAttribute('placeholder', 'Debit Card');
            tagOptionThree.setAttribute('placeholder', 'Cash');
            tagOptionOne.value = user.tags.split(", ")[0];
            tagOptionTwo.value = user.tags.split(", ")[1];
            tagOptionThree.value = user.tags.split(", ")[2];
        } else {
            tagOptionOne.setAttribute('placeholder', 'Credit Card');
            tagOptionTwo.setAttribute('placeholder', 'Debit Card');
            tagOptionThree.setAttribute('placeholder', 'Cash');
        }
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
                        }).fail(function(errormsg){
                            console.log(errormsg);
                            notie.alert(3, "The update failed, please try again, if it doesn't work please contact us!", 10);
                        });
                    } else {
                        var tagstring = tagone+", "+tagtwo+", Cash";
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
                        }).fail(function(errormsg){
                            console.log(errormsg);
                            notie.alert(3, "The update failed, please try again, if it doesn't work please contact us!", 10);
                        });
                    }
                } else {
                    var tagstring = tagone + ", Other, Other";
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
                    }).fail(function(errormsg){
                        console.log(errormsg);
                        notie.alert(3, "The update failed, please try again, if it doesn't work please contact us!", 10);
                    });
                }
            }
        }
        //--------------------------------------------------------------
        //                        Budgets
        //                       #Budgets
        //--------------------------------------------------------------
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

                if(localStorage.getItem('budgets') === null){
                    //user has no Budget yet, set all vals to 0
                    //its already set to 0 in the html
                }
            });
        }
        //handle budgets
        var budgetBTN = document.getElementById('budget-btn');
        // get all inPATCH elements from the Tables
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

            var oldBud = JSON.parse(localStorage.getItem('budgets'));
            var budgetUpdate = {
                "mb_userIDFK": userid,
                "mb_food": parseInt(food),
                "mb_home": parseInt(home),
                "mb_health": parseInt(health),
                "mb_gifts": parseInt(gifts),
                "mb_travel": parseInt(travel),
                "mb_transportation": parseInt(transportation),
                "mb_personal": parseInt(personal),
                "mb_utilities": parseInt(utilities),
                "mb_other": parseInt(other)
            };

            var budSend = {
                "fields": budgetUpdate
            };
            console.log(budSend);
            var patchSettings = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.airtable.com/v0/applYClUOdBXhRzGf/MonthlyBudgets/"+oldBud.id,
                "method": "PATCH",
                "headers": {
                    "Authorization": "Bearer keyIye3zskPSBMQ6Q",
                    "Content-type": "application/json"
                },
                  "processData": true,
                  "data": budSend
            };
            console.log(patchSettings);
            $.ajax(patchSettings).done(function(patchresp){
                console.log(patchresp);
                localStorage.setItem('budgets', patchresp);
                notie.alert(1, "Successfully updated you budget values!", 5);

            }).fail(function(errormsg){
                console.log(errormsg);
                notie.alert(3, "The update failed, please try again, if it doesn't work please contact us!", 10);
            });

        }
    }
})
