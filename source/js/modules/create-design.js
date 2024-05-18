import { slide } from "./functions.js";

export default function createDesign() {
    // Фильтры на странице Create Design

    const openFilterBtns = document.querySelectorAll(".design-filters__toggler");

    openFilterBtns.forEach((toggler) => {
        toggler.addEventListener("click", function () {
            toggler.nextElementSibling.classList.toggle("design-filters--opened");
        });
    });

    // Открытие фильтров

    const showFilters = document.querySelector(".design-filters__show-btn");
    const filtersWrapper = document.querySelector(".design-filters__inner");
    const filtersMobile = document.querySelector(".design-filters");
    const contentWrapper = document.querySelector(".design-content__inner");

    showFilters.addEventListener("click", function () {
        if (document.documentElement.clientWidth > 1024) {
            filtersWrapper.classList.toggle("filters--open");
            contentWrapper.classList.toggle("design-content__inner--filters-closed");
        } else if (document.documentElement.clientWidth <= 1024) {
            filtersMobile.classList.toggle("filters--open-mobile");
            filtersWrapper.classList.remove("filters--open");
        }
    });

    // Открытие карточки дизайна

    const designCard = document.querySelector(".design-card");
    const openDesignCard = document.querySelector(".card-template--open");
    const closeDesignCard = document.querySelector(".design-card__close-btn");
    const designOverlay = document.querySelector(".card-overlay");

    openDesignCard.addEventListener("click", function () {
        designOverlay.classList.add("card-overlay--open");
        designCard.classList.add("design-card--open");
    });

    closeDesignCard.addEventListener("click", function () {
        designOverlay.classList.remove("card-overlay--open");
        designCard.classList.remove("design-card--open");
    });

    designOverlay.addEventListener("click", function () {
        designOverlay.classList.remove("card-overlay--open");
        designCard.classList.remove("design-card--open");
    });

    // Tags слайдер

    const tagsSlider = document.querySelector("#tags-slider");
    const tagsPrevBtn = document.querySelector("#tags-prev");
    const tagsNextBtn = document.querySelector("#tags-next");

    tagsPrevBtn.addEventListener("click", slide(tagsSlider, -300, 300));
    tagsNextBtn.addEventListener("click", slide(tagsSlider, 300, 300));

    // Tags слайдер в модалке

    const tagsSliderModal = document.querySelector("#tags-slider--modal");
    const tagsPrevBtnModal = document.querySelector("#tags-prev--modal");
    const tagsNextBtnModal = document.querySelector("#tags-next--modal");

    tagsPrevBtnModal.addEventListener("click", slide(tagsSliderModal, -300, 300));
    tagsNextBtnModal.addEventListener("click", slide(tagsSliderModal, 300, 300));

    // Templates слайдер в модалке

    const templatesSliderModalTop = document.querySelector("#templates-slider--modal-top");
    const templatesSliderModalBottom = document.querySelector("#templates-slider--modal-bottom");
    const templatesPrevBtnModal = document.querySelector("#templates-prev--modal");
    const templatesNextBtnModal = document.querySelector("#templates-next--modal");

    templatesPrevBtnModal.addEventListener("click", slide(templatesSliderModalTop, -300, 300));
    templatesPrevBtnModal.addEventListener("click", slide(templatesSliderModalBottom, -300, 300));
    templatesNextBtnModal.addEventListener("click", slide(templatesSliderModalTop, 300, 300));
    templatesNextBtnModal.addEventListener("click", slide(templatesSliderModalBottom, 300, 300));
}
