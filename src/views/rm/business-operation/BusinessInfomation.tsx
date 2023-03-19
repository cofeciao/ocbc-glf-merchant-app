// import modules
import { Radio } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";

// import constants

// import style
import styles from "./BusinessOperation.scss";
import { STEP_RM } from "@/utils/constants-rm";

// import types

// render UI
const BusinessInfomation: React.FC<any> = (props) => {
  const { listRadioIsYourBusinessReadyForOperation, listRadioYouCurrentlyHaveAnOCBC } = props;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const [key, setKey] = useState<number>(0);
  const history = useHistory();

  const {
    LIST_STEP: {
      businessOperation: {
        section: { businessInformation },
      },
    },
  } = STEP_RM;

  // States
  const [dataBusinessInformation, setDataBusinessinformation] = useState<any>({
    checkedIsYourBusinessReadyForOperation: businessInformation.checkedIsYourBusinessReadyForOperation,
    checkedDoYouCurrentHaveAnOCBCBusinessAccount: businessInformation.checkedDoYouCurrentHaveAnOCBCBusinessAccount,
    valueAtHowManyOutlet: 0,
    valueOCBCBusinessAccountNumber: ""
  });


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
            {businessInformation.labelIsYouBusinessReadyForOperation}
          </Typography>

          <Radio
            name="lockIn"
            listCheckBox={listRadioIsYourBusinessReadyForOperation}
            radioKey={0}
            value={dataBusinessInformation.checkedIsYourBusinessReadyForOperation ? "Yes" : "No"}
            getValue={(value: any) => {
              setDataBusinessinformation({
                ...dataBusinessInformation,
                checkedIsYourBusinessReadyForOperation: value === "Yes" ? true : false
              })
            }}
          />
        </Grid>
        {dataBusinessInformation.checkedIsYourBusinessReadyForOperation && (
          <Grid item xs={12}>
            <Typography className={cx("sub-section-description")}>
              {businessInformation.labelAtHowManyOutletWillYouDeplay}
            </Typography>

            <Grid item xs={6}>
              <TextField
                fullWidth
                id={`uuidv4()`}
                label="Number of outlets"
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
        )}


        {/* {Do you currently have an OCBC business account?} */}
        <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            {businessInformation.labelDoYouCurrentHaveAnOCBCBusinessAccount}
          </Typography>

          <Radio
            name="lockIn"
            listCheckBox={listRadioYouCurrentlyHaveAnOCBC}
            radioKey={0}
            value={dataBusinessInformation.checkedDoYouCurrentHaveAnOCBCBusinessAccount ? "Yes" : "No"}
            getValue={(value: any) => {
              setDataBusinessinformation({
                ...dataBusinessInformation,
                checkedDoYouCurrentHaveAnOCBCBusinessAccount: value === "Yes" ? true : false
              })
            }}
          />
        </Grid>
        {dataBusinessInformation.checkedDoYouCurrentHaveAnOCBCBusinessAccount && (
          <Grid item xs={12}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id={`uuidv4()`}
                label="OCBC business account number"
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
        )}
      </Grid>
    </Box>
  );
};
export default BusinessInfomation;
