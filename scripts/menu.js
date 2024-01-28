import filters from "../constants/filters.js";
import {createElement} from "../tools/creatingElements.js";
import {filterState} from "./filterState.js";
import {createSelectedCategoryLabel} from "../tools/createSelectedCategoryLabel.js";
import {categoryNames} from "../constants/categoryNames.js";

const selectedCategoriesList = document.getElementsByClassName('selectedCategories')[0];
const filterCategories = document.querySelector('.categories');
const sorting = document.querySelector('.sorting');


let crumbs = ['Woman'];
let categoryCrumbs = [];


document.addEventListener('categories', () =>{
    categoriesComponent.appendCategories();
    categoriesComponent.componentMount();
    crumbs = ['Woman'];
    categoryCrumbs = [];
})

const categoriesComponent = {
    filterCategories: document.querySelector('.categories'),
    selectedCategoriesList: document.getElementsByClassName('selectedCategories')[0],

    appendCategories() {
        const filterCategories = document.querySelector('.categories')
        const categoriesForm = createElement({tag: 'form', name: 'categories', id: 'categoriesForm'})
        filterCategories.append(categoriesForm)

        filters.forEach(({name, items}) => {
            const category = createElement({tag: 'div', className: 'categoryContainer'});

            const categoryName = createElement({tag: 'span', className: 'category', innerHTML: name});

            const categorySections = createElement({tag: 'div', className: 'category-sections'})

            category.append(categoryName, categorySections);

            items.forEach(({name, items}) => {
                const subCategorySections = createElement({tag: 'div', className: 'sub-category-inputs'});

                const subCategory = createElement({tag: 'div', className: 'category-section'});

                const subCategoryName = createElement({tag: 'span', className: 'sub-category', innerHTML: name});

                subCategory.append(subCategoryName, subCategorySections);
                categorySections.append(subCategory);

                items.forEach((item) => {
                    const categoryInput = createElement({tag: 'input', type: 'checkbox', className: 'category-input', value: item.name, name: item.name});
                    const categoryLabel = createElement({tag: 'label', className: 'category-label', id: item.name});
                    const categoryLabelText = createElement({tag: 'p', innerHTML: item.name , className: 'category-input-text'});
                    categoryInput.dataset.categoryId = item.id;
                    categoryLabel.append(categoryInput, categoryLabelText );
                    subCategorySections.append(categoryLabel);
                });
            });

            categoriesForm.append(category);
        })
    },

    componentMount() {
        this.categoriesEvent()
        this.categoriesChange()
        this.resetBtn()
        this.labelsEvent()
        sortingEvent()


    },

    categoriesEvent() {
        const filterCategories = document.querySelector('.categories');
        filterCategories.addEventListener('click', this.categoriesEventFunc)
    },
    categoriesChange() {
        const selectedCategoriesList = document.getElementsByClassName('selectedCategories')[0];

        const categories = document.getElementById('categoriesForm');
        categories.addEventListener('change', (e) => {
            const categoryId = +e.target.dataset.categoryId;
            if (e.target.checked) {
                categoryCrumbs.unshift(e.target.value);

                filterState.updateFilterState({categoryId})
                const selectedCategory = createSelectedCategoryLabel(e);
                selectedCategoriesList.append(selectedCategory);

            }else {
                const selectedCategory = selectedCategoriesList.querySelector(`.selectedCategory[id ="${e.target.value}"]`);
                filterState.spliceCategoryId(categoryId);
                categoryCrumbs.splice(categoryCrumbs.indexOf(e.target.value), 1);
                selectedCategory.remove();
            }
            updateCrumbs(crumbs, categoryCrumbs);

        })
    },
    resetBtn() {
        const resetButton = document.getElementsByClassName('reset')[0];

        resetButton.setAttribute('form', 'categoriesForm');

        resetButton.addEventListener('click', () => {
            const selectedCategoriesList = document.querySelector('.selectedCategories');
            selectedCategoriesList.innerHTML = '';
            filterState.resetCategories()
            crumbs = ['Woman'];
            categoryCrumbs = [];
            updateCrumbs(crumbs, categoryCrumbs);
        })
    },
    labelsEvent() {
        document.addEventListener('labelClick', (label) => {
            label = label.detail;
            categoryCrumbs.splice(categoryCrumbs.indexOf(label.id), 1);
            updateCrumbs(crumbs, categoryCrumbs);

            const filterCategories = document.querySelector('.categories');
            const categoryInput = filterCategories.querySelector(`.category-input[value ="${label.id}"]`);

            categoryInput.checked = false;
            label.remove();
        })
    },

    categoriesEventFunc(event) {
        if (!(event.target instanceof HTMLElement)) return;
        event.target.classList.toggle('open');

        if (event.target.classList.contains('category-input') || event.target.classList.contains('category-input-text')) return;

        if (event.target.classList.contains('open')) {
            crumbs.push(event.target.innerHTML);
        }else {
            const crumbId = crumbs.indexOf(event.target.innerHTML)
            if (crumbId !== -1) crumbs.splice(crumbId, 1);
        }
        updateCrumbs(crumbs, categoryCrumbs)
    }

}

