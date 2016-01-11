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
        console.log("resp: ");
        console.log(resp);
        var records = resp.records;
        for(var i=0; i<records.length; i++){
            var divRow = document.createElement('tr');
            var amountDiv = document.createElement('td');
            amountDiv.innerHTML = records[i].fields.Amount;
            var locationDiv = document.createElement('td');
            locationDiv.innerHTML = records[i].fields.Location;
            var timeDiv = document.createElement('td');
            //change time to date and hours
            var converted = moment(records[i].fields["Transaction Date"]);
            var readable = converted._d;
            timeDiv.innerHTML = readable;
            var categoryDiv = document.createElement('td');
            categoryDiv.innerHTML = records[i].fields.Category;
            divRow.appendChild(timeDiv);
            divRow.appendChild(amountDiv);
            divRow.appendChild(locationDiv);
            divRow.appendChild(categoryDiv);
            pastTransactions.appendChild(divRow);
            if(i === records.length -1){
                var divRow = document.createElement('tr');
                divRow.setAttribute('id', 'last-element');
                var amountDiv = document.createElement('td');
                amountDiv.innerHTML = records[i].fields.Amount;
                var locationDiv = document.createElement('td');
                locationDiv.innerHTML = records[i].fields.Location;
                var timeDiv = document.createElement('td');
                //change time to date and hours
                var converted = moment(records[i].fields["Transaction Date"]);
                var readable = converted._d;
                timeDiv.innerHTML = readable;
                var categoryDiv = document.createElement('td');
                categoryDiv.innerHTML = records[i].fields.Category;
                divRow.appendChild(timeDiv);
                divRow.appendChild(amountDiv);
                divRow.appendChild(locationDiv);
                divRow.appendChild(categoryDiv);
                pastTransactions.appendChild(divRow);
            }
        }
    });

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
            var hours = time.getHours().toString();
            var minutes = time.getMinutes().toString();
            var transactionTime = year+"-"+month+"-"+day+"-"+hours+":"+minutes;
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
                amount.value = "";
                loc.value = "";
                category.value = "Other";
                // we want to add the response to the rendered transactions
                // localStore.transactions.push(response);
                notie.alert(1, 'Success!', 1.5);
                //now we want to append that to the transaction section
                //pastTransactions is the parent element
                var last = pastTransactions.lastChild;
                last.parentNode.removeChild(last);
                //now prepend a new tr
                var divRow = document.createElement('tr');
                var amountDiv = document.createElement('td');
                amountDiv.innerHTML = amt;
                var locationDiv = document.createElement('td');
                locationDiv.innerHTML = locv;
                var timeDiv = document.createElement('td');
                //change time to date and hours
                var converted = moment(transactionTime);
                var readable = converted._d;
                timeDiv.innerHTML = readable;
                var categoryDiv = document.createElement('td');
                categoryDiv.innerHTML = type;
                divRow.appendChild(timeDiv);
                divRow.appendChild(amountDiv);
                divRow.appendChild(locationDiv);
                divRow.appendChild(categoryDiv);
                pastTransactions.insertBefore(divRow, pastTransactions.firstChild);

            });
            //now we want to push this to the server

        } else {
            alert("Make sure you fill in all the fields!");
        }

    }


});
