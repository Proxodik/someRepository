export function createElement(elementContent) {
    const {tag, ...data} = elementContent;

    const element = document.createElement(tag);

    for (let option in data) {
        element[option] = data[option];
    }
    return element;
}

