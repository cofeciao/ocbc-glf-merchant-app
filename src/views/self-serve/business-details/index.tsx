// import modules
import { Category } from "@sectionsg/orc";
import React from "react";
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

const BusinessDetails: React.FC<any> = () => {
  const {
    LIST_STEP: {
      businessDetails: {
        text,
        forms: { sections },
      },
    },
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const history = useHistory();

  /**
   * Retrieves data of Business Details step from Store
   */
  const businessDetailsStep = useSelector(
    (state: any) => state.form.businessDetailsStep
  );

  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
    setValue,
    unregister,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      yourWebsiteURL0: "",
      yourWebsiteURL1: "",
      yourWebsiteURL2: "",
      businessReadyToOperate: "Yes",
      businessAccount: "Yes",
      existingWebsite: "Yes",
      placeOrderThroughWebsite: "Yes",
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
    <Box
      className={cx(
        "transaction-and-card-acceptance-type-wrapper step-wrapper"
      )}
    >
      {/* {Category} */}
      <Box className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </Box>

      {/* {Form with dynamic data} */}
      <BusinessDetailsForm
        cx={cx}
        optionSelected={optionSelected}
        data={sections}
        dataRedux={businessDetailsStep}
        register={register}
        unregister={unregister}
        errors={errors}
        setValue={setValue}
      />

      {/* {Next Button}  */}
      <RedirectButton
        disabledNextButton={!isValid || !isDirty}
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
};
export default BusinessDetails;
