$(function() {
    $('form#contact').on('submit', function (e) {
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
                $(".form-section.bgcontato #contact").toggle();
                $(".form-section.bgcontato #invite-message").toggle();
                $(".form-section.bgcontato #contact-response").toggle();
            },
        });
    });
});
