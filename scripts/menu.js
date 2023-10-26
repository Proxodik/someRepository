import filters from "../constants/filters.js";
import {createElement} from "../tools/creatingElements.js";
import {filterState} from "./filterState.js";
import {createSelectedCategoryLabel} from "../tools/createSelectedCategoryLabel.js";

const standardSizeButton = document.querySelector('.size-button[value = "1"]');
const selectedCategoriesList = document.getElementsByClassName('selectedCategories')[0];
const filterCategories = document.querySelector('.categories');
const sorting = document.querySelector('.sorting');
const sortingOptions = sorting.getElementsByTagName('option');
const categoriesForm = createElement({tag: 'form', name: 'categories', id: 'categoriesForm'})
filterCategories.append(categoriesForm);

filterCategories.addEventListener('click', (event) => {
    if (!(event.target instanceof HTMLElement)) return;
    event.target.classList.toggle('open');
})

//-------------form inputs listener--------------
document.forms.categories.addEventListener('change', (e) => {
    const categoryId = +e.target.dataset.categoryId;
    if (e.target.checked) {
        filterState.updateFilterState({categoryId: categoryId})
        const selectedCategory = createSelectedCategoryLabel(e);
        selectedCategoriesList.append(selectedCategory);

    }else {
        const selectedCategory = selectedCategoriesList.querySelector(`.selectedCategory[id ="${e.target.value}"]`);
        filterState.spliceCategoryId(categoryId)
        selectedCategory.remove();
    }
})
//-------------reset button listener-------------
document.addEventListener('resetButtonClick', () => {
    selectedCategoriesList.innerHTML = '';
})

//-------------size buttons listener-------------


//-------------labels listener-------------
document.addEventListener('labelClick', (label) => {
    label = label.detail
    const categoryInput = filterCategories.querySelector(`.category-input[value ="${label.id}"]`);
    categoryInput.checked = false;
    label.remove()
})

//-------------sorting change-------------
sorting.addEventListener('change', (e) => {
    filterState.updateFilterState({sortingId: e.target.selectedIndex})
})


//-------Creating and append categories---------
filters.forEach(({name, items}) => {
    const category = createElement({tag: 'div', className: 'categoryContainer'});

    const categoryName = createElement({tag: 'span', className: 'category', innerHTML: name});

    const categorySections = createElement({tag: 'div', className: 'category-sections'})

    category.append(categoryName, categorySections);

    items.forEach(({name, items}) => {
        const subCategorySections = createElement({tag: 'div', className: 'sub-category-inputs'});

        const subCategory = createElement({tag: 'div', className: 'category-section'});

        const subCategoryName = createElement({tag: 'span', className: 'sub-category', innerHTML: name});

        subCategory.append(subCategoryName, subCategorySections);
        categorySections.append(subCategory);

        items.forEach((item) => {
            const categoryInput = createElement({tag: 'input', type: 'checkbox', className: 'category-input', value: item.name, name: item.name});
            const categoryLabel = createElement({tag: 'label', className: 'category-label', id: item.name});
            const categoryLabelText = createElement({tag: 'p', innerHTML: item.name , className: 'category-input-text'});
            categoryInput.dataset.categoryId = item.id;
            categoryLabel.append(categoryInput, categoryLabelText );
            subCategorySections.append(categoryLabel);
        });
    });

    categoriesForm.append(category);
})

