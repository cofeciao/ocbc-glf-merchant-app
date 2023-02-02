// import modules
import React from "react";
import _ from "lodash"
// import constants
import {
  OKAY,
  RESEND_PASSWORD,
  STEP_INSTRUCTION,
  ERROR_OTP_MESSAGE,
  SUB_TITLE_PAGE_LANDING, SUB_TITLE_PAGE_LANDING_BORROWER, SWITCH_TO_TOKEN,SWITCH_TO_SMS, TITLE_ONE_TIME_VERIFY, TITLE_OTP_VERIFY, TITLE_OTP_VERIFY_DIGIT, TITLE_PAGE_LANDING, TITLE_PAGE_LANDING_BORROWER, TYPE_VERIFY_IT_IS_YOU, VERIFY_IT_IS_YOU
} from "../../utils/constants";

// import icon
import IconOTP from '../../assets/images/iconOtp.png'
import Step1 from '../../assets/images/verify-step-one.png'
import Step2 from '../../assets/images/verify-step-two.png'
import Step3 from '../../assets/images/verify-step-three.png'
import Step4 from '../../assets/images/verify-step-four.png'

// import lib
import { Button, CodeInputPlaceholder } from '@sectionsg/orc';

// import types
import { ILanding } from "../landing/Landing";

// render UI
const BorrowerOTP: React.FC<ILanding.IOTP> = (props) => {
  const { cx, isError, setIsError, handleError, getCodeOTP, isDisableModalVerified, codeOTP, isResend, times, closeDialog, prevOtp, setTimes, CountDown, timeRef, setIsResend, handlePrevOTP, formReduxData, handleClickChangeStep, stepInstruction, handleScrollTopId, handleClickOkForOTP, handleGenerateOTP } = props;
  /**
   * Detect description for OTP
   * @returns {String}
   */
  const detectDescriptionOTP = () => {
    if (formReduxData.verify === TYPE_VERIFY_IT_IS_YOU[0]) {
      return TITLE_ONE_TIME_VERIFY
    }
    if (formReduxData.verify === TYPE_VERIFY_IT_IS_YOU[1]) {
      return TITLE_OTP_VERIFY
    }
    if (formReduxData.verify === TYPE_VERIFY_IT_IS_YOU[2]) {
      return TITLE_OTP_VERIFY_DIGIT
    }
  }
  return (
    <section className={cx('borrower-otp')}>
      <div className={cx('content')}>
        <div className={cx('header-modal')}>
          <img src={IconOTP} alt="" />
          <span>{VERIFY_IT_IS_YOU}</span>
        </div>
        <div className={cx('contentWrap')}>
          <div className={cx('inputCode')}>
            <CodeInputPlaceholder
              label={detectDescriptionOTP()} 
              getValue={(value) => getCodeOTP('code', value)} max={6}
              handleError={handleError}
              placeholder={['0', '0', '0', '0', '0', '0']}
            />
            {
              isError && <div className={cx('error')}>{ERROR_OTP_MESSAGE}</div>
            }
          </div>
          <Button backgroundClass="bgGunmetalBluegrey" className={cx('btn-ok', isDisableModalVerified && 'disable')} onClick={() => { handleClickOkForOTP(); }}>
            {OKAY}
          </Button>
        </div>
        <div className={cx('buttonModal')}>
          {
            formReduxData.verify === TYPE_VERIFY_IT_IS_YOU[0] && (
              <div className={cx('resentOtp')} onClick={() => { setTimes(10); CountDown(); clearTimeout(timeRef.current); setIsResend(true); handlePrevOTP(codeOTP.code); setIsError(false); getCodeOTP('code', ''); handleGenerateOTP()}} aria-hidden="true">
                {RESEND_PASSWORD}
              </div>
            )
          }
          {<div className={cx('resentOtp')} onClick={() => { setTimes(10); CountDown(); clearTimeout(timeRef.current); setIsResend(true); handlePrevOTP(codeOTP.code); setIsError(false); getCodeOTP('code', ''); }} aria-hidden="true">
            { formReduxData.verify === TYPE_VERIFY_IT_IS_YOU[1] ? SWITCH_TO_SMS : SWITCH_TO_TOKEN}
          </div>}
        </div>
        {
          formReduxData.verify === TYPE_VERIFY_IT_IS_YOU[2] && (
            <div className={cx('instruction')}>
              <div className={cx('col-left')}>
                <ul>
                  {
                    STEP_INSTRUCTION.map((item: any, idx: number) => (
                      <li key={idx} className={cx(stepInstruction.index === idx && 'active')} onClick={() => { handleClickChangeStep(item.key, idx); handleScrollTopId('common-dialog') }}>
                        <span>{idx + 1}</span>
                        <p>
                          {item.label}
                        </p>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className={cx('col-right')} id='img-step'>
                {
                  stepInstruction.step === STEP_INSTRUCTION[0].key && (
                    <img src={Step1} alt="" />
                  )
                }
                {
                  stepInstruction.step === STEP_INSTRUCTION[1].key && (
                    <img src={Step2} alt="" />
                  )
                }
                {
                  stepInstruction.step === STEP_INSTRUCTION[2].key && (
                    <img src={Step3} alt="" />
                  )
                }
                {
                  stepInstruction.step === STEP_INSTRUCTION[3].key && (
                    <img src={Step4} alt="" />
                  )
                }
              </div>
            </div>
          )
        }
      </div>
    </section >
  );
};
export default BorrowerOTP;
