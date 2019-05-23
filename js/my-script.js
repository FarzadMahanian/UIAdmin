$(function() {
    $('.labeled-input input').focus(function () {
        $(this).parents('.labeled-input').addClass('focused');
    });

    $('.labeled-input input').blur(function () {
        var inputValue = $(this).val();
        if (inputValue == '') {
            $(this).parents('.labeled-input').removeClass('focused');
        }
    });

    $('#login-page #go-to-password').click(function () {
        $('#login-page #username-card').addClass('hide');
        $('#login-page #password-card').addClass('visible');
        return false;
    });
});
