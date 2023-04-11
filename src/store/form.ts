import { createSlice } from "@reduxjs/toolkit";

const Formslice = createSlice({
  name: "form",
  initialState: {
    // RM flow
    dataCompanyDetail: {},
    dataAcraDetail: {},
    servicesAppliedStep: {
      transactionAndCardAcceptanceTypeStep: [],
      otherServices: {
        instalmentPaymentPlan: {},
        directCurrencyConversion: {},
        mailOrder: {},
      },
    },
    businessOperationDetails: {},
    productsAndServices: {
      pointOfSales: {},
      eCommerce: {},
    },

    acraAndContactInformationStep: {
      contactDetail: {},
      authorisedPersonDetails: {},
    },
    supplementaryDocumentStep: {
      authorisedSignatoryNRIC: [],
      tenacyDocumentOrSiteVisitPhotos: [],
      copyOfBankStatement: [],
      anyOtherSupportingDocuments: [],
    },

    // Self flow
    cashlessPaymentMethod: [],
    companyAndContactInformationStep: {},
    transactionAndCardAcceptanceTypeStep: [],
    businessDetailsStep: {},
    listWebsiteUrl: [],
    productsAndServicesStep: {
      pointOfSales: {},
      eCommerce: {},
    },
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

    /**
     * function save data of ACRA and contact information step
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataAcraDetail: (state, action) => {
      state.dataAcraDetail = action.payload;
    },
    saveDataCompanyDetail: (state, action) => {
      state.dataCompanyDetail = action.payload;
    },

    /**
     * function save data of ACRA and contact information step
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataTransactionServicesApplied: (state, action) => {
      state.servicesAppliedStep.transactionAndCardAcceptanceTypeStep =
        action.payload;
    },
    saveDataOtherServicesApplied: (state, action) => {
      state.servicesAppliedStep.otherServices = action.payload;
    },

    /**
     * function save data of Business operation details step
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataBusinessOperationDetails: (state, action) => {
      state.businessOperationDetails = action.payload;
    },

    /**
     * function save data of Products and services step
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataProductsAndServicesEcomRM: (state, action) => {
      state.productsAndServices.eCommerce = action.payload;
    },
    saveDataProductsAndServicesPosRM: (state, action) => {
      state.productsAndServices.pointOfSales = action.payload;
    },

    /**
     * function save data of Supplementary documents step
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataSupplementaryDocument: (state, action) => {
      state.supplementaryDocumentStep = action.payload;
    },

    /**
     * function save data of step Company And Contact Information
     * @param state - State for form
     * @param action  - Payload
     */
    saveDataCompanyAndContactInformationStep: (state, action) => {
      state.companyAndContactInformationStep = action.payload;
    },
    saveDataAcraAndContactInformationStep: (state, action) => {
      state.acraAndContactInformationStep = action.payload;
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
  saveDataCompanyDetail,
  saveDataTransactionServicesApplied,
  saveDataOtherServicesApplied,
  saveDataBusinessOperationDetails,
  saveDataProductsAndServicesEcomRM,
  saveDataProductsAndServicesPosRM,
  saveDataSupplementaryDocument,
  saveDataCompanyAndContactInformationStep,
  saveDataAcraAndContactInformationStep,
  saveDataTransactionAndCardAcceptanceTypeStep,
  saveDataAcraDetailStep,
  saveDataBusinessDetailsStep,
  saveDataListWebsiteUrl,
  saveDataProductsAndServicesEcom,
  saveDataProductsAndServicesPOS,
} = Formslice.actions;

export default Formslice.reducer;
