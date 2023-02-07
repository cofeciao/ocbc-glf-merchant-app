import {
  createSlice,
} from '@reduxjs/toolkit';

const Formslice = createSlice({
  name: 'form',
  initialState: {
    checkboxList: []
  },
  reducers: {
    /**
     * function save data of page
     * @param state - State for form
     * @param action  - Payload
     */
    saveListCheckbox: (state, action) => {
      state.checkboxList = action.payload;
    },
  },
});

export const {
  saveListCheckbox,
} = Formslice.actions;

export default Formslice.reducer;