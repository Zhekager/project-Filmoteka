const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '92ffb34e08e714eb390805a25b0a06d3';

export default class FilmApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchTrendingMovies() {
    //  return fetch`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.page}`;

    return fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
      .then(res => res.json())
      .catch(error => console.log(error));
  }

  fetchMovies() {
    return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${this.searchQuery}`).then(
      res => {
        this.incrementPage();
        return res.json();
      },
    );
  }

  // SearchMovie() {
  //   return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`)
  //     .then(res => res.json())
  //     .catch(error => console.log(error));
  // }

  // перевірити чи треба
  getMovieById() {
    return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .catch(error => console.log(error));
  }

  // для жанров -- шаблонизатор
  getGenresList() {
    return fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        return data.genres;
      });
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
