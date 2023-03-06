// import modules
import { Category, Button } from "@sectionsg/orc";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import PointOfSalesForm from "./PointOfSalesForm";
import { Link } from "react-router-dom";
import _ from "lodash";
import EcommerceForm from "./EcommerceForm";
import { useForm } from "react-hook-form";
import {
  saveDataProductsAndServicesEcom,
  saveDataProductsAndServicesPOS,
} from "@/store/form";

// import constants
import {
  CONTINUE_LATER,
  LIST_ROUTER,
  NEXT,
  SELF_SERVE_PAGE,
} from "@/utils/constants";

// import style
import styles from "./ProductsAndServices.scss";

// import types

//import icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// render UI
const ProductsAndServices: React.FC<any> = () => {
  const {
    LABEL_E_COMMERCE,
    LABEL_POINT_OF_SALES_TERMINAL,
    LIST_STEP: {
      products_and_service: { text, pointOfSalesForm, ecommerceForm },
    },
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const history = useHistory();

  /**
   * Retrieves data of Products And Services step from Store
   */
  const productsAndServicesStep = useSelector(
    (state: any) => state.form.productsAndServicesStep
  );

  const {
    register,
    formState: { errors, isValid, isDirty },
    getValues,
    setValue,
    watch,
  } = useForm({
    mode: "onBlur",
  });
  const watchAll = watch();
  console.log(watchAll);

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
          history.push(LIST_ROUTER.review_and_submit);
          dispatch(saveDataProductsAndServicesEcom(getValues("Ecom")));
          dispatch(saveDataProductsAndServicesPOS(getValues("POS")));
        }}
      >
        <>
          {NEXT} <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
        </>
      </Button>
    );
  };

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
          dataRedux={productsAndServicesStep.pointOfSales}
          register={register}
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
            setValue={setValue}
            errors={errors}
          />
        </Box>
      )}

      {/* {Next Button}  */}
      <Box className={cx("button-wrapper", "d-flex justify-end mt-dt-40")}>
        <Button
          backgroundClass="square"
          onClick={() => history.push(LIST_ROUTER.business_details)}
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
export default ProductsAndServices;
