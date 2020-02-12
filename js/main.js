 
const toggleButton = document.querySelector(".nav-toggle-button");

toggleButton.addEventListener("click", function() {
    const isOpen = document.querySelector(".page-header").classList.contains("nav-opened");
    
    if (isOpen) {
        document.querySelector(".page-header").classList.remove("nav-opened");
        document.querySelector(".main").classList.remove("hidden");
        document.querySelector(".page-footer").classList.remove("hidden");
    } else {
        document.querySelector(".page-header").classList.add("nav-opened");
        document.querySelector(".main").classList.add("hidden");
        document.querySelector(".page-footer").classList.add("hidden");
    }


}, false)



const imagesButton = document.querySelector(".images-button");

imagesButton.addEventListener("click", function() {
    console.log('click')
    document.querySelector(".images").classList.remove("hidden");
    document.querySelector(".about-me").classList.add("hidden");

    document.querySelector(".page-header").classList.remove("nav-opened");
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".page-footer").classList.remove("hidden");

    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}, false)



const aboutMeButton = document.querySelector(".about-me-button");

aboutMeButton.addEventListener("click", function() {
    console.log('click')
    document.querySelector(".images").classList.add("hidden");
    document.querySelector(".about-me").classList.remove("hidden");

    document.querySelector(".page-header").classList.remove("nav-opened");
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".page-footer").classList.remove("hidden");
    
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}, false)
