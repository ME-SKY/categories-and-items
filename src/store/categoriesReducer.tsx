import {REQUEST_CATEGORIES, REQUEST_CATEGORY} from "./types";
import {ICategory} from "../interfaces/ICategory";

const initialState = {
    categories: [] as ICategory[],
    currentCategory: {} as ICategory | {}
};

export const categoriesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case REQUEST_CATEGORIES:
            console.log('REQUEST_CATEGORIES ACTION');
            //check and prove that we dont push an objects that not uniq by content
            const allCategories = state.categories.concat(action.payload as ICategory[]);
            console.log(allCategories);
            const categoriesUniqIds = [...new Set(allCategories
                    .map(cat => cat.id)
            )];
            console.log(categoriesUniqIds);
            const uniqCategories = allCategories.filter(cat => categoriesUniqIds.includes(cat.id));
            return {
                ...state,
                categories: uniqCategories
            };
        case REQUEST_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload as ICategory
            };
        default: return state;
    }
};
