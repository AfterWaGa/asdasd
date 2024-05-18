export default function openNav() {
    // Навигация в шапке сайта
    const navToggle = document.querySelector(".page-header__burger-btn");
    const navList = document.querySelector(".page-nav__list");

    navToggle.addEventListener("click", function () {
        navToggle.classList.toggle("page-header__burger-btn--opened");
        navList.classList.toggle("page-nav__list--opened");
    });

    // Окно Log in

    const navLoginBtn = document.querySelector(".user-nav__login");
    const modalLogin = document.querySelector(".modal-login");
    const loginCloseBtn = document.querySelector(".login--close");
    const loginOverlay = document.querySelector("#login-overlay");

    navLoginBtn.addEventListener("click", function () {
        modalLogin.classList.toggle("modal--opened");
        loginOverlay.classList.toggle("modal-overlay--open");
    });

    loginCloseBtn.addEventListener("click", function () {
        modalLogin.classList.remove("modal--opened");
        loginOverlay.classList.remove("modal-overlay--open");
    });

    loginOverlay.addEventListener("click", function () {
        modalLogin.classList.remove("modal--opened");
        loginOverlay.classList.remove("modal-overlay--open");
    });

    // Окно Sign up

    const navSignUpBtn = document.querySelector(".user-nav__signUp");
    const modalSignUp = document.querySelector(".modal-signup");
    const signupCloseBtn = document.querySelector(".signup--close");
    const signupOverlay = document.querySelector("#signup-overlay");

    navSignUpBtn.addEventListener("click", function () {
        modalSignUp.classList.toggle("modal--opened");
        signupOverlay.classList.toggle("modal-overlay--open");
    });

    signupCloseBtn.addEventListener("click", function () {
        modalSignUp.classList.remove("modal--opened");
        signupOverlay.classList.remove("modal-overlay--open");
    });

    signupOverlay.addEventListener("click", function () {
        modalSignUp.classList.remove("modal--opened");
        signupOverlay.classList.remove("modal-overlay--open");
    });
}
