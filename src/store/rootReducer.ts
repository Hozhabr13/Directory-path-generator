import { combineReducers } from '@reduxjs/toolkit'
import Todos from './todos'

const rootReducer = combineReducers({
  Todos
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
