// import modules
import { Container, Grid } from "@material-ui/core";
import { Footer, Header, Loading, Category } from "@sectionsg/orc";
import classnames from "classnames/bind";
import _ from "lodash";
import React, { useState } from "react";

// import constants
import { LINK_EXTERNAL_PAGE, TITLE_PAGE } from "../../utils/constants-rm";

// import types
// import { IHome } from "./Home";

// import style
import styles from "./Login.scss";
import LoginForm from "./LoginForm";

// import child component

// render UI
const LoginPage: React.FC = ({}) => {
  const cx = classnames.bind(styles);
  const [loading] = useState(false);

  // Render UI
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

      {/* {Header} */}
      <Header
        namePage={TITLE_PAGE}
        backLink={{ name: TITLE_PAGE, href: LINK_EXTERNAL_PAGE }}
      />

      {/* {Container} */}
      <Container className={cx("container")}>
        <section className={cx("login-page-wrapper")}>
          <Grid container>
            {/* {Column left} */}
            <Grid item xs={12} md={3}>
              {/* Category */}
              <div className="login-category" >
                <Category class="welcome">Welcome!</Category>
              </div>
            </Grid>

            {/* {Column right} */}
            <Grid item xs={12} md={8}>
              <LoginForm />
            </Grid>
          </Grid>
        </section>
      </Container>
      <Footer />
    </>
  );
};
export default LoginPage;
