import {createStore} from 'redux';
//import AsyncStorage from "@react-native-community/async-storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import allReduser from './src/Reducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const persistedReducer = persistReducer(persistConfig, allReduser);
const store = createStore(persistedReducer, composeEnhancers);
let persistor = persistStore(store);
export {store, persistor};
