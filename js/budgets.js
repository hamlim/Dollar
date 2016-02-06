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
            // db_name = "m_jan_budget";
            monthName.innerHTML = "January";
        } else if (month === 1){
            //its February
            //https://api.airtable.com/v0/applYClUOdBXhRzGf/m_feb_budget
            // db_name = "m_feb_budget";
            monthName.innerHTML = "February";
        } else if (month === 2){
            // March
            // db_name = "m_mar_budget";
            monthName.innerHTML = "March";
        } else if (month === 3){
            //April
            // db_name = "m_apr_budget";
            monthName.innerHTML = "April";
        } else if (month === 4){
            //may
            // db_name = "m_may_budget";
            monthName.innerHTML = "May";
        } else if (month === 5){
            //june
            // db_name = "m_jun_budget";
            monthName.innerHTML = "June";
        } else if (month === 6){
            //july
            // db_name = "m_jul_budget";
            monthName.innerHTML = "July";
        } else if (month === 7){
            //August
            // db_name = "m_aug_budget";
            monthName.innerHTML = "August";
        } else if (month === 8){
            //September
            // db_name = "m_sep_budget";
            monthName.innerHTML = "September";
        } else if (month === 9){
            //October
            // db_name = "m_oct_budget";
            monthName.innerHTML = "October";
        } else if (month === 10){
            //November
            // db_name = "m_nov_budget";
            monthName.innerHTML = "November";
        } else if (month === 11){
            //December
            // db_name = "m_dec_budget";
            monthName.innerHTML = "December";
        } else {
            //error
            db_name = "error";
        }
        var currentBudget = {};
        function getBudget(userid, dbname){
            // console.log(userid);
            if(dbname === "error"){
                notie.alert(3, "Error, unable to get the current month!", 5);
                return {"error-message": "Unable to get the current month"};
            } else {
                var settings = {
                    "method": "GET",
                    "url": "https://api.airtable.com/v0/applYClUOdBXhRzGf/MonthlyBudgets",
                    "async": true,
                    "crossDomain": true,
                    "headers": {
                        "authorization": "Bearer keyIye3zskPSBMQ6Q"
                    }
                };
                $.ajax(settings).done(function(response){
                    console.log("ajax");
                    console.log(response);
                    var allBudgets = {};
                    for(var i=0; i<response.records.length; i++){
                        if(response.records[i].fields.mb_userIDFK === userid){
                            // console.log("Hello?");
                            localStorage.setItem('budgets', JSON.stringify(response.records[i]));
                            currentBudget = response.records[i];
                            //all Budgets
                            //now we want to load in all the other elements
                            $('#'+response.records[i].fields.mb_monthKey.toString()+'-food').html("$" + response.records[i].fields.mb_food);
                            $('#'+response.records[i].fields.mb_monthKey.toString()+'-other').html("$" + response.records[i].fields.mb_other);
                            $('#'+response.records[i].fields.mb_monthKey.toString()+'-utilities').html("$" + response.records[i].fields.mb_utilities);
                            $('#'+response.records[i].fields.mb_monthKey.toString()+'-gifts').html("$" + response.records[i].fields.mb_gifts);
                            $('#'+response.records[i].fields.mb_monthKey.toString()+'-transportation').html("$" + response.records[i].fields.mb_transportation);
                            $('#'+response.records[i].fields.mb_monthKey.toString()+'-travel').html("$" + response.records[i].fields.mb_travel);
                            $('#'+response.records[i].fields.mb_monthKey.toString()+'-home').html("$" + response.records[i].fields.mb_home);
                            $('#'+response.records[i].fields.mb_monthKey.toString()+'-health').html("$" + response.records[i].fields.mb_health);
                            $('#'+response.records[i].fields.mb_monthKey.toString()+'-personal').html("$" + response.records[i].fields.mb_personal);
                            //end all budgets


                            if(currentBudget.fields.mb_monthKey === month){
                                var currentBudgetElement = document.getElementById('current-month-budget-values');
                                var currentBudgetValues = {
                                    "personal": currentBudget.fields.mb_personal,
                                    "travel": currentBudget.fields.mb_travel,
                                    "home": currentBudget.fields.mb_home,
                                    "health": currentBudget.fields.mb_health,
                                    "transportation": currentBudget.fields.mb_transportation,
                                    "gifts": currentBudget.fields.mb_gifts,
                                    "utilities": currentBudget.fields.mb_utilities,
                                    "food": currentBudget.fields.mb_food,
                                    "other": currentBudget.fields.mb_other
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
                                    if(moment(expense.d_time).month() === month){
                                        console.log("here?");
                                        //we are in the right month, now we want to add the value to the totalsForCurrentMonth obj
                                        if(expense.d_category === "Personal"){
                                            currentState.personal.spent += expense.d_amount;
                                        } else if (expense.d_category === "Travel"){
                                            currentState.travel.spent += expense.d_amount;
                                        } else if (expense.d_category === "Home"){
                                            currentState.home.spent += expense.d_amount;
                                        } else if (expense.d_category === "Health"){
                                            currentState.health.spent += expense.d_amount;
                                        } else if (expense.d_category === "Transportation"){
                                            currentState.transportation.spent += expense.d_amount;
                                        } else if (expense.d_category === "Gifts"){
                                            currentState.gifts.spent += expense.d_amount;
                                        } else if (expense.d_category === "Utilities"){
                                            currentState.utilities.spent += expense.d_amount;
                                        } else if (expense.d_category === "Food"){
                                            currentState.food.spent += expense.d_amount;
                                        } else if (expense.d_category === "Other"){
                                            currentState.other.spent += expense.d_amount;
                                        }
                                        // console.log(currentState);
                                    }
                                }
                                // console.log(currentState);
                                //currentBudgetValues
                                currentState.personal.budget = currentBudgetValues.personal;
                                currentState.home.budget = currentBudgetValues.home;
                                currentState.health.budget = currentBudgetValues.health;
                                currentState.travel.budget = currentBudgetValues.travel;
                                currentState.transportation.budget = currentBudgetValues.transportation;
                                currentState.food.budget = currentBudgetValues.food;
                                currentState.other.budget = currentBudgetValues.other;
                                currentState.utilities.budget = currentBudgetValues.utilities;
                                currentState.gifts.budget = currentBudgetValues.gifts;
                                //now we want to calc the percentages

                                // console.log("Percentages: ");
                                currentState.personal.percentage = (currentState.personal.spent.toFixed(2) / currentState.personal.budget.toFixed(2));
                                currentState.home.percentage = (currentState.home.spent.toFixed(2) / currentState.home.budget.toFixed(2));
                                currentState.health.percentage = (currentState.health.spent.toFixed(2) / currentState.health.budget.toFixed(2));
                                currentState.travel.percentage = (currentState.travel.spent.toFixed(2) / currentState.travel.budget.toFixed(2));
                                currentState.transportation.percentage = (currentState.transportation.spent.toFixed(2) / currentState.transportation.budget.toFixed(2));
                                currentState.food.percentage = (currentState.food.spent.toFixed(2) / currentState.food.budget.toFixed(2));
                                currentState.other.percentage = (currentState.other.spent.toFixed(2) / currentState.other.budget.toFixed(2));
                                currentState.utilities.percentage = (currentState.utilities.spent.toFixed(2) / currentState.utilities.budget.toFixed(2));
                                currentState.gifts.percentage = (currentState.gifts.spent.toFixed(2) / currentState.gifts.budget.toFixed(2));
                                // console.log("currentState: ");
                                // console.log(currentState);

                                //personal, travel, home, health, transportation, gifts, utilities, food other
                                personal_BV.innerHTML = "$" + (currentState.personal.budget).toString();
                                personal_SV.innerHTML = "$" + (currentState.personal.spent).toString();
                                personal_PV.innerHTML = (currentState.personal.percentage.toFixed(2) * 100).toString() + "%";
                                travel_BV.innerHTML = "$" + (currentState.travel.budget).toString();
                                travel_SV.innerHTML = "$" + (currentState.travel.spent).toString();
                                travel_PV.innerHTML = (currentState.travel.percentage.toFixed(2) * 100).toString() + "%";
                                home_BV.innerHTML = "$" + (currentState.home.budget).toString();
                                home_SV.innerHTML = "$" + (currentState.home.spent).toString();
                                home_PV.innerHTML = (currentState.home.percentage.toFixed(2) * 100).toString() + "%";
                                health_BV.innerHTML = "$" + (currentState.health.budget).toString();
                                health_SV.innerHTML = "$" + (currentState.health.spent).toString();
                                health_PV.innerHTML = (currentState.health.percentage.toFixed(2) * 100).toString() + "%";
                                transportation_BV.innerHTML = "$" + (currentState.transportation.budget).toString();
                                transportation_SV.innerHTML = "$" + (currentState.transportation.spent).toString();
                                transportation_PV.innerHTML = (currentState.transportation.percentage.toFixed(2) * 100).toString() + "%";
                                gifts_BV.innerHTML = "$" + (currentState.gifts.budget).toString();
                                gifts_SV.innerHTML = "$" + (currentState.gifts.spent).toString();
                                gifts_PV.innerHTML = (currentState.gifts.percentage.toFixed(2) * 100).toString() + "%";
                                utilities_BV.innerHTML = "$" + (currentState.utilities.budget).toString();
                                utilities_SV.innerHTML = "$" + (currentState.utilities.spent).toString();
                                utilities_PV.innerHTML = (currentState.utilities.percentage.toFixed(2) * 100).toString() + "%";
                                food_BV.innerHTML = "$" + (currentState.food.budget).toString();
                                food_SV.innerHTML = "$" + (currentState.food.spent).toString();
                                food_PV.innerHTML = (currentState.food.percentage.toFixed(2) * 100).toString() + "%";
                                other_BV.innerHTML = "$" + (currentState.other.budget).toString();
                                other_SV.innerHTML = "$" + (currentState.other.spent).toString();
                                other_PV.innerHTML = (currentState.other.percentage.toFixed(2) * 100).toString() + "%";

                                //change cell color if bad percentage
                                if((currentState.personal.percentage.toFixed(2) * 100) <= 30 ){
                                    personal_PV.setAttribute('class', 'body-cell good');
                                } else if ((currentState.personal.percentage.toFixed(2) * 100) <= 70 && (currentState.personal.percentage.toFixed(2) * 100) >= 30){
                                    personal_PV.setAttribute('class', 'body-cell warn');
                                } else {
                                    personal_PV.setAttribute('class', 'body-cell danger');
                                }

                                if((currentState.other.percentage.toFixed(2) * 100) <= 30 ){
                                    other_PV.setAttribute('class', 'body-cell good');
                                } else if ((currentState.other.percentage.toFixed(2) * 100) <= 70 && (currentState.other.percentage.toFixed(2) * 100) >= 30){
                                    other_PV.setAttribute('class', 'body-cell warn');
                                } else {
                                    other_PV.setAttribute('class', 'body-cell danger');
                                }

                                if((currentState.travel.percentage.toFixed(2) * 100) <= 30 ){
                                    travel_PV.setAttribute('class', 'body-cell good');
                                } else if ((currentState.travel.percentage.toFixed(2) * 100) <= 70 && (currentState.travel.percentage.toFixed(2) * 100) >= 30){
                                    travel_PV.setAttribute('class', 'body-cell warn');
                                } else {
                                    travel_PV.setAttribute('class', 'body-cell danger');
                                }

                                if((currentState.home.percentage.toFixed(2) * 100) <= 30 ){
                                    home_PV.setAttribute('class', 'body-cell good');
                                } else if ((currentState.home.percentage.toFixed(2) * 100) <= 70 && (currentState.home.percentage.toFixed(2) * 100) >= 30){
                                    home_PV.setAttribute('class', 'body-cell warn');
                                } else {
                                    home_PV.setAttribute('class', 'body-cell danger');
                                }

                                if((currentState.health.percentage.toFixed(2) * 100) <= 30 ){
                                    health_PV.setAttribute('class', 'body-cell good');
                                } else if ((currentState.health.percentage.toFixed(2) * 100) <= 70 && (currentState.health.percentage.toFixed(2) * 100) >= 30){
                                    health_PV.setAttribute('class', 'body-cell warn');
                                } else {
                                    health_PV.setAttribute('class', 'body-cell danger');
                                }

                                if((currentState.transportation.percentage.toFixed(2) * 100) <= 30 ){
                                    transportation_PV.setAttribute('class', 'body-cell good');
                                } else if ((currentState.transportation.percentage.toFixed(2) * 100) <= 70 && (currentState.transportation.percentage.toFixed(2) * 100) >= 30){
                                    transportation_PV.setAttribute('class', 'body-cell warn');
                                } else {
                                    transportation_PV.setAttribute('class', 'body-cell danger');
                                }

                                if((currentState.gifts.percentage.toFixed(2) * 100) <= 30 ){
                                    gifts_PV.setAttribute('class', 'body-cell good');
                                } else if ((currentState.gifts.percentage.toFixed(2) * 100) <= 70 && (currentState.gifts.percentage.toFixed(2) * 100) >= 30){
                                    gifts_PV.setAttribute('class', 'body-cell warn');
                                } else {
                                    gifts_PV.setAttribute('class', 'body-cell danger');
                                }

                                if((currentState.utilities.percentage.toFixed(2) * 100) <= 30 ){
                                    utilities_PV.setAttribute('class', 'body-cell good');
                                } else if ((currentState.utilities.percentage.toFixed(2) * 100) <= 70 && (currentState.utilities.percentage.toFixed(2) * 100) >= 30){
                                    utilities_PV.setAttribute('class', 'body-cell warn');
                                } else {
                                    utilities_PV.setAttribute('class', 'body-cell danger');
                                }

                                if((currentState.food.percentage.toFixed(2) * 100) <= 30 ){
                                    food_PV.setAttribute('class', 'body-cell good');
                                } else if ((currentState.food.percentage.toFixed(2) * 100) <= 70 && (currentState.food.percentage.toFixed(2) * 100) >= 30){
                                    food_PV.setAttribute('class', 'body-cell warn');
                                } else {
                                    food_PV.setAttribute('class', 'body-cell danger');
                                }
                            }
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
