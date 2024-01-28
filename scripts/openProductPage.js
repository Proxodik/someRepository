const products = document.querySelector('#products');

products.addEventListener('click', (event) => {
    if (!event.target.closest('.product')) return;

    const data = {page: document.querySelector('.page-content').innerHTML};
    window.history.pushState(data,'', 'product');

    document.dispatchEvent(new CustomEvent('renderPage', {
        bubbles: true,
    }))

})



