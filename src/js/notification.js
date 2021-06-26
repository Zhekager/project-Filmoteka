import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';


//import toastify from './notification.js'; - импорт для работы
//toastify.error();/toastify.needMore(); ..- так вызывать функцию в нужном месте


// Можно использовать при поиске, когда пользователь хочет ввести запрос
function needMore(more) {
  Toastify({
    text: 'I need your clothes, your boots and your...QUERY! :)',
    duration: 2000,
    stopOnFocus: true, 
    className: 'info-more',
  }).showToast();
}

//Можно использовать для успешного поиска
function onSuccess(success) {
  Toastify({
    text: '!May the force be with you!',
    duration: 2000,
    stopOnFocus: true, 
    className: 'info-success',
  }).showToast();
}


//Можно использовать для ошибки
function error() {
  Toastify({
    text: 'Houston, we have a problem :(',
    duration: 2000,
    stopOnFocus: true, 
    className: 'info-error',
  }).showToast();
}

export default { onSuccess, needMore, error };