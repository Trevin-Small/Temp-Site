window.onload = () => {
  const NUM_QUOTES = 30;
  const quote_element = document.getElementById('random-quote');

  let message = "";

  fetch('https://abby.trevinsmall.com/dist/quotes.json')
    .then((response) => response.json())
    .then((json) => {
      message = json[String(Math.floor(Math.random() * NUM_QUOTES))];
      //message = json["29"];

      quote_element.innerHTML = message;
    });
}