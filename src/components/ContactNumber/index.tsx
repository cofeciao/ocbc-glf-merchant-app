// import modules
import { InputAdornment, MenuItem, Select, TextField } from "@material-ui/core";
import classNames from "classnames";
import _ from "lodash";
import React, { ChangeEvent, useEffect, useState } from "react";

// import icons
import ExpandMore from "@material-ui/icons/ExpandMore";

// styles
import styles from "./ContactNumber.scss";

// import types
import { IContactNumber, ICountry } from "./GroupCheckBox";

// render UI
const ContactNumber: React.FC<IContactNumber> = (props) => {
  const {
    listCountry,
    dataRedux,
    register,
    unregister,
    name,
    errors,
    setError,
    setValue,
    label,
    helperText,
    required,
  } = props;
  const ERROR_ICON = "\u26A0";

  // classnames
  const cx = classNames.bind(styles);

  // states
  const [areaCode, setAreaCode] = useState<string>("+65");
  const [numberPhone, setNumberPhone] = useState<string>("");
  const [result, setResult] = useState<any>({});
  const [valueContactNumber, setValueContactNumber] = useState<string>("");


  /**
   * Set errors with name case eg: "abc.xyz"
   */
  useEffect(() => {
    if (_.size(name) && _.has(errors, name)) {
      const keys = name.split("."); // ["a", "b"]
      const reducer = keys.reduce((acc: any, key: string) => acc[key], errors);
      setResult(reducer);
    }
  }, [valueContactNumber]);

  /**
   * contact number validation only apply for area code +65 (SG)
   */
  useEffect(() => {
    setValue(`${name}.areaCode`, areaCode);
    if (areaCode === "+65") {
      if (!_.isEmpty(numberPhone) && numberPhone.length !== 8) {
        setError(name, {
          type: "pattern",
          message: `${ERROR_ICON} ${helperText}`,
        });
      }
      register(name, {
        required: required,
        pattern: {
          value: /^(?:\+65|65)?[689]\d{7}$/g,
          message: `${ERROR_ICON} ${helperText}`,
        },
      });
    } else {
      unregister(name);
      register(name, {
        required: required,
      });
    }
  }, [areaCode]);
  console.log("errors", errors);

  /**
   * Prevent user typing non-number
   */
  function handleChangeContactNumber(event: ChangeEvent<HTMLInputElement>) {
    setNumberPhone(event.target.value.replace(/\D/g, ""));
  }

  return (
    <div className={cx("contact-number-wrapper")}>
      <TextField
        fullWidth
        name={name}
        className={cx("formatted-numberphone-input")}
        type="text"
        label={label}
        value={numberPhone}
        defaultValue={_.has(dataRedux, name) ? dataRedux[name] : ""}
        error={
          _.has(result, "type") && _.isEqual(result.type, "required")
            ? false
            : _.has(result, "type") &&
              !_.isEqual(result.type, "required") &&
              true
        }
        helperText={
          _.has(result, "type") && _.isEqual(result.type, "required")
            ? ""
            : _.has(result, "type") &&
              !_.isEqual(result.type, "required") &&
              result.message
        }
        {...register(name, {
          onChange: handleChangeContactNumber,
          onBlur: (event: ChangeEvent<HTMLInputElement>) => {
            setValueContactNumber(event.target.value);
            if (event.target.value === "") {
              setValue(name, "");
              setError(name, {
                type: "required",
                message: "",
              });
            } else {
              setValue(name, event.target.value);
            }
          },
        })}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              component="div"
              className={cx("formatted-numberphone-select")}
            >
              {/* {Phone Number adorment} */}
              <Select
                renderValue={(value) => value}
                IconComponent={ExpandMore}
                name={`${name}.areaCode`}
                onBlur={(event: any) => {
                  setAreaCode(event.target.value);
                }}
                defaultValue={
                  _.has(dataRedux, `${name}.areaCode`)
                    ? dataRedux.areaCode
                    : listCountry[0].value
                }
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  PaperProps: {
                    style: {
                      maxHeight: 360,
                      width: 432,
                      overflowY: "auto",
                    },
                  },
                }}
              >
                {_.map(listCountry, (item: ICountry, index: number) => {
                  return (
                    <MenuItem
                      className={cx("item-selected")}
                      key={index}
                      value={item.value}
                    >
                      <span
                        className={cx(
                          areaCode === item.value
                            ? "item-selected"
                            : "item-unselected"
                        )}
                      >{`${item.name} (${item.value})`}</span>
                    </MenuItem>
                  );
                })}
              </Select>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default ContactNumber;
