// import modules
import React, { useEffect } from "react";
import classnames from "classnames/bind";
import { Footer, Header } from "@sectionsg/orc";
import { Box } from "@material-ui/core";
import _ from "lodash";
import { useHistory, useParams } from "react-router";
import Successful from "./Successful";
import Interest from "./Interest";
import Saved from "./Saved";

// import constants
import { TITLE_PAGE } from "@/utils/constants-rm";

// import style
import styles from "./Acknowledgement.scss";
import { adobeAbandon } from "@/utils/adobeTracking";

// render UI
const Acknowledgement: React.FC<any> = () => {
  const cx = classnames.bind(styles);
  const { slug } = useParams<{ slug: string }>();
  const history = useHistory();

  /**
   * Detect reload page and start over
   */
  useEffect(() => {
    window.scrollTo(0, 0);
    if (history.action === "POP") {
      window.location.href = (process.env.myinfo as any).redirectUri;
    }
    let trackingEvent = (window as any).attachEvent || window.addEventListener;
    let chkevent = (window as any).attachEvent
      ? "onbeforeunload"
      : "beforeunload";
    trackingEvent(chkevent, adobeAbandon);
  }, []);

  // Render UI
  if (history.action === "POP") {
    return <></>;
  }

  // Render UI
  return (
    <>
      {/* {Header} */}
      <Header namePage={TITLE_PAGE} />

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
