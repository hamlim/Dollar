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
      submitBtn = document.getElementById('submit-btn'),
      localStore = {},
      pastTransactions = document.getElementById('past-transactions');
    //handle loading in all current transactions
    var getSettings = {
        "async": true,
        "crossDomain": true,
        "method": "GET",
        "url": "https://api.airtable.com/v0/app3KwIBwNt7e6HsE/Credit%20Card?limit=10&sortField=Transaction%20Date&sortDirection=desc",
        "headers": {
            "authorization": "Bearer keyIye3zskPSBMQ6Q"
        }
    };
    $.ajax(getSettings).done(function(resp){
        console.log(resp);
        var records = resp.records;
        for(var i=0; i<records.length; i++){
            var divRow = document.createElement('div');
            divRow.setAttribute('class', 'row');
            divRow.setAttribute('id', i+'-parent');
            var amountDiv = document.createElement('div');
            amountDiv.setAttribute('class', 'one-third column');
            amountDiv.setAttribute('data-financial-amount', records[i].Amount);
            var locationDiv = document.createElement('div');
            amountDiv.setAttribute('class', 'one-third column');
            amountDiv.setAttribute('data-financial-location', records[i].Location);

        }
    })

    //handle the adding of new transactions

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
                "Amount": parseFloat(amt),
                "Location": locv,
                "Category": type,
                "Transaction Date": transactionTime
            };
            var pckge = {
                "fields": data
            };
            var spackage = JSON.stringify(pckge);
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": "https://api.airtable.com/v0/app3KwIBwNt7e6HsE/Credit%20Card",
              "method": "POST",
              "headers": {
                "authorization": "Bearer keyIye3zskPSBMQ6Q",
                "content-type": "application/json"
              },
              "data": spackage
            }
            console.log(pckge);
            $.ajax(settings).done(function (response) {
                console.log(response);
                // we want to add the response to the rendered transactions
                // localStore.transactions.push(response);
                notie.alert(1, 'Success!', 1.5);
                //now we want to append that to the transaction section

            });
            //now we want to push this to the server

        } else {
            alert("Make sure you fill in all the fields!");
        }

    }


});
