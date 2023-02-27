import { createSlice } from "@reduxjs/toolkit";

const Formslice = createSlice({
  name: "form",
  initialState: {
    dataListCheckbox: [],
    transactionAndCardAcceptanceTypeStep: {
      dataListCheckbox: [],
    },
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

    /**
     * function save data of page
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataTransactionAndCardAcceptanceTypeStep: (state, action) => {
      state.transactionAndCardAcceptanceTypeStep.dataListCheckbox = action.payload;
    },
  },
});

export const {
  saveDataListCheckbox,
  saveDataTransactionAndCardAcceptanceTypeStep,
} = Formslice.actions;

export default Formslice.reducer;
