import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

// import images
import IconRadioBorder from "@/assets/images/icon-radio-border.svg";
import IconRadioCheckedBlack from "@/assets/images/icon-radio-checked-black.svg";

// import types
import { IGroupRadios } from "./GroupRadio";

const GroupRadio: React.FC<IGroupRadios.IGroupRadio> = (props) => {
  // props
  const {
    cx,
    name,
    label,
    value,
    onChange,
    disabled,
    listRadio,
    isRow = true,
    defaultValue,
  } = props;

  return (
    <FormControl component="fieldset" className={cx("group-radio")}>
      <FormLabel component="legend" className={cx("group-radio__label")}>
        {label}
      </FormLabel>
      <RadioGroup
        name={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        row={isRow}
      >
        {Array.isArray(listRadio) &&
          listRadio.map((item: IGroupRadios.IRadio, index: number) => (
            <FormControlLabel
              key={index}
              value={item.value}
              disabled={disabled}
              control={
                <Radio
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  icon={<img src={IconRadioBorder} alt="icon radio border" />}
                  checkedIcon={
                    <img
                      src={IconRadioCheckedBlack}
                      alt="icon radio checked black"
                    />
                  }
                />
              }
              label={item.label}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
};

export default GroupRadio;
