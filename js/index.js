const tabs = document.querySelectorAll('ul li');
const cards = document.querySelectorAll('.card');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    tab.classList.add('active');

    cards.forEach(content => {
      content.classList.remove('active');
    });

    cards[index].classList.add('active');
  });
});
