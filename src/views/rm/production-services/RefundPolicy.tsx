import { Box, FormControlLabel, RadioGroup, Typography, Radio } from "@material-ui/core";
import React from "react";
import { IProductionServices } from "./ProductionServices";
import UploadImage from "../UploadImage";

const RefundPolicy: React.FC<IProductionServices.IRefundPolicy> = (props) => {
  const { cx, paramsBusinessService, setParamsBusinessService } = props;
  
  const listRadioRefundPolicy = [
    {
      text: "Yes",
      value: "yes",
      checked: false,
    },
    {
      text: "No",
      value: "no",
      checked: false,
    },
  ];

  const listRadioUploadPolicy = [
    {
      text: "Upload now",
      value: "upload_now",
      checked: false,
    },
    {
      text: "Upload later",
      value: "upload_later",
      checked: false,
    },
  ]

  return (
    <Box className={cx("refund-policy")}>
      <Typography className={cx('sub-section-description')}>Do you have a refund policy?</Typography>
        <RadioGroup
          aria-label="refund_policy" 
          name="refund_policy"
          className={cx("radio-group-refund")}
          value={paramsBusinessService.refund_policy}
          onChange={(e: any) => {
            setParamsBusinessService({...paramsBusinessService, refund_policy: e.target.value});
          }}
          >
          {listRadioRefundPolicy.map((item: any, index: number) => {
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

        {paramsBusinessService.refund_policy === 'yes' && (
          <>
            <Typography className={cx('sub-section-description')}>Upload a copy of your policy</Typography>
            <RadioGroup
              aria-label="refund_policy" 
              name="refund_policy" 
              className={cx("radio-group-upload-policy")}
              value={paramsBusinessService.upload_policy}
              onChange={(e: any) => 
                setParamsBusinessService({...paramsBusinessService, upload_policy: e.target.value})
              }
            >
            {listRadioUploadPolicy.map((item: any, index: number) => (
              <FormControlLabel 
                key={index} 
                value={item.value} 
                control={<Radio disableFocusRipple disableRipple disableTouchRipple />} 
                label={item.text} 
              />
            ))}
            </RadioGroup>
            
            {paramsBusinessService.upload_policy === "upload_now" && (
              <UploadImage
                onChange={(value) => setParamsBusinessService({...paramsBusinessService, image: value})}
              />
            )}
          </>
        )}

    </Box>
  )
}

export default RefundPolicy;