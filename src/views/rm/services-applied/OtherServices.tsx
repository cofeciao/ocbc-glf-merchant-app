import React, { useCallback, useState } from "react";
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Typography } from "@material-ui/core";
import { Radio } from "@sectionsg/orc";

// import icons
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import types
import { IServicesApplied } from "./ServicesApplied";

const OtherServices:React.FC<IServicesApplied.IOtherServices> = ( props )=> {
  const { cx, sectionRadios, setDataRadio, dataCheckboxRepayment, setDataCheckboxRepayment } = props;
  const {instalmentPaymentPlan, directCurrencyConversion, mailOrder } = sectionRadios;

  // States
  const [showAll, setShowAll] = useState<boolean>(false);

  const renderListCheckbox = () => {
    return (
      <Box className={cx("checkbox-wrapper")}>
        <FormControl margin="normal" className={cx("group-checkbox")} component="fieldset">
          <FormLabel component="legend">{instalmentPaymentPlan.repaymentPeriodsOffered.title}</FormLabel>
          <FormGroup row className={showAll ? cx("w-45") : cx("w-100")}>
            {dataCheckboxRepayment.slice(0, showAll ? dataCheckboxRepayment.length : 3)
              .map((value: any, key: number) => {
              return (
                <FormControlLabel
                  label={value.label}
                  key={key}
                  control={
                    <Checkbox 
                      name={value.label} 
                      checked={value.checked} 
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      onChange={(e: any) => 
                        setDataCheckboxRepayment([
                          ...dataCheckboxRepayment.map((el: any) => {
                            if (el.value === value.value) {
                              return {
                                ...el,
                                checked: e.target.checked
                              }
                            }
                            return el
                          })
                        ])
                      } 
                    />
                  }
                />
              )
            })}
          </FormGroup>
          {!showAll ?
            <Typography className={cx("see-more")} onClick={() => setShowAll(true)}>{instalmentPaymentPlan.repaymentPeriodsOffered.labelSeeMore}<ExpandMoreIcon /></Typography> :
            <Typography className={cx("see-more")} onClick={() => setShowAll(false)}>{instalmentPaymentPlan.repaymentPeriodsOffered.labelLess}<ExpandLessIcon /></Typography>  
          }
        </FormControl>
      </Box>
    )
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography className={cx("title-checkbox")}>{sectionRadios.instalmentPaymentPlan.title}</Typography>
        <Radio
          name={sectionRadios.instalmentPaymentPlan.name}
          listCheckBox={sectionRadios.instalmentPaymentPlan.listRadio}
          radioKey={0}
          // value={formDataLanding.lockIn}
          getValue={(value: any) => {
            setDataRadio((preState: any) => ({
              ...preState,
              instalmentPaymentPlan: {
                ...instalmentPaymentPlan,
                checked: value === 'Yes' ? true : false
              }
            }))
          }}
        />

        {instalmentPaymentPlan.checked && renderListCheckbox()}
      </Grid>
      <Grid item xs={12}>
        <Typography className={cx("title-checkbox")}>{directCurrencyConversion.title}</Typography>
        <Radio
          name={directCurrencyConversion.name}
          listCheckBox={directCurrencyConversion.listRadio}
          radioKey={0}
          // value={formDataLanding.lockIn}
          getValue={(value: any) => {
            setDataRadio((preState: any) => ({
              ...preState,
              directCurrencyConversion: {
                ...directCurrencyConversion,
                checked: value === 'Yes' ? true : false
              }
            }))
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography className={cx("title-checkbox")}>{mailOrder.title}</Typography>
        <Radio
          name={mailOrder.name}
          listCheckBox={mailOrder.listRadio}
          radioKey={0}
          // value={formDataLanding.lockIn}
          getValue={(value: any) => {
            setDataRadio((preState: any) => ({
              ...preState,
              mailOrder: {
                ...mailOrder,
                checked: value === 'Yes' ? true : false
              }
            }))
          }}
        />
      </Grid>
    </Grid>
  )
};

export default OtherServices;