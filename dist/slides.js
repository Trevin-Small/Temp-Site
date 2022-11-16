const baseURL = "./assets/Pics for site/";
const numSlides = 25;
let slideIndex = 0;

function showSlides() {
  let slide = document.getElementById("image");
  slide.setAttribute("src", baseURL + slideIndex + "-min.jpg");
  slideIndex++;
  if (slideIndex > numSlides) {slideIndex = 0}
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}


showSlides();