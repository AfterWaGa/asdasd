"use strict";

const navToggle = document.querySelector(".page-header__burger-btn");
const navList = document.querySelector(".page-nav__list");

navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("page-header__burger-btn--opened");
    navList.classList.toggle("page-nav__list--opened");
});
