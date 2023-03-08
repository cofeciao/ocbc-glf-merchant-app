// import modules
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import _ from "lodash";
import SectionWrapper from "../SectionWrapper";
import BusinessOfferingEcommerce from "./BusinessOfferingEcommerce";
import FulfilmentInformationEcommerce from "./FulfilmentInformationEcommerce";
import SalesForecastEcommerce from "./SalesForecastEcommerce";

// import types

// render UI
const EcommerceForm: React.FC<any> = (props) => {
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
  } = props;
  const { businessOffering, fulfilmentInformation, salesForecast } = data; // sub sections

  return (
    <Box className={cx("products-and-services-form-wrapper")}>
      <SectionWrapper cx={cx} title={title}>
        <Grid container>
          {/* {Business Offering} */}
          <Grid item xs={12}>
            {_.has(businessOffering, "title") && (
              <Typography className={cx("sub-section-title")}>
                {businessOffering.title}
              </Typography>
            )}
            {_.has(businessOffering, "description") && (
              <Typography
                className={cx(
                  "business-offering-description sub-section-description"
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
