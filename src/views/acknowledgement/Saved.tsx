// import modules
import React from "react";
import classnames from "classnames/bind";
import { Category } from "@sectionsg/orc";
import { Box, Container, Grid } from "@material-ui/core";
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
          <Grid item xs={12} lg={3}>
            {/* {Category} */}
            <Box className={cx("category-wrapper")}>
              <Category>{title}</Category>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box className={cx("acknowledgement-wrapper")}>
              {/* {Image} */}
              <img
                src={AcknowledgementSuccess}
                alt="successful-image"
                className={cx("acknowledgement-image")}
              />
              {/* {Title} */}
              <Box className={cx("acknowledgement-title mb-24")}>{title}</Box>

              {/* {Description} */}
              <Box className={cx("acknowledgement-description")}>
                {`${description.before}`}
                &nbsp;
                <Box component="span" id={cx("email")}>
                  {dataCompanyAndContactInformationStep.email}
                </Box>
                &nbsp;
                {`${description.after}`}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Saved;
