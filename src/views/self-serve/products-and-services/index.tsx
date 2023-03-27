// import modules
import { Category } from "@sectionsg/orc";
import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import RedirectButton from "@/views/self-serve/RedirectButton";
import PointOfSalesForm from "./PointOfSalesForm";
import _ from "lodash";
import EcommerceForm from "./EcommerceForm";
import { useForm } from "react-hook-form";
import {
  saveDataProductsAndServicesEcom,
  saveDataProductsAndServicesPOS,
} from "@/store/form";

// import constants
import { LIST_ROUTER, SELF_SERVE_PAGE } from "@/utils/constants";

// import style
import styles from "./ProductsAndServices.scss";

// import types

// render UI
const ProductsAndServices: React.FC<any> = forwardRef(({}, ref) => {
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

  const {
    register,
    unregister,
    formState: { errors, isValid, isDirty },
    getValues,
    setValue,
    watch,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      POS: {
        orderFulfilment:
          productsAndServicesStep.pointOfSales.orderFulfilment ||
          pointOfSalesForm.fulfilmentInformation.listRadio.list[0].label,
        typeOfProductAndService:
          productsAndServicesStep.pointOfSales.typeOfProductAndService || "",
        averageAmountPerCreditCardTransaction:
          productsAndServicesStep.pointOfSales
            .averageAmountPerCreditCardTransaction || "",
        annualCreditCardSalesForecast:
          productsAndServicesStep.pointOfSales.annualCreditCardSalesForecast ||
          "",
        deliveryTimeToCustomers:
          productsAndServicesStep.pointOfSales.deliveryTimeToCustomers,
        percentageOfProductsNotFulfilledImmediately:
          productsAndServicesStep.pointOfSales
            .percentageOfProductsNotFulfilledImmediately,
      },
      Ecom: {
        orderFulfilment:
          productsAndServicesStep.eCommerce.orderFulfilment ||
          ecommerceForm.fulfilmentInformation.listRadio.list[0].label,
        productDelivery:
          productsAndServicesStep.eCommerce.productDelivery ||
          ecommerceForm.fulfilmentInformation.listRadioSecondary.list[0].option,
        typeOfProductAndService:
          productsAndServicesStep.eCommerce.typeOfProductAndService || "",
        deliveryTimeToCustomers:
          productsAndServicesStep.eCommerce.deliveryTimeToCustomers || "",
        averageAmountPerCreditCardTransaction:
          productsAndServicesStep.eCommerce
            .averageAmountPerCreditCardTransaction || "",
        annualCreditCardSalesForecast:
          productsAndServicesStep.eCommerce.annualCreditCardSalesForecast || "",
        productDeliveredFrom:
          productsAndServicesStep.eCommerce.productDeliveredFrom || "",
        percentageOfProductsNotFulfilledImmediately:
          productsAndServicesStep.eCommerce
            .percentageOfProductsNotFulfilledImmediately,
      },
    },
  });

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
          errors={errors}
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
          />
        </Box>
      )}

      {/* {Next Button}  */}
      <RedirectButton
        disabledNextButton={!isValid}
        continueLater
        backButton
        variant="next"
        onClickBack={() => {
          history.push(LIST_ROUTER.business_details);
        }}
        onClickNext={() => {
          history.push(LIST_ROUTER.review_and_submit);
          dispatch(saveDataProductsAndServicesEcom(getValues("Ecom")));
          dispatch(saveDataProductsAndServicesPOS(getValues("POS")));
        }}
      />
    </Box>
  );
});
export default ProductsAndServices;
