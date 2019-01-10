document.addEventListener('DOMContentLoaded', function() {
  //dom is loaded
  console.log('*--------------------------------------------*')
  console.log('Begin analysis.js')
  console.log('*--------------------------------------------*')
  if (localStorage.length === 0) {
    window.location.href = './login.html'
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
      otherPCT = document.getElementById('otherPCT')
    var amounts = {
      food: 0,
      other: 0,
      personal: 0,
      travel: 0,
      transportation: 0,
      utilities: 0,
      gifts: 0,
      health: 0,
      home: 0,
    }
    var totalAMT = 0
    //handle loading in all current transactions
    if (localStorage.getItem('userExpenses') != '') {
      console.log('localStorage')
      var userExpenses = JSON.parse(localStorage.getItem('userExpenses'))
      for (var i = 0; i < userExpenses.length; i++) {
        var linkTD = document.createElement('td')
        var tagTD = document.createElement('td') //TAGS
        tagTD.innerHTML = userExpenses[i].fields.d_tag //TAGS
        linkTD.innerHTML = 'Info!'
        linkTD.className = 'expense-info'
        //render all transactions
        var divRow = document.createElement('tr')
        divRow.appendChild(linkTD)
        divRow.setAttribute('class', 'expense-row')
        var uniqueID = userExpenses[i].id
        divRow.setAttribute('data-expense-id', uniqueID)
        var amountDiv = document.createElement('td')
        if (userExpenses[i].fields.d_amount.toString().search(/\./) != -1) {
          amountDiv.innerHTML = '$' + userExpenses[i].fields.d_amount.toString()
        } else {
          if (userExpenses[i].fields.d_amount.toString().split('.').length === 2) {
            amountDiv.innerHTML = '$' + userExpenses[i].fields.d_amount.toString() + '.0'
          } else {
            amountDiv.innerHTML = '$' + userExpenses[i].fields.d_amount.toString() + '.00'
          }
        }
        // amountDiv.innerHTML = "$"+userExpenses[i].fields.d_amount;
        var locationDiv = document.createElement('td')
        locationDiv.innerHTML = userExpenses[i].fields.d_location
        var timeDiv = document.createElement('td')
        //change time to date and hours
        var converted = moment(userExpenses[i].fields.d_time)
        var readable = converted.format('Do-MMM-YYYY')
        timeDiv.innerHTML = readable
        var categoryDiv = document.createElement('td')
        categoryDiv.innerHTML = userExpenses[i].fields.d_category
        divRow.appendChild(timeDiv)
        divRow.appendChild(amountDiv)
        divRow.appendChild(locationDiv)
        divRow.appendChild(categoryDiv)
        divRow.appendChild(tagTD) //TAGS
        pastTransactions.appendChild(divRow)
        //analytics
        //totals
        totalAMT += userExpenses[i].fields.d_amount
        if (userExpenses[i].fields.d_category === 'Food') {
          //increment food totals
          var amtString = userExpenses[i].fields.d_amount
          var food = parseFloat(amtString).toFixed(2)
          amounts.food += parseFloat(food)
        } else if (userExpenses[i].fields.d_category === 'Utilities') {
          var amtString = userExpenses[i].fields.d_amount
          var food = parseFloat(amtString).toFixed(2)
          amounts.utilities += parseFloat(food)
        } else if (userExpenses[i].fields.d_category === 'Personal') {
          var amtString = userExpenses[i].fields.d_amount
          var food = parseFloat(amtString).toFixed(2)
          amounts.personal += parseFloat(food)
        } else if (userExpenses[i].fields.d_category === 'Home') {
          var amtString = userExpenses[i].fields.d_amount
          var food = parseFloat(amtString).toFixed(2)
          amounts.home += parseFloat(food)
        } else if (userExpenses[i].fields.d_category === 'Health') {
          var amtString = userExpenses[i].fields.d_amount
          var food = parseFloat(amtString).toFixed(2)
          amounts.health += parseFloat(food)
        } else if (userExpenses[i].fields.d_category === 'Gifts') {
          var amtString = userExpenses[i].fields.d_amount
          var food = parseFloat(amtString).toFixed(2)
          amounts.gifts += parseFloat(food)
        } else if (userExpenses[i].fields.d_category === 'Travel') {
          var amtString = userExpenses[i].fields.d_amount
          var food = parseFloat(amtString).toFixed(2)
          amounts.travel += parseFloat(food)
        } else if (userExpenses[i].fields.d_category === 'Transportation') {
          var amtString = userExpenses[i].fields.d_amount
          var food = parseFloat(amtString).toFixed(2)
          amounts.transportation += parseFloat(food)
        } else if (userExpenses[i].fields.d_category === 'Other') {
          var amtString = userExpenses[i].fields.d_amount
          var food = parseFloat(amtString).toFixed(2)
          amounts.other += parseFloat(food)
        } else {
          //error
        }
      }

      $('.expense-info').on('click', '', function() {
        var uniqueRowID = this.parentNode.getAttribute('data-expense-id')
        console.log(uniqueRowID)
        for (var k = 0; k < userExpenses.length; k++) {
          if (userExpenses[k].id === uniqueRowID) {
            var converted = moment(userExpenses[k].fields.d_time)
            var readable = converted._d
            vex.dialog.alert({
              message:
                "<ul><li>Amount: </li><ul><li class='currency'>$" +
                userExpenses[k].fields.d_amount +
                '</li></ul><li>Tag: </li><ul><li>' +
                userExpenses[k].fields.d_tag +
                '</ul><li>Location: </li><ul><li>' +
                userExpenses[k].fields.d_location +
                '</li></ul><li>Time: </li><ul><li>' +
                readable +
                '</li></ul><li>Notes: </li><!--<ul><li>--><div class="code">' +
                marked(userExpenses[k].fields.d_notes) +
                '</div><!--</li></ul>--></ul>',
            })
          }
        }
      })

      //now we want to render all of amounts
      console.log('Amounts: ')
      console.log(amounts)
      personalElem.innerHTML = '$' + amounts.personal.toFixed(2)
      homeElem.innerHTML = '$' + amounts.home.toFixed(2)
      healthElem.innerHTML = '$' + amounts.health.toFixed(2)
      giftsElem.innerHTML = '$' + amounts.gifts.toFixed(2)
      travelElem.innerHTML = '$' + amounts.travel.toFixed(2)
      transportationElem.innerHTML = '$' + amounts.transportation.toFixed(2)
      utilitiesElem.innerHTML = '$' + amounts.utilities.toFixed(2)
      foodElem.innerHTML = '$' + amounts.food.toFixed(2)
      otherElem.innerHTML = '$' + amounts.other.toFixed(2)

      var calcs = {
        personal: (amounts.personal / totalAMT) * 100,
        home: (amounts.home / totalAMT) * 100,
        health: (amounts.health / totalAMT) * 100,
        gifts: (amounts.gifts / totalAMT) * 100,
        travel: (amounts.travel / totalAMT) * 100,
        transportation: (amounts.transportation / totalAMT) * 100,
        utilities: (amounts.utilities / totalAMT) * 100,
        food: (amounts.food / totalAMT) * 100,
        other: (amounts.other / totalAMT) * 100,
      }
      console.log(calcs)
      personalPCT.innerHTML = calcs.personal.toFixed(2) + '%'
      homePCT.innerHTML = calcs.home.toFixed(2) + '%'
      healthPCT.innerHTML = calcs.health.toFixed(2) + '%'
      giftsPCT.innerHTML = calcs.gifts.toFixed(2) + '%'
      travelPCT.innerHTML = calcs.travel.toFixed(2) + '%'
      transportationPCT.innerHTML = calcs.transportation.toFixed(2) + '%'
      utilitiesPCT.innerHTML = calcs.utilities.toFixed(2) + '%'
      foodPCT.innerHTML = calcs.food.toFixed(2) + '%'
      otherPCT.innerHTML = calcs.other.toFixed(2) + '%'

      // Charts
      //Pie Chart Money
      var ctx = document.getElementById('pieMoneyChart').getContext('2d')
      var data = [
        {
          value: amounts.personal,
          color: '#F7464A',
          highlight: '#FF5A5E',
          label: 'Personal',
        },
        {
          value: amounts.home,
          color: '#46BFBD',
          highlight: '#5AD3D1',
          label: 'Home',
        },
        {
          value: amounts.health,
          color: '#FDB45C',
          highlight: '#FFC870',
          label: 'Health',
        },
        {
          value: amounts.gifts,
          color: '#79A8A9',
          highlight: '#AACFD0',
          label: 'Gifts',
        },
        {
          value: amounts.travel,
          color: '#C768FF',
          highlight: '#FFADED',
          label: 'Travel',
        },
        {
          value: amounts.transportation,
          color: '#3A4750',
          highlight: '#303841',
          label: 'Transportation',
        },
        {
          value: amounts.utilities,
          color: '#FF9999',
          highlight: '#FFC8C8',
          label: 'Utilities',
        },
        {
          value: amounts.food,
          color: '#444036',
          highlight: '#686354',
          label: 'Food',
        },
        {
          value: amounts.other,
          color: '#3B5F41',
          highlight: '#66A96B',
          label: 'Other',
        },
      ]

      var myDoughnutChart = new Chart(ctx).Doughnut(data, {
        animateRotate: true,
      })
    } else {
      console.log('No localStorage')
      //handle loading in all current transactions
      var getSettings = {
        async: true,
        crossDomain: true,
        method: 'GET',
        url:
          'https://api.airtable.com/v0/applYClUOdBXhRzGf/Dollars?sortField=d_time&sortDirection=desc',
        headers: {
          authorization: 'Bearer keyIye3zskPSBMQ6Q',
        },
      }
      $.ajax(getSettings).done(function(resp) {
        console.log('resp: ')
        console.log(resp)
        var records = resp.records
        for (var n = 0; n < records.length; n++) {
          if (records[n].fields.d_userIDFK === userID) {
            userExpenses.push(records[n])
          }
        }
        for (var i = 0; i < userExpenses.length; i++) {
          var linkTD = document.createElement('td')
          linkTD.innerHTML = 'Info!'
          linkTD.className = 'expense-info'
          var tagTD = document.createElement('td')
          //render all transactions
          var divRow = document.createElement('tr')
          divRow.appendChild(linkTD)
          divRow.setAttribute('class', 'expense-row')
          var uniqueID = userExpenses[i].id
          divRow.setAttribute('data-expense-id', uniqueID)
          var amountDiv = document.createElement('td')
          if (userExpenses[i].fields.d_amount.toString().search(/\./) != -1) {
            amountDiv.innerHTML = '$' + userExpenses[i].fields.d_amount.toString()
          } else {
            if (userExpenses[i].fields.d_amount.toString().split('.').length === 2) {
              amountDiv.innerHTML = '$' + userExpenses[i].fields.d_amount.toString() + '.0'
            } else {
              amountDiv.innerHTML = '$' + userExpenses[i].fields.d_amount.toString() + '.00'
            }
          }
          var locationDiv = document.createElement('td')
          locationDiv.innerHTML = userExpenses[i].fields.d_location
          var timeDiv = document.createElement('td')
          //change time to date and hours
          var converted = moment(userExpenses[i].fields.d_time)
          var readable = converted.format('Do-MMM-YYYY')
          timeDiv.innerHTML = readable
          var categoryDiv = document.createElement('td')
          categoryDiv.innerHTML = userExpenses[i].fields.d_category
          tagTD.innerHTML = userExpenses[i].fields.d_tag
          divRow.appendChild(timeDiv)
          divRow.appendChild(amountDiv)
          divRow.appendChild(locationDiv)
          divRow.appendChild(categoryDiv)
          divRow.appendChild(tagTD)
          pastTransactions.appendChild(divRow)
          //analytics
          //totals
          totalAMT += userExpenses[i].fields.d_amount
          if (userExpenses[i].fields.d_category === 'Food') {
            //increment food totals
            var amtString = userExpenses[i].fields.d_amount
            var food = parseFloat(amtString).toFixed(2)
            amounts.food += parseFloat(food)
          } else if (userExpenses[i].fields.d_category === 'Utilities') {
            var amtString = userExpenses[i].fields.d_amount
            var food = parseFloat(amtString).toFixed(2)
            amounts.utilities += parseFloat(food)
          } else if (userExpenses[i].fields.d_category === 'Personal') {
            var amtString = userExpenses[i].fields.d_amount
            var food = parseFloat(amtString).toFixed(2)
            amounts.personal += parseFloat(food)
          } else if (userExpenses[i].fields.d_category === 'Home') {
            var amtString = userExpenses[i].fields.d_amount
            var food = parseFloat(amtString).toFixed(2)
            amounts.home += parseFloat(food)
          } else if (userExpenses[i].fields.d_category === 'Health') {
            var amtString = userExpenses[i].fields.d_amount
            var food = parseFloat(amtString).toFixed(2)
            amounts.health += parseFloat(food)
          } else if (userExpenses[i].fields.d_category === 'Gifts') {
            var amtString = userExpenses[i].fields.d_amount
            var food = parseFloat(amtString).toFixed(2)
            amounts.gifts += parseFloat(food)
          } else if (userExpenses[i].fields.d_category === 'Travel') {
            var amtString = userExpenses[i].fields.d_amount
            var food = parseFloat(amtString).toFixed(2)
            amounts.travel += parseFloat(food)
          } else if (userExpenses[i].fields.d_category === 'Transportation') {
            var amtString = userExpenses[i].fields.d_amount
            var food = parseFloat(amtString).toFixed(2)
            amounts.transportation += parseFloat(food)
          } else if (userExpenses[i].fields.d_category === 'Other') {
            var amtString = userExpenses[i].fields.d_amount
            var food = parseFloat(amtString).toFixed(2)
            amounts.other += parseFloat(food)
          } else {
            //error
          }
        }

        $('.expense-info').on('click', '', function() {
          var uniqueRowID = this.parentNode.getAttribute('data-expense-id')
          console.log(uniqueRowID)
          for (var k = 0; k < userExpenses.length; k++) {
            if (userExpenses[k].id === uniqueRowID) {
              var converted = moment(userExpenses[k].fields.d_time)
              var readable = converted._d
              vex.dialog.alert({
                message:
                  "<ul><li>Amount: </li><ul><li class='currency'>$" +
                  userExpenses[k].fields.d_amount +
                  '</li></ul><li>Tag: </li><ul><li>' +
                  userExpenses[k].fields.d_tag +
                  '</ul><li>Location: </li><ul><li>' +
                  userExpenses[k].fields.d_location +
                  '</li></ul><li>Time: </li><ul><li>' +
                  readable +
                  '</li></ul><li>Notes: </li><!--<ul><li>--><div class="code">' +
                  marked(userExpenses[k].fields.d_notes) +
                  '</div><!--</li></ul>--></ul>',
              })
            }
          }
        })

        //now we want to render all of amounts
        console.log('Amounts: ')
        console.log(amounts)
        personalElem.innerHTML = '$' + amounts.personal.toFixed(2)
        homeElem.innerHTML = '$' + amounts.home.toFixed(2)
        healthElem.innerHTML = '$' + amounts.health.toFixed(2)
        giftsElem.innerHTML = '$' + amounts.gifts.toFixed(2)
        travelElem.innerHTML = '$' + amounts.travel.toFixed(2)
        transportationElem.innerHTML = '$' + amounts.transportation.toFixed(2)
        utilitiesElem.innerHTML = '$' + amounts.utilities.toFixed(2)
        foodElem.innerHTML = '$' + amounts.food.toFixed(2)
        otherElem.innerHTML = '$' + amounts.other.toFixed(2)
        var calcs = {
          personal: (amounts.personal / totalAMT) * 100,
          home: (amounts.home / totalAMT) * 100,
          health: (amounts.health / totalAMT) * 100,
          gifts: (amounts.gifts / totalAMT) * 100,
          travel: (amounts.travel / totalAMT) * 100,
          transportation: (amounts.transportation / totalAMT) * 100,
          utilities: (amounts.utlities / totalAMT) * 100,
          food: (amounts.food / totalAMT) * 100,
          other: (amounts.other / totalAMT) * 100,
        }
        console.log(calcs)
        personalPCT.innerHTML = calcs.personal.toFixed(2) + '%'
        homePCT.innerHTML = calcs.home.toFixed(2) + '%'
        healthPCT.innerHTML = calcs.health.toFixed(2) + '%'
        giftsPCT.innerHTML = calcs.gifts.toFixed(2) + '%'
        travelPCT.innerHTML = calcs.travel.toFixed(2) + '%'
        transportationPCT.innerHTML = calcs.transportation.toFixed(2) + '%'
        utilitiesPCT.innerHTML = calcs.utilities.toFixed(2) + '%'
        foodPCT.innerHTML = calcs.food.toFixed(2) + '%'
        otherPCT.innerHTML = calcs.other.toFixed(2) + '%'
      })
    }
  }

  console.log('*--------------------------------------------*')
  console.log('End analysis.js')
  console.log('*--------------------------------------------*')
  console.log('- - - - - - - - - - - - - - - - - - - - - - - ')
})
