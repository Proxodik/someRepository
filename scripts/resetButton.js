import {filterState} from "./filterState.js";
const resetButton = document.getElementsByClassName('reset')[0];

resetButton.setAttribute('form', 'categoriesForm');

// resetButton.addEventListener('click', () => {
//     document.dispatchEvent(new CustomEvent('resetButtonClick', {
//         bubbles: true,
//     }))
//     filterState.resetCategories()
// })

