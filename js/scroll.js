 (function(){
        $("#show-letter").on('click', function() {
                    showLetter()
                return false;
                });
        $('#hide-letter').on('click', function() {
                    hideLetter();
                    return false;
                })
        function showLetter(){
            $('.container').css({'display':'block'}).animate({'height' : '650px'},2000); 
                    $('.form-wrapper').animate({'bottom' : '0px'}, 3000);
        };
        function hideLetter() {
                    $('.form-wrapper').animate({'bottom' : '-480px'}, 1500, function(){
                        $('.container').animate({'height' : '0'},2000);    
                    });
                     
        };
    
}) ();