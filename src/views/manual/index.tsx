/***
 * CONTAINER MANUAL
 *    >> child
 *      >> header
 *      >> form layout
 *      >> footer
 */

// import modules
import { ACCOUNT_INFORMATION, DATA_LENGTH, DATA_NON_REPRICING, DATA_REPRICING, DATA_STATE_REPRICING_LENGTHENING, DATA_TABS_DDA_BORROWER_MANUAL_LENGTH_ONLY, DATA_TABS_DDA_BORROWER_MANUAL_LENGTH_REPRICING, DATA_TABS_DDA_BORROWER_SINGPASS, DATA_TABS_DDA_FULL_SELECTED, DATA_TABS_DDA_MANUAL_FULL_SELECTED, DATA_TABS_NON_REPRICING_MANUAL_SELECTED, DATA_TABS_NON_REPRICING_SELECTED, DATA_TABS_REPRICING_MANUAL_SELECTED, DATA_TABS_REPRICING_NO_LIST_DOCUMENT_MANUAL_SELECTED, DATA_TABS_REPRICING_SELECTED, DATA_TABS_REP_NON_REPRICING_MANUAL_SELECTED, DATA_TABS_REP_NON_REPRICING_SELECTED, ERROR_DETAIL_ADDRESS, LIST_REQUEST_REPRICING, MANUAL, NON_REPRICING, PERSONAL_INFORMATION, PROPERTY_INFORMATION, REPRICING_REQUEST, REPRICING_SLUG, REVIEW, REVIEW_SLUG, YES } from '@/utils/constants';

// import constant data
import RepricingRequest from '@/views/repricing-request';
// import component lib
import {
  Footer, FormLayout, Header, Tabs, Link
} from '@sectionsg/orc';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from 'react-router';

// import page
import PersonalInformation from './personal-information';
import NonRepricingRequest from '@/views/non-repricing-requests';
import PropertyInformation from '../property-information';
import AccountInformation from './account-information';
import ReviewSubmit from './review-submit';
import ReviewJoinBorrower from '@/views/manual/joint-borrower-review';
import { getPostalCode, infoAPI, infoAPIForeigner, infoCountryCode, infoRepricingRequestSingle } from '@/data-manager/info';
import { getMyInfo, setInfoRequestBorrowRequest } from '@/store/form';
import _ from 'lodash';
import { checkMatchOption } from '@/utils/utils';
import { adobeAbandon } from '@/utils/adobeTracking';

