// import modules
import { Category } from "@sectionsg/orc";
import ListCheckBox from "@/components/ListCheckBox";
import React from "react";
import { useDispatch } from "react-redux";
import { saveDataListCheckbox } from "@/store/form";

// import constants
import {
  CASHLESS_PAYMENTS_METHODS,
  WHAT_SERVICING_REQUEST,
  MSG_ERR_CARD_CHECKBOX,
} from "../../utils/constants";

// import types
import { IHome } from "./Home";

// render UI
const HomeCashlessPaymentMethods: React.FC<IHome.IHomeCashlessPaymentMethods> = (props) => {
  const { dataCardCheckbox, cx, checkboxKey, handleGetValueCheckbox } = props;
  const dispatch = useDispatch();

  /**
   * Get data from list check box
   * @param data
   */
  const getDataFromListCheckbox = (data: any) => {
    handleGetValueCheckbox(data);
    dispatch(saveDataListCheckbox(data));
  };

  return (
    <section className={cx("content")}>
      <div className={cx("col-left")}>
        <Category>{CASHLESS_PAYMENTS_METHODS}</Category>
      </div>
      <div className={cx("col-right")}>
        <ListCheckBox
          label={WHAT_SERVICING_REQUEST}
          textError={MSG_ERR_CARD_CHECKBOX}
          dataCardCheckbox={dataCardCheckbox}
          lg={4}
          md={4}
          sm={6}
          xs={12}
          checkboxKey={checkboxKey}
          getValue={getDataFromListCheckbox}
        />
      </div>
    </section>
  );
};
export default HomeCashlessPaymentMethods;
