/***
 * NON-REPRICING LENGTHENING OF LOAN TENURE || SHORTENING OF LOAN TENURE REQUEST
 *    >> child
 *      >> header and intro
 *      >> list checkbox(show when has multiple account request)
 *      >> item account number
 *      >> list document request upload
 */

// import modules
import React from "react";
import { v4 as uuidv4 } from 'uuid';

// import component lib
import {
  InputBase, SectionWrapper, Checkbox
} from '@sectionsg/orc';

// import constants
import { DATA_CARD_CHECKBOX, DATA_LENGTH, DATA_NONE_REPRICING_REQUEST,DATA_SHORT,DATA_STATE_REPRICING_LENGTHENING,DATA_STATE_REPRICING_SHORT } from "../../utils/constants";

// import utils
import { preventSpecialCharacters } from "../../utils/utils";

// import types
import { INoneRepricingRequest } from "./NoneRepricingRequest";

// import child component
import _ from "lodash";


// render UI
const NoneRepricingRequestLengtheningOfLoan: React.FC<INoneRepricingRequest.INoneRepricingRequestPartial> = (props) => {
  const { cx, handleFormatCheckBox, selectKey, formDataRepricing, setValueFormPartialPayment, listDataCheckboxLengthening, handleUpdateCheckboxLengthening , formReduxData, listDocument, openDialog, getSignatureFiles, listFileUpload, handleDetectLabel, handleDetectMultiInput, checkMatchOption} = props;
  return (
    <section className={cx('partial-repayment', (checkMatchOption(DATA_STATE_REPRICING_SHORT) || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING) || checkMatchOption(DATA_LENGTH) || checkMatchOption(DATA_SHORT)) ? 'mt-dt-40' :'mt-dt-10')}>
      {
        !formReduxData.isBorrower && (
          <SectionWrapper>
            <h3 className="bold">
              {
                formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.listChecked && formReduxData.form.formLanding.listChecked.includes(DATA_STATE_REPRICING_SHORT[1]) ? (
                  <>
                    {DATA_NONE_REPRICING_REQUEST.titleShortening}
                  </>
                ) : (
                  <>
                    {DATA_NONE_REPRICING_REQUEST.titleLengthening}
                  </>
                )
              }
            </h3>

            {/* Show when multiple account number */}
            {
              listDataCheckboxLengthening.length > 1 && (
                <div className={cx('wrap-checkbox')}>
                  <p className={cx('label-checkbox')}>
                    {handleDetectMultiInput()}
                  </p>

                  {/* list checkbox */}
                  <div className={cx('list-checkbox')}>
                    {
                      listDataCheckboxLengthening.map((item, index) => (
                        <div className={cx('checkbox')} key={index + 'checkbox-top'}>
                          <Checkbox
                            list={handleFormatCheckBox(listDataCheckboxLengthening[index])}
                            name="hadReadAndInAddition"
                            checkBoxClass={cx('checkbox-custom')}
                            isReturn
                            getValue={(value: INoneRepricingRequest.ICheckbox[]) => {
                              handleUpdateCheckboxLengthening(value);
                            }}
                          />
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            }

            <div className="wrap-info-row-mode">
              {/* row info */}
              {
                listDataCheckboxLengthening.map((item: any, idx: number) => (
                  <React.Fragment key={idx}>
                    {
                      item.check && (
                        <div key={idx + 'number'} className={listDataCheckboxLengthening.length > 1 ? "mt-dt-60" : ''}>
                          <div className={cx('item')} key={idx}>
                            <div className={cx('info')}>
                              <p>{DATA_NONE_REPRICING_REQUEST.infoRow}</p>
                              <p>{item.text}</p>
                            </div>
                          </div>
                          <div className={cx('input-number')}>
                            <InputBase
                              label={handleDetectLabel()}
                              placeholder=""
                              type="number"
                              size="large"
                              name={`tenure${idx + 1}`}
                              inputKey={selectKey}
                              id={uuidv4()}
                              kind="loanTenure"
                              preventSpecialCharacters={preventSpecialCharacters}
                              value={formDataRepricing[`loanTenure${idx + 1}`] ? formDataRepricing[`loanTenure${idx + 1}`] : ''}
                              getValue={(value: any) => {
                                setValueFormPartialPayment(
                                  `loanTenure${idx + 1}`,
                                  value.value,
                                );
                              }}
                            />
                          </div>

                        </div>
                      )
                    }
                  </React.Fragment>
                ))
              }
            </div>

          </SectionWrapper>
        )
      }

    </section>
  );
};
export default NoneRepricingRequestLengtheningOfLoan;
