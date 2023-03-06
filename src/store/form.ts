import { createSlice } from "@reduxjs/toolkit";

const Formslice = createSlice({
  name: "form",
  initialState: {
    dataListCheckbox: [],
    transactionAndCardAcceptanceTypeStep: {
      dataListCheckbox: [],
    },
    dataAcraDetail: {}
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
    saveDataAcraDetail: (state, action) => {
      state.dataAcraDetail = action.payload;
    },
   
    /**
     * function save data of page
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataTransactionAndCardAcceptanceTypeStep: (state, action) => {
      state.transactionAndCardAcceptanceTypeStep.dataListCheckbox = action.payload;
    },
    saveDataAcraDetailStep: (state, action) => {
      state.dataAcraDetail = action.payload;
    },
  },
});

export const {
  saveDataListCheckbox,
  saveDataTransactionAndCardAcceptanceTypeStep,
  saveDataAcraDetailStep
} = Formslice.actions;

export default Formslice.reducer;
