$(document).ready(function(){
    //ok we are on page load of app.html
    if(localStorage.length = 0){
        //redirect to login
        window.Location.href = "./login.html";
    } else {
        //we want to get the last ten expenses for the current user
        var user = JSON.parse(localStorage.getItem('user'));
        var userID = user.userID;
        //TODO: Insert check if userExpenses is already in localStorage (then skip the ajax)
        //getting elements by ID
        var amount = document.getElementById('transactionAmount'),
          loc = document.getElementById('transactionLocation'),
          category = document.getElementById('transactionType'),
          submitBtn = document.getElementById('submit-btn'),
          userExpenses = [],
          notes = document.getElementById('transactionNotes'),
          pastTransactions = document.getElementById('past-transactions');
        //we want to get all the transactions that match that userID
        var getSettings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.airtable.com/v0/applYClUOdBXhRzGf/Dollars?sortField=d_time&sortDirection=desc",
            "method": "GET",
            "headers": {
                "authorization": "Bearer keyIye3zskPSBMQ6Q"
            }
        };
        $.ajax(getSettings).done(function (response) {
            //console.log(response);
            var data = response.records;
            for(var i=0; i<data.length; i++){
                if(data[i].fields.d_userIDFK === userID){
                    //add it to the user expenses array
                    userExpenses.push(data[i]);
                }
            }
            //we might as well also save userExpenses
            var userExpensesString = JSON.stringify(userExpenses);
            localStorage.setItem('userExpenses', userExpensesString);
            //ok so we have some transactions in the userExpenses array
            if(userExpenses.length < 10){
                console.log(userExpenses);
                for(var k=0; k<userExpenses.length; k++){

                    //if it is the last element make a special case to change the class of the row (for easy removal)
                    if(k === userExpenses.length -1){
                        var divRow = document.createElement('tr');
                        divRow.setAttribute('id', 'last-element');
                        divRow.setAttribute('class', 'expense-row');
                        var amountDiv = document.createElement('td');
                        var linkTD = document.createElement('td');
                        linkTD.innerHTML = "Click for info!";
                        linkTD.className = "expense-info";
                        amountDiv.innerHTML = "$"+userExpenses[k].fields.d_amount;
                        var locationDiv = document.createElement('td');
                        locationDiv.innerHTML = userExpenses[k].fields.d_location;
                        var timeDiv = document.createElement('td');
                        //change time to date and hours
                        var converted = moment(userExpenses[k].fields.d_time);
                        var readable = converted._d;
                        timeDiv.innerHTML = readable;
                        var categoryDiv = document.createElement('td');
                        categoryDiv.innerHTML = userExpenses[k].fields.d_category;
                        var uniqueID = userExpenses[k].id;
                        divRow.setAttribute('data-expense-id', uniqueID);
                        divRow.appendChild(linkTD);
                        divRow.appendChild(timeDiv);
                        divRow.appendChild(amountDiv);
                        divRow.appendChild(locationDiv);
                        divRow.appendChild(categoryDiv);
                        pastTransactions.appendChild(divRow);
                    } else {
                        //now we want to write this data to the page
                        var divRow = document.createElement('tr');
                        var amountDiv = document.createElement('td');
                        var linkTD = document.createElement('td');
                        linkTD.innerHTML = "Click for info!";
                        linkTD.className = "expense-info";
                        amountDiv.innerHTML = "$"+userExpenses[k].fields.d_amount;
                        var locationDiv = document.createElement('td');
                        locationDiv.innerHTML = userExpenses[k].fields.d_location;
                        var timeDiv = document.createElement('td');
                        //change time to date and hours
                        var converted = moment(userExpenses[k].fields.d_time);
                        var readable = converted._d;
                        timeDiv.innerHTML = readable;
                        var categoryDiv = document.createElement('td');
                        categoryDiv.innerHTML = userExpenses[k].fields.d_category;
                        divRow.appendChild(linkTD);
                        divRow.appendChild(timeDiv);
                        divRow.appendChild(amountDiv);
                        divRow.appendChild(locationDiv);
                        divRow.appendChild(categoryDiv);
                        divRow.setAttribute('class', 'expense-row');
                        var uniqueID = userExpenses[k].id;
                        divRow.setAttribute('data-expense-id', uniqueID);
                        pastTransactions.appendChild(divRow);
                    }
                }
            } else {
                for(var k=0; k<10; k++){
                    //if it is the last element make a special case to change the class of the row (for easy removal)
                    if(k === userExpenses.length -1){
                        var divRow = document.createElement('tr');
                        divRow.setAttribute('id', 'last-element');
                        divRow.setAttribute('class', 'expense-row');
                        var amountDiv = document.createElement('td');
                        var linkTD = document.createElement('td');
                        linkTD.innerHTML = "Click for info!";
                        linkTD.className = "expense-info";
                        amountDiv.innerHTML = "$"+userExpenses[k].fields.d_amount;
                        var locationDiv = document.createElement('td');
                        locationDiv.innerHTML = userExpenses[k].fields.d_location;
                        var timeDiv = document.createElement('td');
                        //change time to date and hours
                        var converted = moment(userExpenses[k].fields.d_time);
                        var readable = converted._d;
                        timeDiv.innerHTML = readable;
                        var categoryDiv = document.createElement('td');
                        categoryDiv.innerHTML = userExpenses[k].fields.d_category;
                        var uniqueID = userExpenses[k].id;
                        divRow.setAttribute('data-expense-id', uniqueID);
                        divRow.appendChild(linkTD);
                        divRow.appendChild(timeDiv);
                        divRow.appendChild(amountDiv);
                        divRow.appendChild(locationDiv);
                        divRow.appendChild(categoryDiv);
                        pastTransactions.appendChild(divRow);
                    } else {
                        //now we want to write this data to the page
                        var divRow = document.createElement('tr');
                        var amountDiv = document.createElement('td');
                        var linkTD = document.createElement('td');
                        linkTD.innerHTML = "Click for info!";
                        linkTD.className = "expense-info";
                        amountDiv.innerHTML = "$"+userExpenses[k].fields.d_amount;
                        var locationDiv = document.createElement('td');
                        locationDiv.innerHTML = userExpenses[k].fields.d_location;
                        var timeDiv = document.createElement('td');
                        //change time to date and hours
                        var converted = moment(userExpenses[k].fields.d_time);
                        var readable = converted._d;
                        timeDiv.innerHTML = readable;
                        var categoryDiv = document.createElement('td');
                        categoryDiv.innerHTML = userExpenses[k].fields.d_category;
                        divRow.appendChild(linkTD);
                        divRow.appendChild(timeDiv);
                        divRow.appendChild(amountDiv);
                        divRow.appendChild(locationDiv);
                        divRow.appendChild(categoryDiv);
                        divRow.setAttribute('class', 'expense-row');
                        var uniqueID = userExpenses[k].id;
                        divRow.setAttribute('data-expense-id', uniqueID);
                        pastTransactions.appendChild(divRow);
                    }
                }
            }
            //when they click on the more info section, show a modal
            $('.expense-info').on('click', '', function() {
                var uniqueRowID = this.parentNode.getAttribute('data-expense-id');
                console.log(uniqueRowID);
                for(var j=0; j<userExpenses.length; j++){
                    if(userExpenses[j].id === uniqueRowID){
                        var converted = moment(userExpenses[j].fields.d_time);
                        var readable = converted._d;
                        vex.dialog.alert({
                            message: '<ul><li>Amount: </li><ul><li class=\'currency\'>$'+userExpenses[j].fields.d_amount+'</li></ul><li>Location: </li><ul><li>'+userExpenses[j].fields.d_location+'</li></ul><li>Time: </li><ul><li>'+readable+'</li></ul><li>Notes: </li><ul><li>'+userExpenses[j].fields.d_notes+'</li></ul></ul>'
                        });
                    }
                }
            });
        });


        //now we want to handle the current user adding a new transaction
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
                var amt = amount.value, locv = loc.value, type = category.value, note = notes.value;
                var data = {
                    "d_amount": parseFloat(amt),
                    "d_location": locv,
                    "d_category": type,
                    "d_notes": note,
                    "d_time": transactionTime,
                    "d_userIDFK": userID
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
                    userExpenses.push(response);
                    //we also want to update the localStorage
                    var userExpensesString = JSON.stringify(userExpenses);
                    localStorage.setItem('userExpenses', userExpensesString);
                    amount.value = "";
                    loc.value = "";
                    category.value = "Other";
                    notes.value = "";
                    // we want to add the response to the rendered transactions
                    notie.alert(1, 'Success!', 1.5);
                    //now we want to append that to the transaction section
                    //pastTransactions is the parent element
                    var last = pastTransactions.lastChild;
                    last.parentNode.removeChild(last);
                    //now prepend a new tr
                    var divRow = document.createElement('tr');
                    var amountDiv = document.createElement('td');
                    var linkTD = document.createElement('td');
                    linkTD.innerHTML = "Click for more info!";
                    linkTD.className = "expense-info";
                    amountDiv.innerHTML = "$"+amt.toString();
                    divRow.setAttribute('class', 'expense-row');
                    var uniqueID = response.id;
                    divRow.setAttribute('data-expense-id', uniqueID);
                    var locationDiv = document.createElement('td');
                    locationDiv.innerHTML = locv;
                    var timeDiv = document.createElement('td');
                    //change time to date and hours
                    var converted = moment(transactionTime);
                    var readable = converted._d;
                    timeDiv.innerHTML = readable;
                    var categoryDiv = document.createElement('td');
                    categoryDiv.innerHTML = type;
                    divRow.appendChild(linkTD);
                    divRow.appendChild(timeDiv);
                    divRow.appendChild(amountDiv);
                    divRow.appendChild(locationDiv);
                    divRow.appendChild(categoryDiv);
                    pastTransactions.insertBefore(divRow, pastTransactions.firstChild);
                    $('.expense-info').on('click', '', function() {
                        var uniqueRowID = this.parentNode.getAttribute('data-expense-id');
                        console.log(uniqueRowID);
                        for(var k=0; k<userExpenses.length; k++){
                            if(userExpenses[k].id === uniqueRowID){
                                var converted = moment(userExpenses[k].fields.d_time);
                                var readable = converted._d;
                                vex.dialog.alert({
                                    message: '<ul><li>Amount: </li><ul><li class=\'currency\'>$'+userExpenses[k].fields.d_amount+'</li></ul><li>Location: </li><ul><li>'+userExpenses[k].fields.d_location+'</li></ul><li>Time: </li><ul><li>'+readable+'</li></ul><li>Notes: </li><ul><li>'+userExpenses[k].fields.d_notes+'</li></ul></ul>'
                                });
                            }
                        }
                    });

                });
                //now we want to push this to the server

            } else {
                notie.alert(2,"Make sure you fill in all the fields!", 5);
            }

        };
    }
});
