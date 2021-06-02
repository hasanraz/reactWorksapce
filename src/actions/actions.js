export const ADD_ITEM = 'ADD_ITEM'

let nextItemId = 0;

export function addItem(text) {
    return {
        type: ADD_ITEM,
        id: nextItemId++,
        text
    };
}

