// import modules
import { Typography, FormControlLabel, Checkbox, Box } from "@material-ui/core";
import classnames from "classnames/bind";
import React, { ChangeEvent, useState } from "react";
import _ from "lodash";

// import style
import styles from "./GroupCheckBox.scss";

// import types
import { ICheckBox, IGroupCheckBox } from "./GroupCheckBox";

// import images
import IconCheckbox from "@/assets/images/icon-checkbox.svg";
import IconCheckboxBlack from "@/assets/images/icon-checkedbox-black.svg";
import IconCheckboxBlackTransparent from "@/assets/images/icon-checkedbox-transparent.svg";

// render UI
const GroupCheckBox = (props: IGroupCheckBox) => {
  const {
    listCheckbox,
    layout = "vertical",
    register = () => {},
    name,
    required,
    onBlur = () => {},
    onChange = () => {},
    getValue = () => {},
    getValueOnChange = () => {},
  } = props;
  const cx = classnames.bind(styles);

  // State
  const [dataListCheckbox, setDataListCheckbox] = useState(listCheckbox);

  /**
   * Run after clicking any item checkboxes to process data stream
   * @param {ChangeEvent<HTMLInputElement>} event
   * @param {boolean} checked
   */
  const handleCheckBox = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const newData: any = dataListCheckbox.reduce((acc, item) => {
      const newItem: any = { ...item }; // Create a new object to avoid changing the original object
      if (newItem.value === event.target.value) {
        newItem.checked = checked;
      }
      acc.push(newItem);
      return acc;
    }, []);
    setDataListCheckbox(newData);
    getValueOnChange(newData);
  };

  // render UI
  return (
    <Box
      className={cx("group-checkbox-wrapper d-flex")}
      flexDirection={layout === "horizontal" ? "row" : "column"}
    >
      {_.map(dataListCheckbox, (checkbox: ICheckBox, index: number) => {
        return (
          <FormControlLabel
            control={
              <Checkbox
                disableRipple
                disableTouchRipple
                disableFocusRipple
                {...checkbox}
                required
                {...register(name, { required })}
                onChange={(
                  event: ChangeEvent<HTMLInputElement>,
                  checked: boolean
                ) => {
                  handleCheckBox(event, checked);
                  onChange(event, dataListCheckbox);
                }}
                onBlur={(e) => {
                  onBlur(e);
                  getValue(dataListCheckbox);
                }}
                icon={<img src={IconCheckbox} alt="icon checkbox" />}
                checkedIcon={
                  checkbox.disabled ? (
                    <img
                      src={IconCheckboxBlackTransparent}
                      alt="checkbox black transparent"
                    />
                  ) : (
                    <img src={IconCheckboxBlack} alt="icon checkedbox black" />
                  )
                }
              />
            }
            disabled={checkbox.disabled}
            key={index}
            label={checkbox.label}
          />
        );
      })}
    </Box>
  );
};
export default GroupCheckBox;
