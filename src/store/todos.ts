import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodos: any = createAsyncThunk('todos/fetchTodos', async () => {
  const response: any = await axios.get('https://reqres.in/api/users?page=2')
  return response.data
})

const initialState = {
  check: [
    1,
    2,
    3,
    4
  ],
  status: 'idle',
  value: {}
}

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo (state, action: PayloadAction<any>): void {
      state.check = [...state.check, ...action.payload]
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.status = 'idle'
        state.value = payload.data
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
})

export const { addTodo } = todos.actions
export default todos.reducer
