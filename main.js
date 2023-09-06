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
    category.className = 'category';

    const categoryName = document.createElement('div');
    categoryName.className = 'category-header'
    categoryName.innerHTML = name;

    const categorySections = document.createElement('div');
    categorySections.className = 'category-sections';

    category.append(categoryName);
    category.append(categorySections);

    items.forEach(({name, items}) => {
        const subCategorySections = document.createElement('div');
        subCategorySections.className = 'sub-category-sections';

        const subCategory = document.createElement('div');
        subCategory.className = 'category-section';

        const subCategoryName = document.createElement('div');
        subCategoryName.className = 'sub-category-header'
        subCategoryName.innerHTML = name.toUpperCase();

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

