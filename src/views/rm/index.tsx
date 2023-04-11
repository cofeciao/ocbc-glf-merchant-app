// import modules
import _ from 'lodash';
import { adobeAbandon } from '@/utils/adobeTracking';

// import component lib
import { FormLayout, Header, Tabs } from '@sectionsg/orc';
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from 'react-router';
import { Container } from '@material-ui/core';
import classNames from 'classnames/bind';
import Footer from "@/components/Footer";

// import constants
import {
  BENEFICIAL_OWNERSHIP,
  BUSINESS_OPERATION,
  COMPANY_CONTACT_INFORMATION,
  CONTACT_INFORMATION,
  DATA_TABS_NON_REPRICING_MANUAL_SELECTED,
  FEE_AUTHORISATION,
  FEE_RATES,
  PRODUCTS_SERVICES,
  REVIEW_SUBMIT,
  SENSITIVE_DATA,
  SERVICES_APPLIED,
  SUPPLEMENTARY_DOCUMENT,
  TITLE_PAGE
} from '@/utils/constants-rm';

// styles
import styles from "./rm.scss"

// import steps
import ContactInformation from './contact-information';
import ServicesApplied from './services-applied';
import BusinessOperation from './business-operation';
import ProductionServices from './products-and-services';
import FeesRates from './fees-rates';
import Sensitive from './sensitive-data';
import BeneficialOwnership from './beneficial-ownership';
import SupplementaryDocuments from './supplementary-documents';
import ReviewSubmit from './review-submit';
import FeeAuthorisation from './fee-authorisation';
import CompanyContactInformation from './company-contact-information';

// render UI
const ContainerManual = () => {
  // hooks
  const { slug } = useParams<{ slug: string }>();
  const history = useHistory();
  const childRef: any = useRef();
  const dispatch = useDispatch();

  // style
  const cx = classNames.bind(styles);

  // States

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
    history.push(`/rm/${path}`);
     console.log(path)
    // if (childRef.current) {
    //   if (formReduxData.isBorrower) {
    //     if (childRef.current.validateForm()) {
    //       history.push(`/rm/borrower/${path}`);
    //     }
    //   } else {
    //     if (childRef.current.validateForm()) {
    //       history.push(`/rm/${path}`);
    //     }
    //     childRef.current.handleNextPage();
    //   }
    // }
  };

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
                {slug === CONTACT_INFORMATION && <ContactInformation handleCallAPI={() => {}} />}
                {slug === COMPANY_CONTACT_INFORMATION && <CompanyContactInformation handleCallAPI={() => {}} />}
                {slug === SERVICES_APPLIED && <ServicesApplied  slug={slug} />}
                {slug === BUSINESS_OPERATION && <BusinessOperation  />}
                {slug === PRODUCTS_SERVICES && <ProductionServices />}
                {slug === SENSITIVE_DATA && <Sensitive ref={childRef} />}
                {slug === FEE_RATES && <FeesRates ref={childRef} />}
                {slug === FEE_AUTHORISATION && <FeeAuthorisation ref={childRef} />}
                {slug === BENEFICIAL_OWNERSHIP && <BeneficialOwnership ref={childRef} />}
                {slug === SUPPLEMENTARY_DOCUMENT && <SupplementaryDocuments ref={childRef} />}
                {slug === REVIEW_SUBMIT && <ReviewSubmit ref={childRef} />}
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