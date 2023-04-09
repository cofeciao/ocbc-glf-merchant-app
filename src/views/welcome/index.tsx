// import modules
import {
  Header,
  Loading,
  Category 
} from "@sectionsg/orc";
import React, { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import classnames from "classnames/bind";

// import constants
import {
  TITLE_PAGE,
  LINK_EXTERNAL_PAGE,
} from "../../utils/constants-rm";

// import style
import styles from "./Welcome.scss";

// import components
import Footer from "@/components/Footer";
import ListCompany from "./ListCompany";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

// render UI
const WelcomePage = () => {
  // classnames
  const cx = classnames.bind(styles);
  //hooks
  const history = useHistory();

  // styled
  const styledTextLogout = {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
    color: "#005EFD",
    cursor: "pointer"
  }

  // States
  const [loading, setLoading] = useState<false>(false);

  // Handle logout
  const handleLogout = () => {
    history.push("/rm/login");
  }

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
        children={
          <Typography style={styledTextLogout} onClick={handleLogout}>Log out</Typography>
        }
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
