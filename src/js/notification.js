import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

function needMoreInfo() {
  Toastify({
    text: 'I need your clothes, your boots and your...QUERY! :)',
    duration: 2000,
    stopOnFocus: true,
    className: 'info-more',
  }).showToast();
}

function onSuccess() {
  Toastify({
    text: '!May the force be with you!',
    duration: 2000,
    stopOnFocus: true,
    className: 'info-success',
  }).showToast();
}

function onError() {
  Toastify({
    text: 'Houston, we have a problem :(',
    duration: 2000,
    stopOnFocus: true,
    className: 'info-error',
  }).showToast();
}

function joySuccess() {
  Toastify({
    text: 'Ммм...заинтересовал фильмец;)',
    duration: 2000,
    stopOnFocus: true,
    className: 'info-joy',
  }).showToast();
}

export default { onSuccess, needMoreInfo, onError, joySuccess };
