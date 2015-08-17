 (function(){
        var $letterElem  = $('.form-wrapper');
        var $containerHeight = $letterElem.outerHeight();
        console.log($containerHeight);
        var $topElem;
        changePos();
        $(window).scroll(function() {
            changePos();

            
        });
        function changePos(){
                            if($(window).scrollTop() <= $containerHeight && $(window).scrollTop() <= '240' && $(window).scrollTop() >= '0' ){
                $topElem  = $(window).scrollTop();
                $($letterElem).animate({'bottom': -$topElem}, 10);
                            };
        };
}) ();