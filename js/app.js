$(document).ready(function(){
    //dom is loaded
    //lets see if we can load in a Vue
    //variables
    var amount = document.getElementById('transactionAmount'),
      loc = document.getElementById('transactionLocation'),
      category = document.getElementById('transactionType'),
      submitBtn = document.getElementById('submit-btn'),
      localStore = [],
      notes = document.getElementById('transactionNotes'),
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
            localStore.push(records[i]);
            var divRow = document.createElement('tr');
            var amountDiv = document.createElement('td');
            var linkTD = document.createElement('td');
            linkTD.innerHTML = "Click for info!";
            linkTD.className = "expense-info";
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
            divRow.appendChild(linkTD);
            divRow.appendChild(timeDiv);
            divRow.appendChild(amountDiv);
            divRow.appendChild(locationDiv);
            divRow.appendChild(categoryDiv);
            divRow.setAttribute('class', 'expense-row');
            var uniqueID = records[i].id;
            divRow.setAttribute('data-expense-id', uniqueID);
            pastTransactions.appendChild(divRow);
            if(i === records.length -1){
                var divRow = document.createElement('tr');
                divRow.setAttribute('id', 'last-element');
                divRow.setAttribute('class', 'expense-row');
                var amountDiv = document.createElement('td');
                var linkTD = document.createElement('td');
                linkTD.innerHTML = "Click for info!";
                linkTD.className = "expense-info";
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
                var uniqueID = records[i].id;
                divRow.setAttribute('data-expense-id', uniqueID);
                divRow.appendChild(linkTD);
                divRow.appendChild(timeDiv);
                divRow.appendChild(amountDiv);
                divRow.appendChild(locationDiv);
                divRow.appendChild(categoryDiv);
                pastTransactions.appendChild(divRow);
            }
        }
        $('.expense-info').on('click', '', function() {
            var uniqueRowID = this.parentNode.getAttribute('data-expense-id');
            console.log(uniqueRowID);
            for(var k=0; k<localStore.length; k++){
                if(localStore[k].id === uniqueRowID){
                    var converted = moment(localStore[k].fields["Transaction Date"]);
                    var readable = converted._d;
                    vex.dialog.alert({
                        message: '<ul><li>Amount: </li><ul><li class=\'currency\'>'+localStore[k].fields.Amount+'</li></ul><li>Location: </li><ul><li>'+localStore[k].fields.Location+'</li></ul><li>Time: </li><ul><li>'+readable+'</li></ul><li>Notes: </li><ul><li>'+localStore[k].fields.Notes+'</li></ul></ul>'
                    });
                }
            }
        });
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
            var amt = amount.value, locv = loc.value, type = category.value, note = notes.value;
            var data = {
                "Amount": parseFloat(amt),
                "Location": locv,
                "Category": type,
                "Notes": note,
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
                localStore.push(response);
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
                var linkTD = document.createElement('td');
                linkTD.innerHTML = "Click for more info!";
                linkTD.className = "expense-info";
                amountDiv.innerHTML = amt;
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
                    for(var k=0; k<localStore.length; k++){
                        if(localStore[k].id === uniqueRowID){
                            var converted = moment(localStore[k].fields["Transaction Date"]);
                            var readable = converted._d;
                            vex.dialog.alert({
                                message: '<ul><li>Amount: </li><ul><li class=\'currency\'>'+localStore[k].fields.Amount+'</li></ul><li>Location: </li><ul><li>'+localStore[k].fields.Location+'</li></ul><li>Time: </li><ul><li>'+readable+'</li></ul><li>Notes: </li><ul><li>'+localStore[k].fields.Notes+'</li></ul></ul>'
                            });
                        }
                    }
                });

            });
            //now we want to push this to the server

        } else {
            alert("Make sure you fill in all the fields!");
        }

    };




});
