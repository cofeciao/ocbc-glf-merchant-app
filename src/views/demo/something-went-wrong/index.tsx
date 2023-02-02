import CloseIcon from "@material-ui/icons/Close";
import {
  Button
} from '@sectionsg/orc';
import classnames from "classnames/bind";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMainApplicant } from "../../../store/form";
import styles from "../demo.scss";

const cx = classnames.bind(styles);

const SomethingWentWrongDemo: React.FC = (props, { }) => {

  const [open, setOpen] = useState<boolean>(false);
  const openDemo = () => {
    setOpen(true);
  };
  const closeDemo = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

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
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setMainApplicant(
              'Singpass'
            ))
            ; closeDemo(); }}>
              Singpass flow
            </Button>
          </div>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setMainApplicant('Manual')); closeDemo(); }}>
              Manual Flow
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SomethingWentWrongDemo;
