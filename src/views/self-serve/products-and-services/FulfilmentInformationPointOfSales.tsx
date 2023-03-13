// import modules
import { Radio } from "@sectionsg/orc";
import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import FulfillmentOverAPeriodOfTime from "./FulfillmentOverAPeriodOfTime";
import _ from "lodash";

// import types

// render UI
const FulfilmentInformationPointOfSales: React.FC<any> = (props) => {
  const {
    cx,
    data,
    register,
    unregister,
    errors,
    setValue,
    dataRedux,
  } = props;
  const { listRadio } = data;
  const [valueSelected, setValueSelected] = useState();

  return (
    <Box className={cx("fulfilment-information-wrapper")}>
      <Grid item xs={12}>
        {/* {Description} */}
        {_.has(listRadio, "description") && (
          <Typography
            className={cx(
              "fulfilment-information-description input-field-description"
            )}
          >
            {listRadio.description}
          </Typography>
        )}

        {/* {Radio Group} */}
        {!_.isEmpty(listRadio.list) && (
          <Radio
            name="lockIn"
            listCheckBox={listRadio.list}
            radioKey={0}
            vertical
            getValue={(value: any) => {
              setValue("POS.orderFulfilment", value);
              setValueSelected(value.toLowerCase().replace(/ /g, "-")); // get name string to value
            }}
          />
        )}
      </Grid>

      {/* {Fulfillment Over A Period Of Time option} */}
      {_.isEqual(valueSelected, "fulfillment-over-a-period-of-time") && (
        <FulfillmentOverAPeriodOfTime
          cx={cx}
          data={data}
          dataRedux={dataRedux}
          variant={valueSelected}
          register={register}
          unregister={unregister}
          setValue={setValue}
          errors={errors}
        />
      )}
    </Box>
  );
};
export default FulfilmentInformationPointOfSales;
