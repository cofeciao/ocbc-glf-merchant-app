// import modules
import { Header, Footer, FormLayout, Tabs } from "@sectionsg/orc";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Container } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import { formatNameField, preventSpecialCharacters } from "@/utils/utils";
import CompanyAndContactInformation from "@/views/self-serve/company-and-contact-information";
import TransactionAndCardAcceptanceType from "./transaction-and-card-acceptance-type";
import BusinessDetails from "./business-details";

// import constants
import {
  TITLE_PAGE,
  LINK_EXTERNAL_PAGE,
  NEXT,
  SELF_SERVE_PAGE,
} from "../../utils/constants";

// import style
import styles from "./SelfServe.scss";
import ProductsAndServices from "./products-and-services";
import ReviewAndSubmit from "./review-and-submit";

// import types

// render UI
const SelfServe = (props: any) => {
  const {} = props;
  // const [listRadio, setListRadio] = useState(LIST_RADIO);
  const cx = classnames.bind(styles);
  const [key, setKey] = useState<number>(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const [agree, setAgree] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const { slug } = useParams<{ slug: string }>();
  const childRef: any = useRef();

  /**
   * Dynamic stepper
   */
  const handleDetectDynamicStepper = () => {
    const dataListStep: any = [];
    Object.values(SELF_SERVE_PAGE.list_step).forEach((item) => {
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
                  SELF_SERVE_PAGE.list_step.company_and_contact_information
                    .id && <CompanyAndContactInformation />}
                {slug ===
                  SELF_SERVE_PAGE.list_step.transaction_and_card_acceptance_type
                    .id && <TransactionAndCardAcceptanceType />}
                {slug === SELF_SERVE_PAGE.list_step.business_details.id && (
                  <BusinessDetails />
                )}
                {slug === SELF_SERVE_PAGE.list_step.products_and_service.id && (
                  <ProductsAndServices />
                )}
                {slug === SELF_SERVE_PAGE.list_step.review_and_submit.id && (
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
