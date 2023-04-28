// import modules
import React, { ChangeEvent, useEffect, useState } from "react";
import _ from "lodash";
import classnames from "classnames/bind";

// import styles
import styles from "./PercentageTextField.scss";

// import constants
import { ERROR_ICON } from "@/utils/constants";

// import components
import { Box, InputAdornment, TextField } from "@material-ui/core";

const PercentageTextField = (props: any) => {
  const {
    register,
    errors,
    name,
    dataRedux,
    adornment,
    label,
    helperText,
    required,
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
   * Prevent user typing non-number
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.replace(/\D/g, ""));
  };

  return (
    <Box className={cx("percentage-textfield-wrapper")}>
      <TextField
        fullWidth
        value={value}
        variant="filled"
        label={label}
        InputProps={
          openAdornment
            ? {
                endAdornment: (
                  <InputAdornment position="end">{adornment}</InputAdornment>
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
          required,
          pattern: {
            // eslint-disable-next-line no-useless-escape
            value: /^\b(0|[1-9][0-9]?|100)\b$/,
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

export default PercentageTextField;
