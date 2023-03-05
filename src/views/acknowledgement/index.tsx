// import modules
import React from "react";
import classnames from "classnames/bind";
import { Footer, Header, Category } from "@sectionsg/orc";

// import constants
import { TITLE_PAGE } from "@/utils/constants-rm";

// import style
import styles from "./Acknowledgement.scss";

import { Box, Container, Grid } from "@material-ui/core";

const Acknowledgement: React.FC = ({}) => {
  const cx = classnames.bind(styles);
  return (
    <>
      {/* {Header} */}
      <Header namePage={TITLE_PAGE} />

      {/* {Content} */}
      <Container className={cx("container pb-270")}>
        <Grid container spacing={2}>
          <Grid xs={12} lg={3}>
            {/* {Category} */}
            <Box className={cx("category-wrapper")}>
              <Category>Apply for OCBC Cashless Payments</Category>
            </Box>
          </Grid>
          <Grid xs={12} lg={9}>
            <Box className={cx("acknowledgement-wrapper")}>
              <Box className={cx("acknowledgement-title")}>
                Great, we have received your application!
              </Box>
              <Box className={cx("acknowledgement-description")}>
                Our Relationship Manager will contact you within 3 working days.
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* {Footer} */}
      <Footer />
    </>
  );
};
export default Acknowledgement;
