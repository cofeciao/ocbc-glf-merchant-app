import React, { useState } from "react";
import { 
  Box, 
  Checkbox, 
  FormControl, 
  FormControlLabel, 
  FormGroup, 
  FormLabel, 
  Grid, 
  Typography 
} from "@material-ui/core";

// import icons
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import types
import { IServicesApplied } from "./ServicesApplied";

// import components
import GroupRadio from "../GroupRadio";

const OtherServices:React.FC<IServicesApplied.IOtherServices> = ( props )=> {
  // props
  const { 
    cx, 
    dataOtherServices, 
    setDataOtherService, 
    getDataOtherServices 
  } = props;
  
  const {
    instalmentPaymentPlan, 
    directCurrencyConversion, 
    mailOrder 
  } = dataOtherServices;

  const { repaymentPeriodsOffered } = instalmentPaymentPlan

  // States
  const [showAll, setShowAll] = useState<boolean>(false);

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderListCheckbox = () => {
    return (
      <Box className={cx("checkbox-wrapper")}>
        <FormControl margin="normal" className={cx("group-checkbox")} component="fieldset">
          <FormLabel component="legend">{repaymentPeriodsOffered.title}</FormLabel>
          <FormGroup row className={showAll ? cx("w-45") : cx("w-100")}>
            {repaymentPeriodsOffered.listCheckBox.slice(0, showAll ? repaymentPeriodsOffered.listCheckBox.length : 3)
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
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setDataOtherService({
                          ...dataOtherServices,
                          instalmentPaymentPlan: {
                            ...instalmentPaymentPlan,
                            repaymentPeriodsOffered: {
                              ...dataOtherServices.instalmentPaymentPlan.repaymentPeriodsOffered,
                              listCheckBox: [
                                ...repaymentPeriodsOffered.listCheckBox.map((el: any) => {
                                  if (el.value === value.value) {
                                    return {
                                      ...el,
                                      checked: event.target.checked
                                    }
                                  }
                                  return el
                                })
                              ]
                            }
                          }
                        }) 
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

      {/* Will you be offering an Instalment Payment Plan (IPP) for OCBC credit cards? */}
      <Grid item xs={12}>
        <Typography className={cx("title-checkbox")}>{instalmentPaymentPlan.title}</Typography>
        <GroupRadio
          cx={cx}
          name={instalmentPaymentPlan.name}
          value={instalmentPaymentPlan.value}
          listRadio={instalmentPaymentPlan.listRadio}
          onChange={(event) => {
            const { value } = event.target;
            setDataOtherService((preState: any) => ({
              ...preState,
              instalmentPaymentPlan: {
                ...instalmentPaymentPlan,
                value: value,
                checked: value === 'yes' ? true : false
              }
            }))
          }}
        />

        {/* Please select repayment periods offered */}
        {instalmentPaymentPlan.checked && renderListCheckbox()}
      </Grid>

      {/* Will you be offering Direct Currency Conversion (DCC) for Visa/Mastercard? */}
      <Grid item xs={12}>
        <Typography className={cx("title-checkbox")}>{directCurrencyConversion.title}</Typography>
        <GroupRadio
          cx={cx}
          name={directCurrencyConversion.name}
          value={directCurrencyConversion.value}
          listRadio={directCurrencyConversion.listRadio}
          onChange={(event) => {
            const { value } = event.target;
            setDataOtherService((preState: any) => ({
              ...preState,
              directCurrencyConversion: {
                ...directCurrencyConversion,
                value: value,
                checked: value === 'yes' ? true : false
              }
            }))
          }}
        />
      </Grid>

      {/* Will you be offering Mail Order/Telephone Order? */}
      <Grid item xs={12}>
        <Typography className={cx("title-checkbox")}>{mailOrder.title}</Typography>
        <GroupRadio
          cx={cx}
          name={mailOrder.name}
          value={mailOrder.value}
          listRadio={mailOrder.listRadio}
          onChange={(event) => {
            const { value } = event.target;
            setDataOtherService((preState: any) => ({
              ...preState,
              mailOrder: {
                ...mailOrder,
                value: value,
                checked: value === 'yes' ? true : false
              }
            }))
          }}
        />
      </Grid>
    </Grid>
  )
};

export default OtherServices;