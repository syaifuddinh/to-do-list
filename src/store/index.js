import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'index',
  initialState: {
    counter: 0,
    items: [],
    finished: [],
    unfinished: []
  },
  reducers: {
    storeData: (state, { payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const items = state.items;
      const index = items.findIndex(({ id }) => id === payload.id);
      if(index < 0) {
          state.items.push(payload);
      }
      state.finished = items.filter(({ status }) => status === 1).sort((a, b) => a - b);
      state.unfinished = items.filter(({ status }) => status === 0);

      
    },
    updateData: (state, { payload }) => {
      const id = payload.id;
      const index = state.items.findIndex(value => value.id === id);
      const items = state.items;
      if(index > -1) {
        items[index] = payload;
      }
      state.items = items;
      state.finished = items.filter(({ status }) => status === 1).sort((a, b) => a - b);
      state.unfinished = items.filter(({ status }) => status === 0).sort((a, b) => b - a);
      
    },
    deleteData: (state, { payload }) => {
      const id = payload.id;
      const items = state.items.filter(value => value.id !== id).sort((a, b) => a - b);
      state.items = items;
      state.finished = items.filter(({ status }) => status === 1).sort((a, b) => a - b);
      state.unfinished = items.filter(({ status }) => status === 0).sort((a, b) => b - a);
    }
  },
})

// Action creators are generated for each case reducer function
export const { storeData, deleteData, updateData } = counterSlice.actions;

export default counterSlice.reducer;