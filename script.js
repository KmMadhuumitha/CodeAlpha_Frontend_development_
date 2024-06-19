const images = document.querySelectorAll(".gallery img");
let activeImageIndex = 0;

images[activeImageIndex].classList.add("active");

images.forEach((image, index) => {
    image.addEventListener("click", () => {
        images[activeImageIndex].classList.remove("active");
        activeImageIndex = index;
        images[activeImageIndex].classList.add("active");
    });
});