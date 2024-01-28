
const productsData = [{
    name: 'Product1',
    imgSrc: '/product-page/img/sliderPhotos/Bitmap(Small).png',
    price: 99,
},{
    name: 'Product2',
    imgSrc: '/product-page/img/sliderPhotos/Bitmap2(Small).png',
    price: 79,
}, {
    name: 'Product3',
    imgSrc: '/product-page/img/sliderPhotos/Bitmap3(Small).png',
    price: 129,
}]




export function appendProducts() {
    const products = document.getElementById('products');


    productsData.map((productData) => {
        const container = document.createElement('div');
        container.className = 'product';

        const productName = document.createElement('p');
        productName.className = 'product-name';
        productName.innerHTML = productData.name;

        const productImg = document.createElement('img');
        productImg.src = productData.imgSrc;
        productImg.alt = productData.name;

        const productPrice = document.createElement('p');
        productPrice.className = 'price';
        productPrice.innerHTML = '$' + productData.price;

        container.append(productName, productImg, productPrice);

        products.append(container)
    })
    return products;
}

appendProducts()

