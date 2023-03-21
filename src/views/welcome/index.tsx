// import modules
import {
  Header,
  Footer,
  Loading,
  Category 
} from "@sectionsg/orc";
import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import classnames from "classnames/bind";

// import constants
import {
  TITLE_PAGE,
  LINK_EXTERNAL_PAGE,
} from "../../utils/constants-rm";

// import images
import IconEdit from "../../assets/images/icon-edit.svg";

// import style
import styles from "./Welcome.scss";

import ListCompany from "./ListCompany";

// render UI
const WelcomePage = () => {
  const cx = classnames.bind(styles);

  // States
  const [loading, setLoading] = useState<false>(false);

  return (
    <>
     {/* {Loading} */}
     {loading && (
        <div className={cx("container-loading")}>
          <div className={cx("content-loading")}>
            <Loading />
          </div>
        </div>
      )}

      <Header
        namePage={TITLE_PAGE}
        backLink={{ name: TITLE_PAGE, href: LINK_EXTERNAL_PAGE }}
      />
       {/* {Container} */}
       <Container className={cx("container")}>
        <section className={cx("welcome-page-wrapper")}>
          <Grid container>
            {/* {Column left} */}
            <Grid item xs={12} md={3}>
              {/* Category */}
              <div className="welcome-category" >
                <Category class="welcome">Welcome SAM!</Category>
              </div>
            </Grid>

            {/* {Column right} */}
            <Grid item xs={12} md={8}>
              <ListCompany />
            </Grid>
          </Grid>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default WelcomePage;
