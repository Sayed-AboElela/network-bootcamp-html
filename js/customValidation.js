jQuery(function () {
    jQuery("form#contact-form").validate({
        invalidHandler: function (event, validator) {
            // jQuery(validator.currentForm).css('margin-bottom', '30px');
            jQuery("form .pg-form-group").css('margin-bottom', '25px');
            console.log('asdasdasd');

        },
        rules: {

            name: {
                required: true,
            },
            phoneNumber: {
                required: true,
                number: true,
                minlength: 10
            },
            email: {
                required: true,
                email: true
            },
            appointment: {
                required: true,
            },
            typeCourse: {
                required: true,
            },
            education: {
                required: true,
            },
        },
    });

});


