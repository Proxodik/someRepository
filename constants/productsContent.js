import {createContentData} from "../tools/createdContentData.js";
import {productsPrices} from "./productsPrice.js";
import {productNames} from "./productsNames.js";
import {productsPhotoSrc} from "./productsPhotoSrc.js";
const productsSizes = [
    [1, 2, 3, 4],
    [1, 2],
    [3, 4],
    [1, 3],
    [2, 4],
    [1, 4],
    [2, 3],
    [1, 2, 3],
    [2, 3, 4],
    [1, 2, 4],
    [1, 3, 4],
    [2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3],
    [2, 3, 4],
    [1, 2, 4],
    [1, 3, 4],
    [2, 4],
    [3],
    [1],
];

const newContent = createContentData(5,productNames,productsPhotoSrc, productsPrices, productsSizes);

export {newContent};





