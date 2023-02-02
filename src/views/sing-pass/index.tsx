/***
 * CONTAINER SINGPASS
 *    >> child
 *      >> header
 *      >> form layout
 *      >> footer
 */

// import modules
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import PropertyInformation from '../property-information';
import RepricingRequest from '../repricing-request';
import AccountInformation from './account-information';

import { getPostalCode, infoAPI, infoAPIForeigner, infoCountryCode, infoRepricingRequestSingle, getLoansInfoFromOtp } from '@/data-manager/info';
import { getMyInfo, setInfoRequestBorrowRequest } from '@/store/form';

// import constant data
import { ACCOUNT_INFORMATION, CHECK_INFORMATION, DATA_NON_REPRICING, DATA_REPRICING, DATA_TABS_DDA_BORROWER_SINGPASS, DATA_TABS_DDA_FULL_SELECTED, DATA_TABS_DDA_FULL_SELECTED_INVESTMENT, DATA_TABS_NON_REPRICING_SELECTED, DATA_TABS_REPRICING_SELECTED, DATA_TABS_REP_NON_REPRICING_SELECTED, LIST_DATA_INFORMATION, LIST_REQUEST_REPRICING, LIST_SELECT_PURPOSE, NON_REPRICING, PROPERTY_INFORMATION, REPRICING_REQUEST, SINGAPORE, SINGPASS, REVIEW, REVIEW_SLUG, ERROR_DETAIL_ADDRESS, DATA_STATE_REPRICING_LENGTHENING_DDA, DATA_STATE_REPRICING_DDA, DATA_STATE_REPRICING_SHORTENING_DDA, DATA_STATE_REPRICING_PARTIAL_DDA, DATA_STATE_DDA, DATA_CARD_CHECKBOX } from '@/utils/constants';

// import child component
import NonRepricingRequest from '@/views/non-repricing-requests';
import ReviewJoinBorrower from '@/views/sing-pass/joint-borrower-review';
import PersonalInformationSingPass from '@/views/sing-pass/personal-information';
import ReviewSubmit from "@/views/sing-pass/review-submit";
// import component lib
import {
  Footer, FormLayout, Header, Tabs, ContinueLater, Link
} from '@sectionsg/orc';
import { adobeAbandon } from '@/utils/adobeTracking';
import { getCookie } from '@/utils/utils';




