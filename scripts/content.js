import {newContent} from "../constants/productsContent.js";
import {activeCategoryId} from "./filter.js";
import {createElement} from "../tools/creatingElements.js";

let selectedSize = '';

const selectedCategoriesList = document.getElementsByClassName('selectedCategories')[0];
const resetButton = document.getElementsByClassName('reset')[0];
const sizesButtons = document.getElementsByClassName('sizes')[0];


const products = document.getElementById('products');

createContent(activeCategoryId, selectedSize);

resetButton.addEventListener('click', () => {
    selectedCategoriesList.innerHTML = '';
    selectedSize = '';
    const activeButton = document.getElementsByClassName('active')[0];
    activeButton.classList.remove('active');

    const selectedCategories = document.querySelectorAll('.open');
    selectedCategories.forEach((selectedCategory) => {
        selectedCategory.classList.remove('open')
    })
    createContent('', selectedSize)
})

function createProduct(productContent) {

    const product = createElement({tag: 'div', className: 'product'});
    product.dataset.category = productContent.categoryId;
    product.dataset.size = productContent.size;

    const productImg = createElement({tag: 'img', src: productContent.productImg, className: 'product-photo' });

    const productName = createElement({tag: 'p', innerHTML: productContent.productName, className: 'product-name'});

    const productPrice = createElement({tag: 'span', innerHTML: productContent.productPrice, className: 'product-price'});

    if (productContent.new) {
        const labelNew = createElement({tag: 'span', innerHTML: 'NEW', className: 'label-new'});
        product.append(labelNew);
    }

    product.append(productImg, productName, productPrice);

    return product;
}

function createContent(activeCategoryId, selectedSize) {
    products.innerHTML = '';

    const filteredContent = newContent
        .filter( (item) => activeCategoryId ? item.categoryId === +activeCategoryId : true)
        .filter((item) =>  selectedSize ? item.size.some(size => size === +selectedSize) : true)
        .map((productContent) => createProduct(productContent));

    products.append(...filteredContent);

}

document.addEventListener('active-category', (event) =>  createContent(event.detail.id, selectedSize));

sizesButtons.addEventListener('click', (event) => {
    if (event.target.classList.contains('size-button')) {
        const activeButton = document.getElementsByClassName('active')[0];
        activeButton && activeButton.classList.remove('active');

        event.target.classList.add('active');
        selectedSize = event.target.innerHTML;
        createContent(activeCategoryId, selectedSize);
    }
})


