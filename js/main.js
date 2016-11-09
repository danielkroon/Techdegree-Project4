//REMOVE PLACEHOLDER
$('input').focus(function() {
    $(this).removeAttr('placeholder'); 
});


//CALL LIGHTBOX
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//add image to overlay
$overlay.append($image);

//add caption to overlay
$overlay.append($caption);

//add overlay
$('body').append($overlay);

//capture click event on a image
$('.grid a').click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr('href');
    //update overlay with image the image linked in the link
    $image.attr("src", imageLocation);
    $overlay.show();
    //get alt text from image
    var captionText = $(this).attr('alt');
    $caption.text(captionText);
});


$overlay.click(function() {
    $(this).hide();
});
