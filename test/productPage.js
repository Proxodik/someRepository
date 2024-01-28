export const product = {
    pageName: 'product',
    layout: `<div> 
    <p id="p2">Product</p> 
    <div id="product">
        <div id="slider">
            <img src="/product-page/img/sliderPhotos/Bitmap(Big).png" alt="">
        </div>
        
        <div id="productInfo">
            <p>Sideswept Dhoti</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quisquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quisquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quisquam.</p>
                    
            <div id="sizes">
                <button class="size-button">1</button>
                <button class="size-button">2</button>
                <button class="size-button">3</button>
            </div>
            
            <button id="buy-btn">Buy</button>
            <button id="add-to-card-btn">Add to card</button>
        </div>
        
    </div>
    
</div>`,


    componentMount() {
        const p2 = document.getElementById('p2');
        const sizeButtons = Array.from(document.getElementsByClassName('size-button'))
        const cardBtn = document.getElementById('add-to-card-btn');
        const buyBtn = document.getElementById('buy-btn');

        buyBtn.addEventListener('click', buyProduct);

        cardBtn.addEventListener('click', addToCard)

        sizeButtons.forEach((btn) => {
            btn.addEventListener('click', sizesFunc);
        })

        p2.addEventListener('click', testFunc)
    },

    componentUnmount() {
        const p2 = document.getElementById('p2');
        const sizeButtons = Array.from(document.getElementsByClassName('size-button'))
        const cardBtn = document.getElementById('add-to-card-btn');
        const buyBtn = document.getElementById('buy-btn');

        p2.removeEventListener('click', testFunc)

        sizeButtons.forEach((btn) => {
            btn.removeEventListener('click', sizesFunc)
        })

        buyBtn.removeEventListener('click', buyProduct);
        cardBtn.removeEventListener('click', addToCard)
    }

}

function sizesFunc() {
    console.log(this.innerHTML)
}

function buyProduct() {
    alert('product purchased')
}

function addToCard() {
    alert('product added to cart')
}

function testFunc() {
    console.log(this)
}

