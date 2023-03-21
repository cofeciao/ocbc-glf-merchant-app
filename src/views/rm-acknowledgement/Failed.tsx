// import modules
import React from "react";
import classnames from "classnames/bind";
import { Box, Container, Grid } from "@material-ui/core";
import _ from "lodash";
import { Button } from "@sectionsg/orc";
import { useHistory } from "react-router";

// import images
import Acknowledgementfailed from "@/assets/images/acknowledgement-failed.png";

// import constants
import { RM_ACKNOWLEDGEMENT_PAGE } from "@/utils/constants-rm";

// import style
import styles from "./Acknowledgement.scss";

const Failed: React.FC<any> = () => {
  const {
    TITLE_FAIL,
    SUB_TITLE_FAIL
  } = RM_ACKNOWLEDGEMENT_PAGE;
  const cx = classnames.bind(styles);
  const history = useHistory();

  return (
     <Box className={cx("rm-acknowledgement-wrapper")}>
      <img
        src={Acknowledgementfailed}
        alt="failed-image"
        className={cx("rm-acknowledgement-image")}
      />
      <Box className={cx("rm-acknowledgement-title")}>
        {TITLE_FAIL}
      </Box>
      <Box className={cx("rm-acknowledgement-description")}>
        {SUB_TITLE_FAIL}
      </Box>
      <Box className={cx("rm-acknowledgement-btn")}>
        <Button 
          backgroundClass="bgGunmetalBluegrey" 
          onClick={() => {
            history.push("/rm/review-submit")
          }}
          >
          Back to Declaration
        </Button>
      </Box>
    </Box>
  );
};

export default Failed;
