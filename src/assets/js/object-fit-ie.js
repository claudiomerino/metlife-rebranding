

    function tkObjectFit() {
        $('img.objFit').each( function(){
            var imgSrc = $(this).attr('src');
            var fitType = 'cover';

            if($(this).data('fit-type')) {
                fitType = $(this).data('fit-type');
            }

            $(this).parent().addClass('objFitFigure').css({ 'background' : 'transparent url("'+imgSrc+'") no-repeat center center/'+fitType, });
            $(this).remove();
        });
    }
