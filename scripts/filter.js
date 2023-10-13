import filters from "../constants/filters.js";
import {createElement} from "../tools/creatingElements.js";

const selectedCategoriesList = document.getElementsByClassName('selectedCategories')[0];
const sizesButtons = document.getElementsByClassName('sizes')[0];
const filterCategories = document.querySelector('.categories');
const resetButton = document.getElementsByClassName('reset')[0];

let filtersState = {
    categoryId: [],
    size: '',
}

const categoriesForm = createElement({tag: 'form', name: 'categories', id: 'categoriesForm'})
filterCategories.append(categoriesForm);

resetButton.setAttribute('form', categoriesForm.id);

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
//------------Categories Listener--------------
filterCategories.addEventListener('click', (event) => {
    if (!(event.target instanceof HTMLElement)) return;
    event.target.classList.toggle('open');
    updateContent();
})


//----------button 'reset' listener------------
resetButton.addEventListener('click', () => {
    selectedCategoriesList.innerHTML = '';

    const selectedCategories = document.querySelectorAll('.open');
    selectedCategories.forEach((selectedCategory) => {
        selectedCategory.classList.remove('open')
    })
    const activeSizeButton = document.getElementsByClassName('active')[0];
    activeSizeButton && activeSizeButton.classList.remove('active');

    filtersState.categoryId.splice(0);
    filtersState.size = '';
    updateContent();
})
//--------------Size Buttons Listener-------------
sizesButtons.addEventListener('click', (event) => {
    if (event.target.classList.contains('size-button')) {
        const activeButton = document.getElementsByClassName('active')[0];
        activeButton && activeButton.classList.remove('active');

        event.target.classList.add('active');
        filtersState.size = +event.target.innerHTML
        updateContent();

    }
})

document.forms.categories.addEventListener('change', (e) => {
    const categoryId = +e.target.dataset.categoryId

    if (e.target.checked) {
        filtersState.categoryId.push(categoryId);

        const selectedCategory = createElement({tag: 'div', className: 'selectedCategory', id: e.target.value});
        const name = createElement({tag: 'span', innerHTML: e.target.value,});
        const close = createElement({tag: 'span', innerHTML: 'x', className: 'close-category'});
        selectedCategory.append(name,close);
        selectedCategoriesList.append(selectedCategory);

    }else {
        const selectedCategory = selectedCategoriesList.querySelector(`.selectedCategory[id ="${e.target.value}"]`);
        filtersState.categoryId.splice(filtersState.categoryId.indexOf(categoryId), 1);
        selectedCategory.remove();
    }
    updateContent();
})

selectedCategoriesList.addEventListener('click', (e) => {
    const selectedCategory = e.target.closest('.selectedCategory');
    const categoryInput = filterCategories.querySelector(`.category-input[value ="${selectedCategory.id}"]`);
    categoryInput.checked = false;
    filtersState.categoryId.splice(filtersState.categoryId.indexOf(+e.target.dataset.categoryId), 1);
    selectedCategory.remove()
    updateContent();
})

function updateContent() {
    document.dispatchEvent(new CustomEvent("filters", {
        bubbles: true,
        detail: {...filtersState}
    }));
}

export {filtersState}

