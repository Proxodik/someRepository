class FilterState {
    constructor(categoryId, size, sortingId) {
        this.categoriesId = categoryId;
        this.size = size;
        this.sortingValue = sortingId;
    }

    updateFilterState(stateValues) {
        for (let value in stateValues) {
            if (value === 'categoryId') {
                this.categoriesId.push(stateValues[value]);
            }
            else if (value === 'size') {
                this.size = stateValues[value];
            }
            else if (value === 'sortingId') {
                this.sortingValue = stateValues[value];
            }
        }
        dispatchFilterStateData(this);
    }

    spliceCategoryId(id) {
        filterState.categoriesId.splice(filterState.categoriesId.indexOf(id), 1);
        dispatchFilterStateData(this);
    }

    resetCategories() {
        filterState.categoriesId = [];
        dispatchFilterStateData(this)
    }

    labelEvent(id) {
        filterState.spliceCategoryId(id)
    }
}

const filterState = new FilterState([], 1, 0);


function dispatchFilterStateData(data) {
    document.dispatchEvent(new CustomEvent("productsRender", {
        bubbles: true,
        detail: data,
    }));
}

export {filterState}