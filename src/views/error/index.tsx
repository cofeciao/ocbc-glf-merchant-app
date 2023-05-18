// import modules
import React from "react";
import classnames from "classnames/bind";
import _ from "lodash";

// import constants
import { ERROR_PAGE, LINK_EXTERNAL_PAGE, TITLE_PAGE } from "@/utils/constants";

// import style
import styles from "./Error.scss";

// import components
import { Box, Button, Container, Typography } from "@material-ui/core";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// render UI
const Error = () => {
  const {
    LABEL_WE_ARE_UNABLE_TO_PROCEED_AT_THE_MOMENT,
    LABEL_PLEASE_TRY_AGAIN_LATER,
    LABEL_BACK_TO_OCBC,
  } = ERROR_PAGE;

  // classnames
  const cx = classnames.bind(styles);

  // Render UI
  return (
    <>
      {/* {Header} */}
      <Header title={TITLE_PAGE} logoHref={LINK_EXTERNAL_PAGE} />

      {/* {Error content} */}
      <Container className={cx("container")}>
        <Box className={cx("error-wrapper")}>
          {/* {Title} */}
          <Typography className={cx("title")}>
            {LABEL_WE_ARE_UNABLE_TO_PROCEED_AT_THE_MOMENT}
          </Typography>

          {/* {Description} */}
          <Typography className={cx("description")}>
            {LABEL_PLEASE_TRY_AGAIN_LATER}
          </Typography>

          {/* {Button} */}
          <Button
            className={cx("back-button")}
            href={LINK_EXTERNAL_PAGE}
          >
            {LABEL_BACK_TO_OCBC}
          </Button>
        </Box>
      </Container>

      {/* {Footer} */}
      <Footer />
    </>
  );
};
export default Error;
