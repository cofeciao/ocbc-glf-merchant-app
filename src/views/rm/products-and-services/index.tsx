// import modules
import { Category } from "@sectionsg/orc";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import RedirectButton from "@/views/rm/RedirectButton";
import PointOfSalesForm from "./PointOfSalesForm";
import _ from "lodash";
import EcommerceForm from "./EcommerceForm";
import { useForm } from "react-hook-form";

// store
import {
  saveDataProductsAndServicesEcomRM,
  saveDataProductsAndServicesPosRM,
} from "@/store/form";

// import constants
import { STEP_RM, URL_MANUAL_FLOW } from "@/utils/constants-rm";

// import style
import styles from "./ProductsAndServices.scss";

// render UI
const ProductsAndServices: React.FC = () => {
  // props
  const {
    LIST_STEP: {
      productAndService: { text, pointOfSalesForm, ecommerceForm },
    },
  } = STEP_RM;

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
        orderFulfilment:
          dataProductsAndServices.pointOfSales.orderFulfilment ||
          pointOfSalesForm.fulfilmentInformation.listRadio.list[0].label,
        averageAmountPerCreditCardTransaction:
          dataProductsAndServices.pointOfSales
            .averageAmountPerCreditCardTransaction || "",
        annualCreditCardSalesForecast:
          dataProductsAndServices.pointOfSales.annualCreditCardSalesForecast ||
          "",
      },
      Ecom: {
        orderFulfilment:
          dataProductsAndServices.eCommerce.orderFulfilment ||
          pointOfSalesForm.fulfilmentInformation.listRadio.list[0].label,
        averageAmountPerCreditCardTransaction:
          dataProductsAndServices.eCommerce
            .averageAmountPerCreditCardTransaction || "",
        annualCreditCardSalesForecast:
          dataProductsAndServices.eCommerce.annualCreditCardSalesForecast ||
          "",
        refundPolicy: dataProductsAndServices.eCommerce.refundPolicy,
        uploadPolicy: dataProductsAndServices.eCommerce.uploadPolicy,
      },
    },
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

  return (
    <Box className={cx("products-and-services-wrapper step-wrapper")}>
      {/* {Category} */}
      <Box className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </Box>

      {/* {Dynamic main Form} */}
      {_.isEqual(optionSelected, "point-of-sales") ? (
        <PointOfSalesForm
          cx={cx}
          variant="point-of-sales"
          data={pointOfSalesForm}
          optionSelected={optionSelected}
          dataRedux={dataProductsAndServices.pointOfSales}
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
          dataRedux={dataProductsAndServices.eCommerce}
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
            title={pointOfSalesForm.title}
            variant="point-of-sales"
            optionSelected={optionSelected}
            data={pointOfSalesForm}
            dataRedux={dataProductsAndServices.pointOfSales}
            register={register}
            unregister={unregister}
            setValue={setValue}
            errors={errors}
          />
          <EcommerceForm
            cx={cx}
            title={ecommerceForm.title}
            optionSelected={optionSelected}
            variant="e-commerce"
            data={ecommerceForm}
            dataRedux={dataProductsAndServices.eCommerce}
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

      {/* {Next Button}  */}
      <RedirectButton
        // disabledNextButton={!isValid}
        continueLater
        backButton
        variant="next"
        onClickBack={() => {
          history.push(URL_MANUAL_FLOW.businessOperation);
        }}
        onClickNext={() => {
          history.push(URL_MANUAL_FLOW.sensitiveData);
          dispatch(saveDataProductsAndServicesEcomRM(getValues("Ecom")));
          dispatch(saveDataProductsAndServicesPosRM(getValues("POS")));
        }}
      />
    </Box>
  );
};
export default ProductsAndServices;
