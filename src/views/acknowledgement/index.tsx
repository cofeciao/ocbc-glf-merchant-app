// import modules
import React from "react";
import classnames from "classnames/bind";
import { Footer, Header, Category } from "@sectionsg/orc";
import { Box, Container, Grid } from "@material-ui/core";
import _ from "lodash";
import { useParams } from "react-router";

// import constants
import { TITLE_PAGE } from "@/utils/constants-rm";

// import style
import styles from "./Acknowledgement.scss";
import { LIST_ROUTER } from "@/utils/constants";
import Successful from "./Successful";
import Interest from "./Interest";

const Acknowledgement: React.FC<any> = () => {
  const cx = classnames.bind(styles);
  const { slug } = useParams<{ slug: string }>();

  console.log("sllug", slug);

  return (
    <>
      {/* {Header} */}
      <Header namePage={TITLE_PAGE} />

      {slug === "successful" && <Successful />}
      {slug === "interest" && <Interest />}

      {/* {Footer} */}
      <Footer />
    </>
  );
};
export default Acknowledgement;
