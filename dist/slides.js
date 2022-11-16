const baseURL = "./assets/Pics for site/";
let slideIndex = 0;

function showSlides() {
  let slide = document.getElementById("image");
  slide.setAttribute("src", baseURL + slideIndex + "-min.jpg");
  slideIndex++;
  if (slideIndex > slide.length) {slideIndex = 1}
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}


showSlides();