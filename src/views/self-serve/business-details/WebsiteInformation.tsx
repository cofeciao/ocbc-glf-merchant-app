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

// render UI
const WebsiteInformation: React.FC<any> = (props) => {
  const { listField, setValue } = props;
  const cx = classnames.bind(styles);
  const [listTextField, setListTextField] = useState([
    { ...listField.textField },
  ]);

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

  const plus = "&plusmn;";

  return (
    <Box className={cx("website-information-wrapper")}>
      <Grid container>
        {/* {Is your business ready for operation?} */}
        <Grid item xs={12}>
          {_.has(listField.listRadio[0], "description") && (
            <Typography className={cx("sub-section-description")}>
              {listField.listRadio[0].description}
            </Typography>
          )}

          {_.has(SELF_SERVE_PAGE, "list_radio_yes_no") && (
            <Radio
              name="lockIn"
              listCheckBox={SELF_SERVE_PAGE.list_radio_yes_no}
              radioKey={0}
              getValue={(value: any) => setValue("websiteExisting", value)}
            />
          )}
        </Grid>

        {/* {Is your business ready for operation?} */}
        {
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
                {_.map(listTextField, (_item, index) => {
                  return (
                    <Box className={cx("text-field-item")}>
                      <TextField
                        fullWidth
                        id={`uuidv4()`}
                        placeholder={listTextField[0].label}
                        variant="filled"
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
                        src={IconTrash}
                        alt="icon"
                        className={cx("text-field-trash-icon")}
                      />
                    </Box>
                    <Box component="span" className={cx("add-website-label")}>
                      {SELF_SERVE_PAGE.add_more_websites}
                    </Box>
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        }

        {/* {Is your business ready for operation?} */}
        <Grid item xs={12}>
          {_.has(listField.listRadio[1], "description") && (
            <Typography className={cx("sub-section-description")}>
              {listField.listRadio[1].description}
            </Typography>
          )}

          {_.has(SELF_SERVE_PAGE, "list_radio_yes_no") && (
            <Radio
              name="lockIn"
              listCheckBox={SELF_SERVE_PAGE.list_radio_yes_no}
              radioKey={0}
              getValue={(value: any) => setValue("websiteoOrders", value)}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default WebsiteInformation;
