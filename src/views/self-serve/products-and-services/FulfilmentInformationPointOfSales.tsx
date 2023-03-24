// import modules
import { Radio } from "@sectionsg/orc";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import FulfillmentOverAPeriodOfTime from "./FulfillmentOverAPeriodOfTime";
import _ from "lodash";
import TooltipDialog from "./Tooltip-dialog";
import GroupRadio from "@/components/GroupRadio";
import { updateDataListRadio } from "@/utils/utils";

// import types

// render UI
const FulfilmentInformationPointOfSales: React.FC<any> = (props) => {
  //props
  const { cx, data, register, unregister, errors, setValue, dataRedux } = props;
  const { listRadio } = data;

  //states
  const [valueSelected, setValueSelected] = useState<string>(listRadio.list[0].value);
  const [listOrderFulfilment, setListOrderFulfilment] = useState(
    listRadio.list
  );

  /**
   * Check data from redux and dump data into fields
   */
  useEffect(() => {
    if (
      _.has(dataRedux, "orderFulfilment") &&
      !_.isEmpty(dataRedux.orderFulfilment)
    ) {
      setListOrderFulfilment(
        updateDataListRadio(dataRedux.orderFulfilment, listOrderFulfilment)
      );
      setValueSelected(listOrderFulfilment[1].text);
    }
  }, [dataRedux]);

  return (
    <Box className={cx("fulfilment-information-wrapper")}>
      {/* {How quickly does your business fulfil these products and/or services?} */}
      <Grid item xs={12}>
        {/* {Description} */}
        {_.has(listRadio, "description") && (
          <Typography
            component="div"
            className={cx(
              "fulfilment-information-description sub-section-description d-flex mb-16"
            )}
          >
            {listRadio.description}
            <TooltipDialog />
          </Typography>
        )}

        {/* {Radio Group} */}
        {!_.isEmpty(listOrderFulfilment) && (
          <GroupRadio
            cx={cx}
            name="orderFulfilment"
            value={valueSelected}
            isRow={false}
            listRadio={listRadio.list}
            onChange={(event) => {
              const { value } = event.target;
              setValue("POS.orderFulfilment", value);
              setValueSelected(value)
            }}
          />
        )}
      </Grid>

      {/* {Fulfillment Over A Period Of Time option} */}
      {_.isEqual(valueSelected, listOrderFulfilment[1].text) && (
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
