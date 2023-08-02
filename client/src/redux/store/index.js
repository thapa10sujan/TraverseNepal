
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import logger from 'redux-logger'

import users from '../reducerSlice/user'
const reducer = combineReducers({
    users,
  })


  const store = configureStore({
    reducer,
    middleware:[logger]
  })
  
  export default store;