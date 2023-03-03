// import modules
import { Category, Button } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCheckBox from "@/components/ListCheckBox";
import { saveDataTransactionAndCardAcceptanceTypeStep } from "@/store/form";
import { Box, Grid } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import _ from "lodash";

// import constants
import {
  CONTINUE_LATER,
  LIST_ROUTER,
  NEXT,
  SELF_SERVE_PAGE,
} from "@/utils/constants";

// import style
import styles from "./TransactionAndCardAcceptanceType.scss";

// import types

//import icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

// render UI
const TransactionAndCardAcceptanceType: React.FC<any> = () => {
  const {
    list_step: {
      transaction_and_card_acceptance_type: {
        text,
        section: { which_service_are_you_applying_for },
      },
    },
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const [key, setKey] = useState<number>(0);
  const history = useHistory();
  const [dataCheckbox, setDataCheckbox] = useState(
    which_service_are_you_applying_for.data_list_checkbox
  );
  const [disabledButton, setDisabledButton] = useState<boolean>(true);

  /**
   * Get data from list check box
   * @param data
   */
  const getDataFromListCheckbox = (data: any) => {
    dispatch(saveDataTransactionAndCardAcceptanceTypeStep(data));
  };

  /**
   * Retrieves data of dataListCheckbox from Store
   */
  const dataListCheckbox = useSelector(
    (state: any) =>
      state.form.transactionAndCardAcceptanceTypeStep.dataListCheckbox
  );

  /**
   * Handle update state when dataListCheckbox updated from store
   */
  useEffect(() => {
    if (dataListCheckbox && !!dataListCheckbox.length) {
      setDataCheckbox(dataListCheckbox);

      // find selected item to enable the next button
      const findSelected = _.find(
        dataListCheckbox,
        (item) => item.checked === true
      );
      findSelected === undefined
        ? setDisabledButton(true)
        : setDisabledButton(false);
    }
  }, [dataListCheckbox]);

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        disabled={disabledButton}
        onClick={() => {
          history.push(LIST_ROUTER.business_details);
        }}
      >
        <>
          {NEXT} <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
        </>
      </Button>
    );
  };

  return (
    <Box
      className={cx(
        "transaction-and-card-acceptance-type-wrapper step-wrapper"
      )}
    >
      {/* {Category} */}
      <section className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </section>

      {/* {Section Contact details} */}
      <SectionWrapper
        cx={cx}
        title={which_service_are_you_applying_for.title}
        description={which_service_are_you_applying_for.description}
      >
        {/* {List Checkbox} */}
        <ListCheckBox
          label=""
          textError={`errorMessage`}
          dataCardCheckbox={dataCheckbox}
          lg={4}
          md={4}
          sm={6}
          xs={12}
          checkboxKey={key}
          getValue={getDataFromListCheckbox}
        />
      </SectionWrapper>

      {/* {Next Button}  */}
      <section className={cx("button-wrapper", "d-flex justify-end mt-dt-40")}>
        <Button
          backgroundClass="square"
          onClick={() =>
            history.push(LIST_ROUTER.company_and_contact_information)
          }
        >
          <ArrowBackIcon className={cx("arrow")} />
        </Button>
        <Box>
          <Box className={cx("d-inline")}>
            <Link to="/">{CONTINUE_LATER}</Link>
          </Box>
          <Box className="ml-dt-30 d-inline">{renderButton()}</Box>
        </Box>
      </section>
    </Box>
  );
};
export default TransactionAndCardAcceptanceType;
