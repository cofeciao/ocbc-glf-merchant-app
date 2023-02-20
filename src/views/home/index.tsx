// import modules
import { Container } from "@material-ui/core";
import { Footer, Header, Loading, Button, CodeInput } from "@sectionsg/orc";
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
  TITLE_CASHLESS_PAYMENTS_HOME,
} from "../../utils/constants";

// import types
import { IHome } from "./Home";

// import style
import styles from "./Home.scss";

// import child component
import HomeCashlessPaymentMethods from "./HomeCashlessPaymentMethods";
import HomeThingsToTakeNoteOf from "./HomeThingsToTakeNoteOf";
import moment from "moment";
import { useSelector } from "react-redux";

// render UI
const Home: React.FC = ({}) => {
  const cx = classnames.bind(styles);
  const history = useHistory();
  const [key, setKey] = useState<number>(0);
  const [dataCardCheckbox, setDataCardCheckbox] =
    useState<IHome.IItemCheckbox[]>(DATA_CARD_CHECKBOX);
  const [agree, setAgree] = useState<boolean>(false);
  const [hasDataCheckbox, setHasDataCheckbox] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);
  const date = moment.utc().format();
  const [contentShow, setContentShow] = useState<string[]>([]); // lists data checked

  /**
   * Retrieves data from Store
   */
  const dataListCheckbox = useSelector(
    (state: any) => state.form.dataListCheckbox
  );

  /**
   * Handle disable next button
   */
  useEffect(() => {
    if (dataListCheckbox.length) {
      const result = dataListCheckbox.findIndex(
        (item: any) => item.checked === true
      );
      if (result !== -1) {
        setHasDataCheckbox(false);
      } else {
        setHasDataCheckbox(true);
      }
      setDataCardCheckbox(dataListCheckbox);
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
        {/* {Content Wrapper} */}
        <section className={cx("home-wrapper")}>
          {/* Section Title */}
          <h3 className={cx("title")}>{<>{TITLE_CASHLESS_PAYMENTS_HOME}</>}</h3>

          {/* {Section Home Things To Take Note Of} */}
          <HomeThingsToTakeNoteOf cx={cx} />

          {/* {Section Home Cashless Payment Methods} */}
          <HomeCashlessPaymentMethods
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

      {/* {Footer} */}
      <Footer />
    </>
  );
};
export default Home;
