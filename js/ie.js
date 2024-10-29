let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "img/badmin.jpg") {
    myImage.setAttribute("src", "img/navaer.png");
  } else {
    myImage.setAttribute("src", "img/badmin.jpg");
  }
};
$(document).ready(function(){
  // hide #toTop first
  $("#toTop").hide();

  // fade in #toTop
  $(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#toTop a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
  });
});