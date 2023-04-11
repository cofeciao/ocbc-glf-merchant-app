// import modules
import React, { useEffect, useState } from "react";
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
  const { data, register, unregister, setValue, errors, control, dataRedux } =
    props;
  const {
    selectField,
    // checkedPlaceOrderThroughWebsite,
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
    checkedExistingWebsite: true,
    checkedPlaceOrderThroughWebsite: true,
    valueExistingWebsite:
      dataRedux.existingWebsite || LIST_RADIO_YES_NO[0].value,
    valuePlaceOrderThroughWebsite:
      dataRedux.placeOrderThroughWebsite || LIST_RADIO_YES_NO[0].value,
  });

  // react-hook-form
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "websites", // unique name for your Field Array
  });

  /**
   * Handle react-hook-form
   */
  useEffect(() => {
    setValue("existingWebsite", dataWebsiteInformation.valueExistingWebsite);
    setValue(
      "placeOrderThroughWebsite",
      dataWebsiteInformation.valuePlaceOrderThroughWebsite
    );
    if (dataWebsiteInformation.checkedExistingWebsite === true) {
      unregister("websiteLiveDate");
    } else {
      unregister("websites");
    }
  }, [dataWebsiteInformation]);

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
            name="existingWebsite"
            value={dataWebsiteInformation.valueExistingWebsite}
            listRadio={LIST_RADIO_YES_NO}
            onChange={(event) => {
              const { value } = event.target;
              setDataWebsiteInformation({
                ...dataWebsiteInformation,
                checkedExistingWebsite: value === "yes" ? true : false,
                valueExistingWebsite: value,
              });
            }}
          />
        </Grid>

        {/* {Please indicate when your business will start operations} */}
        {!dataWebsiteInformation.checkedExistingWebsite && (
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
                    _.has(dataRedux, "websiteLiveDate")
                      ? dataRedux.websiteLiveDate
                      : ""
                  }
                  {...register(`websiteLiveDate`, {
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
        {dataWebsiteInformation.checkedExistingWebsite && (
          <Grid item xs={12}>
            <Grid container direction="column" style={{ rowGap: "12px" }}>
              {fields.map((item: any, index: number) => (
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
                            _.has(errors, `websites[${index}].web.type`) &&
                            !_.isEqual(
                              errors.websites[index].web.type,
                              "required"
                            ) &&
                            true
                          }
                          helperText={
                            _.has(errors, `websites[${index}].web.type`) &&
                            errors.websites[index].web.message
                          }
                          {...register(`websites[${index}].web`, {
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
                <div>
                  <div
                    className={cx("add-field")}
                    onClick={() => append({ web: "" })}
                  >
                    <img
                      src={IconPlus}
                      alt="icon"
                      className={cx("text-field-add-icon")}
                    />
                    {labelAddMoreWebsite}
                  </div>
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
            name="placeOrderThroughWebsite"
            value={dataWebsiteInformation.valuePlaceOrderThroughWebsite}
            listRadio={LIST_RADIO_YES_NO}
            onChange={(event) => {
              const { value } = event.target;
              setDataWebsiteInformation({
                ...dataWebsiteInformation,
                checkedPlaceOrderThroughWebsite: value === "yes" ? true : false,
                valuePlaceOrderThroughWebsite: value,
              });
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default WebsiteInformation;
