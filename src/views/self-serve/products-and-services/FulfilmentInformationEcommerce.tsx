// import modules
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import ImmediateFulfillment from "./ImmediateFulfillment";
import _ from "lodash";
import TooltipDialog from "./TooltipDialog";
import { updateDataListRadio } from "@/utils/utils";
import GroupRadio from "@/components/GroupRadio";

// import constants
import { ERROR_ICON, SELF_SERVE_PAGE } from "@/utils/constants";

// import types

// render UI
const FulfilmentInformationEcommerce: React.FC<any> = (props) => {
  // props
  const { cx, data, register, unregister, errors, setValue, dataRedux } = props;
  const { listRadio } = data;

  // states
  const [valueSelected, setValueSelected] = useState<string>(
    dataRedux.orderFulfilment || listRadio.list[0].value
  );
  const [listOrderFulfilment, setListOrderFulfilment] = useState(
    _.has(dataRedux, "orderFulfilment")
      ? updateDataListRadio(dataRedux.orderFulfilment, listRadio.list)
      : listRadio.list
  );
  const [inputValue, setInputValue] = useState(
    dataRedux.percentageOfProductsNotFulfilledImmediately || ""
  );

  /**
   * Handle unregister if fields are hidden
   */
  useEffect(() => {
    if (!_.isEqual(valueSelected, listRadio.list[1].value)) {
      unregister("Ecom.percentageOfProductsNotFulfilledImmediately", {
        keepDefaultValue: false,
      });
      setInputValue("");
    }
  }, [valueSelected]);

  /**
   * Prevent user typing non-number
   * @param e
   */
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value.replace(/\D/g, ""));
  }

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
          {!_.isEmpty(data.textField.description) && (
            <Typography
              className={cx(
                "fulfilment-information-description input-field-description"
              )}
            >
              {data.textField.description}
            </Typography>
          )}

          {/* {TextField} */}
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              label={data.textField.label}
              variant="filled"
              type="text"
              value={inputValue}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {SELF_SERVE_PAGE.PERCENT_CHARACTERS}
                  </InputAdornment>
                ),
              }}
              error={
                _.has(errors, "Ecom") &&
                _.has(
                  errors.Ecom,
                  "percentageOfProductsNotFulfilledImmediately"
                ) &&
                !_.isEqual(
                  errors.Ecom.percentageOfProductsNotFulfilledImmediately.type,
                  "required"
                ) &&
                true
              }
              helperText={
                _.has(errors, "Ecom") &&
                _.has(
                  errors.Ecom,
                  "percentageOfProductsNotFulfilledImmediately"
                )
                  ? errors.Ecom.percentageOfProductsNotFulfilledImmediately
                      .message
                  : ""
              }
              className={cx("percentage-input-field")}
              {...register("Ecom.percentageOfProductsNotFulfilledImmediately", {
                required: true,
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^\b(0|[1-9][0-9]?|100)\b$/,
                  message: `${ERROR_ICON} ${data.textField.helperText}`,
                },
                onChange: handleChange,
              })}
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
          setValue={setValue}
        />
      }
    </Box>
  );
};
export default FulfilmentInformationEcommerce;
