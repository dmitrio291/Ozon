import filter from './filter';

export default function actionPage() {
    const cards = document.querySelectorAll('.goods .card'),
        discountCheckbox = document.getElementById('discount-checkbox'),
        min = document.getElementById('min'),
        max = document.getElementById('max'),
        search = document.querySelector('.search-wrapper_input'),
        searchBtn = document.querySelector('.search-btn');

    // фильтр по акции
    discountCheckbox.addEventListener('click', filter);
    // фильтр по цене
    min.addEventListener('change', filter);
    max.addEventListener('change', filter);

    function filterSearch() {
        const searchText = new RegExp(search.value.trim(), 'i'); // флаг i отключает зависимость к регистру
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if (!searchText.test(title.textContent)) { // метод test() возвращает булевое значение
                // card.parentNode.remove();
                card.parentNode.style.display = 'none';
            } else {
                // goods.appendChild(card.parentNode);
                card.parentNode.style.display = '';
            }
        });
        search.value = '';
    }

    // поиск
    searchBtn.addEventListener('click', filterSearch);

    search.addEventListener('keydown', (event) => {        
        if (event.keyCode === 13) {
            filterSearch();
        }
    });
}