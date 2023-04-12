import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    data: any[]
  }
  
  const initialState: CounterState = {
    data: [],
  }
  
  export const todoSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
      addTodoList: (state,action) => {
        state.data.push(action.payload)
      },
      deleteData: (state, action) => {
        const index = state.data.findIndex(data => data.id === action.payload);
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },

    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addTodoList,deleteData } = todoSlice.actions
  
  export default todoSlice.reducer