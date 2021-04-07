const quote = document.getElementById('quote-container');
const author = document.getElementById('author-container');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('newQuote');
const loader = document.getElementById('loader');
const mainContainer = document.getElementById('main-container');

let apiQuotes = [];

function newQuote() {
  const currentQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!currentQuote.author) {
    author.textContent = "Unknown";
  } else {
    author.textContent = currentQuote.author;
  };
  quote.textContent = currentQuote.text;
}

//Pulling the quotes from the API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
       try {
     const response = await fetch(apiUrl);
     apiQuotes = await response.json();
     newQuote();
     console.log(apiQuotes)
  } catch(error) {
      console.log("An error occurred");
        }
     }

  function tweetQuote() {
    const tweetTheQuote = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
    window.open(tweetTheQuote, '_blank');
  }

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

getQuotes();
