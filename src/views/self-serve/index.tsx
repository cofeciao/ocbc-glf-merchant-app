// import modules
import { Header, Footer, FormLayout, Tabs } from "@sectionsg/orc";
import React from "react";
import { useParams } from "react-router";
import { Container } from "@material-ui/core";
import classnames from "classnames/bind";
import CompanyAndContactInformation from "@/views/self-serve/company-and-contact-information";
import TransactionAndCardAcceptanceType from "./transaction-and-card-acceptance-type";
import BusinessDetails from "./business-details";
import ProductsAndServices from "./products-and-services";
import ReviewAndSubmit from "./review-and-submit";

// import constants
import {
  TITLE_PAGE,
  LINK_EXTERNAL_PAGE,
  NEXT,
  SELF_SERVE_PAGE,
} from "../../utils/constants";

// import style
import styles from "./SelfServe.scss";

// import types

// render UI
const SelfServe = () => {
  const cx = classnames.bind(styles);
  const { slug } = useParams<{ slug: string }>();

  /**
   * Dynamic stepper
   */
  const handleDetectDynamicStepper = () => {
    const dataListStep: any = [];
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
            tabs={
              <Tabs
                tabId={slug}
                dataTabs={handleDetectDynamicStepper()}
              />
            }
            content={
              <>
                {slug ===
                  SELF_SERVE_PAGE.LIST_STEP.company_and_contact_information
                    .id && <CompanyAndContactInformation />}
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
