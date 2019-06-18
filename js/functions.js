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

    var codeSerial ;
    var dual ;
    function Captcha(cap) {
        var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
        var i;
        for (i = 0; i < 6; i++) {
            var a = alpha[Math.floor(Math.random() * alpha.length)];
            var b = alpha[Math.floor(Math.random() * alpha.length)];
            var c = alpha[Math.floor(Math.random() * alpha.length)];
            var d = alpha[Math.floor(Math.random() * alpha.length)];
            var e = alpha[Math.floor(Math.random() * alpha.length)];
            var f = alpha[Math.floor(Math.random() * alpha.length)];
            var g = alpha[Math.floor(Math.random() * alpha.length)];
            dual = Math.floor(Math.random() * 2)+1;
        }
        codeSerial = a+b+c+d+e+f+g;
        var code = 'Plataforma [<span>' + dual + '</span>]: ' + a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
        $(cap).empty();
        $(cap).append(code);
    }

    $('#capcha_recargar').on('click',function(){
        Captcha('#deposito');
    })

    function checkInputUno (){return $("#uno").val() == codeSerial ? true : false;}
    function checkInputDos (){return $("#dos").val() == codeSerial ? true : false;}
    
    function validaCapcha(){
        var nameDual;
        if ( dual == 1 ){nameDual="#uno";}
        if ( dual == 2 ){nameDual="#dos";}
        
        if( ($("#uno").val().length > 0 && $("#dos").val().length > 0) ){
            $('#capcha_validar').prop("disabled", "disabled");
            return false;
        }else if( (checkInputUno() && '#uno' == nameDual) || (checkInputDos() && '#dos' == nameDual)){
            if( $('#check_capcha').text() == "-"){
                $('#capcha_validar').prop("disabled", false);
            }
            return true;
        }else{
            $('#capcha_validar').prop("disabled", "disabled");
            return false;
        }
    }

    $('#capcha_validar').on('click',function(){
        if (validaCapcha()){
            $('#check_capcha').empty();
            $('#check_capcha').append("- <span class='fa fa-check-circle text-success'></span>");
            $('#capcha_validar').prop("disabled", "disabled");
            $('#capcha_recargar').prop("disabled", "disabled");
            $("#deposito").empty();
        }else{
            $('#check_capcha').empty();
            $('#check_capcha').append("- <span class='fa fa-close text-danger'></span>");
        }
    })



    var namePattern = "^[a-z A-Z]{4,30}$";
    var emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,5}$";

    function checkInput ( idNombre , namePattern ) {return $(idNombre).val().match(namePattern) ? true : false;}

    function checkInputSelect ( idProvincia ) {return $(idProvincia).val() ? true : false;}

    function checkInputPasswd ( passwd ) { return $(passwd).val().length > 0 ? true : false;}

    function checkInputSamePasswd ( idpass1, idpass2 ) {return $(idpass1).val()==$(idpass2).val() && checkInputPasswd(idpass1) ? true : false;}

    function checkInputPolitics ( politicasPriv ) {return $(politicasPriv).is(":checked") ? true : false;}

    function enableSubmit (idDivForm) {
        $(idDivForm+' button[type="submit"]').prop("disabled", false);
    }

    function disableSubmit (idDivForm) {
        $(idDivForm+' button[type="submit"]').prop("disabled", "disabled");
    }

    function checkFormReg (idForm, idDivForm) {
        $(idForm + " *").on("change keyup", function() {
            if (validaCapcha()&& 
            checkInput("#Nombre", namePattern) && 
            checkInput("#Apellidos", namePattern) && 
            checkInput("#email_register", emailPattern) && 
            checkInputSelect("#Provincia") && 
            checkInputPolitics("#politicasPriv")&&
            checkInputSamePasswd("#passwd_register",'#passwd_register_check')
            )
        {
            enableSubmit(idDivForm);
            } else {
                disableSubmit(idDivForm);
            }
        });
    }

    function checkFormIn (idForm, idDivForm) {
        $(idForm + " *").on("change keyup", function() {
            if (checkInput("#email_register", emailPattern) && 
            checkInputPasswd("#passwd_initsesion"))
        {
            enableSubmit(idDivForm);
            } else {
                disableSubmit(idDivForm);
            }
        });
    }

    checkFormReg('#formRegistro','#register');
    checkFormIn('#form_access','#initSesion');

    $("[data-toggle='modal']").on('click',function(){
        var instancia = $(this).attr("data-target");
        if( instancia != "#politicasPrivacidad" ){
            var formName = $(instancia+" form").attr("id");
            $("#"+formName+' button[type="submit"].btn').prop("disabled", "disabled");
            $("#"+formName)[0].reset();
            try {
                $("#"+formName+" #check_capcha").empty();
                $("#"+formName+" #check_capcha").append("-");
            } catch (error) {
                
            }
        }
    })

    $('#aceptarPolitics').on('click', function () {
        $('#politicasPriv').prop("checked", true );
        checkFormReg('#formRegistro','#register');
    })

})
