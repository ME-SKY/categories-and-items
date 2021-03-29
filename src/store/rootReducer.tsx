import {combineReducers} from "redux";
import {categoriesReducer} from "./categoriesReducer";
import {elementsReducer} from "./elementsReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    elements: elementsReducer,
    app: appReducer
});
