import {REQUEST_CATEGORIES, REQUEST_CATEGORY} from "./types";
import {ICategory} from "../interfaces/ICategory";

const initialState = {
    categories: [] as ICategory[],
    currentCategory: {} as ICategory | {}
};

export const categoriesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case REQUEST_CATEGORIES:
            return {
                ...state,
                categories: state.categories.concat(action.payload as ICategory[])
            };
        case REQUEST_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload as ICategory
            };
        default: return state;
    }
};
