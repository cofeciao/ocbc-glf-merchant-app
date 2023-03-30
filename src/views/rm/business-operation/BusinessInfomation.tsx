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
import GroupRadio from "../GroupRadio";

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
    valueOCBCBusinessAccountNumber: "",
    valueIsYourBusinessReadyForOperation: "",
    valueDoYouCurrentHaveAnOCBCBusinessAccount: ""
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

        <GroupRadio
          cx={cx}
          name="isYourBusinessReadyForOperation"
          value={dataBusinessInformation.valueIsYourBusinessReadyForOperation}
          listRadio={listRadioIsYourBusinessReadyForOperation}
          onChange={(event) => {
            const { value } = event.target;
            setDataBusinessinformation({
              ...dataBusinessInformation,
              checkedIsYourBusinessReadyForOperation: value === "yes" ? true : false,
              valueIsYourBusinessReadyForOperation: value
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
                type="number"
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
          <GroupRadio
            cx={cx}
            name="doYouCurrentHaveAnOCBCBusinessAccount"
            value={dataBusinessInformation.valueDoYouCurrentHaveAnOCBCBusinessAccount}
            listRadio={listRadioYouCurrentlyHaveAnOCBC}
            onChange={(event) => {
              const { value } = event.target;
              setDataBusinessinformation({
                ...dataBusinessInformation,
                checkedDoYouCurrentHaveAnOCBCBusinessAccount: value === "yes" ? true : false,
                valueDoYouCurrentHaveAnOCBCBusinessAccount: value
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
