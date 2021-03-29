import {CLEAN_ERROR,SET_ERROR} from "./types";
import {IError} from "../interfaces/IError";

const initialState = {
    error: {} as IError
};

export const appReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case CLEAN_ERROR:
            return {
                ...state,
                error: {} as IError
            };
        default: return state;
    }
};
