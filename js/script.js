/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array: arrary of objects storing quotes and corresponding data 
***/
let quotes = [
  {quote: "The journey of a thousand miles begins with one step.", source: "Lao Tzu", citation: "https://www.keepinspiring.me/famous-quotes/", year: "unknown" },
  {quote: "That which does not kill us makes us stronger", source: "Friedrich Nietzsche", citation: "https://www.keepinspiring.me/famous-quotes/", year: "1888" },
  {quote: "Life is what happens when you’re busy making other plans.", source: "John Lennon", citation: "https://www.keepinspiring.me/famous-quotes/", year: "1957" },
  {quote: "When the going gets tough, the tough get going.", source: "Joe Kennedy", citation: "https://www.keepinspiring.me/famous-quotes/", year: "" },
  {quote: "You must be the change you wish to see in the world.", source: "Mahatma Gandhi", citation: "https://www.keepinspiring.me/famous-quotes/", year: "" }
];

// console.log(quotes);
// console.log(quotes.length);

/***
 * `getRandomQuote` function: creates random number based on the quotes array length. Then returns the object selected.
***/
function getRandomQuote(arr) {
  let quoteIndex = Math.floor(Math.random() * arr.length);
  let quoteSelectObject = arr[quoteIndex];
  return quoteSelectObject;
};

//console.log(getRandomQuote(quotes));


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);