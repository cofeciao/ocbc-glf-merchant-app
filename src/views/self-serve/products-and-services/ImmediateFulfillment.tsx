// import modules
import React from "react";
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
  const {
    LIST_CHECKBOX_WHERE_WILL_YOUR_PRODUCTS_COME_FROM,
    LIST_DROPDOWN_APPROXIMATE_DELIVERY_TIME_TO_CUSTOMERS,
    LIST_RADIO_HOW_WILL_YOUR_PRODUCTS_BE_DELIVERED,
    LABEL_PERCENTAGE_OF_SERVICES_NOT_FULFILLED_IMMEDIATELY,
    PLEASE_SELECT_LABEL,
    LIST_PLEASE_INDICATE_DURATION,
    PERCENT_CHARACTERS,
  } = SELF_SERVE_PAGE;
  const { cx, variant = "point-of-sales", setValue, register, dataRedux } = props;
  return (
    <Box className={cx("products-and-services-form-wrapper")}>
      <Grid container className={cx("mt-dt-40")}>
        {/* {TextField & Description} */}
        {_.isEqual(variant, "fulfillment-over-a-period-of-time") && (
          <Grid item xs={12}>
            {LABEL_PERCENTAGE_OF_SERVICES_NOT_FULFILLED_IMMEDIATELY && (
              <Typography
                className={cx(
                  "fulfilment-information-description input-field-description"
                )}
              >
                {LABEL_PERCENTAGE_OF_SERVICES_NOT_FULFILLED_IMMEDIATELY}
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
                {...register(
                  "Ecom.percentageOfProductsNotFulfilledImmediately",
                  {
                    required: false,
                  }
                )}
              />
            </Grid>
          </Grid>
        )}

        {/* {Checkbox & Description} */}
        <Grid item xs={12}>
          {_.has(
            LIST_CHECKBOX_WHERE_WILL_YOUR_PRODUCTS_COME_FROM,
            "description"
          ) && (
            <Typography
              className={cx(
                "fulfilment-information-description input-field-descriptionEcom"
              )}
            >
              {LIST_CHECKBOX_WHERE_WILL_YOUR_PRODUCTS_COME_FROM.description}
            </Typography>
          )}
          <Checkbox
            isFullWidth
            list={LIST_CHECKBOX_WHERE_WILL_YOUR_PRODUCTS_COME_FROM.listRadio}
            checkBoxClass={cx("your-product-come-from-checkbox")}
            getValue={(value: any) => {
              setValue("Ecom.productDeliveredFrom", value);
            }}
          />
        </Grid>

        {/* {Dropdown & Description} */}
        <Grid item xs={12}>
          <Grid item xs={6}>
            {_.has(
              LIST_DROPDOWN_APPROXIMATE_DELIVERY_TIME_TO_CUSTOMERS,
              "description"
            ) && (
              <Typography
                className={cx(
                  "fulfilment-information-description input-field-description"
                )}
              >
                {
                  LIST_DROPDOWN_APPROXIMATE_DELIVERY_TIME_TO_CUSTOMERS.description
                }
              </Typography>
            )}
            <FormControl
              variant="filled"
              className={cx("duration-select")}
              fullWidth
            >
              {PLEASE_SELECT_LABEL && (
                <InputLabel id="select-duration-label">
                  {PLEASE_SELECT_LABEL}
                </InputLabel>
              )}
              <Select
                fullWidth
                labelId="select-duration-label"
                id="select-duration"
                {...register("Ecom.deliveryTimeToCustomers", {
                  required: true,
                })}
              >
                {_.map(
                  LIST_PLEASE_INDICATE_DURATION.listDropdown,
                  (item, index) => {
                    return (
                      <MenuItem key={index} value={item.value}>
                        {item.name}
                      </MenuItem>
                    );
                  }
                )}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* {Radio & Description} */}
        <Grid item xs={12}>
          {/* {Description} */}
          {_.has(
            LIST_RADIO_HOW_WILL_YOUR_PRODUCTS_BE_DELIVERED,
            "description"
          ) && (
            <Typography
              className={cx(
                "fulfilment-information-description input-field-description"
              )}
            >
              {LIST_RADIO_HOW_WILL_YOUR_PRODUCTS_BE_DELIVERED.description}
            </Typography>
          )}

          {/* {Radio group} */}
          {!_.isEmpty(
            LIST_RADIO_HOW_WILL_YOUR_PRODUCTS_BE_DELIVERED.listRadio
          ) && (
            <Radio
              name="lockIn"
              listCheckBox={
                LIST_RADIO_HOW_WILL_YOUR_PRODUCTS_BE_DELIVERED.listRadio
              }
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
