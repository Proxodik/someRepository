import filters from "../constants/filters.js";

const filterCategories = document.querySelector('.categories');
const products = document.getElementById('products');

filters.forEach(({name, items}) => {

    const category = createCategoryElement('div','categoryContainer')
    const categoryName = createCategoryElement('div','category', name);
    const categorySections = createCategoryElement('div','category-sections')

    category.append(categoryName);
    category.append(categorySections);

    items.forEach(({name, items}) => {
        const subCategorySections = createCategoryElement('div','sub-category-sections');
        const subCategory = createCategoryElement('div','category-section');
        const subCategoryName = createCategoryElement('div','sub-category', name);

        subCategory.append(subCategoryName);
        subCategory.append(subCategorySections)
        categorySections.append(subCategory);

        items.forEach((name) => {
            const subSubCategoryName = createCategoryLink('a', name, name, 'subSubCategory');
            subCategorySections.append(subSubCategoryName);
        })
    })
    filterCategories.append(category);
})

filterCategories.addEventListener('click', (event) => {
    event.target.classList.toggle('open');

    if (event.target.classList.contains('subSubCategory')) {
        products.forEach((product) => {
            if (product.dataset.subSubCategory === event.target.innerHTML){
                product.style.color = 'red';
            }
        })
    }

    if (event.target.classList.contains('category') && !event.target.classList.contains('open')) {
        const categorySections = event.target.nextSibling;
        const openChildren = categorySections.querySelectorAll('.open');

        openChildren.forEach((openChild) => {
            openChild.classList.remove('open')
        })
    }
})

function createCategoryElement(tag, className, description = '') {
    const category = document.createElement(tag);
    category.className = className;
    category.innerHTML = description;
    return category;
}

function createCategoryLink(tag, href, description = '', className) {
    const link = document.createElement(tag);
    link.className = className
    // link.href = href;
    link.innerHTML = description;

    return link;
}


