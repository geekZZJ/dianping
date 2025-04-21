import { createSlice } from '@reduxjs/toolkit';

const textSlice = createSlice({
  name: 'text',
  initialState: '',
  reducers: {
    setTodoTitle: (state, action) => action.payload
  }
});

export const { setTodoTitle } = textSlice.actions;
export default textSlice.reducer;
