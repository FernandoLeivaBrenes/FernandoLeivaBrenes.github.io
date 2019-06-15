/*-- NAV --*/
$(function () {
    'use strict'
    $('[data-toggle="expandNav"]').on('click', function () {
        $('.expansibleNav-collapse').toggleClass('expandNav');
    })
})

$('body').scrollspy({ target: '#navigationUnit' })
/*-- NAV --*/
