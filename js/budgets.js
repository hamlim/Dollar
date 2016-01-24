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
            db_name = "m_jan_budget";
        } else if (month === 1){
            //its February
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

        function getBudget(user.fields.u_userID, db_name){
            if(dbname === "error"){
                notie.alert(3, "Error, unable to get the current month!", 5);
            } else {
                var settings = {
                    
                }
                // var settings = {
                //     "method": "GET",
                //     "url": "https://airtable.com/"+dbname,
                //     "headers": {
                //         ""
                //     }
                // }
                $.ajax(settings).done(function(response){
                    console.log(response);
                    return response;
                });
            }
        }
    }
});
