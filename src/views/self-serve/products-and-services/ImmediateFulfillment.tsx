// import modules
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Controller } from "react-hook-form";

// import types
import { ICheckBox } from "@/components/GroupCheckBox/GroupCheckBox";
import { IProductsAndServices } from "./ProductsAndServices";

// import components
import { Box, Grid, Typography } from "@material-ui/core";
import GroupRadio from "@/components/GroupRadio";
import GroupCheckBox from "@/components/GroupCheckBox";
import Select from "@/components/Select";

// render UI
const ImmediateFulfillment: React.FC<
  IProductsAndServices.IImmediateFulfillment
> = (props) => {
  // props
  const { cx, data, setValue, register, dataRedux, control } = props;
  const { listCheckbox, listDropdown, listRadioSecondary } = data;

  // State
  const [productDelivery, setProductDelivery] = useState<string>(
    dataRedux.productDelivery || listRadioSecondary.list[0].value
  );
  const [listDataCheckbox, setListDataCheckbox] = useState<ICheckBox[]>(
    dataRedux.productDeliveredFrom || listCheckbox.list
  );

  return (
    <Box className={cx("products-and-services-form-wrapper")}>
      <Grid container className={cx("mt-dt-40")}>
        {/* {Where will your products come from?} */}
        <Grid item xs={12}>
          {_.has(listCheckbox, "description") && (
            <Typography
              className={cx(
                "fulfilment-information-description input-field-description"
              )}
            >
              {listCheckbox.description}
            </Typography>
          )}

          {!_.isEmpty(listDataCheckbox) && (
            <Controller
              name="Ecom.productDeliveredFrom"
              control={control}
              render={({ field }) => (
                <GroupCheckBox
                  name="Ecom.productDeliveredFrom"
                  listCheckbox={listDataCheckbox}
                  register={register}
                  required={false}
                  onBlur={field.onBlur}
                  onChange={field.onBlur}
                  getValue={(value: ICheckBox[]) => {
                    setListDataCheckbox(value);
                    setValue("Ecom.productDeliveredFrom", value);
                  }}
                />
              )}
            />
          )}
        </Grid>

        {/* {Approximate delivery time to customers} */}
        <Grid item xs={12}>
          {/* {Description} */}
          <Grid item xs={12} md={6} lg={5}>
            {!_.isEmpty(listDropdown.description) && (
              <Typography
                className={cx(
                  "fulfilment-information-description input-field-description"
                )}
              >
                {listDropdown.description}
              </Typography>
            )}

            {/* {Dropdown} */}
            {!_.isEmpty(listDropdown) && (
              <Select
                fullWidth
                required={false}
                register={register}
                label={listDropdown.placeholder}
                listSelect={listDropdown.list}
                name={`Ecom.deliveryTimeToCustomers`}
                defaultValue={_.get(dataRedux, `deliveryTimeToCustomers`)}
              />
            )}
          </Grid>
        </Grid>

        {/* {How will your products be delivered?} */}
        <Grid item xs={12}>
          {/* {Description} */}
          {_.has(listRadioSecondary, "description") && (
            <Typography
              className={cx(
                "fulfilment-information-description input-field-description"
              )}
            >
              {listRadioSecondary.description}
            </Typography>
          )}

          {/* {Radio group} */}
          {!_.isEmpty(listRadioSecondary.list) && (
            <GroupRadio
              cx={cx}
              name="productDelivery"
              value={productDelivery}
              isRow={false}
              listRadio={listRadioSecondary.list}
              onChange={(event) => {
                const { value } = event.target;
                setValue(
                  "Ecom.productDelivery",
                  value === listRadioSecondary.list[0].value
                    ? listRadioSecondary.list[0].value
                    : listRadioSecondary.list[1].value
                );
                setProductDelivery(value);
              }}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default ImmediateFulfillment;
