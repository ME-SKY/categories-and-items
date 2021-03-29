import {GET_ELEMENTS, REQUEST_ELEMENT} from "./types";
import {IElement} from "../interfaces/IElement";

const initialState = {
    elements: [] as IElement[],
    currentElement: {} as IElement
};

export const elementsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_ELEMENTS:
            return {
                ...state,
                elements: state.elements.concat(action.payload as IElement[])
            };
        case REQUEST_ELEMENT:
            return {
                ...state,
                currentElement: action.payload as IElement
            };
        default: return state;
    }
};
