// import modules
import classnames from "classnames/bind";
import React from "react";
import {
  Link
} from '@sectionsg/orc';

// import styles
import styles from "./popup.scss";

// import constants
import {
  DATA_NOA_POPUP
} from "../../utils/constants";

// import icon & images
import IconLight from "../../assets/images/icon-light.svg"

const cx = classnames.bind(styles);

// render UI
const NOA: React.FC = () => {

  return (
    <div className={cx('mod-popup')}>

      {/* Title */}
      <div className={cx('title')}>
        <img src={IconLight} alt="" />
        <h2>
          {DATA_NOA_POPUP.title}
        </h2>
      </div>

      {/* Content */}
      <div className={cx('content-popup')}>
        <ul>
          {
            DATA_NOA_POPUP.list.map((item: any, idx: number) => (
              <li key={idx}>
                <i>{idx + 1}.</i>
                {item.label}
                {` `}
                {
                  item.link && (
                    <>
                      <Link
                      href={item.href}
                      classHover="linkUnderline"
                      target=""
                      fontSizeMB={18}
                      isOnClick
                    >
                      {item.link}
                    </Link>.
                    </>
                  )
                }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};
export default NOA;
