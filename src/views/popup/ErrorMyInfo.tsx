import React from "react";
import { Button, Link } from '@sectionsg/orc';
import { useState } from "react";


const ErrorMyInfo: React.FC<any> = ({ cx, title, dataError, description, closeDialog }) => {
  const [open, setOpend] = useState(false);
  return (
    <>
      <div className={cx('mod-popup')}>
        <h4 className="d-flex align-items-center text-title">
          <span>{title}</span>
        </h4>
        <div className={cx('text-body', 'mt-dt-20')}>
          <div className={cx("link")}>
            {!open && <Link isOnClick onClick={() => setOpend(!open)}>View error details</Link>}
            {
              open && (
                <>
                  <p><span>Error code: {dataError.ErrorCode}</span></p>
                  <p><span>Error description: {dataError.ErrorDescription}</span></p>
                </>
              )
            }
          </div>
          
        </div>
        <div className={cx('mt-dt-30')}>
          <p className={cx('mb-dt-10')}>
            {description}
          </p>
          <Button backgroundClass="bgGunmetalBluegrey" onClick={() => { closeDialog() }}>
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};
export default ErrorMyInfo;
