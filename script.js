const quote = document.getElementById('quote-container');
const author = document.getElementById('author-container');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('newQuote');
const loader = document.getElementById('loader');
const mainContainer = document.getElementById('main-container');

// Set the Variable that will be used to store the API Data
let apiQuotes = [];

function showLoadingSpinner() {
  loader.hidden = false;
  mainContainer.hidden = true;
}

function removeLoadingSpinner() {
   loader.hidden = true;
   mainContainer.hidden = false;
}

// Get Quote From API
function newQuote() {
  showLoadingSpinner();
  const currentQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!currentQuote.author) {
    author.textContent = "Unknown";
  } else {
    author.textContent = currentQuote.author;
  };
  quote.textContent = currentQuote.text;
  removeLoadingSpinner();
}

//Pulling the quotes from the API
async function getQuotes() {
  showLoadingSpinner();
    const apiUrl = 'https://type.fit/api/quotes';
       try {
     const response = await fetch(apiUrl);
     apiQuotes = await response.json();
     newQuote();
  } catch(error) {
      console.log("An error occurred");
        }
     }

    // Tweet the quote
  function tweetQuote() {
    const tweetTheQuote = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
    window.open(tweetTheQuote, '_blank');
  }

  // Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();