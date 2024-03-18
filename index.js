var acc = document.getElementsByClassName("frequently-asked-questions");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
       
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            this.querySelector(".image-plus").src = "images/icon-plus.svg";
        } else {
            panel.style.display = "block";
            this.querySelector(".image-plus").src = "images/icon-minus.svg";
        }
    }
)};

