/***
 *  ACCOUNT INFORMATION
 *    >> child
 *      >> input base
 *      >> section wrapper
 *      >> input mobile
 *      >> button
 *      >> row info
 *      >> select
 *      >> dialog
 */
// import lib
import classnames from "classnames/bind";
import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import styles from "./AccountInformation.scss";
import { v4 as uuidv4 } from 'uuid';
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  SectionWrapper,
  Select,
  Dialog,
  InputBase,
  InputNumberMobile,
  RowInfo,
  Button,
  Radio,
  Loading,
} from '@sectionsg/orc';

//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Error from '../../popup/Error';

// import image
import IconAccountInformation from "../../../assets/images/account-information.png";
import myInfo from '../../../assets/images/icon-logo-3.png';
import myInfoBlue from '../../../assets/images/icon-info-blue.svg';

// import constant
import { LIST_ACCOUNT_NUMBER, LIST_BORROWER_NUMBER, LIST_COUNTRIES_CODE, PERSONAL_INFORMATION_SINGPASS, LIST_RADIO, LIST_TERM_LOAN, URL_MANUAL_FLOW, YES, NO, LIST_TERM_LOAN_YES_NO, REVIEW, NEXT, DATA_CARD_CHECKBOX, DATA_STATE_REPRICING_LENGTHENING, DATA_STATE_LENGTH_PARTIAL, DATA_REPRICING, DATA_STATE_REPRICING_PARTIAL, DATA_STATE_REPRICING_SHORT, DATA_STATE_LENGTH_SHORT, DATA_STATE_REPRICING_LENGTHENING_DDA, DATA_STATE_PARTIAL_DDA, DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA, DATA_STATE_REPRICING_LENGTHENING_DDA_MIX, DATA_STATE_REPRICING_DDA, DATA_STATE_REPRICING_SHORT_DDA_MIX, DATA_STATE_REPRICING_SHORT_PARTIAL, DATA_STATE_REPRICING_SHORTENING_DDA, LIST_COUNTRIES, LIST_REQUEST_REPRICING, ERROR, DATA_STATE_REPRICING_PARTIAL_SHORT_DDA, DATA_STATE_REPRICING_PARTIAL_DDA, LIST_NATIONAL, LIST_DATA_TNC, DATA_LENGTH, LIST_DOCUMENT_TENURE_2_OWNER_SG_HAVE_TERM_REPRICING_AND_NO_REPRICING_SG, LIST_DOCUMENT_NON_REPRICING_SG, LIST_DOCUMENT_NON_REPRICING_NONE_SG } from '../../../utils/constants';

// import function
import { preventSpecialCharacters, restrictEmail, formatNameField, scrollToError, handleFormatCPFContributionsList, restrictOnlyDigital, checkMatchOption, handleConvertArrListDocument, autoFocus } from '../../../utils/utils';

// import interface
import { IAccountInformation } from './AccountInformation.d'

// import content dialog
import LoanAccountNumber from '../../popup/LoanAccountNumber';

import { useDispatch } from "react-redux";
import { getLoanCreate, getTnc, saveFormData, setDataForm } from "@/store/form";
import _ from "lodash";
import moment from "moment";
import { createLoanAppMgmt, getTncmgmt } from "@/data-manager/info";
import { IgnorePlugin } from "webpack";
import { adobeErrorInfo } from "@/utils/adobeTracking";

const cx = classnames.bind(styles);

