// import modules
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import { useForm } from "react-hook-form";
import {
  saveDataProductsAndServicesEcom,
  saveDataProductsAndServicesPOS,
} from "@/store/form";

// import components
import { Box } from "@material-ui/core";
import RedirectButton from "@/components/RedirectButton";
import PointOfSalesForm from "./PointOfSalesForm";
import EcommerceForm from "./EcommerceForm";
import Category from "@/components/Category";

// import constants
import { LIST_ROUTER, SELF_SERVE_PAGE } from "@/utils/constants";

// import style
import styles from "./ProductsAndServices.scss";

// render UI
const ProductsAndServices: React.FC = () => {
  // props
  const {
    LABEL_E_COMMERCE,
    LABEL_POINT_OF_SALES_TERMINAL,
    LIST_STEP: {
      productsAndService: { text, pointOfSalesForm, ecommerceForm },
    },
  } = SELF_SERVE_PAGE;

  // classnames
  const cx = classnames.bind(styles);

  // hooks
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
   * Retrieves data of Products And Services step from Store
   */
  const productsAndServicesStep = useSelector(
    (state: any) => state.form.productsAndServicesStep
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
        orderFulfilment:
          productsAndServicesStep.pointOfSales.orderFulfilment ||
          pointOfSalesForm.fulfilmentInformation.listRadio.list[0].label,
        averageAmountPerCreditCardTransaction:
          productsAndServicesStep.pointOfSales
            .averageAmountPerCreditCardTransaction || "",
        annualCreditCardSalesForecast:
          productsAndServicesStep.pointOfSales.annualCreditCardSalesForecast ||
          "",
      },
      Ecom: {},
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

  return (
    <Box className={cx("products-and-services-wrapper step-wrapper")}>
      {/* {Category} */}
      <Category>{text}</Category>

      {/* {Dynamic main Form} */}
      {_.isEqual(optionSelected, "point-of-sales") ? (
        <PointOfSalesForm
          cx={cx}
          variant="point-of-sales"
          data={pointOfSalesForm}
          optionSelected={optionSelected}
          dataRedux={productsAndServicesStep.pointOfSales}
          register={register}
          unregister={unregister}
          setValue={setValue}
          errors={errors}
        />
      ) : _.isEqual(optionSelected, "e-commerce") ? (
        <EcommerceForm
          cx={cx}
          variant="e-commerce"
          optionSelected={optionSelected}
          data={ecommerceForm}
          dataRedux={productsAndServicesStep.eCommerce}
          register={register}
          unregister={unregister}
          setValue={setValue}
          setError={setError}
          clearErrors={clearErrors}
          errors={errors}
          control={control}
        />
      ) : (
        <Box>
          <PointOfSalesForm
            cx={cx}
            title={LABEL_POINT_OF_SALES_TERMINAL}
            variant="point-of-sales"
            optionSelected={optionSelected}
            data={pointOfSalesForm}
            dataRedux={productsAndServicesStep.pointOfSales}
            register={register}
            unregister={unregister}
            setValue={setValue}
            errors={errors}
          />
          <EcommerceForm
            cx={cx}
            title={LABEL_E_COMMERCE}
            optionSelected={optionSelected}
            variant="e-commerce"
            data={ecommerceForm}
            dataRedux={productsAndServicesStep.eCommerce}
            register={register}
            unregister={unregister}
            setValue={setValue}
            errors={errors}
            setError={setError}
            clearErrors={clearErrors}
            control={control}
          />
        </Box>
      )}

      {/* {Redirect Button}  */}
      <RedirectButton
        disabledNextButton={!isValid}
        continueLater
        backButton
        variant="next"
        onClickBack={() => {
          history.push(LIST_ROUTER.business_details);
        }}
        onClickNext={() => {
          // redirect
          history.push(LIST_ROUTER.review_and_submit);

          // save to Redux
          dispatch(saveDataProductsAndServicesEcom(getValues("Ecom")));
          dispatch(saveDataProductsAndServicesPOS(getValues("POS")));
        }}
      />
    </Box>
  );
};
export default ProductsAndServices;
