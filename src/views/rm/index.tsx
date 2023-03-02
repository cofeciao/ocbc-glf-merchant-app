// import modules
import _ from 'lodash';
import { adobeAbandon } from '@/utils/adobeTracking';

// import component lib
import {
  Footer, FormLayout, Header, Tabs
} from '@sectionsg/orc';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from 'react-router';

// import constants
import { 
  CONTACT_INFORMATION, 
  DATA_TABS_NON_REPRICING_MANUAL_SELECTED, 
  SERVICES_APPLIED, TITLE_PAGE 
} from '@/utils/constants-rm';

// import page
import ContactInformation from './contact-information';
import ServicesApplied from './services-applied';

// render UI
const ContainerManual = () => {
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
    let trackingEvent = window.attachEvent || window.addEventListener
    let chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'
    trackingEvent(chkevent, adobeAbandon);
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
    console.log(path)
    if (childRef.current) {
      if (formReduxData.isBorrower) {
        if (childRef.current.validateForm()) {
          history.push(`/rm/borrower/${path}`);
        }
      } else {
        if (childRef.current.validateForm()) {
          history.push(`/rm/${path}`);
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
            {slug === CONTACT_INFORMATION && <ContactInformation ref={childRef} handleCallAPI={() => {}} />}
            {slug === SERVICES_APPLIED && <ServicesApplied ref={childRef} />}
          </>
        )}
      />

      {/* section footer */}
      <Footer />
    </>
  )
}

export default ContainerManual;