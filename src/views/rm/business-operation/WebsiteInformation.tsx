// import modules
import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import classnames from "classnames/bind";
import { useFieldArray } from "react-hook-form";
import GroupRadio from "@/components/GroupRadio";
import _ from "lodash";

// import icons
import IconPlus from "@/assets/images/icon-plus.svg";
import ExpandMore from "@material-ui/icons/ExpandMore";

// import style
import styles from "./BusinessOperation.scss";

// import contants
import { ERROR_ICON, REMOVE, STEP_RM } from "@/utils/constants-rm";

// import types

// render UI
const WebsiteInformation: React.FC<any> = (props) => {
  const { data, register, errors, control, dataRedux } = props;
  const {
    selectField,
    checkedCanCustomersPlaceOrderThroughYourWebsite,
    labelCanCustomersPlaceOrderThroughYourWebsite,
    labelDoYouHaveAnExistingWebsite,
    labelAddMoreWebsite,
    labelWebsite,
    textFieldYourWebsiteURL,
  } = data;
  const cx = classnames.bind(styles);
  const {
    LIST_INDICATE_DURATION,
    LIST_STEP: { LIST_RADIO_YES_NO },
  } = STEP_RM;

  // states
  const [dataWebsiteInformation, setDataWebsiteInformation] = useState<any>({
    checkedYouHaveExistingWebsite: LIST_RADIO_YES_NO[0].value,
    checkedCanCustomersPlaceOrderThroughYourWebsite:
      checkedCanCustomersPlaceOrderThroughYourWebsite,
    valueYouHaveExistingWebsite: LIST_RADIO_YES_NO[0].value,
    valueCanCustomersPlaceOrderThroughYourWebsite: LIST_RADIO_YES_NO[0].value,
  });

  // react-hook-form
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "items", // unique name for your Field Array
  });

  return (
    <Box className={cx("website-information-wrapper")}>
      <Grid container>
        {/* {Is your business ready for operations?} */}
        <Grid item xs={12}>
          {/* {Description} */}
          <Typography className={cx("sub-section-description")}>
            {labelDoYouHaveAnExistingWebsite}
          </Typography>

          {/* {GroupRadio} */}
          <GroupRadio
            cx={cx}
            name="youHaveExistingWebsite"
            value={dataWebsiteInformation.valueYouHaveExistingWebsite}
            listRadio={LIST_RADIO_YES_NO}
            onChange={(event) => {
              const { value } = event.target;
              setDataWebsiteInformation({
                ...dataWebsiteInformation,
                checkedYouHaveExistingWebsite: value === "yes" ? true : false,
                valueYouHaveExistingWebsite: value,
              });
            }}
          />
        </Grid>

        {/* {Please indicate when your business will start operations} */}
        {!dataWebsiteInformation.checkedYouHaveExistingWebsite && (
          <Grid item xs={12}>
            {/* {Description} */}
            <Typography className={cx("sub-section-description")}>
              {selectField.description}
            </Typography>

            {/* {Select} */}
            <Grid item xs={5}>
              <FormControl
                variant="filled"
                className={cx("company-type-select")}
                fullWidth
              >
                <InputLabel>{selectField.label}</InputLabel>
                <Select
                  fullWidth
                  IconComponent={ExpandMore}
                  placeholder={selectField.label}
                  defaultValue={
                    _.has(dataRedux, "duration") ? dataRedux.duration : ""
                  }
                  {...register(`duration`, {
                    required: true,
                  })}
                >
                  {_.map(LIST_INDICATE_DURATION, (item, index) => {
                    return (
                      <MenuItem key={index} value={item.value}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        )}

        {/* {Websites} */}
        {dataWebsiteInformation.checkedYouHaveExistingWebsite && (
          <Grid item xs={12}>
            <Grid container direction="column" style={{ rowGap: "12px" }}>
              {fields.map((_item: any, index: number) => (
                <Grid item xs={12} key={index}>
                  <div className={cx("group-fields")}>
                    {/* {Title} */}
                    <Typography className={cx("title")}>
                      {`${labelWebsite} ${index + 1}`}
                    </Typography>

                    {/* {TextField} */}
                    <Grid container>
                      <Grid item xs={4}>
                        <TextField
                          fullWidth
                          label={textFieldYourWebsiteURL.label}
                          variant="filled"
                          error={
                            _.has(errors, `yourWebsiteURL${index}.type`) &&
                            !_.isEqual(
                              errors[`yourWebsiteURL${index}`].type,
                              "required"
                            ) &&
                            true
                          }
                          helperText={
                            _.has(errors, `yourWebsiteURL${index}.type`) &&
                            errors[`yourWebsiteURL${index}`].message
                          }
                          {...register(`yourWebsiteURL${index}`, {
                            required: true,
                            pattern: {
                              value:
                                /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i,
                              message: `${ERROR_ICON} ${textFieldYourWebsiteURL.helperText}`,
                            },
                          })}
                        />
                      </Grid>
                    </Grid>
                    {index >= 1 && (
                      <Typography
                        className={cx("label-remove")}
                        onClick={() => remove(index)}
                      >
                        {REMOVE}
                      </Typography>
                    )}
                  </div>
                </Grid>
              ))}
              {fields.length < 3 && (
                <div
                  className={cx("add-field")}
                  onClick={() => append({ value: "url" })}
                >
                  <img
                    src={IconPlus}
                    alt="icon"
                    className={cx("text-field-add-icon")}
                  />
                  {labelAddMoreWebsite}
                </div>
              )}
            </Grid>
          </Grid>
        )}

        {/* {Can customers place orders through your website?} */}
        <Grid item xs={12}>
          {/* {Description} */}
          <Typography className={cx("sub-section-description")}>
            {labelCanCustomersPlaceOrderThroughYourWebsite}
          </Typography>

          {/* {GroupRadio} */}
          <GroupRadio
            cx={cx}
            name="youHaveExistingWebsite"
            value={
              dataWebsiteInformation.valueCanCustomersPlaceOrderThroughYourWebsite
            }
            listRadio={LIST_RADIO_YES_NO}
            onChange={(event) => {
              const { value } = event.target;
              setDataWebsiteInformation({
                ...dataWebsiteInformation,
                checkedCanCustomersPlaceOrderThroughYourWebsite:
                  value === "yes" ? true : false,
                valueCanCustomersPlaceOrderThroughYourWebsite: value,
              });
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default WebsiteInformation;
