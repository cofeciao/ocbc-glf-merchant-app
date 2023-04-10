// import modules
import React from "react";
import { Box, Button } from "@material-ui/core";
import _ from "lodash";
import { Link } from "react-router-dom";
import { CONTINUE_LATER, NEXT, START, SUBMIT } from "@/utils/constants-rm";
import classnames from "classnames/bind";

// import styles
import styles from "./rm.scss";

// import icons
import IconArrowRight from "@/assets/images/icon-arrow-right.svg";
import IconArrowLeft from "@/assets/images/icon-arrow-left.svg";

// import types
import { IRmFlow } from "./rm";

const RedirectButton: React.FC<IRmFlow.IRedirectButton> = (props) => {
  const {
    variant,
    continueLater,
    backButton,
    onClickNext,
    onClickBack,
    onClickContinue,
    disabledNextButton,
    isIcon = true,
  } = props;

  // classnames
  const cx = classnames.bind(styles);

  return (
    <Box className={cx("button-wrapper", "d-flex space-between mt-dt-40")}>
      {/* {Back Button} */}
      {!_.isNil(backButton) && (
        <Button onClick={onClickBack} variant="outlined">
          <img src={IconArrowLeft} alt="icon arrow left" />
        </Button>
      )}

      <Box>
        {/* {Continue Later Button} */}
        {!_.isNil(continueLater) && (
          <Box className={cx("d-inline")}>
            <Link
              id={cx("continue-later")}
              variant="body2"
              to="#"
              onClick={onClickContinue}
            >
              {CONTINUE_LATER}
            </Link>
          </Box>
        )}

        {/* {Main Button} */}
        <Box className="ml-dt-30 d-inline">
          <Button
            variant="contained"
            disabled={disabledNextButton}
            onClick={onClickNext}
          >
            <>
              {(_.isEqual(variant, "next") && NEXT) ||
                (_.isEqual(variant, "submit") && SUBMIT) ||
                (_.isEqual(variant, "start") && START)}
              {isIcon && (
                <img
                  src={IconArrowRight}
                  alt="icon arrow right"
                  className={cx("arrow", "mrl-dt-5")}
                />
              )}
            </>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RedirectButton;
