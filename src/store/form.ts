import { createSlice } from "@reduxjs/toolkit";

const Formslice = createSlice({
  name: "form",
  initialState: {
    dataListCheckbox: [],
  },
  reducers: {
    /**
     * function save data of page
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataListCheckbox: (state, action) => {
      state.dataListCheckbox = action.payload;
    },
  },
});

export const { saveDataListCheckbox } = Formslice.actions;

export default Formslice.reducer;
