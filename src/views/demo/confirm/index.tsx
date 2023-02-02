import CloseIcon from "@material-ui/icons/Close";
import {
  Button
} from '@sectionsg/orc';
import classnames from "classnames/bind";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { saveFormData } from "../../../store/form";
import styles from "../demo.scss";

const cx = classnames.bind(styles);

const ConfirmDemo: React.FC = (props, { }) => {

  const [open, setOpen] = useState<boolean>(false);
  const openDemo = () => {
    setOpen(true);
  };
  const closeDemo = () => {
    setOpen(false);
  };
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
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(saveFormData(
              {
                ...formReduxData.form,
                listChecked: ['Repricing'],
                isSingle: true,
                borrowers: '',
              }
            ))
            ; closeDemo(); }}>
              Repricing and/or lengthening of tenure; single applicant
            </Button>
          </div>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(saveFormData(
              {
                ...formReduxData.form,
                listChecked: ['Repricing'],
                isSingle: false,
                borrowers: 'multiple',
              }
            )); closeDemo(); }}>
              Repricing and/or lengthening of tenure; multiple borrowers
            </Button>
          </div>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(saveFormData(
              {
                ...formReduxData.form,
                listChecked: ['Repricing'],
                isSingle: false,
                borrowers: 'joint',
              }
            )); closeDemo(); }}>
              Repricing and/or lengthening of tenure (joint borrower)
            </Button>
          </div>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(saveFormData(
              {
                ...formReduxData.form,
                listChecked: ['Full redemption of loan'],
                isSingle: false,
                borrowers: '',
              }
            )); closeDemo(); }}>
              Shortening of loan tenure, Partial prepayment, Full redemptions, Change of DDA account
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConfirmDemo;
