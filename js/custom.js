 (function(){
        $("#show-letter").on('click', function() {
                    showLetter();
                return false;
                });
        $('#hide-letter').on('click', function() {
                    hideLetter();
                    return false;
                })
        function showLetter(){
            $('.container').css({'display':'block'}).animate({'height' : '650px'},2000); 
                    $('.form-wrapper').animate({'bottom' : '0px'}, 2500);
        };
        function hideLetter() {
                    $('.form-wrapper').animate({'bottom' : '-500px'}, 1500);
                        $('.container').animate({'height' : '0'},2000);
        };
        $(".nav-gorizontal a").on("click", function(){
            $(".nav-gorizontal a").removeClass("active");
            $(this).addClass("active");
        });
    
}) ();