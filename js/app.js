function sbmtBtn(){
    console.log("hey!");
    alert("hello?");
};

$(document).ready(function(){
    //dom is loaded
    //lets see if we can load in a Vue
    //variables
    var amount = document.getElementById('transactionAmount'),
      loc = document.getElementById('transactionLocation'),
      category = document.getElementById('transactionType'),
      submitBtn = document.getElementById('submit-btn');

    submitBtn.onclick = function(){
        //now we check that everything is selected
        if(amount.value != "" && loc.value != ""){
            //ok everything has been updated
            //we want to get the values from each input
            var time = new Date();
            //desired format: Month day-number, year
            var mon = time.getMonth() + 1;
            var month = mon.toString();
            var day = time.getDate().toString();
            var year = time.getFullYear().toString();
            var transactionTime = year+"-"+month+"-"+day;
            var amt = amount.value, locv = loc.value, type = category.value;
            var data = {
                "Amount": amt,
                "Location": locv,
                "Category": type,
                "Transaction Date": transactionTime
            };
            var pckge = {
                "fields": data
            };
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": "https://api.airtable.com/v0/app3KwIBwNt7e6HsE/Credit%2520Card",
              "method": "POST",
              "headers": {
                "authorization": "Bearer keyIye3zskPSBMQ6Q",
                "content-type": "application/json"
              },
              "processData": false,
              "data": pckge
            }

            $.ajax(settings).done(function (response) {
              console.log(response);
              // we want to add the response to the rendered transactions
              
            });
            //now we want to push this to the server

        } else {
            alert("Make sure you fill in all the fields!");
        }

    }


});
