import {combineReducers} from "redux";
import {noteReducer} from "./modules/notes/reducer";

export const rootReducer = combineReducers({
    notes: noteReducer
});