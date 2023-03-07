// import modules
import React from "react";
import { Box, TextField } from "@material-ui/core";
import _ from "lodash";

// import constants
import { ERROR_ICON } from "@/utils/constants";

// import types

// render UI
const BusinessOfferingEcommerce: React.FC<any> = (props) => {
  const { cx, data, register, errors, dataRedux } = props;

  return (
    <Box className={cx("business-offering-wrapper")}>
      {_.has(data, "textField") && (
        <Box className={cx("main-input-field")}>
          <TextField
            fullWidth
            placeholder={data.textField.label}
            variant="filled"
            error={errors.numberOutlets && true}
            helperText={
              errors.numberOfOutlets && errors.numberOfOutlets.message
            }
            defaultValue={
              _.has(dataRedux, "typeOfProductAndService")
                ? dataRedux.typeOfProductAndService
                : ""
            }
            {...register("Ecom.typeOfProductAndService", {
              required: true,
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^.{0,180}$/,
                message: `${ERROR_ICON} ${data.textField.helperText}`,
              },
            })}
          />
        </Box>
      )}
    </Box>
  );
};
export default BusinessOfferingEcommerce;
