// toDoListSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activities: [],
};

const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addActivity: (state, action) => {
      state.activities.push({ id: Date.now(), text: action.payload, completed: false });
    },
    removeActivity: (state, action) => {
      state.activities = state.activities.filter((activity) => activity.id !== action.payload);
    },
    toggleActivityCompletion: (state, action) => {
      const activity = state.activities.find((activity) => activity.id === action.payload);
      if (activity) {
        activity.completed = !activity.completed;
      }
    },
  },
});

export const { addActivity, removeActivity, toggleActivityCompletion } = toDoListSlice.actions;

export default toDoListSlice.reducer;
