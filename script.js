const quote = document.getElementById('quote-container');
const author = document.getElementById('author-container');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('newQuote');

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
    
  }

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

getQuotes();
