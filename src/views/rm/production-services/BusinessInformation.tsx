import { Box, FormControlLabel, RadioGroup, Typography, Radio, TextField, Grid, InputAdornment, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import React from "react";
import { IProductionServices } from "./ProductionServices";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

// import icons
import IconInformation from "@/assets/images/icon-infomation.svg";

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

  return (
    <Box className={cx("business-information")}>
      <Typography className={cx("title")}>What products and/or services is your business offering?</Typography>
      <TextField
        id="outlined-multiline-static"
        value={paramsBusinessService.bussiness_offering}
        multiline
        rows={2}
        variant="standard"
        onChange={(e) => 
          setParamsBusinessService({...paramsBusinessService, bussiness_offering: e.target.value })
        }
      />
      <Typography 
        className={cx('sub-section-description')}
      >
        How quickly does your business fulfil these products and/or services? {"  "}
        <img src={IconInformation} alt="icon informaton" />
      </Typography>
      <RadioGroup
        aria-label="refund_policy" 
        name="refund_policy"
        className={cx("radio-group-fulfil")}
        value={paramsBusinessService.quickly_bussiness}
        onChange={(e: any) => {
          setParamsBusinessService({...paramsBusinessService, quickly_bussiness: e.target.value })
        }}
        >
        {listRadio.map((item: any, index: number) => {
          return(
            <FormControlLabel 
              key={index} 
              value={item.value} 
              control={<Radio disableFocusRipple disableRipple disableTouchRipple />} 
              label={item.text} 
            />
          )
        })}
      </RadioGroup>
      {paramsBusinessService.quickly_bussiness === "fulfillment_over_period" && (
        <Box className={cx("fulfillment-group")}>
          <Box className={cx("fulfillment-item")}>
            <Typography className={cx('sub-section-description')}>Please indicate duration</Typography>
            <FormControl
              variant="filled"
              className={cx("company-type-select")}
              fullWidth
            >
              <Select
                fullWidth
                labelId="salutation-select-filled-label"
                // defaultValue={
                //   _.has(dataRedux, "authorised_person_details.salutation") ? dataRedux.authorised_person_details.salutation : ""
                // }
                id="salutation-select-filled"
                // {...register("authorised_person_details.salutation", {
                //   required: true,
                // })}
              >
                {_.map(listIndicateDuration, (item, index) => {
                  return (
                    <MenuItem key={index} value={item.value}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box className={cx("fulfillment-item")}>
            <Typography className={cx('sub-section-description')}>Percentage of products/services not fulfilled immediately</Typography>
            <TextField
              className={cx("textfield-percentage")}
              fullWidth
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
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Box>
        </Box>
      )}


      <Typography className={cx("title")}>Based on your products and/or services, what is your sales forecast?</Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography className={cx('sub-section-description')}>Average amount per credit card transaction</Typography>
          <TextField
            fullWidth
            defaultValue={paramsBusinessService.average_amount}
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
          <Typography className={cx('sub-section-description')}>Annual credit card sales forecast </Typography>
          <TextField
            fullWidth
            defaultValue={paramsBusinessService.annual_credit}
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

export default BusinessInformation;