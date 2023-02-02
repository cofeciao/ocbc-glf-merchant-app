import {
  createSlice,
} from '@reduxjs/toolkit';

const Formslice = createSlice({
  name: 'form',
  initialState: {
    form: {
      residentialStatus: 'Singapore',
      hdb: true
    },
    mainApplicant: 'Singpass',
    lengthenTenure: 'lengthenTenure1',
    preCheckedRepricing: false,
    accountLoan: 1,
    borrowerLoan: 1,
    errorConnection: false,
    property: 'Local',
    isBorrower: false,
    verify: 'one-time',
    myInfo: {},
    refId: '',
    loanCreate: {},
    infoBorrowerRequest: [],
    isEditing: false,
    showDocument: false,
    dataForm: {},
    dataTnc: {},
    dataBanner: {},
    isShowBannerMaintenance: false,
  },
  reducers: {
    /**
     * function save data form data of page
     * @param state - State for form
     * @param action  - Payload
     */
    saveFormData: (state, action) => {
      state.form = action.payload;
    },
    /**
     * function set main applicant
     * @param state - State for form
     * @param action - Payload
     */
    setMainApplicant: (state, action) => {
      state.mainApplicant = action.payload;
    },
    /**
     * function status document required(one and more than one)
     * @param state - State for form
     * @param action - Payload
     */
    setLengthenTenure: (state, action) => {
      state.lengthenTenure = action.payload;
    },
    /**
     * function set pre-checked Repricing option
     * @param state - State for form
     * @param action - Payload
     */
    setPreCheckedRepricing: (state, action) => {
      state.preCheckedRepricing = action.payload;
    },
    /**
     * function get account loan
     * @param state - State for form
     * @param action - Payload
     */
    getAccountLoan: (state, action) => {
      state.accountLoan = action.payload;
    },
    /**
     * function get borrower loan
     * @param state - State for form
     * @param action - Payload
     */
    getBorrowerLoan: (state, action) => {
      state.borrowerLoan = action.payload;
    },
    // function set error connection when upload file
    setErrorConnection: (state, action) => {
      state.errorConnection = action.payload;
    },
    /**
     * function set property request
     * @param state - State for form
     * @param action - Payload
     */
    setPropertyRequest: (state, action) => {
      state.property = action.payload;
    },
    /**
     * function set is borrower flow
     * @param state - State for form
     * @param action - Payload
     */
    setIsBorrower: (state, action) => {
      state.isBorrower = action.payload;
    },
    /**
    * function set is borrower flow
    * @param state - State for form
    * @param action - Payload
    */
    setTypeVerify: (state, action) => {
      state.verify = action.payload;
    },
    /**
     * function get data my info
     * @param state - State for form
     * @param action - Payload
     */
    getMyInfo: (state, action) => {
      state.myInfo = action.payload;
    },
    getRefId: (state, action) => {
      state.refId = action.payload;
    },
    /**
    * function set info Borrower request for Borrower flow
    * @param state - State for form
    * @param action - Payload
    */
    setInfoRequestBorrowRequest: (state, action) => {
      state.infoBorrowerRequest = action.payload;
    },
    /**
    * function set status isEditing when click edit button on review page
    * @param state - State for form
    * @param action - Payload
    */
    setStatusEditButton: (state, action) => {
      state.isEditing = action.payload;
    },
    /**
     * function set show document for manual flow
     * @param state - State for form
     * @param action - Payload
     */
    setShowDocument: (state, action) => {
      state.showDocument = action.payload;
    },
    /**
     * function set show data create loan
     * @param state - State for form
     * @param action - Payload
     */
     getLoanCreate: (state, action) => {
      state.loanCreate = action.payload;
    },

    /**
     * function set show data create loan
     * @param state - State for form
     * @param action - Payload
     */
     setDataForm: (state, action) => {
      state.dataForm = action.payload;
    },

    getTnc: (state, action) => {
      state.dataTnc = action.payload;
    },

    getDataBanner: (state, action) => {
      state.dataBanner = action.payload;
    },

    setBannerMaintenance: (state, action) => {
      state.isShowBannerMaintenance = action.payload;
    },
  },
});

export const {
  setMainApplicant,
  setLengthenTenure,
  setPreCheckedRepricing,
  saveFormData,
  getAccountLoan,
  getBorrowerLoan,
  setErrorConnection,
  setPropertyRequest,
  setIsBorrower,
  setTypeVerify,
  getMyInfo,
  getRefId,
  setInfoRequestBorrowRequest,
  setStatusEditButton,
  setShowDocument,
  getLoanCreate,
  setDataForm,
  getTnc,
  getDataBanner,
  setBannerMaintenance,
} = Formslice.actions;

export default Formslice.reducer;