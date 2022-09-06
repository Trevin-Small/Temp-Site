function randomMessage(json) {
  const NUM_QUOTES = 30;
  const quote_element = document.getElementById('random-quote');
  let message = "";

  message = json[String(Math.floor(Math.random() * NUM_QUOTES))];

  quote_element.innerHTML = message;
}

window.onload = () => {

  fetch('https://abby.trevinsmall.com/dist/quotes.json')
    .then((response) => response.json())
    .then((json) => {
      randomMessage(json);

      document.getElementById('message-button').addEventListener('click', () => {
        randomMessage(json);
      });
    });
}