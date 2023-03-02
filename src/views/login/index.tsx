// import modules
import React from "react";
import classnames from "classnames/bind";

// import constants
import { TITLE_PAGE } from "@/utils/constants-rm";

// import style
import styles from "./Login.scss";

// import child components
import LoginForm from "./LoginForm";
import { Container } from "@material-ui/core";

// import components
import { Footer, Header } from "@sectionsg/orc";

const LoginPage: React.FC = ({}) => {
  const cx = classnames.bind(styles);
  return (
    <React.Fragment>
      <Header namePage={TITLE_PAGE} />
      <Container className={cx('container')}>
        <LoginForm cx={cx}/>
      </Container>
      <Footer />
    </React.Fragment>
  )
}
export default LoginPage;