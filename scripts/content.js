import content from "../constants/productsContent.js";

const products = document.getElementById('products');

content.forEach((productContent) => {
    const product = createProduct(productContent);
    products.prepend(product);
})

function createProduct(productContent) {
    const product = document.createElement('div');
    product.className = 'product';

    const productImg = document.createElement('img');
    productImg.src = productContent.productImg;

    const productName = document.createElement('div');
    productName.innerHTML = productContent.productName;
    productName.className = 'product-name';

    const productPrice = document.createElement('div');
    productPrice.innerHTML = productContent.productPrice;
    productPrice.className = 'product-price';

    product.dataset.category = productContent.category;
    product.dataset.subCategory = productContent.subCategory;
    product.dataset.subSubCategory = productContent.subSubCategory;

    product.append(productImg);
    product.append(productName);
    product.append(productPrice);

    return product;
}