// render UI
const ContainerSingPass = () => {
  const { slug } = useParams();
  const history = useHistory();
  const childRef: any = useRef();
  const dispatch = useDispatch();
  const [addressDetail, setAddressDetail] = useState<any>();

  /**
  * Retrieves data from Store
  */
  const formReduxData = useSelector((state: any) => state.form);

  /**
   * Required for repricing and Lengthening of loan tenure
   */
  const isFullOption = _.isEqual((formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.listChecked || []), LIST_DATA_INFORMATION);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (history.action === 'POP') {
      window.location.href = '/';
    }
    let trackingEvent = window.attachEvent || window.addEventListener
    let chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'
    trackingEvent(chkevent, adobeAbandon);
    let div = document.getElementById('selected_requests');
    div.innerHTML = getCookie('listChecked');
  }, [])

  /**
   * Handle call api
   * @function 
   * @returns {object}
   */
  const handleCallAPI = async() => {
    // infoRepricingRequestSingle().then((res) => {
    //   dispatch(setInfoRequestBorrowRequest(res));
    // });
  }

  /**
   * handle reset call api
   */
  const handleResetCallAPI = () => {
    console.log('aaaa');
  }

  /**
  * Handle check match option request
  * @function 
  * @returns {boolean}
  */
  const checkMatchOptionNonRepricing = () => {
    let result: boolean = true;
    const formLanding = formReduxData.form;
    const listChecked = formLanding && formLanding.formLanding && formLanding.formLanding.listChecked;
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
    if (listChecked[0].includes(DATA_REPRICING[0]) && listChecked.length > 1) {
      return true
    }
  }

  /**
   * Handle check match option request
   * @function 
   * @param {Array} data - Input of option request
   * @returns {boolean}
   */


  /** 
  * Dynamic stepper - Singpass
  */
  const handleDetectDynamicStepper = () => {
    const formLanding = formReduxData.form;
    const listChecked = formLanding && formLanding.formLanding && formLanding.formLanding.listChecked ? formLanding.formLanding.listChecked : [];
    const conditionNoPricing = !_.includes(listChecked, DATA_CARD_CHECKBOX[0].label) && !_.includes(listChecked, DATA_CARD_CHECKBOX[4].label)
    /**
     * Singpass - Borrower flow
     */
    if (formReduxData.isBorrower && formReduxData.mainApplicant === SINGPASS) {
      return DATA_TABS_DDA_BORROWER_SINGPASS
    } else {
      if (formLanding && formLanding.formLanding && formLanding.formLanding.listChecked && formLanding.formLanding.listChecked.length > 0) {

        /**
        * 	Change of debiting account || Full redemption of all loans selected
        */
        if ((LIST_REQUEST_REPRICING.ddaAccount[0] === formLanding.formLanding.listChecked[0] || formLanding.formLanding.listChecked[0] === LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0]) && formLanding.formLanding.listChecked.length === 1) {
          return DATA_TABS_DDA_FULL_SELECTED
        }

        /**
        * 	Repricing only - Investment
        */
        else if ((LIST_REQUEST_REPRICING.repricing[0] === formLanding.formLanding.listChecked[0] && formLanding.formLanding.purpose === LIST_SELECT_PURPOSE[1].value) && formLanding.formLanding.listChecked.length === 1) {
          return DATA_TABS_DDA_FULL_SELECTED_INVESTMENT
        }

        /**
         * 	Repricing only - Owner occupied
         */
        else if ((LIST_REQUEST_REPRICING.repricing[0] === formLanding.formLanding.listChecked[0] && formLanding.formLanding.purpose !== LIST_SELECT_PURPOSE[1].value) && formLanding.formLanding.listChecked.length === 1) {
          return DATA_TABS_REPRICING_SELECTED
        }

        /**
        * 	Shortening of loan tenure || Lengthening of loan tenure || Partial prepayment select
        */
        else if (checkMatchOptionNonRepricing() || conditionNoPricing) {
          return DATA_TABS_NON_REPRICING_SELECTED
        }

        /**
        * Repricing and Non-repricing selected
        */
        else if (checkMatchOptionNonRepricingAndPricing()) {
          return DATA_TABS_REP_NON_REPRICING_SELECTED
        }
        else return DATA_TABS_DDA_FULL_SELECTED_INVESTMENT
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
          history.push(`/sing-pass-form/borrower/${path}`);
        }
      } else {
        if (path !== 'check-information') {
          if (childRef.current.validateForm()) {
            history.push(`/sing-pass-form/${path}`);

          }
          childRef.current.handleNextPage();
        }
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
        isMyInfo
        tabs={(
          <Tabs
            tabId={slug}
            handleClick={handleClick}
            dataTabs={handleDetectDynamicStepper() !== undefined && handleDetectDynamicStepper()}
          />
        )}
        content={(
          <>
            {(slug === CHECK_INFORMATION ||
              slug === DATA_TABS_DDA_BORROWER_SINGPASS[0].id) && <PersonalInformationSingPass ref={childRef} handleCallAPI={handleCallAPI} isFullOption={isFullOption} hasHDB={formReduxData.form.hdb}>
                {/* <Link href="/" classHover="linkUnderline" isOnClick>Continue later</Link> */}
              </PersonalInformationSingPass>}
            {
              slug === PROPERTY_INFORMATION && 
              <PropertyInformation 
                ref={childRef} 
                getDataFromPostalCode={getDataFromPostalCode}
                addressDetail={addressDetail}
              >
                {/* <Link href="/" classHover="linkUnderline" isOnClick>Continue later</Link> */}
              </PropertyInformation>
            }
            {
              slug === ACCOUNT_INFORMATION && <AccountInformation checkMatchOptionNonRepricing={checkMatchOptionNonRepricing} checkMatchOptionNonRepricingAndPricingInvestment={checkMatchOptionNonRepricingAndPricingInvestment} ref={childRef}>
                {/* <Link href="/" classHover="linkUnderline" isOnClick>Continue later</Link> */}
              </AccountInformation>
            }
            {
              slug === REPRICING_REQUEST && <RepricingRequest ref={childRef} checkMatchOptionNonRepricingAndPricing={checkMatchOptionNonRepricingAndPricing}>
                {/* <Link href="/" classHover="linkUnderline" isOnClick>Continue later</Link> */}
              </RepricingRequest>
            }
            {
              slug === NON_REPRICING && (
                <NonRepricingRequest ref={childRef} checkMatchOptionNonRepricing={checkMatchOptionNonRepricing} checkMatchOptionNonRepricingAndPricingInvestment={checkMatchOptionNonRepricingAndPricingInvestment}>
                  {/* <Link href="/" classHover="linkUnderline" isOnClick>Continue later</Link> */}
                </NonRepricingRequest>
              )
            }
            {
              slug === DATA_TABS_DDA_BORROWER_SINGPASS[1].id && (
                <ReviewJoinBorrower ref={childRef}>
                  {/* <Link href="/" classHover="linkUnderline" isOnClick>Continue later</Link> */}
                </ReviewJoinBorrower>
              )
            }
            {
              slug === REVIEW_SLUG && <ReviewSubmit ref={childRef} handleResetCallAPI={handleResetCallAPI}>
                {/* <Link href="/" classHover="linkUnderline" isOnClick>Continue later</Link> */}
              </ReviewSubmit>
            }
          </>
        )}
      />
      {/* section footer */}
      <Footer />
    </>
  )
}

export default ContainerSingPass;