categoriesComponent.appendCategories();
categoriesComponent.componentMount();

const breadCrumbs = document.querySelector('.bread-crumbs');

document.addEventListener('updateCrumbs', (data) => {
    const categoryId = data.detail.categoryId;
    const categoryName = categoryNames[categoryId];

    const categoryCrumbId = categoryCrumbs.indexOf(categoryName)

    if (categoryCrumbId !== -1) {
        categoryCrumbs.splice(categoryCrumbId, 1);
        categoryCrumbs.unshift(categoryName);
        updateCrumbs(crumbs, categoryCrumbs);
    } else {
        updateCrumbs(crumbs, categoryCrumbs);
        const categoryCrumb = createElement({tag: 'a', innerHTML: categoryName})
        categoryCrumb.style.color = 'orange'
        breadCrumbs.append('>', categoryCrumb)
    }
});

function updateCrumbs(crumbs, categoryCrumbs) {
    const breadCrumbs = document.querySelector('.bread-crumbs');

    breadCrumbs.innerHTML = '';
    crumbs.forEach((crumb) => {
        const crumbLink = createElement({tag: 'a', href: '#', innerHTML: crumb});
        crumb === crumbs[0] ? breadCrumbs.append(crumbLink) : breadCrumbs.append(' > ', crumbLink)
    })
    if (categoryCrumbs.length !== 0) {
        const categoryCrumbsContainer = createElement({tag: 'div', className: 'category-crumbs-container'});

        categoryCrumbs.forEach((categoryCrumb) => {
            const crumb = createElement({tag: 'a', href: categoryCrumb, innerHTML: categoryCrumb});
            categoryCrumbsContainer.append(crumb);
        })

        breadCrumbs.append(' > ', categoryCrumbsContainer)
    }
}

function sortingEvent() {
    const sorting = document.querySelector('.sorting');

    sorting.addEventListener('change', (e) => {
        filterState.updateFilterState({sortingId: e.target.value})
    })
}
sortingEvent()





//-------Creating and append categories---------
// function appendCategories() {
    // filters.forEach(({name, items}) => {
    //     const category = createElement({tag: 'div', className: 'categoryContainer'});
    //
    //     const categoryName = createElement({tag: 'span', className: 'category', innerHTML: name});
    //
    //     const categorySections = createElement({tag: 'div', className: 'category-sections'})
    //
    //     category.append(categoryName, categorySections);
    //
    //     items.forEach(({name, items}) => {
    //         const subCategorySections = createElement({tag: 'div', className: 'sub-category-inputs'});
    //
    //         const subCategory = createElement({tag: 'div', className: 'category-section'});
    //
    //         const subCategoryName = createElement({tag: 'span', className: 'sub-category', innerHTML: name});
    //
    //         subCategory.append(subCategoryName, subCategorySections);
    //         categorySections.append(subCategory);
    //
    //         items.forEach((item) => {
    //             const categoryInput = createElement({tag: 'input', type: 'checkbox', className: 'category-input', value: item.name, name: item.name});
    //             const categoryLabel = createElement({tag: 'label', className: 'category-label', id: item.name});
    //             const categoryLabelText = createElement({tag: 'p', innerHTML: item.name , className: 'category-input-text'});
    //             categoryInput.dataset.categoryId = item.id;
    //             categoryLabel.append(categoryInput, categoryLabelText );
    //             subCategorySections.append(categoryLabel);
    //         });
    //     });
    //
    //     categoriesForm.append(category);
    // })
// }

// appendCategories()



