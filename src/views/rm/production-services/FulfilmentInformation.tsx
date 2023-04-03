import {
  Box,
  FormControlLabel,
  RadioGroup,
  Typography,
  Radio,
  TextField,
  Grid,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { IProductionServices } from "./ProductionServices";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

// import icons
import IconInformation from "@/assets/images/icon-infomation.svg";
import { STEP_RM } from "@/utils/constants-rm";
import GroupRadio from "@/components/GroupRadio";

const FulfilmentInformation: React.FC<
  IProductionServices.IBusinessInformation
> = (props) => {
  const { cx, paramsBusinessService, setParamsBusinessService } = props;
  const { LIST_RADIO_FULFILMENT_INFORMATION, LIST_INDICATE_DURATION } = STEP_RM;
  const {
    LIST_STEP: {
      productAndService: {
        section: { fulfilmentInformation },
      },
    },
  } = STEP_RM;

  return (
    <Box className={cx("business-information")}>
      <Typography
        className={cx(
          "sub-section-description",
          "title-fulfilment-information"
        )}
      >
        {fulfilmentInformation.label}{" "}
        <img src={IconInformation} alt="icon informaton" />
      </Typography>
      <GroupRadio
        name="refundPolicy"
        isRow={false}
        listRadio={LIST_RADIO_FULFILMENT_INFORMATION}
        value={paramsBusinessService.quicklyBussiness}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setParamsBusinessService({
            ...paramsBusinessService,
            quicklyBussiness: e.target.value,
          });
        }}
        cx={cx}
      />
      {paramsBusinessService.quicklyBussiness ===
        LIST_RADIO_FULFILMENT_INFORMATION[1].value && (
        <Box className={cx("fulfillment-group")}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormControl
                variant="filled"
                className={cx("company-type-select")}
                fullWidth
              >
                <InputLabel>{fulfilmentInformation.labelSelect}</InputLabel>
                <Select
                  fullWidth
                  placeholder="Please indicate duration"
                  // defaultValue={
                  //   _.has(dataRedux, "authorised_person_details.salutation") ? dataRedux.authorised_person_details.salutation : ""
                  // }
                  // {...register("authorised_person_details.salutation", {
                  //   required: true,
                  // })}
                >
                  {_.map(LIST_INDICATE_DURATION, (item, index) => {
                    return (
                      <MenuItem key={index} value={item.value}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={cx("textfield-percentage")}
                fullWidth
                label={fulfilmentInformation.labelTextField}
                // defaultValue={
                //   _.has(dataRedux, "contact_detail.name") ? dataRedux.name : ""
                // }
                id={uuidv4()}
                // label={name.label}
                variant="filled"
                // {...register("contact_detail.name", {
                //   required: true,
                // })}
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default FulfilmentInformation;
