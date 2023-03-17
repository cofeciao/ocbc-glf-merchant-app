// import modules
import { Radio } from "@sectionsg/orc";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./BusinessDetails.scss";
import { SELF_SERVE_PAGE } from "@/utils/constants";

// import types

// import icons
import IconPlus from "@/assets/images/icon-plus.svg";

// render UI
const WebsiteInformation: React.FC<any> = (props) => {
  const {
    listField,
    register,
    unregister,
    setValue,
    dataRedux,
    optionSelected,
  } = props;
  const {
    LIST_RADIO_YES_NO,
    LABEL_ADD_MORE_WEBSITES,
    LABEL_REMOVE,
    LABEL_WEBSITE,
    PLEASE_SELECT_LABEL,
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const [existingWebsite, setExistingWebsite] = useState("Yes");
  const [listTextField, setListTextField] = useState([
    { ...listField.textField },
  ]);

  useEffect(() => {
    if (existingWebsite === "Yes" || optionSelected === "point-of-sales") {
      unregister("websiteLiveDate");
    }
  }, [existingWebsite]);

  /**
   * After clicking "add more websites" button under the text field, the text field will have 1 more field per click
   */
  const handleAddWebsite = () => {
    if (listTextField.length < 3) {
      setListTextField([...listTextField, listTextField]);
    }
  };

  /**
   * After clicking on the trash icon next to the text field input, the text field will be removed
   * @param index
   */
  const handleClickTrash = (index: number) => {
    const filterListTextField = _.filter(
      listTextField,
      (_textField, idx) => idx !== index
    );
    setListTextField(filterListTextField);
  };

  return (
    <Box className={cx("website-information-wrapper")}>
      <Grid container>
        {/* {Do you have an existing website?} */}
        <Grid item xs={12}>
          {!_.isEmpty(listField.listRadioExistingWebsite.description) && (
            <Typography className={cx("sub-section-description")}>
              {listField.listRadioExistingWebsite.description}
            </Typography>
          )}

          {!_.isEmpty(LIST_RADIO_YES_NO) && (
            <Radio
              name="lockIn"
              listCheckBox={LIST_RADIO_YES_NO}
              radioKey={0}
              getValue={(value: any) => {
                setValue("existingWebsite", value);
                setExistingWebsite(value);
              }}
            />
          )}
        </Grid>

        {/* {Please indicate the live date of your website} */}
        {!_.isEqual(optionSelected, "point-of-sales") &&
          _.isEqual(existingWebsite, "No") && (
            <Grid item xs={12}>
              {/* {Description} */}
              {_.has(listField.dropdownField, "description") && (
                <Typography className={cx("sub-section-description mb-16")}>
                  {listField.dropdownField.description}
                </Typography>
              )}

              {/* {List Select} */}
              <Grid xs={12} md={4}>
                <FormControl variant="filled" fullWidth>
                  {/* {Label} */}
                  {!_.isNil(PLEASE_SELECT_LABEL) && (
                    <InputLabel htmlFor="select-website-live-date-label">
                      {PLEASE_SELECT_LABEL}
                    </InputLabel>
                  )}

                  {/* {Select} */}
                  {!_.isEmpty(listField.dropdownField.list) && (
                    <Select
                      fullWidth
                      defaultValue={
                        _.has(dataRedux, "websiteLiveDate")
                          ? dataRedux.websiteLiveDate
                          : ""
                      }
                      labelId="select-website-live-date-label"
                      id="select-website-live-date"
                      {...register("websiteLiveDate", {
                        required: true,
                      })}
                    >
                      {_.map(listField.dropdownField.list, (item, index) => {
                        return (
                          <MenuItem key={index} value={item.value}>
                            {item.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  )}
                </FormControl>
              </Grid>
            </Grid>
          )}

        {/* {Your website’s URL?} */}
        {_.isEqual(existingWebsite, "Yes") && (
          <Grid item xs={12} className={cx("website-url-group-wrapper")}>
            {_.map(listTextField, (item, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  className={cx("website-url-wrapper")}
                >
                  {_.has(listField.textField, "description") && (
                    <Box className={cx("d-flex space-between")}>
                      {/* {Description} */}
                      <Typography
                        className={cx("sub-section-description mb-24")}
                      >
                        {`${LABEL_WEBSITE} ${index + 1}`}
                      </Typography>

                      {/* {Remove Button} */}
                      {index >= 1 && (
                        <Link
                          onClick={() => handleClickTrash(index)}
                          className={cx("remove-label sub-section-description")}
                        >
                          {LABEL_REMOVE}
                        </Link>
                      )}
                    </Box>
                  )}

                  {/* {Text field} */}
                  <Grid item xs={4}>
                    <Box className={cx("text-field-group-wrapper")}>
                      <Box key={item.label} className={cx("text-field-item")}>
                        <TextField
                          fullWidth
                          placeholder={listTextField[0].label}
                          variant="filled"
                          defaultValue={
                            _.has(dataRedux, `yourWebsiteURL${index}`)
                              ? `${dataRedux.numberOfOutlets}${index}`
                              : ""
                          }
                          {...register(`yourWebsiteURL${index}`, {
                            required: false,
                          })}
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              );
            })}

            {/* {Add more websites button} */}
            <Box display="flex" flexDirection="row">
              {listTextField.length < 3 && (
                <Button
                  className={cx("add-website-button")}
                  onClick={handleAddWebsite}
                >
                  <Box component="span" className={cx("large-plus")}>
                    <img
                      src={IconPlus}
                      alt="icon"
                      className={cx("text-field-trash-icon")}
                    />
                  </Box>
                  <Box component="span" className={cx("add-website-label")}>
                    {LABEL_ADD_MORE_WEBSITES}
                  </Box>
                </Button>
              )}
            </Box>
          </Grid>
        )}

        {/* {Can customers place orders through your website?} */}
        <Grid item xs={12}>
          {!_.isEmpty(listField.listRadioPlaceOrderThroughWebsite.description) && (
            <Typography className={cx("sub-section-description")}>
              {listField.listRadioPlaceOrderThroughWebsite.description}
            </Typography>
          )}

          {!_.isEmpty(LIST_RADIO_YES_NO) && (
            <Radio
              name="lockIn"
              listCheckBox={LIST_RADIO_YES_NO}
              radioKey={0}
              getValue={(value: any) =>
                setValue("placeOrderThroughWebsite", value)
              }
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default WebsiteInformation;
