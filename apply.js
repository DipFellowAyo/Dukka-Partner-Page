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

function validate() {

    if(document.myForm.email.value == "") {
        alert( "Please provide your Email!" );
        document.myForm.email.focus() ;
        return (validateEmail);
    }

    if(document.myForm.firstname.value == "") {
        alert( "Please provide your first name!" );
        document.myForm.firstname.focus() ;
        return false;
    }

    if(document.myForm.lastname.value == "") {
        alert( "Please provide your last name!" );
        document.myForm.lastname.focus() ;
        return false;
    }

    if(document.myForm.phonenumber.value == "" || isNaN(document.myForm.phonenumber.value) || document.myForm.phonenumber.value.length != 11) {
        alert( "Please provide a phonenumber in the right format!" );
        document.myForm.phonenumber.focus() ;
        return false;
    }

    return true;
}

function validateEmail() {
    var emailID = document.myForm.email.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.myForm.email.focus() ;
            return false;
         }
         return( true );
}