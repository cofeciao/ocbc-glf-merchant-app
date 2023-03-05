// import modules
import { Radio } from "@sectionsg/orc";
import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import _ from "lodash";
import FulfillmentOverAPeriodOfTime from "./FulfillmentOverAPeriodOfTime";
import ImmediateFulfillment from "./ImmediateFulfillment";

// import constant
import { SELF_SERVE_PAGE } from "@/utils/constants";

// import types

// render UI
const FulfilmentInformationEcommerce: React.FC<any> = (props) => {
  const {
    LIST_RADIO_HOW_QUICKLY_DOES_YOUR_BUSINESS_FULFIL_THESE_PRODUCTS_AND_SERVICES,
  } = SELF_SERVE_PAGE;
  const { cx, register, errors, setValue, variant = "point-of-sales" } = props;
  const [valueSelected, setValueSelected] = useState();

  return (
    <Box className={cx("fulfilment-information-wrapper")}>
      <Grid item xs={12}>
        {/* {Description} */}
        {_.has(
          LIST_RADIO_HOW_QUICKLY_DOES_YOUR_BUSINESS_FULFIL_THESE_PRODUCTS_AND_SERVICES,
          "description"
        ) && (
          <Typography
            className={cx(
              "fulfilment-information-description input-field-description"
            )}
          >
            {
              LIST_RADIO_HOW_QUICKLY_DOES_YOUR_BUSINESS_FULFIL_THESE_PRODUCTS_AND_SERVICES.description
            }
          </Typography>
        )}

        {/* {Radio Group} */}
        {!_.isEmpty(
          SELF_SERVE_PAGE
            .LIST_RADIO_HOW_QUICKLY_DOES_YOUR_BUSINESS_FULFIL_THESE_PRODUCTS_AND_SERVICES
            .listRadio
        ) && (
          <Radio
            name="lockIn"
            listCheckBox={
              LIST_RADIO_HOW_QUICKLY_DOES_YOUR_BUSINESS_FULFIL_THESE_PRODUCTS_AND_SERVICES.listRadio
            }
            radioKey={0}
            vertical
            getValue={(value: any) => {
              setValue("orderFulfilment", value);
              setValueSelected(value.toLowerCase().replace(/ /g, "-")); // get name string to value
            }}
          />
        )}
      </Grid>

      {/* {Immediate Fulfillment option} */}
      {
        <ImmediateFulfillment
          cx={cx}
          variant={valueSelected}
          register={register}
          errors={errors}
          setValue={setValue}
        />
      }

      {/* {Fulfillment Over A Period Of Time option} */}
      {_.isEqual(valueSelected, "fulfillment-over-a-period-of-time") && (
        <FulfillmentOverAPeriodOfTime
          cx={cx}
          variant={variant}
          register={register}
          setValue={setValue}
          errors={errors}
        />
      )}
    </Box>
  );
};
export default FulfilmentInformationEcommerce;
