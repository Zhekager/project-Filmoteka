const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '92ffb34e08e714eb390805a25b0a06d3';

export default class FilmApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  getFullMovieInfo(movie_id) {
    return fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
    .catch(error => console.log('error', error));
  }

  fetchTrendingMovies() {
    // версия для популярных фильмов
    //  return fetch`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.page}`;
    return fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${this.page}`)
      .then(res => res.json())
      .catch(error => console.log(error));
  }

  fetchSearch() {
    return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`)
      .then(
      res => {
        this.incrementPage();
        return res.json();
      },
    );
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  getQuery() {
    return this.searchQuery;
  }

  setQuery() {
    this.searchQuery = newQuery;
  }
}
