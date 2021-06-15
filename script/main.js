var elsCard = document.querySelectorAll('.hiw__cards');
var elsButton = document.querySelectorAll('.card__button');

elsButton.forEach(function (link) {
  link.addEventListener('click', function () {
    elsCard.forEach(function (item) {
      item.classList.remove('hiw__cards_active');
    });

    link.closest('.hiw__cards').classList.add('hiw__cards_active');
  });
});
