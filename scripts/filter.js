import filters from "../constants/filters.js";

const filterCategories = document.querySelector('.categories');

let activeCategoryId = '';


filters.forEach(({name, items}) => {

    const category = createCategoryElement('div','categoryContainer')
    const categoryName = createCategoryElement('div','category', name);
    const categorySections = createCategoryElement('div','category-sections')

    category.append(categoryName);
    category.append(categorySections);

    items.forEach(({name, items}) => {
        const subCategorySections = createCategoryElement('div','sub-category-links');
        const subCategory = createCategoryElement('div','category-section');
        const subCategoryName = createCategoryElement('div','sub-category', name);

        subCategory.append(subCategoryName);
        subCategory.append(subCategorySections)
        categorySections.append(subCategory);

        items.forEach((name) => {
            const categoryLink = createCategoryLink('a', name, 'category-link', name.id);
            subCategorySections.append(categoryLink);
        })
    })
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

    if (event.target.classList.contains('category') && !event.target.classList.contains('open')) {
        const categorySections = event.target.nextSibling;
        const openChildren = categorySections.querySelectorAll('.open');

        openChildren.forEach((openChild) => {
            openChild.classList.remove('open')
        })
    }

    if (event.target.classList.contains('category-link')) {
        const categoryLinks = filterCategories.querySelectorAll('.category-link');
        categoryLinks.forEach((link) => {
            if (link !== event.target) {
                link.classList.remove('open');
            }
        })
    }

    event.target.dispatchEvent(new CustomEvent("active-category", {
        bubbles: true,
        detail: {id: activeCategoryId}
    }));
})


function createCategoryElement(tag, className, description = '') {
    const category = document.createElement(tag);
    category.className = className;
    category.innerHTML = description;
    return category;
}

function createCategoryLink(tag, description = '', className, id) {
    const link = document.createElement(tag);
    link.className = className
    link.href = description.name;
    link.innerHTML = description.name;
    link.dataset.categoryId = id;
    return link;
}


export {activeCategoryId}