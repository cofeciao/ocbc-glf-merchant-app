// import modules
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  InputAdornment,
  Input,
  TextField,
} from "@material-ui/core";

// render UI
const IsYourSalesForecast: React.FC<any> = (props) => {
  const { cx, data } = props;
  const [key, setKey] = useState<number>(0);

  return (
    <Box className={cx("sub-section-description")}>
      <Grid item xs={12}>
        <Typography className={cx("sub-section-description")}>
          {data.listRadioDescription}
        </Typography>

        <Grid item xs={3}>
          <TextField
            key={key}
            name="numberformat"
            id="formatted-numberformat-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">SGD</InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        {data.listRadioDescription && <Typography className={cx("sub-section-description")}>
          {data.listRadioDescription}
        </Typography>}

        <Grid item xs={3}>
          <TextField
            key={key}
            name="numberformat"
            id="formatted-numberformat-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">SGD</InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default IsYourSalesForecast;
