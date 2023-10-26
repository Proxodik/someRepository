import {createElement} from "./creatingElements.js";

export function createSelectedCategoryLabel(category) {
    const selectedCategory = createElement({tag: 'label', className: 'selectedCategory', id: category.target.value});
    const name = createElement({tag: 'span', innerHTML: category.target.value,});
    const close = createElement({tag: 'span', innerHTML: 'x', className: 'close-category'});
    selectedCategory.append(name,close);
    return selectedCategory;
}