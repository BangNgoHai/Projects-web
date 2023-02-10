const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ce5070cea2075e21c96680d7a37ce117&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=ce5070cea2075e21c96680d7a37ce117&query=";

const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');


returnMovies(APILINK)
function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');

            const image = document.createElement('img');
            image.setAttribute('class', 'img');
            image.setAttribute('id', 'img');

            const div_cardbody = document.createElement('div');
            div_cardbody.setAttribute('class', 'cardbody');

            const text = document.createElement('p');
            text.setAttribute('class', 'text');

            const title = document.createElement('h3');
            title.setAttribute('class', 'title');
            title.setAttribute('id', 'title');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;

            div_card.appendChild(image);
            div_card.appendChild(div_cardbody);
            div_cardbody.appendChild(title);
            div_cardbody.appendChild(text);

            main.appendChild(div_card);
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
});