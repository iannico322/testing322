import { configureStore } from '@reduxjs/toolkit'
import usersCredReducer from './userCredentials'
import navReducer from './navCache'
import sarfReducer from './sarfData'
import sarfKeyReducer from './sarfDataKey'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig ={
  key:"root",
  version:1,
  storage,
}
const reducer = combineReducers({
  account: usersCredReducer,
    navbar:navReducer,
    sarf:sarfReducer,
    sarfkey:sarfKeyReducer

})





const persistedReducer =  persistReducer(persistConfig,reducer)

export default configureStore({
  reducer: persistedReducer
})

