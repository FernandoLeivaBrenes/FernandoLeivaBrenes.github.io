$(function () {
    $('.dropdown-toggle').dropdown();
    $('body').scrollspy({ target: '#navigationUnit' });
    //No funciona bien ocn el indeterminate primero
    //$('#politicasPriv').prop('indeterminate', true);

    $('[data-toggle="expandNav"]').on('click', function () {
        $('.expansibleNav-collapse').toggleClass('expandNav');
    })

    $('nav#navigationUnit ul li:not(#dropdownCursosList), nav#navigationUnit ul li#dropdownCursosList div a').on('click', function () {
        $('.expansibleNav-collapse').removeClass('expandNav');
    })

    var namePattern = "^[a-z A-Z]{4,30}$";
    var emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,5}$";

    function checkInput ( idNombre , namePattern ) {return $(idNombre).val().match(namePattern) ? true : false;}

    function checkInputSelect ( idProvincia ) {return $(idProvincia).val() ? true : false;}

    function checkInputPasswd ( passwd ) { return $(passwd).val().length > 0 ? true : false;}

    function checkInputSamePasswd ( idpass1, idpass2 ) {return $(idpass1).val()==$(idpass2).val() && checkInputPasswd(idpass1) ? true : false;}

    function checkInputPolitics ( politicasPriv ) {return $(politicasPriv).is(":checked") ? true : false;}

    function enableSubmit (formRegistro) {
        $("#"+$(formRegistro).parent().parent().parent().parent().attr("id")+' button[type="submit"]').prop("disabled", false);
    }

    function disableSubmit (formRegistro) {
        $("#"+$(formRegistro).parent().parent().parent().parent().attr("id")+' button[type="submit"]').prop("disabled", "disabled");
    }

    function checkFormReg (idForm) {
        $(idForm + " *").on("change keyup", function() {
            if (checkInput("#Nombre", namePattern) && 
            checkInput("#Apellidos", namePattern) && 
            checkInput("#email_register", emailPattern) && 
            checkInputSelect("#Provincia") &&  
            checkInputPolitics("#politicasPriv") &&
            checkInputSamePasswd("#passwd_register",'#passwd_register_check'))
        {
            enableSubmit(idForm);
            } else {
                disableSubmit(idForm);
            }
        });
    }

    function checkFormIn (idForm) {
        $(idForm + " *").on("change keyup", function() {
            if (checkInput("#email_register", emailPattern) && 
            checkInputPasswd("#passwd_initsesion"))
        {
            enableSubmit(idForm);
            } else {
                disableSubmit(idForm);
            }
        });
    }

    $('#aceptarPolitics').on('click', function () {
        $('#politicasPriv').prop("checked", true);
        checkFormReg('#formRegistro');
    })
    checkFormReg('#formRegistro');
    checkFormIn('#form_access');

    $("[data-toggle='modal']").on('click',function(){
        var instancia = $(this).attr("data-target");
        if( instancia != "#politicasPrivacidad" ){
            var formName = $(instancia+" form").attr("id");
            $("#"+formName)[0].reset();
        }
    })
})
