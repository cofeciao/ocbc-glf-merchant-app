// import modules
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import { Radio } from "@sectionsg/orc";

// import constants

// import style
import styles from "./BusinessOperation.scss";

// import types

// render UI
const OtherInformation: React.FC<any> = (props) => {
  const { sections, listRadio, labelDoesYourRetailStoreAccpetCardPayment } = props;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const [key, setKey] = useState<number>(0);
  const history = useHistory();

  return (
    <Box display="flex" flexDirection="column" gridRowGap="40px" className={cx("other-information-wrapper")}>
      {sections.map((section: any, index: number) => {
        return (
          <Grid key={index} container>
            <Grid item xs={12}>
              {/* {Description} */}
              {section.listCheckboxDescription && (
                <Typography className={cx("sub-section-description")}>
                  {section.listCheckboxDescription}
                </Typography>
              )}

              {/* {List Checkbox} */}
              {section.listCheckbox && (
                <Box display="flex" flexDirection="column"> 
                  {section.listCheckbox.map((checkbox: any, index: number) => {
                    return (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={checkbox.checked}
                            // onChange={handleChange}
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label={checkbox.label}
                      />
                    );
                  })}
                </Box>
              )}
            </Grid>
          </Grid>
        );
      })}
      <Grid container>
        <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            {labelDoesYourRetailStoreAccpetCardPayment}
          </Typography>

          <Radio
            name="lockIn"
            listCheckBox={listRadio}
            radioKey={0}
            // value={dataWebsiteInformation.checkedYouHaveExistingWebsite ? "Yes" : "No"}
            // getValue={(value: any) => {
            //   setDataWebsiteInformation({
            //     ...dataWebsiteInformation,
            //     checkedYouHaveExistingWebsite: value === "Yes" ? true : false
            //   })
            // }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default OtherInformation;
