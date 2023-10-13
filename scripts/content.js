import {content} from "../constants/productsContent.js";
import {createElement} from "../tools/creatingElements.js";
import {filtersState} from "./filter.js";

const products = document.getElementById('products');

createContent(filtersState);

document.addEventListener('filters', (event) => createContent(event.detail));

function createProduct(productContent) {

    const product = createElement({tag: 'div', className: 'product'});

    const productImg = createElement({tag: 'img', src: productContent.productImg, className: 'product-photo'});

    const productName = createElement({tag: 'p', innerHTML: productContent.productName, className: 'product-name'});

    const productPrice = createElement({
        tag: 'span',
        innerHTML: productContent.productPrice,
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
    const filteredContent = content
        .filter((item) => state.categoryId.length > 0 ? state.categoryId.some((id) => item.categoryId === id) : true)
        .filter((item) => state.size ? item.size.some(size => size === +state.size) : true)
        .map((productContent) => createProduct(productContent));

    products.append(...filteredContent);

}








