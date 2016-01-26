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

        function getBudget(userid, dbname){
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
                        if(response.records.fields.userIDFK === userid){
                            return response.records;
                        }
                    }
                });
            }
        }
    }

    var currentBudget = getBudget(user.fields.u_userID, db_name);
    var currentBudgetElement = document.getElementById('current-month-budget-values');
    var currentBudgetValues = {
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
    
});
