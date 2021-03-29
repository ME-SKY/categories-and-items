import {
    CLEAN_ERROR,
    GET_CATEGORIES,
    GET_CATEGORY,
    GET_ELEMENT,
    GET_ELEMENTS,
    REQUEST_CATEGORIES,
    REQUEST_CATEGORY,
    REQUEST_ELEMENT,
    SET_ERROR
} from "./types";

import {IError} from "../interfaces/IError";

export function getCategories (smWrongFn?: Function ) {
    return {
        type: GET_CATEGORIES,
        payload: {smWrongFn: smWrongFn}
    }
}

export function getCategory (categoryUrl: string, smWrongFn?: Function) {
    return {
        type: GET_CATEGORY,
        payload: {
            categoryUrl: categoryUrl,
            smWrongFn: smWrongFn
        }
    }
}

export function getElement (elementFullUrl: string, smWrongFn?: Function) {
    return {
        type: GET_ELEMENT,
        payload: {
            elementFullUrl: elementFullUrl,
            smWrongFn: smWrongFn
        }
    }
}

export function requestCategories (categories: any) {
    return {
        type: REQUEST_CATEGORIES,
        payload: categories
    }
}

export function requestCategory(category: any){
    return {
        type: REQUEST_CATEGORY,
        payload: category
    }
}

export function requestElement(element: any) {
    return {
        type: REQUEST_ELEMENT,
        payload: element
    }
}

export function setError(error: IError) {
    return {
        type: SET_ERROR,
        payload: error
    }
}

export function cleanError() {
    return {
        type: CLEAN_ERROR
    }
}
