import {createContentData} from "../tools/createdContentData.js";
import {productsPrices} from "./productsPrice.js";
import {productNames} from "./productsNames.js";
import {productsPhotoSrc} from "./productsPhotoSrc.js";

function createProductSizes(quantity) {
    const sizesArray = [];
    for (let i = 0; i < quantity; i++) {
        const sizeArray = [];
        const sizeArrayLength = Math.floor(Math.random() * 4 + 1);

        while (sizeArray.length < sizeArrayLength) {
            const size = Math.floor(Math.random() * 4 + 1);

            if (!sizeArray.includes(size)) {
                sizeArray.push(size);
            }
        }
        sizesArray.push(sizeArray);
    }
    return sizesArray;
}



const productsSizes = createProductSizes(15);

const content = createContentData(5,productNames,productsPhotoSrc, productsPrices, productsSizes);

export {content};





