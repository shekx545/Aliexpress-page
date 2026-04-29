import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  heartItems: [],
};

const heartSlice = createSlice({
  name: 'heart',
  initialState,
  reducers: {
    addToHeart(state, action) {
      const item = action.payload;
      const existingItem = state.heartItems.find((i) => i.id === item.id);
      if (!existingItem) {
        state.heartItems.push(item);
      }
    },
    removeFromHeart(state, action) {
      const id = action.payload;
      state.heartItems = state.heartItems.filter((i) => i.id !== id);
    },
  },
});

export const { addToHeart, removeFromHeart } = heartSlice.actions;
export default heartSlice.reducer;
