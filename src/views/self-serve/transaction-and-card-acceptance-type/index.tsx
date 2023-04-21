// import modules
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCheckBox from "@/components/ListCheckBox";
import { saveDataTransactionAndCardAcceptanceTypeStep } from "@/store/form";
import { Box } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";
import _ from "lodash";

// import constants
import { LIST_ROUTER, SELF_SERVE_PAGE } from "@/utils/constants";

// import styles
import styles from "./TransactionAndCardAcceptanceType.scss";

// import types
import { ICheckBox } from "@/components/ListCheckBox/ListCheckBox";

// import components
import Category from "@/components/Category";
import SectionWrapper from "../SectionWrapper";
import RedirectButton from "@/components/RedirectButton";

// render UI
const TransactionAndCardAcceptanceType: React.FC = () => {
  const {
    LIST_STEP: {
      transactionAndCardAcceptanceType: {
        text,
        section: { whichServiceAreYouApplyingFor },
      },
    },
  } = SELF_SERVE_PAGE;
  const cx = classnames.bind(styles);

  // hooks
  const dispatch = useDispatch();
  const history = useHistory();

  // states
  const [dataCheckbox, setDataCheckbox] = useState(
    whichServiceAreYouApplyingFor.data_list_checkbox
  );
  const [disabledButton, setDisabledButton] = useState<boolean>(true);

  /**
   * Handle scrolling to top on page load
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  /**
   * Get data from list check box and save to store
   * @param data
   */
  const getDataFromListCheckbox = (data: ICheckBox[]) => {
    dispatch(saveDataTransactionAndCardAcceptanceTypeStep(data));
  };

  /**
   * Retrieves data of dataListCheckbox from Store
   */
  const dataListCheckbox = useSelector(
    (state: any) =>
      state.form.transactionAndCardAcceptanceTypeStep as ICheckBox[]
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
      <Category>{text}</Category>

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
          getValue={getDataFromListCheckbox}
        />
      </SectionWrapper>

      {/* {Redirect Button}  */}
      <RedirectButton
        disabledNextButton={disabledButton}
        continueLater
        backButton
        variant="next"
        onClickBack={() => {
          history.push(LIST_ROUTER.company_and_contact_information);
        }}
        onClickNext={() => {
          // redirect
          history.push(LIST_ROUTER.business_details);
        }}
      />
    </Box>
  );
};
export default TransactionAndCardAcceptanceType;
