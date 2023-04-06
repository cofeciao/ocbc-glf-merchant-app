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
import GroupRadio from "@/components/GroupRadio";
import _ from "lodash";

// import constants
import { STEP_RM } from "@/utils/constants-rm";

// import styles
import styles from "./BusinessOperation.scss";

// import types
import { IBusinessOperations } from "./BusinessOperation";

// import icons
import ExpandMore from "@material-ui/icons/ExpandMore";

// render UI
const BusinessInfomation: React.FC<IBusinessOperations.IBusinessInfomation> = (
  props
) => {
  const { data, register, dataRedux, optionSelected } = props;
  const {
    labelPleaseIndicateWhenYourBusinessWillStartOperations,
    labelOperationsStartDate,
    labelIsYouBusinessReadyForOperation,
    labelNumberOfOutlets,
    labelAtHowManyOutletWillYouDeplay,
    labelDoYouCurrentHaveAnOCBCBusinessAccount,
    textFieldOcbcBusinessAccountNumber,
  } = data;
  const cx = classnames.bind(styles);
  const {
    LIST_OPERATIONS_START_DATE,
    LIST_STEP: { LIST_RADIO_YES_NO },
  } = STEP_RM;

  // states
  const [dataBusinessInformation, setDataBusinessinformation] = useState<any>({
    checkedIsYourBusinessReadyForOperation: LIST_RADIO_YES_NO[0].value,
    checkedDoYouCurrentHaveAnOCBCBusinessAccount: LIST_RADIO_YES_NO[0].value,
    valueAtHowManyOutlet: 0,
    valueOCBCBusinessAccountNumber: "",
    valueIsYourBusinessReadyForOperation: LIST_RADIO_YES_NO[0].value,
    valueDoYouCurrentHaveAnOCBCBusinessAccount: LIST_RADIO_YES_NO[0].value,
  });

  return (
    <Box className={cx("business-infomation-wrapper")}>
      <Grid container>
        {/* {Is your business ready for operation?} */}
        <Grid item xs={12}>
          {/* {Description} */}
          <Typography className={cx("sub-section-description")}>
            {labelIsYouBusinessReadyForOperation}
          </Typography>

          {/* {GroupRadio} */}
          <GroupRadio
            cx={cx}
            name="isYourBusinessReadyForOperation"
            value={dataBusinessInformation.valueIsYourBusinessReadyForOperation}
            listRadio={LIST_RADIO_YES_NO}
            onChange={(event) => {
              const { value } = event.target;
              setDataBusinessinformation({
                ...dataBusinessInformation,
                checkedIsYourBusinessReadyForOperation:
                  value === "yes" ? true : false,
                valueIsYourBusinessReadyForOperation: value,
              });
            }}
          />
        </Grid>

        {/* {Please indicate when your business will start operations} */}
        {!dataBusinessInformation.checkedIsYourBusinessReadyForOperation && (
          <Grid item xs={12}>
            {/* {Description} */}
            <Typography className={cx("sub-section-description")}>
              {labelPleaseIndicateWhenYourBusinessWillStartOperations}
            </Typography>

            {/* {Select} */}
            <Grid item xs={5}>
              <FormControl variant="filled" fullWidth>
                <InputLabel>{labelOperationsStartDate}</InputLabel>
                <Select
                  fullWidth
                  IconComponent={ExpandMore}
                  placeholder={labelOperationsStartDate}
                  defaultValue={
                    _.has(dataRedux, "duration") ? dataRedux.duration : ""
                  }
                  {...register(`duration`, {
                    required: true,
                  })}
                >
                  {_.map(LIST_OPERATIONS_START_DATE, (item, index) => {
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

        {/* {At how many outlets will you deploy Point-of-Sales terminals?} */}
        {optionSelected !== "e-commerce" && (
          <Grid item xs={12}>
            {/* {Description} */}
            <Typography className={cx("sub-section-description")}>
              {labelAtHowManyOutletWillYouDeplay}
            </Typography>

            {/* {TextField} */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                label={labelNumberOfOutlets}
                variant="filled"
                type="number"
                {...register(`duration`, {
                  required: true,
                })}
              />
            </Grid>
          </Grid>
        )}

        {/* {Do you currently have an OCBC business account?} */}
        <Grid item xs={12}>
          {/* {Description} */}
          <Typography className={cx("sub-section-description")}>
            {labelDoYouCurrentHaveAnOCBCBusinessAccount}
          </Typography>

          {/* {GroupRadio} */}
          <GroupRadio
            cx={cx}
            name="doYouCurrentHaveAnOCBCBusinessAccount"
            value={
              dataBusinessInformation.valueDoYouCurrentHaveAnOCBCBusinessAccount
            }
            listRadio={LIST_RADIO_YES_NO}
            onChange={(event) => {
              const { value } = event.target;
              setDataBusinessinformation({
                ...dataBusinessInformation,
                checkedDoYouCurrentHaveAnOCBCBusinessAccount:
                  value === "yes" ? true : false,
                valueDoYouCurrentHaveAnOCBCBusinessAccount: value,
              });
            }}
          />
        </Grid>

        {/* {OCBC business account number} */}
        {dataBusinessInformation.checkedDoYouCurrentHaveAnOCBCBusinessAccount && (
          <Grid item xs={12}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label={textFieldOcbcBusinessAccountNumber.label}
                variant="filled"
                {...register(`ocbcBusinessAccountNumber`, {
                  required: true,
                })}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
export default BusinessInfomation;
