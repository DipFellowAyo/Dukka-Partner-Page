let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex ++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6000);
}

(function ($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = "EMAIL";
    ftypes[0] = "email";
    fnames[6] = "MMERGE6";
    ftypes[6] = "text";
    fnames[3] = "MMERGE3";
    ftypes[3] = "phone";
    fnames[1] = "MMERGE1";
    ftypes[1] = "dropdown";
    fnames[2] = "MMERGE2";
    ftypes[2] = "dropdown";
    fnames[5] = "MMERGE5";
    ftypes[5] = "dropdown";
    fnames[4] = "MMERGE4";
    ftypes[4] = "text";
    fnames[7] = "MMERGE7";
    ftypes[7] = "dropdown";
    fnames[8] = "MMERGE8";
    ftypes[8] = "dropdown";
    fnames[9] = "MMERGE9";
    ftypes[9] = "text";
})(jQuery);
var $mcj = jQuery.noConflict(true);