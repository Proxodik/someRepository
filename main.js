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


];

// create filters container

filters.forEach(({name, items}) => {
    // create category
    const category = document.createElement('div');
    const categoryName = document.createElement('p')

    categoryName.innerHTML = name;
    category.classList.add('category');
    category.append(categoryName)

    items.forEach(({name, items}) => {
        // create sub-category
        const subCategory = document.createElement('div');
        const subCategoryName = document.createElement('a')
        subCategoryName.innerHTML = name.toUpperCase();
        subCategoryName.href = '#';
        subCategory.classList.add('category-sections')
        subCategory.append(subCategoryName)
        category.append(subCategory);

        items.forEach((item) => {
            const subSubCategory = document.createElement('div');
            const subSubCategoryName = document.createElement('a')
            subSubCategoryName.innerHTML = item.toUpperCase();
            subSubCategoryName.href = '#';
            subSubCategory.classList.add('sub-category-sections')
            subSubCategory.append(subSubCategoryName)
            subCategory.append(subSubCategory)
            // create sub-sub-category and append into parent container
        })
        category.append(subCategory)
    })
    filterCategories.append(category)
})

