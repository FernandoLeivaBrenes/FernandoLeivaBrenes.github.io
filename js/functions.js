/*-- NAV --*/
$(function () {

    $('[data-toggle="expandNav"]').on('click', function () {
        $('.expansibleNav-collapse').toggleClass('expandNav');
    })

    $('nav#navigationUnit ul li:not(#dropdownCursosList), nav#navigationUnit ul li#dropdownCursosList div a').on('click', function () {
        $('.expansibleNav-collapse').removeClass('expandNav');
    })
    
})
$('.dropdown-toggle').dropdown();
$('body').scrollspy({ target: '#navigationUnit' });
/*-- NAV --*/
$('#politicasPriv').prop('indeterminate', true);



