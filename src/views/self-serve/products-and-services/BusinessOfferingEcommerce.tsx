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
  const { textField } = data;

  return (
    <Box className={cx("business-offering-wrapper")}>
      {!_.isNil(textField) && (
        <Box className={cx("main-input-field")}>
          <TextField
            fullWidth
            placeholder={textField.label}
            variant="filled"
            error={errors.numberOutlets && true}
            defaultValue={
              _.has(dataRedux, "typeOfProductAndService")
                ? dataRedux.typeOfProductAndService
                : ""
            }
            helperText={
              _.has(errors, "Ecom") &&
              _.has(errors.Ecom, "typeOfProductAndService") &&
              errors.Ecom.typeOfProductAndService.message
            }
            {...register(`Ecom.${textField.keyName}`, {
              required: true,
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^.{0,180}$/,
                message: `${ERROR_ICON} ${textField.helperText}`,
              },
            })}
          />
        </Box>
      )}
    </Box>
  );
};
export default BusinessOfferingEcommerce;
