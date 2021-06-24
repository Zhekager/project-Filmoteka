const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '92ffb34e08e714eb390805a25b0a06d3';

export default class FilmApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.id = '';
    this.movieWatchedIdList = [];
    this.movieQueueIdList = [];
  }

  fetchTrendingMovies() {
    return fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${this.page}`,
    )
      .then(response => response.json())
      .then(({ results }) => {
        return this.fetchFilmGenre().then(genres => {
          return results.map(result => ({
            ...result,
            release_date: result.release_date
              ? result.release_date.slice(0, 4)
              : result.release_date,
            genres: this.filterGenres(genres, result),
          }));
        });
      });
  }

  fetchSearch() {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        return this.fetchFilmGenre().then(genres => {
          return results.map(result => ({
            ...result,
            release_date: result.release_date
              ? result.release_date.slice(0, 4)
              : result.release_date,
            genres: this.filterGenres(genres, result),
          }));
        });
      });
  }

  getFullMovieInfo(movie_id) {
    const url = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
    return fetch(url)
      .then(response => response.json())
      .then(result => ({
        ...result,
        release_date: result.release_date ? result.release_date.slice(0, 4) : result.release_date,
        genres: this.filterGenresLibrary(result),
      }));
  }

  fetchFilmGenre() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    return fetch(url)
      .then(response => response.json())
      .then(({ genres }) => {
        return genres;
      });
  }

  filterGenres(genres, result) {
    let genreList = result.genre_ids
      .map(id => genres.filter(genre => genre.id === id).map(genre => genre.name))
      .flat();

    if (genreList.length === 1) {
      return (genreList = [`${genreList[0]}`]);
    }
    if (genreList.length === 2) {
      return (genreList = [`${genreList[0]}, ${genreList[1]}`]);
    } else if (genreList.length > 2) {
      return (genreList = `${genreList[0]}, ${genreList[1]}, Other`);
    }
  }

  filterGenresLibrary(result) {
    let genreList = result.genres.map(genre => genre.name).flat();
    if (genreList.length === 1) {
      return (genreList = [`${genreList[0]}`]);
    }
    if (genreList.length === 2) {
      return (genreList = [`${genreList[0]}, ${genreList[1]}`]);
    } else if (genreList.length > 2) {
      return (genreList = `${genreList[0]}, ${genreList[1]}, Other`);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  watchedLocalStorage(id) {
    if (this.movieWatchedIdList === [] || !this.movieWatchedIdList.includes(id)) {
      this.movieWatchedIdList.push(id);
    } else if (this.movieWatchedIdList.includes(id)) {
      this.movieWatchedIdList = this.movieWatchedIdList.filter(el => el !== id);
    }

    let movieIdStorageW = {
      MovieIDW: this.movieWatchedIdList,
    };

    localStorage.setItem('watched', JSON.stringify(movieIdStorageW));
  }

  queueLocalStorage(id) {
    if (this.movieQueueIdList === [] || !this.movieQueueIdList.includes(id)) {
      this.movieQueueIdList.push(id);
    } else if (this.movieQueueIdList.includes(id)) {
      this.movieQueueIdList = this.movieQueueIdList.filter(el => el !== id);
    }

    let movieIdStorageQ = {
      MovieIDQ: this.movieQueueIdList,
    };

    localStorage.setItem('queue', JSON.stringify(movieIdStorageQ));
  }
}
