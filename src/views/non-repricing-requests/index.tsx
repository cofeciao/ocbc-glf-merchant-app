/***
 * NON-REPRICING REQUEST
 *    >> child
 *      >> title
 *      >> partial prepayment
 *        >> list checkbox
 *        >> row info
 *      >> lengthening of loan tenure
 *        >> list checkbox
 *        >> row info
 *      >> change of direct Debiting authorisation account
 *        >> row info
 *      >> Section button
 */


//import icon
import { loanAttachmentMgmt, createLoanAppMgmt, getTncmgmt } from '@/data-manager/info';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// import component lib
import {
  Button, Dialog, Loading
} from '@sectionsg/orc';

// import modules
import classnames from "classnames/bind";
import _ from "lodash";
import moment from 'moment';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

//import reducer
import { getLoanCreate, getTnc, saveFormData, setDataForm } from '../../store/form';

// import data constant
import { ACCOUNT_REQUEST, DATA_CARD_CHECKBOX, DATA_CONDITION_NON_PAYMENT_MODE, DATA_DOCUMENT_RESPONSE, DATA_NONE_REPRICING_REQUEST, DATA_NON_REPRICING, DATA_STATE_LENGTH_PARTIAL, DATA_STATE_LENGTH_SHORT, DATA_STATE_PARTIAL_DDA, DATA_STATE_REPRICING_DDA, DATA_STATE_REPRICING_LENGTHENING, DATA_STATE_REPRICING_LENGTHENING_DDA, DATA_STATE_REPRICING_LENGTHENING_DDA_MIX, DATA_STATE_REPRICING_LENGTHENING_PARTIAL, DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA, DATA_STATE_REPRICING_PARTIAL, DATA_STATE_REPRICING_PARTIAL_DDA, DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA, DATA_STATE_REPRICING_PARTIAL_SHORT_DDA, DATA_STATE_REPRICING_SHORT, DATA_STATE_REPRICING_SHORTENING_DDA, DATA_STATE_REPRICING_SHORT_DDA_MIX, DATA_STATE_REPRICING_SHORT_PARTIAL, DATA_STATE_REPRICING_SHORT_PARTIAL_DDA, ERROR, LIST_ACCOUNT_SINGLE, LIST_COUNTRIES, LIST_COUNTRIES_CODE, LIST_DATA_CURRENCY, LIST_DATA_OPTION_TO_REVISE, LIST_DATA_TNC, LIST_NATIONAL, LIST_PAYMENT_METHOD, LIST_PAYMENT_METHOD_FOREIGNER, LIST_PROPERTY, LIST_PROPERTY_COUNTRY, LIST_REPRICING_REQUEST, LIST_REQUEST_REPRICING, LIST_SELECT_PARTIAL, MANUAL, NEXT, NO, NRIC, REGION, REVIEW, SINGPASS, SLUG_POPUP, URL_MANUAL_FLOW, URL_PERSONAL_BORROWER_MANUAL, URL_REVIEW_BORROWER_MANUAL, URL_SINGPASS_FLOW, WIDTH_DIALOG_DEFAULT, YES,
  LIST_DOCUMENT_NON_REPRICING_SG, LIST_DOCUMENT_NON_REPRICING_NONE_SG } from '../../utils/constants';

// import untils
import { detectUNIFINLabel, formatDataHdbownership, formatNameField, handleFormatCPFContributionsList, scrollToError, formatDataAddressHdbownership } from '../../utils/utils';

// import demo landing page
import CPFContribution from "../popup/CPFContribution";
import CPFProp from "../popup/CPFProp";
import HDB from "../popup/HDB";
import IRAS from "../popup/IRAS";
import NOA from "../popup/NOA";
import Error from '../popup/Error';

//import types
import { INoneRepricingRequest } from "./NoneRepricingRequest";

// import styles
import styles from "./NoneRepricingRequest.scss";

// import child component
import NoneRepricingRequestChangeOfDirect from './NoneRepricingRequestChangeOfDirect';
import NoneRepricingRequestDocument from './NoneRepricingRequestDocument';
import NoneRepricingRequestFullRedemption from './NoneRepricingRequestFullRedemption';
import NoneRepricingRequestLengtheningOfLoan from './NoneRepricingRequestLengtheningOfLoan';
import NoneRepricingRequestPartial from './NoneRepricingRequestPartial';
import NoneRepricingRequestTitle from './NoneRepricingRequestTitle';

