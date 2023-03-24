// import modules
import React, { ChangeEvent, useEffect, useState } from "react";
import { Checkbox } from "@sectionsg/orc";
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
import { ERROR_ICON, SELF_SERVE_PAGE } from "@/utils/constants";
import GroupRadio from "@/components/GroupRadio";

// import types

// render UI
const ImmediateFulfillment: React.FC<any> = (props) => {
  // props
  const { PERCENT_CHARACTERS } = SELF_SERVE_PAGE;
  const {
    cx,
    data,
    variant,
    setValue,
    register,
    unregister,
    errors,
    dataRedux,
  } = props;
  const { textField, listCheckboxSecondary, listDropdown, listRadioSecondary } =
    data;

    // states
  const [inputValue, setInputValue] = useState("");
  const [productDelivery,setProductDelivery] = useState<string>(listRadioSecondary.list[0].value);

  /**
   * Prevent user input non-number
   */
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value.replace(/\D/g, ""));
  }

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
            <Grid item xs={12} md={5}>
              <TextField
                fullWidth
                label={textField.label}
                variant="filled"
                type="text"
                value={inputValue}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {PERCENT_CHARACTERS}
                    </InputAdornment>
                  ),
                }}
                error={
                  _.has(errors, "Ecom") &&
                  _.has(
                    errors.Ecom,
                    "percentageOfProductsNotFulfilledImmediately"
                  ) &&
                  !_.isEqual(
                    errors.Ecom.percentageOfProductsNotFulfilledImmediately
                      .type,
                    "required"
                  ) &&
                  true
                }
                helperText={
                  _.has(errors, "Ecom") &&
                  _.has(
                    errors.Ecom,
                    "percentageOfProductsNotFulfilledImmediately"
                  )
                    ? errors.Ecom.percentageOfProductsNotFulfilledImmediately
                        .message
                    : ""
                }
                defaultValue={
                  _.has(
                    dataRedux,
                    "percentageOfProductsNotFulfilledImmediately"
                  )
                    ? dataRedux.percentageOfProductsNotFulfilledImmediately
                    : ""
                }
                className={cx("percentage-input-field")}
                {...register(
                  "Ecom.percentageOfProductsNotFulfilledImmediately",
                  {
                    required: true,
                    pattern: {
                      // eslint-disable-next-line no-useless-escape
                      value: /^\b(0|[1-9][0-9]?|100)\b$/,
                      message: `${ERROR_ICON} ${textField.helperText}`,
                    },
                    onChange: handleChange,
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
            <GroupRadio
              cx={cx}
              name="productDelivery"
              value={productDelivery}
              isRow={false}
              listRadio={listRadioSecondary.list}
              onChange={(event) => {
                const { value } = event.target;
                setValue(
                  "Ecom.productDelivery",
                  value === listRadioSecondary.list[0].value
                    ? listRadioSecondary.list[0].value
                    : listRadioSecondary.list[1].value
                );
                setProductDelivery(value);
              }}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default ImmediateFulfillment;
