const NUM_QUOTES = 29;
let message_number = Math.floor(Math.random() * NUM_QUOTES);
let slideIndex = 0;

function randomMessage(json, prev_message) {
  const quote_element = document.getElementById('random-quote');
  let message = "";

  if (prev_message) {
    message_number--;
  } else {
    message_number++;
  }

  if (message_number > NUM_QUOTES - 1) {
    message_number = 0;
  } else if (message_number < 0) {
    message_number = NUM_QUOTES - 1;
  }

  message = json[String(message_number)];

  quote_element.innerHTML = message;
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

window.onload = () => {

  showSlides();

  fetch('https://abby.trevinsmall.com/dist/quotes.json')
    .then((response) => response.json())
    .then((json) => {
      randomMessage(json, false);

      document.getElementById('next-message').addEventListener('click', () => {
        randomMessage(json, false);
      });

      document.getElementById('prev-button').addEventListener('click', () => {
        randomMessage(json, true);
      });
    });
}
