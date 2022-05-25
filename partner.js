var faq = document.getElementsByClassName("FAQ-header");

for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

const hamburger = document.getElementsByClassName("hamburger");
const nav_menu = document.getElementsByClassName("nav-menu");

