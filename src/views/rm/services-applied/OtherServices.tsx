import React, { useState } from "react";
import { 
  Box, 
  Checkbox, 
  FormControl, 
  FormControlLabel, 
  FormGroup, 
  FormHelperText, 
  FormLabel, 
  Grid, 
  Typography 
} from "@material-ui/core";

// import icons
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import images
import IconCheckbox from "@/assets/images/icon-checkbox.svg";
import IconCheckboxBlack from "@/assets/images/icon-checkedbox-black.svg";
import IconWarning from "@/assets/images/icon-warning.svg";

// import types
import { IServicesApplied } from "./ServicesApplied";

// import constants
import { STEP_RM } from "@/utils/constants-rm";

// import components
import GroupRadio from "@/components/GroupRadio";

const OtherServices:React.FC<IServicesApplied.IOtherServices> = ( props )=> {
  // props
  const { 
    cx, 
    dataOtherServices, 
    setDataOtherService,
    validateListCheckboxMonth,
    setValidateListCheckboxMonth
  } = props;
  const { LIST_STEP: { LIST_RADIO_YES_NO } } = STEP_RM

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
          <FormGroup row className={showAll ? cx("w-59") : cx("w-116")}>
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
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setValidateListCheckboxMonth(false);
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
                        }})}
                      }
                      icon={<img src={IconCheckbox} alt="icon checkbox" />}
                      checkedIcon={<img src={IconCheckboxBlack} alt="icon checkedbox black" />}
                    />
                  }
                />
              )
            })}
          </FormGroup>
          {!showAll ?
            <Typography className={cx("see-more", validateListCheckboxMonth && "mb-16")} onClick={() => setShowAll(true)}>{instalmentPaymentPlan.repaymentPeriodsOffered.labelSeeMore}<ExpandMoreIcon /></Typography> :
            <Typography className={cx("see-more", validateListCheckboxMonth && "mb-16")} onClick={() => setShowAll(false)}>{instalmentPaymentPlan.repaymentPeriodsOffered.labelLess}<ExpandLessIcon /></Typography>  
          }
          {validateListCheckboxMonth ? (
            <FormHelperText>
              <img src={IconWarning} alt="icon warning" />
              {repaymentPeriodsOffered.errorText}
            </FormHelperText>
          ) : null}
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
          name="instalmentPaymentPlan"
          value={instalmentPaymentPlan.value}
          listRadio={LIST_RADIO_YES_NO}
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
          name="directCurrencyConversion"
          value={directCurrencyConversion.value}
          listRadio={LIST_RADIO_YES_NO}
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
          name="mailOrder"
          value={mailOrder.value}
          listRadio={LIST_RADIO_YES_NO}
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