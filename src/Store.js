import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],

  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    
    removeTodo: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },

    editTodo: (state, action) => {
      state[action.payload.id] = action.payload.value;
    },

  },

});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
