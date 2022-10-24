import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"
import profileReducer from "./profileReducer"
import thunkMiddleWare from "redux-thunk"
import appReducer from './appReducer'
import {reducer as formReducer} from "redux-form"



let reducers = combineReducers({
    navPage: sidebarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
      
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store



