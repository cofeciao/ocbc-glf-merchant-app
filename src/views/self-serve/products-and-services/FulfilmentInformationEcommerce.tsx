// import modules
import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import ImmediateFulfillment from "./ImmediateFulfillment";
import _ from "lodash";
import TooltipDialog from "./Tooltip-dialog";
import GroupRadio from "@/components/GroupRadio";

// import types

// render UI
const FulfilmentInformationEcommerce: React.FC<any> = (props) => {
  // props
  const { cx, data, register, unregister, errors, setValue, dataRedux } = props;
  const { listRadio } = data;
  
  //states
  const [valueSelected, setValueSelected] = useState<string>(listRadio.list[0].value);

  return (
    <Box className={cx("fulfilment-information-wrapper")}>
      {/* {How quickly does your business fulfil these products and/or services?} */}
      <Grid item xs={12}>
        {/* {Description} */}
        {!_.isEmpty(listRadio.description) && (
          <Typography
            className={cx(
              "fulfilment-information-description input-field-description d-flex"
            )}
          >
            {listRadio.description}
            <TooltipDialog />
          </Typography>
        )}

        {/* {Radio Group} */}
        {!_.isEmpty(listRadio.list) && (
          <GroupRadio
            cx={cx}
            name="orderFulfilment"
            value={valueSelected}
            isRow={false}
            listRadio={listRadio.list}
            onChange={(event) => {
              const { value } = event.target;
              setValue("Ecom.orderFulfilment", value);
              setValueSelected(value)
            }}
          />
        )}
      </Grid>

      {/* {Immediate Fulfillment option} */}
      {
        <ImmediateFulfillment
          cx={cx}
          data={data}
          dataRedux={dataRedux}
          variant={valueSelected}
          register={register}
          unregister={unregister}
          errors={errors}
          setValue={setValue}
        />
      }
    </Box>
  );
};
export default FulfilmentInformationEcommerce;
