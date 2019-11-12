(function ($) {
    'use strict';

    $(document).ready(function () {

        function adapt(res) {
            if (res === 'dt') { //Если ширина большая
                $('.navbar').removeClass('active');
                $(".row-2").insertBefore(".row-3");
                $(".overall-impression").insertBefore($(".fio"));
                $('.fio span').text('представьтесь, пожалуйста:');
                $('.phone-number label').text('Контактный телефон:');
            }
            if (res === 'mob') { //Если ширина мобильная
                $(".overall-impression").insertAfter(".fio");
                $(".row-2").insertBefore(".overall-impression");
                $('.fio span').text('представьтесь:');
                $('.phone-number label').text('Контактный телефон:');
            }
            if (res === 'ldt') {
                $(".row-2").insertBefore(".row-3");
                $(".overall-impression").insertBefore($(".fio"));
                $('.fio span').text('представьтесь, пожалуйста:');
                $('.phone-number label').text('телефон:');
            }
        }

        $('.navbar-toggle, .close-menu-button').click(function () {
            $('.navbar').toggleClass('active');
        });

        if ($('#mobile-indicator').is(':visible')) {
            adapt('mob');
        }
        if ($('#large-display-indicator').is(':visible')) {
            adapt('ldt');
        }

        $(window).resize(function () {
            if ($('#mobile-indicator').is(':visible')) {
                adapt('mob');
            } else {
                if ($('#large-display-indicator').is(':visible')) {
                    adapt('ldt');
                } else {
                    adapt('dt');
                }
            }
        });

        $("#feedback").submit(function (e) {
            if (!$('#phone-number').val().match(/[0-9 -()+]+$/)) {
                $(".warning").show();
                e.preventDefault();
            }
        });

    }); //end ready

}(jQuery));
