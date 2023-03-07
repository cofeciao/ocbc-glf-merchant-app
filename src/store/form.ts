import { createSlice } from "@reduxjs/toolkit";

const Formslice = createSlice({
  name: "form",
  initialState: {
    cashlessPaymentMethod: [],
    companyAndContactInformationStep: {},
    transactionAndCardAcceptanceTypeStep: [],
    businessDetailsStep: {},
    listWebsiteUrl: [],
    productsAndServicesStep: {
      pointOfSales: {},
      eCommerce: {},
    },
    dataAcraDetail: {}
  },
  reducers: {
    /**
     * function save data of Cashless Payment Method
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataCashlessPaymentMethod: (state, action) => {
      state.cashlessPaymentMethod = action.payload;
    },
    saveDataAcraDetail: (state, action) => {
      state.dataAcraDetail = action.payload;
    },
   
    /**
     * function save data of step Company And Contact Information
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataCompanyAndContactInformationStep: (state, action) => {
      state.companyAndContactInformationStep = action.payload;
    },

    /**
     * function save data of step Transaction And Card Acceptance Type
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataTransactionAndCardAcceptanceTypeStep: (state, action) => {
      state.transactionAndCardAcceptanceTypeStep = action.payload;
    },

    /**
     * function save data of step Business Details
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataBusinessDetailsStep: (state, action) => {
      state.businessDetailsStep = action.payload;
    },

    /**
     * function save data List Website Url of step Business Details
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataListWebsiteUrl: (state, action) => {
      state.listWebsiteUrl = action.payload;
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
    saveDataAcraDetailStep: (state, action) => {
      state.dataAcraDetail = action.payload;
    },
  },
});

export const {
  saveDataCashlessPaymentMethod,
  saveDataCompanyAndContactInformationStep,
  saveDataTransactionAndCardAcceptanceTypeStep,
  saveDataAcraDetailStep,
  saveDataBusinessDetailsStep,
  saveDataListWebsiteUrl,
  saveDataProductsAndServicesEcom,
  saveDataProductsAndServicesPOS,
} = Formslice.actions;

export default Formslice.reducer;
