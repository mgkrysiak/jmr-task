$(document).ready(function() {

  $('.entry').on('click', function() {
    $('.popup').css('visibility', 'visible');



  });


  var apiUrl = 'https://recruitment-api.pyt1.stg.jmr.pl/login'

  var user = {
    login: 'correct_login@example.com',
    password: 'C0rr3Ct_P@55w0rd'
  }


  $('.log').on('click', function() {

    $.ajax({
        method: 'post',
        url: apiUrl,
        data: JSON.stringify(user),
        headers: {
          'Content-Type': "application/json",
        },
        dataType: 'json',

      })
      .done(function(res) {
        alert(`${res.status} ${res.message}`);
      })
      .fail(function() {
        alert('Error')
      });
  });
});
