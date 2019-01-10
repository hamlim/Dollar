document.addEventListener('DOMContentLoaded', function() {
  //ok we want to get the button press
  $('#dollar-login-login_btn').click(function() {
    var usernameElem = document.getElementById('dollar-login-username'),
      passwordElem = document.getElementById('dollar-login-password'),
      remembermeElem = document.getElementById('dollar-login-remember')
    var username = usernameElem.value,
      password = passwordElem.value,
      remember = remembermeElem.value

    if (username === '' || password === '') {
      // the user clicked the button without any input in the fields
      notie.alert(
        3,
        'Please make sure to enter your username and password before clicking the login button!',
        7,
      )
    } else {
      //ok so the user put in something in both fields
      //now we want to get the DB of users
      var getSettings = {
        async: true,
        crossDomain: true,
        url: 'https://api.airtable.com/v0/applYClUOdBXhRzGf/Users',
        method: 'GET',
        headers: {
          authorization: 'Bearer keyIye3zskPSBMQ6Q',
        },
      }

      $.ajax(getSettings).done(function(response) {
        console.log(response)
        for (var i = 0; i < response.records.length; i++) {
          var user = response.records[i]
          if (user.fields.u_username === username && user.fields.u_password === password) {
            //the username is correct

            //ok this is the correct user
            if (remember) {
              var localUser = {
                username: user.fields.u_username,
                fullname: user.fields.u_fullname,
                email: user.fields.u_email,
                userID: user.fields.u_userID,
                save: true,
                tags: user.fields.u_tags,
                userKey: user.id,
                pass: user.fields.u_password,
              }
              var localUserString = JSON.stringify(localUser)
              localStorage.setItem('user', localUserString)
              window.location.href = './app.html'
            } else {
              var localUser = {
                username: user.fields.u_username,
                fullname: user.fields.u_fullname,
                email: user.fields.u_email,
                userID: user.fields.u_userID,
                save: false,
                tags: user.fields.u_tags,
                userKey: user.id,
                pass: user.fields.u_password,
              } //save will determine if we save the local storage or not
              var localUserString = JSON.stringify(localUser)
              localStorage.setItem('user', localUserString)
              window.location.href = './app.html'
            }
          } else {
            notie.alert(
              3,
              "That username and password don't seem to exist, you can make an account <a href='./signup.html'>Here</a>.",
              7,
            )
          }
        }
      })
    }
  })
})