// render UI
const ContainerManual = () => {
  const { slug } = useParams();
  const history = useHistory();
  const childRef: any = useRef();
  const dispatch = useDispatch();
  const [addressDetail, setAddressDetail] = useState<any>();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (history.action === 'POP') {
      window.location.href = '/';
    }
    let trackingEvent = window.attachEvent || window.addEventListener
    let chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'
    trackingEvent(chkevent, adobeAbandon);
  }, [])

  /**
  * Handle call api
  * @function 
  * @returns {object}
  */
  const handleCallAPI = (value: string) => {
    // infoRepricingRequestSingle().then((res) => {
    //   dispatch(setInfoRequestBorrowRequest(res));
    // });
    // if (value === YES) {
    //   infoAPI().then((res) => {
    //     dispatch(getMyInfo(res));
    //   });
    // } else {
    //   infoAPIForeigner().then((res) => {
    //     dispatch(getMyInfo(res));
    //   });
    // }
  }

  /**
  * Retrieves data from Store
  */
  const formReduxData = useSelector((state: any) => state.form);

  /**
  * Handle check match option request
  * @function 
  * @returns {boolean}
  */
  const checkMatchOptionNonRepricing = () => {
    let result: boolean = true;
    const formLanding = formReduxData.form;
    const listChecked = formLanding.formLanding.listChecked;
    listChecked.map((item: any, idx: number) => {
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
  * Handle check match option request
  * @function 
  * @returns {boolean}
   */

     const checkMatchOptionNonRepricingAndPricingInvestment = () => {
      const formLanding = formReduxData.form;
      const listChecked = formLanding.formLanding.listChecked;
      const listDocumentRequired = formLanding && formLanding.formLanding && formLanding.formLanding.documentRequired ? formLanding.formLanding.documentRequired : [];
      if (listChecked[0].includes(DATA_REPRICING[0]) && listChecked.length > 1 && listDocumentRequired.length === 0) {
        return true
      }
    }
  

  /**
 * Handle check match option request
 * @function 
 * @returns {boolean}
 */
  const checkMatchOptionNonRepricingAndPricing = () => {
    const formLanding = formReduxData.form;
    const listChecked = formLanding.formLanding.listChecked;
    const listDocumentRequired = formLanding && formLanding.formLanding && formLanding.formLanding.documentRequired ? formLanding.formLanding.documentRequired : [];
    const listRepricingLength = checkMatchOption(listChecked, DATA_STATE_REPRICING_LENGTHENING) && listChecked.length === 2
    if (listChecked.includes(DATA_REPRICING[0]) && !listRepricingLength && listChecked.length > 1 && listDocumentRequired.length > 0) {
      return true
    }
  }


  /** 
  * Dynamic stepper - Singpass
  */
  const handleDetectDynamicStepper = () => {
    const formLanding = formReduxData.form;

    /**
    * Manual - Borrower flow
    */
    if (formReduxData.isBorrower && formReduxData.mainApplicant === MANUAL) {
      /**
       * Lengthening of loan tenure Only
       */
      if (formLanding.formLanding && formLanding.formLanding.listChecked && formLanding.formLanding.listChecked.length === 1 && formLanding.formLanding.listChecked[0] === LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]) {
        return DATA_TABS_DDA_BORROWER_MANUAL_LENGTH_ONLY
      }
      return DATA_TABS_DDA_BORROWER_MANUAL_LENGTH_REPRICING
    } else {
      if (formLanding && formLanding.formLanding && formLanding.formLanding.listChecked && formLanding.formLanding.listChecked.length > 0) {

        /**
        * 	Change of debiting account || Full redemption of all loans selected
        */
        if ((LIST_REQUEST_REPRICING.ddaAccount[0] === formLanding.formLanding.listChecked[0] || formLanding.formLanding.listChecked[0] === LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0]) && formLanding.formLanding.listChecked.length === 1) {
          return DATA_TABS_DDA_MANUAL_FULL_SELECTED
        }

        /**
         * 	Repricing only - Owner occupied
         */
        else if ((LIST_REQUEST_REPRICING.repricing[0] === formLanding.formLanding.listChecked[0]) && formLanding.formLanding.listChecked.length === 1) {
          return DATA_TABS_REPRICING_NO_LIST_DOCUMENT_MANUAL_SELECTED
        }

        /**
        * 	Shortening of loan tenure || Lengthening of loan tenure || Partial prepayment select
        */
        else if (checkMatchOptionNonRepricing() || checkMatchOptionNonRepricingAndPricingInvestment()) {
          return DATA_TABS_NON_REPRICING_MANUAL_SELECTED
        }

        /**
        * Repricing and Non-repricing selected
        */
        else if (checkMatchOptionNonRepricingAndPricing()) {
          return DATA_TABS_REP_NON_REPRICING_MANUAL_SELECTED
        }

        else return DATA_TABS_NON_REPRICING_MANUAL_SELECTED

      }
    }
  }

  /**
 * Handle click into on stepper
 * @param {string} path - Slug for page 
 */
  const handleClick = (path: any) => {
    if (childRef.current) {
      if (formReduxData.isBorrower) {
        if (childRef.current.validateForm()) {
          history.push(`/manual-form/borrower/${path}`);
        }
      } else {
        if (childRef.current.validateForm()) {
          history.push(`/manual-form/${path}`);
        }
        childRef.current.handleNextPage();
      }
    }
  };

  /**
   * 
   * @param value 
   */
   const getDataFromPostalCode = async (value: string) => {
    if (value.length === 6) {
      const response = await getPostalCode(value)
      if (response.CustAddressInquiryResp.RespBody){
        setAddressDetail(response.CustAddressInquiryResp.RespBody.AddressDetail);
      }
      else {
        setAddressDetail(ERROR_DETAIL_ADDRESS);
      }
    }
  };

  return (
    <>
      {/* section header */}
      <Header
        namePage="Home Loan Services"
      />
      {/* section form layout */}
      <FormLayout
        isMyInfo={true}
        tabs={(
          <Tabs
            tabId={slug}
            handleClick={handleClick}
            dataTabs={handleDetectDynamicStepper()}
          />
        )}
        content={(
          <>
            {
              slug === PERSONAL_INFORMATION && (
                <PersonalInformation ref={childRef} handleCallAPI={handleCallAPI} />
              )
            }
            {
              slug === REPRICING_SLUG && (
                <RepricingRequest ref={childRef} checkMatchOptionNonRepricingAndPricing={checkMatchOptionNonRepricingAndPricing}>
                  {/* <Link href="/" classHover="linkUnderline" isOnClick>Continue later</Link> */}
                </RepricingRequest>
              )
            }
            {
              slug === PROPERTY_INFORMATION && (
                <PropertyInformation 
                  ref={childRef}
                  getDataFromPostalCode={getDataFromPostalCode}
                  addressDetail={addressDetail}
                >
                 {/* <Link href="/" classHover="linkUnderline" isOnClick>Continue later</Link> */}
                </PropertyInformation>
              )
            }
            {
              slug === ACCOUNT_INFORMATION && (
                <AccountInformation checkMatchOptionNonRepricing={checkMatchOptionNonRepricing} checkMatchOptionNonRepricingAndPricingInvestment={checkMatchOptionNonRepricingAndPricingInvestment} ref={childRef}>
                 {/* <Link href="/" classHover="linkUnderline" isOnClick>Continue later</Link> */}
                </AccountInformation>
              )
            }
            {
              slug === NON_REPRICING && (
                <NonRepricingRequest ref={childRef} checkMatchOptionNonRepricing={checkMatchOptionNonRepricing} checkMatchOptionNonRepricingAndPricing={checkMatchOptionNonRepricingAndPricing} checkMatchOptionNonRepricingAndPricingInvestment={checkMatchOptionNonRepricingAndPricingInvestment}>
                 {/* <Link href="/" classHover="linkUnderline" isOnClick>Continue later</Link> */}
                </NonRepricingRequest>
              )
            }
            {
              slug === REVIEW_SLUG && <ReviewSubmit ref={childRef}>
                {/* <Link href="/" classHover="linkUnderline" isOnClick>Continue later</Link> */}
              </ReviewSubmit>
            }
            {
              slug === DATA_TABS_DDA_BORROWER_SINGPASS[1].id && (
                <ReviewJoinBorrower ref={childRef}>
                  {/* <Link href="/" classHover="linkUnderline" isOnClick>Continue later</Link> */}
                </ReviewJoinBorrower>
              )
            }
          </>
        )}
      />
      {/* section footer */}
      <Footer />
    </>
  )
}

export default ContainerManual;