/*-- NAV --*/
$(function () {
    'use strict'
    $('[data-toggle="expandNav"]').on('click', function () {
        $('.expansibleNav-collapse').toggleClass('expandNav');
    })

    $('[data-toggle="dropdown"], .dropdown a').on('click', function () {
        $('.dropdown-menu').toggleClass('dropdown');
    })

    $('.navbar-collapse').on('click', function () {
        $('.dropdown-menu').removeClass('dropdown');
        $('.expansibleNav-collapse').toggleClass('expandNav');
    })

})

$('body').scrollspy({ target: '#navigationUnit' })


/*-- NAV --*/
