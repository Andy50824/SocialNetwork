import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"
import profileReducer from "./profileReducer"
import thunkMiddleWare from "redux-thunk"



let reducers = combineReducers({
    navPage: sidebarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
      
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store



