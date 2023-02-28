// import modules
import {
  Header,
  Footer,
  Table,
  InputBase
} from "@sectionsg/orc";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import classnames from "classnames/bind";

// import constants
import {
  TITLE_PAGE,
  LINK_EXTERNAL_PAGE,
} from "../../utils/constants";

// import images
import IconWelcomeLogin from "../../assets/images/icon-welcome-login.svg";
import IconSearch from "../../assets/images/icon-search.svg";
import IconEdit from "../../assets/images/icon-edit.svg";

// import style
import styles from "./Welcome.scss";

// render UI
const WelcomePage = (props: any) => {
  const {} = props;
  const cx = classnames.bind(styles);

  const data = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      company: "AMZO Pte Ltd 1",
      uen: "2016347449N",
      status: "Not started",
      action1: (
        <img src={IconEdit} alt="icon edit" />
      ),
      action2: (
        <div className={cx("action-launch")}>Launch</div>
      ),
    },);
  }

  return (
    <>
      <Header
        namePage={TITLE_PAGE}
        backLink={{ name: TITLE_PAGE, href: LINK_EXTERNAL_PAGE }}
      />

      <Container className={cx("container")}>
        <section className={cx("title-welcome")}>
          <img src={IconWelcomeLogin} alt="icon" className={cx("icon-welcome")} />
          <div className='title'>Welcome, Sam</div>
        </section>
        <section className={cx("welcome-page", "background-gray")}>
          <div className={cx("input-search")}>
            <img className={cx("icon-search")} src={IconSearch} alt='icon search' />
            <InputBase
              label=""
              placeholder=""
              type="text"
              size="large"
              name="search"
              value={''}
            />
          </div>

          <Table
          _useState5="See all 15 months"
            thead={['Company', 'UEN', 'Status', '', '']}
            tbody={data}
            textButton={`See all ${data.length} months`}
          />
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default WelcomePage;
