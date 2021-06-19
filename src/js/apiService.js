const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '92ffb34e08e714eb390805a25b0a06d3';


export default class FilmApiService{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

      fetchTrendingMovies() {
    // return fetch(`${BASE_URL}/trending/movie/week?api_key=${KEY}`)
    return fetch(`${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=${this.page}`)
    
        .then(res => res.json())
      .catch(error => console.log(error));
  }

    fetchFilms() {
        return fetch(`${BASE_URL}/search/movie?api_key=${KEY}&query=${this.searchQuery}`)
            .then((res => {
                this.incrementPage();
                return res.json()
            }))
    }

    // ???
      SearchMovie() {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
    return fetch(url)
      .then(res => res.json())
      .catch(error => console.log(error));
    }
    
    // ???
  getMovieById() {
    const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
    return fetch(url)
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
            this.page =1
        }

        getQuery() {
            return this.searchQuery;
        }

        setQuery() {
            this.searchQuery = newQuery
        }
}
    
