import {createSlice} from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    visible: false,
  },
  reducers: {
    toggle: state => {
      state.visible = !state.visible;
    },
  },
});

export const {toggle} = modalSlice.actions;
export default modalSlice.reducer;
