'use strict'

const btnMenu = document.querySelector('#btnMenu');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.page-header');
const info = document.querySelector('.nav-menu__info');

btnMenu.addEventListener('click', () => {
  header.classList.toggle('page-header--open');
  navMenu.classList.toggle('nav-menu--open');
  info.classList.toggle('nav-menu__info--open');
  btnMenu.classList.toggle('page-header__button--close');
});

const mySwiper = new Swiper ('.swiper-container', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})