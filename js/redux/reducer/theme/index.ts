import {createSlice, Dispatch} from '@reduxjs/toolkit';
import {RootState} from '../..';
import colors from '../../../global/colors';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    color: colors.PURPLE,
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
