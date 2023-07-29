
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import users from '../reducerSlice/user'
const reducer = combineReducers({
    users,
  })


  const store = configureStore({
    reducer,
  })
  
  export default store;