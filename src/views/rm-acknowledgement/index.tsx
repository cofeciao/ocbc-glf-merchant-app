// import modules
import React from "react";
import classnames from "classnames/bind";
import { Header, Category } from "@sectionsg/orc";
import _ from "lodash";
import { useParams } from "react-router";

// import constants
import { TITLE_PAGE } from "@/utils/constants-rm";

// import style
import styles from "./Acknowledgement.scss";

// import components
import Successful from "./Successful";
import Failed from "./Failed";
import { Container, Grid } from "@material-ui/core";
import Footer from "@/components/Footer";

const RMAcknowledgementPage: React.FC<any> = () => {
  const cx = classnames.bind(styles);
  const { slug } = useParams<{ slug: string }>();

  return (
    <>
      {/* {Header} */}
      <Header namePage={TITLE_PAGE} />

      {/* {Container} */}
      <Container className={cx("container")}>
        <section className={cx("welcome-page-wrapper")}>
          <Grid container spacing={8}>
            {/* {Column left} */}
            <Grid item xs={12} md={3}>
              {/* Category */}
              <div className="welcome-category" >
                <Category class="welcome">Apply for OCBC Cashless Payments</Category>
              </div>
            </Grid>

            {/* {Column right} */}
            <Grid item xs={12} md={8}>
              {slug === "successful" && <Successful />}
              {slug === "failed" && <Failed />}
            </Grid>
          </Grid>
        </section>
      </Container>
      
      {/* {Footer} */}
      <Footer />
    </>
  );
};
export default RMAcknowledgementPage;
