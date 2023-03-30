import { Box, FormControlLabel, RadioGroup, Typography, Radio, TextField, Grid, InputAdornment, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";
import React, { useState } from "react";
import { IProductionServices } from "./ProductionServices";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

// import icons
import IconInformation from "@/assets/images/icon-infomation.svg";
import { STEP_RM } from "@/utils/constants-rm";

const BusinessInformation: React.FC<IProductionServices.IBusinessInformation> = (props) => {
  const { cx, paramsBusinessService, setParamsBusinessService } = props;

  const listRadio = [
    {
      text: "Immediate fulfillment",
      value: "immediate_fulfillment",
      checked: false,
    },
    {
      text: "Fulfillment over a period of time",
      value: "fulfillment_over_period",
      checked: false,
    },
  ];

  const listIndicateDuration = [
    {
      name: "Within a week",
      value: "within_week",
    },
    {
      name: "Within 2 weeks",
      value: "within_2_weeks",
    }
  ]

  const {
    LIST_STEP: {
      productAndService: {
        section: {
          businessOffering,
        }
      }
    },
  } = STEP_RM;

  return (
    <Box className={cx("business-information")}>
      <Typography className={cx("title")}>{businessOffering.label}</Typography>
      <TextField
        id="outlined-multiline-static"
        value={paramsBusinessService.bussiness_offering}
        multiline
        label="Business offerings"
        variant="filled"
        onChange={(e) => 
          setParamsBusinessService({...paramsBusinessService, bussiness_offering: e.target.value })
        }
        inputProps={{ maxLength: 180 }}
      />
      <FormHelperText>{businessOffering.note}</FormHelperText>
    </Box>
  )
}

export default BusinessInformation;