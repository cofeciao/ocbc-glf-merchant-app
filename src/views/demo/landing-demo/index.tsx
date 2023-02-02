import CloseIcon from "@material-ui/icons/Close";
import {
  Button
} from '@sectionsg/orc';
import classnames from "classnames/bind";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { saveFormData, setIsBorrower, setLengthenTenure, setMainApplicant, setPreCheckedRepricing, setTypeVerify } from "../../../store/form";
import {
  LENGTHEN_TENURE1,
  LENGTHEN_TENURE2, MANUAL, OTP_JOINT_MANUAL, SINGPASS, TYPE_VERIFY_IT_IS_YOU
} from "../../../utils/constants";
/**
 * import types
 */
import { ILanding } from "../../landing/Landing";
import styles from "../demo.scss";


const cx = classnames.bind(styles);

const LandingDemo: React.FC<ILanding.ILandingDemo> = (props) => {
  const { handleSetDefaultManualJointBorrower, handleAddBothRepricingAndLengthening } = props;

  const [open, setOpen] = useState<boolean>(false);
  const openDemo = () => {
    setOpen(true);
  };
  const closeDemo = () => {
    setOpen(false);
  };
  const history = useHistory();
  const dispatch = useDispatch();
  const formReduxData = useSelector((state: any) => state.form);

  return (
    <>
      <div className={cx("panel-image")} onClick={() => openDemo()}>
        Demo
      </div>
      <div className={cx(`demo-wrapper ${open ? "open" : ""}`)}>
        <span className={cx("close-btn-demo")} onClick={() => closeDemo()}>
          <CloseIcon className={cx("icon-style")} />
        </span>
        <div className={cx("content-demo")}>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { history.push('/some-thing-went-wrong'); closeDemo(); }}>
              Some Thing Went Wrong
            </Button>
          </div>
          <h6 className={cx("title-demo")}>Main applicant</h6>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setMainApplicant(SINGPASS)); closeDemo(); }}>
              Singpass
            </Button>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setMainApplicant(MANUAL)); closeDemo(); }}>
              Manual
            </Button>
          </div>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setPreCheckedRepricing(true)); closeDemo(); }}>
              Pre-select Repricing(Entry point is from repricing page)
            </Button>
          </div>
          {/* <h6 className={cx("title-demo")}>What you need</h6>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setLengthenTenure(LENGTHEN_TENURE1)); closeDemo(); }}>
              Documents you will need (Default)
            </Button>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setLengthenTenure(LENGTHEN_TENURE2)); closeDemo(); }}>
              Documents you will need (List full)
            </Button>
          </div> */}
          <h6 className={cx("title-demo")}>Joint Borrower</h6>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setIsBorrower(true)); dispatch(setMainApplicant(SINGPASS)); handleAddBothRepricingAndLengthening(); closeDemo(); }}>
              Joint Borrower - Singpass
            </Button>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setIsBorrower(true)); dispatch(setMainApplicant(MANUAL)); handleAddBothRepricingAndLengthening(); closeDemo(); }}>
              Joint Borrower - Manual
            </Button>
          </div>
          <h6 className={cx("title-demo")}>Verify popup</h6>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setTypeVerify(TYPE_VERIFY_IT_IS_YOU[0])); closeDemo(); }}>
              Verify - One Time Password
            </Button>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setTypeVerify(TYPE_VERIFY_IT_IS_YOU[1])); closeDemo(); }}>
              Verify - Press The OTP
            </Button>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setTypeVerify(TYPE_VERIFY_IT_IS_YOU[2])); closeDemo(); }}>
              Verify - Stepper is available
            </Button>
          </div>
          <h6 className={cx("title-demo")}>Document you will need for Manual - Joint Borrower</h6>
          <b>Repricing and/or Lengthening of loan tenure</b>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setIsBorrower(true)); dispatch(setMainApplicant(MANUAL)); handleSetDefaultManualJointBorrower(OTP_JOINT_MANUAL[1]); closeDemo(); }}>
              Investment - No Term loans - Singaporean /PR
            </Button>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setIsBorrower(true)); dispatch(setMainApplicant(MANUAL)); handleSetDefaultManualJointBorrower(OTP_JOINT_MANUAL[0]); closeDemo(); }}>
              Investment - Term loans - Singaporean /PR
            </Button>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setIsBorrower(true)); dispatch(setMainApplicant(MANUAL)); handleSetDefaultManualJointBorrower(OTP_JOINT_MANUAL[2]); closeDemo(); }}>
              Investment - Term loans - Non-Singaporean/PR
            </Button>
          </div>
          <h6 className={cx("title-demo")}>Document you will need for Manual - Joint Borrower</h6>
          <b>Lengthening of loan tenure Only</b>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setIsBorrower(true)); dispatch(setMainApplicant(MANUAL)); handleSetDefaultManualJointBorrower(OTP_JOINT_MANUAL[3]); closeDemo(); }}>
              Singaporean /PR
            </Button>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setIsBorrower(true)); dispatch(setMainApplicant(MANUAL)); handleSetDefaultManualJointBorrower(OTP_JOINT_MANUAL[4]); closeDemo(); }}>
              Non-Singaporean/PR
            </Button>
          </div>
          <h6 className={cx("title-demo")}>Check myinfo page</h6>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => {
              dispatch(saveFormData(
                {
                  ...formReduxData.form,
                  residentialStatus: 'Singapore',
                  hdb: true
                }
              ))
                ; closeDemo();
            }}>
              Residential status returned as Singapore citizen
            </Button>
          </div>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => {
              dispatch(saveFormData(
                {
                  ...formReduxData.form,
                  residentialStatus: 'Foreigner',
                  hdb: true
                }
              )); closeDemo();
            }}>
              Residential status returned as Foreigner
            </Button>
          </div>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => {
              dispatch(saveFormData(
                {
                  ...formReduxData.form,
                  residentialStatus: 'Singapore',
                  hdb: false
                }
              )); closeDemo();
            }}>
              -	Non-HDB registered address (Required for repricing and Lengthening of loan tenure)
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingDemo;
