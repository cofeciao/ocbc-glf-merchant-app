// import modules
import React, { useState } from "react";
import { Checkbox } from "@sectionsg/orc";
import { Box, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";
import { SELF_SERVE_PAGE } from "@/utils/constants";
import _ from "lodash";

// import style
import styles from "./BusinessDetails.scss";
import { unregister } from "@/serviceWorker";
import GroupRadio from "@/components/GroupRadio";

// import types

// render UI
const OtherInformation: React.FC<any> = (props) => {
  // props
  const { sections, setValue, register, unregister } = props;
  const {
    listCheckboxBusinessOfferings,
    listCheckboxAvailableSpaces,
    listRadio,
  } = sections;
  const { LIST_RADIO_YES_NO } = SELF_SERVE_PAGE;

  // classnames
  const cx = classnames.bind(styles);

  // states
  const [openRadioRetailStore, setOpenRadioRetailStore] =
    useState<boolean>(false);
  const [retailStoreAcceptCardPayments, setRetailStoreAcceptCardPayments] = useState<string>("yes");
  /**
   * handle data from Available Spaces list checkbox
   * @param value
   */
  const handleDataAvailableSpaces = (value: any) => {
    // Set value react-hooks-form
    setValue("availableSpaces", value);

    //  handle showing and set value for radio field
    const found = value.findIndex(
      (item: any) => item.name === listCheckboxAvailableSpaces.list[1].text
    );
    if (found >= 0) {
      setOpenRadioRetailStore(true);
      register("cardPaymentAvailableAtRetailStore");
    } else {
      setOpenRadioRetailStore(false);
      unregister("cardPaymentAvailableAtRetailStore");
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
        <Grid item xs={12}>
          {/* {Description} */}
          {!_.isEmpty(listCheckboxBusinessOfferings.description) && (
            <Typography className={cx("sub-section-description mb-16")}>
              {listCheckboxBusinessOfferings.description}
            </Typography>
          )}

          {/* {List Checkbox} */}
          {!_.isEmpty(listCheckboxBusinessOfferings.list) && (
            <Checkbox
              isFullWidth
              list={listCheckboxBusinessOfferings.list}
              checkBoxClass={cx("business-offerings-checkbox")}
              getValue={(value: any) => {
                setValue("businessOfferings", value);
              }}
            />
          )}
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          {/* {Description} */}
          {listCheckboxAvailableSpaces.description && (
            <Typography className={cx("sub-section-description mb-16")}>
              {listCheckboxAvailableSpaces.description}
            </Typography>
          )}

          {/* {List Checkbox} */}
          {!_.isEmpty(listCheckboxAvailableSpaces.list) && (
            <Checkbox
              isFullWidth
              list={listCheckboxAvailableSpaces.list}
              checkBoxClass={cx("available-spaces-checkbox")}
              getValue={handleDataAvailableSpaces}
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
                name="retailStoreAcceptCardPayments"
                value={retailStoreAcceptCardPayments}
                listRadio={LIST_RADIO_YES_NO}
                onChange={(event) => {
                  const { value } = event.target;
                  setValue("retailStoreAcceptCardPayments", value);
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
