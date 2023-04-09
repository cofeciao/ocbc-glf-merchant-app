// import modules
import { Category } from "@sectionsg/orc";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import BusinessInfomation from "./BusinessInfomation";
import WebsiteInformation from "./WebsiteInformation";
import OtherInformation from "./OtherInformation";
import OutletDetails from "./OutletDetails";
import RedirectButton from "../RedirectButton";
import { useForm } from "react-hook-form";

// import constants
import { URL_MANUAL_FLOW, STEP_RM, WELCOME_PATH } from "@/utils/constants-rm";

// import styles
import styles from "./BusinessOperation.scss";

// import types

const BusinessOperation: React.FC<any> = () => {
  const {
    LIST_STEP: {
      businessOperation: {
        text,
        section: {
          businessInformation,
          otherInfomation,
          websiteInfomation,
          outletDetails,
        },
      },
    },
  } = STEP_RM;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const history = useHistory();

  // react-hook-form
  const {
    register,
    formState: { errors, isValid, isDirty },
    control,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      items: [{ value: "url" }],
    },
  });

  /**
   * Handle scrolling to top on page load
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  /**
   * Retrieves data of step Transaction And Card Acceptance Type from Store
   * return: "point-of-sales" || "e-commerce" || "point-of-sales-e-commerce"
   */
  const optionSelected = useSelector((state: any) =>
    state.form.servicesAppliedStep.transactionAndCardAcceptanceTypeStep
      .map((item: any) => (item.checked === true ? item.value : ""))
      .filter((item: string) => item !== "")
      .join("-")
  );

  // render UI
  return (
    <Box className={cx("business-wrapper step-wrapper")}>
      {/* {Category} */}
      <Box className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </Box>

      {/* {Section Business Information} */}
      <SectionWrapper
        cx={cx}
        title={businessInformation.titleBusinessInformation}
      >
        <BusinessInfomation
          optionSelected={optionSelected}
          data={businessInformation}
          register={register}
          errors={errors}
        />
      </SectionWrapper>

      {/* {Section Website Information} */}
      <SectionWrapper cx={cx} title={websiteInfomation.titleWebsiteInfomation}>
        <WebsiteInformation
          data={websiteInfomation}
          register={register}
          errors={errors}
          control={control}
        />
      </SectionWrapper>

      {/* {Section Other Information} */}
      <SectionWrapper cx={cx} title={otherInfomation.titleOtherInformation}>
        <OtherInformation
          sections={otherInfomation.sections}
          labelDoesYourRetailStoreAccpetCardPayment={
            otherInfomation.labelDoesYourRetailStoreAccpetCardPayment
          }
        />
      </SectionWrapper>

      {/* {Section Outlet Details} */}
      {optionSelected !== "e-commerce" && (
        <SectionWrapper
          cx={cx}
          title={outletDetails.titleOutletDetail}
          description={outletDetails.description}
        >
          <OutletDetails listRadio={outletDetails.listRadio} />
        </SectionWrapper>
      )}

      {/* {Redirect Button} */}
      <RedirectButton
        // disabledNextButton={!isValid}
        continueLater
        backButton
        variant="next"
        onClickBack={() => {
          history.push(URL_MANUAL_FLOW.servicesApplied);
        }}
        onClickNext={() => {
          history.push(URL_MANUAL_FLOW.productsServices);
        }}
        onClickContinue={() => {
          history.push(WELCOME_PATH);
        }}
      />
    </Box>
  );
};
export default BusinessOperation;
