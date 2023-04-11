import { Box, Grid, InputAdornment, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// import types
import { IFeesRates } from "./FeesRates";
import { STEP_RM } from "@/utils/constants-rm";


const Fees: React.FC<IFeesRates.IFees> = (props) => {
  // props
  const { cx, form } = props;
  const { setValue, register, watch } = form;

  // constant
  const {
    LIST_STEP: {
      feesAndRates: {
        labelStartAdornment,
        section: {
          fees: {
            titleFees,
            annual,
            oneTimeSetupFee,
            perDomesticTransaction, 
            perInternationTransaction,
            tokenisation,
            otherFees,
            descriptionFees
          },
        }
      },
    },
  } = STEP_RM;

  // states
  const [isSecurityDeposit, setIsSecurityDeposit] = useState<any>({
    annual: false,
    oneTimeSetupFee: false,
    perDomesticTransaction: false,
    perInternationTransaction: false,
    tokenisation: false,
    otherFees: false,
  });

  /**
   * Handle numeric value from inputs
   * @param event
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    // Change value to thousand seperator, eg: 1000000 => 1,000,000
    const sanitizedText = value.replace(/[^0-9]/g, "");
    const formattedText = sanitizedText.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setValue(name, formattedText);
  };

  /**
  * render TextField SGD
  */
  const renderTextFieldSGD = (name: string, label: string) => {
    return (
      <TextField
        fullWidth
        variant="filled"
        label={label}
        name={name}
        InputProps={
          isSecurityDeposit[name] || watch()[name]
            ? {
                startAdornment: (
                  <InputAdornment position="start">
                    {labelStartAdornment}
                  </InputAdornment>
                ),
              }
            : {}
        }
        onFocus={() => {
          setIsSecurityDeposit({
            ...isSecurityDeposit,
            [name]: true
          })
        }}
        {...register(name, {
          required: true,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => handleChange(event),
          onBlur: (e: any) => {
            e.target.value === ""
              ? setIsSecurityDeposit({
                ...isSecurityDeposit,
                [name]: false
              })
              : null;
          },
        })}
      />
    )
  }

  return (
    <Box className={cx("fees-form")}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {renderTextFieldSGD(annual.name, annual.label)}
        </Grid>
        <Grid item xs={6}>
          {renderTextFieldSGD(oneTimeSetupFee.name, oneTimeSetupFee.label)}
        </Grid>
        <Grid item xs={6}>
          {renderTextFieldSGD(perDomesticTransaction.name, perDomesticTransaction.label)}
        </Grid>
        <Grid item xs={6}>
          {renderTextFieldSGD(perInternationTransaction.name, perInternationTransaction.label)}
        </Grid>
        <Grid item xs={6}>
          {renderTextFieldSGD(tokenisation.name, tokenisation.label)}
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          {renderTextFieldSGD(otherFees.name, otherFees.label)}
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name={descriptionFees.name}
            label={descriptionFees.label}
            id={uuidv4()}
            variant="filled"
            {...register(descriptionFees.name, {
              required: true,
            })}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Fees;