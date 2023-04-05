// import modules
import {
  Box,
  FormControlLabel,
  RadioGroup,
  Typography,
  Radio,
  TextField,
  Grid,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import React, { useState } from "react";
import { IProductionServices } from "./ProductionServices";
import _ from "lodash";

// import icons
import IconInformation from "@/assets/images/icon-infomation.svg";

// import contants
import { ERROR_ICON, STEP_RM } from "@/utils/constants-rm";

const BusinessOffering: React.FC<IProductionServices.IBusinessOffering> = (
  props
) => {
  const { cx, register, errors, dataRedux } = props;
  const {
    LIST_STEP: {
      productAndService: {
        section: { businessOffering },
      },
    },
  } = STEP_RM;
  const maxLength = 180;
  const [counter, setCounter] = useState<number>(
    _.has(dataRedux, "typeOfProductAndService")
      ? dataRedux.typeOfProductAndService.length
      : 0
  );

  return (
    <Box className={cx("business-offering-wrapper")}>
      {/* {Description} */}
      <Typography className={cx("title mb-16")}>
        {businessOffering.description}
      </Typography>

      {/* {TextField} */}
      <Box className={cx("main-input-field")}>
        <TextField
          fullWidth
          multiline
          rowsMax={3}
          label={
            <Box width="130%" className={cx("d-flex space-between")}>
              <span>{businessOffering.label}</span>
              <span id={cx("counter")}>
                {counter > maxLength ? maxLength : counter}/{maxLength}
              </span>
            </Box>
          }
          variant="filled"
          error={
            _.has(errors, "typeOfProductAndService") &&
            !_.isEqual(errors.typeOfProductAndService.type, "required") &&
            true
          }
          defaultValue={
            _.has(dataRedux, "typeOfProductAndService")
              ? dataRedux.typeOfProductAndService
              : ""
          }
          helperText={
            _.has(errors, "typeOfProductAndService") &&
            !_.isEqual(errors.typeOfProductAndService.type, "required")
              ? errors.typeOfProductAndService.message
              : businessOffering.egText
          }
          {...register(`typeOfProductAndService`, {
            required: true,
            pattern: {
              // eslint-disable-next-line no-useless-escape
              value: /^.{0,180}$/,
              message: `${ERROR_ICON} ${businessOffering.helperText}`,
            },
            onChange: (e: any) => {
              setCounter(e.target.value.length);
            },
          })}
        />
      </Box>
    </Box>
  );
};

export default BusinessOffering;
