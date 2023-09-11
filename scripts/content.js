const products = document.getElementById('products');

const content = [
    {
        productName: 'Pueraria Mirifica And Study Phyto Estrogens',
        productImg: 'img/product-name.png',
        productPrice: '$599.00'
    },
    {
        productName: 'Pueraria Mirifica And Study Phyto Estrogens',
        productImg: 'img/product-name.png',
        productPrice: '$599.00'
    },
    {
        productName: 'Pueraria Mirifica And Study Phyto Estrogens',
        productImg: 'img/product-name.png',
        productPrice: '$599.00'
    },
];

content.forEach((productContent) => {
    const product = createProduct(productContent);
    products.prepend(product);
})

function createProduct(productContent) {
    const product = document.createElement('div');
    product.className = 'scriptProduct';

    const productImg = document.createElement('img');
    productImg.src = productContent.productImg;

    const productName = document.createElement('div');
    productName.innerHTML = productContent.productName;
    productName.className = 'product-name'

    const productPrice = document.createElement('div');
    productPrice.innerHTML = productContent.productPrice;
    productPrice.className = 'product-price'

    product.append(productImg);
    product.append(productName);
    product.append(productPrice);

    return product;
}
