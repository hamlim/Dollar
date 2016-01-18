$(document).ready(function(){
    //dom is loaded
    if(localStorage.length = 0) {
        window.location.href = "./login.html";
    } else {
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
            otherElem = document.getElementById('other'),
            personalPCT = document.getElementById('personalPCT'),
            homePCT = document.getElementById('homePCT'),
            healthPCT = document.getElementById('healthPCT'),
            giftsPCT = document.getElementById('giftsPCT'),
            travelPCT = document.getElementById('travelPCT'),
            utilitiesPCT = document.getElementById('utilitiesPCT'),
            transportationPCT = document.getElementById('transportationPCT'),
            foodPCT = document.getElementById('foodPCT'),
            userExpenses = [],
            otherPCT = document.getElementById('otherPCT');
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
        var totalAMT = 0;
        //handle loading in all current transactions
        if(localStorage.getItem('userExpenses') != ""){
            var userExpenses = JSON.parse(localStorage.getItem('userExpenses'));
            for(var i=0; i<userExpenses.length; i++){
                var linkTD = document.createElement('td');
                linkTD.innerHTML = "Click for info!";
                linkTD.className = "expense-info";
                //render all transactions
                var divRow = document.createElement('tr');
                divRow.appendChild(linkTD);
                divRow.setAttribute('class', 'expense-row');
                var uniqueID = userExpenses[i].id;
                divRow.setAttribute('data-expense-id', uniqueID);
                var amountDiv = document.createElement('td');
                amountDiv.innerHTML = "$"+userExpenses[i].fields.d_amount;
                var locationDiv = document.createElement('td');
                locationDiv.innerHTML = userExpenses[i].fields.d_location;
                var timeDiv = document.createElement('td');
                //change time to date and hours
                var converted = moment(userExpenses[i].fields.d_time);
                var readable = converted.format("Do-MMM-YYYY");
                timeDiv.innerHTML = readable;
                var categoryDiv = document.createElement('td');
                categoryDiv.innerHTML = userExpenses[i].fields.d_category;
                divRow.appendChild(timeDiv);
                divRow.appendChild(amountDiv);
                divRow.appendChild(locationDiv);
                divRow.appendChild(categoryDiv);
                pastTransactions.appendChild(divRow);
                //analytics
                //totals
                totalAMT += userExpenses[i].fields.d_amount;
                if(userExpenses[i].fields.d_category === "Food"){
                    //increment food totals
                    var amtString = userExpenses[i].fields.d_amount;
                    var food = parseFloat(amtString).toFixed(2);
                    amounts.food += parseFloat(food);
                } else if(userExpenses[i].fields.d_category === "Utilities") {
                    var amtString = userExpenses[i].fields.d_amount;
                    var food = parseFloat(amtString).toFixed(2);
                    amounts.utilities += parseFloat(food);
                } else if(userExpenses[i].fields.d_category === "Personal") {
                    var amtString = userExpenses[i].fields.d_amount;
                    var food = parseFloat(amtString).toFixed(2);
                    amounts.personal += parseFloat(food);
                } else if(userExpenses[i].fields.d_category === "Home") {
                    var amtString = userExpenses[i].fields.d_amount;
                    var food = parseFloat(amtString).toFixed(2);
                    amounts.home += parseFloat(food);
                } else if(userExpenses[i].fields.d_category === "Health") {
                    var amtString = userExpenses[i].fields.d_amount;
                    var food = parseFloat(amtString).toFixed(2);
                    amounts.health += parseFloat(food);
                } else if(userExpenses[i].fields.d_category === "Gifts") {
                    var amtString = userExpenses[i].fields.d_amount;
                    var food = parseFloat(amtString).toFixed(2);
                    amounts.gifts += parseFloat(food);
                } else if(userExpenses[i].fields.d_category === "Travel") {
                    var amtString = userExpenses[i].fields.d_amount;
                    var food = parseFloat(amtString).toFixed(2);
                    amounts.travel += parseFloat(food);
                } else if(userExpenses[i].fields.d_category === "Transportation") {
                    var amtString = userExpenses[i].fields.d_amount;
                    var food = parseFloat(amtString).toFixed(2);
                    amounts.transportation += parseFloat(food);
                } else if(userExpenses[i].fields.d_category === "Other") {
                    var amtString = userExpenses[i].fields.d_amount;
                    var food = parseFloat(amtString).toFixed(2);
                    amounts.other += parseFloat(food);
                } else {
                    //error
                }

            };

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

            personalPCT.innerHTML = (amounts.personal/totalAMT).toFixed(2) + "%";
            homePCT.innerHTML = (amounts.home/totalAMT).toFixed(2) + "%";
            healthPCT.innerHTML = (amounts.health/totalAMT).toFixed(2) + "%";
            giftsPCT.innerHTML = (amounts.gifts/totalAMT).toFixed(2) + "%";
            travelPCT.innerHTML = (amounts.travel/totalAMT).toFixed(2) + "%";
            transportationPCT.innerHTML = (amounts.transportation/totalAMT).toFixed(2) + "%";
            utilitiesPCT.innerHTML = (amounts.utilities/totalAMT).toFixed(2) + "%";
            foodPCT.innerHTML = (amounts.food/totalAMT).toFixed(2) + "%";
            otherPCT.innerHTML = (amounts.other/totalAMT).toFixed(2) + "%";
        } else {
            //handle loading in all current transactions
            var getSettings = {
                "async": true,
                "crossDomain": true,
                "method": "GET",
                "url": "https://api.airtable.com/v0/applYClUOdBXhRzGf/Dollars?sortField=d_time&sortDirection=desc",
                "headers": {
                    "authorization": "Bearer keyIye3zskPSBMQ6Q"
                }
            };
            $.ajax(getSettings).done(function(resp){
                console.log("resp: ");
                console.log(resp);
                var records = resp.records;
                for(var n=0; n<records.length; n++){
                    if(records[n].fields.d_userIDFK === userID){
                        userExpenses.push(records[n]);
                    }
                }
                for(var i=0; i<userExpenses.length; i++){
                    var linkTD = document.createElement('td');
                    linkTD.innerHTML = "Click for info!";
                    linkTD.className = "expense-info";
                    //render all transactions
                    var divRow = document.createElement('tr');
                    divRow.appendChild(linkTD);
                    divRow.setAttribute('class', 'expense-row');
                    var uniqueID = userExpenses[i].id;
                    divRow.setAttribute('data-expense-id', uniqueID);
                    var amountDiv = document.createElement('td');
                    amountDiv.innerHTML = "$"+userExpenses[i].fields.d_amount;
                    var locationDiv = document.createElement('td');
                    locationDiv.innerHTML = userExpenses[i].fields.d_location;
                    var timeDiv = document.createElement('td');
                    //change time to date and hours
                    var converted = moment(userExpenses[i].fields.d_time);
                    var readable = converted.format("Do-MMM-YYYY");
                    timeDiv.innerHTML = readable;
                    var categoryDiv = document.createElement('td');
                    categoryDiv.innerHTML = userExpenses[i].fields.d_category;
                    divRow.appendChild(timeDiv);
                    divRow.appendChild(amountDiv);
                    divRow.appendChild(locationDiv);
                    divRow.appendChild(categoryDiv);
                    pastTransactions.appendChild(divRow);
                    //analytics
                    //totals
                    totalAMT += userExpenses[i].fields.d_amount;
                    if(userExpenses[i].fields.d_category === "Food"){
                        //increment food totals
                        var amtString = userExpenses[i].fields.d_amount;
                        var food = parseFloat(amtString).toFixed(2);
                        amounts.food += parseFloat(food);
                    } else if(userExpenses[i].fields.d_category === "Utilities") {
                        var amtString = userExpenses[i].fields.d_amount;
                        var food = parseFloat(amtString).toFixed(2);
                        amounts.utilities += parseFloat(food);
                    } else if(userExpenses[i].fields.d_category === "Personal") {
                        var amtString = userExpenses[i].fields.d_amount;
                        var food = parseFloat(amtString).toFixed(2);
                        amounts.personal += parseFloat(food);
                    } else if(userExpenses[i].fields.d_category === "Home") {
                        var amtString = userExpenses[i].fields.d_amount;
                        var food = parseFloat(amtString).toFixed(2);
                        amounts.home += parseFloat(food);
                    } else if(userExpenses[i].fields.d_category === "Health") {
                        var amtString = userExpenses[i].fields.d_amount;
                        var food = parseFloat(amtString).toFixed(2);
                        amounts.health += parseFloat(food);
                    } else if(userExpenses[i].fields.d_category === "Gifts") {
                        var amtString = userExpenses[i].fields.d_amount;
                        var food = parseFloat(amtString).toFixed(2);
                        amounts.gifts += parseFloat(food);
                    } else if(userExpenses[i].fields.d_category === "Travel") {
                        var amtString = userExpenses[i].fields.d_amount;
                        var food = parseFloat(amtString).toFixed(2);
                        amounts.travel += parseFloat(food);
                    } else if(userExpenses[i].fields.d_category === "Transportation") {
                        var amtString = userExpenses[i].fields.d_amount;
                        var food = parseFloat(amtString).toFixed(2);
                        amounts.transportation += parseFloat(food);
                    } else if(userExpenses[i].fields.d_category === "Other") {
                        var amtString = userExpenses[i].fields.d_amount;
                        var food = parseFloat(amtString).toFixed(2);
                        amounts.other += parseFloat(food);
                    } else {
                        //error
                    }

                };

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
                var calcs = {
                    "personal": (amounts.personal/totalAMT)*100,
                    "home": (amounts.home/totalAMT)*100,
                    "health": (amounts.health/totalAMT)*100,
                    "gifts": (amounts.health/totalAMT)*100,
                    "travel": (amounts.health/totalAMT)*100,
                    "transportation": (amounts.health/totalAMT)*100,
                    "utilities": (amounts.health/totalAMT)*100,
                    "food": (amounts.health/totalAMT)*100,
                    "other": (amounts.health/totalAMT)*100,
                }
                console.log(calcs);
                personalPCT.innerHTML = calcs.personal.toFixed(2) + "%";
                homePCT.innerHTML = calcs.home.toFixed(2) + "%";
                healthPCT.innerHTML = calcs.health.toFixed(2) + "%";
                giftsPCT.innerHTML = calcs.gifts.toFixed(2) + "%";
                travelPCT.innerHTML = calcs.travel.toFixed(2) + "%";
                transportationPCT.innerHTML = calcs.transportation.toFixed(2) + "%";
                utilitiesPCT.innerHTML = calcs.utilities.toFixed(2) + "%";
                foodPCT.innerHTML = calcs.food.toFixed(2) + "%";
                otherPCT.innerHTML = calcs.other.toFixed(2) + "%";
            });
        }
    }
})
