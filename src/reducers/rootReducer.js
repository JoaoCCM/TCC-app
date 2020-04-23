import allTeachesReducer from "./allTeachesReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    teachers: allTeachesReducer,
    user: userReducer,
});

export default RootReducer;
