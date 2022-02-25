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
  {quote: "Here's the thing about when 'What's New Pussycat?' plays over and over and over and over and over again... ", source: "John Mulaney"},
  {quote: "I’m lookin’ at the Pop-Tarts box and I notice they have directions on there. I give up on this species… ", source: "Brian Regan", tag: "favorites"},
  {quote: "BIKES!!!", source: "Tom Segura", citation: "Mostly Stories", year: "2016", tag: "favorites"},
  {quote: "When I was 22, I got involed with the Russian Mafia...", source: "Bert Kreischer", citation: "The Machine", year: "2016"},
  {quote: "Fuck you, Eddie! I know you! I see you on television. You the fuck you man!", source: "Eddie Murphy", citation: "Eddie Murphy Raw", year: "1987"}
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


//extra credit: change background color to random color
function changeBackground() {
  function randomColorValue() { return Math.floor(Math.random() *255);};
  let r = randomColorValue();
  let g = randomColorValue();
  let b = randomColorValue();
  document.body.style.background = `rgb( ${r}, ${g}, ${b})`;
};

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
  changeBackground();
  let quote = quoteObj.quote;
  let source = quoteObj.source;
  let citation = quoteObj.citation;
  let year = quoteObj.year;
  let tag = quoteObj.tag;
  let sourceLine = source;
  if (citation) {
    sourceLine += `<span class="citation"> ${citation}</span>`
  };
  if (year) {
    sourceLine += `<span class="year"> ${year}</span>`
  };
  //extra credit: add tagging to atleast 1 object; Also added css for class="tag".
  if (tag) {
    sourceLine += `<span class="tag">${tag}</span>`
  };
  message = 
    `<p class="quote">${quote}</p>
    <p class="source">${sourceLine}</p>`;
  document.getElementById('quote-box').innerHTML = message;
};

//let test = printQuote(getRandomQuote(quotes));
//console.log(test);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//extra credit: use setInterval() method to autorefresh quote
setInterval(printQuote, 10000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);