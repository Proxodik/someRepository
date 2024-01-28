import {createElement} from "./creatingElements.js";

function createProduct(productContent) {

    const product = createElement({tag: 'div', className: 'product'});
    product.dataset.categoryId = productContent.categoryId;

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

export {createProduct}