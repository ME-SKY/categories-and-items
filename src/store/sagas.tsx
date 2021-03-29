import {all, call, put, takeEvery} from 'redux-saga/effects'
import {GET_CATEGORIES, GET_CATEGORY, GET_ELEMENT} from "./types";
import {requestCategories, requestCategory, requestElement} from "./actions";
import {ApiRequests} from "../requests/api-requests";

export function* sagaWatcher() {
    yield all([
        takeEvery(GET_CATEGORIES, sagaGetAllCategories),
        takeEvery(GET_CATEGORY, sagaGetCategory),
        takeEvery(GET_ELEMENT, sagaGetElement)
    ]);
}

function* sagaGetCategory(action: any) {
    try {
        // @ts-ignore
        const payload = yield call(ApiRequests.fetchCategory,
            action.payload.categoryUrl,
            action.payload.successCb,
            action.payload.smWentWrong);
        yield put(requestCategory(payload))
    } catch (e) {
        console.log(e)
    }
}


function* sagaGetAllCategories(action: any) {
    try {
        // @ts-ignore
        const payload = yield call(ApiRequests.fetchCategories,
            action.payload.successCb,
            action.payload.notFoundCb,
            action.payload.smWentWrong);
        yield put(requestCategories(payload))
    } catch (e) {
        console.log(e)
    }
}

function* sagaGetElement(action: any) {
    try {
        // @ts-ignore
        const payload = yield call(ApiRequests.fetchElement,
            action.payload.elementFullUrl,
            action.payload.successCb,
            action.payload.smWentWrong);
        yield put(requestElement(payload))
    } catch (e) {
        console.log(e)
    }
}
