// import modules
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
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

// render UI
const OtherInformation: React.FC<any> = (props) => {
  const {
    sections,
    labelDoesYourRetailStoreAccpetCardPayment,
    register,
    dataRedux,
  } = props;
  const {
    LIST_STEP: { LIST_RADIO_YES_NO },
  } = STEP_RM;
  const {
    listCheckboxBusinessOfferings,
    listCheckboxAvailableSpaces,
    listRadio,
  } = sections;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const history = useHistory();

  // States
  const [dataOtherinformation, setDataOtherInformation] = useState<any>({
    checkedDoesYourRetailStoreAccpetCard: true,
    valueDoesYourRetailStoreAccpetCard: LIST_RADIO_YES_NO[0].value,
    listDataRadioRetailStore: _.has(
      dataRedux,
      "cardPaymentAvailableAtRetailStore"
    )
      ? updateDataListRadio(
          dataRedux.cardPaymentAvailableAtRetailStore,
          LIST_RADIO_YES_NO
        )
      : LIST_RADIO_YES_NO,
    listDataCheckboxBusinessOfferings: listCheckboxBusinessOfferings.list,
    listDataAvailableSpaces: listCheckboxAvailableSpaces.list,
  });
  const [openRadioRetailStore, setOpenRadioRetailStore] =
    useState<boolean>(false);

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
            <Box>
              <GroupCheckBox
                name="businessOfferings"
                listCheckbox={listCheckboxBusinessOfferings.list}
                register={register}
                required
                getValue={(value: ICheckBox[]) => {
                  setDataOtherInformation({
                    ...dataOtherinformation,
                    listDataCheckboxBusinessOfferings: value,
                  });
                }}
              />
            </Box>
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
              <GroupCheckBox
                name="availableSpaces"
                listCheckbox={listCheckboxAvailableSpaces.list}
                register={register}
                required
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
            </Box>
          )}
        </Grid>
      </Grid>

      <Grid container>
        {/* <Grid item xs={12}>
          <Typography className={cx("sub-section-description")}>
            {labelDoesYourRetailStoreAccpetCardPayment}
          </Typography>

          <GroupRadio
            cx={cx}
            name="doesYourRetailStoreAccpetCard"
            value={dataOtherinformation.valueDoesYourRetailStoreAccpetCard}
            listRadio={LIST_RADIO_YES_NO}
            onChange={(event) => {
              const { value } = event.target;
              setDataOtherInformation({
                ...dataOtherinformation,
                checkedDoesYourRetailStoreAccpetCard:
                  value === "yes" ? true : false,
                valueDoesYourRetailStoreAccpetCard: value,
              });
            }}
          />
        </Grid> */}

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
            {!_.isEmpty(dataOtherinformation.listDataRadioRetailStore) && (
              <GroupRadio
                cx={cx}
                name="cardPaymentAvailableAtRetailStore"
                value={dataOtherinformation.valueDoesYourRetailStoreAccpetCard}
                listRadio={dataOtherinformation.listDataRadioRetailStore}
                onChange={(event) => {
                  const { value } = event.target;
                  setDataOtherInformation({
                    ...dataOtherinformation,
                    checkedDoesYourRetailStoreAccpetCard:
                      value === "yes" ? true : false,
                    valueDoesYourRetailStoreAccpetCard: value,
                  });
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
