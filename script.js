const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

console.log(twitterBtn, newQuoteBtn);

let apiQuotes = [];
// Show New Quote
function newQuote() {
  //  Pick  a random quote from the api
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!quote.author) {
    quoteAuthor.textContent = "Unkown";
  } else {
    quoteAuthor.textContent = quote.author;
  }

  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
}

<<<<<<< HEAD
// Fetching the API 
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) { 
        // Catch Error Here

    }

=======
// Fetching the API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
>>>>>>> 041905cf3aaab41792a83a2e4a2dcf18d0b1b35d
}

// Event Listener
twitterBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.textContent);
});
newQuoteBtn.addEventListener("click", newQuote);

// On Load
getQuotes();
