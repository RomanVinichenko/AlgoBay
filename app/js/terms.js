const terms = document.querySelector('.terms__button-terms');
const privacy = document.querySelector('.terms__button-privacy');
privacy.addEventListener('click', function () {
    privacy.classList.toggle('terms__button--active');
});
terms.addEventListener('click', function () {
    terms.classList.toggle('terms__button--active');
});
