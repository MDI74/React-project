import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./Profille-reducer";
import dialogsReducer from "./Dialogs-reducer";
import navigationReducer from "./Navigation-reducer";
import usersReducer from "./Users-reducer";

//Собираем все reducers
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navigationPage: navigationReducer,
    usersPage: usersReducer,
});

//Создаем redux store
let store = createStore(reducers);

window.store = store;

export default store;