// import modules
import {
  Category,
  CardCheckbox,
} from "@sectionsg/orc";
import ListCheckBox from "@/components/ListCheckBox";
import React from "react";
import { useDispatch } from "react-redux";
import { saveListCheckbox } from "@/store/form";

// import constants
import {
  HOME_LOAN_REQUEST,
  WHAT_SERVICING_REQUEST,
  MSG_ERR_CARD_CHECKBOX,
} from "../../utils/constants";

// import types
import { ILanding } from "./Landing";

// render UI
const LandingHome: React.FC<ILanding.IHome> = (props) => {
  const { dataCardCheckbox, cx, checkboxKey, handleGetValueCheckbox } = props;
  const dispatch = useDispatch();
  return (
    <section className={cx("content")}>
      <div className={cx("col-left")}>
        <Category>{HOME_LOAN_REQUEST}</Category>
      </div>
      <div className={cx("col-right")}>
        <CardCheckbox
          label={WHAT_SERVICING_REQUEST}
          textError={MSG_ERR_CARD_CHECKBOX}
          dataCardCheckbox={dataCardCheckbox}
          lg={4}
          md={4}
          sm={6}
          xs={12}
          checkboxKey={checkboxKey}
          getValue={(data: any) => {
            handleGetValueCheckbox(data);
            dispatch(saveListCheckbox(data));
          }}
          className={cx("item-card")}
        />
      </div>
    </section>
  );
};
export default LandingHome;
