// import modules
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import _ from "lodash";
import SectionWrapper from "@/views/self-serve/SectionWrapper";
import BusinessOfferingEcommerce from "./BusinessOfferingEcommerce";
import FulfilmentInformationEcommerce from "./FulfilmentInformationEcommerce";
import SalesForecastEcommerce from "./SalesForecastEcommerce";

// import types
import { IProductsAndServices } from "./ProductsAndServices";

// render UI
const EcommerceForm: React.FC<IProductsAndServices.IForm> = (props) => {
  const {
    cx,
    data,
    dataRedux,
    title,
    variant = "point-of-sales",
    register,
    unregister,
    setValue,
    errors,
    clearErrors,
    setError,
  } = props;
  const { businessOffering, fulfilmentInformation, salesForecast } = data; // sub sections

  return (
    <Box className={cx("products-and-services-form-wrapper")}>
      <SectionWrapper
        cx={cx}
        title={title}
        className="ecommerce-section-wrapper"
      >
        <Grid container>
          {/* {Business Offering} */}
          <Grid item xs={12}>
            {!_.isEmpty(businessOffering.title) && (
              <Typography className={cx("sub-section-title")}>
                {businessOffering.title}
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
            <BusinessOfferingEcommerce
              cx={cx}
              data={businessOffering}
              dataRedux={dataRedux}
              register={register}
              errors={errors}
            />
          </Grid>

          {/* {Fulfilment Information} */}
          <Grid item xs={12}>
            {_.has(fulfilmentInformation, "title") && (
              <Typography className={cx("sub-section-title")}>
                {fulfilmentInformation.title}
              </Typography>
            )}
            <FulfilmentInformationEcommerce
              cx={cx}
              data={fulfilmentInformation}
              dataRedux={dataRedux}
              variant={variant}
              errors={errors}
              setError={setError}
              clearErrors={clearErrors}
              register={register}
              unregister={unregister}
              setValue={setValue}
            />
          </Grid>

          {/* {Sales Forecast} */}
          <Grid item xs={12}>
            {_.has(salesForecast, "title") && (
              <Typography className={cx("sub-section-title")}>
                {salesForecast.title}
              </Typography>
            )}
            <SalesForecastEcommerce
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
export default EcommerceForm;
