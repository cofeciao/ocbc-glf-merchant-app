// import modules
import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import SectionWrapper from "../SectionWrapper";
import _ from "lodash";
import { useForm } from "react-hook-form";
import BusinessOfferingPointOfSales from "./BusinessOfferingPointOfSales";
import FulfilmentInformationPointOfSales from "./FulfilmentInformationPointOfSales";
import SalesForecastPointOfSales from "./SalesForecastPointOfSales";

// import constants
import { SELF_SERVE_PAGE } from "@/utils/constants";
import { saveDataProductsAndServicesPOS } from "@/store/form";
import { useDispatch } from "react-redux";

// import types

// render UI
const PointOfSalesForm: React.FC<any> = (props) => {
  const { cx, data, title, optionSelected, variant = "point-of-sales" } = props;
  const { businessOffering, fulfilmentInformation, salesForecast } = data; // sub sections
  const {
    LABEL_BUSINESS_OFFERING,
    LABEL_FULFILMENT_INFORMATION,
    LABEL_SALES_FORECAST,
  } = SELF_SERVE_PAGE;
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
  const dispatch = useDispatch();

  /**
   * Save data to Store
   */
  useEffect(() => {
    if (watchAll) {
      dispatch(saveDataProductsAndServicesPOS(getValues()));
    }
  }, [watchAll]);

  return (
    <Box className={cx("products-and-services-form-wrapper")}>
      <SectionWrapper cx={cx} title={title}>
        <Grid container>
          {/* {Business Offering} */}
          <Grid item xs={12}>
            {!_.isNil(optionSelected) && LABEL_BUSINESS_OFFERING && (
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
            <BusinessOfferingPointOfSales
              cx={cx}
              data={businessOffering}
              register={register}
              errors={errors}
            />
          </Grid>

          {/* {Fulfilment Information} */}
          <Grid item xs={12}>
            {!_.isNil(optionSelected) && LABEL_FULFILMENT_INFORMATION && (
              <Typography className={cx("sub-section-title")}>
                {LABEL_FULFILMENT_INFORMATION}
              </Typography>
            )}
            <FulfilmentInformationPointOfSales
              cx={cx}
              data={fulfilmentInformation}
              variant={variant}
              register={register}
              setValue={setValue}
            />
          </Grid>

          {/* {Sales Forecast} */}
          <Grid item xs={12}>
            {!_.isNil(optionSelected) && LABEL_SALES_FORECAST && (
              <Typography className={cx("sub-section-title")}>
                {LABEL_SALES_FORECAST}
              </Typography>
            )}
            <SalesForecastPointOfSales
              cx={cx}
              data={salesForecast}
              register={register}
            />
          </Grid>
        </Grid>
      </SectionWrapper>
    </Box>
  );
};
export default PointOfSalesForm;
