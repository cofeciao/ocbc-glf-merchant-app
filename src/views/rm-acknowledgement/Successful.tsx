// import modules
import React from "react";
import classnames from "classnames/bind";
import { Box, Container, Grid } from "@material-ui/core";
import _ from "lodash";
import { Button } from "@sectionsg/orc";
import { useHistory } from "react-router";

// import images
import AcknowledgementSuccess from "@/assets/images/acknowledgement-success.png";

// import constants
import { RM_ACKNOWLEDGEMENT_PAGE } from "@/utils/constants-rm";

// import style
import styles from "./Acknowledgement.scss";

const Successful: React.FC<any> = () => {
  const { TITLE_SUCCESSFUL } = RM_ACKNOWLEDGEMENT_PAGE;
  const cx = classnames.bind(styles);
  const history = useHistory();

  return (
    <Box className={cx("rm-acknowledgement-wrapper")}>
      <img
        src={AcknowledgementSuccess}
        alt="successful-image"
        className={cx("rm-acknowledgement-image")}
      />
      <Box className={cx("rm-acknowledgement-title")}>
        {TITLE_SUCCESSFUL}
      </Box>
      <Button 
        backgroundClass="bgGunmetalBluegrey" 
        onClick={() => {
          history.push("/rm/welcome")
        }}
      >
        Back to home
      </Button>
    </Box>
  );
};
export default Successful;
