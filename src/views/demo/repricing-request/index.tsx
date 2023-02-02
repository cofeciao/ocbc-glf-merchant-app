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

const RepricingRequestDemo: React.FC = ({
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
                dispatch(setErrorConnection(true));
              }}
              backgroundClass="bgGunmetalBluegrey"
              outline={false}
              disabled={false}
            >
              <p className="d-block">
                Connection problem
                {' '}
                <br />
                <span className="fz-14">(case upload document with connection problem show and error message 'An error occurred, please re-upload your document' )</span>
              </p>
            </Button>
          </div>
          <div className={cx("mb-dt-30")}>
            <Button
              onClick={() => {
                closeDemo();
                dispatch(setErrorConnection(false));
              }}
              backgroundClass="bgGunmetalBluegrey"
              outline={false}
              disabled={false}
            >
              <p className="d-block">
                Connection not problem
                {' '}
                <br />
                <span className="fz-14">(case upload document with connection not problem)</span>
              </p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};


export default RepricingRequestDemo;