const AccountInformation: React.FC<IAccountInformation.IProps> = forwardRef(({ checkMatchOptionNonRepricing, checkMatchOptionNonRepricingAndPricingInvestment, children }, ref) => {
  const [dialogId, setDialogId] = useState(null);
  const history = useHistory();
  const [key, setKey] = useState<number>(null);
  const [renderData, setRenderData] = useState<boolean>(false)
  const [categoryDialog, setCategoryDialog] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [dataError, setDataError] = useState();
  const dispatch = useDispatch();
  // get data from redux store
  const formReduxData = useSelector((state: any) => state.form);
  const dataListChecked = formReduxData && formReduxData.form &&  formReduxData.form.formLanding && formReduxData.form.formLanding.listChecked ? formReduxData.form.formLanding.listChecked : [];
  const conditionReduxData = formReduxData && formReduxData.form && formReduxData.form.formLanding;
  const personalInformation = formReduxData && formReduxData.form && formReduxData.form.personalInformation  ? formReduxData.form.personalInformation : {}

  // init data for list radio
  const [listRadio, setListRadio] = useState([
    {
      text: YES,
      checked: conditionReduxData && formReduxData.form.formLanding.termLoan === LIST_TERM_LOAN[1].value,
    },
    {
      text: NO,
      checked: conditionReduxData && formReduxData.form.formLanding.termLoan === LIST_TERM_LOAN[0].value,
    },
  ])
  const [accountInformation, setAccountInformation] = useState({
    accountNumber: '',
    borrowerNumber: '',
    countryPhoneNumber1: PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber,
    phoneNumber1: PERSONAL_INFORMATION_SINGPASS.phoneNumber,
    emailAddress1: personalInformation.emailAddress,
    termLoans: conditionReduxData && formReduxData.form.formLanding.termLoan === LIST_TERM_LOAN[1].value ? YES : NO
  })

  /**
   * Render data
   */
   const renderAttributeData = () => {
    let object: any = {};
    for(var i = 0; i < 4; i++) {
      object[`accountNumber${i + 1}`] = '';
      object[`errorAccountNumber${i + 1}`] = false;
      object[`emailAddress${i + 1}`] = i === 0 ? personalInformation.emailAddress : '';
      object[`errorEmailAddress${i + 1}`] = false;
      object[`phoneNumber${i + 1}`] = i === 0 ? personalInformation.phoneNumber : '';
      object[`countryPhoneNumber${i + 1}`] = personalInformation.countryPhoneNumber;
      object[`errorPhoneNumber${i + 1}`] = false;
      object[`name${i + 1}`] = '';
      object[`errorName${i + 1}`] = false;
    }
    setAccountInformation({
      ...accountInformation,
      ...object
    })
  }

 /**
   * reset data Account
   */
  const resetDataAccount = () => {
    const numberAccount = accountInformation && Number(accountInformation.accountNumber);
    let object: any = {};
    for(var i = 0; i < 4; i++) {
      if (i < numberAccount && !_.isEmpty(accountInformation[`accountNumber${i + 1}`])) {
        object[`accountNumber${i + 1}`] = accountInformation[`accountNumber${i + 1}`]
      } else {
        object[`accountNumber${i + 1}`] = '';
      }
      object[`errorAccountNumber${i + 1}`] = false;
    }
    setAccountInformation({
      ...accountInformation,
      ...object
    })
  }

  /**
   * reset data Borrower
   */
   const resetDataBorrower = () => {
    let object: any = {};
    for(var i = 0; i < 4; i++) {
      object[`emailAddress${i + 1}`] = i === 0 ? personalInformation.emailAddress : i < formatBorrowerNumber ? accountInformation[`emailAddress${i + 1}`] : '';
      object[`errorEmailAddress${i + 1}`] = false;
      object[`phoneNumber${i + 1}`] = i === 0 ? personalInformation.phoneNumber : i < formatBorrowerNumber ? accountInformation[`phoneNumber${i + 1}`] : '';
      object[`countryPhoneNumber${i + 1}`] = personalInformation.countryPhoneNumber;
      object[`errorPhoneNumber${i + 1}`] = false;
      object[`name${i + 1}`] = i < formatBorrowerNumber ? accountInformation[`name${i + 1}`] : '';
      object[`errorName${i + 1}`] = false;
    }
    setAccountInformation({
      ...accountInformation,
      ...object
    })
  }

  /**
   * Render more accountInformation attribute
   */
  useEffect(() => {
    renderAttributeData();
  }, []);
    

  /**
   * Render more accountInformation
   */
  useEffect(() => {
    if (!renderData) {
      resetDataAccount();
      setKey(null);
    }
  }, [accountInformation.accountNumber]);

  /**
   * Render more BorrowerInformation
   */
   useEffect(() => {
    if (!renderData) {
      resetDataBorrower();
      setKey(null);
    }
  }, [accountInformation.borrowerNumber]);
  
  /**
   * Function open dialog
   */
  const openDialog = (value: string) => {
    setDialogId(true);
    setCategoryDialog(value);
  };

  /**
   * Function close dialog
   */
  const closeDialog = () => {
    setDialogId(false);
  };

  /**
   * Function get accountInformation attribute
   * @param name 
   * @param value 
   * @param error 
   * @returns {Object}
   */
  const getAccountInformation = (name: string, value: string, error: string) => setAccountInformation({
    ...accountInformation,
    [name]: value,
    [`error${formatNameField(name)}`]: error !== '',
  });

  /**
   * Format borrower number
   */
  const formatBorrowerNumber = accountInformation.borrowerNumber === LIST_BORROWER_NUMBER[0].value ? 1 : Number(accountInformation.borrowerNumber.slice(0, 1))

  /**
   * Validate section account number
   * @returns {Boolean}
   */
  const validateAccountNumber = () => {
    let validate: boolean[] = [];
    for (var i = 0; i < Number(accountInformation.accountNumber); i++) {
      let validateItem = !!(accountInformation[`accountNumber${i + 1}`] && !accountInformation[`errorAccountNumber1${i + 1}`])
      validate.push(validateItem)
    }
    return !validate.includes(false);
  }

  /**
   * Validate section borrower number
   * @returns {Boolean}
   */
  const validateBorrowerNumber = () => {
    let validate: boolean[] = [];
    for (var i = 0; i < formatBorrowerNumber; i++) {
      const validateName = i === 0 ? true : accountInformation[`name${i + 1}`] && !accountInformation[`errorName${i + 1}`]
      let validateItem = !!(accountInformation[`emailAddress${i + 1}`] && !accountInformation[`errorEmailAddress${i + 1}`] && accountInformation[`phoneNumber${i + 1}`] && !accountInformation[`errorPhoneNumber${i + 1}`] && validateName)
      validate.push(validateItem)
    }
    return !validate.includes(false);
  }

  const handleShowListDocument = () => {
    const isRepricingAndNoRepricing = _.includes(contentShow, DATA_CARD_CHECKBOX[0].label) && (_.includes(contentShow, DATA_CARD_CHECKBOX[2].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[3].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[5].label))
    if (isRepricingAndNoRepricing) {
      if (accountInformation.termLoans === YES && personalInformation.singaporeCitizen === YES) {
        return LIST_DOCUMENT_TENURE_2_OWNER_SG_HAVE_TERM_REPRICING_AND_NO_REPRICING_SG;
      } else {
        if (personalInformation.singaporeCitizen === YES) {
          return LIST_DOCUMENT_NON_REPRICING_SG
        } else {
          return LIST_DOCUMENT_NON_REPRICING_NONE_SG
        }
      }
    }
  }

  /**
   * Function save data
   */
  const saveData = () => {
    const dataForm = {
      ...formReduxData.form,
      formLanding: {
        ...formReduxData.form.formLanding,
        documentRequired: handleConvertArrListDocument(handleShowListDocument()).length > 0 ? handleConvertArrListDocument(handleShowListDocument()) : formReduxData.form.formLanding.documentRequired,
      }, 
      accountInformation: accountInformation
    };
    dispatch(saveFormData(dataForm));
  }

   /**
    * Condition show section account number
    */
    const showAccountNumber = conditionReduxData && formReduxData.form.formLanding.listChecked && (formReduxData.form.formLanding.listChecked.length === 1 && formReduxData.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[1].label
    || formReduxData.form.formLanding.listChecked.length === 1 && formReduxData.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[2].label
    || formReduxData.form.formLanding.listChecked.length === 1 && formReduxData.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[3].label
    || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_LENGTH_PARTIAL))
    || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_LENGTHENING))
    || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_PARTIAL))
    || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_LENGTH_SHORT))
    || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORT))
    || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_LENGTH_SHORT))
    || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_LENGTHENING_DDA))
    // || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_DDA))
    || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORTENING_DDA))
    || formReduxData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_PARTIAL_DDA))
    || formReduxData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA))
    || formReduxData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORT_DDA_MIX))
    || formReduxData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORT_PARTIAL))
    || formReduxData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_LENGTHENING_DDA_MIX))
    || formReduxData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_PARTIAL_SHORT_DDA))
    || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_PARTIAL_DDA))
    || formReduxData.form.formLanding.listChecked.length > 2 && _.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[0].label)
    )
    /**
     * Condition show section borrower information
     */
    
    const showBorrowerInformation = conditionReduxData && formReduxData.form.formLanding.listChecked && (formReduxData.form.formLanding.listChecked.length === 1 && formReduxData.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[0].label
    || formReduxData.form.formLanding.listChecked.length === 1 && formReduxData.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[1].label
    || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_LENGTHENING))
    || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_PARTIAL))
    // || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_LENGTH_SHORT))
    || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_LENGTHENING_DDA))
    || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_DDA))
    || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORT))
    // || formReduxData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORTENING_DDA))
    || formReduxData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_PARTIAL_DDA))
    || formReduxData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA))
    || formReduxData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORT_DDA_MIX))
    || formReduxData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORT_PARTIAL))
    || formReduxData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formReduxData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_LENGTHENING_DDA_MIX))
    || formReduxData.form.formLanding.listChecked.length > 1 && (_.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[0].label) || _.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[1].label))
    );
 
    /**
     * Validate Form
     * @returns {Boolean}
     */
   const validateForm = () => {
     let validate = false;
     if (showAccountNumber && showBorrowerInformation) {
       validate = !!(validateAccountNumber() && validateBorrowerNumber() && accountInformation.accountNumber && accountInformation.borrowerNumber);
       return validate;
     }
     else if(showAccountNumber) {
       validate = !!(validateAccountNumber() && accountInformation.accountNumber);
       return validate;
     } else {
       validate = !!(validateBorrowerNumber() && accountInformation.borrowerNumber);
       return validate;
     }
   }

   	/**
   * Handle call api submit
   */
      const contentShow = formReduxData && formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.listChecked;
      const listRepricingLength = checkMatchOption(contentShow, DATA_STATE_REPRICING_LENGTHENING);
      const handleSubmitForm = async (dataSubmit: any) => {
        if (_.isEmpty(formReduxData.dataForm)) {
        setLoading(true)
        const formLanding = formReduxData.form;
        const responseLoansData = await createLoanAppMgmt(dataSubmit, 'NEW');
          if(responseLoansData.LoansAppMgmtResp && responseLoansData.LoansAppMgmtResp.RespBody && responseLoansData.LoansAppMgmtResp.RespBody.Result.length) {
            dispatch(getLoanCreate(responseLoansData.LoansAppMgmtResp.RespBody.Result[0].LoansAppMgmt));
            setLoading(false);
            if (formLanding.isEditing ) {
              history.push(URL_MANUAL_FLOW.review)
            } else {
              if (checkMatchOptionNonRepricing() || checkMatchOptionNonRepricingAndPricingInvestment() || listRepricingLength
              ) {
                history.push(URL_MANUAL_FLOW.nonRepricingRequest)
              } else {
                if (formReduxData && formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.documentRequired.length > 0) {
                  history.push(URL_MANUAL_FLOW.repricingRequest)
                } else {
                  history.push(URL_MANUAL_FLOW.review)
                }
              }
            }
          } else {
            setDataError(responseLoansData && responseLoansData.LoansAppMgmtResp && responseLoansData.LoansAppMgmtResp.ErrorDetail)
            adobeErrorInfo(responseLoansData.LoansAppMgmtResp)
            setTimeout(() => {
              openDialog(ERROR);
              setLoading(false)
            }, 1500)
          }
        } else {
          if (checkMatchOptionNonRepricing() || checkMatchOptionNonRepricingAndPricingInvestment() || listRepricingLength
          ) {
            history.push(URL_MANUAL_FLOW.nonRepricingRequest)
          } else {
            if (formReduxData && formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.documentRequired.length > 0) {
              history.push(URL_MANUAL_FLOW.repricingRequest)
            } else {
              history.push(URL_MANUAL_FLOW.review)
            }
          }
        }
      }
  /**
   * Handle map data account
   */
   const mapDataAccount = () => {
    const lengthDataAccount = accountInformation && Number(accountInformation.accountNumber)
    const data = [];
    for (var i = 0; i < lengthDataAccount; i++) {
      data.push({
        "LoanAccountNo": accountInformation[`accountNumber${i + 1}`],
        "IsPrePayment": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.partialPrepayment[0])}`,
        "IsRepricing": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.repricing[0])}`,
        "IsLengtheningTenure": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0])}`,
        "IsShorteningTenure": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0])}`,
        "IsDDA": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.ddaAccount[0])}`,
        "IsFullRedemption":`${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0])}`,
      })
    }
    return data;
  }

  const mapDataLengtheningShortening = () => {
    const lengthDataAccount = accountInformation && Number(accountInformation.accountNumber)
    const data = [];
    for (var i = 0; i < lengthDataAccount; i++) {
      data.push({
        "AccountId": accountInformation[`accountNumber${i + 1}`],
            "AdjustmentType": _.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]) ? "LengtheningLoanTenure" : "ShorterLoanTenure",
            "OutstandingLoanAmount": 0,
            "LoanCurrency": "SGD",
            "InterestRate": 0,
            "LockInEndDate": "2021-12-24T01:38:57.014Z",
            "CurrentMonthlyInstAmount": 0,
            "CurrentMonthlyInstCurrency": "",
            "ProposedRevisedMonthlyInstalment": 0,
            "CorrespondingLoanTenor": 0,
            "ProposedRevisedLoanTenor":  0,
            "CorrespondingMonthlyInstalment": 0,
            "ApplicableFees": 0
      })
    }
    return data;
  }
  /**
   * 
   * @returns dataTnc
   */
   const renderDataTnc = () => {
    const isRepricingAndLengthening = _.includes(dataListChecked, LIST_REQUEST_REPRICING.repricing[0]) && _.includes(dataListChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]);
    const dataTnc = isRepricingAndLengthening ? [LIST_DATA_TNC.fullRedemptionOfAllLoans, LIST_DATA_TNC.repricingandlengtheningOfLoanTenure] : [LIST_DATA_TNC.fullRedemptionOfAllLoans];
    dataListChecked && dataListChecked.map((item: any, index: number) => {
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

  const countBorrower = () => {
    let count = 0;
    if (accountInformation && accountInformation.borrowerNumber === LIST_BORROWER_NUMBER[1].value) {
      count = 2;
    } else if (accountInformation && accountInformation.borrowerNumber === LIST_BORROWER_NUMBER[2].value) {
      count = 3;
    } else if (accountInformation && accountInformation.borrowerNumber === LIST_BORROWER_NUMBER[3].value) {
      count = 4
    } else {
      count = 1;
    }
    return count;
  }

  /**
   * Handle map data account
   */
   const mapDataBorrower = () => {
    const formLanding = formReduxData.form;
    const lengthDataBorrower = 1;
    const countryText = formLanding && formLanding.propertyInformation && formLanding.propertyInformation.country;
    const codeCountry = LIST_COUNTRIES.find(x => x.value === countryText);
    const data = [];
    for (var i = 0; i < lengthDataBorrower; i++) {
      data.push(
        {
          "RefID": "",
          "NRIC": i === 0 && formLanding && formLanding.personalInformation && formLanding.personalInformation.nricNumber ? formLanding.personalInformation.nricNumber : '',
          "IdIssueCountry": "",
          "PassportNo": i === 0 && formLanding && formLanding.personalInformation && formLanding.personalInformation.passportNumber ? formLanding.personalInformation.passportNumber : '',
          "PassportExpiryDate": "",
          "FINExpiryDate": "",
          "ApplicantType": i === 0  ? "Main" : "Joint",
          "DateofBirth": "",
          "Salutation": "",
          "NameinNRIC": i === 0 ? formLanding && formLanding.personalInformation && formLanding.personalInformation.nameNric ? formLanding.personalInformation.nameNric : formLanding.personalInformation.namePassport ? formLanding.personalInformation.namePassport : '' : '',
          "PreferredName": "",
          "HanyuPinyinName": "",
          "AliasName": "",
          "HanyuPinyinAliasName": "",
          "MarriedName": "",
          "MobileNumber": i === 0 ? formLanding && formLanding.personalInformation && formLanding.personalInformation.phoneNumber ? `${LIST_COUNTRIES_CODE.find(c => c.name === formLanding.personalInformation.countryPhoneNumber).value}${formLanding.personalInformation.phoneNumber}` : '' : accountInformation ? `${LIST_COUNTRIES_CODE.find(c => c.name === accountInformation[`countryPhoneNumber${i + 1}`]).value}${accountInformation[`phoneNumber${i + 1}`]}` : '',
          "EmailAddress": accountInformation && accountInformation[`emailAddress${i + 1}`] ? accountInformation[`emailAddress${i + 1}`] : '',
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
          "IsBorrower": i === 0 ? false : true,
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
          "CustIDTypeCode": i === 0 ? formLanding && formLanding.personalInformation && formLanding.personalInformation.singaporeCitizen !== 'No' ? "IC" : "PP" : '',
          "CustIDTypeDesc": i === 0 ? formLanding && formLanding.personalInformation && formLanding.personalInformation.singaporeCitizen !== 'No' ? "NRIC" : "PASSPORT" : '',
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
          "Addresses": i === 0 ? {
          } : {},
        }
      )
    }
    return data;
  }
  /**
   * Handle button next
   */
  const handleNext = async () => {
    const formLanding = formReduxData.form;
    const countryText = formLanding && formLanding.propertyInformation && formLanding.propertyInformation.country;
    const codeCountry = LIST_COUNTRIES.find(x => x.value === countryText);
    if (validateForm()) {
      const dataSubmit = {
        "ApplicationReceivedDate": "",
        "SystemRefNo": "",
        "ApplicationCategory": "Repricing",
        "Status": "New",
        "BlockNo": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.blockNumber ? formLanding.propertyInformation.blockNumber : '',
        "Street": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.streetName ? formLanding.propertyInformation.streetName : '',
        "Floor": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.floor ? formLanding.propertyInformation.floor : '',
        "Unit": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.unit ? formLanding.propertyInformation.unit : '',
        "PostalCode": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.postalCode  ? formLanding.propertyInformation.postalCode : '',
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
              "IsPrePayment": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.partialPrepayment[0])}`,
              "IsRepricing": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.repricing[0])}`,
              "IsLengtheningTenure": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0])}`,
              "IsShorteningTenure": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0])}`,
              "IsDDA": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.ddaAccount[0])}`,
              "IsFullRedemption":`${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0])}`,
            }
          ],
        },
        "RepricingDetails": {},
        "ChangeInLoanTenure": mapDataLengtheningShortening().length > 0 ? {
          "ChangeInTenureModel": mapDataLengtheningShortening()
        } : {},
        "PrePaymentLoanDetails": {},
        "DDALoanDetails": {},
        "FullRedemption": {},
        "ApplicantDetails": {
          "ApplicantModel": mapDataBorrower() && mapDataBorrower().length > 0 ? mapDataBorrower() : []
        }
      }
      if (_.isEmpty(formReduxData.dataForm)) {
        setLoading(true);
        const dataTnc = await getTncmgmt(renderDataTnc());
        if (dataTnc && dataTnc.TNCMgmtResp && dataTnc.TNCMgmtResp.RespBody && dataTnc.TNCMgmtResp.RespBody.Result) {
          dispatch(getTnc(dataTnc.TNCMgmtResp.RespBody.Result));
          dispatch(setDataForm(dataSubmit));
          handleSubmitForm(dataSubmit);
          saveData();
        } else {
          setDataError(dataTnc && dataTnc.TNCMgmtResp && dataTnc.TNCMgmtResp.ErrorDetail)
          openDialog(ERROR);
        }
      } else {
        handleSubmitForm(dataSubmit);
        saveData();
      }
    } else {
      setLoading(false);
      setKey(Date.now());
      scrollToError();
    }
  }

  /**
   * Function set data
   */
   useEffect(() => {
    const data = formReduxData.form;
    if (!data) return;
    if (data.accountInformation) {
      setRenderData(true);
      setAccountInformation(data.accountInformation);

      /**
     * Handle fetch radio checkbox
     */
      let listCheckbox: IAccountInformation.IRadio[] = [];
      listCheckbox = [...LIST_TERM_LOAN_YES_NO];
      listCheckbox.map((item: IAccountInformation.IRadio, idx: number) => {
        if (item.text === data.accountInformation.termLoans) {
          listCheckbox[idx] = {
            text: listCheckbox[idx].text,
            checked: true
          }
        }
      })
      setListRadio(listCheckbox);
    }
  }, []);

  /**
   * Function call back when click on stepper
   */
  useImperativeHandle(ref, () => ({
    validateForm() {
      if (formReduxData.form) {
        if (_.isEmpty(formReduxData.form.accountInformation)) {
          return true;
        }
        return validateAccountNumber() && validateBorrowerNumber();
      } return true;
    },
    handleNextPage() {
      if (formReduxData.form) {
        if (_.isEmpty(formReduxData.form.accountInformation)) {
          return true;
        }
        if (validateAccountNumber() && validateBorrowerNumber()) {
          saveData();
        } else {
          setKey(Date.now());
          scrollToError();
        }
      } return true;
    },
  }));

  /**
   * Scroll to top
   */
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  /**
   * Handle button prev
   */
  const handlePrev = () => {
    history.push(URL_MANUAL_FLOW.propertyInformation)
  }

  /**
   * render UI Button
   * @returns {HTML}
   */
   const renderButton = () => {
    return (
      <Button backgroundClass="bgGunmetalBluegrey" onClick={handleNext}>
        {formReduxData.form && formReduxData.form.isEditing ? <>
            {REVIEW}
            </> : <>
              {NEXT}
            </>
        }
        <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
      </Button>
    )
  }

  const renderContentPopup = () => (
    <>
     {
         categoryDialog === ERROR && (
           <Error dataError={dataError}/>
         )
     }
     {
       categoryDialog !== ERROR && (
         <LoanAccountNumber />
       )
     }
    </>
  )

  return (
    <>
      {loading && <div className={cx('container-loading')}>
        <div className={cx('content-loading')}>
          <Loading />
        </div>
      </div>}
      <section className={cx('account-information')}>
        <div className={"title-wrapper"}>
          <img src={IconAccountInformation} alt="icon" className={cx("left-image")} />
          <div className={cx("title-text d-flex align-flex-end")}><span>Loan account information</span></div>
        </div>
        {
          
          <div className={'description'}>
            {
              (_.includes(conditionReduxData && formReduxData.form.formLanding.listChecked, DATA_REPRICING[0]) || _.includes(conditionReduxData && formReduxData.form.formLanding.listChecked, DATA_LENGTH[0])) && (
                <>
                  We require the contact details of all your co-borrowers (if any) so that we can contact them for this request.
                </>
              )
            }
          </div>
        }
        {/* Section term loans */}
        {/* {
          (_.includes(conditionReduxData && formReduxData.form.formLanding.listChecked, DATA_REPRICING[0]) || _.includes(conditionReduxData && formReduxData.form.formLanding.listChecked, DATA_LENGTH[0]) ) && (
            <section id="term-loans" className={cx('background-gray', 'mt-dt-40')}>
              <SectionWrapper title="Term loans">
                <Grid container>
                  <Grid
                    item
                    lg={5}
                    md={5}
                    sm={12}
                    xs={12}
                    id="selfEmployed"
                  >
                    <Radio
                      name="selfEmployed"
                      listCheckBox={listRadio}
                      label="Are any of the loan accounts a term loan?"
                      radioKey={key}
                      value={accountInformation.termLoans}
                      getValue={(value: IAccountInformation.IValueData) => {
                        getAccountInformation(
                          'termLoans',
                          value,
                          ''
                        );
                      }}
                    />
                  </Grid>
                </Grid>
              </SectionWrapper>
            </section>
          )
        } */}
        
        {/* Section account information */}
        {
          showAccountNumber && (
            <section id="account-information" className={cx('background-gray', 'mt-dt-10')}>
              <SectionWrapper title="Account numbers">
                <Grid container>
                  <Grid
                    item lg={6} md={6} sm={12} xs={12}
                    id="countryValueSelect"
                    className={accountInformation.accountNumber ? 'mb-dt-40' : ''}
                  >
                    <Select
                      label="How many loan accounts are there for your mortgaged property?"
                      listValues={LIST_ACCOUNT_NUMBER}
                      single
                      placeholder="Please select"
                      type=""
                      selectKey={key}
                      width={220}
                      positionLine={5}
                      defaultValue={accountInformation.accountNumber}
                      getValue={(value: IAccountInformation.IValueData) => {
                        setRenderData(false);
                        getAccountInformation(
                          'accountNumber',
                          value.value,
                          value.error,
                        );
                      }}
                    />
                  </Grid>
                </Grid>
                {
                  accountInformation.accountNumber && (
                    <div>Key in all the account numbers.
                      <span className="info-icon-wrapper" onClick={() => openDialog('')} aria-hidden="true">
                        <img src={myInfo} alt="myInfo-logo" className={cx('icons', 'icon-black')} />
                        <img src={myInfoBlue} alt="myInfo-logo" className={cx('icons', 'icon-blue')} />
                      </span>
                    </div>
                  )
                }
                <Grid container>
                  {
                    Array(Number(accountInformation.accountNumber)).fill(0).map((item, index) => (
                      <React.Fragment key={index}>
                        <Grid
                          item lg={4} md={4} sm={12} xs={12}
                          className={'mt-dt-30 mb-mb-30'}
                        >
                          <InputBase
                            label={`Loan account number ${index + 1}`}
                            placeholder=""
                            type="text"
                            size="medium"
                            inputKey={key}
                            id={uuidv4()}
                            maxLength={15}
                            kind="required"
                            preventSpecialCharacters={restrictOnlyDigital}
                            name={`accountNumber${index + 1}`}
                            value={accountInformation[`accountNumber${index + 1}`]}
                            getValue={(value: IAccountInformation.IValueData) => {
                              getAccountInformation(
                                `accountNumber${index + 1}`,
                                value.value,
                                value.error,
                              );
                            }}
                          />
                        </Grid>
                        <Grid
                          item lg={2} md={2} sm={12} xs={12}
                        />
                      </React.Fragment>
                    ))
                  }
                </Grid>
              </SectionWrapper>
            </section>
          )
        }
        {
          showBorrowerInformation && (
            <section id="borrower-information" className={cx('background-gray', 'mt-dt-10')}>
              <SectionWrapper title="Borrower information">
                <Grid container>
                  <Grid
                    item lg={5} md={5} sm={12} xs={12}
                    id="countryValueSelect"
                  >
                    <Select
                      label="How many borrowers are there for this property? This information is needed to process your request."
                      listValues={LIST_BORROWER_NUMBER}
                      single
                      placeholder="Please select"
                      type=""
                      selectKey={key}
                      width={220}
                      positionLine={5}
                      defaultValue={accountInformation.borrowerNumber}
                      getValue={(value: IAccountInformation.IValueData) => {
                        setRenderData(false);
                        getAccountInformation(
                          'borrowerNumber',
                          value.value,
                          value.error,
                        );
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  {
                    Array(formatBorrowerNumber).fill(0).map((item, index) => (
                      <React.Fragment key={index}>
                        <Grid item lg={12} md={12} sm={12} xs={12} className="mt-dt-30 title-text-small-bold">Borrower {index + 1} {index === 0 ? '(You)' : ''}</Grid>
                        {
                          index !== 0 && (
                            <Grid item lg={12} md={12} sm={12} xs={12} className={'mb-dt-30 mt-dt-20'}>
                              <InputBase
                                label={`Name`}
                                placeholder=""
                                type="text"
                                size="medium"
                                inputKey={key}
                                id={uuidv4()}
                                maxLength={70}
                                kind="name-nric"
                                name={`name${index + 1}`}
                                value={accountInformation[`name${index + 1}`]}
                                getValue={(value: IAccountInformation.IValueData) => {
                                  getAccountInformation(
                                    `name${index + 1}`,
                                    value.value,
                                    value.error,
                                  );
                                }}
                              />
                            </Grid>
                          )
                        }
                        <Grid item lg={5} md={5} sm={12} xs={12}
                          className="mt-dt-10 mb-mb-30"
                          id="emailAddress"
                        >
                          {
                            index === 0 ? (
                              <RowInfo label="Email address 1" content={personalInformation.emailAddress} />
                            ) : (
                              <InputBase
                                label="Email address"
                                placeholder=""
                                type="email"
                                size="large"
                                name={`emailAddress${index + 1}`}
                                kind="email"
                                inputKey={key}
                                id={uuidv4()}
                                value={accountInformation[`emailAddress${index + 1}`]}
                                maxLength={50}
                                preventSpecialCharacters={restrictEmail}
                                getValue={(value: IAccountInformation.IValueData) => {
                                  getAccountInformation(
                                    `emailAddress${index + 1}`,
                                    value.value,
                                    value.error,
                                  );
                                }}
                              />
                            )
                          }
                        </Grid>
                        <Grid item lg={2} md={2} sm={12} xs={12} />
                        <Grid item lg={5} md={5} sm={12} xs={12}>
                          {
                            index === 0 ? (
                              <RowInfo label="Mobile number" content={`${LIST_COUNTRIES_CODE.find(c => c.name === personalInformation.countryPhoneNumber).value} ${personalInformation.phoneNumber}`} />
                            ) : (
                              <InputNumberMobile
                                label="Mobile number"
                                countryCodes={LIST_COUNTRIES_CODE}
                                contactInformation={accountInformation}
                                preventSpecialCharacters={preventSpecialCharacters}
                                isPhoneSG={accountInformation[`countryPhoneNumber${index + 1}`] === PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber}
                                keyValidate={key}
                                autoFocus={autoFocus}
                                inputNameSelect={index === 1 ? "phone-1" : index === 2 ? 'home-1' : 'office-1'}
                                inputNameBase={index === 1 ? "phone-2" : index === 2 ? 'home-2' : 'office-2'}
                                countryCode={`countryPhoneNumber${index + 1}`}
                                valueMobile={`phoneNumber${index + 1}`}
                                getContactInformation={getAccountInformation}
                                kind={'phone'}
                              />
                            )
                          }
                        </Grid>
                      </React.Fragment>
                    ))
                  }
                </Grid>
              </SectionWrapper>
            </section>
          )
        }
        {/* Section button  */}
        <section className={cx('button-wrapper', 'd-flex space-between mt-dt-40')}>
          <Button backgroundClass="square" onClick={handlePrev}>
            <ArrowBackIcon className={cx('arrow')} />
          </Button>
          <div>
            <div className="d-inline">
              {children}
            </div>
            <div className="ml-dt-30 d-inline">
              {renderButton()}
            </div>
          </div>
        </section>
      </section>
      {/* Dialog */}
      <Dialog
        isOpen={dialogId}
        onRequestClose={closeDialog}
        width={700}
        hasCloseBtn={true}
      >
        {renderContentPopup()}
      </Dialog>
    </>
  );
});
export default AccountInformation;
