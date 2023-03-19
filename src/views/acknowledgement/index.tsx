// import modules
import React from "react";
import classnames from "classnames/bind";
import { Footer, Header } from "@sectionsg/orc";
import _ from "lodash";
import { useParams } from "react-router";
import Successful from "./Successful";
import Interest from "./Interest";
import Saved from "./Saved";

// import constants
import { TITLE_PAGE } from "@/utils/constants-rm";

// import style
import styles from "./Acknowledgement.scss";

// render UI
const Acknowledgement: React.FC<any> = () => {
  const cx = classnames.bind(styles);
  const { slug } = useParams<{ slug: string }>();

  return (
    <>
      {/* {Header} */}
      <Header namePage={TITLE_PAGE} />

      {slug === "successful" && <Successful />}
      {slug === "interest" && <Interest />}
      {slug === "saved" && <Saved />}

      {/* {Footer} */}
      <Footer />
    </>
  );
};
export default Acknowledgement;
