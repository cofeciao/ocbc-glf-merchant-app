// import modules
import { Radio } from "@sectionsg/orc";
import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";

// import style
import styles from "./BusinessDetails.scss";
import { SELF_SERVE_PAGE } from "@/utils/constants";

// import types

// import icons
import IconTrash from "@/assets/images/icon-trash.svg";
import IconPlus from "@/assets/images/icon-plus.svg";

// render UI
const WebsiteInformation: React.FC<any> = (props) => {
  const { listField, register, setValue, dataRedux } = props;
  const { LIST_RADIO_YES_NO, LABEL_ADD_MORE_WEBSITES } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const [listTextField, setListTextField] = useState([
    { ...listField.textField },
  ]);
  const [existingWebsite, setExistingWebsite] = useState("Yes");

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
          {_.has(listField.listRadio[0], "description") && (
            <Typography className={cx("sub-section-description")}>
              {listField.listRadio[0].description}
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

        {/* {Your website’s URL?} */}
        {_.isEqual(existingWebsite, "Yes") && (
          <Grid item xs={12}>
            {/* {Description} */}
            {_.has(listField.textField, "description") && (
              <Typography className={cx("sub-section-description")}>
                {listField.textField.description}
              </Typography>
            )}

            <Grid item xs={4}>
              <Box className={cx("text-field-group-wrapper")}>
                {/* {Text field group} */}
                {_.map(listTextField, (item, index) => {
                  return (
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
                      {index >= 1 && (
                        <img
                          src={IconTrash}
                          onClick={() => handleClickTrash(index)}
                          alt="icon"
                          className={cx("text-field-trash-icon")}
                        />
                      )}
                    </Box>
                  );
                })}
              </Box>

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
          </Grid>
        )}

        {/* {Can customers place orders through your website?} */}
        <Grid item xs={12}>
          {_.has(listField.listRadio[1], "description") && (
            <Typography className={cx("sub-section-description")}>
              {listField.listRadio[1].description}
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
