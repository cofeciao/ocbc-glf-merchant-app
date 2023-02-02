/***
 * LANDING PAGE
 *    >> child
 *      >> title
 *      >> home loan request
 *        >> card checkbox
 *      >> message
 *      >> what you need
 *        >> document
 *        >> button redirect
 *      >> Popup
 */

// import modules
import { Container } from '@material-ui/core';
import { Dialog, Footer, Header, Loading, Banner } from '@sectionsg/orc';
import classnames from "classnames/bind";
import _ from 'lodash';
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from 'react-router-dom';

import { generateOtp, validateOtp, getLoansInfoFromOtp, simulatorLoginSingPass } from '@/data-manager/info';

// import reducer
import { saveFormData, setMainApplicant, setShowDocument, getMyInfo, getRefId, getDataBanner, setBannerMaintenance } from "../../store/form";

// import constants
import {
  DATA_CARD_CHECKBOX, DATA_NONE_REPRICING_REQUEST, DATA_NON_REPRICING, DATA_STATE_DDA_SHORT, DATA_STATE_LENGTHENING_DDA, DATA_STATE_LENGTH_PARTIAL, DATA_STATE_LENGTH_SHORT, DATA_STATE_PARTIAL_DDA, DATA_STATE_REPRICING_DDA, DATA_STATE_REPRICING_LENGTHENING, DATA_STATE_REPRICING_LENGTHENING_DDA, DATA_STATE_REPRICING_LENGTHENING_DDA_MIX, DATA_STATE_REPRICING_LENGTHENING_PARTIAL, DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA, DATA_STATE_REPRICING_PARTIAL, DATA_STATE_REPRICING_PARTIAL_DDA, DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA, DATA_STATE_REPRICING_PARTIAL_SHORT_DDA, DATA_STATE_REPRICING_SHORT, DATA_STATE_REPRICING_SHORTENING_DDA, DATA_STATE_REPRICING_SHORT_DDA_MIX, DATA_STATE_REPRICING_SHORT_PARTIAL, DATA_STATE_REPRICING_SHORT_PARTIAL_DDA, LENGTHEN_TENURE1, LENGTHEN_TENURE2, LINK_EXTERNAL_PAGE, LIST_DATA_INFORMATION, LIST_DOCUMENT_JOINT_NO_SG, LIST_DOCUMENT_JOINT_ONLY_LENGTH_SG, LIST_DOCUMENT_JOINT_SG_NO_TERM, LIST_DOCUMENT_JOINT_SG_TERM, LIST_DOCUMENT_NON_REPRICING_NONE_SG, LIST_DOCUMENT_NON_REPRICING_SG, LIST_DOCUMENT_TENURE_1, LIST_DOCUMENT_TENURE_2_INVEST_NONE_SG_BOTH_TERM, LIST_DOCUMENT_TENURE_2_INVEST_NONE_SG_HAVE_TERM, LIST_DOCUMENT_TENURE_2_INVEST_SG_NO_TERM, LIST_DOCUMENT_TENURE_2_OWNER_NONE_SG_HAVE_TERM, LIST_DOCUMENT_TENURE_2_OWNER_NONE_SG_NO_TERM,
  LIST_DOCUMENT_TENURE_2_OWNER_SG_HAVE_TERM, LIST_DOCUMENT_TENURE_2_OWNER_SG_NO_TERM, DATA_NON_REPRICING_1,LIST_DOCUMENT_TENURE_2_OWNER_SG_HAVE_TERM_REPRICING_AND_NO_REPRICING_SG, LIST_DOCUMENT_TENURE_2_OWNER_SG_HAVE_TERM_REPRICING_AND_NO_REPRICING_NOT_SG,
  LIST_NATIONAL, LIST_REQUEST_REPRICING, LIST_SELECT_FULL_REDEMPTION, LIST_SELECT_PARTIAL, LIST_SELECT_PURPOSE, LIST_TERM_LOAN, MANUAL, OTP_JOINT_MANUAL, SINGPASS, SLUG_POPUP, TITLE_PAGE, URL_MANUAL_FLOW, URL_PERSONAL_BORROWER_MANUAL, URL_PERSONAL_BORROWER_SINGPASS, URL_SINGPASS_FLOW, WIDTH_DIALOG_DEFAULT
} from "../../utils/constants";

// import utils
import { scrollToError } from "../../utils/utils";

// import demo landing page
import CPFContribution from "../popup/CPFContribution";
import CPFProp from "../popup/CPFProp";
import HDB from "../popup/HDB";
import IRAS from "../popup/IRAS";
import NOA from "../popup/NOA";
import OTP from "../popup/OTP";

// import types
import { ILanding } from "./Landing";

// import style
import styles from "./Landing.scss";

// import child component
import LandingHomeLoanRequest from "./LandingHomeLoanRequest";
import LandingMessage from './LandingMessage';
import LandingTitle from "./LandingTitle";
import LandingWhatYouNeed from './LandingWhatYouNeed';
import moment from 'moment';
import axios from 'axios'

