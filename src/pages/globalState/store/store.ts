
import { configureStore } from '@reduxjs/toolkit'
import  todoSlice  from '../features/addTodo'



export const store = configureStore({
  reducer: {
    data :todoSlice,
  },
})
