// import modules
import React, { useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router";
import { Container } from "@material-ui/core";
import classnames from "classnames/bind";
import { Header, FormLayout, Tabs } from "@sectionsg/orc";
import CompanyAndContactInformation from "@/views/self-serve/company-and-contact-information";
import TransactionAndCardAcceptanceType from "@/views/self-serve/transaction-and-card-acceptance-type";
import BusinessDetails from "@/views/self-serve/business-details";
import ProductsAndServices from "@/views/self-serve/products-and-services";
import ReviewAndSubmit from "@/views/self-serve/review-and-submit";
import Footer from "@/components/Footer";
import { adobeAbandon } from "@/utils/adobeTracking";

// import constants
import {
  TITLE_PAGE,
  LINK_EXTERNAL_PAGE,
  SELF_SERVE_PAGE,
} from "../../utils/constants";

// import style
import styles from "@/views/self-serve/SelfServe.scss";

// import types
import { ISelfServe } from "./SelfServe";

// render UI
const SelfServe: React.FC = () => {
  const cx = classnames.bind(styles);
  const { slug } = useParams<{ slug: string }>();
  const { LIST_STEP } = SELF_SERVE_PAGE;
  const history = useHistory();

  /**
   * add event listener to handle page reload
   */
  useEffect(() => {
    // window.addEventListener("beforeunload", handleBeforeUnload);
    // return () => {
    //   window.removeEventListener("beforeunload", handleBeforeUnload);
    // };
  }, []);

  /**
   * Detect reload and show alert
   * @param event
   */
  const handleBeforeUnload = (event: any) => {
    event.preventDefault();
    event.returnValue = "";
  };

  /**
   * Detect reload page and start over
   */
  useEffect(() => {
    // window.scrollTo(0, 0);
    // if (history.action === "POP") {
    //   window.location.href = (process.env.myinfo as any).redirectUri;
    // }
    // let trackingEvent = (window as any).attachEvent || window.addEventListener;
    // let chkevent = (window as any).attachEvent
    //   ? "onbeforeunload"
    //   : "beforeunload";
    // trackingEvent(chkevent, adobeAbandon);
  }, []);

  /**
   * Dynamic stepper
   */
  const handleDetectDynamicStepper = () => {
    const dataListStep: ISelfServe.IDataStepper[] = [];
    Object.values(LIST_STEP).forEach((item) => {
      dataListStep.push(item.data);
    });
    console.log(dataListStep);
    return dataListStep;
  };

  // Render UI
  // if (history.action === "POP") {
  //   return <></>;
  // }

  /**
   * Handle click into on stepper
   * @param {string} path - Slug for page
   */
  const handleClick = (path: string) => {
    history.push(`/self/${path}`);
  };

  // Render UI
  return (
    <>
      {/* {Header} */}
      <Header
        namePage={TITLE_PAGE}
        backLink={{ name: TITLE_PAGE, href: LINK_EXTERNAL_PAGE }}
      />

      {/* {Content} */}
      <Container className={cx("container")}>
        <section className={cx("self-serve-wrapper")}>
          <FormLayout
            isMyInfo={true}
            tabs={
              <Tabs
                tabId={slug}
                dataTabs={handleDetectDynamicStepper()}
                handleClick={handleClick}
              />
            }
            content={
              <>
                {slug === LIST_STEP.companyAndContactInformation.id && (
                  <CompanyAndContactInformation />
                )}
                {slug === LIST_STEP.transactionAndCardAcceptanceType.id && (
                  <TransactionAndCardAcceptanceType />
                )}
                {slug === LIST_STEP.businessDetails.id && <BusinessDetails />}
                {slug === LIST_STEP.productsAndService.id && (
                  <ProductsAndServices />
                )}
                {slug === LIST_STEP.reviewAndSubmit.id && <ReviewAndSubmit />}
              </>
            }
          />
        </section>
      </Container>

      {/* {Footer} */}
      <Footer />
    </>
  );
};
export default SelfServe;
