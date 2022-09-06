let message_number = 0;
let previous_message_number = 0;

function randomMessage(json, prev_message) {
  const NUM_QUOTES = 30;
  const quote_element = document.getElementById('random-quote');
  let message = "";

  if (!prev_message) {
    previous_message_number = message_number;
    message_number = Math.floor(Math.random() * NUM_QUOTES);
    message = json[String(message_number)];
  } else {
    message = json[String(previous_message_number)];
    message_number = previous_message_number;
  }


  quote_element.innerHTML = message;
}

window.onload = () => {

  fetch('https://abby.trevinsmall.com/dist/quotes.json')
    .then((response) => response.json())
    .then((json) => {
      randomMessage(json);

      document.getElementById('message-button').addEventListener('click', () => {
        randomMessage(json, false);
      });

      document.getElementById('prev-button').addEventListener('click', () => {
        randomMessage(json, true);
      });
    });
}