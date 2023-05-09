// import modules
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import classnames from "classnames/bind";
import _ from "lodash";

// import components
import CompanyAndContactInformation from "@/views/self-serve/company-and-contact-information";
import TransactionAndCardAcceptanceType from "@/views/self-serve/transaction-and-card-acceptance-type";
import BusinessDetails from "@/views/self-serve/business-details";
import ProductsAndServices from "@/views/self-serve/products-and-services";
import ReviewAndSubmit from "@/views/self-serve/review-and-submit";
import Footer from "@/components/Footer";
import Stepper from "@/components/Stepper";
import { Container } from "@material-ui/core";
import Header from "@/components/Header";

// import constants
import {
  TITLE_PAGE,
  LINK_EXTERNAL_PAGE,
  SELF_SERVE_PAGE,
} from "../../utils/constants";

// import style
import styles from "@/views/self-serve/SelfServe.scss";
import { useHistory } from "react-router-dom";

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
    const handleBeforeUnload = (event: any) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.scrollTo(0, 0);
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  /**
   * Get all step data
   * @returns
   */
  const getSteps = () => {
    const dataListStep: any = [];
    Object.values(LIST_STEP).forEach((item) => {
      dataListStep.push(item.data);
    });
    return dataListStep;
  };

  /**
   * Content's steps
   * @returns
   */
  const getStepContent = () => {
    switch (pathStep) {
      case LIST_STEP.companyAndContactInformation.id:
        return <CompanyAndContactInformation />;
      case LIST_STEP.transactionAndCardAcceptanceType.id:
        return <TransactionAndCardAcceptanceType />;
      case LIST_STEP.businessDetails.id:
        return <BusinessDetails />;
      case LIST_STEP.productsAndService.id:
        return <ProductsAndServices />;
      case LIST_STEP.reviewAndSubmit.id:
        return <ReviewAndSubmit />;
      default:
        return <></>;
    }
  };

  // Prevent user input URL
  if (history.action === "POP") {
    window.location.href = (process.env.myinfo as any).redirectUri;
    return <></>
  }

  // Render UI
  return (
    <>
      {/* {Header} */}
      <Header title={TITLE_PAGE} logoHref={LINK_EXTERNAL_PAGE} />

      {/* {Stepper} */}
      <Container className={cx("container")}>
        <section className={cx("self-serve-wrapper")}>
          <Stepper
            getStepContent={getStepContent}
            getSteps={getSteps}
            pathStep={pathStep}
          />
        </section>
      </Container>

      {/* {Footer} */}
      <Footer />
    </>
  );
};
export default SelfServe;
