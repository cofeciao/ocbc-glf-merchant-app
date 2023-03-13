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
import { Container } from '@material-ui/core';
import classNames from 'classnames/bind';

// import constants
import { 
  BENEFICIAL_OWNERSHIP,
  BUSINESS_OPERATION,
  CONTACT_INFORMATION, 
  DATA_TABS_NON_REPRICING_MANUAL_SELECTED, 
  FEE_RATES, 
  PRODUCTS_SERVICES, 
  SENSITIVE_DATA, 
  SERVICES_APPLIED, 
  TITLE_PAGE 
} from '@/utils/constants-rm';

// styles
import styles from "./rm.scss"

// import pages
import ContactInformation from './contact-information';
import ServicesApplied from './services-applied';
import BusinessOperation from './business-operation';
import ProductionServices from './production-services';
import FeesRates from './fees-rates';
import Sensitive from './sensitive-data';
import BeneficialOwnership from './beneficial-ownership';

// render UI
const ContainerManual = () => {
  // hooks
  const { slug } = useParams();
  const history = useHistory();
  const childRef: any = useRef();
  const dispatch = useDispatch();

  // style
  const cx = classNames.bind(styles);

  // States
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
  console.log(slug)

  return (
    <>
      {/* section header */}
      <Header
        namePage={TITLE_PAGE}
      />

      {/* section form layout */}
      <Container className={cx("container")}>
        <section className={cx("rm-wrapper")}>
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
                {slug === BUSINESS_OPERATION && <BusinessOperation ref={childRef} />}
                {slug === PRODUCTS_SERVICES && <ProductionServices ref={childRef} />}
                {slug === FEE_RATES && <FeesRates ref={childRef} />}
                {slug === SENSITIVE_DATA && <Sensitive ref={childRef} />}
                {slug === BENEFICIAL_OWNERSHIP && <BeneficialOwnership ref={childRef} />}
              </>
            )}
          />
        </section>
      </Container>

      {/* section footer */}
      <Footer />
    </>
  )
}

export default ContainerManual;