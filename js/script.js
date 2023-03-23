'use strict';

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav_links');

const mediaQuery = window.matchMedia('(min-width: 900px)');
/// Mobile Nav
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  body.classList.toggle('active');
});

document.querySelectorAll('.nav_link').forEach(nav =>
  nav.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  })
);

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav_link') && mediaQuery.matches) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav_link');
    const logo = link.closest('.nav').querySelector('.nav_logo');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.6));
nav.addEventListener('mouseout', handleHover.bind(1));
