const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');


const apiURL = "http://api.quotable.io/random"


btnEl.addEventListener('click', () => {
    getQuote();    
});

async function getQuote() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data); 
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = quoteAuthor;
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error happened, try again later";
        authorEl.innerText = "An error happened, try again later";
    }
}




