/*-- NAV --*/
$(function () {
    'use strict'
    $('[data-toggle="expandNav"]').on('click', function () {
        $('.expansibleNav-collapse').toggleClass('expandNav');
    })

    $('[data-toggle="dropdown"]').on('click', function () {
        $('.dropdown-menu').toggleClass('dropdown');
    })

})

$('body').scrollspy({ target: '#navigationUnit' })


/*-- NAV --*/
