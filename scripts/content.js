fetch('/assets/productsData.json')
    .then(response => response.json())
    .then(data => {
        productsData = data;
        createContent(filterState);
    })

import {createElement} from "../tools/creatingElements.js";
import {filterState} from "./filterState.js";
const products = document.getElementById('products');

let productsData = [];

document.addEventListener('filtersStateUpdate', (event) => {
    createContent(event.detail);
});



function createProduct(productContent) {

    const product = createElement({tag: 'div', className: 'product'});

    const productImg = createElement({tag: 'img', src: productContent.url, className: 'product-photo'});

    const productName = createElement({tag: 'p', innerHTML: productContent.name, className: 'product-name'});

    const productPrice = createElement({
        tag: 'span',
        innerHTML: '$' + productContent.price,
        className: 'product-price'
    });

    if (productContent.new) {
        const labelNew = createElement({tag: 'span', innerHTML: 'NEW', className: 'label-new'});
        product.append(labelNew);
    }

    product.append(productImg, productName, productPrice);

    return product;
}

function createContent(state) {
    products.innerHTML = '';
    const filteredContent = productsData
        .filter((item) => state.categoriesId.length > 0 ? state.categoriesId.some((id) => item.categoryId === id) : true)
        .filter((item) => state.size ? item.size.some(size => size === +state.size) : true)
        .map((productContent) => createProduct(productContent));

    sortingProducts(filterState.sortingId, filteredContent)
    products.append(...filteredContent);
}

function sortingProducts(sortingIndex, products) {

    switch (sortingIndex) {
        case 1:
            products.sort((a, b) => {
                const priceA = a.querySelector('.product-price').innerHTML;
                const priceB = b.querySelector('.product-price').innerHTML;
                return priceA.match(/\d+/) - priceB.match(/\d+/);
            })
            break;
        case 2:
            products.sort((a, b) => {
                const priceA = a.querySelector('.product-price').innerHTML;
                const priceB = b.querySelector('.product-price').innerHTML;
                return priceB.match(/\d+/) - priceA.match(/\d+/);
            })
            break;
        case 3:
            products.sort((a, b) => {
                const nameA = a.querySelector('.product-name').innerHTML;
                const nameB = b.querySelector('.product-name').innerHTML;
                return nameA.localeCompare(nameB);
            })
            break;
        case 4:
            products.sort((a, b) => {
                const nameA = a.querySelector('.product-name').innerHTML;
                const nameB = b.querySelector('.product-name').innerHTML;
                return nameB.localeCompare(nameA);
            })
            break;
        case 5:
            products.sort((a, b) => {
                const aNew = a.querySelector('.label-new');
                const bNew = b.querySelector('.label-new');
                if (aNew && !bNew) {
                    return 1;
                } else if (!aNew && bNew) {
                    return -1;
                } else {
                    return 0;
                }
            })
            break;
        case 6:
            products.sort((a, b) => {
                const aNew = a.querySelector('.label-new');
                const bNew = b.querySelector('.label-new');
                if (aNew && !bNew) {
                    return -1;
                } else if (!aNew && bNew) {
                    return 1;
                } else {
                    return 0;
                }
            })
            break;
        default:
            console.log(sortingIndex);
            break;
    }
}