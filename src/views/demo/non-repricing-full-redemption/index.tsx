// import icon
import { setPropertyRequest } from "@/store/form";
import CloseIcon from "@material-ui/icons/Close";

// import lib
import {
  Button
} from '@sectionsg/orc';

// import modules
import classnames from "classnames/bind";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// import constant
import { DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA, LIST_PROPERTY, LIST_REQUEST_REPRICING } from "../../../utils/constants";

// import reducer
import { INoneRepricingRequest } from "../../non-repricing-requests/NoneRepricingRequest";

// import style
import styles from "../demo.scss";

const cx = classnames.bind(styles);

// render UI
const NonRepricingFullRedemptionRequestDemo: React.FC<INoneRepricingRequest.IDemoPage> = (props) => {

  const { handleChangeRequestRepricing } = props;

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
          <h6 className={cx("title-demo")}>Request Property</h6>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setPropertyRequest(LIST_PROPERTY[0])); closeDemo(); }}>
              Local property
            </Button>
          </div>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setPropertyRequest(LIST_PROPERTY[1])); closeDemo(); }}>
              Overseas property
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NonRepricingFullRedemptionRequestDemo;
