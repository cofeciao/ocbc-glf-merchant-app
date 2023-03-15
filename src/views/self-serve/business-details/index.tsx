// import modules
import { Category, Button } from "@sectionsg/orc";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveDataBusinessDetailsStep,
  saveDataListWebsiteUrl,
} from "@/store/form";
import { Box } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import BusinessDetailsForm from "./BusinessDetailsForm";
import { useForm } from "react-hook-form";

// import constants
import {
  CONTINUE_LATER,
  LIST_ROUTER,
  NEXT,
  SELF_SERVE_PAGE,
} from "@/utils/constants";

// import style
import styles from "./BusinessDetails.scss";

// import types

//import icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

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
    watch,
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

  const watchAll = watch();
  // Temporarily Hidden
  console.log("watchAll", watchAll);
  console.log("businessDetailsStep", businessDetailsStep);

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

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        disabled={!isValid || !isDirty}
        onClick={() => {
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
        buttonType=""
      >
        <>
          {NEXT} <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
        </>
      </Button>
    );
  };

  console.log("optionSelected", optionSelected);

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
      <Box className={cx("button-wrapper", "d-flex justify-end mt-dt-40")}>
        <Button
          backgroundClass="square"
          onClick={() =>
            history.push(LIST_ROUTER.transaction_and_card_acceptance_type)
          }
        >
          <ArrowBackIcon className={cx("arrow")} />
        </Button>
        <Box>
          <Box className={cx("d-inline")}>
            <Link to="/">{CONTINUE_LATER}</Link>
          </Box>
          <Box className="ml-dt-30 d-inline">{renderButton()}</Box>
        </Box>
      </Box>
    </Box>
  );
};
export default BusinessDetails;