// render UI
const Landing: React.FC = ({ }) => {

  const cx = classnames.bind(styles);
  const history = useHistory();
  const [key, setKey] = useState<number>(0);
  const [dataCardCheckbox, setDataCardCheckbox] = useState<ILanding.IItemCheckbox[]>(DATA_CARD_CHECKBOX);
  const [listSelectFullRedemption, setListSelectFullRedemption] = useState<any>(LIST_SELECT_FULL_REDEMPTION);
  const [listSelectPartialPrepayment, setListSelectPartialPrepayment] = useState<any>(LIST_SELECT_PARTIAL);
  const [listSelectPurpose, setListSelectPurpose] = useState<any>(LIST_SELECT_PURPOSE);
  const [itemChecked, setItemChecked] = useState<string>(''); // item checked
  const [errCheckbox, setErrCheckbox] = useState<boolean>(false); // checked error
  const [contentShow, setContentShow] = useState<string[]>([]); // lists data checked
  const [categoryDialog, setCategoryDialog] = useState<string>('');
  const [dialogPopup, setDialogPopup] = useState<boolean>(false);
  const [listDataDocument, setListDataDocument] = useState<string[]>([]); // lists document 
  const [stepInstruction, setStepInstruction] = useState<any>({
    step: 'step1',
    index: 0
  }); // lists document 
 const useQuery = () => {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();

  const dispatch = useDispatch();
  const date = moment.utc().format()
  const currentLocal = moment.utc(date).local().format();
  const [currentDateTime, setCurrentDateTime] = useState(moment(currentLocal, 'YYYY-MM-DD HH:mm:ss'));
  const urlJson = '';

  const getMaintenanceNotice = () => {
    let path = '/iwov-resources/sg/ocbc/personal/data/loans-loanservicing-maintenance.json'
    if (process.env.env === 'development') {
      path = 'public/data/loans-homeloan-maintenance.json'
    }
    const response = axios.get(path)
    return response
  }

  const checkIsBetweenTime = (start: any, end: any) => {
    console.log('start', start);
    console.log('end', end);
    const Start = moment(start, 'YYYY-MM-DD HH:mm:ss')
    const End = moment(end, 'YYYY-MM-DD HH:mm:ss')
    if (Start.isValid() && End.isValid()) {
      console.log('currentDateTime.isBetween(Start, End, undefined)', currentDateTime.isBetween(Start, End, undefined, '[]'))
      return currentDateTime.isBetween(Start, End, undefined, '[]')
    } else {
      return false
    }
  }

  const checkMaintenance = async () =>  {
    const vm = this
    const response = await getMaintenanceNotice()
    if (response && response.status === 200) {
      const data = response.data;
      const isShowBannerMaintenance = checkIsBetweenTime(data.start, data.end);
      dispatch(getDataBanner(data))
      dispatch(setBannerMaintenance(isShowBannerMaintenance))
    }
  }

  useEffect(() => {
    checkMaintenance();
  }, [])

  /**
  * Retrieves data from Store
  */
  const formReduxData = useSelector((state: any) => state.form);

  /**
   * Form Data of Landing
   */
  const [formDataLanding, setFormDataLanding] = useState<ILanding.IDataFormLanding>({
    lockIn: '',
    reason: '',
    yourRate: '',
    purpose: '',
    national: LIST_NATIONAL[0].value,
    termLoan: LIST_TERM_LOAN[0].value,
  })

  /**
   * OTP
   */
  const [isResend, setIsResend] = useState(false);
  const [prevOtp, setPrevOtp] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [times, setTimes] = useState(10);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const timeRef = useRef(null);
  const [keyOTP, setKeyOTP] = useState(null);
  const [codeOTP, setCodeOTP] = useState({
    code: '',
  });

  /**
   * Handle retrieves value for OTP
   * @param name 
   * @param value 
   * @returns 
   */
  const getCodeOTP = (name: string, value: string) => {
    setCodeOTP({
    ...codeOTP,
    [name]: value,
  })};
  const CountDown = () => {
    timeRef.current = setTimeout(() => {
      if (times < 1) {
        clearTimeout(timeRef.current);
      } else setTimes(times - 1);
    }, 1000);
  };

  const handlePrevOTP = (value: string) => {
    if (value) {
      prevOtp.push(value);
    }
    setPrevOtp(prevOtp);
  };

  const handleError = (value: string) => {
    setIsError(value);
  };

  useEffect(() => {
    if (dialogPopup) {
      if (times > 0) {
        CountDown();
      }
    }
  }, [dialogPopup, times]);

  /**
   * Handle check disable Button Next
   */
  const isDisableModalVerified = codeOTP.code.length !== 6;

  /**
   * Handle reset checkbox before onchange
   * @function 
   */

  const handleResetCheckbox = () => {
    /**
     * Reset
     */
     if (_.includes(contentShow, DATA_CARD_CHECKBOX[4].label)) {
       setCount2(0);
       setCount1(count1 + 1);
       if (formDataLanding && formDataLanding.lockIn !== '' && count1 > 0) {
         setFormDataLanding({
          lockIn: formDataLanding.lockIn || '',
          reason: formDataLanding.reason || '',
          yourRate: formDataLanding.yourRate || '',
          purpose: formDataLanding.purpose || '',
          national: LIST_NATIONAL[0].value,
          termLoan: LIST_TERM_LOAN[0].value,
        })
       } else {
         setFormDataLanding({
          lockIn: '',
          reason: '',
          yourRate: '',
          purpose: '',
          national: LIST_NATIONAL[0].value,
          termLoan: LIST_TERM_LOAN[0].value,
        })
       }
     } else {
       setCount1(0);
       setCount2(count2 + 1);
       if (formDataLanding && formDataLanding.lockIn !== '' && count2 > 0) {
         if (_.includes(contentShow, DATA_CARD_CHECKBOX[3].label)) {
            setFormDataLanding({
              lockIn: formDataLanding.lockIn || '',
              reason: formDataLanding.reason || '',
              yourRate: formDataLanding.yourRate || '',
              purpose: formDataLanding.purpose || '',
              national: LIST_NATIONAL[0].value,
              termLoan: LIST_TERM_LOAN[0].value,
            })
         } else {
           setFormDataLanding({
            lockIn: '',
            reason: formDataLanding.reason || '',
            yourRate: '',
            purpose: formDataLanding.purpose || '',
            national: LIST_NATIONAL[0].value,
            termLoan: LIST_TERM_LOAN[0].value,
          })
         }
       } else {
         setFormDataLanding({
          lockIn: '',
          reason: formDataLanding.reason || '',
          yourRate: formDataLanding.yourRate || '',
          purpose: formDataLanding.purpose || '',
          national: LIST_NATIONAL[0].value,
          termLoan: LIST_TERM_LOAN[0].value,
        })
       }
     }
    /**
     * Set key validation 
     */
    setKey(0)
  }

  useEffect(() => {
    handleResetCheckbox()
  }, [contentShow])

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
   * Handle show condition
   * @function 
   * @param {Array} data - List data of home loan request 
   * @param {string} itemChecked - Item have just click
   * @param {boolean} checked - Status Item
   */
  const handleCheckShowContent = (data: ILanding.IListSelect[], itemChecked: string, checked: boolean) => {
    let div = document.getElementById('selected_requests');
    let str: string[] = [];
    let listData: ILanding.IItemCheckbox[] = [...data];
    dispatch(setShowDocument(false))

    /**
     * Reset Full redemption on all loans is uncheck
     */
    if ((itemChecked === DATA_CARD_CHECKBOX[0].label || itemChecked === DATA_CARD_CHECKBOX[3].label || itemChecked === DATA_CARD_CHECKBOX[5].label) && checked) {
      listData = [...data];
      listData[4] = {
        label: listData[4].label,
        checked: false,
      }
      setDataCardCheckbox(listData);
    }

    /**
     * Lengthening of loan tenure
     */
    if (itemChecked === DATA_CARD_CHECKBOX[1].label && checked) {
      listData = [...data];
      listData[1] = {
        label: listData[1].label,
        checked: true,
      }
      listData[2] = {
        label: listData[2].label,
        checked: false,
      }
      listData[4] = {
        label: listData[4].label,
        checked: false,
      }
      setDataCardCheckbox(listData);
    }

    /**
    * Shortening of loan tenure
    */
    if (itemChecked === DATA_CARD_CHECKBOX[2].label && checked) {
      listData = [...data];
      listData[1] = {
        label: listData[1].label,
        checked: false,
      }
      listData[4] = {
        label: listData[4].label,
        checked: false,
      }
      setDataCardCheckbox(listData);
    }

    /**
    * Full redemption on all loans
    */
    if (itemChecked === DATA_CARD_CHECKBOX[4].label) {
      listData = [...DATA_CARD_CHECKBOX];
      listData[4] = {
        label: listData[4].label,
        checked: checked,
      }
      setDataCardCheckbox(listData);
    }

    /**
     * List item checked condition to show section msg
     */
    listData.map((item: ILanding.IListSelect, idx: number): any => {

      if (item.checked === true) {
        str.push(item.label);
      }
      return true

    })
    setContentShow(str);
    div.innerHTML = _.join(str, ',')
  }

  /**
   * get value checkbox
   * @function 
   */
  const handleGetValueCheckbox = (data: ILanding.IDataCheckItem) => {
    // handleResetCheckbox();
    setItemChecked(data.name)
    setErrCheckbox(data.statusError)
    handleCheckShowContent(data.data, data.name, data.checked)
  }

  /**
   * set value info form Landing Page
   * @function
   * @param {string} name - Name of field
   * @param {string} value - Value of field
   * @returns 
   */
  const setValueFormLandingPage = (name: string, value: any) => setFormDataLanding({
    ...formDataLanding,
    [name]: value,
  });

  /**
   * Handle check match option request
   * @function 
   * @param {Array} data - Input of option request
   * @returns {boolean}
   */
  const checkMatchOption = (data: any) => {
    return _.isEqual(_.sortBy(data), _.sortBy(contentShow))
  }

  /**
   * Detect content for popup
   * @function
   * @returns 
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
        categoryDialog === SLUG_POPUP[5] && (
          <OTP
            handleError={handleError}
            codeOTP={codeOTP}
            getCodeOTP={getCodeOTP}
            isResend={isResend}
            isError={isError}
            setIsError={setIsError}
            times={times}
            prevOtp={prevOtp}
            setTimes={setTimes}
            closeDialog={closeDialog}
            isDisableModalVerified={isDisableModalVerified}
            CountDown={CountDown}
            timeRef={timeRef}
            cx={cx}
            setIsResend={setIsResend}
            handlePrevOTP={handlePrevOTP}
            formReduxData={formReduxData}
            handleClickChangeStep={handleClickChangeStep}
            stepInstruction={stepInstruction}
            handleScrollTopId={handleScrollTopId}
            handleClickOkForOTP={handleClickOkForOTP}
            handleGenerateOTP={handleGenerateOTP}
          />
        )
      }
    </>
  )

  /**
   * Handle check manual flow and lengthen tenure more than one
   * @function
   * @returns {boolean}
   */
  const handleCheckManualAndLenthenTenureMoreThanOne = () => {
    if (formReduxData.mainApplicant === MANUAL
      && formDataLanding.purpose
      && (
        checkMatchOption(LIST_REQUEST_REPRICING.lengtheningOfLoanTenure)
        || checkMatchOption(LIST_REQUEST_REPRICING.repricing)
        || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING)
      )
    ) {
      return true
    }
    return false
  }

  /**
   * Handle set default nation and term loan when manual flow and lengthen more than one
   */
  useEffect(() => {
    if (
      ((contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[0].label)
        || (contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[1].label)
        || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING))
      && formReduxData.mainApplicant === MANUAL
      && formReduxData.lengthenTenure === LENGTHEN_TENURE2
    ) {
      setFormDataLanding({
        ...formDataLanding,
        national: LIST_NATIONAL[0].value,
        termLoan: LIST_TERM_LOAN[0].value,
      })
    }
  }, [contentShow])

  /**
   * Handle reset data when onchange main applicant
   */
  useEffect(() => {
    setFormDataLanding({
      lockIn: null,
      reason: '',
      yourRate: '',
      purpose: '',
      national: '',
      termLoan: '',
    })
    setContentShow([])
    setDataCardCheckbox(DATA_CARD_CHECKBOX);

  }, [formReduxData.mainApplicant])

  const checkMatchOptionNonRepricing = () => {
    let result: boolean = true;
    const listChecked = contentShow;
    listChecked && listChecked.map((item: any, idx: number) => {
      const index = DATA_NON_REPRICING.findIndex((label: string) => label === item);
      if (index >= 0) {
        result = result && true
      } else {
        result = result && false
      }
    });
    return result;
  }

  /**
   * handle show list documents
   * @returns {Array}
   */
  const handleShowListDocument = () => {
    const isNoRepricing = _.includes(contentShow, DATA_CARD_CHECKBOX[2].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[3].label)|| _.includes(contentShow, DATA_CARD_CHECKBOX[4].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[5].label)
    const isRepricingAndNoRepricing = ((_.includes(contentShow, DATA_CARD_CHECKBOX[0].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[1].label)) && (
      _.includes(contentShow, DATA_CARD_CHECKBOX[2].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[3].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[4].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[5].label)
    ) || _.includes(contentShow, DATA_CARD_CHECKBOX[2].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[3].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[4].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[5].label))
    if (formDataLanding.purpose === LIST_SELECT_PURPOSE[0].value) { // Selected Owner occupied
        if (formDataLanding.national === LIST_NATIONAL[0].value && formDataLanding.termLoan === LIST_TERM_LOAN[1].value) {
          if (isRepricingAndNoRepricing) {
            return LIST_DOCUMENT_TENURE_2_OWNER_SG_HAVE_TERM_REPRICING_AND_NO_REPRICING_SG
          }
          return LIST_DOCUMENT_TENURE_2_OWNER_SG_HAVE_TERM;
        } else {
          if (isRepricingAndNoRepricing) {
            if (formDataLanding.national === LIST_NATIONAL[0].value) {
                return LIST_DOCUMENT_NON_REPRICING_SG
              } else {
                return LIST_DOCUMENT_NON_REPRICING_NONE_SG
              }
          } else {
            return [];
          }
        }
    } else { // Selected Investment
      if (!formReduxData.isBorrower) {
        if (formDataLanding.national === LIST_NATIONAL[0].value && formDataLanding.termLoan === LIST_TERM_LOAN[1].value) {
          if (isRepricingAndNoRepricing) {
            return LIST_DOCUMENT_TENURE_2_OWNER_SG_HAVE_TERM_REPRICING_AND_NO_REPRICING_SG
          }
          return LIST_DOCUMENT_TENURE_2_OWNER_SG_HAVE_TERM;
        }
        else if ((formReduxData.showDocument && contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[2].label)
        || (formReduxData.showDocument && contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[3].label)
        || (formReduxData.showDocument && contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[4].label)
        || (formReduxData.showDocument && contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[5].label)
        || isRepricingAndNoRepricing
        || isNoRepricing
        ) {
          if (formDataLanding.national === LIST_NATIONAL[0].value) {
            return LIST_DOCUMENT_NON_REPRICING_SG
          } else {
            return LIST_DOCUMENT_NON_REPRICING_NONE_SG
          }
        } else {
          return []
        }
      } else {
        /**
         * Lengthening of loan tenure Only
         */
        if (contentShow[0] === DATA_NONE_REPRICING_REQUEST.titleLengthening && contentShow.length === 1) {
          if (formDataLanding.purpose === LIST_SELECT_PURPOSE[1].value && formDataLanding.national === LIST_NATIONAL[0].value) {
            return LIST_DOCUMENT_JOINT_ONLY_LENGTH_SG
          }
          if (formDataLanding.purpose === LIST_SELECT_PURPOSE[1].value && formDataLanding.national === LIST_NATIONAL[1].value) {
            return LIST_DOCUMENT_JOINT_NO_SG
          }
        } else {
          if (formDataLanding.purpose === LIST_SELECT_PURPOSE[1].value && formDataLanding.national === LIST_NATIONAL[0].value && formDataLanding.termLoan === LIST_TERM_LOAN[1].value) {
            return LIST_DOCUMENT_JOINT_SG_TERM
          }
          if (formDataLanding.purpose === LIST_SELECT_PURPOSE[1].value && formDataLanding.national === LIST_NATIONAL[0].value && formDataLanding.termLoan === LIST_TERM_LOAN[0].value) {
            return LIST_DOCUMENT_JOINT_SG_NO_TERM
          }
          if (formDataLanding.purpose === LIST_SELECT_PURPOSE[1].value && (formDataLanding.national === LIST_NATIONAL[1].value || formDataLanding.national === LIST_NATIONAL[1].value)) {
            return LIST_DOCUMENT_JOINT_NO_SG
          }
        }

      }
    }

  }

  /**
   * Handle pre-checked Repricing option form demo
   */
  useEffect(() => {
    if (formReduxData.preCheckedRepricing) {
      let listData = []
      listData = [...DATA_CARD_CHECKBOX];
      listData[0] = {
        label: listData[0].label,
        checked: true,
      }
      setDataCardCheckbox(listData);
    }
  }, [formReduxData.preCheckedRepricing])

  /**
   * Handle convert array to a list document
   * @function
   * @param {Array} list - list input
   * @returns {Array}
   */
  const handleConvertArrListDocument = (list: any) => {
    let arr: string[] = [];
    list && list.map((item: any, idx: number) => {
      arr.push(item.label)
    });
    return arr;
  }

  /**
   * Check return condition LENGTHEN_TENURE1
   * @returns {boolean}
   */
  const checkReturnConditionListDocumentDefault = () => {
    /**
     *  Check list documents you will need default
     */
    if (formReduxData.mainApplicant === MANUAL) { // Manual
      if ((contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[0].label)
        || (contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[1].label)
        || (checkMatchOption(DATA_STATE_REPRICING_LENGTHENING))) {
        return true
      } else {
        return false
      }
    } else { 
      // Singpass
      return false
    }
  }

  /**
  * Check return condition list document for manual
  * @returns {boolean}
  */
  const checkReturnConditionListDocumentForManual = () => {
    if ((formReduxData.showDocument && formDataLanding.purpose && checkMatchOption(DATA_STATE_REPRICING_LENGTHENING))
      || (formReduxData.showDocument && formDataLanding.purpose && contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[0].label)
      || (formReduxData.showDocument && formDataLanding.purpose && contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[1].label)
      || (formReduxData.showDocument && contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[2].label)
      || (formReduxData.showDocument && contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[3].label)
      || (formReduxData.showDocument && contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[4].label)
      || (formReduxData.showDocument && contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[5].label)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_REPRICING_PARTIAL_SHORT_DDA)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_REPRICING_PARTIAL_DDA)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_REPRICING_SHORTENING_DDA)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_REPRICING_SHORT)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL_DDA)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_PARTIAL_DDA)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_REPRICING_DDA)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_REPRICING_PARTIAL)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_LENGTH_PARTIAL)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_LENGTHENING_DDA)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_LENGTH_SHORT)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA_MIX)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL)
      || formReduxData.showDocument && checkMatchOption(DATA_STATE_REPRICING_SHORT_DDA_MIX)
      ) {
      return true
    } else {
      return false
    }
  }

  /**
   * Handle get list document 
   * @returns {Array}
   */
  const getListDocument = () => {
    const isNoRepricing = !_.includes(contentShow, DATA_CARD_CHECKBOX[0].label) && (_.includes(contentShow, DATA_CARD_CHECKBOX[1].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[2].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[3].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[5].label))
    if ((contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[0].label && formDataLanding.purpose)
      || (contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[1].label && formDataLanding.purpose)
      || (checkMatchOption(DATA_STATE_REPRICING_LENGTHENING))
      || (checkMatchOption(DATA_STATE_REPRICING_SHORT))
      || (checkMatchOption(DATA_STATE_REPRICING_PARTIAL)
      || checkMatchOption(LIST_REQUEST_REPRICING.partialPrepayment)
      || checkMatchOption(LIST_REQUEST_REPRICING.shorteningOfLoanTenure)
      || checkMatchOption(LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans)
      || checkMatchOption(LIST_REQUEST_REPRICING.ddaAccount)
      || contentShow.length > 2 && _.includes(contentShow,DATA_CARD_CHECKBOX[0].label)
      || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_SHORT_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_SHORTENING_DDA)
      || checkMatchOption(DATA_STATE_REPRICING_PARTIAL)
      || checkMatchOption(DATA_STATE_LENGTH_SHORT)
      || checkMatchOption(DATA_STATE_REPRICING_DDA)
      || checkMatchOption(DATA_STATE_LENGTH_PARTIAL)
      || checkMatchOptionNonRepricing()
      || isNoRepricing
      )
    ) {
      if (checkReturnConditionListDocumentDefault() && !formReduxData.showDocument) {
        return handleConvertArrListDocument(LIST_DOCUMENT_TENURE_1) // convert array
      }

      if (checkReturnConditionListDocumentForManual() && formReduxData.showDocument) {
        return handleConvertArrListDocument(handleShowListDocument()) // convert array
      }
    }
  }

  /**
   *  Handle validation for next flow
   * @returns 
   */
  const handleValidation = () => {
    /**
     * Don't have any selected
     */
    if (contentShow.length <= 0) {
      setKey(Date.now())
      scrollToError();
      return false;

    } else {

      // Checked combination Repricing and/or  Lengthening of loan tenure
      if ((contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[0].label && formDataLanding.purpose)
        || (contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[1].label && formDataLanding.purpose)
        || (checkMatchOption(DATA_STATE_REPRICING_LENGTHENING) && formDataLanding.purpose)
        || (checkMatchOption(DATA_STATE_LENGTHENING_DDA) && formDataLanding.purpose)
        || (checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA_MIX) && formDataLanding.purpose)
        || (checkMatchOption(DATA_STATE_REPRICING_DDA) && formDataLanding.purpose)
        || (checkMatchOption(DATA_STATE_REPRICING_SHORT) && formDataLanding.purpose)
        || (checkMatchOption(DATA_STATE_REPRICING_SHORT_DDA_MIX) && formDataLanding.purpose)
      ) {
        return true
      } else if (contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[2].label) { // Checked Shortening of loan tenure
        return true
      } else if ((contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[3].label) || checkMatchOption(DATA_STATE_LENGTH_SHORT)) { // Checked Partial prepayment
        if (formDataLanding.lockIn && formDataLanding.yourRate) {
          return true
        }
        setKey(Date.now())
        scrollToError()
        return false
      } else if (checkMatchOption(DATA_STATE_REPRICING_PARTIAL) || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL) || checkMatchOption(DATA_STATE_LENGTH_PARTIAL) || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL) || checkMatchOption(DATA_STATE_PARTIAL_DDA) || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA) || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA) || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL_DDA)) { // Checked combination Repricing and Partial prepayment and/or Lengthening of loan tenure
        if (formDataLanding.lockIn && formDataLanding.yourRate && formDataLanding.purpose) {
          return true
        }
        setKey(Date.now())
        scrollToError()
        return false
      } else if ((contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[4].label)) { // Checked Full redemption on all loans
        if (formDataLanding.lockIn && formDataLanding.reason) {
          return true
        }
        setKey(Date.now())
        scrollToError()
        return false
      } else if (contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[5].label) { // Checked DDA account
        return true
      } else if (
        checkMatchOption(DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA)
        || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_SHORT_DDA)
        // || checkMatchOption(DATA_STATE_REPRICING_SHORT)
        || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_DDA)
        || checkMatchOption(DATA_STATE_REPRICING_SHORTENING_DDA)
        // || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA)
        || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA)
        || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL_DDA)
        // || checkMatchOption(DATA_STATE_REPRICING_DDA)
        // || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA_MIX)
        || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL)
        //|| checkMatchOption(DATA_STATE_REPRICING_SHORT_DDA_MIX)
        || checkMatchOption(DATA_STATE_LENGTH_PARTIAL)
        || checkMatchOption(DATA_STATE_LENGTH_SHORT)
        || checkMatchOption(DATA_STATE_PARTIAL_DDA)
      ) {
        return true
      }
      else {
        setKey(Date.now())
        scrollToError()
        return false
      }
    }
  }

  /**
   * Handle next page
   */
  const handleNextPage = (categoryName: string) => {
    if (formReduxData.isBorrower) {
      /**
       * Borrower - Singpass
       */

      const dataForm = {
        ...formReduxData.form,
        formLanding: {
          ...formDataLanding,
          listChecked: [...contentShow],
          documentRequired: handleConvertArrListDocument(handleShowListDocument()) || [],
        }
      };
      if (categoryName !== MANUAL) {
        dispatch(setShowDocument(false))
        dispatch(setMainApplicant(SINGPASS));
        dispatch(saveFormData(dataForm));
        openDialog(SLUG_POPUP[5])
      } else {
        /**
        * Borrower - Manual
        */

        dispatch(setMainApplicant(MANUAL));
        if (!formReduxData.form.formLanding.listChecked) {
          dispatch(saveFormData(dataForm));
          handleSetDefaultManualJointBorrower(OTP_JOINT_MANUAL[0])
        }
        dispatch(setShowDocument(true))
      }

    } else {
      if (handleValidation()) {
        if (_.includes(contentShow, DATA_CARD_CHECKBOX[3].label)) {
          setFormDataLanding({
            lockIn: formDataLanding.lockIn || '',
            reason: '',
            yourRate: formDataLanding.yourRate || '',
            purpose: formDataLanding.purpose || '',
            national: LIST_NATIONAL[0].value,
            termLoan: LIST_TERM_LOAN[0].value,
          })
        } else if (_.includes(contentShow, DATA_CARD_CHECKBOX[0].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[1].label)) {
            setFormDataLanding({
              lockIn: '',
              reason: '',
              yourRate: '',
              purpose: formDataLanding.purpose || '',
              national: LIST_NATIONAL[0].value,
              termLoan: LIST_TERM_LOAN[0].value,
            })
        } else if (contentShow.length === 1 && (_.includes(contentShow, DATA_CARD_CHECKBOX[2].label) || _.includes(contentShow, DATA_CARD_CHECKBOX[5].label))) {
            setFormDataLanding({
              lockIn: '',
              reason: '',
              yourRate: '',
              purpose: '',
              national: LIST_NATIONAL[0].value,
              termLoan: LIST_TERM_LOAN[0].value,
            })
        } else if (contentShow.length === 1 && _.includes(contentShow, DATA_CARD_CHECKBOX[4].label)) {
            setFormDataLanding({
              lockIn: formDataLanding.lockIn || '',
              reason: formDataLanding.reason || '',
              yourRate: '',
              purpose: '',
              national: LIST_NATIONAL[0].value,
              termLoan: LIST_TERM_LOAN[0].value,
            })
          }
        else {
          setFormDataLanding({
            lockIn: formDataLanding.lockIn || '',
            reason: '',
            yourRate: formDataLanding.yourRate || '',
            purpose: '',
            national: LIST_NATIONAL[0].value,
            termLoan: LIST_TERM_LOAN[0].value,
          })
        }
        const dataForm = {
          ...formReduxData.form,
          formLanding: {
            ...formDataLanding,
            listChecked: [...contentShow],
            documentRequired: (getListDocument() && getListDocument().length > 0) ? [...getListDocument()] : [],
          }
        };
        if (categoryName === MANUAL) {
          if ((
            // && (
            //   checkMatchOption(LIST_REQUEST_REPRICING.lengtheningOfLoanTenure)
            //   || checkMatchOption(LIST_REQUEST_REPRICING.repricing)
            //   || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING)
            // ) || 
            (
              checkMatchOption(LIST_REQUEST_REPRICING.partialPrepayment)
              || checkMatchOption(LIST_REQUEST_REPRICING.shorteningOfLoanTenure)
              || checkMatchOption(LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans)
              || checkMatchOption(LIST_REQUEST_REPRICING.ddaAccount)
              || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_SHORT_DDA)
              || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_DDA)
              || checkMatchOption(DATA_STATE_REPRICING_SHORTENING_DDA)
              || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL)
              || checkMatchOption(DATA_STATE_REPRICING_SHORT)
              || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL_DDA)
              || checkMatchOption(DATA_STATE_PARTIAL_DDA)
              || checkMatchOption(DATA_STATE_REPRICING_DDA)
              || checkMatchOption(DATA_STATE_REPRICING_PARTIAL)
              || checkMatchOption(DATA_STATE_LENGTH_PARTIAL)
              || checkMatchOption(DATA_STATE_LENGTHENING_DDA)
              || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA)
              || checkMatchOption(DATA_STATE_LENGTH_SHORT)
              || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA)
              || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA_MIX)
              || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL)
              || checkMatchOption(DATA_STATE_REPRICING_SHORT_DDA_MIX)
            ))
          ) {
            dispatch(setShowDocument(true))
          } else {
            dispatch(setMainApplicant(MANUAL));
            dispatch(setShowDocument(true))
            history.push(URL_MANUAL_FLOW.personalInformation)
          }
        } else {
          dispatch(setMainApplicant(SINGPASS));
          dispatch(setShowDocument(false))
          history.push(URL_SINGPASS_FLOW.checkInformation)
        }
        dispatch(saveFormData(dataForm));
      }
    }

  }

  /**
   * handle click next button for what you need manual
   */

  const handleClickButtonNextForManual = () => {
    const dataForm = {
      ...formReduxData.form,
      formLanding: {
        ...formDataLanding,
        listChecked: [...contentShow],
        documentRequired: (getListDocument() && getListDocument().length > 0) ? [...getListDocument()] : [],
      }
    };
    dispatch(saveFormData(dataForm));
    dispatch(setMainApplicant(MANUAL));
    if (formReduxData.isBorrower) {
      openDialog(SLUG_POPUP[5])
    } else {
      if (handleValidation()) {
        dispatch(setShowDocument(true))
        history.push(URL_MANUAL_FLOW.personalInformation)
      }
    }
  }

  /**
   * 
   * Handle Generate OTP
   */
  const handleGenerateOTP = async () => {
    const responseLoansData = await generateOtp(query.get('code-joint'));
    if(responseLoansData.AuthGenerateOTPResp && responseLoansData.AuthGenerateOTPResp.RespBody && responseLoansData.AuthGenerateOTPResp.RespBody.Message && responseLoansData.AuthGenerateOTPResp.RespBody.Message.Result && responseLoansData.AuthGenerateOTPResp.RespBody.Message.Result.Status) {
      return true;
    } else {
      return false;
    }
  }

  /**
    * Handle Call Api Loan App MGMT
   */
   const handleCallApiLoanAppMgmt = async (value: string, code: string) => {
     const responseLoansData = await getLoansInfoFromOtp(Number(value), code);
      if(responseLoansData.LoansAppMgmtResp && responseLoansData.LoansAppMgmtResp.RespBody && responseLoansData.LoansAppMgmtResp.RespBody.Result.length) {
        dispatch(getMyInfo(responseLoansData.LoansAppMgmtResp.RespBody.Result[0].LoansAppMgmt));
        handleNextPage(SINGPASS);
      }
   }


     /**
    * Handle Call Api Simulator
   */
      const handleCallApiSimulator = async (value: string, apexAppId: string, clientSecret: string, listAttribute: string) => {
        const responseLoansData = await simulatorLoginSingPass(Number(value), apexAppId, clientSecret, listAttribute );
         if(responseLoansData.GetPersonDataExtRes && responseLoansData.GetPersonDataExtRes.PersonData) {
           document.cookie = `repricing=${_.includes(contentShow, DATA_CARD_CHECKBOX[0].label)}`
           document.cookie = `lengthening_of_loan_tenure=${_.includes(contentShow, DATA_CARD_CHECKBOX[1].label)}`
           document.cookie = `shortening_of_loan_tenure=${_.includes(contentShow, DATA_CARD_CHECKBOX[2].label)}`
           document.cookie = `partial_prepayment=${_.includes(contentShow, DATA_CARD_CHECKBOX[3].label)}`
           document.cookie = `full_redemption_of_loan=${_.includes(contentShow, DATA_CARD_CHECKBOX[4].label)}`
           document.cookie = `change_of_debiting_account=${_.includes(contentShow, DATA_CARD_CHECKBOX[5].label)}`
           setLoading(true);
           setTimeout(() => {
            setLoading(false);
            dispatch(getMyInfo(responseLoansData.GetPersonDataExtRes.PersonData));
            dispatch(getRefId(responseLoansData.GetPersonDataExtRes.RefID));
            handleNextPage(SINGPASS);
           }, 1500)
         } else {
          setLoading(false);
          setKey(Date.now())
          scrollToError()
         }
      }
   

  /**
   * Handle click OK button on OTP popup
   */
  const handleClickOkForOTP = async () => {
    const response = await validateOtp(codeOTP.code, query.get('code-joint'))
    const dataForm = {
      ...formReduxData.form,
      formLanding: {
        ...formDataLanding,
        otp: codeOTP.code
      }
    }
    if(response.AuthValidateOTPResp && response.AuthValidateOTPResp.RespBody && response.AuthValidateOTPResp.RespBody.Message.Result.IsValid) {
      if (formReduxData.isBorrower) {
        const responseLoansData = await getLoansInfoFromOtp(Number(codeOTP.code), query.get('code-joint'));
        if(responseLoansData.LoansAppMgmtResp && responseLoansData.LoansAppMgmtResp.RespBody && responseLoansData.LoansAppMgmtResp.RespBody.Result.length) {
          dispatch(getMyInfo(responseLoansData.LoansAppMgmtResp.RespBody.Result[0].LoansAppMgmt));
          if (formReduxData.mainApplicant === SINGPASS) {
            history.push(URL_PERSONAL_BORROWER_SINGPASS);
          } else {
            history.push(URL_PERSONAL_BORROWER_MANUAL)
          }
        }
      }
      closeDialog();
    } else {
      setIsError(true);
    }
  }

  /**
   * Handle set step to click
   * @param {string} value - Name step 
   * @param {number} idx  - Index
   */
  const handleClickChangeStep = (value: string, idx: number) => {
    setStepInstruction({
      step: value,
      index: idx
    })
  }

  /**
   * Handle scroll to ID
   * @param {string} id - Destination 
   */
  const handleScrollTopId = (id: string) => {
    if (window.innerWidth <= 600) {
      const elem = document.getElementById(id);
      elem.scrollTo({
        top: document.getElementById('img-step').offsetTop,
        behavior: "smooth"
      });
    }

  }

  /**
   * Auto data from store
   */

  useEffect(() => {
    if (formReduxData.form && formReduxData.form.formLanding && Object.keys(formReduxData.form.formLanding).length > 0) {
      setFormDataLanding({
        ...formDataLanding,
        lockIn: formReduxData.form.formLanding.lockIn || null,
        reason: formReduxData.form.formLanding.reason || '',
        yourRate: formReduxData.form.formLanding.yourRate || '',
        purpose: formReduxData.form.formLanding.purpose || '',
        national: formReduxData.form.formLanding.national || '',
        termLoan: formReduxData.form.formLanding.termLoan || '',
      })
      setContentShow(formReduxData.form.formLanding.listChecked || [])
    }
  }, [formReduxData.form && formReduxData.form.formLanding])

  /**
 * Set default Joint borrower - Manual - Repricing - Investment -Term loans
 */
  const handleAddBothRepricingAndLengthening = () => {
    const dataForm = {
      ...formReduxData.form,
      formLanding: {
        ...formReduxData.form.formLanding,
        // listChecked: [...LIST_DATA_INFORMATION],
      }
    };
    dispatch(saveFormData(dataForm));
  }

  const handleConvertToFormatDocumentRequired = (arr: any[]) => {
    const documents: string[] = []
    arr.map((item, idx) => (
      documents.push(item.label)
    ))
    return documents;
  }

  /**
   * Set default Joint borrower - Manual - Repricing - Investment -Term loans
   */
  const handleSetDefaultManualJointBorrower = (opt: string) => {
    if (opt === OTP_JOINT_MANUAL[0]) {
      const dataForm = {
        ...formReduxData.form,
        formLanding: {
          lockIn: null,
          reason: '',
          yourRate: '',
          purpose: LIST_SELECT_PURPOSE[1].value,
          national: LIST_NATIONAL[0].value,
          termLoan: LIST_TERM_LOAN[1].value,
          listChecked: LIST_DATA_INFORMATION,
          documentRequired: handleConvertToFormatDocumentRequired(LIST_DOCUMENT_JOINT_SG_TERM),
        }
      };
      dispatch(saveFormData(dataForm));
    }
    if (opt === OTP_JOINT_MANUAL[1]) {
      const dataForm = {
        ...formReduxData.form,
        formLanding: {
          lockIn: null,
          reason: '',
          yourRate: '',
          purpose: LIST_SELECT_PURPOSE[1].value,
          national: LIST_NATIONAL[0].value,
          termLoan: LIST_TERM_LOAN[0].value,
          listChecked: LIST_DATA_INFORMATION,
          documentRequired: handleConvertToFormatDocumentRequired(LIST_DOCUMENT_JOINT_SG_NO_TERM),
        }
      };
      dispatch(saveFormData(dataForm));
    }
    if (opt === OTP_JOINT_MANUAL[2]) {
      const dataForm = {
        ...formReduxData.form,
        formLanding: {
          lockIn: null,
          reason: '',
          yourRate: '',
          purpose: LIST_SELECT_PURPOSE[1].value,
          national: LIST_NATIONAL[1].value,
          termLoan: LIST_TERM_LOAN[1].value,
          listChecked: LIST_DATA_INFORMATION,
          documentRequired: handleConvertToFormatDocumentRequired(LIST_DOCUMENT_JOINT_NO_SG),
        }
      };
      dispatch(saveFormData(dataForm));
    }

    /**
     * Only Lengthening of loan tenure
     * Singaporean/PR
     */
    if (opt === OTP_JOINT_MANUAL[3]) {
      const dataForm = {
        ...formReduxData.form,
        formLanding: {
          lockIn: null,
          reason: '',
          yourRate: '',
          purpose: LIST_SELECT_PURPOSE[1].value,
          national: LIST_NATIONAL[0].value,
          termLoan: LIST_TERM_LOAN[1].value,
          listChecked: [DATA_CARD_CHECKBOX[1].label],
          documentRequired: handleConvertToFormatDocumentRequired(LIST_DOCUMENT_JOINT_ONLY_LENGTH_SG),
        }
      };
      dispatch(saveFormData(dataForm));
    }

    /**
     * Only Lengthening of loan tenure
     * Non-Singaporean/PR
     */
    if (opt === OTP_JOINT_MANUAL[4]) {
      const dataForm = {
        ...formReduxData.form,
        formLanding: {
          lockIn: null,
          reason: '',
          yourRate: '',
          purpose: LIST_SELECT_PURPOSE[1].value,
          national: LIST_NATIONAL[1].value,
          termLoan: LIST_TERM_LOAN[1].value,
          listChecked: [DATA_CARD_CHECKBOX[1].label],
          documentRequired: handleConvertToFormatDocumentRequired(LIST_DOCUMENT_TENURE_2_INVEST_NONE_SG_BOTH_TERM),
        }
      };
      dispatch(saveFormData(dataForm));
    }
  }

  /**
* Handle check match option request
* @function 
* @param {Array} data - Input of option request
* @returns {boolean}
*/
  const checkMatchOptionBorrowerFlow = (data: any) => {
    return _.isEqual(_.sortBy(data), _.sortBy(formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.listChecked || []))
  }

  const handleVerifyChangeUI = () => {
    if (handleCheckManualAndLenthenTenureMoreThanOne()
      || (formReduxData.isBorrower && formReduxData.form && formReduxData.form.formLanding && checkMatchOptionBorrowerFlow(LIST_REQUEST_REPRICING.repricing) && formReduxData.form.formLanding.documentRequired && formReduxData.form.formLanding.documentRequired.length > 0)
      || (formReduxData.isBorrower && formReduxData.form && formReduxData.form.formLanding && checkMatchOptionBorrowerFlow(DATA_STATE_REPRICING_LENGTHENING) && formReduxData.form.formLanding.documentRequired && formReduxData.form.formLanding.documentRequired.length > 0)
      || (formReduxData.isBorrower && formReduxData.form && formReduxData.form.formLanding && checkMatchOptionBorrowerFlow(LIST_REQUEST_REPRICING.lengtheningOfLoanTenure) && formReduxData.form.formLanding.documentRequired && formReduxData.form.formLanding.documentRequired.length > 0)) {
      return true
    }
    return false
  }


  // Render UI
  return (
    <>
      {loading && <div className={cx('container-loading')}>
        <div className={cx('content-loading')}>
          <Loading />
        </div>
      </div>}
      {formReduxData.dataBanner && formReduxData.isShowBannerMaintenance && <Banner data={formReduxData.dataBanner} />}
      <Header
        namePage={TITLE_PAGE}
        backLink={{ name: TITLE_PAGE, href: LINK_EXTERNAL_PAGE }}
      />
      {/* {loading && <div className={cx('container-loading')}>
        <div className={cx('content-loading')}>
          <Loading />
        </div>
      </div>} */}

      <Container className={cx('container')}>
        <section className={cx('landing-page', formReduxData.isBorrower && 'landing-page-borrower')}>

          {/* Section Title */}
          <LandingTitle cx={cx}
            contentShow={contentShow}
            formReduxData={formReduxData}
          />

          {/* Show when not is borrower */}
          {
            !formReduxData.isBorrower && (
              <>
                {/* Section Home loan requests */}
                <LandingHomeLoanRequest
                  dataCardCheckbox={dataCardCheckbox}
                  checkboxKey={key}
                  cx={cx}
                  handleGetValueCheckbox={handleGetValueCheckbox}
                />

                {/* section message */}
                <LandingMessage
                  cx={cx}
                  keyValidation={key}
                  contentShow={contentShow}
                  listSelectPurpose={listSelectPurpose}
                  setValueFormLandingPage={setValueFormLandingPage}
                  formDataLanding={formDataLanding}
                  errCheckbox={errCheckbox}
                  checkMatchOption={checkMatchOption}
                  listSelectPartialPrepayment={listSelectPartialPrepayment}
                  listSelectFullRedemption={listSelectFullRedemption}
                />
              </>
            )
          }

          {/* section What you need */}
          <LandingWhatYouNeed
            cx={cx}
            keyValidation={key}
            setKey={setKey}
            contentShow={contentShow}
            checkMatchOption={checkMatchOption}
            checkMatchOptionBorrowerFlow={checkMatchOptionBorrowerFlow}
            formReduxData={formReduxData}
            openDialog={openDialog}
            checkReturnConditionListDocumentDefault={checkReturnConditionListDocumentDefault}
            checkReturnConditionListDocumentForManual={checkReturnConditionListDocumentForManual}
            formDataLanding={formDataLanding}
            handleShowListDocument={handleShowListDocument}
            setValueFormLandingPage={setValueFormLandingPage}
            history={history}
            handleNextPage={handleNextPage}
            handleVerifyChangeUI={handleVerifyChangeUI}
            handleCheckManualAndLenthenTenureMoreThanOne={handleCheckManualAndLenthenTenureMoreThanOne}
            handleClickButtonNextForManual={handleClickButtonNextForManual}
            handleCallApiLoanAppMgmt={handleCallApiLoanAppMgmt}
            simulatorLoginSingPass={handleCallApiSimulator}
            handleValidation={handleValidation}
            query={query}
            dispatch={dispatch}
            getListDocument={getListDocument}
            setLoading={setLoading}
          />

        </section>
      </Container>


      {/* Demo */}
      {/* <LandingDemo
        handleSetDefaultManualJointBorrower={handleSetDefaultManualJointBorrower}
        handleAddBothRepricingAndLengthening={handleAddBothRepricingAndLengthening}
      /> */}

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

      <Footer />
    </>
  );
};
export default Landing;
