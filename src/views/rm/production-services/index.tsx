import classNames from "classnames";
import React, { forwardRef, useEffect, useState } from "react";
import { Loading, Button, Category } from "@sectionsg/orc";
import { Link } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

//import icon
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// import style
import styles from "./ProductionServices.scss";

// import constants
import { URL_MANUAL_FLOW, STEP_RM } from "@/utils/constants-rm";

//import types
import { IProductionServices } from "./ProductionServices";

//import components
import SectionWrapper from "../SectionWrapper";
import BusinessInformation from "./BusinessInformation";
import RefundPolicy from "./RefundPolicy";
import SalesForecast from "./SalesForecast";
import FulfilmentInformation from "./FulfilmentInformation";

const ProductionServices: React.FC<IProductionServices.IProps> = forwardRef(
  ({}, ref) => {
    const cx = classNames.bind(styles);
    const history = useHistory();
    const dispatch = useDispatch();

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

    // States
    const [loading, setLoading] = useState(false);
    const [paramsBusinessService, setParamsBusinessService] = useState<any>({
      bussinessOffering:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque aliquet dolor, sit amet euismod purus scelerisque id. Donec quam metus, pulvinar nec nibh at, interdum fermentum nisl.",
      quicklyBussiness: LIST_RADIO_FULFILMENT_INFORMATION[0].value,
      averageAmount: "",
      annualCredit: "",
      refundpolicy: "",
      indicateDuration: "",
      percentage: "",
      uploadPolicy: "",
      image: "",
    });

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

    /**
     * Handle button prev
     */
    const handlePrev = () => {
      history.push(URL_MANUAL_FLOW.businessOperation);
    };

    /**
     * Handle button next
     */
    const handleNext = async () => {
      history.push(URL_MANUAL_FLOW.sensitiveData);
    };

    /**
     * render UI Button
     * @returns {HTML}
     */
    const renderButton = () => {
      return (
        <Button
          backgroundClass="bgGunmetalBluegrey"
          onClick={handleNext}
          // disabled={!isValid || !isDirty}
        >
          Next
          <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
        </Button>
      );
    };

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
          <div className="business-services-category">
            <Category class="title">{title}</Category>
          </div>

          <SectionWrapper cx={cx} title={businessOffering.title}>
            <BusinessInformation
              cx={cx}
              paramsBusinessService={paramsBusinessService}
              setParamsBusinessService={setParamsBusinessService}
            />
          </SectionWrapper>

          <SectionWrapper cx={cx} title={fulfilmentInformation.title}>
            <FulfilmentInformation
              cx={cx}
              paramsBusinessService={paramsBusinessService}
              setParamsBusinessService={setParamsBusinessService}
            />
          </SectionWrapper>

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

          <SectionWrapper cx={cx} title={refundPolicy.title}>
            <RefundPolicy
              cx={cx}
              paramsBusinessService={paramsBusinessService}
              setParamsBusinessService={setParamsBusinessService}
            />
          </SectionWrapper>

          {/* Section button  */}
          <section
            className={cx("button-wrapper", "d-flex space-between mt-dt-40")}
          >
            <Button backgroundClass="square" onClick={handlePrev}>
              <ArrowBackIcon className={cx("arrow")} />
            </Button>
            <div>
              <div className={cx("d-inline")}>
                <Link to="/">Continue later</Link>
              </div>
              <div className="ml-dt-30 d-inline">{renderButton()}</div>
            </div>
          </section>
        </Box>
      </React.Fragment>
    );
  }
);

export default ProductionServices;
