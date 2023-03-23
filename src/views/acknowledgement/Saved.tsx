// import modules
import React from "react";
import classnames from "classnames/bind";
import { Category } from "@sectionsg/orc";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import _ from "lodash";

// import images
import AcknowledgementSuccess from "@/assets/images/acknowledgement-success.png";

// import constants
import { ACKNOWLEDGEMENT_PAGE } from "@/utils/constants";

// import style
import styles from "./Acknowledgement.scss";
import { useSelector } from "react-redux";

const Saved: React.FC<any> = () => {
  const {
    SAVED: { title, description },
  } = ACKNOWLEDGEMENT_PAGE;
  const cx = classnames.bind(styles);

  /**
   * Retrieves data of Company And Contact Information step from Store
   */
  const dataCompanyAndContactInformationStep = useSelector(
    (state: any) => state.form.companyAndContactInformationStep
  );

  return (
    <>
      {/* {Content} */}
      <Container className={cx("container pb-270")}>
        <Grid container spacing={2}>
          {/* {Category} */}
          <Grid item xs={12} lg={3}>
            <Box className={cx("category-wrapper")}>
              <Category>{title}</Category>
            </Box>
          </Grid>

          {/* {Acknowledgement} */}
          <Grid item xs={12} lg={4}>
            <Box className={cx("acknowledgement-wrapper")}>
              {/* {Image} */}
              <Box className={cx("image-wrapper")}>
                <img src={AcknowledgementSuccess} alt="successful-image" />
              </Box>

              {/* {Content} */}
              <Box className={cx("content-wrapper")}>
                {/* {Title} */}
                <Typography className={cx("title")}>
                  {title}
                </Typography>

                {/* {Description} */}
                <Typography component="div" className={cx("description")}>
                  {description.before}
                  &nbsp;
                  <Typography component="span" id={cx("email")}>
                    {dataCompanyAndContactInformationStep.email}
                  </Typography>
                  &nbsp;
                  {description.after}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Saved;
