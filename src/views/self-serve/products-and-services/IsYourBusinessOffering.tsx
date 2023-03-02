// import modules
import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";

// render UI
const IsYourBusinessOffering: React.FC<any> = (props) => {
  const { cx, data } = props;

  return (
    <Box className={cx("main-input-field")}>
      {/* {Text field} */}
      <Grid item xs={12}>
        {data.mainTextFieldLabel && (
          <Box className={cx("main-input-field")}>
            <TextField
              fullWidth
              id={uuidv4()}
              label={data.mainTextFieldLabel}
            />
          </Box>
        )}
      </Grid>

      <Grid item xs={12}>
        <>
          {data.listRadioDescription && (
            <Typography className={cx("sub-section-description")}>
              {data.listRadioDescription}
            </Typography>
          )}

          {!!data.listRadio.length && (
            <RadioGroup defaultValue={data.listRadio[0].text}>
              {data.listRadio.map((radio: any, index: number) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={radio.text.toLowerCase()}
                    control={<Radio />}
                    label={radio.text}
                  />
                );
              })}
            </RadioGroup>
          )}
        </>
      </Grid>
    </Box>
  );
};
export default IsYourBusinessOffering;
