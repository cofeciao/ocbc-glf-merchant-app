import React from "react";
import classnames from "classnames";
import { Box, CircularProgress } from "@material-ui/core";

// styles
import styles from "./Loading.scss";

const Loading = () => {
  const cx = classnames.bind(styles);

  return (
    <Box className={cx("circular-loading-wrapper")}>
      {/* {Loading} */}
      <CircularProgress className={cx("circular-loading-icon")} />
    </Box>
  );
};

export default Loading;