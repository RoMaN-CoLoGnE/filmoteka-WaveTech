const refs = {
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.loader'),
  spinner: document.querySelector('[data-index="spinner"]'),
  pagination: document.querySelector('#pagination'),
  searchForm: document.querySelector('.search__form'),
  searchInput: document.querySelector('.search__input'),
  searchSubmitButton: document.querySelector('.search__submit-button'),
  // Кнопки фильтра
  weeklyTrendBtn: document.querySelector('button[data-set="trending"]'),
  topRatedBtn: document.querySelector('button[data-set="top_rated"]'),
  nowPlayingBtn: document.querySelector('button[data-set="now_playing"]'),
  popularBtn: document.querySelector('button[data-set="popular"]'),
  upcomingBtn: document.querySelector('button[data-set="upcoming"]'),

  loaderModal: document.querySelector('.modal__loader'),
  libraty: document.querySelector('#gallery-lib'),
  closeModalBtn: document.querySelector('.modal__btn-close'),
  divBackdrop: document.querySelector('.js-backdrop'),
  modalRef: document.querySelector('.modal__wrap'),
  teamRef: document.querySelector('.team__wrap'),
};

export default refs;
