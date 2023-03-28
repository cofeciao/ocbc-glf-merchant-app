// import modules
import React, { ChangeEvent, useEffect, useState } from "react";
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
import { updateDataListRadio } from "@/utils/utils";
import GroupRadio from "@/components/GroupRadio";

// import style
import styles from "./BusinessDetails.scss";

// import constants
import { ERROR_ICON, SELF_SERVE_PAGE } from "@/utils/constants";

// import icons
import IconPlus from "@/assets/images/icon-plus.svg";

// import types
import { IBusinessDetails } from "./BusinessDetails";

// render UI
const WebsiteInformation: React.FC<IBusinessDetails.IWebsiteInformation> = (
  props
) => {
  // props
  const {
    listField,
    register,
    unregister,
    setValue,
    errors,
    dataRedux,
    optionSelected,
    listWebsiteRedux,
  } = props;
  const {
    LIST_RADIO_YES_NO,
    LABEL_ADD_MORE_WEBSITES,
    LABEL_REMOVE,
    LABEL_WEBSITE,
  } = SELF_SERVE_PAGE;

  // classnames
  const cx = classnames.bind(styles);

  // Default value of GroupRadio
  const [existingWebsite, setExistingWebsite] = useState(
    dataRedux.existingWebsite || LIST_RADIO_YES_NO[0].value
  );
  const [placeOrdersThroughYourWebiste, setPlaceOrderThroughWebsite] = useState(
    dataRedux.placeOrderThroughWebsite || LIST_RADIO_YES_NO[0].value
  );

  // Default value of Select
  const [websiteLiveDate, setWebsiteLiveDate] = useState(
    dataRedux.websiteLiveDate || ""
  );

  // Default value of TextField
  const [listTextField, setListTextField] = useState([
    { ...listField.textField },
  ]);

  // List data of GroupRadio
  const [listRadioExistingWebsite, setListRadioExistingWebsite] = useState(
    dataRedux.existingWebsite
      ? updateDataListRadio(dataRedux.existingWebsite, LIST_RADIO_YES_NO)
      : LIST_RADIO_YES_NO
  );
  const [
    listRadioPlaceOrderThroughWebsite,
    setListRadioPlaceOrderThroughWebsite,
  ] = useState(
    dataRedux.placeOrderThroughWebsite
      ? updateDataListRadio(
          dataRedux.placeOrderThroughWebsite,
          LIST_RADIO_YES_NO
        )
      : LIST_RADIO_YES_NO
  );

  /**
   * Update GroupRadio's data from redux and dump data into fields
   */
  useEffect(() => {
    let newList: any = [];
    const filter = listWebsiteRedux.filter((item: string) => _.size(item));
    if (!_.isEmpty(filter)) {
      filter.map((item: string) => {
        newList.push({ ...listField.textField, inputValue: item });
      });
      setListTextField(newList);
    } else {
      setListTextField([{ ...listField.textField }]);
    }
  }, [listWebsiteRedux]);

  /**
   * Handle unregister when user clicks change on existingWebsite
   */
  useEffect(() => {
    if (existingWebsite === "Yes" || optionSelected === "point-of-sales") {
      unregister("websiteLiveDate");
      setWebsiteLiveDate("");
    }
    if (existingWebsite === "No") {
      unregister("placeOrderThroughWebsite");
      setListTextField([{ ...listField.textField }]);
      unregister(["yourWebsiteURL0", "yourWebsiteURL1", "yourWebsiteURL2"]);
    }
  }, [existingWebsite]);

  /**
   * After clicking "add more websites" button under the text field, the text field will have 1 more field per click
   */
  const handleAddWebsite = () => {
    setListTextField([...listTextField, { ...listField.textField }]);
  };

  /**
   * After clicking on the trash icon next to the text field input, the text field will be removed
   * @param index
   */
  const handleClickRemove = (index: number) => {
    const filterListTextField = _.filter(
      listTextField,
      (_textField, idx) => idx !== index
    );
    setListTextField(filterListTextField);
    unregister(`yourWebsiteURL${index}`);
  };

  /**
   * Handle on change to set value for website url text field
   * @param event
   * @param index
   */
  const handleChangeWebsiteUrl = (
    event: ChangeEvent<HTMLInputElement> = undefined,
    index: number
  ) => {
    const newList = _.map(listTextField, (item, idx) => {
      if (index === idx) {
        item.inputValue = event.target.value;
      }
      return item;
    });
    setListTextField(newList);
  };

  return (
    <Box className={cx("website-information-wrapper")}>
      <Grid container>
        {/* {Do you have an existing website?} */}
        <Grid item xs={12}>
          {/* {Description} */}
          {!_.isEmpty(listField.listRadioExistingWebsite.description) && (
            <Typography className={cx("sub-section-description")}>
              {listField.listRadioExistingWebsite.description}
            </Typography>
          )}

          {/* {Radio} */}
          {!_.isEmpty(listRadioExistingWebsite) && (
            <GroupRadio
              cx={cx}
              name="existingWebsite"
              value={existingWebsite}
              listRadio={listRadioExistingWebsite}
              onChange={(event) => {
                const { value } = event.target;
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

              {/* {Select} */}
              <Grid item xs={12} md={4}>
                <FormControl variant="filled" fullWidth>
                  {/* {Label} */}
                  {!_.isNil(listField.dropdownField.placeholder) && (
                    <InputLabel htmlFor="select-website-live-date-label">
                      {listField.dropdownField.placeholder}
                    </InputLabel>
                  )}

                  {/* {Select} */}
                  {!_.isEmpty(listField.dropdownField.list) && (
                    <Select
                      fullWidth
                      labelId="select-website-live-date-label"
                      id="select-website-live-date"
                      value={websiteLiveDate}
                      defaultValue={
                        _.has(dataRedux, "websiteLiveDate")
                          ? dataRedux.websiteLiveDate
                          : ""
                      }
                      {...register("websiteLiveDate", {
                        required: true,
                        onChange: (event: ChangeEvent<HTMLInputElement>) => {
                          setWebsiteLiveDate(event.target.value);
                        },
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
                          onClick={() => handleClickRemove(index)}
                          className={cx("remove-label sub-section-description")}
                        >
                          {LABEL_REMOVE}
                        </Link>
                      )}
                    </Box>
                  )}

                  {/* {TextField} */}
                  <Grid item xs={12} lg={4}>
                    <Box className={cx("text-field-group-wrapper")}>
                      <Box key={item.label} className={cx("text-field-item")}>
                        <TextField
                          fullWidth
                          label={listTextField[0].label}
                          variant="filled"
                          value={item.inputValue}
                          key={index}
                          error={
                            _.has(errors[`yourWebsiteURL${index}`], "type") &&
                            !_.isEqual(
                              errors[`yourWebsiteURL${index}`].type,
                              "required"
                            ) &&
                            true
                          }
                          helperText={
                            _.has(
                              errors[`yourWebsiteURL${index}`],
                              "message"
                            ) && errors[`yourWebsiteURL${index}`].message
                          }
                          {...register(`yourWebsiteURL${index}`, {
                            required: true,
                            pattern: {
                              value:
                                /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i,
                              message: `${ERROR_ICON} ${item.helperText}`,
                            },
                            onChange: (
                              event: ChangeEvent<HTMLInputElement>
                            ) => {
                              handleChangeWebsiteUrl(event, index);
                            },
                          })}
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              );
            })}

            {/* {Add more websites button} */}
            <Box className={cx("add-more-websites-wrapper d-flex")}>
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
        {!_.isEqual(existingWebsite, "No") && (
          <Grid item xs={12}>
            {/* {Description} */}
            {!_.isEmpty(
              listField.listRadioPlaceOrderThroughWebsite.description
            ) && (
              <Typography className={cx("sub-section-description")}>
                {listField.listRadioPlaceOrderThroughWebsite.description}
              </Typography>
            )}

            {/* {GroupRadio} */}
            {!_.isEmpty(listRadioPlaceOrderThroughWebsite) && (
              <GroupRadio
                cx={cx}
                name="placeOrderThroughWebsite"
                value={placeOrdersThroughYourWebiste}
                listRadio={listRadioPlaceOrderThroughWebsite}
                onChange={(event) => {
                  const { value } = event.target;
                  setValue("placeOrderThroughWebsite", value);
                  setPlaceOrderThroughWebsite(value);
                }}
              />
            )}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
export default WebsiteInformation;
