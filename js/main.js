//REMOVE PLACEHOLDER
$('input').focus(function() {
    $(this).removeAttr('placeholder'); 
});


//CALL LIGHTBOX
var $overlay = $('<div id="overlay"></div>');

//add overlay
$('body').append($overlay);

//capture click event on a image
$('.grid a').click(function(event) {
    event.preventDefault();
    var href = $(this).attr('href');
    $overlay.show();
});
