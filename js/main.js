 
const toggleButton = document.querySelector(".nav-toggle-button");

toggleButton.addEventListener("click", function() {
    document.querySelector(".page-header").classList.toggle("nav-opened");
}, false)
