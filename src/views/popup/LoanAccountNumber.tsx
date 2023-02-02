import React, { useState } from "react";
import styles from "./popup.scss";
import classnames from "classnames/bind";
import {
  Link
} from '@sectionsg/orc';

// import image
import IconLoanNumber from '../../assets/images/icon-loan-account-number.png';
const cx = classnames.bind(styles);

const LoanAccountNumber: React.FC = ({ }) => {
  return (
    <div className={cx('mod-popup')}>
      <h4 className="d-flex align-items-center text-title">
        <img src={IconLoanNumber} alt="icon" className="icon-dialog"/>
        <span>Where can I find my loan account number?</span>
      </h4>
      <div className={cx('text-body', 'mt-dt-20')}>
        <p>
        Log in to the OCBC Digital app or 
          {' '}
          <Link
            href="https://internet.ocbc.com/internet-banking/" classHover="linkUnderline" target="_blank"
          >
            OCBC Internet Banking
          </Link>.
          Your loan account numbers will be shown under the <b>"Loans"</b> section on the home page.
        </p>
      </div>
    </div>
  );
};
export default LoanAccountNumber;
