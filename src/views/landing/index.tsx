// import modules
import { Container } from "@material-ui/core";
import { Footer, Header, Loading, Button } from "@sectionsg/orc";
import classnames from "classnames/bind";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

//import icon
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// import constants
import {
  DATA_CARD_CHECKBOX,
  LINK_EXTERNAL_PAGE,
  TITLE_PAGE,
  NEXT,
} from "../../utils/constants";

// import types
import { ILanding } from "./Landing";

// import style
import styles from "./Landing.scss";

// import child component
import LandingHomeLoanRequest from "./LandingHome";
import moment from "moment";
import { useSelector } from "react-redux";

// render UI
const Landing: React.FC = ({}) => {
  const cx = classnames.bind(styles);
  const history = useHistory();
  const [key, setKey] = useState<number>(0);
  const [dataCardCheckbox, setDataCardCheckbox] =
    useState<ILanding.IItemCheckbox[]>(DATA_CARD_CHECKBOX);
  const [agree, setAgree] = useState<boolean>(false);
  const [hasDataCheckbox, setHasDataCheckbox] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);
  const date = moment.utc().format();

  /**
   * Retrieves data from Store
   */
  const dataListCheckbox = useSelector((state: any) => state.form.checkboxList);

  /**
   * Handle disable next button
   */
  useEffect(() => {
    if (dataListCheckbox.data) {
      const result = dataListCheckbox.data.findIndex(
        (item: any) => item.checked === true
      );
      if (result !== -1) {
        setHasDataCheckbox(false);
      } else {
        setHasDataCheckbox(true);
      }
    }
  }, [dataListCheckbox]);

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        onClick={() => {
          history.push("/demo-form");
        }}
        disabled={hasDataCheckbox}
        buttonType=""
      >
        <>
          {agree ? <>{NEXT}</> : "Next"}
          {agree && <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />}
        </>
      </Button>
    );
  };

  // Render UI
  return (
    <>
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
      {loading && (
        <div className={cx("container-loading")}>
          <div className={cx("content-loading")}>
            <Loading />
          </div>
        </div>
      )}

      <Container className={cx("container")}>
        <section className={cx("landing-page")}>
          <LandingHomeLoanRequest
            dataCardCheckbox={dataCardCheckbox}
            checkboxKey={key}
            cx={cx}
            handleGetValueCheckbox={() => {}}
          />
        </section>

        {/* Section button  */}
        <section
          className={cx("button-wrapper", "d-flex justify-end mt-dt-40")}
        >
          <div>
            <div className="ml-dt-30 d-inline">{renderButton()}</div>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
};
export default Landing;
