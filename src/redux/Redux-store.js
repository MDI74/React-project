import {combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from "./Profille-reducer";
import dialogsReducer from "./Dialogs-reducer";
import navigationReducer from "./Navigation-reducer";

//Собираем все reducers
let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    navigation: navigationReducer
});

//Создаем redux store
let store = createStore(reducers);

export default store;