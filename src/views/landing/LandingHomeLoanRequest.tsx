// import modules
import {
  CardCheckbox, Category
} from '@sectionsg/orc';
import React from "react";

// import constants
import {
  HOME_LOAN_REQUEST,
  WHAT_SERVICING_REQUEST,
  MSG_ERR_CARD_CHECKBOX
} from "../../utils/constants";

// import types
import { ILanding } from "./Landing";

// render UI
const LandingHomeLoanRequest: React.FC<ILanding.IHomeLoanRequest> = (props) => {

  const { dataCardCheckbox, cx, checkboxKey, handleGetValueCheckbox } = props;
  const isFullRedemption = dataCardCheckbox[4].checked;
  return (
    <section className={cx('content', 'mt-60')}>
      <div className={cx('col-left')}>
        <Category>
          {HOME_LOAN_REQUEST}
        </Category>
      </div>
      <div className={cx('col-right')}>
        <CardCheckbox
          label={WHAT_SERVICING_REQUEST}
          textError={MSG_ERR_CARD_CHECKBOX}
          dataCardCheckbox={dataCardCheckbox}
          lg={4}
          md={4}
          sm={6}
          xs={12}
          checkboxKey={checkboxKey}
          getValue={(data: any) => handleGetValueCheckbox(data)}
          className={cx('item-card', `${isFullRedemption ? 'disable-item-card' : ''}`)}
        />
      </div>
    </section>
  );
};
export default LandingHomeLoanRequest;
