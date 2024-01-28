import {filterState} from "./filterState.js";

document.addEventListener('label', labelEvent)

function labelEvent() {
    const selectedCategoriesList = document.querySelector('.selectedCategories');

    selectedCategoriesList.addEventListener('click', (e) => {
        const selectedCategory = e.target.closest('.selectedCategory');

        document.dispatchEvent(new CustomEvent('labelClick', {
            bubbles: true,
            detail: selectedCategory,
        }))

        filterState.labelEvent(+selectedCategory.id)
    })
}
labelEvent()

