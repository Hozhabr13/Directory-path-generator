import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    check: [
      1,
      2,
      3,
      4
    ]
  },
  reducers: {
    addTodo (state, action: PayloadAction<any>): void {
      state.check = [...state.check, ...action.payload]
    }
  }
})

export const { addTodo } = todos.actions
export default todos.reducer
