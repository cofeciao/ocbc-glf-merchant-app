// import modules
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import SectionWrapper from "../SectionWrapper";
import _ from "lodash";
import BusinessOfferingPointOfSales from "./BusinessOfferingPointOfSales";
import FulfilmentInformationPointOfSales from "./FulfilmentInformationPointOfSales";
import SalesForecastPointOfSales from "./SalesForecastPointOfSales";

// import constants
import { SELF_SERVE_PAGE } from "@/utils/constants";

// import types
import { IProductsAndServices } from "./ProductsAndServices";

// render UI
const PointOfSalesForm: React.FC<IProductsAndServices.IForm> = (
  props
) => {
  const {
    cx,
    data,
    dataRedux,
    title,
    optionSelected,
    variant = "point-of-sales",
    register,
    unregister,
    setValue,
    errors,
    setError,
  } = props;
  const { businessOffering, fulfilmentInformation, salesForecast } = data; // sub sections
  const {
    LABEL_BUSINESS_OFFERING,
    LABEL_FULFILMENT_INFORMATION,
    LABEL_SALES_FORECAST,
  } = SELF_SERVE_PAGE;

  return (
    <Box className={cx("products-and-services-form-wrapper")}>
      <SectionWrapper cx={cx} title={title} className="pos-section-wrapper">
        <Grid container>
          {/* {Business Offering} */}
          <Grid item xs={12}>
            {!_.isNil(optionSelected) && businessOffering.title && (
              <Typography className={cx("sub-section-title")}>
                {LABEL_BUSINESS_OFFERING}
              </Typography>
            )}
            {!_.isEmpty(businessOffering.description) && (
              <Typography
                className={cx(
                  "business-offering-description sub-section-description mb-16"
                )}
              >
                {businessOffering.description}
              </Typography>
            )}
            <BusinessOfferingPointOfSales
              cx={cx}
              data={businessOffering}
              dataRedux={dataRedux}
              register={register}
              errors={errors}
            />
          </Grid>

          {/* {Fulfilment Information} */}
          <Grid item xs={12}>
            {!_.isNil(optionSelected) && fulfilmentInformation.title && (
              <Typography className={cx("sub-section-title")}>
                {LABEL_FULFILMENT_INFORMATION}
              </Typography>
            )}
            <FulfilmentInformationPointOfSales
              cx={cx}
              data={fulfilmentInformation}
              dataRedux={dataRedux}
              variant={variant}
              register={register}
              errors={errors}
              unregister={unregister}
              setValue={setValue}
            />
          </Grid>

          {/* {Sales Forecast} */}
          <Grid item xs={12}>
            {!_.isNil(optionSelected) && salesForecast.title && (
              <Typography className={cx("sub-section-title")}>
                {LABEL_SALES_FORECAST}
              </Typography>
            )}
            <SalesForecastPointOfSales
              cx={cx}
              data={salesForecast}
              dataRedux={dataRedux}
              register={register}
              errors={errors}
            />
          </Grid>
        </Grid>
      </SectionWrapper>
    </Box>
  );
};
export default PointOfSalesForm;
