// import modules
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Container } from "@material-ui/core";
import classnames from "classnames/bind";
import { Header, Footer, FormLayout, Tabs } from "@sectionsg/orc";
import CompanyAndContactInformation from "@/views/self-serve/company-and-contact-information";
import TransactionAndCardAcceptanceType from "@/views/self-serve/transaction-and-card-acceptance-type";
import BusinessDetails from "@/views/self-serve/business-details";
import ProductsAndServices from "@/views/self-serve/products-and-services";
import ReviewAndSubmit from "@/views/self-serve/review-and-submit";

// import constants
import {
  TITLE_PAGE,
  LINK_EXTERNAL_PAGE,
  SELF_SERVE_PAGE,
} from "../../utils/constants";

// import style
import styles from "@/views/self-serve/SelfServe.scss";
import { adobeAbandon } from "@/utils/adobeTracking";

// import types
import { ISelfServe } from "./SelfServe";

// render UI
const SelfServe: React.FC = () => {
  const cx = classnames.bind(styles);
  const { slug } = useParams<{ slug: string }>();
  const history = useHistory();

  /**
   * add event listener to handle page reload
   */
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
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
   * Detect reload and redirect to "/"
   */
  useEffect(() => {
    window.scrollTo(0, 0);
    if (history.action === "POP") {
      window.location.href = "/";
    }
    let trackingEvent = (window as any).attachEvent || window.addEventListener;
    let chkevent = (window as any).attachEvent
      ? "onbeforeunload"
      : "beforeunload";
    trackingEvent(chkevent, adobeAbandon);
  }, []);

  /**
   * Dynamic stepper
   */
  const handleDetectDynamicStepper = () => {
    const dataListStep: ISelfServe.IDataStepper[] = [];
    Object.values(SELF_SERVE_PAGE.LIST_STEP).forEach((item) => {
      dataListStep.push(item.data);
    });
    return dataListStep;
  };

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
            tabs={<Tabs tabId={slug} dataTabs={handleDetectDynamicStepper()} />}
            content={
              <>
                {slug ===
                  SELF_SERVE_PAGE.LIST_STEP.companyAndContactInformation.id && (
                  <CompanyAndContactInformation />
                )}
                {slug ===
                  SELF_SERVE_PAGE.LIST_STEP.transaction_and_card_acceptance_type
                    .id && <TransactionAndCardAcceptanceType />}
                {slug === SELF_SERVE_PAGE.LIST_STEP.business_details.id && (
                  <BusinessDetails />
                )}
                {slug === SELF_SERVE_PAGE.LIST_STEP.products_and_service.id && (
                  <ProductsAndServices />
                )}
                {slug === SELF_SERVE_PAGE.LIST_STEP.review_and_submit.id && (
                  <ReviewAndSubmit />
                )}
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
