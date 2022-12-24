import { combineReducers } from "redux";
import auth from './auth'
import {getInputValues, getMenuValues} from "./updown";
import {getImageValues,getbagImageValues,getTemplateValues} from "./updown";

 const rootReducer = combineReducers({
    getInputValues,getImageValues,getMenuValues,getbagImageValues,getTemplateValues,
    user:auth
})
export default rootReducer;