/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array: 
 *    - Arrary of objects storing quotes and corresponding data 
***/
let quotes = [
  {quote: "The journey of a thousand miles begins with one step.", source: "Lao Tzu", citation: "keepinspiring.me", year: "unknown" },
  {quote: "That which does not kill us makes us stronger", source: "Friedrich Nietzsche", citation: "keepinspiring.me", year: "1888" },
  {quote: "Life is what happens when you’re busy making other plans.", source: "John Lennon", citation: "keepinspiring.me", year: "1957" },
  {quote: "When the going gets tough, the tough get going.", source: "Joe Kennedy", citation: "keepinspiring.me", year: "" },
  {quote: "You must be the change you wish to see in the world.", source: "Mahatma Gandhi", citation: "keepinspiring.me", year: "" }
];

// console.log(quotes);
// console.log(quotes.length);

/***
 * `getRandomQuote` function: 
 *   - Creates random number based on the quotes array length
 *   - Returns the object based on index selected by random value
***/
let quoteObj;
function getRandomQuote() {
  let quoteIndex = Math.floor(Math.random() * quotes.length);
  let quoteSelectObject = quotes[quoteIndex];
  quoteObj = quoteSelectObject;
};

//console.log(getRandomQuote(quotes));


/***
 * `printQuote` function: 
 *    - Calls the getRandomQuote function
 *    - Creates vars from the object's key-value pairs
 *    - Sets conditionals for citation and year
 *    - builds html structure to be used on the page
 *    - inserts html output to 'quote-box' class on index.html
***/
let message;
function printQuote() {
  getRandomQuote();
  let quote = quoteObj.quote;
  let source = quoteObj.source;
  let citation = quoteObj.citation;
  let year = quoteObj.year;
  let sourceLine = source;
  if (citation) {
    sourceLine += `<span class="citation"> ${citation}</span>`
  };
  if (year) {
    sourceLine += `<span class="year"> ${year}</span>`
  }
  message = 
    `<p class="quote">${quote}</p>
    <p class="source">- ${sourceLine}</p>`;
  document.getElementById('quote-box').innerHTML = message;
};

//let test = printQuote(getRandomQuote(quotes));
//console.log(test);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);