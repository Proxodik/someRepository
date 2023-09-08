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

    const category = createCategoryElement('category')
    const categoryName = createCategoryElement('category-header', name);
    const categorySections = createCategoryElement('category-sections')

    category.append(categoryName);
    category.append(categorySections);

    items.forEach(({name, items}) => {
        const subCategorySections = createCategoryElement('sub-category-sections');
        const subCategory = createCategoryElement('category-section');
        const subCategoryName = createCategoryElement('sub-category-header', name.toUpperCase());

        subCategory.append(subCategoryName);
        subCategory.append(subCategorySections)
        categorySections.append(subCategory);

        items.forEach((name) => {
            const subSubCategoryName = document.createElement('a');
            subSubCategoryName.innerHTML = name.toUpperCase();
            subSubCategoryName.href = name;

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

function createCategoryElement(className, description = '') {
    const category = document.createElement('div');
    category.className = className;
    category.innerHTML = description;
    return category;
}

