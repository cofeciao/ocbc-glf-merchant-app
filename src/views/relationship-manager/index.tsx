/***
 * CONTAINER MANUAL
 *    >> child
 *      >> header
 *      >> form layout
 *      >> footer
 */

// import modules
import { ACCOUNT_INFORMATION, DATA_LENGTH, DATA_NON_REPRICING, DATA_REPRICING, DATA_STATE_REPRICING_LENGTHENING, DATA_TABS_DDA_BORROWER_MANUAL_LENGTH_ONLY, DATA_TABS_DDA_BORROWER_MANUAL_LENGTH_REPRICING, DATA_TABS_DDA_BORROWER_SINGPASS, DATA_TABS_DDA_FULL_SELECTED, DATA_TABS_DDA_MANUAL_FULL_SELECTED, DATA_TABS_NON_REPRICING_MANUAL_SELECTED, DATA_TABS_NON_REPRICING_SELECTED, DATA_TABS_REPRICING_MANUAL_SELECTED, DATA_TABS_REPRICING_NO_LIST_DOCUMENT_MANUAL_SELECTED, DATA_TABS_REPRICING_SELECTED, DATA_TABS_REP_NON_REPRICING_MANUAL_SELECTED, DATA_TABS_REP_NON_REPRICING_SELECTED, ERROR_DETAIL_ADDRESS, LIST_REQUEST_REPRICING, MANUAL, NON_REPRICING, PERSONAL_INFORMATION, PROPERTY_INFORMATION, REPRICING_REQUEST, REPRICING_SLUG, REVIEW, REVIEW_SLUG, TITLE_PAGE, YES } from '@/utils/constants';

// import constant data
// import RepricingRequest from '@/views/repricing-request';
// import component lib
import {
  Footer, FormLayout, Header, Tabs
} from '@sectionsg/orc';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from 'react-router';

// import page
// import PersonalInformation from './personal-information';
// import NonRepricingRequest from '@/views/non-repricing-requests';
// import PropertyInformation from '../property-information';
// import AccountInformation from './account-information';
// import ReviewSubmit from './review-submit';
// import ReviewJoinBorrower from '@/views/manual/joint-borrower-review';
import _ from 'lodash';
import ContactInformation from './contact-information';

// render UI
const RelationshipManagerPage = () => {
  const { slug } = useParams();
  const history = useHistory();
  const childRef: any = useRef();
  const dispatch = useDispatch();
  const [addressDetail, setAddressDetail] = useState<any>();

  useEffect(() => {
    window.scrollTo(0, 0);
    // if (history.action === 'POP') {
    //   window.location.href = '/';
    // }
    // let trackingEvent = window.attachEvent || window.addEventListener
    // let chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'
    // trackingEvent(chkevent, adobeAbandon);
  }, [])

  /**
  * Retrieves data from Store
  */
  const formReduxData = useSelector((state: any) => state.form);

  /** 
  * Dynamic stepper - Singpass
  */
  const handleDetectDynamicStepper = () => {
    return DATA_TABS_NON_REPRICING_MANUAL_SELECTED
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

  return (
    <>
      {/* section header */}
      <Header
        namePage={TITLE_PAGE}
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
            {<ContactInformation />}

          </>
        )}
      />

      {/* section footer */}
      <Footer />
    </>
  )
}

export default RelationshipManagerPage;