import {productsState} from "./productsState.js";
import {createElement} from "../tools/creatingElements.js";

const products = document.getElementById('products');
const breadCrumbs = document.querySelector('.bread-crumbs');
const btnUp = document.querySelector('.btnUp');

btnUp.addEventListener('click', () => window.scrollTo({top: 0}))

products.addEventListener('click', (event) => {
    const product = event.target.closest('.product');
    if (!product) return;

    const productName = product.querySelector('.product-name').innerHTML;

    const productCrumb = createElement({tag: 'a', innerHTML: productName, href: productName});


    document.dispatchEvent(new CustomEvent('updateCrumbs', {
        bubbles: true,
        detail: {categoryId: product.dataset.categoryId}
    }))

    breadCrumbs.append(' > ', productCrumb)
})



