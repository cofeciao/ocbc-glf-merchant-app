// import modules
import React from "react";
import _ from 'lodash';

// import constants
import {
  DATA_CARD_CHECKBOX,
  SUB_TITLE_PAGE_LANDING, SUB_TITLE_PAGE_LANDING_1, SUB_TITLE_PAGE_LANDING_2, SUB_TITLE_PAGE_LANDING_BORROWER, TEXT_OCBC_SUPPORT, TITLE_PAGE_LANDING, TITLE_PAGE_LANDING_BORROWER
} from "../../utils/constants";

import { Link } from '@sectionsg/orc';


// import types
import { ILanding } from "./Landing";

// render UI
const LandingTitle: React.FC<ILanding.IDataCommon> = (props) => {
  const { cx, formReduxData, contentShow } = props;
  const hasPartial = _.includes(contentShow,DATA_CARD_CHECKBOX[3].label)
  return (
    <section className={cx('title')}>
      <h1>
        {
          formReduxData.isBorrower ? (
            <>
              {TITLE_PAGE_LANDING_BORROWER}
            </>
          ) : (
            <>
              {TITLE_PAGE_LANDING}
            </>
          )
        }
      </h1>
      <h3 className={cx('reg', 'sub-title-landing')}>
        {
          formReduxData.isBorrower ? (
            <>
              {SUB_TITLE_PAGE_LANDING_BORROWER}
            </>
          ) : (
            <>
              {SUB_TITLE_PAGE_LANDING}
            </>
          )
        }
      </h3>
    </section>
  );
};
export default LandingTitle;
