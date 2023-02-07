// import modules
import { Container, Grid } from "@material-ui/core";
import {
  Dialog,
  Footer,
  Header,
  Loading,
  Button,
  InputBase,
  Radio,
  InputNumberMobile,
} from "@sectionsg/orc";
import classnames from "classnames/bind";
import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

//import icon
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// import constants
import {
  DATA_CARD_CHECKBOX,
  LINK_EXTERNAL_PAGE,
  LIST_NATIONAL,
  PERSONAL_INFORMATION_SINGPASS,
  LIST_SELECT_PARTIAL,
  LIST_SELECT_PURPOSE,
  LIST_RADIO,
  TITLE_PAGE,
  REVIEW,
  NEXT,
  LIST_COUNTRIES_CODE,
} from "../../utils/constants";

// import utils
import { scrollToError } from "../../utils/utils";

// import types
import { ILanding } from "./Landing";

// import style
import styles from "./Landing.scss";

// import child component
import LandingHomeLoanRequest from "./LandingHome";
import moment from "moment";

// render UI
const Landing: React.FC = ({}) => {
  const cx = classnames.bind(styles);
  const history = useHistory();
  const [key, setKey] = useState<number>(0);
  const [dataCardCheckbox, setDataCardCheckbox] =
    useState<ILanding.IItemCheckbox[]>(DATA_CARD_CHECKBOX);
  const [listSelectPartialPrepayment, setListSelectPartialPrepayment] =
    useState<any>(LIST_SELECT_PARTIAL);
  const [listSelectPurpose, setListSelectPurpose] =
    useState<any>(LIST_SELECT_PURPOSE);
  const [agree, setAgree] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };
  let query = useQuery();

  const dispatch = useDispatch();
  const date = moment.utc().format();
  const currentLocal = moment.utc(date).local().format();
  const [currentDateTime, setCurrentDateTime] = useState(
    moment(currentLocal, "YYYY-MM-DD HH:mm:ss")
  );
  const urlJson = "";

  /**
   * Retrieves data from Store
   */
  const formReduxData = useSelector((state: any) => state.form);

  /**
   * Handle show condition
   * @function
   * @param {Array} data - List data of home loan request
   * @param {string} itemChecked - Item have just click
   * @param {boolean} checked - Status Item
   */
  const handleCheckShowContent = (
    data: ILanding.IListSelect[],
    itemChecked: string,
    checked: boolean
  ) => {
    let div = document.getElementById("selected_requests");
    let str: string[] = [];
    // let listData: ILanding.IItemCheckbox[] = [...data];
  };

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        onClick={() => {
          history.push("/form-submit");
        }}
        buttonType=""
      >
        <>
          {agree ? <>{NEXT}</> : "I agree"}
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
