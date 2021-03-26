import {
    GET_CATEGORIES,
    GET_CATEGORY,
    GET_ELEMENT,
    GET_ELEMENTS
} from "./types";

export function getCategories () {
    return {
        type: GET_CATEGORIES
    }
}

export function getElements () {
    return {
        type: GET_ELEMENTS
    }
}

export function getElement () {
    return {
        type: GET_ELEMENT
    }
}

export function getCategory () {
    return {
        type: GET_CATEGORY
    }
}
