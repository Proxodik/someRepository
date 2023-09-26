import filters from "../constants/filters.js";
import {createElement} from "../tools/creatingElements.js";

const selectedCategoriesList = document.getElementsByClassName('selectedCategories')[0];

const filterCategories = document.querySelector('.categories');

let activeCategoryId = '';


filters.forEach(({name, items}) => {
    const category = createElement({tag: 'div', className: 'categoryContainer'});

    const categoryName = createElement({tag: 'span', className: 'category', innerHTML: name});

    const categorySections = createElement({tag: 'div', className: 'category-sections'})

    category.append(categoryName, categorySections);

    items.forEach(({name, items}) => {
        const subCategorySections = createElement({tag: 'div', className: 'sub-category-links'});

        const subCategory = createElement({tag: 'div', className: 'category-section'});

        const subCategoryName = createElement({tag: 'span', className: 'sub-category', innerHTML: name});

        subCategory.append(subCategoryName, subCategorySections);
        categorySections.append(subCategory);

        items.forEach((item) => {
            const categoryLink = createElement({tag: 'a', className: 'category-link', innerHTML: item.name});
            categoryLink.dataset.categoryId = item.id;

            subCategorySections.append(categoryLink);
        });
    });

    filterCategories.append(category);
})

filterCategories.addEventListener('click', (event) => {
    event.preventDefault();
    if (!(event.target instanceof HTMLElement)) return;

    event.target.classList.toggle('open');


    if (event.target.classList.contains('open')) {
        activeCategoryId = event.target.dataset.categoryId;

    }else{
        activeCategoryId = '';
    }

    // if (event.target.classList.contains('category') && !event.target.classList.contains('open')) {
    //     const categorySections = event.target.nextElementSibling;
    //     const openChildren = categorySections.querySelectorAll('.open');
    //
    //     openChildren.forEach((openChild) => {
    //         openChild.classList.remove('open')
    //     })
    // }

    if (event.target.classList.contains('category-link')) {
        const categoryLinks = filterCategories.querySelectorAll('.category-link');
        categoryLinks.forEach((link) => {
            if (link !== event.target) {
                link.classList.remove('open');
            }
        })

    }
    showSelectedCategories();


    event.target.dispatchEvent(new CustomEvent("active-category", {
        bubbles: true,
        detail: {id: activeCategoryId}
    }));
})

function showSelectedCategories () {
    selectedCategoriesList.innerHTML = '';
    const selectedCategories = document.querySelectorAll('.open');

    selectedCategories.forEach((category) => {
        const selectedCategory = document.createElement('span');
        selectedCategory.className = 'selectedCategory'
        selectedCategory.innerHTML = category.innerHTML;

        selectedCategoriesList.append(selectedCategory);
    })
}


export {activeCategoryId}

