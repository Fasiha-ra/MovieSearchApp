const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get('id');
if(id){
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  const API_KEY ="api_key=788ccf85140ead3211dd44864a894fa4";
  const BASE_URL = "https://api.themoviedb.org/3";
  const singleMovie = BASE_URL + '/movie/'+id+'?' + API_KEY;
  fetch(singleMovie).then(res => res.json()).then(data => {
  console.log(data)
    document.querySelector('#img_path').setAttribute('src',IMG_URL+data.poster_path)
    document.querySelector('.title').textContent = data.original_title;
    document.querySelector('.rating').textContent = data.vote_average;
    document.querySelector('.release_date').textContent = data.release_date;
    document.querySelector('.popularity').textContent = data.popularity;
    document.querySelector('.plot').textContent = data.overview;
    

    
    //showMovies(data.results)

})
    }
 