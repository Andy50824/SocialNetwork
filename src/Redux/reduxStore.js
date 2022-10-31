import {legacy_createStore as createStore, combineReducers, applyMiddleware,compose} from 'redux'
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.__store__ = store;
export default store



