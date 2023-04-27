// import modules
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { updateDataListRadio } from "@/utils/utils";

// import types
import { IProductsAndServices } from "./ProductsAndServices";

// import components
import GroupRadio from "@/components/GroupRadio";
import { Box, Grid, Typography } from "@material-ui/core";
import TooltipDialog from "./TooltipDialog";
import FulfillmentOverAPeriodOfTime from "./FulfillmentOverAPeriodOfTime";

// render UI
const FulfilmentInformationPointOfSales: React.FC<
  IProductsAndServices.IFulfilmentInformationSection
> = (props) => {
  //props
  const { cx, data, register, unregister, errors, setValue, dataRedux } = props;
  const { listRadio } = data;

  //states
  const [valueSelected, setValueSelected] = useState<string>(
    _.has(dataRedux, "orderFulfilment")
      ? dataRedux.orderFulfilment
      : listRadio.list[0].value
  );
  const [listOrderFulfilment, setListOrderFulfilment] = useState(
    _.has(dataRedux, "orderFulfilment")
      ? updateDataListRadio(dataRedux.orderFulfilment, listRadio.list)
      : listRadio.list
  );

  /**
   * Handle unregister if fields are hidden
   */
  useEffect(() => {
    if (!_.isEqual(valueSelected, listRadio.list[1].label)) {
      unregister("Pos.duration");
      unregister("Pos.percentageOfProductsNotFulfilledImmediately");
    }
  }, [valueSelected]);

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
            listRadio={listOrderFulfilment}
            onChange={(event) => {
              const { value } = event.target;
              setValue("Pos.orderFulfilment", value);
              setValueSelected(value);
              setListOrderFulfilment(
                updateDataListRadio(value, listOrderFulfilment)
              );
            }}
          />
        )}
      </Grid>

      {/* {Fulfillment Over A Period Of Time option} */}
      {_.isEqual(valueSelected, listOrderFulfilment[1].value) && (
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
