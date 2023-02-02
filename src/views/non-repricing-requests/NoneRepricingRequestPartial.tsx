/***
 * NON-REPRICING PARTIAL REQUEST
 *    >> child
 *      >> header and intro
 *      >> list checkbox(show when has multiple account request)
 *      >> item account number
 */

// import modules
import React, { useEffect, useState } from "react";

// import component lib
import {
  Checkbox,
  SectionWrapper,
  Select,
  RowInfo,
  InputAmount,
} from "@sectionsg/orc";

// import constants
import {
  DATA_NONE_REPRICING_REQUEST,
  LIST_PAYMENT_METHOD,
  LIST_PROPERTY,
  LIST_PROPERTY_COUNTRY,
  DATA_STATE_LENGTH_PARTIAL,
  DATA_STATE_LENGTH_SHORT,
  DATA_CONDITION_NON_PAYMENT_MODE,
  DATA_CARD_CHECKBOX,
  LIST_DATA_OPTION_TO_REVISE
} from "../../utils/constants";

// import types
import { INoneRepricingRequest } from "./NoneRepricingRequest";
import {
  preventSpecialCharacters,
  moneyDisplayFormat,
} from "../../utils/utils";

//impost lodash
import _ from "lodash";

// render UI
const NoneRepricingRequestPartial: React.FC<
  INoneRepricingRequest.INoneRepricingRequestPartial
