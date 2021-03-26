import {CategoryItem, ICategory} from "../category/Category";
import {GET_CATEGORIES, GET_ELEMENTS} from "./types";

const initialState = {
    categoryItems: [] as CategoryItem[]
};

// @ts-ignore
export const elementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ELEMENTS:
            return {
                ...state,
                categoryItems: state.categoryItems.concat(action.payload)
            };
        default: return state;
    }
};
