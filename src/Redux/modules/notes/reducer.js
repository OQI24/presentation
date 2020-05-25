import {NOTES} from "./actions";

const initialState = {
    notes: [],
    loading: false
};

export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
        case NOTES.LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case NOTES.CREATE_NOTE: {
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        }
        case NOTES.DELETE_NOTE: {
            return {
                ...state,
                notes: state.notes.filter((elem) => elem.id !== action.payload)
            }
        }
        case NOTES.FETCH_NOTES: {
            return {
                ...state,
                notes: action.payload
            }
        }
    }
};