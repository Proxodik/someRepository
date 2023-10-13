let filtersState = {
    categoryId: undefined,
    size: undefined,
}

class EventObserver {
    constructor () {
        this.observers = [];
    }

    subscribe (fn) {
        this.observers.push(fn);
    }

    unsubscribe (fn) {
        this.observers = this.observers.filter(subscriber => subscriber !== fn)
    }

    broadcast (data) {
        this.observers.forEach(subscriber => subscriber(data))
    }

    setFilters(updatedState) {
        for (let value in updatedState) {
            filtersState[value] = updatedState[value];
        }
        console.log(filtersState);
    }
}

const observer = new EventObserver();

observer.subscribe(filtersState);

// document.addEventListener('filters', (event) => {
//     observer.setFilters(event.detail);
// })

// export {filtersState,observer}