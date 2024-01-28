import {filterState} from "./filterState.js";
import {createProduct} from "../tools/createProduct.js";
import {sortingProducts} from "../tools/sortingProducts.js";

const products = document.getElementById('products');


fetch('/assets/productsData.json')
    .then(response => response.json())
    .then(data => {
        productsData = data;
        productsState.createContent(filterState);
        products.append(...productsState.products.slice(0, 12))
    })

let productsData = [];

class ProductsState {
    constructor(products, group) {
        this.products = products;
        this.group = group
    }

    createContent(state) {
        productsState.group = 1;
        const filteredContent = productsData
            .filter((item) => state.categoriesId.length > 0 ? state.categoriesId.some((id) => item.categoryId === id) : true)
            .filter((item) => state.size ? item.size.some(size => size === +state.size) : true)
            .map((productContent) => createProduct(productContent));

        sortingProducts(filterState.sortingValue, filteredContent)
        productsState.products = filteredContent;
        return filteredContent;
    }

    addContent() {
        const start = productsState.group - 1;
        const end = productsState.group;

        return productsState.products.slice(12 * start, 12 * end);
    }
}

document.addEventListener('removeProductsScroll', () => {
    document.removeEventListener('scroll', scrollFunc)
})

document.addEventListener('scroll', scrollFunc)

document.addEventListener('productsScroll', () => document.addEventListener('scroll', scrollFunc));




document.addEventListener('productsRender', (event) => { //products render
    const products = document.getElementById('products');

    products.innerHTML = '';
    productsState.createContent(event.detail);
    products.append(...productsState.products.slice(0, 12 * productsState.group));
});

let listenScroll = true;


function scrollFunc() {
    const products = document.getElementById('products');
    const loading = document.querySelector('.loading');

    if (listenScroll) {
        if (products.children.length !== productsState.products.length) {
            if (window.scrollY >= products.clientHeight) {
                listenScroll = false;
                loading.style.display = 'flex';

                setTimeout(() => {
                    productsState.group++;
                    products.append(...productsState.addContent());

                    loading.style.display = 'none';
                    listenScroll = true;
                }, 2000)
            }
        }
    }
}


const productsState = new ProductsState(productsData, 1);

export {productsState}