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
    businessDetailsStep: {
      businessInfomation: {},
      websiteInfomation: {},
      otherInfomation: {},
      pointOfSales: {},
      ecommerce: {},
    },
    productsAndServicesStep: {
      pointOfSales: {},
      eCommerce: {},
    },
  },
  reducers: {
    /**
     * function save data of step
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataListCheckbox: (state, action) => {
      state.dataListCheckbox = action.payload;
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

    /**
     * function save data of step Business Details
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataBusinessInfomation: (state, action) => {
      state.businessDetailsStep.businessInfomation = action.payload;
    },

    /**
     * function save data of step Business Details
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataWebsiteInfomation: (state, action) => {
      state.businessDetailsStep.websiteInfomation = action.payload;
    },

    /**
     * function save data of step Business Details
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataOtherInfomation: (state, action) => {
      state.businessDetailsStep.otherInfomation = action.payload;
    },

    /**
     * function save data of step Products And Services
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataProductsAndServicesEcom: (state, action) => {
      state.productsAndServicesStep.eCommerce = action.payload;
    },

    /**
     * function save data of step Products And Services
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataProductsAndServicesPOS: (state, action) => {
      state.productsAndServicesStep.pointOfSales = action.payload;
    },
  },
});

export const {
  saveDataListCheckbox,
  saveDataCompanyAndContactInformationStep,
  saveDataTransactionAndCardAcceptanceTypeStep,
  saveDataBusinessInfomation,
  saveDataWebsiteInfomation,
  saveDataOtherInfomation,
  saveDataProductsAndServicesEcom,
  saveDataProductsAndServicesPOS,
} = Formslice.actions;

export default Formslice.reducer;
