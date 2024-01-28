export function appendSizes() {
    const sizesTitle = document.querySelector('.size-title');

    const sizesHTMLComponent = `<div class="size-buttons">
                    <button class="size-button">1</button>
                    <button class="size-button">2</button>
                    <button class="size-button">3</button>
                    <button class="size-button">4</button>
                </div>`

    sizesTitle.insertAdjacentHTML('afterend', sizesHTMLComponent)
}

