$('document').ready(function(){
    function top_email_checker()
    {
        var email = $('#top-email').val();

        if(email.length == 0)
        {
            $('#topReq').show();
            $('#topInv').show();
            $('#top-email').addClass('wrong-email');
            $('#top-email').removeClass('correct-email');
            $('#topSubmit').attr('disabled' , 'disabled');
        }
        else
        {    
            $('#topReq').hide();

            if(email.indexOf("@gmail.com") == -1)
            {
                $('#topInv').show();
                $('#top-email').addClass('wrong-email');
                $('#top-email').removeClass('correct-email');
                $('#topSubmit').attr('disabled', 'disabled');
            }
            else
            {
                $('#topInv').hide();
                $('#top-email').addClass('correct-email');
                $('#top-email').removeClass('wrong-email');
                $('#topSubmit').removeAttr('disabled');
            }
        }
    }

    function bottom_email_checker()
    {
        var email = $('#bottom-email').val();

        if(email.length == 0)
        {
            $('#bottomReq').show();
            $('#bottomInv').show();
            $('#bottom-email').addClass('wrong-email');
            $('#bottom-email').removeClass('correct-email');
            $('#bottomSubmit').attr('disabled' , 'disabled');
        }
        else
        {    
            $('#bottomReq').hide();

            if(email.indexOf("@gmail.com") == -1)
            {
                $('#bottomInv').show();
                $('#bottom-email').addClass('wrong-email');
                $('#bottom-email').removeClass('correct-email');
                $('#bottomSubmit').attr('disabled', 'disabled');
            }
            else
            {
                $('#bottomInv').hide();
                $('#bottom-email').addClass('correct-email');
                $('#bottom-email').removeClass('wrong-email');
                $('#bottomSubmit').removeAttr('disabled');
            }
        }
    }

    $('#topReq').hide();
    $('#topInv').hide();
    $('#bottomReq').hide();
    $('#bottomInv').hide();

    $('#top-email').keydown(top_email_checker);
    $('#top-email').keyup(top_email_checker);
    $('#top-email').focus(top_email_checker);

    $('#bottom-email').keydown(bottom_email_checker);
    $('#bottom-email').keyup(bottom_email_checker);
    $('#bottom-email').focus(bottom_email_checker);
});