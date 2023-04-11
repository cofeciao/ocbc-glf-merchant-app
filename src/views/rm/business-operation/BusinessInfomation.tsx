// import modules
import React, { ChangeEvent, useEffect, useState } from "react";
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
import { ERROR_ICON, STEP_RM } from "@/utils/constants-rm";

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
  const {
    data,
    register,
    unregister,
    setValue,
    errors,
    setError,
    clearErrors,
    dataRedux,
    optionSelected,
  } = props;
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
    checkedIsYourBusinessReadyForOperation: true,
    checkedDoYouCurrentHaveAnOCBCBusinessAccount: true,
    valueAtHowManyOutlet: dataRedux.numberOfOutlets || "",
    valueOCBCBusinessAccountNumber: dataRedux.ocbcBusinessAccountNumber || "",
    valueIsYourBusinessReadyForOperation:
      dataRedux.businessReadyToOperate || LIST_RADIO_YES_NO[0].value,
    valueDoYouCurrentHaveAnOCBCBusinessAccount:
      dataRedux.ocbcBusinessAccount || LIST_RADIO_YES_NO[0].value,
  });

  /**
   * Prevent user typing non-number
   */
  const handleChangeNumberOfOutlets = (e: ChangeEvent<HTMLInputElement>) => {
    setDataBusinessinformation({
      ...dataBusinessInformation,
      valueAtHowManyOutlet: e.target.value.replace(/\D/g, ""),
    });
  };

  /**
   * Prevent user typing non-number
   */
  const handleChangeOCBCBusinessAccountNumber = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setDataBusinessinformation({
      ...dataBusinessInformation,
      valueOCBCBusinessAccountNumber: event.target.value
        .replace(/\D/g, "")
        .replace(/^(\d{3})(\d{6})(\d{3})$/, "$1-$2-$3"), // format: 123-123456-123
    });
  };

  // Temporarily put here for dev
  const handleBlurOCBCBusinessAccountNumber = (
    _event: ChangeEvent<HTMLInputElement>
  ) => {
    if (_.size(dataBusinessInformation.valueOCBCBusinessAccountNumber)) {
      if (_.size(dataBusinessInformation.valueOCBCBusinessAccountNumber) < 12) {
        setTimeout(() => {
          // Set error OCBC business account number
          setError("ocbcBusinessAccountNumber", {
            type: "pattern",
            message: `${ERROR_ICON} ${textFieldOcbcBusinessAccountNumber.helperText}`,
          });
        }, 0);
      } else {
        clearErrors("ocbcBusinessAccountNumber");
      }
    }
  };

  /**
   * Handle react-hook-form
   */
  useEffect(() => {
    setValue(
      "businessReadyToOperate",
      dataBusinessInformation.valueIsYourBusinessReadyForOperation
    );
    setValue(
      "ocbcBusinessAccount",
      dataBusinessInformation.valueDoYouCurrentHaveAnOCBCBusinessAccount
    );
    if (
      dataBusinessInformation.checkedIsYourBusinessReadyForOperation === true
    ) {
      unregister("operationStartingPeriod");
    }
    if (
      dataBusinessInformation.checkedDoYouCurrentHaveAnOCBCBusinessAccount ===
      false
    ) {
      unregister("ocbcBusinessAccountNumber");
    }
  }, [dataBusinessInformation]);

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
            name="businessReadyToOperate"
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
                    _.has(dataRedux, "operationStartingPeriod")
                      ? dataRedux.operationStartingPeriod
                      : ""
                  }
                  {...register(`operationStartingPeriod`, {
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
                type="text"
                value={dataBusinessInformation.valueAtHowManyOutlet}
                {...register(`numberOfOutlets`, {
                  required: true,
                  onChange: handleChangeNumberOfOutlets,
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
            name="ocbcBusinessAccount"
            listRadio={LIST_RADIO_YES_NO}
            value={
              dataBusinessInformation.valueDoYouCurrentHaveAnOCBCBusinessAccount
            }
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
              {/* {TextField} */}
              <TextField
                fullWidth
                type="text"
                variant="filled"
                label={textFieldOcbcBusinessAccountNumber.label}
                value={dataBusinessInformation.valueOCBCBusinessAccountNumber}
                error={
                  _.has(errors, "ocbcBusinessAccountNumber.type") &&
                  !_.isEqual(
                    errors.ocbcBusinessAccountNumber.type,
                    "required"
                  ) &&
                  true
                }
                helperText={
                  _.has(errors, `ocbcBusinessAccountNumber.message`) &&
                  errors.ocbcBusinessAccountNumber.message
                }
                {...register(`ocbcBusinessAccountNumber`, {
                  required: true,
                  pattern: false,
                  onChange: handleChangeOCBCBusinessAccountNumber,
                  onBlur: handleBlurOCBCBusinessAccountNumber,
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
