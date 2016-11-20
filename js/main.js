/* ================================= 
Search Filter
==================================== */

(function() {
    document.onkeyup = function() {
        var search = document.getElementById('search').value;

        // Put all images in a var
        var images = document.getElementsByClassName('grid')[0].getElementsByTagName('img');
        
        // Check all images for match
        for (var i = 0; i < images.length; i++) {
            var alt = images[i].alt;

            // console.log('Does ' + search + ' match ' + alt + ' for this image?' + ' ' + (search == alt));
            // console.log('Does ' + alt + ' contain ' + search + ' for this image?' + ' ' + (alt.toLowerCase().indexOf(search.toLowerCase()) > -1));
            if (alt.toLowerCase().indexOf(search.toLowerCase()) === -1) {
                images[i].style.display = 'none';
                
            } else {
                images[i].style.display = 'block';
            }
        }
    };
})();

/* ================================= 
Lightbox
==================================== */

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
var $buttonPrevious = $('<div id="previous-button"></div>');
var $buttonNext = $('<div id="next-button"></div>');
var $closeLightbox = $("<div id='closeLightbox'></div>");

$overlay.append($image); //add image to overlay
$overlay.append($caption); //add caption to overlay
$overlay.append($buttonPrevious); //add next button to overlay
$overlay.append($closeLightbox);
$overlay.append($buttonNext); //add next button to overlay

$('body').append($overlay); //add overlay

// Capture click event on a image
$('.grid a').click(function(event) {
    event.preventDefault();

    getCurrentImage(this);

    // Show the overlay
    $overlay.fadeIn(400);

});

// Get images
function getCurrentImage(currentImage) {
    thisImage = currentImage;
    var imageLocation = $(currentImage).attr('href');
    // Update overlay with the image linked in the linked
    $image.attr('src', imageLocation);

    // Get alt text from image
    var captionText = $(currentImage).children('img').attr("alt");
    $caption.text(captionText);
}

function getPrevImage() {
    imageParent = $(thisImage).parent().prev();
    if (imageParent.length !== 0) {
        thisImage = $(imageParent).children("a");
    }
    getCurrentImage(thisImage);
}

function getNextImage() {
    imageParent = $(thisImage).parent().next();
    if (imageParent.lengt !== 0) {
        thisImage = $(imageParent).children('a');
    }
    getCurrentImage(thisImage);
}

// Close overlay
$closeLightbox.click(function() {
    $($overlay).fadeOut(400);
});

/* ================================= 
Navigation
==================================== */

// Lightbox arrow navigation
$('body').keyup(function(e) {
    if (e.keyCode == 39) {
        getNextImage();
    } else if (e.keyCode == 37) {
        getPrevImage();
    } else {
        return;
    }
});

// Lightbox click navigation
$buttonNext.click(function() {
    getNextImage();
});

$buttonPrevious.click(function() {
    getPrevImage();
});
