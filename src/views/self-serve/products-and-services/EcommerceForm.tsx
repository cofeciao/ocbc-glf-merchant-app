// import modules
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import _ from "lodash";
import { useForm } from "react-hook-form";
import SectionWrapper from "../SectionWrapper";
import BusinessOfferingEcommerce from "./BusinessOfferingEcommerce";
import FulfilmentInformationEcommerce from "./FulfilmentInformationEcommerce";
import SalesForecastEcommerce from "./SalesForecastEcommerce";

// import constants
import { SELF_SERVE_PAGE } from "@/utils/constants";

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
  const {
    LABEL_BUSINESS_OFFERING,
    LABEL_FULFILMENT_INFORMATION,
    LABEL_SALES_FORECAST,
  } = SELF_SERVE_PAGE;

  return (
    <Box className={cx("products-and-services-form-wrapper")}>
      <SectionWrapper cx={cx} title={title}>
        <Grid container>
          {/* {Business Offering} */}
          <Grid item xs={12}>
            {LABEL_BUSINESS_OFFERING && (
              <Typography className={cx("sub-section-title")}>
                {LABEL_BUSINESS_OFFERING}
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
            {LABEL_FULFILMENT_INFORMATION && (
              <Typography className={cx("sub-section-title")}>
                {LABEL_FULFILMENT_INFORMATION}
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
            {LABEL_SALES_FORECAST && (
              <Typography className={cx("sub-section-title")}>
                {LABEL_SALES_FORECAST}
              </Typography>
            )}
            <SalesForecastEcommerce
              cx={cx}
              data={salesForecast}
              dataRedux={dataRedux}
              register={register}
            />
          </Grid>
        </Grid>
      </SectionWrapper>
    </Box>
  );
};
export default EcommerceForm;
