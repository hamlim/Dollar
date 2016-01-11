$(document).ready(function(){
    //dom is loaded
    //lets see if we can load in a Vue
    //variables
    var pastTransactions = document.getElementById('past-transactions');
    //handle loading in all current transactions
    var getSettings = {
        "async": true,
        "crossDomain": true,
        "method": "GET",
        "url": "https://api.airtable.com/v0/app3KwIBwNt7e6HsE/Credit%20Card?sortField=Transaction%20Date&sortDirection=desc",
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
        }
    });


});
