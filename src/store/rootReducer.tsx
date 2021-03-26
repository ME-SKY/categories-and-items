import {combineReducers} from "redux";
import {categoriesReducer} from "./categoriesReducer";
import {elementsReducer} from "./elementsReducer";

export const rootReducer = combineReducers({
    categoriesReducer,
    elementsReducer
});

// const initialState: any = {
//     categories:
// };
