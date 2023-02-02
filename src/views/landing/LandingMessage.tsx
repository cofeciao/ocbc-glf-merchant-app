// import modules
import { Grid } from '@material-ui/core';
import { Select, Link, Radio
 } from '@sectionsg/orc';
import _ from 'lodash';
import React from "react";

// import constants
import {
  DATA_CARD_CHECKBOX,
  DATA_DDA_ACCOUNT,
  DATA_FULL_REDEMPTION_ON_ALL_LOAN,
  DATA_LENGTHENING_OF_LOAN_TENURE,
  DATA_MIX_THREE_OPT,
  DATA_PARTIAL_PREPAYMENT,
  DATA_REPRICING,
  DATA_REPRICING_LENGTHENING,
  DATA_SHORTENING_OF_LOAN_TENURE,
  DATA_SHORTENING_OF_LOAN_TENURE_COMBINATION,
  DATA_STATE_DDA_SHORT,
  DATA_STATE_LENGTHENING_DDA,
  DATA_STATE_LENGTHENING_SHORT,
  DATA_STATE_LENGTH_PARTIAL,
  DATA_STATE_LENGTH_SHORT,
  DATA_STATE_PARTIAL_DDA,
  DATA_STATE_REPRICING_DDA,
  DATA_STATE_REPRICING_LENGTHENING,
  DATA_STATE_REPRICING_LENGTHENING_DDA,
  DATA_STATE_REPRICING_LENGTHENING_DDA_MIX,
  DATA_STATE_REPRICING_LENGTHENING_PARTIAL,
  DATA_STATE_REPRICING_PARTIAL,
  DATA_STATE_REPRICING_PARTIAL_DDA,
  DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA,
  DATA_STATE_REPRICING_PARTIAL_SHORT_DDA,
  DATA_STATE_REPRICING_SHORT,
  DATA_STATE_REPRICING_SHORT_DDA_MIX,
  DATA_STATE_REPRICING_SHORT_PARTIAL,
  DATA_STATE_REPRICING_SHORT_PARTIAL_DDA,
  DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA,
  FEE_OF_500, FEE_OF_500_LENGTHENING, FEE_OF_500_REPRICING, FEE_OF_500_REPRICING_AND_LENGTHENING, LIST_CHECKBOX_YES_NO,
  LIST_SELECT_FULL_REDEMPTION,
  LIST_SELECT_PARTIAL,
  NO,
  YES,
  SUB_TITLE_PAGE_LANDING_1,
  TEXT_OCBC_SUPPORT,
  SUB_TITLE_PAGE_LANDING_2,
  LIST_REQUEST_REPRICING,
  DATA_STATE_LENGTHENING_PARTIAL_DDA,
  SUB_TITLE_PAGE_LANDING_3,
  SUB_TITLE_PAGE_LANDING_4
} from "../../utils/constants";

// import types
import { ILanding } from "./Landing";

