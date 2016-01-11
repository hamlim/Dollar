$(document).ready(function(){
    //dom is loaded
    //lets see if we can load in a Vue
    //variables
    var pastTransactions = document.getElementById('past-transactions'),
        personalElem = document.getElementById('personal'),
        homeElem = document.getElementById('home'),
        healthElem = document.getElementById('health'),
        giftsElem = document.getElementById('gifts'),
        travelElem = document.getElementById('travel'),
        transportationElem = document.getElementById('transportation'),
        utilitiesElem = document.getElementById('utilities'),
        foodElem = document.getElementById('food'),
        otherElem = document.getElementById('other');
    var amounts = {
        "food": 0,
        "other": 0,
        "personal": 0,
        "travel": 0,
        "transportation": 0,
        "utilities": 0,
        "gifts": 0,
        "health": 0,
        "home": 0
    };
    var total = 0;
    var percentage = {
        "food": 0,
        "other": 0,
        "personal": 0,
        "travel": 0,
        "transportation": 0,
        "utilities": 0,
        "gifts": 0,
        "health": 0,
        "home": 0
    }

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
            //render all transactions
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
            //analytics
            //totals
            if(records[i].fields.Category === "Food"){
                //increment food totals
                var amtString = records[i].fields.Amount;
                var food = parseFloat(amtString).toFixed(2);
                amounts.food += parseFloat(food);
            } else if(records[i].fields.Category === "Utilities") {
                var amtString = records[i].fields.Amount;
                var food = parseFloat(amtString).toFixed(2);
                amounts.utilities += parseFloat(food);
            } else if(records[i].fields.Category === "Personal") {
                var amtString = records[i].fields.Amount;
                var food = parseFloat(amtString).toFixed(2);
                amounts.personal += parseFloat(food);
            } else if(records[i].fields.Category === "Home") {
                var amtString = records[i].fields.Amount;
                var food = parseFloat(amtString).toFixed(2);
                amounts.home += parseFloat(food);
            } else if(records[i].fields.Category === "Health") {
                var amtString = records[i].fields.Amount;
                var food = parseFloat(amtString).toFixed(2);
                amounts.health += parseFloat(food);
            } else if(records[i].fields.Category === "Gifts") {
                var amtString = records[i].fields.Amount;
                var food = parseFloat(amtString).toFixed(2);
                amounts.gifts += parseFloat(food);
            } else if(records[i].fields.Category === "Travel") {
                var amtString = records[i].fields.Amount;
                var food = parseFloat(amtString).toFixed(2);
                amounts.travel += parseFloat(food);
            } else if(records[i].fields.Category === "Transportation") {
                var amtString = records[i].fields.Amount;
                var food = parseFloat(amtString).toFixed(2);
                amounts.transportation += parseFloat(food);
            } else if(records[i].fields.Category === "Other") {
                var amtString = records[i].fields.Amount;
                var food = parseFloat(amtString).toFixed(2);
                amounts.other += parseFloat(food);
            } else {
                //error
            }

        };

        //now we want to render all of amounts
        console.log("Amounts: ");
        console.log(amounts);
        personalElem.innerHTML = "$" + amounts.personal.toFixed(2);
        homeElem.innerHTML = "$" + amounts.home.toFixed(2);
        healthElem.innerHTML = "$" + amounts.health.toFixed(2);
        giftsElem.innerHTML = "$" + amounts.gifts.toFixed(2);
        travelElem.innerHTML = "$" + amounts.travel.toFixed(2);
        transportationElem.innerHTML = "$" + amounts.transportation.toFixed(2);
        utilitiesElem.innerHTML = "$" + amounts.utilities.toFixed(2);
        foodElem.innerHTML = "$" + amounts.food.toFixed(2);
        otherElem.innerHTML = "$" + amounts.other.toFixed(2);
    });



});
