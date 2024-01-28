let productData;


fetch('/product-page/assets/product1.json')
    .then(response => response.json())
    .then((data) => orderComponent.productData = data)



export const orderComponent = {
    productQuantity: 1,
    productData,


    render() {
        this.sizes();
        this.plusBtn();
        this.minusBtn();
        this.quantityInputChange();
        this.featuresTitle();
        this.fabricTitle();

    },
    sizes() {
        const quantityInput = document.getElementById('productAmountInput');

        const sizeButtons = document.querySelector('.size-buttons');

        Array.from(sizeButtons.children).forEach((sizeButton) => {
            sizeButton.disabled = this.productData.quantity[sizeButton.innerHTML] === 0;
        })

        const activeSize = document.querySelector('.size-button:not([disabled])');
        activeSize.classList.add('active');
        this.productQuantity = this.productData.quantity[activeSize.innerHTML];

        sizeButtons.addEventListener('click', (event) => {
            if (!event.target.classList.contains('size-button')) return;

            const activeButton = document.getElementsByClassName('active')[0];
            activeButton && activeButton.classList.remove('active');
            event.target.classList.add('active');

            const size = event.target.innerHTML;
            quantityInput.value = 1;
            this.productQuantity = this.productData.quantity[size];
        })
    },

    plusBtn() {
        const quantityInput = document.getElementById('productAmountInput');

        const plusBtn = document.querySelector('.plus-btn');

        plusBtn.addEventListener('click', () => {

            if (quantityInput.value < this.productQuantity) {
                quantityInput.value = +quantityInput.value + 1
            } else {
                quantityInput.value = this.productQuantity
            }

        })
    },

    minusBtn() {
        const quantityInput = document.getElementById('productAmountInput');

        const minusBtn = document.querySelector('.minus-btn');


        minusBtn.addEventListener('click', () => {

            if (quantityInput.value > 1) {
                quantityInput.value = +quantityInput.value - 1
            } else {
                quantityInput.value = 1;
            }

        })
    },

    quantityInputChange() {
        const quantityInput = document.getElementById('productAmountInput');

       quantityInput.addEventListener('change', () => (quantityInput.value > this.productQuantity) && (quantityInput.value = this.productQuantity))
    },

    featuresTitle() {
        const featuresTitle = document.querySelector('.features-header');

        featuresTitle.addEventListener('click', (event) => event.target.classList.toggle('opened'))
    },

    fabricTitle() {
        const fabricTitle = document.querySelector('.fabric-care-header');

        fabricTitle.addEventListener('click', (event) => event.target.classList.toggle('opened'))
    }
}

















