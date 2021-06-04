const QUOTEBANK = [
  {
    quote: "'I'm old-school, Mulder. Pre-Google'.",
    author: "Danna Scully.",
  },
  {
    quote: "'Mulder, the internet is not good for you'.",
    author: "Dana Scully.",
  },
  {
    quote: "'A mother never forgets'.",
    author: "Dana Scully.",
  },
  {
    quote:
      "'It looks like this person was born without footprints. Which is impossible, by the way'.",
    author: "Dana Scully.",
  },
  {
    quote: "'There’s a lot of money to be made in scaring people'.",
    author: "Dana Scully",
  },
  {
    quote: "'Sure. Fine. Whatever'.",
    author: "Dana Scully",
  },
  {
    quote: "'I know what I'm doing'.",
    author: "Fox Mulder.",
  },
  {
    quote: "'Classic vampirism'.",
    author: "Fox Mulder.",
  },
  {
    quote: "'I wouldn't want to dissapoint you by not dissapointing you'.",
    author: "Fox Mulder.",
  },
  {
    quote: "'Do you believe in the existence of extraterrestrials?'",
    author: "Fox Mulder.",
  },
  {
    quote: "'Are you aware of the statistics of decapitation?'",
    author: "Fox Mulder.",
  },
  {
    quote: "'You gotta love this place. Everyday is like halloween'.",
    author: "Fox Mulder.",
  },
];
window.onload = init;
function init() {
  generateaQuote();
}
function generateaQuote() {
  let quoteSize = QUOTEBANK.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = QUOTEBANK[randomIndex];
  let twitterLink =
    "https://twitter.com/intent/tweet?text=" +
    randomQuoteData.quote +
    " - " +
    randomQuoteData.author;

  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
}
