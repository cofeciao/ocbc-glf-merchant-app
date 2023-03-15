// import modules
import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const SectionWrapper = (props: any) => {
  const { title, description, cx, isEdit = false, path} = props;
  return (
    <Grid container className={cx("section-wrapper")}>
      <Grid item xs={12}>
        <Box className="header-wrapper">
          {/* {Title} */}
          {title && (
            <div className={cx("section-title")}>
              <Typography className={cx("title")}>{title}</Typography>
              {isEdit && (
                <Link className={cx("edit")} to={path}>Edit</Link>
              )}
            </div>
          )}

          {/* {Description} */}
          {description && (
            <Typography className={cx("section-description")}>
              {description}
            </Typography>
          )}
        </Box>
      </Grid>

      {/* {Children} */}
      <Grid item xs={12}>
        {props.children}
      </Grid>

      <Box className="section-seperate" />
    </Grid>
  );
};

export default SectionWrapper;
