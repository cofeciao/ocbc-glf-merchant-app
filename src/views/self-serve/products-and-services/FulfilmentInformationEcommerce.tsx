// import modules
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { updateDataListRadio } from "@/utils/utils";

// import constants
import { SELF_SERVE_PAGE } from "@/utils/constants";

// import types
import { IProductsAndServices } from "./ProductsAndServices";

// import components
import PercentageTextField from "@/components/PercentageTextField";
import { Box, Grid, Typography } from "@material-ui/core";
import TooltipDialog from "./TooltipDialog";
import GroupRadio from "@/components/GroupRadio";
import ImmediateFulfillment from "./ImmediateFulfillment";

// render UI
const FulfilmentInformationEcommerce: React.FC<
  IProductsAndServices.IFulfilmentInformationSection
> = (props) => {
  // props
  const {
    cx,
    data,
    register,
    unregister,
    errors,
    setError,
    clearErrors,
    setValue,
    dataRedux,
    control,
  } = props;
  const { listRadio, textField } = data;
  const { PERCENT_CHARACTERS } = SELF_SERVE_PAGE;

  // states
  const [valueSelected, setValueSelected] = useState<string>(
    dataRedux.orderFulfilment || listRadio.list[0].value
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
    if (!_.isEqual(valueSelected, listRadio.list[1].value)) {
      unregister("Ecom.percentageOfProductsNotFulfilledImmediately");
    }
  }, [valueSelected]);

  return (
    <Box className={cx("fulfilment-information-wrapper")}>
      {/* {How quickly does your business fulfil these products and/or services?} */}
      <Grid item xs={12}>
        {/* {Description} */}
        {!_.isEmpty(listRadio.description) && (
          <Typography
            component="div"
            className={cx(
              "fulfilment-information-description input-field-description d-flex"
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
              setValue("Ecom.orderFulfilment", value);
              setValueSelected(value);
              setListOrderFulfilment(
                updateDataListRadio(value, listOrderFulfilment)
              );
            }}
          />
        )}
      </Grid>

      {/* {Percentage of products/services not fulfilled immediately} */}
      {_.isEqual(valueSelected, listOrderFulfilment[1].value) && (
        <Grid item xs={12} className={cx("mt-dt-40")}>
          {/* {Description} */}
          {!_.isEmpty(textField.description) && (
            <Typography
              className={cx(
                "fulfilment-information-description input-field-description"
              )}
            >
              {textField.description}
            </Typography>
          )}

          {/* {TextField} */}
          <Grid item xs={12} md={5}>
            <PercentageTextField
              name="Ecom.percentageOfProductsNotFulfilledImmediately"
              adornment={PERCENT_CHARACTERS}
              errors={errors}
              register={register}
              required={false}
              dataRedux={_.get(
                dataRedux,
                "percentageOfProductsNotFulfilledImmediately"
              )}
              {...textField}
            />
          </Grid>
        </Grid>
      )}

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
          setError={setError}
          clearErrors={clearErrors}
          setValue={setValue}
          control={control}
        />
      }
    </Box>
  );
};
export default FulfilmentInformationEcommerce;
