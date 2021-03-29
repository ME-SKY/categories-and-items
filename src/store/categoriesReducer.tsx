import {REQUEST_CATEGORIES, REQUEST_CATEGORY} from "./types";
import {ICategory} from "../interfaces/ICategory";

const initialState = {
    categories: [] as ICategory[],
    currentCategory: {} as ICategory | {}
};

export const categoriesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case REQUEST_CATEGORIES:

            //add only new categories to preserve uniqueness
            let categoriesToAdd: ICategory[] = [];
            for (let payloadCat of action.payload){
                state.categories.every(cat => cat.id !== payloadCat.id) && categoriesToAdd.push(payloadCat);
            }

            return {
                ...state,
                categories: state.categories.concat(categoriesToAdd)
            };
        case REQUEST_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload as ICategory
            };
        default: return state;
    }
};
