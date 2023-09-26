
export function createContentData(amountCategories, productNames, productPhotoSrc, productsPrices, productsSizes) {
    const content = [];
    let categoryId = 1;
    const amountProducts = Math.min(productPhotoSrc.length, productNames.length, productsPrices.length, productsSizes.length);
    for (let i = 0; i < amountProducts; i++) {
        const data = {};
        data.id = i + 1;

        if (categoryId > amountCategories) categoryId = 1;
        data.categoryId = categoryId;

        data.new = Math.random() > 0.5;

        data.productName = productNames[i];

        data.productImg = productPhotoSrc[i];

        data.productPrice = '$' + productsPrices[i].toFixed(2);

        data.dateCreation = Date.now();

        data.size = productsSizes[i];

        content.push(data);
        categoryId++;
    }
    return content;
}