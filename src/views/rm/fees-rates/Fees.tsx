import { Box, Grid, TextField } from "@material-ui/core";
import React from "react";
import { v4 as uuidv4 } from "uuid";

// import types
import { IFeesRates } from "./FeesRates";


const Fees: React.FC<IFeesRates.IFees> = (props) => {
  const { cx } = props;
  return (
    <Box className={cx("fees-form")}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="annual"
            // defaultValue={paramsFeeRates.refundable_fees}
            label="Annual"
            id={uuidv4()}
            // label={name.label}
            variant="filled"
            // onChange={(e: any) => setParamsFeeRates({...paramsFeeRates, refundableFees: e.target.value})}
            // {...register("authorised_person_details.name", {
            //   required: true,
            // })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="one_time_setup"
            // defaultValue={paramsFeeRates.refundable_fees}
            label="One time setup (to vendor)"
            id={uuidv4()}
            // label={name.label}
            variant="filled"
            // onChange={(e: any) => setParamsFeeRates({...paramsFeeRates, refundableFees: e.target.value})}
            // {...register("authorised_person_details.name", {
            //   required: true,
            // })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="per_domestic_transaction"
            // defaulValue={paramsFeeRates.refundable_fees}
            label="Per domestic transaction"
            id={uuidv4()}
            // label={name.label}
            variant="filled"
            // onChange={(e: any) => setParamsFeeRates({...paramsFeeRates, refundableFees: e.target.value})}
            // {...register("authorised_person_details.name", {
            //   required: true,
            // })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="per_international_transaction"
            // defaultValue={paramsFeeRates.refundable_fees}
            label="Per international transaction"
            id={uuidv4()}
            // label={name.label}
            variant="filled"
            // onChange={(e: any) => setParamsFeeRates({...paramsFeeRates, refundableFees: e.target.value})}
            // {...register("authorised_person_details.name", {
            //   required: true,
            // })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="tokenisation"
            // defaultValue={paramsFeeRates.refundable_fees}
            label="Tokenisation"
            id={uuidv4()}
            // label={name.label}
            variant="filled"
            // onChange={(e: any) => setParamsFeeRates({...paramsFeeRates, refundableFees: e.target.value})}
            // {...register("authorised_person_details.name", {
            //   required: true,
            // })}
          />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="otherFees"
            // defaultValue={paramsFeeRates.refundable_fees}
            label="Other fees"
            id={uuidv4()}
            // label={name.label}
            variant="filled"
            // onChange={(e: any) => setParamsFeeRates({...paramsFeeRates, refundableFees: e.target.value})}
            // {...register("authorised_person_details.name", {
            //   required: true,
            // })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="description"
            // defaultValue={paramsFeeRates.refundable_fees}
            label="Description for other fees (optional)"
            id={uuidv4()}
            // label={name.label}
            variant="filled"
            // onChange={(e: any) => setParamsFeeRates({...paramsFeeRates, refundableFees: e.target.value})}
            // {...register("authorised_person_details.name", {
            //   required: true,
            // })}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Fees;