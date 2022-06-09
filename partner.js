let faq = document.getElementsByClassName("FAQ-header");

let answers = document.getElementsByClassName("FAQ-footer");

for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
        if (parseInt(answers[i].style.height) != answers[i].scrollHeight) {
            answers[i].style.height = answers[i].scrollHeight + "px";
            faq[i].classList.toggle("active");
        }
        else{
            answers[i].style.height= "0";
            faq[i].classList.remove("active");
        }
        for (let j = 0; j < answers.length; j++) {
            if (j !== i) {
                answers[j].style.height= "0";
                faq[j].classList.remove("active");
            }
        }
    });
}

