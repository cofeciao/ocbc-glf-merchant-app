// import modules
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Container } from "@material-ui/core";
import classnames from "classnames/bind";
import { Header, FormLayout, Tabs } from "@sectionsg/orc";
import CompanyAndContactInformation from "@/views/self-serve/company-and-contact-information";
import TransactionAndCardAcceptanceType from "@/views/self-serve/transaction-and-card-acceptance-type";
import BusinessDetails from "@/views/self-serve/business-details";
import ProductsAndServices from "@/views/self-serve/products-and-services";
import ReviewAndSubmit from "@/views/self-serve/review-and-submit";
import Footer from "@/components/Footer";
import _ from "lodash";

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
  const { LIST_STEP } = SELF_SERVE_PAGE;

  // hooks
  const history = useHistory();
  const location = useLocation();
  const currentLocation = location.pathname.replace("self/", "");
  const pathStep = currentLocation
    .split("/")
    .filter((item: string) => !_.isEmpty(item))[0];

  /**
   * Add event listener to handle reload or leave page
   */
  useEffect(() => {
    window.scrollTo(0, 0);
    window.onload = function () {
      window.addEventListener("beforeunload", handleBeforeUnload);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    if (history.action === "POP") {
      window.location.href = (process.env.myinfo as any).redirectUri;
    }
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  /**
   * Handle before unload
   * @param event
   */
  const handleBeforeUnload = (event: any) => {
    event.preventDefault();
    event.returnValue = "";
  };

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
                tabId={pathStep}
                dataTabs={handleDetectDynamicStepper()}
                handleClick={handleClick}
              />
            }
            content={
              <>
                {/* {CompanyAndContactInformation} */}
                {pathStep === LIST_STEP.companyAndContactInformation.id && (
                  <CompanyAndContactInformation />
                )}

                {/* {TransactionAndCardAcceptanceType} */}
                {pathStep === LIST_STEP.transactionAndCardAcceptanceType.id && (
                  <TransactionAndCardAcceptanceType />
                )}

                {/* {BusinessDetails} */}
                {pathStep === LIST_STEP.businessDetails.id && (
                  <BusinessDetails />
                )}

                {/* {ProductsAndServices} */}
                {pathStep === LIST_STEP.productsAndService.id && (
                  <ProductsAndServices />
                )}

                {/* {ReviewAndSubmit} */}
                {pathStep === LIST_STEP.reviewAndSubmit.id && (
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