> = (props) => {
  const {
    cx,
    listDataCheckbox,
    handleFormatCheckBox,
    handleUpdateCheckbox,
    listPaymentMode,
    selectKey,
    formDataRepricing,
    setValueFormPartialPayment,
    setValueFormPartialPaymentHaveError,
    listOptionToRevise,
    handleResetDataOnchange,
    formReduxData,
    listCurrency,
    handleDetectTitle,
    handleCheckExistSection,
  } = props;

  const [triggerChangePayMode, setChangePayMode] = useState<number>(null)

  useEffect(()=> {
    listDataCheckbox.map((item, idx) => {
      if (
        ((!_.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[1].label) && !_.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[2].label) || _.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[3].label))) && 
        (_.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[0].label))
      ) {
        if (item.check) {
          setValueFormPartialPayment(
            `optionToRevise${idx + 1}`,
            listOptionToRevise[0].value
          );
        } else {
          setValueFormPartialPayment(
            `optionToRevise${idx + 1}`,
            ''
          );
        }
      }
    })
  },[formReduxData.form.formLanding.listChecked, listDataCheckbox, triggerChangePayMode])

  return (
    <section className={cx("partial-repayment", "mt-dt-40")}>
      <SectionWrapper>
        {/* header and intro */}
        <h3 className="bold">{DATA_NONE_REPRICING_REQUEST.titlePartial}</h3>
        <h3 className="reg">{handleDetectTitle()}</h3>

        {/* Show when multiple account number */}
        {listDataCheckbox.length > 1 && (
          <div className={cx("wrap-checkbox")}>
            <p className={cx("label-checkbox")}>
              {DATA_NONE_REPRICING_REQUEST.labelCheckboxPartial}
            </p>

            {/* List checkbox */}
            <div className={cx("list-checkbox")}>
              {listDataCheckbox.map((item, index) => (
                <div className={cx("checkbox")} key={index + "checkbox-top"}>
                  <Checkbox
                    list={handleFormatCheckBox(listDataCheckbox[index])}
                    name="hadReadAndInAddition1"
                    checkBoxClass={cx("checkbox-custom")}
                    isReturn
                    getValue={(value: any) => {
                      handleUpdateCheckbox(value);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Row Info */}
        <div className={cx("wrap-info-row-mode")}>
          {listDataCheckbox.map((item: any, idx: number) => (
            <React.Fragment key={idx}>
              {item.check && (
                <div
                key={idx + "number"}
                className={cx(
                  formReduxData.form &&
                  formReduxData.form.propertyInformation && formReduxData.form.propertyInformation.country !==
                  LIST_PROPERTY_COUNTRY[0] &&
                  "wrap-info-row-mode-overseas pb-dt-30", formReduxData.form.accountInformation.accountNumber2 && "mt-dt-60"
                )}
              >
                  <div
                    className={cx(
                      "item"
                    )}
                    key={idx}
                  >
                    <div className={cx("info")}>
                      <p>
                        {DATA_NONE_REPRICING_REQUEST.infoRow}
                      </p>
                      <p>{item.text}</p>
                    </div>
                  </div>

                  {/* Payment mode */}
                  <div className={cx("select-number")}>
                    {formReduxData.form &&
                      formReduxData.form.propertyInformation && formReduxData.form.propertyInformation.country ===
                      LIST_PROPERTY_COUNTRY[0] ? (
                      <Select
                        label={DATA_NONE_REPRICING_REQUEST.labelSelect}
                        listValues={listPaymentMode}
                        single
                        placeholder={DATA_NONE_REPRICING_REQUEST.placeholder}
                        selectKey={selectKey}
                        defaultValue={
                          formDataRepricing[`paymentModeNumber${idx + 1}`]
                            ? formDataRepricing[`paymentModeNumber${idx + 1}`]
                            : ""
                        }
                        getValue={(value: any) => {
                          handleResetDataOnchange(
                            `paymentModeNumber${idx + 1}`,
                            value.value,
                            idx + 1
                          );
                          setChangePayMode(new Date().getTime())
                        }}
                      />
                    ) : (
                      <div className={cx("row-info-custom")}>
                        <RowInfo
                          label={DATA_NONE_REPRICING_REQUEST.labelSelect}
                          content={LIST_PAYMENT_METHOD[0].value}
                        />
                      </div>
                    )}
                  </div>

                  {/* Cash only */}
                  {formDataRepricing[`paymentModeNumber${idx + 1}`] ===
                    LIST_PAYMENT_METHOD[0].value && (
                      <div className={cx("wrap-info-row-mode", "wrap-input")}>
                        {formReduxData.form &&
                          formReduxData.form.propertyInformation && formReduxData.form.propertyInformation.country ===
                          LIST_PROPERTY_COUNTRY[0] && ( // For local property
                            <div className={cx("input", "item-input-amount")}>
                              <InputAmount
                                label={DATA_NONE_REPRICING_REQUEST.cashPrepayment}
                                size="large"
                                type="number"
                                prefixContent="SGD"
                                kind="cash-prepayment-amount"
                                inputKey={selectKey}
                                maxLoan={5000}
                                helperText={
                                  DATA_NONE_REPRICING_REQUEST.enterNearestThousand
                                }
                                preventSpecialCharacters={
                                  preventSpecialCharacters
                                }
                                maxLength={8}
                                value={
                                  formDataRepricing[
                                    `cashPrepaymentAmount${idx + 1}`
                                  ]
                                    ? formDataRepricing[
                                    `cashPrepaymentAmount${idx + 1}`
                                    ]
                                    : ""
                                }
                                moneyDisplayFormat={moneyDisplayFormat}
                                getValue={(value: any) => {
                                  setValueFormPartialPaymentHaveError(
                                    `cashPrepaymentAmount${idx + 1}`,
                                    value.value,
                                    value.error
                                  );
                                }}
                              />
                            </div>
                          )}

                        {formReduxData.form &&
                          formReduxData.form.propertyInformation && formReduxData.form.propertyInformation.country !==
                          LIST_PROPERTY_COUNTRY[0] && ( // For overseas property
                            <div className={cx("wrap-input-cash-prepayment")}>
                              <div className={cx("input", "select-currency")}>
                                <Select
                                  label={
                                    DATA_NONE_REPRICING_REQUEST.cashPrepayment
                                  }
                                  listValues={listCurrency}
                                  single
                                  placeholder={
                                    DATA_NONE_REPRICING_REQUEST.placeholder
                                  }
                                  selectKey={selectKey}
                                  defaultValue={
                                    formDataRepricing[`currencyNumber${idx + 1}`]
                                      ? formDataRepricing[
                                      `currencyNumber${idx + 1}`
                                      ]
                                      : ""
                                  }
                                  getValue={(value: any) => {
                                    setValueFormPartialPayment(
                                      `currencyNumber${idx + 1}`,
                                      value.value
                                    );
                                  }}
                                />
                              </div>

                              <div className={cx("input", "item-input-amount", 'input-overseas')}>
                                <InputAmount
                                  label=""
                                  size="large"
                                  type="number"
                                  prefixContent=""
                                  kind="cash-prepayment-amount"
                                  inputKey={selectKey}
                                  maxLoan={5000}
                                  helperText={
                                    DATA_NONE_REPRICING_REQUEST.enterNearestThousand
                                  }
                                  preventSpecialCharacters={
                                    preventSpecialCharacters
                                  }
                                  maxLength={8}
                                  value={
                                    formDataRepricing[
                                      `cashPrepaymentAmount${idx + 1}`
                                    ]
                                      ? formDataRepricing[
                                      `cashPrepaymentAmount${idx + 1}`
                                      ]
                                      : ""
                                  }
                                  moneyDisplayFormat={moneyDisplayFormat}
                                  getValue={(value: any) => {
                                    setValueFormPartialPaymentHaveError(
                                      `cashPrepaymentAmount${idx + 1}`,
                                      value.value,
                                      value.error
                                    );
                                  }}
                                />
                              </div>
                            </div>
                          )}
                          {(!_.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[1].label) && !_.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[2].label) || _.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[3].label)) && (
                            <>
                              <div
                                className={cx(
                                  "input",
                                  "select-long",
                                  formReduxData.form &&
                                  formReduxData.form.residentialStatus ===
                                  LIST_PROPERTY_COUNTRY[1] &&
                                  "select-long-overseas"
                                )}
                              >
                                {(!_.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[0].label)) ? (
                                  <Select
                                    label={
                                      DATA_NONE_REPRICING_REQUEST.labelOptionToRevise
                                    }
                                    listValues={listOptionToRevise}
                                    single
                                    placeholder={
                                      DATA_NONE_REPRICING_REQUEST.placeholder
                                    }
                                    selectKey={selectKey}
                                    defaultValue={
                                      formDataRepricing[`optionToRevise${idx + 1}`]
                                        ? formDataRepricing[
                                        `optionToRevise${idx + 1}`
                                        ]
                                        : ""
                                    }
                                    getValue={(value: any) => {
                                      setValueFormPartialPayment(
                                        `optionToRevise${idx + 1}`,
                                        value.value
                                      );
                                    }}
                                    helperText={
                                      formDataRepricing[`optionToRevise${idx + 1}`] && formDataRepricing[`optionToRevise${idx + 1}`] === LIST_DATA_OPTION_TO_REVISE[1].value
                                        ? DATA_NONE_REPRICING_REQUEST.helpTextMonthlyInstalmentOption
                                        : ""
                                    }
                                  />
                                ) : (
                                  <RowInfo
                                    label={DATA_NONE_REPRICING_REQUEST.labelOptionToRevise}
                                    content={listOptionToRevise[0].value}
                                  />
                                )}
                              </div>
                            </>
                          )
                        }
                      </div>
                    )}

                  {/* CPF only */}
                  {formDataRepricing[`paymentModeNumber${idx + 1}`] ===
                    LIST_PAYMENT_METHOD[1].value && (
                      <div className={cx("wrap-info-row-mode", "wrap-input")}>
                        <div className={cx("input", "item-input-amount")}>
                          <InputAmount
                            label={
                              DATA_NONE_REPRICING_REQUEST.CPFPrepaymentAmount
                            }
                            size="large"
                            type="number"
                            prefixContent="SGD"
                            kind="cash-prepayment-amount"
                            inputKey={selectKey}
                            helperText={
                              DATA_NONE_REPRICING_REQUEST.enterNearestThousand
                            }
                            preventSpecialCharacters={preventSpecialCharacters}
                            maxLength={8}
                            maxLoan={5000}
                            value={
                              formDataRepricing[`CPFPrepaymentAmount${idx + 1}`]
                                ? formDataRepricing[
                                `CPFPrepaymentAmount${idx + 1}`
                                ]
                                : ""
                            }
                            moneyDisplayFormat={moneyDisplayFormat}
                            getValue={(value: any) => {
                              setValueFormPartialPaymentHaveError(
                                `CPFPrepaymentAmount${idx + 1}`,
                                value.value,
                                value.error
                              );
                            }}
                          />
                        </div>
                        {(!_.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[1].label) && !_.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[2].label) || _.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[3].label)) ? (
                          <div className={cx("input", "select-long")}>
                            {(!_.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[0].label)) ? (
                              <Select
                                label={
                                  DATA_NONE_REPRICING_REQUEST.labelOptionToRevise
                                }
                                listValues={listOptionToRevise }
                                single
                                placeholder={
                                  DATA_NONE_REPRICING_REQUEST.placeholder
                                }
                                selectKey={selectKey}
                                defaultValue={
                                  formDataRepricing[`optionToRevise${idx + 1}`]
                                    ? formDataRepricing[
                                    `optionToRevise${idx + 1}`
                                    ]
                                    : ""
                                }
                                getValue={(value: any) => {
                                  setValueFormPartialPayment(
                                    `optionToRevise${idx + 1}`,
                                    value.value
                                  );
                                }}
                                helperText={
                                  formDataRepricing[`optionToRevise${idx + 1}`] && formDataRepricing[`optionToRevise${idx + 1}`] === LIST_DATA_OPTION_TO_REVISE[1].value
                                    ? DATA_NONE_REPRICING_REQUEST.helpTextMonthlyInstalmentOption
                                    : ""
                                }
                              />
                            ) : (
                              <RowInfo
                                label={DATA_NONE_REPRICING_REQUEST.labelOptionToRevise}
                                content={listOptionToRevise[0].value}
                              />
                            )}
                          </div>
                        ) : ""}
                      </div>
                    )}

                  {/* Cash and CPF */}
                  {formDataRepricing[`paymentModeNumber${idx + 1}`] ===
                    LIST_PAYMENT_METHOD[2].value && (
                      <div
                        className={cx(
                          "wrap-info-row-mode",
                          "wrap-input",
                          "wrap-input-mix"
                        )}
                      >
                        <div className={cx("input", "item-input-amount")}>
                          <InputAmount
                            label={DATA_NONE_REPRICING_REQUEST.cashPrepayment}
                            size="large"
                            type="number"
                            prefixContent="SGD"
                            kind="cash-prepayment-amount"
                            inputKey={selectKey}
                            maxLoan={5000}
                            helperText={
                              DATA_NONE_REPRICING_REQUEST.enterNearestThousand
                            }
                            preventSpecialCharacters={preventSpecialCharacters}
                            maxLength={8}
                            value={
                              formDataRepricing[`cashPrepaymentAmount${idx + 1}`]
                                ? formDataRepricing[
                                `cashPrepaymentAmount${idx + 1}`
                                ]
                                : ""
                            }
                            moneyDisplayFormat={moneyDisplayFormat}
                            getValue={(value: any) => {
                              setValueFormPartialPaymentHaveError(
                                `cashPrepaymentAmount${idx + 1}`,
                                value.value,
                                value.error
                              );
                            }}
                          />
                        </div>
                        <div
                          className={cx(
                            "input",
                            "item-input-amount",
                            "item-input-amount-mix"
                          )}
                        >
                          <InputAmount
                            label={
                              DATA_NONE_REPRICING_REQUEST.CPFPrepaymentAmount
                            }
                            size="large"
                            type="number"
                            prefixContent="SGD"
                            kind="cash-prepayment-amount"
                            inputKey={selectKey}
                            maxLoan={5000}
                            helperText={
                              DATA_NONE_REPRICING_REQUEST.enterNearestThousand
                            }
                            preventSpecialCharacters={preventSpecialCharacters}
                            maxLength={8}
                            value={
                              formDataRepricing[`CPFPrepaymentAmount${idx + 1}`]
                                ? formDataRepricing[
                                `CPFPrepaymentAmount${idx + 1}`
                                ]
                                : ""
                            }
                            moneyDisplayFormat={moneyDisplayFormat}
                            getValue={(value: any) => {
                              setValueFormPartialPaymentHaveError(
                                `CPFPrepaymentAmount${idx + 1}`,
                                value.value,
                                value.error
                              );
                            }}
                          />
                        </div>
                        
                        {
                          (!_.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[1].label) && !_.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[2].label) || _.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[3].label)) && (
                            <div className={cx("input", "select-long")}>
                              {(!_.includes(formReduxData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[0].label)) ? (
                                <Select
                                  label={
                                    DATA_NONE_REPRICING_REQUEST.labelOptionToRevise
                                  }
                                  listValues={listOptionToRevise}
                                  single
                                  placeholder={
                                    DATA_NONE_REPRICING_REQUEST.placeholder
                                  }
                                  selectKey={selectKey}
                                  defaultValue={
                                    formDataRepricing[`optionToRevise${idx + 1}`]
                                      ? formDataRepricing[
                                      `optionToRevise${idx + 1}`
                                      ]
                                      : ""
                                  }
                                  getValue={(value: any) => {
                                    setValueFormPartialPayment(
                                      `optionToRevise${idx + 1}`,
                                      value.value
                                    );
                                  }}
                                  helperText={
                                    formDataRepricing[`optionToRevise${idx + 1}`] && formDataRepricing[`optionToRevise${idx + 1}`] === LIST_DATA_OPTION_TO_REVISE[1].value
                                      ? DATA_NONE_REPRICING_REQUEST.helpTextMonthlyInstalmentOption
                                      : ""
                                  }
                                />
                              ) : (
                                <RowInfo
                                  label={DATA_NONE_REPRICING_REQUEST.labelOptionToRevise}
                                  content={listOptionToRevise[0].value}
                                />
                              )}
                            </div>
                          )
                        }
                        {/* {!_.isEqual(formReduxData.form.formLanding.listChecked, DATA_STATE_LENGTH_PARTIAL) && !_.isEqual(formReduxData.form.formLanding.listChecked,DATA_STATE_LENGTH_SHORT) ? (
                        
                        ) : ""} */}
                      </div>
                    )}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};
export default NoneRepricingRequestPartial;
