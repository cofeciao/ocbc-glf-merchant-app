// import modules
import React, { useEffect } from "react";
import classnames from "classnames/bind";

import _ from "lodash";
import { useHistory, useParams } from "react-router";

// import constants
import { LINK_EXTERNAL_PAGE, TITLE_PAGE } from "@/utils/constants";

// import style
import styles from "./Acknowledgement.scss";

// import components
import { Box } from "@material-ui/core";
import Successful from "./Successful";
import Interest from "./Interest";
import Saved from "./Saved";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// render UI
const Acknowledgement: React.FC = () => {
  const cx = classnames.bind(styles);
  const { slug } = useParams<{ slug: string }>();
  const history = useHistory();

  /**
   * Handle before unload
   * @param event
   */
  const handleBeforeUnload = (event: any) => {
    event.preventDefault();
    event.returnValue = "";
  };

  /**
   * Detect reload page and start over
   */
  useEffect(() => {
    window.scrollTo(0, 0);
    window.onload = function () {
      window.addEventListener("beforeunload", handleBeforeUnload);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    if (history.action === "POP") {
      window.location.href = (process.env.myinfo as any).redirectUri;
    }
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Render UI
  if (history.action === "POP") {
    return <></>;
  }

  // Render UI
  return (
    <>
      {/* {Header} */}
      <Header title={TITLE_PAGE} logoHref={LINK_EXTERNAL_PAGE} />
      
      {/* {Content} */}
      <Box className={cx("mt-dt-56")}>
        {slug === "successful" && <Successful />}
        {slug === "interest" && <Interest />}
        {slug === "saved" && <Saved />}
      </Box>

      {/* {Footer} */}
      <Footer />
    </>
  );
};
export default Acknowledgement;
