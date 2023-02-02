import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "../demo.scss";
const cx = classnames.bind(styles);
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from 'react-redux';
import {
  Button,
} from '@sectionsg/orc';
import { getAccountLoan, getBorrowerLoan } from "@/store/form";

const AccountInformationDemo: React.FC = ({
}) => {
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
          <div className={cx("mb-dt-30")}>
            <Button
              onClick={() => {
                closeDemo();
                dispatch(getAccountLoan(0));
                dispatch(getBorrowerLoan(1));
              }}
              backgroundClass="bgGunmetalBluegrey"
              outline={false}
              disabled={false}
            >No Loan Account</Button>
          </div>
          <div className={cx("mb-dt-30")}>
            <Button
              onClick={() => {
                closeDemo();
                dispatch(getAccountLoan(1));
                dispatch(getBorrowerLoan(0));
              }}
              backgroundClass="bgGunmetalBluegrey"
              outline={false}
              disabled={false}
            >No Borrower</Button>
          </div>
          <div className={cx("mb-dt-30")}>
            <Button
              onClick={() => {
                closeDemo();
                dispatch(getAccountLoan(1));
                dispatch(getBorrowerLoan(1));
              }}
              backgroundClass="bgGunmetalBluegrey"
              outline={false}
              disabled={false}
            >
              Has No Loan Account And Borrower
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};


export default AccountInformationDemo;
