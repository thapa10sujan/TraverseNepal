
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import users from '../reducerSlice/user'


const persistConfig = {
  key: 'root',
  storage,
}


const reducer = combineReducers({
    users,
  })

  const persistedReducer = persistReducer(persistConfig, reducer)


   export const store = configureStore({
    reducer: persistedReducer,
    middleware:[logger]
  })

  export const persistor = persistStore(store)
    
  
