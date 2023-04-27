//TMDB
const API_KEY ="api_key=788ccf85140ead3211dd44864a894fa4";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL =BASE_URL +  "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + '/search/movie?' + API_KEY;


const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);
function getMovies(url){
  fetch(url).then(res => res.json()).then(data => {
    console.log(data.results)
    localStorage.setItem("respData",JSON.stringify( data.results));
    const item = localStorage.getItem("newdata");
    showMovies(data.results)
    
  })
}

function showMovies(data){
  main.innerHTML = '';
  data.forEach(movie=>{
    const{id,title,release_date, poster_path} = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
    <a href='detail.html?id=${id}'>
    <img  src="${IMG_URL+poster_path}" alt="${title}">
    </a>
    <div class="movie-info">
      <h3>${title}</h3>
      <h4>${release_date}</h4>
    </div>
    `

  main.appendChild(movieEl);
  })
}


form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const searchTerm = search.value;
  if(searchTerm){
    getMovies(searchURL + '&query=' +searchTerm)
  }
})

function movieSearch(event){
    let movieTitle = document.getElementById('seachMovie').value;
    if (movieTitle!==''){
        getMovies(searchURL + '&query=' + movieTitle)
        return;
    }
    getMovies(API_URL);
}
