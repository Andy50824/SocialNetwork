import {legacy_createStore as createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"


let reducers = combineReducers({
    navPage: sidebarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
    
    
});

let store = createStore(reducers);

window.store = store;
export default store


