'use strict';

(function () {

})();

function togglePopup() {
    document.querySelector(".popup").classList.toggle('popup_opened')
}

function submitPopup() {
    event.preventDefault()
    const name = document.querySelector(".popup__title").value;
    const description = document.querySelector(".popup__description").value;
    const date = document.querySelector(".popup__date").value;
    document.querySelector(".tasks").insertAdjacentHTML('beforeend',
        `<article class="tasks__item task">
    <p class="task__title">${name}</p>
    <p class="task__description">${description}</p>
    <p class="task__date">${date}</p>
    </article>`)
    document.querySelector(".popup__form").reset();
    togglePopup()
}
document.querySelector('.popup__submit').addEventListener("click", function () {
    alert('Ваша задача успешно добавлена в список.');
})

document.querySelector(".description__add-task").addEventListener("click", togglePopup)
document.querySelector(".popup__close").addEventListener("click", togglePopup)
document.querySelector(".popup__form").addEventListener("submit", submitPopup)

