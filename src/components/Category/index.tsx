// import modules
import React from "react";
import { Box, Typography } from "@material-ui/core";
import _ from "lodash";
import classnames from "classnames/bind";

// import styles
import styles from "./Category.scss";

const Category = (props: any) => {
  const { children } = props;

  // classnames
  const cx = classnames.bind(styles);

  return (
    <Box className={cx("category-wrapper")}>
      <Box className={cx("highlight")}></Box>
      <Typography component="span" className={cx("title")}>{children}</Typography>
    </Box>
  );
};

export default Category;
