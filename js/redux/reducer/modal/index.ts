import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../..';

const modalSlice = createSlice({
  name: 'theme',
  initialState: {
    visible: false,
  },
  reducers: {
    onVisibleChange(state, action) {
      state.visible = action.payload;
    },
  },
});

export const {onVisibleChange} = modalSlice.actions;
export const selectModalVisible = (state: RootState) => state.modal.visible;
export default modalSlice.reducer;
