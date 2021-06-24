import spinner from './spinner';

class FilmsAPI {

    constructor(key) {
        this.baseURL = 'https://api.themoviedb.org/3'
        this.key = key;
        this.pageNumb = 1;
        this.fetchBy = 'trending';
    }
    
    async getFilmsByQuery(query, page = this.pageNumb) {
        if (this.fetchBy !== 'query') {
            this.fetchBy = 'query';
        }
        spinner.show();
        try {
            const response = await fetch(`${this.baseURL}/search/movie?api_key=${this.key}&query=${query}&page=${page}`)
            const films = await response.json();
            spinner.hide();
            this.updatePageNumb(page);
            return films
        } catch (error) {
            console.log(error);
        }
    }

    async getTrendingFilms(page = this.pageNumb) {
        if (this.fetchBy !== 'trending') {
            this.fetchBy = 'trending';
        }
        spinner.show();
        try {
            const response = await fetch(`${this.baseURL}/trending/movie/day?api_key=${this.key}&page=${page}`)
            this.updatePageNumb(page);
            spinner.hide();
            const films = await response.json();
            return films
        } catch (error) {
            console.log(error);
        }
    }
}