// import modules
import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import _ from "lodash";
import { ISelfServe } from "@/views/self-serve/SelfServe";
import { SELF_SERVE_PAGE } from "@/utils/constants";

const SectionWrapper = (props: ISelfServe.ISectionWrapper) => {
  const { title, description, cx, edit, children, className, onClickEdit } =
    props;

  const { LABEL_EDIT } = SELF_SERVE_PAGE;
  return (
    <Grid container className={cx(`section-wrapper ${className}`)}>
      <Grid item xs={12}>
        {!_.isEmpty(title || description) && (
          <Box className="header-wrapper">
            {/* {Title} */}
            {title && (
              <Box className={cx("content-title d-flex")}>
                <Typography className={cx("section-title")}>{title}</Typography>
                {edit && (
                  <Box component="a" onClick={onClickEdit} className={cx("edit-link")}>
                    {LABEL_EDIT}
                  </Box>
                )}
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
