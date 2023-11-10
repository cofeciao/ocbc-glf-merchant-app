// import modules
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";
import classNames from "classnames";
import _ from "lodash";
import React, { ChangeEvent, useState } from "react";

// import icons
import ExpandMore from "@material-ui/icons/ExpandMore";

// styles
import styles from "./Select.scss";

// import types
import { ISelect } from "./Select";

// render UI
const Select: React.FC<ISelect> = (props) => {
  // props
  const {
    listSelect,
    register = () => {},
    name,
    label,
    required,
    fullWidth,
    onChange = (event) => event,
    onBlur = (event) => event,
    defaultValue,
    ...rest
  } = props;

  // state
  const [value, setValue] = useState<string>(defaultValue || "");

  // classnames
  const cx = classNames.bind(styles);

  /**
   *  To change select's value
   * @param {ChangeEvent<HTMLInputElement>} event
   */
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box className={cx("select-wrapper")}>
      <FormControl
        variant="filled"
        className={cx("select-form-control")}
        fullWidth={fullWidth}
      >
        {/* {Label} */}
        <InputLabel id="select-filled-label">{label}</InputLabel>

        {/* {Select} */}
        <MuiSelect
          {...rest}
          value={value}
          id="select-filled"
          labelId="salutation-select-filled-label"
          name={name}
          IconComponent={ExpandMore}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            onChange(event);
            handleOnChange(event);
          }}
          {...register(name, {
            required,
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              onChange(event);
              handleOnChange(event);
            },
            onBlur: onBlur,
          })}
        >
          {_.map(listSelect, (item, index) => {
            return (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            );
          })}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};

export default Select;
