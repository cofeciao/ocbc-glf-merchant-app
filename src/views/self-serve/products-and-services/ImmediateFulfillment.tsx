// import modules
import React, { useEffect, useState } from "react";
import { Checkbox } from "@sectionsg/orc";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import GroupRadio from "@/components/GroupRadio";
import _ from "lodash";

// import constants
import { ERROR_ICON, SELF_SERVE_PAGE } from "@/utils/constants";

// import icons
import ExpandMore from "@material-ui/icons/ExpandMore";

// import types

// render UI
const ImmediateFulfillment: React.FC<any> = (props) => {
  // props
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
  const { listCheckboxSecondary, listDropdown, listRadioSecondary } = data;
  const [productDelivery, setProductDelivery] = useState<string>(
    dataRedux.productDelivery || listRadioSecondary.list[0].value
  );

  return (
    <Box className={cx("products-and-services-form-wrapper")}>
      <Grid container className={cx("mt-dt-40")}>
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
                  IconComponent={ExpandMore}
                  defaultValue={
                    _.has(dataRedux, "deliveryTimeToCustomers")
                      ? dataRedux.deliveryTimeToCustomers
                      : ""
                  }
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
