import { Box, FormControlLabel, RadioGroup, Typography, Radio, TextField, Grid, InputAdornment, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";
import React, { useState } from "react";
import { IProductionServices } from "./ProductionServices";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

// import icons
import IconInformation from "@/assets/images/icon-infomation.svg";
import { STEP_RM } from "@/utils/constants-rm";

const SalesForecast: React.FC<any> = (props) => {
  const { cx } = props;

  const {
    LIST_STEP: {
      productAndService: {
        section: {
          salesForecast,
        }
      }
    },
  } = STEP_RM;

  return (
    <Box className={cx("business-information")}>
      <Typography className={cx("title")}>{salesForecast.labelBasedOnYourProducts}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label={salesForecast.labelAverageAmountPerCreditCardTransaction}
            // defaultValue={paramsBusinessService.average_amount}
            // defaultValue={
            //   _.has(dataRedux, "contact_detail.name") ? dataRedux.name : ""
            // }
            // id={uuidv4()}
            // label={name.label}
            variant="filled"
            // {...register("contact_detail.name", {
            //   required: true,
            // })}
            type="number"
            InputProps={{
              startAdornment: <InputAdornment position="start">SGD</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label={salesForecast.labelAnnualCreditCardSalesForecast}
            // defaultValue={paramsBusinessService.annual_credit}
            // id={uuidv4()}
            // label={name.label}
            variant="filled"
            // {...register("contact_detail.name", {
            //   required: true,
            // })}
            type="number"
            InputProps={{
              startAdornment: <InputAdornment position="start">SGD</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>

    </Box>
  )
}

export default SalesForecast;