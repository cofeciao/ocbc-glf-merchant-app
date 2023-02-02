import React, { useState } from "react";
import styles from "./popup.scss";
import classnames from "classnames/bind";
import {
  Link
} from '@sectionsg/orc';

// import image
import IconLoanNumber from '../../assets/images/icon-loan-account-number.png';
const cx = classnames.bind(styles);

const Error: React.FC<any> = ({ dataError }) => {
  return (
    <>
      {
        dataError && dataError && (
          <div className={cx('mod-popup')}>
          <h4 className="d-flex align-items-center text-title">
            <span>Error code: {dataError && dataError.ProviderError && dataError.ProviderError[0] && dataError.ProviderError[0].ProviderErrorCode}</span>
          </h4>
          <div className={cx('text-body', 'mt-dt-20')}>
            <p>
            {dataError && dataError.ProviderError && dataError.ProviderError[0] && dataError.ProviderError[0].ProviderErrorDetail}
            </p>
          </div>
        </div>
        )
      }
    </>
  );
};
export default Error;
