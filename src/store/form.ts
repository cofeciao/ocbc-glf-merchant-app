import { createSlice } from "@reduxjs/toolkit";

const Formslice = createSlice({
  name: "form",
  initialState: {
    dataListCheckbox: [],
    companyAndContactInformationStep: {
      data: [],
    },
    transactionAndCardAcceptanceTypeStep: {
      dataListCheckbox: [],
    },
  },
  reducers: {
    /**
     * function save data of step
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataListCheckbox: (state, action) => {
      state.companyAndContactInformationStep.data = action.payload;
    },

    /**
     * function save data of step Company And Contact Information
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataCompanyAndContactInformationStep: (state, action) => {
      state.transactionAndCardAcceptanceTypeStep.dataListCheckbox =
        action.payload;
    },

    /**
     * function save data of step Transaction And Card Acceptance Type
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataTransactionAndCardAcceptanceTypeStep: (state, action) => {
      state.transactionAndCardAcceptanceTypeStep.dataListCheckbox =
        action.payload;
    },
  },
});

export const {
  saveDataListCheckbox,
  saveDataCompanyAndContactInformationStep,
  saveDataTransactionAndCardAcceptanceTypeStep,
} = Formslice.actions;

export default Formslice.reducer;
