export const products = {
    pageName: 'products',
    layout: `<div> 
    <p id="p1">Products</p> 
    <div id="products"></div>

    </div>`,

    componentMount() {
        const p1 = document.getElementById('p1');
        const productsList = Array.from(document.getElementsByClassName('product'))

        p1.addEventListener('click', testFunc)

        productsList.forEach((product) => {

            product.addEventListener('click', productFunc)
        })
    },

    componentUnmount() {
        const p1 = document.getElementById('p1');
        const productsList = Array.from(document.getElementsByClassName('product'))

        p1.removeEventListener('click', testFunc)

        productsList.forEach((product) => {
            product.removeEventListener('click', productFunc)
        })
    }
}

function testFunc() {
    console.log(this)
}

function productFunc() {
    const productName = this.querySelector('.product-name').innerHTML

    document.dispatchEvent(new CustomEvent('productRender', {
        bubbles: true,
        detail: {
            component: 'product',
            url: productName
        }
    }))

}

