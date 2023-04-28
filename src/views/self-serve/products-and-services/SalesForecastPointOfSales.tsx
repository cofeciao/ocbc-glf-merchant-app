// import modules
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import _ from "lodash";
import AmountTextField from "@/components/AmountTextField";

// import types
import { IProductsAndServices } from "./ProductsAndServices";

// render UI
const SalesForecast: React.FC<IProductsAndServices.ISalesForecastSection> = (props) => {
  const { cx, data, register, errors, dataRedux } = props;

  // render UI
  return (
    <Box className={cx("sales-forecast-wrapper")}>
      {/* {Description} */}
      {_.has(data, "description") && (
        <Typography className={cx("section-description")}>
          {data.description}
        </Typography>
      )}

      {/* {TextField} */}
      <Grid item xs={12}>
        <Box className={cx("text-field-group")}>
          <Grid item xs={12} md={6} lg={5}>
            <AmountTextField
              {...data.listTextField[0]}
              name="Pos.estimatedAmount"
              errors={errors}
              register={register}
              dataRedux={_.get(dataRedux, "estimatedAmount")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <AmountTextField
              {...data.listTextField[1]}
              name="Pos.estimatedAnnualCredit"
              errors={errors}
              register={register}
              dataRedux={_.get(dataRedux, "estimatedAnnualCredit")}
            />
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};
export default SalesForecast;
