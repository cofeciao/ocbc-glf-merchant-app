import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "../demo.scss";
const cx = classnames.bind(styles);
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from 'react-redux';
import {
  Button,
} from '@sectionsg/orc';
import { setErrorConnection } from "@/store/form";
import { infoAPI, infoAPIForeigner, infoRepricingRequestMultiple, infoRepricingRequestSingle } from '@/data-manager/info';
import { getMyInfo, setInfoRequestBorrowRequest } from '@/store/form';

const ReviewDemo: React.FC = ({
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const openDemo = () => {
    setOpen(true);
  };
  const closeDemo = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();


  /**
 * Handle call request multiple account number
 * @function 
 * @returns {object}
 */
  // const handleCallMultipleAccountNumber = () => {
  //   infoRepricingRequestMultiple().then((res) => {
  //     dispatch(setInfoRequestBorrowRequest(res));
  //   });
  // }

  /**
* Handle call request multiple account number
* @function 
* @returns {object}
*/
  // const handleCallSingleAccountNumber = () => {
  //   infoRepricingRequestSingle().then((res) => {
  //     dispatch(setInfoRequestBorrowRequest(res));
  //   });
  // }

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
          <h6 className={cx("title-demo")}>Request loan accounts</h6>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { closeDemo(); }}>
              Single loan accounts
            </Button>
            <Button backgroundClass="bgClearblue" onClick={() => { closeDemo(); }}>
              Multiple loan accounts
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};


export default ReviewDemo;
