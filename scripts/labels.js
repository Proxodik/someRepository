import {filterState} from "./filterState.js";
const selectedCategoriesList = document.querySelector('.selectedCategories');

selectedCategoriesList.addEventListener('click', (e) => {
    const selectedCategory = e.target.closest('.selectedCategory');
    filterState.labelEvent(selectedCategory)
})