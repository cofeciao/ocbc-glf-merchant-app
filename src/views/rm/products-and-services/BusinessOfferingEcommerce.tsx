// import modules
import React, { useState } from "react";
import { Box, TextField } from "@material-ui/core";
import _ from "lodash";

// import constants
import { ERROR_ICON } from "@/utils/constants";

// import types
import { IProductsAndServices } from "./ProductsAndServices";

// render UI
const BusinessOfferingEcommerce: React.FC<
  IProductsAndServices.IBusinessOfferingSection
> = (props) => {
  const { cx, data, register, errors, dataRedux } = props;
  const { textField } = data;
  const maxLength = 180;

  // State
  const [counter, setCounter] = useState<number>(
    !_.isEmpty(dataRedux[textField.keyName])
      ? dataRedux[textField.keyName].length
      : 0
  );

  return (
    <Box className={cx("business-offering-wrapper")}>
      {/* {TextField} */}
      {!_.isEmpty(textField) && (
        <Box className={cx("main-input-field")}>
          <TextField
            fullWidth
            variant="filled"
            multiline
            rowsMax={3}
            label={
              <Box width="130%" className={cx("d-flex space-between")}>
                <span>{textField.label}</span>
                <span id={cx("counter")}>
                  {counter > maxLength ? maxLength : counter}/{maxLength}
                </span>
              </Box>
            }
            error={
              _.has(errors, "Ecom") &&
              _.has(errors.Ecom, "typeOfProductAndService") &&
              !_.isEqual(
                errors.Ecom.typeOfProductAndService.type,
                "required"
              ) &&
              true
            }
            defaultValue={
              _.has(dataRedux, "typeOfProductAndService")
                ? dataRedux.typeOfProductAndService
                : ""
            }
            helperText={
              _.has(errors, "Ecom") &&
              _.has(errors.Ecom, "typeOfProductAndService") &&
              !_.isEqual(errors.Ecom.typeOfProductAndService.type, "required")
                ? errors.Ecom.typeOfProductAndService.message
                : textField.helperTextGuide
            }
            {...register(`Ecom.${textField.keyName}`, {
              required: true,
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^.{0,180}$/,
                message: `${ERROR_ICON} ${textField.helperText}`,
              },
              onChange: (e: any) => {
                setCounter(e.target.value.length);
              },
            })}
          />
        </Box>
      )}
    </Box>
  );
};
export default BusinessOfferingEcommerce;
