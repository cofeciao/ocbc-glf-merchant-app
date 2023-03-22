// import modules
import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import _ from "lodash";
import { ISelfServe } from "@/views/self-serve/SelfServe";

const SectionWrapper = (props: ISelfServe.ISectionWrapper) => {
  const { title, description, cx, edit, children, className } = props;
  return (
    <Grid container className={cx(`section-wrapper ${className}`)}>
      <Grid item xs={12}>
        {!_.isEmpty(title || description) && (
          <Box className="header-wrapper">
            {/* {Title} */}
            {title && (
              <Box className={cx("header-wrapper d-flex")}>
                <Typography className={cx("section-title")}>{title}</Typography>
                {edit && <Box>Edit</Box>}
              </Box>
            )}

            {/* {Description} */}
            {description && (
              <Typography className={cx("section-description")}>
                {description}
              </Typography>
            )}
          </Box>
        )}
      </Grid>

      {/* {Children} */}
      <Grid item xs={12}>
        {children}
      </Grid>

      <Box className="section-seperate" />
    </Grid>
  );
};

export default SectionWrapper;
