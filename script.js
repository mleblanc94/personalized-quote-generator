const quote = document.getElementById('quote-container');
const author = document.getElementById('author-container');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('newQuote');

let apiQuotes = [];

async function getQuotes() {
    const response = 'https://type.fit/api/quotes';
       try {
     const realResponse = await fetch(response);
     const apiQuotes = await realResponse.json();
     console.log(apiQuotes);
  } catch(error) {
      console.log("An error occurred")
        }
     }

getQuotes();
