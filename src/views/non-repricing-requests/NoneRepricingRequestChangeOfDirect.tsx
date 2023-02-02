/***
 * CHANGE OF DDA ACCOUNT
 *    >> child
 *      >> input current debiting account number
 *      >> input new OCBC debiting account number
 */

// import modules
import React from "react";
import { v4 as uuidv4 } from 'uuid';

// import component lib
import {
  Checkbox, SectionWrapper, InputBase
} from '@sectionsg/orc';

// import constants
import { DATA_NONE_REPRICING_REQUEST } from "../../utils/constants";

// import utils
import { preventSpecialCharacters, restrictOnlyDigital } from "../../utils/utils";

// import types
import { INoneRepricingRequest } from "./NoneRepricingRequest";


// render UI
const NoneRepricingRequestChangeOfDirect: React.FC<INoneRepricingRequest.INoneRepricingRequestPartial> = (props) => {
  const { cx, inputKey, formDataRepricing, isOneListChecked, setValueFormPartialPaymentHaveError } = props;
  return (
    <section className={cx('partial-repayment', isOneListChecked ? 'mt-dt-40' : 'mt-dt-10')}>
      <SectionWrapper>
        <h3 className={cx('bold', 'title-debiting')}>
          {DATA_NONE_REPRICING_REQUEST.titleDebiting}
        </h3>
        <h3 className={cx('reg', 'title-sub')}>
          {DATA_NONE_REPRICING_REQUEST.subTitleDebiting}
        </h3>

        <div className={cx('wrap-info-row-mode', 'wrap-input')}>
          {/* <div className="input">
            <InputBase
              label={DATA_NONE_REPRICING_REQUEST.currentDebiting}
              placeholder=""
              type="text"
              size="large"
              name='currentDebitingAccountNumber'
              inputKey={inputKey}
              id={uuidv4()}
              kind="account-number"
              value={formDataRepricing['currentDebitingAccountNumber'] ? formDataRepricing['currentDebitingAccountNumber'] : ''}
              getValue={(value: INoneRepricingRequest.IInput) => {
                setValueFormPartialPaymentHaveError(
                  'currentDebitingAccountNumber',
                  value.value,
                  value.error,
                );
              }}
            />
          </div> */}
          <div className="input">
            <InputBase
              label={DATA_NONE_REPRICING_REQUEST.newOCBC}
              placeholder=""
              type="text"
              size="large"
              name='newOCBCAccountNumber'
              inputKey={inputKey}
              id={uuidv4()}
              maxLength={12}
              preventSpecialCharacters={restrictOnlyDigital}
              kind="account-number"
              value={formDataRepricing['newOCBCAccountNumber'] ? formDataRepricing['newOCBCAccountNumber'] : ''}
              getValue={(value: INoneRepricingRequest.IInput) => {
                setValueFormPartialPaymentHaveError(
                  'newOCBCAccountNumber',
                  value.value,
                  value.error,
                );
              }}
            />
          </div>
        </div>

      </SectionWrapper >
    </section >
  );
};
export default NoneRepricingRequestChangeOfDirect;
