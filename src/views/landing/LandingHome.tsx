// import modules
import {
  Category,
  CardCheckbox,
  InputBase,
  Radio,
  InputNumberMobile,
} from "@sectionsg/orc";
import ListCheckBox from "@/components/ListCheckBox";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveListCheckbox } from "@/store/form";

// import constants
import {
  HOME_LOAN_REQUEST,
  WHAT_SERVICING_REQUEST,
  MSG_ERR_CARD_CHECKBOX,
  LIST_COUNTRIES_CODE,
  LIST_RADIO,
} from "../../utils/constants";

// import types
import { ILanding } from "./Landing";
import { Grid } from "@material-ui/core";

// render UI
const LandingHome: React.FC<ILanding.IHome> = (props) => {
  const { dataCardCheckbox, cx, checkboxKey, handleGetValueCheckbox } = props;
  const [listRadio, setListRadio] = useState(LIST_RADIO);
  const [key, setKey] = useState<number>(0);
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

        <Grid container className={cx("form-submit")}>
          <Grid item lg={8} md={4} sm={12} xs={12}>
            <InputBase
              label="NRIC"
              placeholder=""
              type="text"
              size="large"
              inputKey={key}
              id={"123"}
              maxLength={15}
              kind="nric-only"
              name="nricNumber"
            />
          </Grid>

          <Grid item lg={8} md={5} sm={12} xs={12}>
            <InputNumberMobile
              label="Mobile number"
              countryCodes={LIST_COUNTRIES_CODE}
              keyValidate={key}
              inputNameSelect="phone-1"
              inputNameBase="phone-2"
              countryCode="countryPhoneNumber"
              valueMobile="phoneNumber"
              kind={"phone"}
            />
          </Grid>

          <Grid item lg={8} md={5} sm={12} xs={12} id="selfEmployed">
            <Radio
              name="selfEmployed"
              listCheckBox={listRadio}
              label="Are you a Singapore Citizen or Permanent Resident (PR)?"
              radioKey={key}
            />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
export default LandingHome;
