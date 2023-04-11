// import modules
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Loading, Category } from "@sectionsg/orc";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import SectionWrapper from "../SectionWrapper";
import BusinessInformation from "./BusinessOffering";
import RefundPolicy from "./RefundPolicy";
import SalesForecast from "./SalesForecast";
import FulfilmentInformation from "./FulfilmentInformation";
import RedirectButton from "../RedirectButton";
import { useSelector } from "react-redux";
import { saveDataProductsAndServices } from "@/store/form";

// import styles
import styles from "./ProductionServices.scss";

// import constants
import { URL_MANUAL_FLOW, STEP_RM, WELCOME_PATH } from "@/utils/constants-rm";

//import types
import { IProductionServices } from "./ProductionServices";

// render UI
const ProductionServices: React.FC<IProductionServices.IProps> = () => {
  const {
    LIST_RADIO_FULFILMENT_INFORMATION,
    LIST_STEP: {
      productAndService: {
        title,
        section: {
          businessOffering,
          fulfilmentInformation,
          salesForecast,
          refundPolicy,
        },
      },
    },
  } = STEP_RM;

  // classnames
  const cx = classNames.bind(styles);

  // hooks
  const history = useHistory();
  const dispatch = useDispatch();

  // states
  const [loading, setLoading] = useState(false);
  const [paramsBusinessService, setParamsBusinessService] = useState<any>({
    quicklyBussiness: LIST_RADIO_FULFILMENT_INFORMATION[0].value,
    averageAmount: "",
    annualCredit: "",
    refundpolicy: "",
    indicateDuration: "",
    percentage: "",
    uploadPolicy: "",
    image: "",
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
   * Retrieves data of step Business Operation Details from Store
   */
  const dataProductsAndServices = useSelector(
    (state: any) => state.form.productsAndServices
  );

  // React-hook-form
  const {
    register,
    unregister,
    formState: { errors, isValid },
    getValues,
    setValue,
    setError,
    clearErrors,
    control,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      POS: {
        // orderFulfilment:
        //   productsAndServicesStep.pointOfSales.orderFulfilment ||
        //   pointOfSalesForm.fulfilmentInformation.listRadio.list[0].label,
        // averageAmountPerCreditCardTransaction:
        //   productsAndServicesStep.pointOfSales
        //     .averageAmountPerCreditCardTransaction || "",
        // annualCreditCardSalesForecast:
        //   productsAndServicesStep.pointOfSales.annualCreditCardSalesForecast ||
        //   "",
      },
      Ecom: {},
    },
  });

  return (
    <React.Fragment>
      {loading && (
        <div className={cx("container-loading")}>
          <div className={cx("content-loading")}>
            <Loading />
          </div>
        </div>
      )}

      <Box className={cx("business-services")}>
        <Box className="business-services-category">
          <Category class="title">{title}</Category>
        </Box>

        {/* {Business Information} */}
        <SectionWrapper cx={cx} title={businessOffering.label}>
          <BusinessInformation
            cx={cx}
            paramsBusinessService={paramsBusinessService}
            setParamsBusinessService={setParamsBusinessService}
            register={register}
            errors={errors}
          />
        </SectionWrapper>

        {/* {Fulfilment Information} */}
        <SectionWrapper cx={cx} title={fulfilmentInformation.title}>
          <FulfilmentInformation
            cx={cx}
            paramsBusinessService={paramsBusinessService}
            setParamsBusinessService={setParamsBusinessService}
            register={register}
            errors={errors}
          />
        </SectionWrapper>

        {/* {Sales Forecast} */}
        <SectionWrapper cx={cx} title={salesForecast.title}>
          <SalesForecast
            cx={cx}
            register={register}
            unregister={unregister}
            getValues={getValues}
            setValue={setValue}
            setError={setError}
            clearErrors={clearErrors}
          />
        </SectionWrapper>

        {/* {Refund Policy} */}
        <SectionWrapper cx={cx} title={refundPolicy.title}>
          <RefundPolicy
            cx={cx}
            paramsBusinessService={paramsBusinessService}
            setParamsBusinessService={setParamsBusinessService}
          />
        </SectionWrapper>

        {/* {Redirect Button} */}
        <RedirectButton
          // disabledNextButton={!isValid}
          continueLater
          backButton
          variant="next"
          onClickBack={() => {
            history.push(URL_MANUAL_FLOW.businessOperation);
          }}
          onClickNext={() => {
            dispatch(saveDataProductsAndServices(getValues()));
            history.push(URL_MANUAL_FLOW.sensitiveData);
          }}
          onClickContinue={() => {
            history.push(WELCOME_PATH);
          }}
        />
      </Box>
    </React.Fragment>
  );
};

export default ProductionServices;
