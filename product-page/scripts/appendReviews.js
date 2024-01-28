import {createReviews} from "../tools/createReviews.js";

const reviewsContainer = document.querySelector('.comments')

fetch('/product-page/assets/reviews.json')
    .then((response) => response.json())
    .then((data) => reviewsContainer.append(...createReviews(data)) )




