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
  const {instalment_payment_plan, direct_currency_conversion, mail_order } = sectionRadios;

  // States
  const [showAll, setShowAll] = useState<boolean>(false);

  const renderListCheckbox = () => {
    return (
      <Box className={cx("checkbox-wrapper")}>
        <FormControl margin="normal" className={cx("group-checkbox")} component="fieldset">
          <FormLabel component="legend">{instalment_payment_plan.repayment_periods_offered.title}</FormLabel>
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
            <Typography className={cx("see-more")} onClick={() => setShowAll(true)}>Show more repayment periods <ExpandMoreIcon /></Typography> :
            <Typography className={cx("see-more")} onClick={() => setShowAll(false)}>Show less <ExpandLessIcon /></Typography>  
          }
        </FormControl>
      </Box>
    )
  }
  

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography className={cx("title-checkbox")}>{sectionRadios.instalment_payment_plan.title}</Typography>
        <Radio
          name={sectionRadios.instalment_payment_plan.name}
          listCheckBox={sectionRadios.instalment_payment_plan.listRadio}
          radioKey={0}
          // value={formDataLanding.lockIn}
          getValue={(value: any) => {
            setDataRadio((preState: any) => ({
              ...preState,
              instalment_payment_plan: {
                ...instalment_payment_plan,
                checked: value === 'Yes' ? true : false
              }
            }))
          }}
        />

        {instalment_payment_plan.checked && renderListCheckbox()}
      </Grid>
      <Grid item xs={12}>
        <Typography className={cx("title-checkbox")}>{direct_currency_conversion.title}</Typography>
        <Radio
          name={direct_currency_conversion.name}
          listCheckBox={direct_currency_conversion.listRadio}
          radioKey={0}
          // value={formDataLanding.lockIn}
          getValue={(value: any) => {
            setDataRadio((preState: any) => ({
              ...preState,
              direct_currency_conversion: {
                ...direct_currency_conversion,
                checked: value === 'Yes' ? true : false
              }
            }))
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography className={cx("title-checkbox")}>{mail_order.title}</Typography>
        <Radio
          name={mail_order.name}
          listCheckBox={mail_order.listRadio}
          radioKey={0}
          // value={formDataLanding.lockIn}
          getValue={(value: any) => {
            setDataRadio((preState: any) => ({
              ...preState,
              mail_order: {
                ...mail_order,
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