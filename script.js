const quote = document.getElementById('quote-container');
const author = document.getElementById('author-container');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('newQuote');

let apiQuotes = [];

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
       try {
     const response = await fetch(apiUrl);
     const apiQuotes = await response.json();
    //  newQuote();
     console.log(apiQuotes)
  } catch(error) {
      console.log("An error occurred")
        }
     }


     function newQuote() {
         const currentQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
         console.log(currentQuote)
         quote.textContent = currentQuote.text;
         author.textContent = currentQuote.author;
     }

getQuotes();


newQuoteBtn.addEventListener("click", newQuote);
