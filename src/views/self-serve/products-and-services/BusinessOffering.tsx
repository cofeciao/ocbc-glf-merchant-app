// import modules
import React, { useState } from "react";
import { Box, TextField } from "@material-ui/core";
import _ from "lodash";

// import constants
import { ERROR_ICON } from "@/utils/constants";

// import types
import { IProductsAndServices } from "./ProductsAndServices";

// render UI
const BusinessOfferingPointOfSales: React.FC<
  IProductsAndServices.IBusinessOfferingSection
> = (props) => {
  const { cx, data, register, errors, dataRedux, name } = props;
  const { textField } = data;
  const maxLength = 180;
  const [counter, setCounter] = useState<number>(
    !_.isEmpty(_.get(dataRedux, name)) ? _.size(_.get(dataRedux, name)) : 0
  );

  return (
    <Box className={cx("business-offering-wrapper")}>
      {/* {What products and/or services is your business offering?} */}
      {!_.isNil(textField) && (
        <Box className={cx("main-input-field")}>
          <TextField
            fullWidth
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
            variant="filled"
            error={
              _.has(errors, name) &&
              !_.isEqual(_.get(errors, `${name}.type`), "required") &&
              true
            }
            defaultValue={dataRedux ? dataRedux : ""}
            helperText={
              _.has(errors, name) &&
              !_.isEqual(_.get(errors, `${name}.type`), "required")
                ? _.get(errors, `${name}.message`)
                : textField.helperTextGuide
            }
            {...register(name, {
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
export default BusinessOfferingPointOfSales;
