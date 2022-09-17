import {createSlice, Dispatch} from '@reduxjs/toolkit';
import {RootState} from '../..';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    color: 'green',
  },
  reducers: {
    onThemeColorChange(state, action) {
      state.color = action.payload;
    },
  },
});

export const {onThemeColorChange} = themeSlice.actions;
export const onThemeColorChangeAsync =
  (color: string) => (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(onThemeColorChange(color));
    }, 3000);
  };
export const selectThemeColor = (state: RootState) => state.theme.color;
export default themeSlice.reducer;
