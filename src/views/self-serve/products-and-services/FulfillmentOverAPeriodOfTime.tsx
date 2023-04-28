// import modules
import React from "react";
import _ from "lodash";

// import constants
import { SELF_SERVE_PAGE } from "@/utils/constants";

// import types
import { IProductsAndServices } from "./ProductsAndServices";

// import components
import { Box, Grid, Typography } from "@material-ui/core";
import PercentageTextField from "@/components/PercentageTextField";
import Select from "@/components/Select";

// render UI
const FulfillmentOverAPeriodOfTime: React.FC<
  IProductsAndServices.IFulfillmentOverAPeriodOfTime
> = (props) => {
  const { PERCENT_CHARACTERS } = SELF_SERVE_PAGE;
  const { cx, data, register, errors, dataRedux } = props;
  const { listDropdown, textField } = data;

  return (
    <Box className={cx("fulfillment-over-a-period-of-time-wrapper")}>
      {
        <Grid item xs={12}>
          <Grid container className={cx("mt-dt-40")}>
            {/* {Please indicate duration} */}
            <Grid item xs={5}>
              {/* {Description} */}
              {!_.isEmpty(listDropdown.description) && (
                <Typography
                  className={cx(
                    "fulfilment-information-description input-field-description"
                  )}
                >
                  {listDropdown.description}
                </Typography>
              )}

              {/* {Dropdown} */}
              {!_.isEmpty(listDropdown) && (
                <Select
                  fullWidth
                  required={false}
                  register={register}
                  label={listDropdown.label}
                  listSelect={listDropdown.list}
                  name={`Pos.duration`}
                  defaultValue={_.get(dataRedux, `duration`)}
                />
              )}
            </Grid>

            {/* {Percentage of products/services not fulfilled immediately} */}
            <Grid item xs={12}>
              {/* {Description} */}
              {!_.isEmpty(textField.description) && (
                <Typography
                  className={cx(
                    "fulfilment-information-description input-field-description"
                  )}
                >
                  {textField.description}
                </Typography>
              )}

              {/* {Text Field} */}
              <Grid item xs={12} md={5}>
                <PercentageTextField
                  name="Pos.percentageOfProductsNotFulfilledImmediately"
                  required={false}
                  adornment={PERCENT_CHARACTERS}
                  errors={errors}
                  register={register}
                  dataRedux={_.get(
                    dataRedux,
                    "percentageOfProductsNotFulfilledImmediately"
                  )}
                  {...textField}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      }
    </Box>
  );
};
export default FulfillmentOverAPeriodOfTime;
