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

export function getCategories (successCb?: Function,
                               notFoundCb?: Function ,
                               smWentWrong?: Function ) {
    return {
        type: GET_CATEGORIES,
        payload: {successCb: successCb, notFoundCb: notFoundCb, smWentWrong: smWentWrong}
    }
}

export function getElements () {
    return {
        type: GET_ELEMENTS
    }
}

export function getCategory (categoryUrl: string, cb?: Function, somethingWrongCb?: Function) {
    return {
        type: GET_CATEGORY,
        payload: {
            categoryUrl: categoryUrl,
            successCb: cb,
            smWentWrong: somethingWrongCb
        }
    }
}

export function getElement (elementFullUrl: string, cb?: Function, somethingWrongCb?: Function) {
    return {
        type: GET_ELEMENT,
        payload: {
            elementFullUrl: elementFullUrl,
            successCb: cb,
            smWentWrong: somethingWrongCb
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
