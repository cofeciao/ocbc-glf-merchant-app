// import modules
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { SELF_SERVE_PAGE } from "@/utils/constants";
import _ from "lodash";
import { updateDataListRadio } from "@/utils/utils";
import GroupRadio from "@/components/GroupRadio";
import GroupCheckBox from "@/components/GroupCheckBox";
import { Controller } from "react-hook-form";

// import style
import styles from "./BusinessDetails.scss";

// import types
import { IBusinessDetails } from "./BusinessDetails";
import { ICheckBox } from "@/components/GroupCheckBox/GroupCheckBox";

// render UI
const OtherInformation: React.FC<IBusinessDetails.IOtherInformation> = (
  props
) => {
  const { sections, setValue, register, dataRedux, control } = props;
  const {
    listCheckboxBusinessOfferings,
    listCheckboxAvailableSpaces,
    listRadio,
  } = sections;
  const { LIST_RADIO_YES_NO } = SELF_SERVE_PAGE;

  // State
  const [listDataBusinessOfferings, setListDataBusinessOfferings] = useState(
    dataRedux.businessOfferings || listCheckboxBusinessOfferings.list
  );
  const [listDataAvailableSpaces, setListDataAvailableSpaces] = useState(
    dataRedux.availableSpaces || listCheckboxAvailableSpaces.list
  );

  // classnames
  const cx = classnames.bind(styles);

  // states
  const [openRadioRetailStore, setOpenRadioRetailStore] =
    useState<boolean>(false);
  const [retailStoreAcceptCardPayments, setRetailStoreAcceptCardPayments] =
    useState<string>(
      dataRedux.cardPaymentAvailableAtRetailStore || LIST_RADIO_YES_NO[0].value
    );
  const [listRadioRetailStore, setListRadioRetailStore] = useState(
    dataRedux.cardPaymentAvailableAtRetailStore
      ? updateDataListRadio(
          dataRedux.cardPaymentAvailableAtRetailStore,
          LIST_RADIO_YES_NO
        )
      : LIST_RADIO_YES_NO
  );

  /**
   * Set value to react-hook-form
   */
  useEffect(() => {
    setValue("businessOfferings", listDataBusinessOfferings);
    setValue("availableSpaces", listDataAvailableSpaces);
  }, [listDataBusinessOfferings, listDataAvailableSpaces]);

  /**
   * Check data from redux and dump data into fields
   */
  useEffect(() => {
    if (
      _.has(dataRedux, "cardPaymentAvailableAtRetailStore") &&
      !_.isEmpty(dataRedux.cardPaymentAvailableAtRetailStore)
    ) {
      setOpenRadioRetailStore(true);
    }
  }, [dataRedux]);

  /**
   * Handle set value to redux
   */
  useEffect(() => {
    if (openRadioRetailStore) {
      setValue(
        "cardPaymentAvailableAtRetailStore",
        listRadioRetailStore[0].value
      );
    } else {
      setValue("cardPaymentAvailableAtRetailStore", undefined);
    }
  }, [openRadioRetailStore]);

  /**
   * Handle data from availableSpaces list checkbox
   * @param value
   */
  const handleDataAvailableSpaces = (value: ICheckBox[]) => {
    // handle open RetailStore
    const found = value.findIndex(
      (item: any) =>
        item.label === listCheckboxAvailableSpaces.list[1].label &&
        item.checked === true
    );
    if (found >= 0) {
      setOpenRadioRetailStore(true);
    } else {
      setOpenRadioRetailStore(false);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gridRowGap="40px"
      className={cx("other-information-wrapper")}
    >
      <Grid container>
        {/* {What is your business offering?} */}
        <Grid item xs={12}>
          {/* {Description} */}
          {!_.isEmpty(listCheckboxBusinessOfferings.description) && (
            <Typography className={cx("sub-section-description mb-16")}>
              {listCheckboxBusinessOfferings.description}
            </Typography>
          )}

          {/* {List Checkbox} */}
          {!_.isEmpty(listDataBusinessOfferings) && (
            <Controller
              name="businessOfferings"
              control={control}
              render={({ field }) => (
                <>
                  <GroupCheckBox
                    name="businessOfferings"
                    listCheckbox={listDataBusinessOfferings}
                    register={register}
                    required
                    onBlur={field.onBlur}
                    onChange={field.onBlur}
                    getValue={(value: ICheckBox[]) => {
                      setListDataBusinessOfferings(value);
                    }}
                  />
                </>
              )}
            />
          )}
        </Grid>
      </Grid>

      {/* {Do you currently have any of the following?} */}
      <Grid container>
        <Grid item xs={12}>
          {/* {Description} */}
          {listCheckboxAvailableSpaces.description && (
            <Typography className={cx("sub-section-description mb-16")}>
              {listCheckboxAvailableSpaces.description}
            </Typography>
          )}

          {/* {List Checkbox} */}
          {!_.isEmpty(listDataAvailableSpaces) && (
            <Controller
              name="availableSpaces"
              control={control}
              render={({ field }) => (
                <>
                  <GroupCheckBox
                    name="availableSpaces"
                    listCheckbox={listDataAvailableSpaces}
                    register={register}
                    required
                    onBlur={field.onBlur}
                    onChange={field.onBlur}
                    getValue={(value: ICheckBox[]) => {
                      handleDataAvailableSpaces(value);
                      setListDataAvailableSpaces(value);
                    }}
                  />
                </>
              )}
            />
          )}
        </Grid>

        {/* {Does your retail store accept card payments?} */}
        {openRadioRetailStore && (
          <Grid item xs={12}>
            {/* {Description} */}
            {_.has(listRadio, "description") && (
              <Typography className={cx("sub-section-description")}>
                {listRadio.description}
              </Typography>
            )}

            {/* {List Radio} */}
            {!_.isEmpty(LIST_RADIO_YES_NO) && (
              <GroupRadio
                cx={cx}
                name="cardPaymentAvailableAtRetailStore"
                value={retailStoreAcceptCardPayments}
                listRadio={LIST_RADIO_YES_NO}
                onChange={(event) => {
                  const { value } = event.target;
                  setValue("cardPaymentAvailableAtRetailStore", value);
                  setRetailStoreAcceptCardPayments(value);
                }}
              />
            )}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
export default OtherInformation;
