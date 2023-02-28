// import modules
import { Radio, Button } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCheckBox from "@/components/ListCheckBox";
import { saveDataListCheckbox } from "@/store/form";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";

// import constants
import { SELF_SERVE_PAGE } from "@/utils/constants";

// import style
import styles from "./BusinessDetails.scss";

// import types

// render UI
const BusinessInfomation: React.FC<any> = (props) => {
  const { listRadio } = props;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const [key, setKey] = useState<number>(0);
  const history = useHistory();

  return (
    <Box
      className={cx(
        "business-infomation-wrapper"
      )}
    >
      <Grid container>
        {/* {Is your business ready for operation?} */}
        <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            Is your business ready for operation?
          </Typography>

          <Radio
            name="lockIn"
            listCheckBox={listRadio}
            // label="Is your business ready for operation?"
            radioKey={0}
            // value={formDataLanding.lockIn}
            // getValue={(value: any) => {
            //   setValueFormLandingPage("lockIn", value);
            // }}
          />
        </Grid>

        {/* {Is your business ready for operation?} */}
        <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            At how many outlets will you deploy Point-of-Sales terminals?
          </Typography>

          <Grid item xs={4}>
            <TextField
              fullWidth
              id={`uuidv4()`}
              label="Registered entity name"
              variant="filled"
              // onBlur={(event) => {
              //   getPersonalInformation(
              //     "RegisteredEntityName",
              //     event.target.value,
              //     ""
              //   );
              // }}
            />
          </Grid>
        </Grid>

        {/* {Is your business ready for operation?} */}
        <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            Do you currently have an OCBC business account?
          </Typography>

          <Radio
            name="lockIn"
            listCheckBox={listRadio}
            radioKey={0}
            // value={formDataLanding.lockIn}
            // getValue={(value: any) => {
            //   setValueFormLandingPage("lockIn", value);
            // }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default BusinessInfomation;
