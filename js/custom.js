 (function(){
     var $buttSend = $('.buttonSend');
     var $state
        $($buttSend).addClass('no-active').prop('disabled', true);

        $('.agree input[type = "checkbox"]').change(function() {
            $state = $(this).prop('checked');
            if($state) {
                $($buttSend).removeClass('no-active').prop('disabled', false);
            }
            else {
                $($buttSend).addClass('no-active').prop('disabled', true);
      }
  });
        
        $("#show-letter").on('click', function() {
                    showLetter();
                return false;
                });
        $('#hide-letter').on('click', function() {
                    hideLetter();
                    return false;
                })
        function showLetter(){
             if($(window).scrollTop() !== 0){
                           $('body, html').animate({'scrollTop': 0},400);; 
                        };
                    $('.container-wr').css({'display':'block'}).animate({'height' : '650px'},2000); 
                    $('.form-wrapper').css({'display':'block'}).animate({'bottom' : '0px'}, 2500);
        };
        function hideLetter() {
             if($(window).scrollTop() !== 0){
                           $('body, html').animate({'scrollTop': 0},400);; 
                        };
                        $('.form-wrapper').animate({'bottom' : '-500px'}, 1500);
                        $('.container-wr').animate({'height' : '0'},2000);
                       
        };
        $(".nav-gorizontal a").on("click", function(){
            $(".nav-gorizontal a").removeClass("active");
            $(this).addClass("active");
        });
    
}) ();