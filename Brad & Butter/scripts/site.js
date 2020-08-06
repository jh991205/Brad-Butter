// When the document is ready
$(document).ready(function() {

  // When the Recipes nav item is clicked toggle dropdown.
  // https://api.jquery.com/visible-selector/ -> jQuery :visible selector
  // https://api.jquery.com/text/ -> jQuery .text() method
  $("#recipesNavItem").on("click", function () {
    // Dropdown menu items shown
    if($("#recipesDropdown").is(":visible")) {
      $("#recipesDropdown").addClass("hidden");
      $("#upCaret").addClass("hidden");
      $("#downCaret").removeClass("hidden");
    }
    // Dropdown menu items not currently shown
    else {
      $("#recipesDropdown").removeClass("hidden");
      $("#upCaret").removeClass("hidden");
      $("#downCaret").addClass("hidden");
    }
  });

  // Comments form
  $("#commentsForm").on("submit", function() {

    var valid = true;

    // Comments
    var commentLength = $("#comments").val().length;
    if($("#comments").prop("validity").valid && (commentLength > 0) && (commentLength < 500)) {
      $("#commentsError").addClass("hidden");
    }
    else if(commentLength == 0) {
      $("#submitError").removeClass("hidden");
      $("#commentsError").addClass("hidden");
      valid = false;
    }
    else {
      $("#commentsError").removeClass("hidden");
      $("#submitError").addClass("hidden");
      valid = false;
    }

    // Submit

    return valid;

  });

});

// source:https://www.w3schools.com/howto/howto_js_slideshow.asp?fbclid=IwAR31HuTlKyi9FCyA_HDZ2UDeqtKhC8u_i4mFLsPn_jLDwqWNVBGM4ntOQxQ
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
