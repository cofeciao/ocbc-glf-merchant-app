// import modules
import React, { useEffect } from "react";
import { Radio, Checkbox } from "@sectionsg/orc";
import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import _ from "lodash";

// import constants
import { SELF_SERVE_PAGE } from "@/utils/constants";

// import types

// render UI
const ImmediateFulfillment: React.FC<any> = (props) => {
  const { PLEASE_SELECT_LABEL, PERCENT_CHARACTERS } = SELF_SERVE_PAGE;
  const { cx, data, variant, setValue, register, unregister } = props;
  const { textField, listCheckboxSecondary, listDropdown, listRadioSecondary } =
    data;

  /**
   * Handle unregister if fields are hidden
   */
  useEffect(() => {
    if (!_.isEqual(variant, "fulfillment-over-a-period-of-time")) {
      unregister("Ecom.percentageOfProductsNotFulfilledImmediately", {
        keepDefaultValue: false,
      });
    }
  }, [variant]);

  return (
    <Box className={cx("products-and-services-form-wrapper")}>
      <Grid container className={cx("mt-dt-40")}>
        {/* {Percentage of products/services not fulfilled immediately} */}
        {_.isEqual(variant, "fulfillment-over-a-period-of-time") && (
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
            <Grid item xs={12} md={4}>
              <TextField
                name="numberformat"
                id="formatted-numberformat-input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {PERCENT_CHARACTERS}
                    </InputAdornment>
                  ),
                }}
                className={cx("percentage-input-field")}
                {...register(
                  "Ecom.percentageOfProductsNotFulfilledImmediately",
                  {
                    required: true,
                  }
                )}
              />
            </Grid>
          </Grid>
        )}

        {/* {Where will your products come from?} */}
        <Grid item xs={12}>
          {_.has(listCheckboxSecondary, "description") && (
            <Typography
              className={cx(
                "fulfilment-information-description input-field-description"
              )}
            >
              {listCheckboxSecondary.description}
            </Typography>
          )}

          {!_.isEmpty(listCheckboxSecondary.list) && (
            <Checkbox
              isFullWidth
              list={listCheckboxSecondary.list}
              checkBoxClass={cx("your-product-come-from-checkbox")}
              getValue={(value: any) => {
                setValue("Ecom.productDeliveredFrom", value);
              }}
            />
          )}
        </Grid>

        {/* {Approximate delivery time to customers} */}
        <Grid item xs={12}>
          {/* {Description} */}
          <Grid item xs={5}>
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
            <FormControl
              variant="filled"
              className={cx("duration-select")}
              fullWidth
            >
              {console.log(listDropdown.placeholder)}
              {!_.isEmpty(listDropdown.placeholder) && (
                <InputLabel id="select-duration-label">
                  {listDropdown.placeholder}
                </InputLabel>
              )}
              {!_.isEmpty(listDropdown.list) && (
                <Select
                  fullWidth
                  labelId="select-duration-label"
                  id="select-duration"
                  {...register("Ecom.deliveryTimeToCustomers", {
                    required: false,
                  })}
                >
                  {_.map(listDropdown.list, (item, index) => {
                    return (
                      <MenuItem key={index} value={item.value}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              )}
            </FormControl>
          </Grid>
        </Grid>

        {/* {How will your products be delivered?} */}
        <Grid item xs={12}>
          {/* {Description} */}
          {_.has(listRadioSecondary, "description") && (
            <Typography
              className={cx(
                "fulfilment-information-description input-field-description"
              )}
            >
              {listRadioSecondary.description}
            </Typography>
          )}

          {/* {Radio group} */}
          {!_.isEmpty(listRadioSecondary.list) && (
            <Radio
              name="lockIn"
              listCheckBox={listRadioSecondary.list}
              vertical
              getValue={(value: any) => {
                setValue("Ecom.productDelivery", value);
              }}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default ImmediateFulfillment;
