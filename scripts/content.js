import content from "../constants/productsContent.js";
import {activeCategoryId} from "./filter.js";


let products = document.getElementById('products');

createContent();


function createProduct(productContent) {
    const product = document.createElement('div');
    product.className = 'product';

    const productImg = document.createElement('img');
    productImg.src = productContent.productImg;
    productImg.className = 'product-photo'

    const productName = document.createElement('div');
    productName.innerHTML = productContent.productName;
    productName.className = 'product-name';

    const productPrice = document.createElement('div');
    productPrice.innerHTML = productContent.productPrice;
    productPrice.className = 'product-price';

    product.dataset.category = productContent.categoryId;

    if (productContent.new) {
        const label = document.createElement('div');
        label.innerHTML = 'NEW';
        label.className = 'label-new'
        product.append(label);
    }


    product.append(productImg);
    product.append(productName);
    product.append(productPrice);

    return product;
}

function createContent() {
    products.innerHTML = '';
    const filter = content.filter( (item) => activeCategoryId ? item.categoryId === +activeCategoryId : true);
    filter.forEach((productContent) => {
            const product = createProduct(productContent);
            products.append(product);
        })
}

document.addEventListener('active-category', () => {
    createContent();
});


