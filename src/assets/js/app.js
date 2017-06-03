
	$(document).foundation();

function tkObjectFit() {
	console.log('test object fit');
    $('img.objFit').each(function(){
        var imgSrc = $(this).attr('src');
        var fitType = 'cover';

        if($(this).data('fit-type')) {
            fitType = $(this).data('fit-type');
        }

        $(this).parent().css({ 'background' : 'transparent url("'+imgSrc+'") no-repeat center center/'+fitType, });
        $(this).remove(); });
}