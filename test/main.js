import {products} from "./productsPage.js";
import {product} from "./productPage.js";
import {appendProducts} from "./appendProducts.js";

const content = document.getElementById('content');

products.componentMount()

window.addEventListener('popstate', (event) => {

    if (window.location.pathname.search('product') !== -1) {
        router.renderPage('product')
    } else {
        router.renderPage('products')
    }

})

document.addEventListener('productRender', (event) => {
    window.history.pushState({}, '', `product/${event.detail.url}`)
    router.renderPage(event.detail.component)
})

class Router {
    prevComponents = [products];

    productsComponents = [products];
    productComponents = [product];

    renderPage(pageName) {
        switch (pageName) {
            case 'products':
                renderClass.render(this.productsComponents, this.prevComponents);
                this.prevComponents = this.productsComponents
                break;
            case 'product':
                renderClass.render(this.productComponents, this.prevComponents);
                this.prevComponents = this.productComponents;
                break;
            default:
                renderClass.render(this.productsComponents, this.prevComponents);
                this.prevComponents = this.productsComponents;
                break;
        }
    }
}

class Render {

    componentsUnmount(components) {
        components.forEach((comp) => comp.componentUnmount())
    }

    renderContent(components) {
        content.innerHTML = components.reduce((acc, comp) => acc + comp.layout, '');

        if (components.includes(products)) {
            this.componentContent('products')
        }

    }

    componentContent(components) {
        switch (components) {
            case 'products': appendProducts();
        }

    }

    componentsMount(components) {
        components.forEach((comp) => comp.componentMount())
    }

    render(components, prevComponents) {
        this.componentsUnmount(prevComponents);
        this.renderContent(components);
        this.componentsMount(components);
    }
}

const renderClass = new Render();
const router = new Router();








