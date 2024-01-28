export function sortingProducts(sortingValue, products) {

    switch (sortingValue) {
        case 'low_to_high':
            products.sort((a, b) => {
                const priceA = a.querySelector('.product-price').innerHTML;
                const priceB = b.querySelector('.product-price').innerHTML;
                return priceA.match(/\d+/) - priceB.match(/\d+/);
            })
            break;
        case 'high_to_low':
            products.sort((a, b) => {
                const priceA = a.querySelector('.product-price').innerHTML;
                const priceB = b.querySelector('.product-price').innerHTML;
                return priceB.match(/\d+/) - priceA.match(/\d+/);
            })
            break;
        case 'a_z':
            products.sort((a, b) => {
                const nameA = a.querySelector('.product-name').innerHTML;
                const nameB = b.querySelector('.product-name').innerHTML;
                return nameA.localeCompare(nameB);
            })
            break;
        case 'z_a':
            products.sort((a, b) => {
                const nameA = a.querySelector('.product-name').innerHTML;
                const nameB = b.querySelector('.product-name').innerHTML;
                return nameB.localeCompare(nameA);
            })
            break;
        case 'old_to_new':
            products.sort((a, b) => {
                const aNew = a.querySelector('.label-new');
                const bNew = b.querySelector('.label-new');
                if (aNew && !bNew) {
                    return 1;
                } else if (!aNew && bNew) {
                    return -1;
                } else {
                    return 0;
                }
            })
            break;
        case 'new_to_old':
            products.sort((a, b) => {
                const aNew = a.querySelector('.label-new');
                const bNew = b.querySelector('.label-new');
                if (aNew && !bNew) {
                    return -1;
                } else if (!aNew && bNew) {
                    return 1;
                } else {
                    return 0;
                }
            })
            break;
        default:
            console.log(sortingValue);
            break;
    }
}