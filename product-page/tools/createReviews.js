import {createElement} from "../../tools/creatingElements.js";

export function createReviews(reviewsList) {
    const reviews = reviewsList.map((reviewData) => {
        const review = createElement({tag: 'div', className: 'review'});

        const reviewRating = createElement({tag: 'div', className: 'review-rating'});
        const reviewRatingStars = createElement({tag:'img', src:"/product-page/icons/stars.png"});
        const reviewRatingNumber = createElement({tag: 'p', innerHTML: `${reviewData.rating} of 5`})

        reviewRating.append(reviewRatingStars, reviewRatingNumber);

        const userDetails = createElement({tag: 'div', className: 'review-user-details'})

        const reviewUser = createElement({tag: 'p', innerHTML: `By ${reviewData.username}`});
        const reviewDate = createElement({tag:'p', innerHTML: `on ${reviewData.date}`});
        userDetails.append(reviewUser, reviewDate)

        const reviewText = createElement({tag: 'p', innerHTML: reviewData.text})

        review.append(reviewRating, userDetails, reviewText)

        return review
    })
    return reviews
}
