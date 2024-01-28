export function createProductInfo(data) {

    const featuresContainer = document.querySelector('.features');
    let featureLinks = ''

    for (let info in data.helpfulInfo.features) {
        featureLinks += `<a href=${data.helpfulInfo.features[info]}>${info}</a>`
    }
    featuresContainer.insertAdjacentHTML('beforeend', featureLinks)

    const fabricContainer = document.querySelector('.fabric-care');
    let fabricInfo = ''

    for (let info in data.helpfulInfo.fabricCare) {
        fabricInfo += `<p>${info}</p> <p>${data.helpfulInfo.fabricCare[info]}</p>`
    }
    fabricContainer.insertAdjacentHTML('beforeend', fabricInfo)

    const productInfo = `<div class="product-details">
            <p class="product-name">${data.productName}</p>

            <div class="price-and-rating">
                <p class="product-price">${data.currency} ${data.price}</p>

                <div class="product-rating">
                    <img src="/product-page/icons/stars.png" alt="stars">
                    <p class="rating-number">4.8 of 5</p>
                </div>
            </div>

        </div>

        <div class="product-description">
            <p class="description-title">Description</p>
            <p class="description-text">${data.description}</p>
            <a href="#" class="see-more">SEE MORE</a>
        </div>

        <div class="companyInfo">
            <div>
                <p>Artisan Employment</p>
                <p>${data.companyInfo.info1}</p>
            </div>

            <div>
                <p>Partnership</p>
                <p>${data.companyInfo.info2}</p>
            </div>

            <div>
                <p>In Collab</p>
                <p>${data.companyInfo.info3}</p>
            </div>
         </div>`
    return productInfo;
}