// import modules
import { Category } from "@sectionsg/orc";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCheckBox from "@/components/ListCheckBox";
import { saveDataTransactionAndCardAcceptanceTypeStep } from "@/store/form";
import { Box } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import SectionWrapper from "@/views/self-serve/SectionWrapper";
import RedirectButton from "@/views/self-serve/RedirectButton";
import _ from "lodash";

// import constants
import { LIST_ROUTER, SELF_SERVE_PAGE } from "@/utils/constants";

// import style
import styles from "./TransactionAndCardAcceptanceType.scss";

// import types

// render UI
const TransactionAndCardAcceptanceType: React.FC<any> = () => {
  const {
    LIST_STEP: {
      transactionAndCardAcceptanceType: {
        text,
        section: { whichServiceAreYouApplyingFor },
      },
    },
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);
  const dispatch = useDispatch();
  const [key, setKey] = useState<number>(0);
  const history = useHistory();
  const [dataCheckbox, setDataCheckbox] = useState(
    whichServiceAreYouApplyingFor.data_list_checkbox
  );
  const [disabledButton, setDisabledButton] = useState<boolean>(true);

  /**
   * Get data from list check box and save to store
   * @param data
   */
  const getDataFromListCheckbox = (data: any) => {
    dispatch(saveDataTransactionAndCardAcceptanceTypeStep(data));
  };

  /**
   * Retrieves data of dataListCheckbox from Store
   */
  const dataListCheckbox = useSelector(
    (state: any) => state.form.transactionAndCardAcceptanceTypeStep
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

  return (
    <Box
      className={cx(
        "transaction-and-card-acceptance-type-wrapper step-wrapper"
      )}
    >
      {/* {Category} */}
      <Box className={cx("category-wrapper")}>
        <Category>{text}</Category>
      </Box>

      {/* {Section Contact details} */}
      <SectionWrapper
        cx={cx}
        title={whichServiceAreYouApplyingFor.title}
        description={whichServiceAreYouApplyingFor.description}
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
      <RedirectButton
        disabledNextButton={disabledButton}
        continueLater
        backButton
        variant="next"
        onClickBack={() => {
          history.push(LIST_ROUTER.company_and_contact_information);
        }}
        onClickNext={() => {
          history.push(LIST_ROUTER.business_details);
        }}
      />
    </Box>
  );
};
export default TransactionAndCardAcceptanceType;
