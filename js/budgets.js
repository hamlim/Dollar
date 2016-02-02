$(document).ready(function(){
    console.log("*--------------------------------------------*");
    console.log("Begin budgets.js");
    console.log("*--------------------------------------------*");
    if(localStorage.length === 0){
        window.location.href = "./login.html";
    } else {

        var user = JSON.parse(localStorage.getItem('user'));
        //we want to get the current month
        // month-budgets.js
        //we first want to get the month that the person is checking the website
        var dateobj = new Date;
        var month = dateobj.getMonth();
        var monthName = document.getElementById('month-name');
        var db_name = "";
        if(month === 0){
            //its january, so get the janauray budgets
            //https://api.airtable.com/v0/applYClUOdBXhRzGf/m_jan_budget
            db_name = "m_jan_budget";
            monthName.innerHTML = "January";
        } else if (month === 1){
            //its February
            //https://api.airtable.com/v0/applYClUOdBXhRzGf/m_feb_budget
            db_name = "m_feb_budget";
            monthName.innerHTML = "February";
        } else if (month === 2){
            // March
            db_name = "m_mar_budget";
            monthName.innerHTML = "March";
        } else if (month === 3){
            //April
            db_name = "m_apr_budget";
            monthName.innerHTML = "April";
        } else if (month === 4){
            //may
            db_name = "m_may_budget";
            monthName.innerHTML = "May";
        } else if (month === 5){
            //june
            db_name = "m_jun_budget";
            monthName.innerHTML = "June";
        } else if (month === 6){
            //july
            db_name = "m_jul_budget";
            monthName.innerHTML = "July";
        } else if (month === 7){
            //August
            db_name = "m_aug_budget";
            monthName.innerHTML = "August";
        } else if (month === 8){
            //September
            db_name = "m_sep_budget";
            monthName.innerHTML = "September";
        } else if (month === 9){
            //October
            db_name = "m_oct_budget";
            monthName.innerHTML = "October";
        } else if (month === 10){
            //November
            db_name = "m_nov_budget";
            monthName.innerHTML = "November";
        } else if (month === 11){
            //December
            db_name = "m_dec_budget";
            monthName.innerHTML = "December";
        } else {
            //error
            db_name = "error";
        }
        var currentBudget = {};
        function getBudget(userid, dbname){
            console.log(userid);
            if(dbname === "error"){
                notie.alert(3, "Error, unable to get the current month!", 5);
                return {"error-message": "Unable to get the current month"};
            } else {
                var settings = {
                    "method": "GET",
                    "url": "https://api.airtable.com/v0/applYClUOdBXhRzGf/" + dbname,
                    "async": true,
                    "crossDomain": true,
                    "headers": {
                        "authorization": "Bearer keyIye3zskPSBMQ6Q"
                    }
                };
                $.ajax(settings).done(function(response){
                    console.log(response);
                    for(var i=0; i<response.records.length; i++){
                        if(response.records[i].fields.userIDFK === userid){
                            currentBudget = response.records[i];
                            console.log("currentBudget: ");
                            console.log(currentBudget);
                            var currentBudgetElement = document.getElementById('current-month-budget-values');
                            var currentBudgetValues = {
                                "personal": currentBudget.fields.personal,
                                "travel": currentBudget.fields.travel,
                                "home": currentBudget.fields.home,
                                "health": currentBudget.fields.health,
                                "transportation": currentBudget.fields.transportation,
                                "gifts": currentBudget.fields.gifts,
                                "utilities": currentBudget.fields.utilities,
                                "food": currentBudget.fields.food,
                                "other": currentBudget.fields.other
                            };
                            //relevant Variables
                            //need to get all the categories and all the body cells for each category
                            var personal_BV = document.getElementById('personal-b-v');
                            var personal_SV = document.getElementById('personal-s-v');
                            var personal_PV = document.getElementById('personal-p-v');

                            var travel_BV = document.getElementById('travel-b-v');
                            var travel_SV = document.getElementById('travel-s-v');
                            var travel_PV = document.getElementById('travel-p-v');

                            var home_BV = document.getElementById('home-b-v');
                            var home_SV = document.getElementById('home-s-v');
                            var home_PV = document.getElementById('home-p-v');

                            var health_BV = document.getElementById('health-b-v');
                            var health_SV = document.getElementById('health-s-v');
                            var health_PV = document.getElementById('health-p-v');

                            var transportation_BV = document.getElementById('transportation-b-v');
                            var transportation_SV = document.getElementById('transportation-s-v');
                            var transportation_PV = document.getElementById('transportation-p-v');

                            var gifts_BV = document.getElementById('gifts-b-v');
                            var gifts_SV = document.getElementById('gifts-s-v');
                            var gifts_PV = document.getElementById('gifts-p-v');

                            var utilities_BV = document.getElementById('utilities-b-v');
                            var utilities_SV = document.getElementById('utilities-s-v');
                            var utilities_PV = document.getElementById('utilities-p-v');

                            var food_BV = document.getElementById('food-b-v');
                            var food_SV = document.getElementById('food-s-v');
                            var food_PV = document.getElementById('food-p-v');

                            var other_BV = document.getElementById('other-b-v');
                            var other_SV = document.getElementById('other-s-v');
                            var other_PV = document.getElementById('other-p-v');
                            //this we want to populate with the current totals for the month
                            //all values are in userExpenses
                            var currentState = {
                                "personal": {
                                    "budget": 0,
                                    "spent": 0,
                                    "percentage": 0
                                },
                                "travel": {
                                    "budget": 0,
                                    "spent": 0,
                                    "percentage": 0
                                },
                                "home": {
                                    "budget": 0,
                                    "spent": 0,
                                    "percentage": 0
                                },
                                "health": {
                                    "budget": 0,
                                    "spent": 0,
                                    "percentage": 0
                                },
                                "transportation": {
                                    "budget": 0,
                                    "spent": 0,
                                    "percentage": 0
                                },
                                "gifts": {
                                    "budget": 0,
                                    "spent": 0,
                                    "percentage": 0
                                },
                                "utilities": {
                                    "budget": 0,
                                    "spent": 0,
                                    "percentage": 0
                                },
                                "food": {
                                    "budget": 0,
                                    "spent": 0,
                                    "percentage": 0
                                },
                                "other": {
                                    "budget": 0,
                                    "spent": 0,
                                    "percentage": 0
                                }
                            };
                            var expenses = JSON.parse(localStorage.getItem('userExpenses'));
                            for(var j = 0; j<expenses.length; j++){
                                //if it is the current month, get the value and add it to a totals obj
                                var expense = expenses[j].fields;
                                console.log(expense.d_time);
                                if(moment(expense.d_time).month() === month){
                                    //we are in the right month, now we want to add the value to the totalsForCurrentMonth obj
                                    if(expense.d_category === "personal"){
                                        totalsForCurrentMonth.personal.spent += expense.d_amount;
                                    } else if (expense.d_category === "travel"){
                                        totalsForCurrentMonth.travel.spent += expense.d_amount;
                                    } else if (expense.d_category === "home"){
                                        totalsForCurrentMonth.home.spent += expense.d_amount;
                                    } else if (expense.d_category === "health"){
                                        totalsForCurrentMonth.health.spent += expense.d_amount;
                                    } else if (expense.d_category === "transportation"){
                                        totalsForCurrentMonth.transportation.spent += expense.d_amount;
                                    } else if (expense.d_category === "gifts"){
                                        totalsForCurrentMonth.gifts.spent += expense.d_amount;
                                    } else if (expense.d_category === "utilities"){
                                        totalsForCurrentMonth.utilities.spent += expense.d_amount;
                                    } else if (expense.d_category.spent === "food"){
                                        totalsForCurrentMonth.food.spent += expense.d_amount;
                                    } else if (expense.d_category.spent === "other"){
                                        totalsForCurrentMonth.other.spent += expense.d_amount;
                                    }
                                }
                            }
                            console.log(totalsForCurrentMonth);
                            //currentBudgetValues
                        }
                    }
                });
            }
        }

        //end function getBudget(userID, dbname)
        getBudget(user.userID, db_name);
    }

    console.log("*--------------------------------------------*");
    console.log("End budgets.js");
    console.log("*--------------------------------------------*");
    console.log("- - - - - - - - - - - - - - - - - - - - - - - ");

});
