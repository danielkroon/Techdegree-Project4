//REMOVE PLACEHOLDER
$('input').focus(function() {
    $(this).removeAttr('placeholder'); 
});


//CALL LIGHTBOX
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
var $buttonPrevious = $('<div id="previous-button"></div>');
var $buttonNext = $('<div id="next-button"></div>');
var $closeLightbox = $("<div id='closeLightbox'></div>");



$overlay.append($image); //add image to overlay
$overlay.append($caption); //add caption to overlay
$overlay.append($buttonNext); //add next button to overlay
$overlay.append($buttonPrevious); //add next button to overlay
$overlay.append($closeLightbox);

$('body').append($overlay); //add overlay

//capture click event on a image
$('.grid a').click(function(event) {
    event.preventDefault();
    
    getCurrentImage(this);
    
    //Show the overlay
    $overlay.fadeIn(400);
    
});

$buttonNext.click(function(){
    getNextImage();
});

$buttonPrevious.click(function(){
    getPrevImage();
    
});

function getCurrentImage (currentImage) {
    thisImage = currentImage;
    var imageLocation = $(currentImage).attr('href');
    //Update overlay with the image linked in the linked
    $image.attr('src', imageLocation);
    
    //Get alt text from image
    var captionText = $(currentImage).attr('alt');
    $caption.text(captionText);
}

function getPrevImage() {
    imageParent = $(thisImage).parent().prev();
    if(imageParent.length!=0){
      thisImage = $(imageParent).children("a");
    }
    getCurrentImage(thisImage);
}

function getNextImage() {
    imageParent = $(thisImage).parent().next();
    if(imageParent.lengt!=0) {
        thisImage = $(imageParent).children('a');
    }
    getCurrentImage(thisImage);
}

//Close overlay
$closeLightbox.click(function() {
    $($overlay).fadeOut(400);
});
