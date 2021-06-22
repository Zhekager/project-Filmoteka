import filmTpl from '../templates/film.hbs';
import films from '../templates/film.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import getRefs from '../js/refs';
import FilmApiService from './apiService.js';
import addToLibrary from './library.js';
const refs = getRefs();

const filmsApiService = new FilmApiService();

const cardFilm = document.querySelector('.gallery');
cardFilm.addEventListener('click', openModal);


    if (evt.target.nodeName !== 'li') {
        getFullMovieInfo(id)
    }

    


 //функция получения фильма по ид


function getFullMovieInfo(id) {
    filmsApiService.getFullMovieInfo(id)
        .then(movieInfo => {
            const markup = filmTpl(movieInfo);
            const modal = basicLightbox.create(markup);
            modal.show();


      
      
            addToLibrary();
            cardFilm.removeEventListener('click');

        
      
      

    const buttonCls = document.querySelector('.modal-button-close');
    buttonCls.addEventListener('click', closeModal);
    window.addEventListener('keydown', closeModalHandler);

    //функция закрытия по escape
function closeModalHandler(evt) {
    if (evt.code === 'Escape') {
        modal.close();
        window.removeEventListener('keydown', closeModalHandler);
        }
    }
            
function closeModal(evt) {
        modal.close();
        window.removeEventListener('keydown', closeModalHandler);
    }

    })


//             addToLibrary();

//         })


        .catch(error => console.log('error', error));
    
}

       


function openModal(evt) {
    evt.preventDefault();
    let id = evt.target.dataset.action;
    if (evt.target.nodeName !== 'IMG') {
       return
    }
     getFullMovieInfo(id)
    



  
    
    
    
     
}





            


//ryjgrf pfrhsnm


