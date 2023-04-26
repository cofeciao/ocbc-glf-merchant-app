// import modules
import React, { ChangeEvent, useEffect, useState } from "react";
import _ from "lodash";
import classnames from "classnames/bind";

// import styles
import styles from "./AmountTextField.scss";

// import constants
import { ERROR_ICON } from "@/utils/constants";

// import components
import { Box, InputAdornment, TextField } from "@material-ui/core";

const AmountTextField = (props: any) => {
  const {
    register,
    errors,
    name,
    dataRedux,
    description,
    label,
    helperText,
  } = props;

  // states
  const [openAdornment, setOpenAdornment] = useState<boolean>(false);
  const [value, setValue] = useState<string>(dataRedux || "");

  // classnames
  const cx = classnames.bind(styles);

  /**
   * Check data from redux and dump data into input fields
   */
  useEffect(() => {
    if (dataRedux) {
      setOpenAdornment(true);
    }
  }, [dataRedux]);

  /**
   * Handle numeric value from inputs
   * @param event
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Change value to thousand seperator, eg: 1000000 => 1,000,000
    const sanitizedText = event.target.value.replace(/[^0-9]/g, "");
    const formattedText = sanitizedText.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setValue(formattedText);
  };

  return (
    <Box className={cx("amount-textfield-wrapper")}>
      <TextField
        fullWidth
        value={value}
        variant="filled"
        label={description}
        InputProps={
          openAdornment
            ? {
                endAdornment: (
                  <InputAdornment position="end">{label}</InputAdornment>
                ),
              }
            : {}
        }
        onFocus={() => {
          setOpenAdornment(true);
        }}
        error={
          _.has(errors, name) &&
          !_.isEqual(_.get(errors, `${name}.type`), "required") &&
          true
        }
        helperText={_.has(errors, name) && helperText}
        {...register(name, {
          required: false,
          pattern: {
            // eslint-disable-next-line no-useless-escape
            value: /^[1-9]\d{0,2}(,\d{3})*$/,
            message: `${ERROR_ICON} ${helperText}`,
          },
          onChange: handleChange,
          onBlur: (e: any) => {
            e.target.value === "" ? setOpenAdornment(false) : null;
          },
        })}
      />
    </Box>
  );
};

export default AmountTextField;
