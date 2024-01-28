import {createCrumbs} from "../tools/createCrumbs.js";
import {createSlider} from "../tools/createSlider.js";
import {createProductInfo} from "../tools/createProductInfo.js";
import {createAddInfo} from "../tools/createAddInfo.js";
import {createReviews} from "../tools/createReviews.js";
import {appendSizes} from "./appendSizes.js";

import {orderComponent} from "../order.js";
// import {sliderComponent} from "./slider.js";

fetch('/product-page/assets/productPageInfo.json')
    .then((res) => res.json())
    .then((data) => pageData = data)



let pageData;

document.addEventListener('renderPage', (event) => {
    renderPage(pageData)
})


window.addEventListener('popstate', (event) => {
    renderPage(pageData)
})

const pageContent = document.querySelector('.page-content');


function renderPage(data) {
    document.dispatchEvent(new CustomEvent('removeProductsScroll'));


    if (window.location.pathname.search('/product') != -1) {
        pageContent.innerHTML = productHTML;

        const productSlider = document.querySelector('.product-slider');
        const reviewsContainer = document.querySelector('.comments');
        const bar = document.querySelector('.bar');
        const productInfo = document.querySelector('.product-info');
        const addInfo = document.querySelector('.add-Info')

        productSlider.insertAdjacentHTML('afterbegin', createSlider(data.slider))

        document.dispatchEvent(new CustomEvent('sliderData', {
            bubbles: true,
            detail: data.slider,
        }))


        reviewsContainer.append(...createReviews(data.reviews))
        bar.insertAdjacentHTML( 'afterbegin', createCrumbs(data.crumbs))
        productInfo.insertAdjacentHTML('afterbegin', createProductInfo(data.productInfo))
        addInfo.insertAdjacentHTML('afterbegin', createAddInfo(data.addInfo));

        appendSizes()
        orderComponent.render();
    } else {
        pageContent.innerHTML = productsHTML;

        document.dispatchEvent(new CustomEvent('productsRender', {
            bubbles: true,
            detail: {categoriesId: [], size: 1}
        }))
        document.dispatchEvent(new CustomEvent('categories'));
        document.dispatchEvent(new CustomEvent('label'));
        document.dispatchEvent(new CustomEvent('sizeButtons'));
        document.dispatchEvent(new CustomEvent('productsScroll'));

        const products = document.querySelector('#products');

        products.addEventListener('click', (event) => {
            if (!event.target.closest('.product')) return;

            const data = {page: document.querySelector('.page-content').innerHTML};
            window.history.pushState(data,'', 'product');

            document.dispatchEvent(new CustomEvent('renderPage', {
                bubbles: true,
            }))

        })
    }
}

const productsHTML = `<div class="bar">
        <div class="bread-crumbs">
            <a href="#">Woman</a>
        </div>
        <div class="sorting">
            <span class="sortBy">Sort by</span>
            <label>
                <select class="options">
                    <option value="select" selected disabled>select</option>
                    <option value="low_to_high">Price, Low to High</option>
                    <option value="high_to_low">Price, high to low</option>
                    <option value="a_z">Alph. a-z</option>
                    <option value="z_a">Alph. z-a</option>
                    <option value="old_to_new">Date, old to new</option>
                    <option value="new_to_old">Date, new to old</option>
                </select>
            </label>
        </div>
    </div>
    <div class="filter-and-products">
        <div class="filter">
            <div class="filter-header">
                <div class="selectedCategoriesWrapper">
                    <span>filters:</span>
                    <div class="selectedCategories"></div>
                </div>
                <button type="reset" class="reset">reset</button>
            </div>
            <div class="categories"></div>
            <div class="size-filter">
                <span>- SIZES</span>
                <div class="sizes">
                    <button class="size-button active" value = '1'>1</button>
                    <button class="size-button">2</button>
                    <button class="size-button">3</button>
                    <button class="size-button">4</button>
                </div>
                <a href="#" class="sizing-guide-link">SEE OUR SIZING GUIDE</a>
            </div>
        </div>
        <div id="content">
            <div id="products"></div>

            <div class="loading">
                <img src="/img/Spinner-1s-200px.svg" alt="loading" width="25" height="25">
                <span>LOADING</span>
            </div>

        </div>
    </div>`


const productHTML = `<div class="bar">
    <div class="bread-crumbs"></div>
</div>

<div class="product-wrapper">

    <div class="photos-and-links">
        <div class="product-slider"></div>
        <div class="share-links">
            <p>Share this product</p>
        </div>
    </div>

    <div class="product-info">
        <div class="product-details"></div>

        <div class="companyInfo"></div>

        <div class="order-options">
            <div class="sizes-container">
                <p class="size-title">Size</p>

<!--                <div class="size-buttons">-->
<!--                    <button class="size-button active" value = '1'>1</button>-->
<!--                    <button class="size-button">2</button>-->
<!--                    <button class="size-button">3</button>-->
<!--                    <button class="size-button">4</button>-->
<!--                </div>-->

                <a class="size-guide" href="https://www.google.com/">Size Guidelines</a>
                <p class="size-description">Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.</p>
            </div>

            <div class="quantity">
                <p class="quantity-title">Quantity</p>
                <div class="quantity-input">
                    <span class="minus-btn">
                        <span class="minus"></span>
                    </span>
                    <input id="productAmountInput" type="number" min="1" value="1">
                    <span class="plus-btn">
                         <div class="plus"><span></span></div>
                    </span>
                </div>
                <button class="add-to-cart">Add to cart</button>
                <button class="add-to-wishlist">Add to wishlist</button>
            </div>

            <div class="features">
                <p class="features-header">Features</p>
            </div>

            <div class="fabric-care">
                <p class="fabric-care-header">Fabric Care</p>
                <div class="fabric-care-list"></div>
            </div>
        </div>
    </div>
</div>
<div class="add-Info"></div>

<div class="reviews">
    <p class="reviews-header">Customer Reviews</p>

    <div class="reviews-details">
        <div class="rating">
            <img src="../product-page/icons/stars.png" alt="">
            <p class="rating-number">4.8 of 5</p>
        </div>
        <div class="write-review">
            <p class="write-review-title" >Share your thoughts with other customers</p>
            <button class="write-review-button">Write a review</button>
        </div>
    </div>

    <p class="top-reviews-title">Top Customers Reviews</p>

    <div class="comments"></div>

    <button class="more-reviews-button">Show more reviews</button>
</div>

<div class="recommendation"></div>
`