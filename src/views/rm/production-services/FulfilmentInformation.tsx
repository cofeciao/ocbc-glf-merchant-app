// import modules
import {
  Box,
  Typography,
  TextField,
  Grid,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import React, { ChangeEvent } from "react";
import { IProductionServices } from "./ProductionServices";
import _ from "lodash";
import GroupRadio from "@/components/GroupRadio";
import TooltipDialog from "@/views/self-serve/products-and-services/TooltipDialog";

// import icons
import ExpandMore from "@material-ui/icons/ExpandMore";

// import contants
import { STEP_RM } from "@/utils/constants-rm";

const FulfilmentInformation: React.FC<IProductionServices.IBusinessOffering> = (
  props
) => {
  const {
    cx,
    paramsBusinessService,
    setParamsBusinessService,
    dataRedux,
    register,
  } = props;
  const { LIST_RADIO_FULFILMENT_INFORMATION, LIST_INDICATE_DURATION } = STEP_RM;
  const {
    LIST_STEP: {
      productAndService: {
        section: { fulfilmentInformation },
      },
    },
  } = STEP_RM;

  return (
    <Box className={cx("business-information")}>
      {/* {Description} */}
      <Typography
        component="div"
        className={cx(
          "sub-section-description",
          "title-fulfilment-information"
        )}
      >
        {fulfilmentInformation.description}
        <TooltipDialog />
      </Typography>

      {/* {GroupRadio} */}
      <GroupRadio
        name="refundPolicy"
        isRow={false}
        listRadio={LIST_RADIO_FULFILMENT_INFORMATION}
        value={paramsBusinessService.quicklyBussiness}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setParamsBusinessService({
            ...paramsBusinessService,
            quicklyBussiness: e.target.value,
          });
        }}
        cx={cx}
      />

      {/* {Options} */}
      {paramsBusinessService.quicklyBussiness ===
        LIST_RADIO_FULFILMENT_INFORMATION[1].value && (
        <Box className={cx("fulfillment-group")}>
          <Grid container spacing={3}>
            {/* {Please indicate duration} */}
            <Grid item xs={12}>
              {/* {Description} */}
              <Typography
                className={
                  cx("sub-section-description")
                }
              >
                {fulfilmentInformation.descriptionSelect}
              </Typography>

              {/* {Select} */}
              <Grid item xs={5}>
                <FormControl
                  variant="filled"
                  className={cx("company-type-select")}
                  fullWidth
                >
                  <InputLabel>{fulfilmentInformation.labelSelect}</InputLabel>
                  <Select
                    fullWidth
                    IconComponent={ExpandMore}
                    placeholder={fulfilmentInformation.labelSelect}
                    defaultValue={
                      _.has(dataRedux, "duration")
                        ? dataRedux.authorised_person_details.salutation
                        : ""
                    }
                    {...register("duration", {
                      required: true,
                    })}
                  >
                    {_.map(LIST_INDICATE_DURATION, (item, index) => {
                      return (
                        <MenuItem key={index} value={item.value}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* {Percentage of products/services not fulfilled immediately} */}
            <Grid item xs={12}>
              {/* {Description} */}
              <Typography
                className={
                  cx("sub-section-description")
                }
              >
                {fulfilmentInformation.descriptionTextField}
              </Typography>

              {/* {TextField} */}
              <Grid item xs={5}>
                <TextField
                  className={cx("textfield-percentage")}
                  fullWidth
                  label={fulfilmentInformation.labelTextField}
                  defaultValue={
                    _.has(dataRedux, "percentageOfProductsNotFulfilledImmediately")
                      ? dataRedux.name
                      : ""
                  }
                  variant="filled"
                  {...register("percentageOfProductsNotFulfilledImmediately", {
                    required: true,
                  })}
                  type="number"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default FulfilmentInformation;
