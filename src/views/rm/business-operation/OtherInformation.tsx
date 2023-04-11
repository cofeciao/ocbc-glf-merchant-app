// import modules
import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import GroupRadio from "@/components/GroupRadio";
import GroupCheckBox from "@/components/GroupCheckBox";
import _ from "lodash";

// import constants
import { STEP_RM } from "@/utils/constants-rm";

// import style
import styles from "./BusinessOperation.scss";

// import types
import { ICheckBox } from "@/components/GroupCheckBox/GroupCheckBox";
import { updateDataListRadio } from "@/utils/utils";
import { Controller } from "react-hook-form";

// render UI
const OtherInformation: React.FC<any> = (props) => {
  const {
    sections,
    labelDoesYourRetailStoreAccpetCardPayment,
    register,
    setValue,
    control,
    dataRedux,
  } = props;
  const {
    LIST_STEP: { LIST_RADIO_YES_NO },
  } = STEP_RM;
  const { listCheckboxBusinessOfferings, listCheckboxAvailableSpaces } =
    sections;
  const cx = classnames.bind(styles);

  // states
  const [dataOtherinformation, setDataOtherInformation] = useState<any>({
    valueRetailStore:
      dataRedux.cardPaymentAvailableAtRetailStore || LIST_RADIO_YES_NO[0].value,
    listDataRadioRetailStore: _.has(
      dataRedux,
      "cardPaymentAvailableAtRetailStore"
    )
      ? updateDataListRadio(
          dataRedux.cardPaymentAvailableAtRetailStore,
          LIST_RADIO_YES_NO
        )
      : LIST_RADIO_YES_NO,
    listDataCheckboxBusinessOfferings:
      dataRedux.businessOfferings || listCheckboxBusinessOfferings.list,
    listDataCheckboxAvailableSpaces:
      dataRedux.availableSpaces || listCheckboxAvailableSpaces.list,
  });
  const [openRadioRetailStore, setOpenRadioRetailStore] =
    useState<boolean>(false);

  /**
   * Set value to react-hook-form
   */
  useEffect(() => {
    setValue(
      "businessOfferings",
      dataOtherinformation.listDataCheckboxBusinessOfferings
    );
    setValue(
      "availableSpaces",
      dataOtherinformation.listDataCheckboxAvailableSpaces
    );
    if (openRadioRetailStore) {
      setValue(
        "cardPaymentAvailableAtRetailStore",
        dataOtherinformation.valueRetailStore
      );
    } else {
      setValue("cardPaymentAvailableAtRetailStore", null);
    }
    if (
      _.has(dataRedux, "cardPaymentAvailableAtRetailStore") &&
      !_.isEmpty(dataRedux.cardPaymentAvailableAtRetailStore)
    ) {
      setOpenRadioRetailStore(true);
    }
  }, [dataOtherinformation]);

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
          {!_.isEmpty(listCheckboxBusinessOfferings.description) &&
            listCheckboxBusinessOfferings && (
              <Typography className={cx("sub-section-description")}>
                {listCheckboxBusinessOfferings.description}
              </Typography>
            )}

          {/* {GroupCheckBox} */}
          {_.has(sections, "listCheckboxBusinessOfferings") && (
            <Controller
              name="businessOfferings"
              control={control}
              render={({ field }) => (
                <GroupCheckBox
                  name="businessOfferings"
                  register={register}
                  required
                  onBlur={field.onBlur}
                  onChange={field.onBlur}
                  listCheckbox={
                    dataOtherinformation.listDataCheckboxBusinessOfferings
                  }
                  getValue={(value: ICheckBox[]) => {
                    setDataOtherInformation({
                      ...dataOtherinformation,
                      listDataCheckboxBusinessOfferings: value,
                    });
                  }}
                />
              )}
            />
          )}
        </Grid>

        {/* {Do you currently have any of the following?} */}
        <Grid item xs={12}>
          {/* {Description} */}
          {!_.isEmpty(listCheckboxAvailableSpaces.description) &&
            listCheckboxAvailableSpaces && (
              <Typography className={cx("sub-section-description")}>
                {listCheckboxAvailableSpaces.description}
              </Typography>
            )}

          {/* {GroupCheckBox} */}
          {_.has(sections, "listCheckboxAvailableSpaces") && (
            <Box>
              <Controller
                name="availableSpaces"
                control={control}
                render={({ field }) => (
                  <GroupCheckBox
                    name="availableSpaces"
                    register={register}
                    required
                    onBlur={field.onBlur}
                    onChange={field.onBlur}
                    listCheckbox={
                      dataOtherinformation.listDataCheckboxAvailableSpaces
                    }
                    getValue={(value: ICheckBox[]) => {
                      setDataOtherInformation({
                        ...dataOtherinformation,
                        listDataCheckboxAvailableSpaces: value,
                      });
                    }}
                    getValueOnChange={(value: ICheckBox[]) => {
                      handleDataAvailableSpaces(value);
                    }}
                  />
                )}
              />
            </Box>
          )}
        </Grid>
      </Grid>

      {/* {Does your retail store accept card payments?} */}
      {openRadioRetailStore && (
        <Grid item xs={12}>
          {/* {Description} */}
          {_.has(labelDoesYourRetailStoreAccpetCardPayment, "description") && (
            <Typography className={cx("sub-section-description")}>
              {labelDoesYourRetailStoreAccpetCardPayment}
            </Typography>
          )}

          {/* {List Radio} */}
          {!_.isEmpty(dataOtherinformation.listDataRadioRetailStore) && (
            <GroupRadio
              cx={cx}
              name="cardPaymentAvailableAtRetailStore"
              value={dataOtherinformation.valueRetailStore}
              listRadio={dataOtherinformation.listDataRadioRetailStore}
              onChange={(event) => {
                const { value } = event.target;
                setDataOtherInformation({
                  ...dataOtherinformation,
                  valueRetailStore: value,
                });
              }}
            />
          )}
        </Grid>
      )}
    </Box>
  );
};
export default OtherInformation;
