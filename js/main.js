 
const toggleButton = document.querySelector(".nav-toggle-button");

toggleButton.addEventListener("click", function() {
    document.querySelector(".page-header").classList.toggle("nav-opened");
}, false)

const imagesButton = document.querySelector(".images-button");

imagesButton.addEventListener("click", function() {
    console.log('click')
    document.querySelector(".images").classList.remove("hidden");
    document.querySelector(".about-me").classList.add("hidden");
}, false)


const aboutMeButton = document.querySelector(".about-me-button");

aboutMeButton.addEventListener("click", function() {
    console.log('click')
    document.querySelector(".images").classList.add("hidden");
    document.querySelector(".about-me").classList.remove("hidden");
}, false)
