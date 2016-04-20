$(function() {
    $('form#usercontact').on('submit', function (e) {
        e.preventDefault();
        var formData = JSON.stringify(
            {'mail': $(this).find('#mail').val()}
        );
        $.ajax({
            type: 'POST',
            url: 'http://contact-aomercado.rhcloud.com/contact',
            contentType: "application/json",
            dataType: 'json',
            data: formData,
            success: function(json) {
                $("#usercontact").toggle();
                $("#user-contact-response").toggle();
            },
        });
    });
    $('form#marketcontact').on('submit', function (e) {
        e.preventDefault();
        var formData = JSON.stringify({
          'name': $(this).find('#name').val(),
          'market': $(this).find('#market').val(),
          'mail': $(this).find('#mail').val(),
          'phone': $(this).find('#phone').val(),
          'message': $(this).find('#message').val(),
        });
        $.ajax({
            type: 'POST',
            url: 'http://contact-aomercado.rhcloud.com/market',
            contentType: "application/json",
            dataType: 'json',
            data: formData,
            success: function(json) {
              $("#marketcontact").toggle();
              $("#market-contact-response").toggle();
            },
        });
    });
});
