// import modules
import React from "react";
import { Box, TextField } from "@material-ui/core";
import _ from "lodash";

// import constants
import { ERROR_ICON } from "@/utils/constants";

// import types

// render UI
const BusinessOfferingPointOfSales: React.FC<any> = (props) => {
  const { cx, data, register, errors, dataRedux } = props;
  const { textField } = data;
  console.log(errors);

  return (
    <Box className={cx("business-offering-wrapper")}>
      {!_.isNil(textField) && (
        <Box className={cx("main-input-field")}>
          <TextField
            fullWidth
            placeholder={textField.label}
            variant="filled"
            error={
              _.has(errors, "POS") &&
              _.has(errors.POS, "typeOfProductAndService") &&
              !_.isEqual(errors.POS.typeOfProductAndService.type, "required") &&
              true
            }
            defaultValue={
              _.has(dataRedux, "typeOfProductAndService")
                ? dataRedux.typeOfProductAndService
                : ""
            }
            helperText={
              _.has(errors, "POS") &&
              _.has(errors.POS, "typeOfProductAndService") &&
              !_.isEqual(errors.POS.typeOfProductAndService.type, "required")
                ? errors.POS.typeOfProductAndService.message
                : textField.helperTextGuide
            }
            {...register(`POS.${textField.keyName}`, {
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
export default BusinessOfferingPointOfSales;
