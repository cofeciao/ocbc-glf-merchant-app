// import modules
import { Category } from "@sectionsg/orc";
import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveDataBusinessDetailsStep,
  saveDataListWebsiteUrl,
} from "@/store/form";
import { Box } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import RedirectButton from "@/views/self-serve/RedirectButton";
import BusinessDetailsForm from "./BusinessDetailsForm";
import { useForm } from "react-hook-form";

// import constants
import { LIST_ROUTER, SELF_SERVE_PAGE } from "@/utils/constants";

// import style
import styles from "./BusinessDetails.scss";

// import types

const BusinessDetails: React.FC<any> = forwardRef(({}, ref) => {
  const {
    LIST_STEP: {
      businessDetails: {
        text,
        forms: { sections },
      },
    },
    LIST_RADIO_YES_NO,
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const history = useHistory();

  /**
   * Handle scrolling to top on page load
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  /**
   * Retrieves data of Business Details step from Store
   */
  const businessDetailsStep = useSelector(
    (state: any) => state.form.businessDetailsStep
  );

  /**
   * Retrieves data of Business Details step from Store
   */
  const listWebsiteUrl = useSelector((state: any) => state.form.listWebsiteUrl);

  /**
   * handle back to page when click on stepper
   */
  useImperativeHandle(ref, () => ({
    validateForm() {
      return true
      // if (acraAndContactInformationStep) {
      //   if (_.isEmpty(acraAndContactInformationStep)) {
      //     return true;
      //   }
      //   return handleNext();
      // }
      // return true;
    },
  }));

  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
    setValue,
    unregister,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      yourWebsiteURL0: listWebsiteUrl[0],
      yourWebsiteURL1: listWebsiteUrl[1],
      yourWebsiteURL2: listWebsiteUrl[2],
      businessReadyToOperate: LIST_RADIO_YES_NO[0].text,
      businessAccount: LIST_RADIO_YES_NO[0].text,
      existingWebsite: LIST_RADIO_YES_NO[0].text,
      placeOrderThroughWebsite: LIST_RADIO_YES_NO[0].text,
    },
  });

  /**
   * Retrieves data of step Transaction And Card Acceptance Type from Store
   * return: "point-of-sales" || "e-commerce" || "point-of-sales-e-commerce"
   */
  const optionSelected = useSelector((state: any) =>
    state.form.transactionAndCardAcceptanceTypeStep
      .map((item: any) => (item.checked === true ? item.value : ""))
      .filter((item: string) => item !== "")
      .join("-")
  );

  // render UI
  return (
    <Box className={cx("business-details-wrapper step-wrapper")}>
      {/* {Category} */}
      <Box className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </Box>

      {/* {Form} */}
      <BusinessDetailsForm
        cx={cx}
        optionSelected={optionSelected}
        data={sections}
        dataRedux={businessDetailsStep}
        register={register}
        unregister={unregister}
        errors={errors}
        setValue={setValue}
        listWebsiteRedux={listWebsiteUrl}
      />

      {/* {Next Button}  */}
      <RedirectButton
        disabledNextButton={!isValid}
        continueLater
        backButton
        variant="next"
        onClickBack={() => {
          history.push(LIST_ROUTER.transaction_and_card_acceptance_type);
        }}
        onClickNext={() => {
          history.push(LIST_ROUTER.products_and_services);
          dispatch(saveDataBusinessDetailsStep(getValues()));
          dispatch(
            saveDataListWebsiteUrl(
              getValues([
                "yourWebsiteURL0",
                "yourWebsiteURL1",
                "yourWebsiteURL2",
              ])
            )
          );
        }}
      />
    </Box>
  );
});
export default BusinessDetails;
