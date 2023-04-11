// import modules
import { Category } from "@sectionsg/orc";
import React, { useEffect, useState } from "react";
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
import { saveDataBusinessOperationDetails } from "@/store/form";
import _ from "lodash";

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

  // state
  const [dataForm, setDataForm] = useState<any>({
    inputFields: outletDetails.inputFields,
    listRadioOutlet: outletDetails.listRadioOutlet,
    inputFieldsIndicateBank: outletDetails.inputFieldsIndicateBank,
  });

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

  /**
   * Retrieves data of step Business Operation Details from Store
   */
  const dataBusinessOperationDetails = useSelector(
    (state: any) => state.form.businessOperationDetails
  );

  // react-hook-form
  const {
    register,
    unregister,
    formState: { errors, isValid, isDirty },
    control,
    getValues,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      websites: (_.has(dataBusinessOperationDetails, "websites") &&
        _.map(dataBusinessOperationDetails.websites, (item: any) => {
          return {
            web: item.web,
          };
        })) || [{ web: "" }],
      outlets: (_.has(dataBusinessOperationDetails, "outlets") &&
        _.map(dataBusinessOperationDetails.outlets, (item: any) => {
          return {
            businessName: item.businessName,
            blockNumber: item.blockNumber,
            streetName: item.streetName,
            unitNumber: item.unitNumber,
            buildingName: item.buildingName,
            postalCode: item.postalCode,
          };
        })) || [
        {
          businessName: "",
          blockNumber: "",
          streetName: "",
          unitNumber: "",
          buildingName: "",
          postalCode: "",
        },
      ],
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
          unregister={unregister}
          dataRedux={dataBusinessOperationDetails}
          setValue={setValue}
          errors={errors}
          setError={setError}
          clearErrors={clearErrors}
        />
      </SectionWrapper>

      {/* {Section Website Information} */}
      <SectionWrapper cx={cx} title={websiteInfomation.titleWebsiteInfomation}>
        <WebsiteInformation
          data={websiteInfomation}
          register={register}
          unregister={unregister}
          setValue={setValue}
          dataRedux={dataBusinessOperationDetails}
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
          dataRedux={dataBusinessOperationDetails}
          register={register}
          setValue={setValue}
          control={control}
        />
      </SectionWrapper>

      {/* {Section Outlet Details} */}
      {optionSelected !== "e-commerce" && (
        <SectionWrapper
          cx={cx}
          title={outletDetails.titleOutletDetail}
          description={outletDetails.description}
        >
          <OutletDetails
            listRadio={outletDetails.listRadio}
            control={control}
            register={register}
            unregister={unregister}
            setError={setError}
            setValue={setValue}
            errors={errors}
            handleSubmit={handleSubmit}
            dataForm={dataForm}
            setDataForm={setDataForm}
            dataRedux={dataBusinessOperationDetails}
          />
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
          dispatch(saveDataBusinessOperationDetails(getValues()));
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
