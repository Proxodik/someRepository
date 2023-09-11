const filterCategories = document.querySelector('.categories')

const filters = [
    {
        name: "Apparels",
        items: [
            {
                name: "Pants",
                items: [
                    "Sideswept Dhoti",
                    "Side Longhi",
                    "Modern Mope",
                    "Easy Dhoti",
                    "Classic Wideleg",
                ]
            },
            {
                name: "Jumpsuits",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "Shorts",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "Tops",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            }
        ]
    },
    {
        name: "Accessories",
        items: [
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            }
        ]
    },
    {
        name: "Houseware",
        items: [
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            }
        ]
    },
    {
        name: "Others",
        items: [
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            }
        ]
    },
    {
        name: "Techniques",
        items: [
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "items",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            }
        ]
    },
    {
        name: "Styles",
        items: [
            {
                name: "Bold",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "Monochrome",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
            {
                name: "Neutrals",
                items: [
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                ]
            },
        ]
    },
];

// create filters container

filters.forEach(({name, items}) => {
    // create category

    const category = createCategoryElement('div','category')
    const categoryName = createCategoryElement('div','category-header', name);
    const categorySections = createCategoryElement('div','category-sections')

    category.append(categoryName);
    category.append(categorySections);

    items.forEach(({name, items}) => {
        const subCategorySections = createCategoryElement('div','sub-category-sections');
        const subCategory = createCategoryElement('div','category-section');
        const subCategoryName = createCategoryElement('div','sub-category-header', name);

        subCategory.append(subCategoryName);
        subCategory.append(subCategorySections)
        categorySections.append(subCategory);

        items.forEach((name) => {
            const subSubCategoryName = createCategoryLink('a', name, name);
            subCategorySections.append(subSubCategoryName);
        })
    })
    filterCategories.append(category);
})

filterCategories.addEventListener('click', (event) => {
    event.target.classList.toggle('open');

    if (event.target.classList.contains('category-header') && !event.target.classList.contains('open')) {
        const categorySections = event.target.nextSibling;
        const openChildren = categorySections.querySelectorAll('.open');

        openChildren.forEach((openChild) => {
            openChild.classList.remove('open')
        })
    }
})

function createCategoryElement(tag, className, description = '') {
    const category = document.createElement(tag);
    category.className = className;
    category.innerHTML = description;
    return category;
}

function createCategoryLink(tag, href, description = '') {
    const link = document.createElement(tag);
    link.href = name;
    link.innerHTML = description;
    return link;
}

