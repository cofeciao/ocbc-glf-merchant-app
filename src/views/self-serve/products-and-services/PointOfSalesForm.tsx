// import modules
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import SectionWrapper from "../SectionWrapper";
import _ from "lodash";
import BusinessOffering from "./BusinessOffering";
import FulfilmentInformationPointOfSales from "./FulfilmentInformationPointOfSales";
import SalesForecastPointOfSales from "./SalesForecastPointOfSales";

// import constants
import { SELF_SERVE_PAGE } from "@/utils/constants";

// import types
import { IProductsAndServices } from "./ProductsAndServices";

// render UI
const PointOfSalesForm: React.FC<IProductsAndServices.IForm> = (props) => {
  const {
    cx,
    data,
    title,
    dataRedux,
    optionSelected,
    variant = "point-of-sales",
    register,
    unregister,
    setValue,
    errors,
  } = props;
  const { businessOffering, fulfilmentInformation, salesForecast } = data; // sub sections

  return (
    <Box className={cx("products-and-services-form-wrapper")}>
      <SectionWrapper cx={cx} title={title} className="pos-section-wrapper">
        <Grid container>
          {/* {Business Offering} */}
          <Grid item xs={12}>
            {!_.isNil(optionSelected) && businessOffering.title && (
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
            <BusinessOffering
              cx={cx}
              data={businessOffering}
              dataRedux={dataRedux["typeOfProductAndService"]}
              register={register}
              errors={errors}
              name="Pos.typeOfProductAndService"
            />
          </Grid>

          {/* {Fulfilment Information} */}
          <Grid item xs={12}>
            {!_.isNil(optionSelected) && fulfilmentInformation.title && (
              <Typography className={cx("sub-section-title")}>
                {fulfilmentInformation.title}
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
                {salesForecast.title}
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
