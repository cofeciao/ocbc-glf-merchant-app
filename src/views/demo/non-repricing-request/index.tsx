// import icon
import { setErrorConnection, setPropertyRequest } from "@/store/form";
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
import { ACCOUNT_REQUEST, DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA, LIST_PROPERTY, LIST_REQUEST_REPRICING } from "../../../utils/constants";

// import reducer
import { INoneRepricingRequest } from "../../non-repricing-requests/NoneRepricingRequest";

// import style
import styles from "../demo.scss";

const cx = classnames.bind(styles);

// render UI
const NonRepricingRequestDemo: React.FC<INoneRepricingRequest.IDemoPage> = (props) => {

  const { handleChangeRequestRepricing, handleRequestAccount } = props;

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
              Overseas
            </Button>
          </div>
          <h6 className={cx("title-demo")}>Request account</h6>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { handleRequestAccount(ACCOUNT_REQUEST[0]); closeDemo(); }}>
              Single account
            </Button>
          </div>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { handleRequestAccount(ACCOUNT_REQUEST[1]); closeDemo(); }}>
              Multiple account
            </Button>
          </div>
          <h6 className={cx("title-demo")}>Non-Repricing and Repricing</h6>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { handleChangeRequestRepricing(LIST_REQUEST_REPRICING.multiple); closeDemo(); }}>
              Repricing and multiple none-reoricing
            </Button>
          </div>
          <h6 className={cx("title-demo")}>Non-Repricing</h6>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { handleChangeRequestRepricing(LIST_REQUEST_REPRICING.partialPrepayment); closeDemo(); }}>
              Partial prepayment
            </Button>
          </div>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { handleChangeRequestRepricing(LIST_REQUEST_REPRICING.lengtheningOfLoanTenure); closeDemo(); }}>
              Lengthening of loan tenure request
            </Button>
          </div>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { handleChangeRequestRepricing(LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans); closeDemo(); }}>
              Full redemption of all loans
            </Button>
          </div>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { handleChangeRequestRepricing(LIST_REQUEST_REPRICING.shorteningOfLoanTenure); closeDemo(); }}>
              Shortening of loan tenure
            </Button>
          </div>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { handleChangeRequestRepricing(LIST_REQUEST_REPRICING.ddaAccount); closeDemo(); }}>
              Change of Direct Debit Authorisation account
            </Button>
          </div>
          <h6 className={cx("title-demo")}>Request status document</h6>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setErrorConnection(true)); closeDemo(); }}>
              <p className="d-block">
                Connection problem
                {' '}
                <br />
                <span className="fz-14">(case upload document with connection problem show and error message 'An error occurred, please re-upload your document' )</span>
              </p>
            </Button>
          </div>
          <div className={cx("mb-24")}>
            <Button backgroundClass="bgClearblue" onClick={() => { dispatch(setErrorConnection(false)); closeDemo(); }}>
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
export default NonRepricingRequestDemo;
