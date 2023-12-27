fetchQuotes = () => {
  let randomquoteIndex = Math.floor(Math.random() * 15);
  console.log(randomquoteIndex);
  fetch("https://type.fit/api/quotes")
    .then((data) => {
      return data.json();
    })
    .then((quotes) => {
      document.getElementById('quote').innerText = quotes[randomquoteIndex].text
      document.getElementById('author').innerText = quotes[randomquoteIndex].author
    });
};

fetchQuotes();