import {filterState} from "./filterState.js";

document.addEventListener('sizeButtons', sizeButtonsEvent)

function sizeButtonsEvent() {
    const sizesButtons = document.getElementsByClassName('sizes')[0];

    sizesButtons.addEventListener('click', (event) => {
        if (!event.target.classList.contains('size-button')) return;

        const activeButton = document.getElementsByClassName('active')[0];
        activeButton && activeButton.classList.remove('active');
        event.target.classList.add('active');

        filterState.updateFilterState({size: +event.target.innerHTML})
    })
}
sizeButtonsEvent()




