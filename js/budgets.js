$(document).ready(function(){
    if(localStorage.length === 0){
        window.location.href = "./login.html";
    } else {

        var user = JSON.parse(localStorage.getItem('user'));
        //we want to get the current month
        // month-budgets.js
        //we first want to get the month that the person is checking the website
        var dateobj = new Date;
        var month = dateobj.getMonth();
        var db_name = "";
        if(month === 0){
            //its january, so get the janauray budgets
            //https://api.airtable.com/v0/applYClUOdBXhRzGf/m_jan_budget
            db_name = "m_jan_budget";
        } else if (month === 1){
            //its February
            //https://api.airtable.com/v0/applYClUOdBXhRzGf/m_feb_budget
            db_name = "m_feb_budget";
        } else if (month === 2){
            // March
            db_name = "m_mar_budget";
        } else if (month === 3){
            //April
            db_name = "m_apr_budget";
        } else if (month === 4){
            //may
            db_name = "m_may_budget";
        } else if (month === 5){
            //june
            db_name = "m_jun_budget";
        } else if (month === 6){
            //july
            db_name = "m_jul_budget";
        } else if (month === 7){
            //August
            db_name = "m_aug_budget";
        } else if (month === 8){
            //September
            db_name = "m_sep_budget";
        } else if (month === 9){
            //October
            db_name = "m_oct_budget";
        } else if (month === 10){
            //November
            db_name = "m_nov_budget";
        } else if (month === 11){
            //December
            db_name = "m_dec_budget";
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
                            var currentRow = document.createElement('tr');
                            var currTableCellPersonal = document.createElement('td');
                            var currTableCellTravel = document.createElement('td');
                            var currTableCellHome = document.createElement('td');
                            var currTableCellHealth = document.createElement('td');
                            var currTableCellTransportation = document.createElement('td');
                            var currTableCellGifts = document.createElement('td');
                            var currTableCellUtilities = document.createElement('td');
                            var currTableCellFood = document.createElement('td');
                            var currTableCellOther = document.createElement('td');
                            //this we want to populate with the current totals for the month
                            //all values are in userExpenses
                            var totalsForCurrentMonth = {
                                "personal": 0,
                                "travel": 0,
                                "home": 0,
                                "health": 0,
                                "transportation": 0,
                                "gifts": 0,
                                "utilities": 0,
                                "food": 0,
                                "other": 0
                            };
                            var expenses = JSON.parse(localStorage.getItem('userExpenses'));
                            for(var j = 0; j<expenses.length; j++){
                                //if it is the current month, get the value and add it to a totals obj
                                var expense = expenses[j].fields;
                                console.log(expense.d_time);
                                if(moment(expense.d_time).month() === month){
                                    //we are in the right month, now we want to add the value to the totalsForCurrentMonth obj
                                    if(expense.d_category === "personal"){
                                        totalsForCurrentMonth.personal += expense.d_amount;
                                    } else if (expense.d_category === "travel"){
                                        totalsForCurrentMonth.travel += expense.d_amount;
                                    } else if (expense.d_category === "home"){
                                        totalsForCurrentMonth.home += expense.d_amount;
                                    } else if (expense.d_category === "health"){
                                        totalsForCurrentMonth.health += expense.d_amount;
                                    } else if (expense.d_category === "transportation"){
                                        totalsForCurrentMonth.transportation += expense.d_amount;
                                    } else if (expense.d_category === "gifts"){
                                        totalsForCurrentMonth.gifts += expense.d_amount;
                                    } else if (expense.d_category === "utilities"){
                                        totalsForCurrentMonth.utilities += expense.d_amount;
                                    } else if (expense.d_category === "food"){
                                        totalsForCurrentMonth.food += expense.d_amount;
                                    } else if (expense.d_category === "other"){
                                        totalsForCurrentMonth.other += expense.d_amount;
                                    }
                                }
                            }
                            console.log(totalsForCurrentMonth);

                            var budgetRow = document.createElement('tr');
                            var tableCellPersonal = document.createElement('td');
                            var tableCellTravel = document.createElement('td');
                            var tableCellHome = document.createElement('td');
                            var tableCellHealth = document.createElement('td');
                            var tableCellTransportation = document.createElement('td');
                            var tableCellGifts = document.createElement('td');
                            var tableCellUtilities = document.createElement('td');
                            var tableCellFood = document.createElement('td');
                            var tableCellOther = document.createElement('td');
                            tableCellPersonal.innerHTML = currentBudgetValues.personal;
                        }
                    }
                });
            }
        }

        //end function getBudget(userID, dbname)
        getBudget(user.userID, db_name);
    }

});
