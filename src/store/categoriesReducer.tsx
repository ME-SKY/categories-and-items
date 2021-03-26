import {ICategory} from "../category/Category";
import {GET_CATEGORIES, GET_ELEMENTS} from "./types";

const initialState = {
    categories: [] as ICategory[]
};

// @ts-ignore
export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: state.categories.concat(action.payload)
            };
        default: return state;
    }
};
