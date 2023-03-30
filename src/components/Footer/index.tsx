import classNames from "classnames";
import React from "react";

// styles
import styles from "./Footer.scss"

const Footer = () => {
  // classnames
  const cx = classNames.bind(styles);

  // constants
  const getCurrentYear = new Date().getFullYear();

  return (
    <div className={cx("container")}>
      <div className={cx("container-footer")}>
      <div className={cx("footer-component-left")}>
        <ul>
          <li><a href={`https://www.ocbc.com/group/conditions-of-access`} target="_blank">Conditions of Access</a></li>
          <li><a href={`https://www.ocbc.com/business-banking/bank-policies`} target="_blank">Policies</a></li>
          <li><a href={`https://www.ocbc.com/business-banking/notices`} target="_blank">Notices</a></li>
          <li><a href={`https://www.ocbc.com/personal-banking/security/overview.page`} target="_blank">Security</a></li>
        </ul>
      </div>
      <div className={cx("footer-component-right")}>
        <span>© Copyright 2004 – {getCurrentYear} — OCBC Bank. All Rights Reserved. Co. Reg. No.: 193200032W</span>
      </div>
    </div>
    </div>
  )
}

export default Footer;