// Render UI
const NonRepricingRequests: React.FC<INoneRepricingRequest.IProps> = forwardRef(({ checkMatchOptionNonRepricing, checkMatchOptionNonRepricingAndPricing, checkMatchOptionNonRepricingAndPricingInvestment, children }, ref) => {

  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const history = useHistory();
  const [key, setKey] = useState<number>(null);
  const [validate, setValidate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [listDataCheckbox, setListDataCheckbox] = useState([])
  const [listDataCheckboxLengthening, setListDataCheckboxLengthening] = useState([])
  const [listPaymentMode, setListPaymentMode] = useState(LIST_PAYMENT_METHOD)
  const [listOptionToRevise, setListOptionToRevise] = useState(LIST_DATA_OPTION_TO_REVISE)
  const [listCurrency, setListCurrency] = useState(LIST_DATA_CURRENCY)
  const [sectionShow, setSectionShow] = useState<string[]>(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA)
  const [listDocument, setListDocument] = useState<string[]>()
  const [categoryDialog, setCategoryDialog] = useState<string>('');
  const [dialogPopup, setDialogPopup] = useState<boolean>(false);
  const [dataError, setDataError] = useState();
  const childRefFullRedemption = useRef<INoneRepricingRequest.IRefFullRedemption>();

  /**
   * Retrieves data from Store
   */
  const formReduxData = useSelector((state: any) => state.form);  // format list checkbox

  const [formDataRepricing, setFormDataRepricing] = useState({ //form data for section partial prepayment
    // currentDebitingAccountNumber: '',
    newOCBCAccountNumber: '',
    // errorCurrentDebitingAccountNumber: '',
    errorNewOCBCAccountNumber: '',
    countryProperty:  formReduxData.form && formReduxData.form.propertyInformation && formReduxData.form.propertyInformation.country
  })

  const [listFileUpload, setListFileUpload] = useState([])

  useEffect(() => {
    if (formReduxData.form && formReduxData.form.propertyInformation && formReduxData.form.propertyInformation.country === LIST_PROPERTY_COUNTRY[0]) {
      setListPaymentMode(LIST_PAYMENT_METHOD)
    } else {
      setListPaymentMode(LIST_PAYMENT_METHOD_FOREIGNER)
    }
  }, [])

  /**
   * Scroll to top
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const dataNonRequest = formReduxData.form.noneRepricingRequests;
  const checkDataAccountPartial = () => {
    let validate = false;
    const dataAccountNumber = formReduxData.form.accountInformation;
    const dataNonRequest = formReduxData.form.noneRepricingRequests;
    const numberAccountInformation = Number(formReduxData.form.accountInformation.accountNumber);
    dataNonRequest && dataNonRequest.dataAccount && dataNonRequest.dataAccount.dataAccountPartial.map((item: any, index: number) => {
      if (item === dataAccountNumber[`accountNumber${index + 1}`] && item !== '' && dataNonRequest.dataAccount.dataAccountPartial.length === numberAccountInformation) {
        validate = true;
      }
    })
    return validate;
  }

  const checkDataAccountLengthening = () => {
    let validate = false;
    const dataAccountNumber = formReduxData.form.accountInformation;
    const dataNonRequest = formReduxData.form.noneRepricingRequests;
    const numberAccountInformation = Number(formReduxData.form.accountInformation && formReduxData.form.accountInformation.accountNumber);
    dataNonRequest && dataNonRequest.dataAccount && dataNonRequest.dataAccount.dataAccountLengthening.map((item: any, index: number) => {
      if (item === dataAccountNumber[`accountNumber${index + 1}`] && item !== '' && dataNonRequest.dataAccount.dataAccountLengthening.length === numberAccountInformation) {
        validate = true;
      }
    })
    return validate;
  }


  useEffect(() => {
    let array: any = [];
    if (formReduxData.form.accountInformation) {
      const dataAccountNumber = formReduxData.form.accountInformation;
      const numberAccountInformation = Number(formReduxData.form.accountInformation.accountNumber);
      const dataNonRequest = formReduxData.form.noneRepricingRequests;
      let arrCommon: any = []
      let arrLengthening: any = []

      /**
       * Format to array checkbox
       */
      if (dataNonRequest && dataNonRequest.dataAccount && dataNonRequest.dataAccount.dataAccountPartial && dataNonRequest.dataAccount.dataAccountPartial.length > 0 && checkDataAccountPartial() || dataNonRequest && dataNonRequest.dataAccount && dataNonRequest.dataAccount.dataAccountLengthening && dataNonRequest.dataAccount.dataAccountLengthening.length > 0 && checkDataAccountLengthening()) {
        for (var i = 0; i < numberAccountInformation; i++) {
          arrCommon.push({
            text: dataAccountNumber[`accountNumber${i + 1}`],
            check: false
          })
        }
        for (var i = 0; i < numberAccountInformation; i++) {
          arrLengthening.push({
            text: dataAccountNumber[`accountNumber${i + 1}`],
            check: false
          })
        }
      } else {
        for (var i = 0; i < numberAccountInformation; i++) {
          array.push({
            text: dataAccountNumber[`accountNumber${i + 1}`],
            check: true
          })
        }
      }

      /**
       * Check exist data load before when back - Partial prepayment
       */
      if (dataNonRequest && dataNonRequest.dataAccount && dataNonRequest.dataAccount.dataAccountPartial && dataNonRequest.dataAccount.dataAccountPartial.length > 0 && checkDataAccountPartial()) {
        let arrPartial = [...arrCommon]
        arrPartial && arrPartial.map((item: any, idx: number) => {
          for (var i = 0; i < dataNonRequest.dataAccount.dataAccountPartial.length; i++) {
            if (item.text === dataNonRequest.dataAccount.dataAccountPartial[i] || dataNonRequest.dataAccount.dataAccountPartialFull[i] !== dataAccountNumber[`accountNumber${i + 1}`]) {
              arrPartial[idx] = {
                text: arrPartial[idx].text,
                check: true
              }
              return true
            }
          }
        })
        setListDataCheckbox(arrPartial);
      } else {
        let arrPartial = [...array]
        arrPartial && arrPartial.map((item: any, idx: number) => {
          for (var i = 0; i < numberAccountInformation; i++) {
            if (item.text === dataAccountNumber[`accountNumber${i + 1}`]) {
              arrPartial[idx] = {
                text: arrPartial[idx].text,
                check: true
              }
              return true
            }
          }
        })
        setListDataCheckbox(arrPartial);
      }
      /**
      * Check exist data load before when back - Lengthening of loan tenure
      */
      if (dataNonRequest && dataNonRequest.dataAccount && dataNonRequest.dataAccount.dataAccountLengthening && dataNonRequest.dataAccount.dataAccountLengthening.length > 0 && checkDataAccountLengthening()) {
        let arrPartial = [...arrLengthening]
        arrPartial && arrPartial.map((item: any, idx: number) => {
          for (var i = 0; i < dataNonRequest.dataAccount.dataAccountLengthening.length; i++) {
            if (item.text === dataNonRequest.dataAccount.dataAccountLengthening[i] || dataNonRequest.dataAccount.dataAccountLengtheningFull[i] !== dataAccountNumber[`accountNumber${i + 1}`]) {
              arrPartial[idx] = {
                text: arrPartial[idx].text,
                check: true
              }
              return true
            }
          }
        })
        setListDataCheckboxLengthening(arrPartial);
      } else {
        let arrPartial = [...array]
        arrPartial && arrPartial.map((item: any, idx: number) => {
          for (var i = 0; i < numberAccountInformation; i++) {
            if (item.text === dataAccountNumber[`accountNumber${i + 1}`]) {
              arrPartial[idx] = {
                text: arrPartial[idx].text,
                check: true
              }
              return true
            }
          }
        })
        setListDataCheckboxLengthening(arrPartial);
      }

    } else {
      setListDataCheckbox(LIST_REPRICING_REQUEST);
      setListDataCheckboxLengthening(LIST_REPRICING_REQUEST);
    }

  }, []);

  /**
   * 
   * @param {Object} item - Item for checkbox
   * @returns {Array}
   */
  const handleFormatCheckBox = (item: any) => {
    const array = [];
    array.push(item);
    return array;
  };

  /**
  * Async data from Store - Retrieves listChecked && documentRequired
  */
  useEffect(() => {
    if (formReduxData.form && formReduxData.form.formLanding.listChecked && formReduxData.form.formLanding.listChecked.length > 0) {
      setSectionShow(formReduxData.form.formLanding.listChecked)
    }
    if (formReduxData.form && formReduxData.form.formLanding.documentRequired && formReduxData.form.formLanding.documentRequired.length > 0) {
      setListDocument(formReduxData.form.formLanding.documentRequired)
    }
  }, [formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.listChecked, formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.documentRequired])

  /**
   * Handle check section exist in store
   * @param {string} value  - Value for checkbox
   * @returns {boolean}
   */
  const handleCheckExistSection = (value: string) => {
    return sectionShow.includes(value)
  }


  /**
   * Handle modal
   * @function 
   * @param {string} value - Name of popup 
   */
  const openDialog = (value: string) => {
    setDialogPopup(true);
    setCategoryDialog(value)
  };
  const closeDialog = () => {
    setDialogPopup(false);
  };

  /**
   * Handle get value uploaded and set into state
   * @function 
   * @param {string} values  - Base64 img
   * @param {number} index - Index of position upload
   * @param {string} name - Name of field upload
   */
  const getSignatureFiles = (values: any, index: number, name: string) => {
    const arrayTemp = JSON.parse(JSON.stringify(listFileUpload));
    arrayTemp[index] = values;
    setListFileUpload(arrayTemp);
  };

  /**
   * Handle request account (single || multiple account), it's just DEMO
   * @function 
   * @param {string} value -  number account request(Single || Multiple)
   */
  const handleRequestAccount = (value: string) => {

    if (ACCOUNT_REQUEST[0] === value) { // single
      setListDataCheckbox(_.cloneDeep(LIST_ACCOUNT_SINGLE))
      setListDataCheckboxLengthening(_.cloneDeep(LIST_ACCOUNT_SINGLE))
    }

    if (ACCOUNT_REQUEST[1] === value) { // multiple
      setListDataCheckbox(_.cloneDeep(LIST_REPRICING_REQUEST))
      setListDataCheckboxLengthening(_.cloneDeep(LIST_REPRICING_REQUEST))
    }

  }

  /**
   * Handle update section partial prepayment when checked and uncheck - Section Partial
   * @function 
   * @param {Object} value - Value have just checked
   */
  const handleUpdateCheckbox = (value: INoneRepricingRequest.ICheckbox[]) => {

    const arr = [...listDataCheckbox];
    const idx = arr.findIndex((item: any) => item.text === value[0].name)

    // remove value payment mode when uncheck
    if (idx >= 0) {
      if (!arr[idx].check) {
        let data = { ...formDataRepricing }

        if (formDataRepricing[`paymentModeNumber${idx + 1}`]) {
          delete data[`paymentModeNumber${idx + 1}`]
        }

        if (formDataRepricing[`currencyNumber${idx + 1}`]) {
          delete data[`currencyNumber${idx + 1}`]
        }
        setFormDataRepricing(data)
      }
      else {
        const data = {
          ...formDataRepricing,
          [`paymentModeNumber${idx + 1}`]: LIST_PAYMENT_METHOD[0].value,
          [`currencyNumber${idx + 1}`]: LIST_DATA_CURRENCY[0].value
        }
        setFormDataRepricing(data)
      }
    }
    setListDataCheckbox(arr)
  }

  /**
   * Handle update section lengthening of loan tenure when checked and uncheck - Section Lengthening of loan tenure request || Shortening of loan tenure request
   * @function 
   * @param {Object} value - Value have just checked
   */
  const handleUpdateCheckboxLengthening = (value: INoneRepricingRequest.ICheckbox[]) => {
    const arr = [...listDataCheckboxLengthening];

    const idx = arr.findIndex((item: any) => item.text === value[0].name)

    // remove value payment mode when uncheck
    if (idx >= 0) {
      if (!arr[idx].check) {
        if (formDataRepricing[`loanTenure${idx + 1}`]) {
          const data = { ...formDataRepricing }
          delete data[`loanTenure${idx + 1}`]
          setFormDataRepricing(data)
        }
      }
    }
    // setListDataCheckbox(arr)
    setListDataCheckboxLengthening(arr)
  }

  /**
   * Handle reset data when onchange payment mode
   * @function 
   * @param {string} name -  Name of field select
   * @param value - Value of selected
   * @param idx - Index of selected
   */
  const handleResetDataOnchange = (name: string, value: any, idx: number) => {

    let data = { ...formDataRepricing };
    delete data[`cashPrepaymentAmount${idx}`]
    delete data[`CPFPrepaymentAmount${idx}`]
    delete data[`optionToRevise${idx}`]
    data = {
      ...data,
      [name]: value,
    }

    setFormDataRepricing(data)
  }

  /**
  * Handle check match option request
  * @function 
  * @param {Array} data - Input of option request
  * @returns {boolean}
  */
  const checkMatchOption = (data: any) => {
    return _.isEqual(_.sortBy(data), _.sortBy(sectionShow))
  }

  /**
   * Handle get data before to save into store
   * @function 
   * @returns {object}
   */
  const handleGetValueToSave = () => {
    let dataAccountPartial: string[] = [];
    let dataAccountPartialFull: string[] = [];
    let dataCommon: string[] = [];
    let dataAccountLengthening: string[] = [];
    let dataAccountLengtheningFull: string[] = [];
    const dataNonRequest = formReduxData.form.noneRepricingRequests;
    // Partial prepayment only ||  Partial prepayment only && (Lengthening of loan tenure only || Shortening of loan tenure )
    if (checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA)
      || (sectionShow.length === 1 && sectionShow[0] === DATA_STATE_REPRICING_PARTIAL[1])
      || checkMatchOption(DATA_STATE_REPRICING_PARTIAL)
      || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL)
      || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_SHORT_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL_DDA)
      || checkMatchOption(DATA_STATE_LENGTH_PARTIAL)
      || checkMatchOption(DATA_STATE_LENGTH_SHORT)
      || checkMatchOption(DATA_STATE_PARTIAL_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL)
    ) {
      listDataCheckbox.map((item, idx) => {
        if (!_.includes(dataCommon, item.text)) {
          dataCommon.push(item.text)
        }
        dataAccountPartialFull.push(item.text)
        if (item.check) {
          dataAccountPartial.push(item.text)
        } else {
          dataAccountPartial.push('')
        }
      })
    }

    // Lengthening of loan tenure only || Shortening of loan tenure
    if ((sectionShow.length === 1 && (sectionShow[0] === DATA_CARD_CHECKBOX[1].label || sectionShow[0] === DATA_CARD_CHECKBOX[2].label))
      || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL)
      || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING)
      || checkMatchOption(DATA_STATE_REPRICING_SHORT)
      || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA_MIX)
      || checkMatchOption(DATA_STATE_LENGTH_PARTIAL)
      || checkMatchOption(DATA_STATE_LENGTH_SHORT)
      || checkMatchOption(DATA_NON_REPRICING)
      || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL)
      || checkMatchOption(DATA_STATE_REPRICING_SHORTENING_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_SHORT_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_SHORT_DDA_MIX)
      || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL_DDA)
    ) {
      listDataCheckboxLengthening.map((item, idx) => {
        if (!_.includes(dataCommon, item.text)) {
          dataCommon.push(item.text)
        }
        dataAccountLengtheningFull.push(item.text)
        if (item.check) {
          dataAccountLengthening.push(item.text)
        } else {
          dataAccountLengthening.push('')
        }
      })
    }
    return {
      dataAccountPartial,
      dataAccountPartialFull,
      dataAccountLengthening,
      dataAccountLengtheningFull,
      dataCommon
    }
  }

  /**
   * Handle map data prePayment
   */

   const mapDataPrePayment = () => {
    const data = [];
    handleGetValueToSave() && handleGetValueToSave().dataAccountPartial.map((item: string, index: number) => {
        if (!_.isEmpty(item)) {
          data.push({
            "AccountId": item,
            "OutstandingPrincipalAmount": 0,
            "UndisbursedLoanAmount": 0,
            "LoanCurrency": "SGD",
            "InterestRate": 0,
            "LockInEndDate": "",
            "PaymentModeCode": "",
            "PaymentModeDesc": formDataRepricing && formDataRepricing[`paymentModeNumber${index + 1}`] || "",
            "CashPaymentAmount": formDataRepricing && formDataRepricing[`cashPrepaymentAmount${index + 1}`] || 0,
            "CashPaymentCurrency": "SGD",
            "CpfPaymentAmount": formDataRepricing && formDataRepricing[`CPFPrepaymentAmount${index + 1}`] || 0,
            "CpfPaymentCurrency": "SGD",
            "ReviseMonthlyInstalmentCode": "",
            "ReviseMonthlyInstalmentDesc": formDataRepricing && formDataRepricing[`optionToRevise${index + 1}`],
            "CurrentMonthlyInstAmount": 0,
            "CurrentMonthlyInstCurrency": "SGD",
            "RevisedMonthlyInstalment": 0,
            "RevisedLoanTenor": 0,
            "SysGenRepaymentEffectiveDate": '',
            "ReqRepaymentEffectiveDate": '',
            "PrepaymentFees": 0,
            "CommitmentFees": 0,
            "InterestInlieu": 0
          })
        }
      })
      return data;
   }

  /**
   * Handle map data Lengthening of loan tenure || Shortening of loan tenure
   */
   const mapDataLengtheningShortening = () => {
    const data = [];
    handleGetValueToSave() && handleGetValueToSave().dataAccountLengthening.map((item: string, index: number) => {
        if (!_.isEmpty(item)) {
            data.push({
              "AccountId": item,
              "AdjustmentType": _.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]) ? "LengtheningLoanTenure" : "ShorterLoanTenure",
              "OutstandingLoanAmount": 0,
              "LoanCurrency": "SGD",
              "InterestRate": 0,
              "LockInEndDate": "2021-12-24T01:38:57.014Z",
              "CurrentMonthlyInstAmount": 0,
              "CurrentMonthlyInstCurrency": "",
              "ProposedRevisedMonthlyInstalment": 0,
              "CorrespondingLoanTenor": 0,
              "ProposedRevisedLoanTenor": formDataRepricing && formDataRepricing[`loanTenure${index + 1}`] || 0,
              "CorrespondingMonthlyInstalment": 0,
              "ApplicableFees": 0
          })
        }
      })
    return data;
  }

  /**
   * Set value partial payment
   * @function 
   * @param {string} name - Name of field
   * @param value - Value input
   */
  const setValueFormPartialPayment = (name: string, value: any) => {
    setFormDataRepricing((formDataRepricing)=> (
      {
        ...formDataRepricing,
        [name]: value,
      }
    ))
  };

  const setValueFormPartialPaymentHaveError = (name: string, value: any, error: string) => {
    setFormDataRepricing({
    ...formDataRepricing,
    [name]: value,
    [`error${formatNameField(name)}`]: error === '',
  })};

  /**
   * Check the checkbox is checked
   * @function 
   * @param {Array} data - List data of checkbox
   * @returns {boolean}
   */
  const handleValidationChecked = (data: any) => {
    return data.some((item: { check: boolean, text: string }) => {
      return item.check === true
    })
  }

  /**
   * Validation for section partial prepayment
   * @function 
   * @param {Array} list -  list info of section partial 
   * @returns {boolean}
   */
  const handleValidationSectionPartialLocal = (list: any) => {
    let validation = true;
    list.map((item: any, idx: number) => {
      if (item.check === true) {
        if (formDataRepricing[`paymentModeNumber${idx + 1}`]) {
          if (formDataRepricing[`paymentModeNumber${idx + 1}`] === LIST_PAYMENT_METHOD[0].value) { // Cash only
            if (handleCheckExistSection(DATA_CONDITION_NON_PAYMENT_MODE[2])) {
              if (formDataRepricing[`cashPrepaymentAmount${idx + 1}`] && formDataRepricing[`errorCashPrepaymentAmount${idx + 1}`] && formDataRepricing[`optionToRevise${idx + 1}`]) {
                validation = validation && true
              } else {
                validation = validation && false
              }
            } else {
              if (formDataRepricing[`cashPrepaymentAmount${idx + 1}`] && formDataRepricing[`errorCashPrepaymentAmount${idx + 1}`] ) {
                validation = validation && true
              } else {
                validation = validation && false
              }
            }
          }

          if (formDataRepricing[`paymentModeNumber${idx + 1}`] === LIST_PAYMENT_METHOD[1].value) { // CPF only
            if (handleCheckExistSection(DATA_CONDITION_NON_PAYMENT_MODE[2])) {
              if (formDataRepricing[`CPFPrepaymentAmount${idx + 1}`] && formDataRepricing[`errorCPFPrepaymentAmount${idx + 1}`] && formDataRepricing[`optionToRevise${idx + 1}`]) {
                validation = validation && true
              } else {
                validation = validation && false
              }
            } else {
              if (formDataRepricing[`CPFPrepaymentAmount${idx + 1}`] && formDataRepricing[`errorCPFPrepaymentAmount${idx + 1}`] ) {
                validation = validation && true
              } else {
                validation = validation && false
              }
            }
          }
          if (formDataRepricing[`paymentModeNumber${idx + 1}`] === LIST_PAYMENT_METHOD[2].value) { // Cash and CPF
            if (!handleCheckExistSection(DATA_CONDITION_NON_PAYMENT_MODE[0]) && !handleCheckExistSection(DATA_CONDITION_NON_PAYMENT_MODE[1]) || handleCheckExistSection(DATA_CONDITION_NON_PAYMENT_MODE[2])) {
              if (formDataRepricing[`cashPrepaymentAmount${idx + 1}`] && formDataRepricing[`errorCashPrepaymentAmount${idx + 1}`] && formDataRepricing[`errorCPFPrepaymentAmount${idx + 1}`] && formDataRepricing[`CPFPrepaymentAmount${idx + 1}`] && formDataRepricing[`optionToRevise${idx + 1}`]) {
                validation = validation && true
              } else {
                validation = validation && false
              }
            } else {
              if (formDataRepricing[`cashPrepaymentAmount${idx + 1}`] && formDataRepricing[`errorCashPrepaymentAmount${idx + 1}`] && formDataRepricing[`errorCPFPrepaymentAmount${idx + 1}`] && formDataRepricing[`CPFPrepaymentAmount${idx + 1}`]) {
                validation = validation && true
              } else {
                validation = validation && false
              }
            }
          }
        } else {
          validation = validation && false
        }
      }
    })
    return validation
  }

  /**
   * Validation for section partial prepayment
   * @function 
   * @param {Array} list - list info of section lengthening 
   * @returns {boolean}
   */
  const handleValidationSectionLengthening = (list: any) => {
    let validation = true;
    list.map((item: any, idx: number) => {
      if (item.check === true) {
        if (formDataRepricing[`loanTenure${idx + 1}`] && parseInt(formDataRepricing[`loanTenure${idx + 1}`]) <= 35 && parseInt(formDataRepricing[`loanTenure${idx + 1}`]) >= 1) {
          validation = validation && true
        } else {
          validation = validation && false
        }
      }
    })
    return validation
  }

  /**
   * Handle validation input file
   * @function 
   * @returns {boolean}
   */
  var totalSizeUpload = _.sumBy(listFileUpload[0], item => Number(item.Size));
  const handleValidationInputFile = () => {
    for (const index in listFileUpload) {
      if (_.isEmpty(listFileUpload[index])) { return false; }
    }
    if (listFileUpload.length > 0 && totalSizeUpload > 5) { return false}
    return true;
    // let result = true;
    // const arrayTemp = JSON.parse(JSON.stringify(listFileUpload));
    // setListFileUpload(arrayTemp);
    // listDocument.map((item: string, idx: number) => {
    //   if (item !== NRIC) {
    //     if (listFileUpload[idx] && listFileUpload[idx].length === 1) {
    //       result = result && true
    //     } else {
    //       result = result && false
    //     }
    //   } else {
    //     if (listFileUpload[idx] && listFileUpload[idx].length <= 2 && listFileUpload[idx].length > 0) {
    //       result = result && true
    //     } else {
    //       result = result && false
    //     }
    //   }
    // });
    // result = result && (totalSizeUpload <= 5 ? true : false)
    // console.log('result', result);
    // return result
  }

  const formLanding = formReduxData.form;
  /**
   * Handle map data account
   */
  const mapDataAccount = () => {
    const lengthDataAccount = formLanding && formLanding.accountInformation && Number(formLanding.accountInformation.accountNumber)
    const data = [];
    for (var i = 0; i < lengthDataAccount; i++) {
      data.push({
        "LoanAccountNo": formLanding.accountInformation[`accountNumber${i + 1}`],
        "IsPrePayment": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.partialPrepayment[0]) && _.includes(handleGetValueToSave() && handleGetValueToSave().dataAccountPartial, formLanding.accountInformation[`accountNumber${i + 1}`])}`,
        "IsRepricing": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.repricing[0])}`,
        "IsLengtheningTenure": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]) && _.includes(handleGetValueToSave() && handleGetValueToSave().dataAccountLengthening, formLanding.accountInformation[`accountNumber${i + 1}`])}`,
        "IsShorteningTenure": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0]) && _.includes(handleGetValueToSave() && handleGetValueToSave().dataAccountLengthening, formLanding.accountInformation[`accountNumber${i + 1}`])}`,
        "IsDDA": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.ddaAccount[0])}`,
        "IsFullRedemption":`${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0])}`,
      })
    }
    return data;
  }


  /**
   * handle map data hdb owners
   * @returns 
   */

   const mapDataHdbOwner = () => {
    let formatData = [];
    const data = [] 
    if (formReduxData && formReduxData.myInfo.hdbownership && _.isArray(formReduxData.myInfo.hdbownership)) {
      formatData = formReduxData.myInfo.hdbownership;
    } else {
      formatData.push(formReduxData.myInfo.hdbownership)
    }
    if (formatData && formatData.length > 0) {
      for(var i = 0; i < formatData.length; i++) {
        data.push({
          "NoOfOwners": formatData && formatData[i] && formatData[i].noofowners && Number(formatData[i].noofowners.value) || 0,
          "HdbTypeCode": formatData && formatData[i] && formatData[i].hdbtype && formatData[i].hdbtype.code || '',
          "HdbTypeDesc": formatData && formatData[i] && formatData[i].hdbtype && formatData[i].hdbtype.desc || '',
          "LeaseCommencementDate": formatData && formatData[i] && formatData[i].leasecommencementdate && formatData[i].leasecommencementdate.value || '',
          "TermOfLease": formatData && formatData[i] && formatData[i].termoflease && Number(formatData[i].termoflease.value) || 0,
          "DateofPurchase": formatData && formatData[i] && formatData[i].dateofpurchase && formatData[i].dateofpurchase.value || '',
          "DateofOwnershiptransfer": formatData && formatData[i] && formatData[i].dateofownershiptransfer && formatData[i].dateofownershiptransfer.value || '',
          "BalanceLoanrepaymentinMnths": formatData && formatData[i] && formatData[i].balanceloanrepayment && Number(formatData[i].balanceloanrepayment.months.value) + Number(formatData[i].balanceloanrepayment.years.value) * 12 || 0,
          "OutstandingLoanbalance": formatData && formatData[i] && formatData[i].outstandingloanbalance && Number(formatData[i].outstandingloanbalance.value) || 0,
          "MonthlyLoanInstalment": formatData && formatData[i] && formatData[i].monthlyloaninstalment && Number(formatData[i].monthlyloaninstalment.value) || 0,
      })
      }
    }
    return data;
  }

  /**
   * 
   * @param clickStepper 
   * @returns 
   */
   const countryText = formLanding && formLanding.propertyInformation && formLanding.propertyInformation.country;
   const codeCountry = LIST_COUNTRIES.find(x => x.value === countryText);
   const dataSubmitManual = {
    ...formReduxData.dataForm,
    "ApplicationReceivedDate": "2021-12-28T06:17:11.610Z",
    "SystemRefNo": "",
    "ApplicationCategory": "Repricing",
    "Status": "New",
    "BlockNo": formLanding && formLanding.propertyInformation ? formLanding.propertyInformation.blockNumber : '',
    "Street": formLanding && formLanding.propertyInformation ? formLanding.propertyInformation.streetName : '',
    "Floor": formLanding && formLanding.propertyInformation ? formLanding.propertyInformation.floor : '',
    "Unit": formLanding && formLanding.propertyInformation ? formLanding.propertyInformation.unit : '',
    "PostalCode": formLanding && formLanding.propertyInformation ? formLanding.propertyInformation.postalCode : '',
    "BuildingName": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.stateCity ? formLanding.propertyInformation.stateCity : '',
    "Country": codeCountry && codeCountry.value,
    "NeedHelp": false,
    "JourneyType": "SelfServe",
    "ChannelSource": "OneAdvisor",
    "SystemDevice": "Chrome",
    "Comments": "",
    "PackageCode": formLanding && formLanding.formLanding && formLanding.formLanding.yourRate ? formLanding.formLanding.yourRate : '',
    "CreatedBy": "",
    "UpdatedBy": "",
    "CreatedDate": moment().format(),
    "UpdatedDate": moment().format(),
    "IsActive": true,
    "ApplicationGuid": "00000000-0000-0000-0000-000000000000",
    "LockinMonths": formLanding && formLanding.formLanding && formLanding.formLanding.lockIn ? formLanding.formLanding.lockIn : '',
    "PurposeCode": "",
    "PurposeDesc": formLanding && formLanding.formLanding && formLanding.formLanding.purpose ? formLanding.formLanding.purpose : '',
    "ReasonCode": "",
    "ReasonDesc": "",
    "SacuId": "00000000-0000-0000-0000-000000000000",
    "AccountMapping": {
      "AccountModel": mapDataAccount().length > 0 ? mapDataAccount() : [
        {
          "IsPrePayment": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.partialPrepayment[0])}`,
          "IsRepricing": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.repricing[0])}`,
          "IsLengtheningTenure": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0])}`,
          "IsShorteningTenure": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0])}`,
          "IsDDA": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.ddaAccount[0])}`,
          "IsFullRedemption":`${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0])}`,
        }
      ],
    },
    "RepricingDetails": {},
    "PrePaymentLoanDetails": mapDataPrePayment().length > 0 ? {
      "PrePaymentModel": mapDataPrePayment()
    } : {},
    "DDALoanDetails": formDataRepricing.newOCBCAccountNumber ? {
      "DDAModel":  [{
          // "CurrentDDAAccountNo": formDataRepricing && formDataRepricing.currentDebitingAccountNumber ? formDataRepricing.currentDebitingAccountNumber : '',
          "NewDDAAccountNo": formDataRepricing && formDataRepricing.newOCBCAccountNumber ? formDataRepricing.newOCBCAccountNumber : ''
        }
      ]
    } : {},
    "FullRedemption": {},
    "ChangeInLoanTenure": mapDataLengtheningShortening().length > 0 ? {
      "ChangeInTenureModel": mapDataLengtheningShortening()
    } : {},
    "ApplicantDetails": {
      "ApplicantModel": [{
          "RefID": "",
          "NRIC": formLanding && formLanding.personalInformation && formLanding.personalInformation.nricNumber ? formLanding.personalInformation.nricNumber : '',
          "IdIssueCountry": "",
          "PassportNo": formLanding && formLanding.personalInformation && formLanding.personalInformation.passportNumber ? formLanding.personalInformation.passportNumber : '',
          "PassportExpiryDate": "",
          "FINExpiryDate": "",
          "ApplicantType": "Main",
          "DateofBirth": "",
          "Salutation": "",
          "NameinNRIC": formLanding && formLanding.personalInformation && formLanding.personalInformation.nameNric ? formLanding.personalInformation.nameNric : formLanding && formLanding.personalInformation && formLanding.personalInformation && formLanding.personalInformation.namePassport ? formLanding.personalInformation.namePassport : '',
          "PreferredName": "",
          "HanyuPinyinName": "",
          "AliasName": "",
          "HanyuPinyinAliasName": "",
          "MarriedName": "",
          "MobileNumber": formLanding && formLanding.personalInformation && formLanding.personalInformation.phoneNumber ? `${LIST_COUNTRIES_CODE.find(c => c.name === formLanding.personalInformation.countryPhoneNumber).value}${formLanding.personalInformation.phoneNumber}` : '',
          "EmailAddress": formLanding && formLanding.personalInformation && formLanding.personalInformation.emailAddress,
          "Race": "",
          "CountryOfBirth": "",
          "NoOfDependentes": 0,
          "HomePhoneNo": "",
          "OptForeStatments": true,
          "OtherVariables": "",
          "ApplicationStatus": "None",
          "Status": "Draft",
          "ApplicantGuid": "00000000-0000-0000-0000-000000000000",
          "IsInvitedId": false,
          "IsBorrower": false,
          "PreferredLanguage": "English",
          "RelationshipCode": "",
          "RelationshipDesc": "",
          "Others": "",
          "AcceptanceStatus": "None",
          "MyinfoFlow": false,
          "CreatedBy": "",
          "UpdatedBy": "",
          "CreatedDate": "",
          "UpdatedDate": "",
          "IsActive": true,
          "CustIDTypeCode": formLanding && formLanding.personalInformation && formLanding.personalInformation.singaporeCitizen !== 'No' ? "IC" : "PP",
          "CustIDTypeDesc": formLanding && formLanding.personalInformation && formLanding.personalInformation.singaporeCitizen !== 'No' ? "NRIC" : "PASSPORT",
          "ResidentStatusCode": '',
          "ResidentStatusDesc": '',
          "PassTypeCode": '',
          "PassTypeDesc": '',
          "GenderCode": "",
          "GenderDesc": "",
          "MaritalStatusCode": "",
          "MaritalStatusDesc": "",
          "EducationLevelCode": "",
          "EducationLevelDesc": "",
          "ResidentialTypeCode": "",
          "ResidentialTypeDesc": "",
          "NationalityCode": '',
          "NationalityDesc": '',
          "OutstandingHDBLoanBalance": 0,
          "MonthlyLoanInstallment": 0,
          "ExpectedRentalCurrency": "",
          "ExpectedMonthlyRental": 0,
          "CurrentFlatOwner": "",
          "OutstandingHDBLoan": "",
          "NumberOfOccupations": 0,
          "ConsentPDPA": true,
          "ConsentCBS": true,
          "EmploymentDetails": {},
          "Addresses": {
          }
        }
      ]
    }
  }

  const dataSubmitSingPass = {
    "ApplicationReceivedDate": formReduxData && formReduxData.myInfo && formReduxData.myInfo.ApplicationReceivedDate ? formReduxData.myInfo.ApplicationReceivedDate : '',
    "SystemRefNo": formReduxData.myInfo && formReduxData.myInfo.SystemRefNo ? formReduxData.myInfo.SystemRefNo : '',
    "ApplicationCategory": formReduxData && formReduxData.myInfo && formReduxData.myInfo.ApplicationCategory ? formReduxData.myInfo.ApplicationCategory : "Repricing",
    "Status": "New",
    "BlockNo": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.blockNumber ? formLanding.propertyInformation.blockNumber : '',
    "Street": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.streetName ? formLanding.propertyInformation.streetName : '',
    "Floor": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.floor ? formLanding.propertyInformation.floor : '',
    "Unit": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.unit ? formLanding.propertyInformation.unit : '',
    "PostalCode": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.postalCode ? formLanding.propertyInformation.postalCode : '',
    "BuildingName": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.stateCity ? formLanding.propertyInformation.stateCity : '',
    "Country": codeCountry && codeCountry.value,
    "NeedHelp": formReduxData && formReduxData.myInfo && formReduxData.myInfo.NeedHelp ? formReduxData.myInfo.NeedHelp : false,
    "JourneyType": formReduxData.myInfo && formReduxData.myInfo.JourneyType ? formReduxData.myInfo.JourneyType : "SelfServe",
    "ChannelSource": formReduxData && formReduxData.myInfo && formReduxData.myInfo.ChannelSource ? formReduxData.myInfo.ChannelSource : "OneAdvisor",
    "SystemDevice": formReduxData && formReduxData.myInfo && formReduxData.myInfo.SystemDevice  ? formReduxData.myInfo.SystemDevice : "Chrome",
    "Comments": "",
    "PackageCode": formLanding && formLanding.formLanding && formLanding.formLanding.yourRate ? formLanding.formLanding.yourRate : '',
    "CreatedBy": formReduxData && formReduxData.myInfo && formReduxData.myInfo.CreatedBy ? formReduxData.myInfo.CreatedBy : "",
    "UpdatedBy": formReduxData && formReduxData.myInfo && formReduxData.myInfo.UpdatedBy ? formReduxData.myInfo.UpdatedBy :  "",
    "CreatedDate": moment().format(),
    "UpdatedDate": moment().format(),
    "IsActive": formReduxData && formReduxData.myInfo && formReduxData.myInfo.IsActive ? formReduxData.myInfo.IsActive : true,
    "ApplicationGuid": "00000000-0000-0000-0000-000000000000",
    "LockinMonths": formLanding && formLanding.formLanding && formLanding.formLanding.lockIn ? formLanding.formLanding.lockIn : '',
    "PurposeCode": "",
    "PurposeDesc": formLanding && formLanding.formLanding && formLanding.formLanding.purpose ? formLanding.formLanding.purpose : '',
    "ReasonCode": "",
    "ReasonDesc": "",
    "SacuId": formReduxData && formReduxData.myInfo && formReduxData.myInfo.SacuId ? formReduxData.myInfo.SacuId : "00000000-0000-0000-0000-000000000000",
    "AccountMapping": {
      "AccountModel": mapDataAccount().length > 0 ? mapDataAccount() : [
        {
          "IsPrePayment": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.partialPrepayment[0])}`,
          "IsRepricing": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.repricing[0])}`,
          "IsLengtheningTenure": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0])}`,
          "IsShorteningTenure": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0])}`,
          "IsDDA": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.ddaAccount[0])}`,
          "IsFullRedemption":`${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0])}`,
        }
      ]
    },
    "ChangeInLoanTenure": mapDataLengtheningShortening().length > 0 ? {
      "ChangeInTenureModel": mapDataLengtheningShortening()
    } : {},
    "RepricingDetails": {},
    "PrePaymentLoanDetails": mapDataPrePayment().length > 0 ? {
      "PrePaymentModel": mapDataPrePayment()
    } : {},
    "DDALoanDetails": formDataRepricing.newOCBCAccountNumber ? {
      "DDAModel":  [{
          // "CurrentDDAAccountNo": formDataRepricing && formDataRepricing.currentDebitingAccountNumber ? formDataRepricing.currentDebitingAccountNumber : '',
          "NewDDAAccountNo": formDataRepricing && formDataRepricing.newOCBCAccountNumber ? formDataRepricing.newOCBCAccountNumber : ''
        }
      ]
    } : {},
    "FullRedemption": {},
    "ApplicantDetails": {
      "ApplicantModel": [{
          "RefID": formReduxData && formReduxData.refId ? formReduxData.refId : "",
          "NRIC": formReduxData && formReduxData.myInfo.uinfin ? formReduxData.myInfo.uinfin.value : '',
          "IdIssueCountry": "",
          "PassportNo": formLanding && formLanding.personalInformation && formLanding.personalInformation.passportNumber ? formLanding.personalInformation.passportNumber : '',
          "PassportExpiryDate": '',
          "FINExpiryDate":  formReduxData && formReduxData.myInfo && formReduxData.myInfo.nationality && formReduxData.myInfo.nationality.code !== REGION.SG && formReduxData && formReduxData.myInfo.passexpirydate ? formReduxData.myInfo.passexpirydate.value : '',
          "ApplicantType": "Main",
          "DateofBirth": formReduxData && formReduxData.myInfo.dob ? formReduxData.myInfo.dob.value : '',
          "Salutation": "",
          "NameinNRIC": formReduxData && formReduxData.myInfo.name ? formReduxData.myInfo.name.value : '',
          "PreferredName": "",
          "HanyuPinyinName": formReduxData && formReduxData.myInfo.hanyupinyinname ? formReduxData.myInfo.hanyupinyinname.value : '',
          "AliasName": formReduxData && formReduxData.myInfo.aliasname ? formReduxData.myInfo.aliasname.value : '',
          "HanyuPinyinAliasName": formReduxData && formReduxData.myInfo.hanyupinyinaliasname ? formReduxData.myInfo.hanyupinyinaliasname.value : '',
          "MarriedName": formReduxData && formReduxData.myInfo.marriedname ? formReduxData.myInfo.marriedname.value : '',
          "MobileNumber": formLanding && formLanding.personalInformation && formLanding.personalInformation.phoneNumber ? `${LIST_COUNTRIES_CODE.find(c => c.name === formLanding.personalInformation.countryPhoneNumber).value}${formLanding.personalInformation.phoneNumber}` : '',
          "EmailAddress": formLanding && formLanding.personalInformation && formLanding.personalInformation.emailAddress || '',
          "Race": formReduxData && formReduxData.myInfo.race ? formReduxData.myInfo.race.code : '',
          "CountryOfBirth": formReduxData && formReduxData.myInfo.birthcountry ? formReduxData.myInfo.birthcountry.desc : '',
          "NoOfDependentes": 0,
          "HomePhoneNo": "",
          "OptForeStatments": true,
          "OtherVariables": "",
          "ApplicationStatus": "None",
          "Status": "Draft",
          "ApplicantGuid": "00000000-0000-0000-0000-000000000000",
          "IsInvitedId": false,
          "IsBorrower": false,
          "PreferredLanguage": "English",
          "RelationshipCode": "",
          "RelationshipDesc": "",
          "Others": "",
          "AcceptanceStatus": "None",
          "MyinfoFlow": true,
          "CreatedBy": "",
          "UpdatedBy": "",
          "CreatedDate": moment().format(),
          "UpdatedDate": moment().format(),
          "IsActive": formReduxData && formReduxData.myInfo && formReduxData.myInfo.IsActive ? formReduxData.myInfo.IsActive : true,
          "CustIDTypeCode": formReduxData && formReduxData.myInfo.residentialstatus  && (formReduxData.myInfo.residentialstatus.code === 'C' || formReduxData.myInfo.residentialstatus.code === 'P')  ? "IC" : "PP",
          "CustIDTypeDesc": formReduxData && formReduxData.myInfo.residentialstatus  && (formReduxData.myInfo.residentialstatus.code === 'C' || formReduxData.myInfo.residentialstatus.code === 'P') ? "NRIC" : "PASSPORT",
          "ResidentStatusCode": formReduxData && formReduxData.myInfo.residentialstatus && formReduxData.myInfo.residentialstatus.code || '',
          "ResidentStatusDesc": formReduxData && formReduxData.myInfo.residentialstatus ? formReduxData.myInfo.residentialstatus.desc : '',
          "PassTypeCode": formReduxData && formReduxData.myInfo.passtype ? formReduxData.myInfo.passtype.code : '',
          "PassTypeDesc": formReduxData && formReduxData.myInfo.passtype && formReduxData.myInfo.passtype.desc || '',
          "GenderCode": formReduxData && formReduxData.myInfo.sex ? formReduxData.myInfo.sex.code : '',
          "GenderDesc": formReduxData && formReduxData.myInfo.sex ? formReduxData.myInfo.sex.desc : '',
          "MaritalStatusCode": "",
          "MaritalStatusDesc": "",
          "EducationLevelCode": "",
          "EducationLevelDesc": "",
          "ResidentialTypeCode": "",
          "ResidentialTypeDesc": "",
          "NationalityCode": formReduxData && formReduxData.myInfo && formReduxData.myInfo.nationality && formReduxData.myInfo.nationality.code ? formReduxData.myInfo.nationality.code : '',
          "NationalityDesc": formReduxData && formReduxData.myInfo && formReduxData.myInfo.nationality && formReduxData.myInfo.nationality.desc ? formReduxData.myInfo.nationality.desc : '',
          "OutstandingHDBLoanBalance": 0,
          "MonthlyLoanInstallment": 0,
          "ExpectedRentalCurrency": "",
          "ExpectedMonthlyRental": 0,
          "CurrentFlatOwner": "",
          "OutstandingHDBLoan": "",
          "NumberOfOccupations": 0,
          "ConsentPDPA": true,
          "ConsentCBS": true,
          "EmploymentDetails": {},
          "Addresses": {
            "AddressModel": [
              {
                "BlockNo": formReduxData && formReduxData.myInfo.regadd && formReduxData.myInfo.regadd.block ? formReduxData.myInfo.regadd.block.value : '',
                "Street": formReduxData && formReduxData.myInfo.regadd && formReduxData.myInfo.regadd.street ? formReduxData.myInfo.regadd.street.value : '',
                "Floor": formReduxData && formReduxData.myInfo.regadd && formReduxData.myInfo.regadd.floor ? formReduxData.myInfo.regadd.floor.value : '',
                "Unit": formReduxData && formReduxData.myInfo.regadd && formReduxData.myInfo.regadd.unit ? formReduxData.myInfo.regadd.unit.value : '',
                "PostalCode": formReduxData && formReduxData.myInfo.regadd && formReduxData.myInfo.regadd.postal ? formReduxData.myInfo.regadd.postal.value : '',
                "BuildingName": formReduxData && formReduxData.myInfo.regadd && formReduxData.myInfo.regadd.building ? formReduxData.myInfo.regadd.building.value : '',
                "Country": formReduxData && formReduxData.myInfo.regadd && formReduxData.myInfo.regadd.country ? formReduxData.myInfo.regadd.country.code : '',
                "CreatedBy": "",
                "UpdatedBy": "",
                "CreatedDate": moment().format(),
                "UpdatedDate": moment().format(),
                "IsActive": true,
                "AddressTypeCode": "H",
                "AddressTypeDesc": "Resident"
              },
            ].concat(formatDataAddressHdbownership(formatDataHdbownership(formReduxData)))
          },
          "HasSacData": false,
          "NoaList": formReduxData && formReduxData.myInfo.noa && formReduxData.myInfo.noa.amount ? {
            "NOAModel": [{
                "Amount": formReduxData && formReduxData.myInfo.noa && formReduxData.myInfo.noa.amount ? formReduxData.myInfo.noa.amount.value : '',
                "YearOfAssessment": formReduxData && formReduxData.myInfo.noa && formReduxData.myInfo.noa.yearofassessment ? formReduxData.myInfo.noa.yearofassessment.value : '',
                "Employment": formReduxData && formReduxData.myInfo.noa && formReduxData.myInfo.noa.employment ? formReduxData.myInfo.noa.employment.value : '',
                "Trade": formReduxData && formReduxData.myInfo.noa && formReduxData.myInfo.noa.trade ? formReduxData.myInfo.noa.trade.value : '',
                "Rent": formReduxData && formReduxData.myInfo.noa && formReduxData.myInfo.noa.rent ? formReduxData.myInfo.noa.rent.value : '',
                "InterestRate": formReduxData && formReduxData.myInfo.noa && formReduxData.myInfo.noa.interest ? formReduxData.myInfo.noa.interest.value : '',
                "TaxClearence": formReduxData && formReduxData.myInfo.noa && formReduxData.myInfo.noa.taxclearance ? formReduxData.myInfo.noa.taxclearance.value : '',
                "Category": formReduxData && formReduxData.myInfo.noa && formReduxData.myInfo.noa.category ? formReduxData.myInfo.noa.category.value : ''
              }
            ]
          } : {},
          "CPFContributionsList": formReduxData && formReduxData.myInfo.cpfcontributions && formReduxData.myInfo.cpfcontributions.history ? {
            "CPFContributionModel": handleFormatCPFContributionsList(formReduxData && formReduxData.myInfo.cpfcontributions && formReduxData.myInfo.cpfcontributions.history)
          } : {},
          "HDBOwnershipDetails": formReduxData && formReduxData.myInfo.hdbownership ? {
            "HDBOwnershipModel": mapDataHdbOwner()
          } : {}
        }
      ]
    }
  }

  const dataSubmit = formReduxData.mainApplicant === 'Singpass' ? dataSubmitSingPass : dataSubmitManual;
  const renderDataTnc = () => {
    const dataChecked = formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked;
    const isRepricingAndLengthening = _.includes(dataChecked, LIST_REQUEST_REPRICING.repricing[0]) && _.includes(dataChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]);
    const dataTnc = isRepricingAndLengthening ? [LIST_DATA_TNC.fullRedemptionOfAllLoans, LIST_DATA_TNC.repricingandlengtheningOfLoanTenure] : [LIST_DATA_TNC.fullRedemptionOfAllLoans];
    dataChecked && dataChecked.map((item: any, index: number) => {
      if (item === LIST_REQUEST_REPRICING.repricing[0] && !isRepricingAndLengthening) {
        dataTnc.push(LIST_DATA_TNC.repricing)
      }
      if (item === LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0] && !isRepricingAndLengthening) {
        dataTnc.push(LIST_DATA_TNC.lengtheningOfLoanTenure)
      }
      if (item === LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0]) {
        dataTnc.push(LIST_DATA_TNC.shorteningOfLoanTenure)
      }
      if (item === LIST_REQUEST_REPRICING.partialPrepayment[0]) {
        dataTnc.push(LIST_DATA_TNC.partialPrepayment)
      }
      if (item === LIST_REQUEST_REPRICING.ddaAccount[0]) {
        dataTnc.push(LIST_DATA_TNC.ddaAccount)
      }
    })
    return dataTnc;
  }

  const handleCreateLoan = async () => {
    const responseLoansData = await createLoanAppMgmt(dataSubmit, 'NEW');
      if(responseLoansData.LoansAppMgmtResp && responseLoansData.LoansAppMgmtResp.RespBody && responseLoansData.LoansAppMgmtResp.RespBody.Result.length) {
        dispatch(getLoanCreate(responseLoansData.LoansAppMgmtResp.RespBody.Result[0].LoansAppMgmt));
      } else {
        setDataError(responseLoansData.LoansAppMgmtResp.ErrorDetail)
        setTimeout(() => {
          setLoading(false);
          openDialog(ERROR)
        }, 1500)
      }
  }

  useEffect(() => {
    const dataChecked = formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked;
    if (dataChecked.length === 1 && _.isEmpty(formReduxData.loanCreate) && (_.includes(dataChecked, DATA_CARD_CHECKBOX[4].label) || _.includes(dataChecked, DATA_CARD_CHECKBOX[5].label))) {
      handleCreateLoan();
    }
  }, [])

  const handleConvertArrListDocument = (list: any) => {
    let arr: string[] = [];
    list && list.map((item: any, idx: number) => {
      arr.push(item.label)
    });
    return arr;
  }

  useEffect(() => {
    const dataListDocument =
      formReduxData.form.personalInformation.singaporeCitizen === "Yes"
        ? LIST_DOCUMENT_NON_REPRICING_SG
        : LIST_DOCUMENT_NON_REPRICING_NONE_SG;
    const dataForm = {
      ...formReduxData.form,
      formLanding: {
        ...formReduxData.form.formLanding,
        documentRequired: handleConvertArrListDocument(dataListDocument)
      }
    };
    // check condition when just click Lengthening of loan tenure
    const isLengtheningOfLoanTenure = _.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]) && formReduxData.form.formLanding.listChecked.length === 1
    const isLengOfLoanAndRepricing = _.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]) && _.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.repricing[0])
    if (
      formReduxData.showDocument &&
      formReduxData.form.formLanding.documentRequired.length === 0 &&
      !isLengtheningOfLoanTenure &&
      !isLengOfLoanAndRepricing
    ) {
      setListDocument(handleConvertArrListDocument(dataListDocument));
      dispatch(saveFormData(dataForm))
    }
  }, [formReduxData.showDocument]);
  
  /**
   * Handle click to button next
   * @function 
   */
  const handleNext = async (clickStepper: boolean) => {
    if(formReduxData && _.isEmpty(formReduxData.dataTnc)) {
      const dataTnc = await getTncmgmt(renderDataTnc());
      if (dataTnc && dataTnc.TNCMgmtResp && dataTnc.TNCMgmtResp.RespBody && dataTnc.TNCMgmtResp.RespBody.Result) {
        dispatch(getTnc(dataTnc.TNCMgmtResp.RespBody.Result));
      } else {
        setDataError(dataTnc && dataTnc.TNCMgmtResp && dataTnc.TNCMgmtResp.ErrorDetail)
        openDialog(ERROR);
      }
    }
    let validate = false;
    /**
     * Data default
     */
    let dataForm = {
      ...formReduxData.form,
      noneRepricingRequests: {
        ...formDataRepricing,
        dataAccount: handleGetValueToSave()
      }
    }

    /**
    * Full Repricing and No-repricing
    */
    if (
      checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA)
      || sectionShow.length > 2 && _.includes(sectionShow, DATA_STATE_REPRICING_PARTIAL[0])
    ) {

      if (handleValidationChecked(listDataCheckbox) && handleValidationChecked(listDataCheckboxLengthening)) { // check have any checkbox is checked
        if (((handleValidationSectionPartialLocal(listDataCheckbox) && handleValidationSectionLengthening(listDataCheckboxLengthening)))
          // && formDataRepricing && formDataRepricing.currentDebitingAccountNumber
          && formDataRepricing.newOCBCAccountNumber
          // && formDataRepricing.errorCurrentDebitingAccountNumber
          && formDataRepricing.errorNewOCBCAccountNumber
        ) {
          if (listDocument && listDocument.length > 0 && _.isEmpty(formLanding.rePricingRequest)) {
            if (handleValidationInputFile()) {
              setLoading(true);
              const response = DATA_DOCUMENT_RESPONSE
              if (response.LoanAttachmentMgmtResp.RespBody) {
                setLoading(false);
                dataForm = {
                  ...dataForm,
                  noneRepricingRequests: {
                    ...dataForm.noneRepricingRequests,
                    listDocument: listFileUpload
                  }
                }
                dispatch(saveFormData(dataForm));
                validate = true;
                if (!clickStepper) {
                  if (formReduxData.mainApplicant === SINGPASS) {
                    history.push(URL_SINGPASS_FLOW.review);
                  } else {
                    history.push(URL_MANUAL_FLOW.review);
                  }
                }
              } else {
                
                setTimeout(() => {
                  setLoading(false)
                  openDialog(ERROR);
                }, 1500)
              }
            } else {
              validate = false;
              setKey(Date.now());
              scrollToError();
            }
          } else {
            dispatch(saveFormData(dataForm));
            validate = true;
            if (!clickStepper) {
              if (formReduxData.mainApplicant === SINGPASS) {
                history.push(URL_SINGPASS_FLOW.review);
              } else {
                history.push(URL_MANUAL_FLOW.review);
              }
            }
          }
        } else {
          validate = false;
          setKey(Date.now());
          scrollToError();
        }
      }
      // if (listDocument && listDocument.length > 0 && _.isEmpty(formLanding.rePricingRequest)) {
      //   if (handleValidationInputFile()) {
      //     setLoading(true);
      //     const response = DATA_DOCUMENT_RESPONSE
      //     if (response.LoanAttachmentMgmtResp.RespBody) {
      //       setLoading(false)
      //       dispatch(saveFormData(dataForm));
      //       validate = true;
      //       if (!clickStepper) {
      //         if (formReduxData.mainApplicant === SINGPASS) {
      //           history.push(URL_SINGPASS_FLOW.review);
      //         } else {
      //           history.push(URL_MANUAL_FLOW.review);
      //         }
      //         }
      //       } else {
              
      //         setTimeout(() => {
      //           openDialog(ERROR);
      //           setLoading(false)
      //         }, 1500)
      //       }
      //     } else {
      //       setTimeout(() => {
      //         setLoading(false);
      //         validate = false;
      //       }, 1500)
      //       setKey(Date.now());
      //       scrollToError();
      //     }
      // } else {
      //   validate = false;
      //   setKey(Date.now());
      //   scrollToError();
      //   }
      }

    /**
     * Partial prepayment && (Lengthening of loan tenure || Shortening of loan tenure)
     * 
     */
    if (
      checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL)
      || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL)
      || checkMatchOption(DATA_STATE_LENGTH_PARTIAL)
      || checkMatchOption(DATA_STATE_LENGTH_SHORT)
    ) {
      
      if (handleValidationChecked(listDataCheckbox) && handleValidationChecked(listDataCheckboxLengthening)) { 
        // check have any checkbox is checked
        if (handleValidationSectionPartialLocal(listDataCheckbox) && handleValidationSectionLengthening(listDataCheckboxLengthening)) {
          if (listDocument && listDocument.length > 0 && _.isEmpty(formLanding.rePricingRequest)) {
            if (handleValidationInputFile()) {
              setLoading(true);
              const response = DATA_DOCUMENT_RESPONSE
              if (response.LoanAttachmentMgmtResp.RespBody) {
                setLoading(false)
                dataForm = {
                  ...dataForm,
                  noneRepricingRequests: {
                    ...dataForm.noneRepricingRequests,
                    listDocument: listFileUpload
                  }
                }
                dispatch(saveFormData(dataForm));
                validate = true;
                if (!clickStepper) {
                  if (formReduxData.mainApplicant === SINGPASS) {
                    history.push(URL_SINGPASS_FLOW.review);
                  } else {
                    history.push(URL_MANUAL_FLOW.review);
                  }
                  }
                } else {
                  
                  setTimeout(() => {
                    openDialog(ERROR);
                    setLoading(false)
                  }, 1500)
                }
              } else {
                setTimeout(() => {
                  setLoading(false);
                  validate = false;
                }, 1500)
                setKey(Date.now());
                scrollToError();
              }
          } else {
            dispatch(saveFormData(dataForm));
            validate = true;
            if (!clickStepper) {
              if (formReduxData.mainApplicant === SINGPASS) {
                history.push(URL_SINGPASS_FLOW.review);
              } else {
                history.push(URL_MANUAL_FLOW.review);
              }
            }
          }
        } else {
          validate = false;
          setKey(Date.now());
          scrollToError();
        }
      }
    }

    /**
    * Partial prepayment  && Change of Direct Debiting Authorisation account
    */
    if (
      checkMatchOption(DATA_STATE_REPRICING_PARTIAL_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_SHORT_DDA)
      || checkMatchOption(DATA_STATE_PARTIAL_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA)
    ) {
      if (handleValidationChecked(listDataCheckbox)
        && handleValidationSectionPartialLocal(listDataCheckbox)
        // && formDataRepricing && formDataRepricing.currentDebitingAccountNumber
        && formDataRepricing.newOCBCAccountNumber
        // && formDataRepricing.errorCurrentDebitingAccountNumber
        && formDataRepricing.errorNewOCBCAccountNumber
      ) {
        if (listDocument && listDocument.length > 0 && _.isEmpty(formLanding.rePricingRequest)) {
          if (handleValidationInputFile()) {
            setLoading(true);
            const response = DATA_DOCUMENT_RESPONSE
            if (response.LoanAttachmentMgmtResp.RespBody) {
              setLoading(false);
              dataForm = {
                ...dataForm,
                noneRepricingRequests: {
                  ...dataForm.noneRepricingRequests,
                  listDocument: listFileUpload
                }
              }
              dispatch(saveFormData(dataForm));
              validate = true;
              if (!clickStepper) {
                if (formReduxData.mainApplicant === SINGPASS) {
                  history.push(URL_SINGPASS_FLOW.review);
                } else {
                  history.push(URL_MANUAL_FLOW.review);
                }
              }
            } else {
              
              setTimeout(() => {
                openDialog(ERROR);
                setLoading(false)
              }, 1500)
            }
          } else {
            validate = false;
            setKey(Date.now());
            scrollToError();
          }
        } else {
          validate = true;
          dispatch(saveFormData(dataForm));
          if (!clickStepper) {
            if (formReduxData.mainApplicant === SINGPASS) {
              history.push(URL_SINGPASS_FLOW.review);
            } else {
              history.push(URL_MANUAL_FLOW.review);
            }
          }
        }
        
      } else {
        validate = false;
        setKey(Date.now());
        scrollToError();
      }
    }

    /**
    * Lengthening of loan tenure ||  Shortening of loan tenure  && Change of Direct Debiting Authorisation account
    */
    if (
      checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_SHORTENING_DDA)
    ) {
      if (handleValidationSectionLengthening(listDataCheckboxLengthening)
        // && formDataRepricing && formDataRepricing.currentDebitingAccountNumber
        && formDataRepricing.newOCBCAccountNumber
        // && formDataRepricing.errorCurrentDebitingAccountNumber
        && formDataRepricing.errorNewOCBCAccountNumber
      ) {
        if (listDocument && listDocument.length > 0 && _.isEmpty(formLanding.rePricingRequest)) {
          if (handleValidationInputFile()) {
            setLoading(true);
            const response = DATA_DOCUMENT_RESPONSE
            if (response.LoanAttachmentMgmtResp.RespBody) {
              setLoading(false);
              dataForm = {
                ...dataForm,
                noneRepricingRequests: {
                  ...dataForm.noneRepricingRequests,
                  listDocument: listFileUpload
                }
              }
              dispatch(saveFormData(dataForm));
              validate = true;
              if (!clickStepper) {
                if (formReduxData.mainApplicant === SINGPASS) {
                  history.push(URL_SINGPASS_FLOW.review);
                } else {
                  history.push(URL_MANUAL_FLOW.review);
                }
              }
            } else {
              
              setTimeout(() => {
                openDialog(ERROR);
                setLoading(false)
              }, 1500)
            }
          } else {
            validate = false;
            setKey(Date.now());
            scrollToError();
          }
        } else {
          dispatch(saveFormData(dataForm));
          validate = true;
          if (!clickStepper) {
            if (formReduxData.mainApplicant === SINGPASS) {
              history.push(URL_SINGPASS_FLOW.review);
            } else {
              history.push(URL_MANUAL_FLOW.review);
            }
          }
        }
      } else {
        validate = false;
        setKey(Date.now());
        scrollToError();
      }
    }

    /**
     * Partial prepayment only
     */
    if ((sectionShow.length === 1 && sectionShow[0] === DATA_STATE_REPRICING_PARTIAL[1] || checkMatchOption(DATA_STATE_REPRICING_PARTIAL))) {
      if (handleValidationChecked(listDataCheckbox)) { // check have any checkbox is checked
        if (handleValidationSectionPartialLocal(listDataCheckbox)) {
          if (listDocument && listDocument.length > 0 && _.isEmpty(formLanding.rePricingRequest)) {
            const response = DATA_DOCUMENT_RESPONSE
            if (handleValidationInputFile()) {
              setLoading(true)
              if (response.LoanAttachmentMgmtResp.RespBody) {
                setLoading(false)
                validate = true;
                  dataForm = {
                    ...dataForm,
                    noneRepricingRequests: {
                      ...dataForm.noneRepricingRequests,
                      listDocument: listFileUpload
                    }
                  }
                  dispatch(saveFormData(dataForm));
                  if (!clickStepper) {
                    if (formReduxData.mainApplicant === SINGPASS) {
                      history.push(URL_SINGPASS_FLOW.review);
                    } else {
                      history.push(URL_MANUAL_FLOW.review);
                    }
                  }
                }
              } else {
                
                setTimeout(() => {
                  openDialog(ERROR);
                  validate = false;
                  setLoading(false)
                }, 1500)
                setKey(Date.now());
                scrollToError();
              }
          } else {
            validate = true;
            dispatch(saveFormData(dataForm));
            if (!clickStepper) {
              if (formReduxData.mainApplicant === SINGPASS) {
                history.push(URL_SINGPASS_FLOW.review);
              } else {
                history.push(URL_MANUAL_FLOW.review);
              }
            }
          }
        } else {
          validate = false;
          setKey(Date.now());
          scrollToError();
        }
      }
    }

    /**
     * Lengthening of loan tenure only || Shortening of loan tenure
     */
    if ((sectionShow.length === 1 && (sectionShow[0] === DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA[1] || sectionShow[0] === DATA_CARD_CHECKBOX[2].label))
      || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING)
      || checkMatchOption(DATA_STATE_REPRICING_SHORT)
    ) {
      if (formReduxData.isBorrower && formReduxData.mainApplicant === MANUAL) { // Borrower flow and manual
        if (listDocument && listDocument.length > 0 && _.isEmpty(formLanding.rePricingRequest)) { // have list document request
          if (handleValidationInputFile()) {
            setLoading(true)
            const response = DATA_DOCUMENT_RESPONSE
            if(response.LoanAttachmentMgmtResp.RespBody) {
              setLoading(false)
              validate = true;
              dataForm = {
                ...dataForm,
                noneRepricingRequests: {
                  ...dataForm.noneRepricingRequests,
                  listDocument: listFileUpload
                }
              }
              dispatch(saveFormData(dataForm));
              history.push(URL_REVIEW_BORROWER_MANUAL);
            } else {
              
              setTimeout(() => {
                openDialog(ERROR);
                setLoading(false)
              }, 1500)
            }
          } else {
            validate = false;
            setKey(Date.now());
            scrollToError();
          }
        } else {
          validate = false;
          setKey(Date.now());
          scrollToError();
        }
      } else {
        if (handleValidationChecked(listDataCheckboxLengthening)) { // check have any checkbox is checked
          if (handleValidationSectionLengthening(listDataCheckboxLengthening)) {
            if (listDocument && listDocument.length > 0 && _.isEmpty(formLanding.rePricingRequest)) { // have list document request
              if (handleValidationInputFile()) {
                setLoading(true)
                const response = DATA_DOCUMENT_RESPONSE
                if (response.LoanAttachmentMgmtResp.RespBody) {
                  setLoading(false)
                  dataForm = {
                    ...dataForm,
                    noneRepricingRequests: {
                      ...dataForm.noneRepricingRequests,
                      listDocument: listFileUpload
                    }
                  }
                  dispatch(saveFormData(dataForm));
                  validate = true;
                } else {
                  
                  setTimeout(() => {
                    openDialog(ERROR);
                    setLoading(false)
                  }, 1500)
                }
                /**
                * Borrower flow && Only Lengthening of loan tenure 
                */
                if (formReduxData.isBorrower) {
                  if (formReduxData.form && formReduxData.form.formLanding
                    && formReduxData.form.formLanding.listChecked
                    && formReduxData.form.formLanding.listChecked.length === 1
                    && formReduxData.form.formLanding.listChecked[0] === LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]
                  ) {
                    validate = true;
                    history.push(URL_REVIEW_BORROWER_MANUAL);
                  }
                } else {
                  validate = true;
                  if (!clickStepper) {
                    if (formReduxData.mainApplicant === SINGPASS) {
                      history.push(URL_SINGPASS_FLOW.review);
                    } else {
                      history.push(URL_MANUAL_FLOW.review);
                    }
                  }
                }
              } else {
                validate = false;
                setKey(Date.now());
                scrollToError();
              }
            } else {
              dispatch(saveFormData(dataForm));
              /**
               * Borrower flow && Only Lengthening of loan tenure 
               */
              if (formReduxData.isBorrower) {
                if (formReduxData.form && formReduxData.form.formLanding
                  && formReduxData.form.formLanding.listChecked
                  && formReduxData.form.formLanding.listChecked.length === 1
                  && formReduxData.form.formLanding.listChecked[0] === LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]
                ) {
                  validate = true;
                  history.push(URL_REVIEW_BORROWER_MANUAL);
                }
              } else {
                validate = true;
                if (!clickStepper) {
                  if (formReduxData.mainApplicant === SINGPASS) {
                    history.push(URL_SINGPASS_FLOW.review);
                  } else {
                    history.push(URL_MANUAL_FLOW.review);
                  }
                }
              }
            }
          } else {
            validate = false;
            setKey(Date.now());
            scrollToError();
          }
        }
      }

    }

    


    /**
     * Lengthening of loan tenure only && Change of Direct Debiting Authorisation account
     */
    if ((checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA_MIX) || checkMatchOption(DATA_STATE_REPRICING_SHORT_DDA_MIX))) {
      if (handleValidationSectionLengthening(listDataCheckboxLengthening)
        // && formDataRepricing && formDataRepricing.currentDebitingAccountNumber
        && formDataRepricing.newOCBCAccountNumber
        // && formDataRepricing.errorCurrentDebitingAccountNumber
        && formDataRepricing.errorNewOCBCAccountNumber
      ) {
        dispatch(saveFormData(dataForm));
        validate = true;
        if (!clickStepper) {
          if (formReduxData.mainApplicant === SINGPASS) {
            history.push(URL_SINGPASS_FLOW.review);
          } else {
            history.push(URL_MANUAL_FLOW.review);
          }
        }
      } else {
        validate = false;
        setKey(Date.now());
        scrollToError();
      }
    }

    /**
    * Full redemption of all loans
    */
    if (sectionShow.length === 1 && sectionShow[0] === LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0]) {
      dispatch(setDataForm(dataSubmit));
      validate = true;
      if (!clickStepper) {
        childRefFullRedemption.current.handleNext(false)
        setKey(Date.now());
        scrollToError();
      } else {
        childRefFullRedemption.current.handleNext(true);
        validate = childRefFullRedemption.current.handleNext(true);
      }
    }

    /**
     * DDA account
     */
    if ((sectionShow.length === 1 && sectionShow[0] === LIST_REQUEST_REPRICING.ddaAccount[0])
      || checkMatchOption(DATA_STATE_REPRICING_DDA)
    ) {
      dispatch(setDataForm(dataSubmit));
      if (
        // formDataRepricing && formDataRepricing.currentDebitingAccountNumber
        formDataRepricing.newOCBCAccountNumber
        // && formDataRepricing.errorCurrentDebitingAccountNumber
        && formDataRepricing.errorNewOCBCAccountNumber
      ) {
        if (listDocument && listDocument.length > 0 && _.isEmpty(formLanding.rePricingRequest)) {
          if (handleValidationInputFile()) {
            setLoading(true)
            const response = DATA_DOCUMENT_RESPONSE
              if (response.LoanAttachmentMgmtResp.RespBody) {
                setLoading(false)
                dataForm = {
                  ...dataForm,
                  noneRepricingRequests: {
                    ...dataForm.noneRepricingRequests,
                    listDocument: listFileUpload
                  }
                }
                dispatch(saveFormData(dataForm));
                validate = true;
                if (!clickStepper) {
                  if (formReduxData.mainApplicant === SINGPASS) {
                    history.push(URL_SINGPASS_FLOW.review);
                  } else {
                    history.push(URL_MANUAL_FLOW.review);
                  }
                }
              } else {
                
                setTimeout(() => {
                  openDialog(ERROR);
                  setLoading(false);
                }, 1500)
              }
          } else {
            validate = false;
            setKey(Date.now());
            scrollToError();
          }
        } else {
          validate = true;
          dispatch(saveFormData(dataForm));
          setLoading(true);
          if (!clickStepper) {
            if (formReduxData && formReduxData.loanCreate && !_.isEmpty(formReduxData.loanCreate)) {
              if (formReduxData.mainApplicant === SINGPASS) {
                history.push(URL_SINGPASS_FLOW.review);
              } else {
                history.push(URL_MANUAL_FLOW.review);
              }
            }
          }
        }
      } else {
        validate = false;
        setKey(Date.now());
        scrollToError();
      }
    }
    return validate;

  }

  /**
   * Handle prev
   */
  const handlePrev = () => {
    /**
     * Detect click previous button
     */
    const formLanding = formReduxData.form;
    const listRepricingLength = checkMatchOption(DATA_STATE_REPRICING_LENGTHENING) && formLanding.formLanding.listChecked.length === 2
    if (formReduxData.isBorrower) {
      history.push(URL_PERSONAL_BORROWER_MANUAL)
    } else {
      if ((checkMatchOption(DATA_STATE_REPRICING_PARTIAL)
        || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING)
        || checkMatchOption(DATA_STATE_REPRICING_SHORT)
        || checkMatchOption(DATA_STATE_REPRICING_DDA)
      ) && formLanding.formLanding.documentRequired.length > 0) {
        if (formReduxData.mainApplicant === SINGPASS) {
          history.push(URL_SINGPASS_FLOW.repricingRequest)
        } else {
          if (listRepricingLength) {
            history.push(URL_MANUAL_FLOW.accountInformation)
          } else {
            history.push(URL_MANUAL_FLOW.repricingRequest)
          }
        }
      } else {
        if ((LIST_REQUEST_REPRICING.ddaAccount[0] === formLanding.formLanding.listChecked[0] || formLanding.formLanding.listChecked[0] === LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0]) && formLanding.formLanding.listChecked.length === 1) {
          if (formReduxData.mainApplicant === SINGPASS) {
            history.push(URL_SINGPASS_FLOW.propertyInformation)
          } else {
            history.push(URL_MANUAL_FLOW.propertyInformation)
          }
        }
        else if (checkMatchOptionNonRepricing() || checkMatchOptionNonRepricingAndPricingInvestment()) {
          if (formReduxData.mainApplicant === SINGPASS) {
            history.push(URL_SINGPASS_FLOW.accountInformation)
          } else {
            history.push(URL_MANUAL_FLOW.accountInformation)
          }
        } else if (checkMatchOptionNonRepricingAndPricing()) {
          if (formReduxData.mainApplicant === SINGPASS) {
            history.push(URL_SINGPASS_FLOW.repricingRequest)
          } else {
            history.push(URL_MANUAL_FLOW.repricingRequest)
          }
        }
        else {
          if (formReduxData.mainApplicant === SINGPASS) {
            history.push(URL_SINGPASS_FLOW.accountInformation)
          } else {
            history.push(URL_MANUAL_FLOW.accountInformation)
          }
        }
      }
    }
  }

  /**
   * @function 
   * handle change request Non-repricing
   * @param {Array} value - Section want to show 
   */
  const handleChangeRequestRepricing = (value: string[]) => {
    let dataForm = {
      ...formReduxData.form,
      formLanding: {
        ...formReduxData.form && formReduxData.form.formLanding,
        listChecked: value,
      }
    }
    dispatch(saveFormData(dataForm));
  }

  // function call back when click on stepper
  useImperativeHandle(ref, () => ({
    validateForm() {
      if (formReduxData.form) {
        if (_.isEmpty(formReduxData.form.noneRepricingRequests)) {
          return true;
        }
        return handleNext(true);
      } return true;
    },
    handleNextPage() {
      handleNext(true);
    },
  }));

  /**
   * Render UI button
   * @function 
   * @returns 
   */
  const renderButton = () => {
    return (
      <Button backgroundClass="bgGunmetalBluegrey" onClick={() => handleNext(false)}>
        {
          formReduxData.form && formReduxData.form.isEditing ? (
            <>
              {REVIEW}
            </>
          ) : (
            <>
              {NEXT}
            </>
          )
        }
        <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
      </Button>
    )
  }

  /**
   * Detect title for Partial Section
   * @function 
   * @returns {string}
   */
  const handleDetectHeaderIntro = () => {
    const dataForm = formReduxData.form
    if (dataForm && dataForm.formLanding) {
      if (dataForm.formLanding.lockIn === NO && (dataForm.formLanding.yourRate === LIST_SELECT_PARTIAL[1].value || dataForm.formLanding.yourRate === LIST_SELECT_PARTIAL[2].value)) {
        return DATA_NONE_REPRICING_REQUEST.subTitlePartialNoOtherFixed
      }
      if (dataForm.formLanding.lockIn === NO && dataForm.formLanding.yourRate === LIST_SELECT_PARTIAL[0].value) {
        return DATA_NONE_REPRICING_REQUEST.subTitlePartialNo
      }
      if (dataForm.formLanding.lockIn === YES && dataForm.formLanding.yourRate === LIST_SELECT_PARTIAL[1].value) {
        return DATA_NONE_REPRICING_REQUEST.subTitlePartialYesFixed
      }
      if (dataForm.formLanding.lockIn === YES && dataForm.formLanding.yourRate === LIST_SELECT_PARTIAL[0].value) {
        return DATA_NONE_REPRICING_REQUEST.subTitlePartialYesCof
      }
      if (dataForm.formLanding.lockIn === YES && dataForm.formLanding.yourRate === LIST_SELECT_PARTIAL[2].value) {
        return DATA_NONE_REPRICING_REQUEST.subTitlePartialYes
      }
    } else {
      return DATA_NONE_REPRICING_REQUEST.subTitlePartial
    }
  }

  /**
   * Detect title for Input Loan Tenure
   * @function 
   * @returns {string}
   */
  const handleDetectLabelInputLoanTenure = () => {
    const dataForm = formReduxData.form
    if ((dataForm && dataForm.formLanding && _.includes(dataForm.formLanding.listChecked, DATA_CARD_CHECKBOX[1].label))) {
      return DATA_NONE_REPRICING_REQUEST.labelInputLengthening
    }
    if (dataForm && dataForm.formLanding && _.includes(dataForm.formLanding.listChecked, DATA_CARD_CHECKBOX[2].label)) {
      return DATA_NONE_REPRICING_REQUEST.labelInputShorten
    }

    if (checkMatchOption(DATA_STATE_REPRICING_LENGTHENING)) {
      return DATA_NONE_REPRICING_REQUEST.labelInputRecingLength
    }
  }

  /**
   * Detect title for Input Loan Tenure
   * @function 
   * @returns {string}
   */
   const handleDetectLabelMultiInput = () => {
    const dataForm = formReduxData.form
    if (dataForm && dataForm.formLanding && dataForm.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[1].label) {
      return DATA_NONE_REPRICING_REQUEST.labelCheckboxLengthening
    }
    if (dataForm && dataForm.formLanding && dataForm.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[2].label) {
      return DATA_NONE_REPRICING_REQUEST.labelCheckboxShorten
    }
  }

  const checkDataPaymentModeNumber = () => {
    // if (formReduxData.mainApplicant === "Manual") {
    //   let validate = false;
    //   const numberAccountInformation = Number(formReduxData.form && formReduxData.form.accountInformation && formReduxData.form.accountInformation.accountNumber);
    //   const dataNonRequest = formReduxData.form.noneRepricingRequests
    //   const dataNumberNonRequest = dataNonRequest.dataAccount && dataNonRequest.dataAccount.dataCommon.length > 0 ? dataNonRequest.dataAccount.dataCommon.length : 0;
    //   if (numberAccountInformation === dataNumberNonRequest || dataNumberNonRequest === 0) {
    //     validate = true
    //   }
    //   return validate;
    // }
    return true;
  }

  // set data
  useEffect(() => {
    const data = formReduxData.form;
    const dataAccountNumber = formReduxData.form.accountInformation;
    if (data && !_.isEmpty(data.noneRepricingRequests) && checkDataPaymentModeNumber()) {
      let arrayFormat = {...data.noneRepricingRequests, countryProperty:  formReduxData.form && formReduxData.form.propertyInformation && formReduxData.form.propertyInformation.country};
      if (data.noneRepricingRequests && data.noneRepricingRequests.dataAccount && data.noneRepricingRequests.dataAccount.dataCommon.length > 0) {
        for (var i = 0; i < Number(dataAccountNumber && dataAccountNumber.accountNumber); i++ ) {
          if (formDataRepricing.countryProperty !== data.noneRepricingRequests.countryProperty) {
            if (formDataRepricing.countryProperty !== LIST_PROPERTY_COUNTRY[0]) {
              arrayFormat[`currencyNumber${i + 1}`] = LIST_DATA_CURRENCY[0].value
              arrayFormat[`paymentModeNumber${i + 1}`] = LIST_PAYMENT_METHOD[0].value
              arrayFormat[`loanTenure${i + 1}`] = ''
              arrayFormat[`cashPrepaymentAmount${i + 1}`] = ''
              arrayFormat[`optionToRevise${i + 1}`] = ''
              arrayFormat[`CPFPrepaymentAmount${i + 1}`] = ''
            } else {
              arrayFormat[`loanTenure${i + 1}`] = ''
              arrayFormat[`cashPrepaymentAmount${i + 1}`] = ''
              arrayFormat[`optionToRevise${i + 1}`] = ''
              arrayFormat[`currencyNumber${i + 1}`] = ''
              arrayFormat[`CPFPrepaymentAmount${i + 1}`] = ''
              arrayFormat[`paymentModeNumber${i + 1}`] = ''
            }
          } else {
            if (formReduxData.form && formReduxData.form.propertyInformation && formReduxData.form.propertyInformation.country !== LIST_PROPERTY_COUNTRY[0]) {
              if (!_.includes(data.noneRepricingRequests.dataAccount.dataCommon, dataAccountNumber[`accountNumber${i + 1}`])) {
                if (data && data.formLanding && _.includes(data.formLanding.listChecked, DATA_CARD_CHECKBOX[3].label)) {
                  arrayFormat[`loanTenure${i + 1}`] = ''
                  arrayFormat[`cashPrepaymentAmount${i + 1}`] = ''
                  arrayFormat[`optionToRevise${i + 1}`] = ''
                  arrayFormat[`CPFPrepaymentAmount${i + 1}`] = ''
                  arrayFormat[`currencyNumber${i + 1}`] = LIST_DATA_CURRENCY[0].value
                  arrayFormat[`paymentModeNumber${i + 1}`] = LIST_PAYMENT_METHOD[0].value
                }
              } else {
                // arrayFormat[`loanTenure${i + 1}`] = ''
                // arrayFormat[`cashPrepaymentAmount${i + 1}`] = ''
                // arrayFormat[`optionToRevise${i + 1}`] = ''
                // arrayFormat[`CPFPrepaymentAmount${i + 1}`] = ''
                arrayFormat[`currencyNumber${i + 1}`] = data.noneRepricingRequests[`currencyNumber${i + 1}`] || LIST_DATA_CURRENCY[0].value
                arrayFormat[`paymentModeNumber${i + 1}`] = LIST_PAYMENT_METHOD[0].value
              }
            } else {
              if (!_.includes(data.noneRepricingRequests.dataAccount.dataCommon, dataAccountNumber[`accountNumber${i + 1}`])) {
                if (data && data.formLanding && _.includes(data.formLanding.listChecked, DATA_CARD_CHECKBOX[3].label)) {
                  arrayFormat[`loanTenure${i + 1}`] = ''
                  arrayFormat[`cashPrepaymentAmount${i + 1}`] = ''
                  arrayFormat[`optionToRevise${i + 1}`] = ''
                  arrayFormat[`currencyNumber${i + 1}`] = ''
                  arrayFormat[`CPFPrepaymentAmount${i + 1}`] = ''
                  arrayFormat[`paymentModeNumber${i + 1}`] = ''
                } else {
                  arrayFormat[`loanTenure${i + 1}`] = ''
                  arrayFormat[`cashPrepaymentAmount${i + 1}`] = ''
                  arrayFormat[`CPFPrepaymentAmount${i + 1}`] = ''
                  arrayFormat[`optionToRevise${i + 1}`] = ''
                  arrayFormat[`paymentModeNumber${i + 1}`] = ''
                }
              }
            }
          }
        }
      }
      setFormDataRepricing(arrayFormat)
    } else {
      const list = [...listDataCheckbox]
      let element = {}
      if ((formReduxData.form) && (formReduxData.form.propertyInformation && formReduxData.form.propertyInformation.country !== LIST_PROPERTY_COUNTRY[0]) && (!formReduxData.isBorrower)) {
        if (data && data.accountInformation && data.accountInformation.accountNumber) {
          const numberAccountInformation = Number(formReduxData.form.accountInformation.accountNumber);
          const dataAccountNumber = formReduxData.form.accountInformation;
          for (var i = 0; i < numberAccountInformation; i++) {
            element[`paymentModeNumber${i + 1}`] = LIST_PAYMENT_METHOD[0].value
            element[`currencyNumber${i + 1}`] = LIST_DATA_CURRENCY[0].value
          }
        }
        setFormDataRepricing({
          ...formDataRepricing,
          ...element,
        })
      }
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  /**
   * show detect content for popup
   */
  const contentPopupDemo = () => (
    <>
      {
        categoryDialog === SLUG_POPUP[0] && (
          <IRAS />
        )
      }

      {
        categoryDialog === SLUG_POPUP[1] && (
          <CPFContribution />
        )
      }

      {
        categoryDialog === SLUG_POPUP[2] && (
          <NOA />
        )
      }

      {
        categoryDialog === SLUG_POPUP[3] && (
          <CPFProp />
        )
      }

      {
        categoryDialog === SLUG_POPUP[4] && (
          <HDB />
        )
      }
      {
        categoryDialog === ERROR && (
          <Error dataError={dataError}/>
        )
      }
    </>
  )

  /**
  * Async data from Store - Retrieves listFileUpload
  */
  useEffect(() => {
    if (formReduxData.form && formReduxData.form.noneRepricingRequests && formReduxData.form.noneRepricingRequests.listDocument) {
      setListFileUpload(formReduxData.form.noneRepricingRequests.listDocument)
    }

  }, [formReduxData.form && formReduxData.form.noneRepricingRequests])
  return (
    <>
    {loading && <div className={cx('container-loading')}>
      <div className={cx('content-loading')}>
        <Loading />
      </div>
    </div>}
    <div className={cx('mod-non-repricing-requests', 'max-width-common-right')}>
      {/* Title */}
      <NoneRepricingRequestTitle
        title={DATA_NONE_REPRICING_REQUEST.title}
        cx={cx}
      />
      {/* Partial prepayment */}
      {
        handleCheckExistSection(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA[2]) && (
          <NoneRepricingRequestPartial
            listDataCheckbox={listDataCheckbox}
            handleFormatCheckBox={handleFormatCheckBox}
            handleUpdateCheckbox={handleUpdateCheckbox}
            setValueFormPartialPayment={setValueFormPartialPayment}
            listPaymentMode={listPaymentMode}
            selectKey={key}
            cx={cx}
            listOptionToRevise={listOptionToRevise}
            formDataRepricing={formDataRepricing}
            handleResetDataOnchange={handleResetDataOnchange}
            setValueFormPartialPaymentHaveError={setValueFormPartialPaymentHaveError}
            formReduxData={formReduxData}
            listCurrency={listCurrency}
            handleDetectTitle={handleDetectHeaderIntro}
            handleCheckExistSection={handleCheckExistSection}
          />
        )
      }

      {/* Lengthening of loan tenure */}
      {
        (handleCheckExistSection(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA[1]) || handleCheckExistSection(LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0])) && (
          <NoneRepricingRequestLengtheningOfLoan
            selectKey={key}
            cx={cx}
            formDataRepricing={formDataRepricing}
            handleFormatCheckBox={handleFormatCheckBox}
            listDataCheckboxLengthening={listDataCheckboxLengthening}
            handleUpdateCheckboxLengthening={handleUpdateCheckboxLengthening}
            setValueFormPartialPayment={setValueFormPartialPayment}
            formReduxData={formReduxData}
            listDocument={listDocument}
            getSignatureFiles={getSignatureFiles}
            handleDetectLabel={handleDetectLabelInputLoanTenure}
            handleDetectMultiInput={handleDetectLabelMultiInput}
            openDialog={openDialog}
            listFileUpload={listFileUpload}
            checkMatchOption={checkMatchOption}
          />
        )
      }

      {/* Change of Direct Debiting Authorisation account */}
      {
        handleCheckExistSection(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA[3]) && (
          <NoneRepricingRequestChangeOfDirect
            inputKey={key}
            cx={cx}
            isOneListChecked={formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.listChecked.length === 1}
            formDataRepricing={formDataRepricing}
            setValueFormPartialPaymentHaveError={setValueFormPartialPaymentHaveError}
          />
        )
      }

      {/* Full redemption of all loans */}
      {
        handleCheckExistSection(LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0]) && (
          <NoneRepricingRequestFullRedemption ref={childRefFullRedemption} handleValidationInputFile={handleValidationInputFile} listDocument={listDocument} listFileUpload={listFileUpload} dataSubmit={dataSubmit} setLoading={setLoading} setDataError={setDataError} openDialog={openDialog} />
        )
      }
      {/* List document request upload */}
      {
        listDocument && listDocument.length > 0 && _.isEmpty(formLanding.rePricingRequest) && (
          <NoneRepricingRequestDocument
            listDocument={listDocument}
            selectKey={key}
            formReduxData={formReduxData}
            cx={cx}
            getSignatureFiles={getSignatureFiles}
            openDialog={openDialog}
            listFileUpload={listFileUpload}
            totalSizeUpload={totalSizeUpload}
          />
        )
      }

      {/* Section button  */}
      <section className={cx('button-wrapper', 'd-flex space-between mt-dt-40')}>
        <Button backgroundClass="square" onClick={() => handlePrev()}>
          <ArrowBackIcon className={cx('arrow')} />
        </Button>
        <div>
          <div className="d-inline">
            {children}
          </div>
          <div className="ml-dt-30 d-inline reverse-bg-button">
            {renderButton()}
          </div>
        </div>
      </section>

      {/* Popup Demo */}
      <Dialog
        isOpen={dialogPopup}
        hasCloseBtn
        onRequestClose={closeDialog}
        width={WIDTH_DIALOG_DEFAULT}
      >
        {
          contentPopupDemo()
        }
      </Dialog>

    </div >
    </>
  );
});
export default NonRepricingRequests;