// render UI
const LandingMessage: React.FC<ILanding.ILandingMessage> = (props) => {

  const {
    cx,
    keyValidation,
    contentShow,
    listSelectPurpose,
    setValueFormLandingPage,
    formDataLanding,
    errCheckbox,
    checkMatchOption,
    listSelectPartialPrepayment,
    listSelectFullRedemption
  } = props;

  const renderDataPartial = () => (
    <>
      {
        formDataLanding.lockIn === NO &&
        (
          <Grid
            item lg={12} md={12} sm={12} xs={12}
            className={cx('col-msg')}
          >

            {
              (formDataLanding.yourRate === LIST_SELECT_PARTIAL[0].value) && (
                <div className={cx('msg-dda', 'msg-select', 'padding-common')}>
                  <p className={cx('mt-dt-30 mb-dt-20')}><strong>Partial prepayment</strong></p>
                  {DATA_PARTIAL_PREPAYMENT.selectNoFees}
                </div>
              )
            }
            {
              formDataLanding.yourRate && (
                <Grid
                  item lg={12} md={12} sm={12} xs={12}
                  className={cx('col-msg')}
                >
                  <div className="msg-dda msg-select padding-common">
                    {formDataLanding.yourRate !== LIST_SELECT_PARTIAL[0].value && <p className={cx('mt-dt-30 mb-dt-20')}><strong>Partial prepayment</strong></p>}
                    {/* {formDataLanding.yourRate !== LIST_SELECT_PARTIAL[0].value && <p>{SUB_TITLE_PAGE_LANDING_3}</p>} */}
                    {/* <Link 
                      classHover="linkUnderline"
                      target="_blank"
                      fontSizeMB={14}
                      href="https://www.ocbc.com/personal-banking/help-and-support"
                    >
                      {TEXT_OCBC_SUPPORT}
                    </Link> */}
                    <p>{SUB_TITLE_PAGE_LANDING_4}</p>
                  </div>
                  <div className="msg-dda msg-select padding-common">
                    <p>
                      {SUB_TITLE_PAGE_LANDING_1}
                      <Link 
                      classHover="linkUnderline"
                      target="_blank"
                      fontSizeMB={14}
                      href="https://www.ocbc.com/personal-banking/help-and-support"
                    >
                      {TEXT_OCBC_SUPPORT}
                    </Link>
                    {SUB_TITLE_PAGE_LANDING_2}
                    </p>
                  </div>
                </Grid>
              )
            }
          </Grid>
        )
      }
      {/* YES */}
      {
        formDataLanding.lockIn === YES &&
        (
          <Grid
            item lg={12} md={12} sm={12} xs={12}
            className={cx('col-msg')}
          >
            {
              formDataLanding.yourRate === LIST_SELECT_PARTIAL[1].value && (
                <div className={cx('msg-dda', 'msg-select', 'padding-common')}>
                  <p className={cx('mt-dt-30 mb-dt-20')}><strong>Partial prepayment</strong></p>
                  {DATA_PARTIAL_PREPAYMENT.selectYesFees1dot5}
                </div>
              )
            }

            {
              (formDataLanding.yourRate === LIST_SELECT_PARTIAL[0].value) && (
                <>
                  <p className={cx('padding-common', 'mt-dt-30 mb-dt-20')}><strong>Partial prepayment</strong></p>
                  <p className={cx('msg-dda', 'msg-select', 'padding-common')}>
                    {DATA_PARTIAL_PREPAYMENT.selectYesFees0dot5}
                  </p>
                  <p className={cx('msg-dda', 'msg-select', 'padding-common')}>
                    {DATA_PARTIAL_PREPAYMENT.selectYesFees0date}
                  </p>
                  <p className={cx('msg-dda', 'msg-select', 'padding-common')}>
                    {DATA_PARTIAL_PREPAYMENT.selectYesFees0if}
                  </p>
                </>
              )
            }
            {
              (formDataLanding.yourRate === LIST_SELECT_PARTIAL[2].value) && (
                <div className={cx('msg-dda', 'msg-select', 'padding-common')}>
                  <p className={cx('mt-dt-30 mb-dt-20')}><strong>Partial prepayment</strong></p>
                  {DATA_PARTIAL_PREPAYMENT.selectYesFees3dot5}
                </div>
              )
            }
            {
              formDataLanding.yourRate && (
                <Grid
                  item lg={12} md={12} sm={12} xs={12}
                  className={cx('col-msg')}
                >
                  <p className="msg-dda msg-select padding-common">
                    {SUB_TITLE_PAGE_LANDING_4}
                  </p>
                  <div className="msg-dda msg-select padding-common">
                    <p>
                      {SUB_TITLE_PAGE_LANDING_1}
                      <Link 
                      classHover="linkUnderline"
                      target="_blank"
                      fontSizeMB={14}
                      href="https://www.ocbc.com/personal-banking/help-and-support"
                    >
                      {TEXT_OCBC_SUPPORT}
                    </Link>
                    {SUB_TITLE_PAGE_LANDING_2}
                    </p>
                  </div>
                </Grid>
              )
            }

          </Grid>
        )
      }
    </>
  )

  const renderDataDDA = () => (
    <><div className={cx('msg-dda', 'msg-select', 'padding-common')}>
      <p className={cx('mb-dt-20')}><strong>Change of debiting account</strong></p>
      {DATA_DDA_ACCOUNT.msg}
      <Link href="https://www.ocbc.com/personal-banking/help-and-support" target="_blank" classHover="linkUnderline">{DATA_DDA_ACCOUNT.textLink} </Link>
      {DATA_DDA_ACCOUNT.textFinal}
    </div>
    <p className={cx('msg-dda', 'msg-select', 'padding-common')}>
        {DATA_DDA_ACCOUNT.msgNoFee}
    </p></>
  )

  const hasPartial = contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[3].label && !errCheckbox || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_DDA) || checkMatchOption(DATA_STATE_LENGTH_SHORT) || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_SHORT_DDA)

  return (
    <section className={cx('section-msg', 'content')} id='section-msg'>

      <div className={cx('col-left')}>
      </div>
      <div className={cx('col-right')}>
        
        {/* Repricing or/and Lengthening of loan tenure  */}
        {
          (contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[0].label && !errCheckbox || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING) || checkMatchOption(DATA_STATE_REPRICING_DDA) || checkMatchOption(DATA_STATE_REPRICING_SHORT) || checkMatchOption(DATA_STATE_REPRICING_SHORT_DDA_MIX) || checkMatchOption(DATA_STATE_REPRICING_DDA) || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA_MIX) || checkMatchOption(DATA_STATE_REPRICING_DDA) || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA_MIX)) && (
            <Grid
              container
              className={cx('content-item')}
            >
              <Grid
                item lg={4} md={4} sm={12} xs={12}
                className={cx('col-content', 'col-select-op1', 'padding-common')}
              >
                <Select
                  label={DATA_LENGTHENING_OF_LOAN_TENURE.select.label}
                  listValues={listSelectPurpose}
                  single
                  placeholder={DATA_LENGTHENING_OF_LOAN_TENURE.select.placeholder}
                  selectKey={keyValidation}
                  defaultValue={formDataLanding.purpose}
                  getValue={(value: any) => {
                    setValueFormLandingPage(
                      'purpose',
                      value.value,
                    );
                  }}
                />
              </Grid>
              <Grid
                item lg={12} md={12} sm={12} xs={12}
                className={cx('col-msg')}
              >
                <div className={cx('msg-dda', 'msg-select', 'padding-common')}>

                  {(checkMatchOption(DATA_REPRICING) || checkMatchOption(DATA_STATE_REPRICING_SHORT) || checkMatchOption(DATA_STATE_REPRICING_DDA) || checkMatchOption(DATA_STATE_REPRICING_SHORT_DDA_MIX)) ? 
                  <>
                    <p><strong>Repricing</strong></p>
                    <p className={cx('mt-dt-20')}>{FEE_OF_500_REPRICING}</p>
                  </>
                  : '' }
                  {(checkMatchOption(DATA_STATE_REPRICING_LENGTHENING) || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA_MIX)) ? FEE_OF_500_REPRICING_AND_LENGTHENING : ''}
                </div>
                <div className={cx('msg-dda', 'msg-select', 'padding-common')}>
                {(checkMatchOption(DATA_STATE_REPRICING_SHORT) || checkMatchOption(DATA_STATE_REPRICING_SHORT_DDA_MIX)) ? 
                <>
                  <p><strong>Shortening of loan tenure</strong></p>
                  <p className={cx('mt-dt-20')}>{DATA_SHORTENING_OF_LOAN_TENURE.msg}</p>
                </>
                : ''}</div>
                {(checkMatchOption(DATA_STATE_REPRICING_DDA) || checkMatchOption(DATA_STATE_REPRICING_SHORT_DDA_MIX) || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA_MIX)) && renderDataDDA()}
              </Grid>
            </Grid>
          )
        }

        {/* Repricing and Partial prepayment and/or Lengthening of loan tenure */}
        {
          (checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL) || checkMatchOption(DATA_STATE_REPRICING_PARTIAL) || checkMatchOption(DATA_STATE_PARTIAL_DDA) || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL) || checkMatchOption(DATA_STATE_LENGTH_PARTIAL) || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA) || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA) || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL_DDA) || hasPartial) && (
            <Grid
              container
              className={cx('content-item')}
            >
              {!hasPartial && <Grid
                item lg={4} md={4} sm={12} xs={12}
                className={cx('col-content', 'col-select-op1', 'padding-common',  'mb-40')}
              >
                <Select
                  label={DATA_LENGTHENING_OF_LOAN_TENURE.select.label}
                  listValues={listSelectPurpose}
                  single
                  placeholder={DATA_LENGTHENING_OF_LOAN_TENURE.select.placeholder}
                  selectKey={keyValidation}
                  defaultValue={formDataLanding.purpose}
                  getValue={(value: any) => {
                    setValueFormLandingPage(
                      'purpose',
                      value.value,
                    );
                  }}
                />
              </Grid>}

              <Grid
                item lg={4} md={4} sm={12} xs={12}
                className={cx('col-content', 'col-radio-long-one-month', 'padding-common',  'mb-40')}
              >
                <Radio
                  name="lockIn"
                  listCheckBox={LIST_CHECKBOX_YES_NO}
                  label={hasPartial ? DATA_PARTIAL_PREPAYMENT.radio.label : DATA_MIX_THREE_OPT.radio.label}
                  radioKey={keyValidation}
                  value={formDataLanding.lockIn}
                  getValue={(value: any) => {
                    setValueFormLandingPage(
                      'lockIn',
                      value,
                    );
                  }}
                />
              </Grid>

              <Grid
                item lg={4} md={4} sm={12} xs={12}
                className={cx('col-content', 'padding-common')}
              >
                <Select
                  label={DATA_MIX_THREE_OPT.select.label}
                  listValues={listSelectPartialPrepayment}
                  single
                  placeholder={DATA_MIX_THREE_OPT.select.placeholder}
                  selectKey={keyValidation}
                  defaultValue={formDataLanding.yourRate}
                  getValue={(value: any) => {
                    setValueFormLandingPage(
                      'yourRate',
                      value.value,
                    );
                  }}
                />
              </Grid>

              <Grid
                item lg={12} md={12} sm={12} xs={12}
                className={cx('col-msg')}
              >
                {(checkMatchOption(DATA_STATE_PARTIAL_DDA) || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL_DDA) || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL) || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA) || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL)) && <div className={cx('msg-dda', 'msg-select', 'padding-common')}>
                  {(checkMatchOption(DATA_STATE_PARTIAL_DDA) || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL_DDA)) ? 
                  <>
                  <p className={cx('mb-dt-20')}><strong>Repricing</strong></p>
                  {FEE_OF_500_REPRICING} 
                  </>
                  : (checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL) || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA)) ? FEE_OF_500_REPRICING_AND_LENGTHENING : <>
                  <p className={cx('mb-dt-20')}><strong>Repricing</strong></p>
                  {FEE_OF_500}</>}
                </div>}
                {checkMatchOption(DATA_STATE_REPRICING_PARTIAL) && <div className={cx('msg-dda', 'msg-select', 'padding-common')}>
                  <p className={cx('mb-dt-20')}><strong>Repricing</strong></p>
                  {DATA_MIX_THREE_OPT.feeOf500}
                  </div>}
                {(checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL_DDA) || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL) || checkMatchOption(DATA_STATE_LENGTH_SHORT) || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_SHORT_DDA)) && 
                  <>
                  <div className={cx('msg-dda', 'msg-select', 'padding-common')}>
                    <p className={cx('mb-dt-20')}><strong>Shortening of loan tenure</strong></p>
                    {DATA_SHORTENING_OF_LOAN_TENURE.msg}
                    </div>
                  </>}
                {(checkMatchOption(DATA_STATE_LENGTH_PARTIAL) || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA) || checkMatchOption(DATA_STATE_LENGTHENING_PARTIAL_DDA)) && <p className={cx('msg-dda', 'msg-select', 'padding-common')}>
                  <p className={cx('mb-dt-20')}><strong>Lengthening of loan tenure</strong></p>
                  {DATA_LENGTHENING_OF_LOAN_TENURE.selectFee500}
                </p>}
              </Grid>
              {renderDataPartial()}
              {(checkMatchOption(DATA_STATE_PARTIAL_DDA) || checkMatchOption(DATA_STATE_REPRICING_SHORT_PARTIAL_DDA) || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA) || checkMatchOption(DATA_STATE_LENGTHENING_PARTIAL_DDA) || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_SHORT_DDA) || checkMatchOption(DATA_STATE_REPRICING_PARTIAL_DDA)) ? renderDataDDA() : ''}
            </Grid>
          )
        }

        {/* Lengthening of loan tenure */}
        <p>{checkMatchOption(DATA_STATE_LENGTHENING_DDA)}</p>
        {
          ((contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[1].label && !errCheckbox) || checkMatchOption(DATA_STATE_LENGTHENING_DDA) || checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA)) && (
            <Grid
              container
              className={cx('content-item')}
            >
              <Grid
                item lg={4} md={4} sm={12} xs={12}
                className={cx('col-content', 'col-select-op1', 'padding-common')}
              >
                <Select
                  label={DATA_LENGTHENING_OF_LOAN_TENURE.select.label}
                  listValues={listSelectPurpose}
                  single
                  placeholder={DATA_LENGTHENING_OF_LOAN_TENURE.select.placeholder}
                  selectKey={keyValidation}
                  defaultValue={formDataLanding.purpose}
                  getValue={(value: any) => {
                    setValueFormLandingPage(
                      'purpose',
                      value.value,
                    );
                  }}
                />
              </Grid>

              <Grid
                item lg={12} md={12} sm={12} xs={12}
                className={cx('col-msg')}
              >
                <div className={cx('msg-dda', 'msg-select', 'padding-common')}>
                  <p className={cx('mb-dt-20')}><strong>Lengthening of loan tenure</strong></p>
                  {DATA_LENGTHENING_OF_LOAN_TENURE.selectFee500}
                </div>
                {checkMatchOption(DATA_STATE_REPRICING_LENGTHENING_DDA) && renderDataDDA()}
              </Grid>
            </Grid>
          )
        }

        {/* Chosen Shortening of loan tenure */}
        {
          (contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[2].label && !errCheckbox || checkMatchOption(DATA_STATE_DDA_SHORT)) && (
            <>
              <div className={cx('msg-dda', 'padding-common')}>
              <p className={cx('mb-dt-20')}><strong>Shortening of loan tenure</strong></p>
                {DATA_SHORTENING_OF_LOAN_TENURE.msg}
              </div>
              {checkMatchOption(DATA_STATE_DDA_SHORT) && renderDataDDA()}
            </>
          )
        }

        {/* Partial prepayment */}
        
        {/* Full redemption on all loans */}
        {
          contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[4].label && !errCheckbox && (
            <Grid
              container
              className={cx('content-item')}
            >

              {/* Radio Lock-in */}
              <Grid
                item lg={4} md={4} sm={12} xs={12}
                className={cx('col-content', 'padding-common', 'col-radio-long', 'mb-40')}
              >
                <Radio
                  name="lockIn"
                  listCheckBox={LIST_CHECKBOX_YES_NO}
                  label={DATA_FULL_REDEMPTION_ON_ALL_LOAN.radio.label}
                  radioKey={keyValidation}
                  value={formDataLanding.lockIn}
                  getValue={(value: any) => {
                    setValueFormLandingPage(
                      'lockIn',
                      value,
                    );
                  }}
                />
              </Grid>

              {/* Select reason */}
              {
                <Grid
                  item lg={4} md={4} sm={12} xs={12}
                  className={cx('col-content', 'col-select', 'padding-common')}
                >
                  <Select
                    label={DATA_FULL_REDEMPTION_ON_ALL_LOAN.select.label}
                    listValues={listSelectFullRedemption}
                    single
                    placeholder={DATA_FULL_REDEMPTION_ON_ALL_LOAN.select.placeholder}
                    selectKey={keyValidation}
                    defaultValue={formDataLanding.reason}
                    getValue={(value: any) => {
                      setValueFormLandingPage(
                        'reason',
                        value.value,
                      );
                    }}
                  />
                </Grid>
              }

              {/* Section display message */}

              {/* Checkbox Full redemption on all loans */}
              {/* NO */}
              {
                formDataLanding.lockIn === NO &&
                (
                  <Grid
                    item lg={12} md={12} sm={12} xs={12}
                    className={cx('col-msg')}
                  >
                    {
                      (formDataLanding.reason === LIST_SELECT_FULL_REDEMPTION[0].value || formDataLanding.reason === LIST_SELECT_FULL_REDEMPTION[2].value) && (
                        <div className={cx('msg-dda', 'msg-select', 'padding-common')}>
                          <p className={cx('mt-dt-30 mb-dt-20')}><strong>Full redemption of loan</strong></p>
                          {DATA_FULL_REDEMPTION_ON_ALL_LOAN.selectNoFees}
                        </div>
                      )
                    }

                    {
                      formDataLanding.reason === LIST_SELECT_FULL_REDEMPTION[1].value && (
                        <>
                        <p className={cx('padding-common mt-dt-30 mb-dt-20')}><strong>Full redemption of loan</strong></p>
                        <p className={cx('msg-dda', 'msg-select', 'padding-common')}>
                          {DATA_FULL_REDEMPTION_ON_ALL_LOAN.selectNoFees1dot5}
                        </p><p className={cx('msg-dda', 'msg-select', 'padding-common')}>
                            {DATA_FULL_REDEMPTION_ON_ALL_LOAN.selectNoFees1latest}
                          </p><p className={cx('msg-dda', 'msg-select', 'padding-common')}>
                            {DATA_FULL_REDEMPTION_ON_ALL_LOAN.selectNoFees1reward}
                          </p></>
                      )
                    }
                  </Grid>
                )
              }
              {/* YES */}
              {
                formDataLanding.lockIn === YES &&
                (
                  <Grid
                    item lg={12} md={12} sm={12} xs={12}
                    className={cx('col-msg')}
                  >
                    {
                      formDataLanding.reason === LIST_SELECT_FULL_REDEMPTION[0].value && (
                        <>
                        <p className={cx('padding-common mt-dt-30 mb-dt-20')}><strong>Full redemption of loan</strong></p>
                        <p className={cx('msg-dda', 'msg-select', 'padding-common')}>
                          {DATA_FULL_REDEMPTION_ON_ALL_LOAN.selectYesFees0dot75}
                        </p><p className={cx('msg-dda', 'msg-select', 'padding-common')}>
                            {DATA_FULL_REDEMPTION_ON_ALL_LOAN.selectYesFees0latest}
                          </p><p className={cx('msg-dda', 'msg-select', 'padding-common')}>
                            {DATA_FULL_REDEMPTION_ON_ALL_LOAN.selectNoFees1reward}
                          </p></>
                      )
                    }

                    {
                      (formDataLanding.reason === LIST_SELECT_FULL_REDEMPTION[1].value || formDataLanding.reason === LIST_SELECT_FULL_REDEMPTION[2].value) && (
                        <>
                        <p className={cx('padding-common mt-dt-30 mb-dt-20')}><strong>Full redemption of loan</strong></p>
                        <p className={cx('msg-dda', 'msg-select', 'padding-common')}>
                          {DATA_FULL_REDEMPTION_ON_ALL_LOAN.selectYesFees1dot5}
                        </p><p className={cx('msg-dda', 'msg-select', 'padding-common')}>
                            {DATA_FULL_REDEMPTION_ON_ALL_LOAN.selectYesFees0latest}
                          </p><p className={cx('msg-dda', 'msg-select', 'padding-common')}>
                            {DATA_FULL_REDEMPTION_ON_ALL_LOAN.selectNoFees1reward}
                          </p></>
                      )
                    }

                  </Grid>
                )
              }

            </Grid>
          )
        }

        {/* Chosen DDA account */}
        {
          contentShow.length === 1 && contentShow[0] === DATA_CARD_CHECKBOX[5].label && !errCheckbox && (
            <>{renderDataDDA()}</>
          )
        }
      </div>

    </section>
  );
};
export default LandingMessage;
