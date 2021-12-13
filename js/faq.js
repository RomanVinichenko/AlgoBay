const btn = document.querySelectorAll('.question__item');
btn.forEach((item) => {
    item.addEventListener('click', function () {
        this.classList.toggle('question__item--active');
    });
});
