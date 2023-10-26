class FilterState {
    constructor(categoryId, size, sortingId) {
        this.categoriesId = categoryId;
        this.size = size;
        this.sortingId = sortingId;
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
                this.sortingId = stateValues[value];
            }
        }
        dispatchFilterStateData(this);
    }

    spliceCategoryId(id) {
        filterState.categoriesId.splice(filterState.categoriesId.indexOf(id), 1);
        dispatchFilterStateData(this);
    }

    resetEvent() {
        document.dispatchEvent(new CustomEvent('resetButtonClick', {
            bubbles: true,
        }))
        filterState.categoriesId = [];
        dispatchFilterStateData(this)
    }

    labelEvent(label) {
        document.dispatchEvent(new CustomEvent('labelClick', {
            bubbles: true,
            detail: label,
        }))
        filterState.spliceCategoryId(+label.id)
    }
}

const filterState = new FilterState([], 1, 0);


function dispatchFilterStateData(data) {
    document.dispatchEvent(new CustomEvent("filtersStateUpdate", {
        bubbles: true,
        detail: data,
    }));
}

export {filterState}