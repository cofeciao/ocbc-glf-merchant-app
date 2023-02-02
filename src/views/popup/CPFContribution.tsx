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
  DATA_CPF_CONTRIBUTION_POPUP
} from "../../utils/constants";

// import icon & images
import IconLight from "../../assets/images/icon-light.svg"

const cx = classnames.bind(styles);

// render UI
const CPFContribution: React.FC = () => {

  return (
    <div className={cx('mod-popup')}>

      {/* Title */}
      <div className={cx('title')}>
        <img src={IconLight} alt="" />
        <h2>
          {DATA_CPF_CONTRIBUTION_POPUP.title}
        </h2>
      </div>

      {/* Content */}
      <div className={cx('content-popup')}>
        <ul>
          {
            DATA_CPF_CONTRIBUTION_POPUP.list.map((item: any, idx: number) => (
              <li key={idx + 'list'}>
                {
                  idx === 0 ? (
                    <>
                      <i>{idx + 1}.</i>
                      {item.paragraphFirst}
                      {` `}
                      <Link
                        href={item.href}
                        classHover="linkUnderline"
                        target="_blank"
                        fontSizeMB={18}
                      >
                        {item.link}
                      </Link>
                      {` `}
                      {item.paragraphLast}
                    </>
                  ) : (
                    <>
                      <i>{idx + 1}.</i>
                      {item.label}
                      {` `}
                      {
                        item.link && (
                          <Link
                            href={item.href}
                            classHover="linkUnderline"
                            target=""
                            fontSizeMB={18}
                            isOnClick
                          >
                            {item.link}
                          </Link>
                        )
                      }
                    </>
                  )
                }

              </li>
            ))
          }
        </ul>
        <p className={cx('text-print')}>
          {DATA_CPF_CONTRIBUTION_POPUP.printText}
        </p>
        <div className={cx('infoPrint')}>
          <ul>
            {
              DATA_CPF_CONTRIBUTION_POPUP.listInfoPrint.map((item: any, idx: number) => (
                <li key={idx + 'listInfoPrint'}>
                  <i></i>
                  {item.label}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CPFContribution;
