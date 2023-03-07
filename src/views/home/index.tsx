// import modules
import { Box, Container, Grid } from "@material-ui/core";
import { Footer, Header, Loading, Button, Category } from "@sectionsg/orc";
import classnames from "classnames/bind";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { useSelector } from "react-redux";

//import icon
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// import constants
import {
  LINK_EXTERNAL_PAGE,
  TITLE_PAGE,
  HOME_PAGE,
  START,
  LIST_ROUTER,
} from "../../utils/constants";

// import types
import { IHome } from "./Home";
import { ICheckBox } from "@/components/ListCheckBox/ListCheckBox";

// import style
import styles from "./Home.scss";

// import child component
import HomeCashlessPaymentMethods from "./HomeCashlessPaymentMethods";
import HomeThingsToTakeNoteOf from "./HomeThingsToTakeNoteOf";

// render UI
const Home: React.FC = ({}) => {
  const { cashless_payments_methods, things_to_take_note_of } = HOME_PAGE;
  const cx = classnames.bind(styles);
  const history = useHistory();
  const [key, setKey] = useState<number>(0);
  const [dataCardCheckbox, setDataCardCheckbox] = useState<ICheckBox[]>(
    cashless_payments_methods.data_list_checkbox
  );
  const [hasDataCheckbox, setHasDataCheckbox] = useState<boolean>(true);
  const [loading] = useState(false);
  const [interest, setInterest] = useState(false);

  /**
   * Retrieves data from Store
   */
  const dataCashlessPaymentMethod = useSelector(
    (state: any) => state.form.cashlessPaymentMethod
  );

  /**
   * Handle disable next button
   */
  useEffect(() => {
    if (dataCashlessPaymentMethod.length) {
      const result = dataCashlessPaymentMethod.findIndex(
        (item: any) => item.checked === true
      );
      if (result !== -1) {
        setHasDataCheckbox(false);
      } else {
        setHasDataCheckbox(true);
      }
      setDataCardCheckbox(dataCashlessPaymentMethod);
    }
  }, [dataCashlessPaymentMethod]);

  /**
   * Run after clicking the checkbox
   */
  const handleGetValueCheckbox = (data: any) => {
    const selected = data.filter((item: any) => item.checked === true);
    if (_.size(selected) === 1 && selected[0].value === "paynow") {
      setInterest(true);
    } else {
      setInterest(false);
    }
  };

  /**
   * Run after clicking the start button
   */
  const handleClickButton = () => {
    if (interest === true) {
      history.push(LIST_ROUTER.acknowledgement_interest);
    } else {
      history.push(LIST_ROUTER.company_and_contact_information);
    }
  };

  // Render UI
  return (
    <>
      {/* {Loading} */}
      {loading && (
        <Box className={cx("container-loading")}>
          <Box className={cx("content-loading")}>
            <Loading />
          </Box>
        </Box>
      )}

      {/* {Header} */}
      <Header
        namePage={TITLE_PAGE}
        backLink={{ name: TITLE_PAGE, href: LINK_EXTERNAL_PAGE }}
      />

      {/* {Container} */}
      <Container className={cx("container")}>
        <section className={cx("home-page-wrapper")}>
          <Grid container>
            {/* {Column left} */}
            <Grid item xs={12} md={3}>
              {/* Category */}
              <Box className="home-category">
                <Category class="alo">
                  {HOME_PAGE.title_cashless_payments_home}
                </Category>
              </Box>
            </Grid>

            {/* {Column right} */}
            <Grid item xs={12} md={8}>
              {/* {Section Home Things To Take Note Of} */}
              <HomeThingsToTakeNoteOf
                cx={cx}
                listItem={HOME_PAGE.things_to_take_note_of.list_item}
                title={HOME_PAGE.things_to_take_note_of.title}
              />

              {/* {Section Home Cashless Payment Methods} */}
              <HomeCashlessPaymentMethods
                title={HOME_PAGE.cashless_payments_methods.title}
                description={HOME_PAGE.cashless_payments_methods.description}
                errorMessage={
                  HOME_PAGE.cashless_payments_methods
                    .messgase_error_list_checkbox
                }
                dataCardCheckbox={dataCardCheckbox}
                checkboxKey={key}
                cx={cx}
                getValueCheckbox={handleGetValueCheckbox}
              />

              {/* Next button */}
              <section
                className={cx("button-wrapper", "d-flex justify-end mt-dt-40")}
              >
                <Button
                  backgroundClass="bgGunmetalBluegrey"
                  onClick={handleClickButton}
                  disabled={hasDataCheckbox}
                  buttonType=""
                >
                  {START}
                  <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
                </Button>
              </section>
            </Grid>
          </Grid>
        </section>
      </Container>

      {/* {Footer} */}
      <Footer />
    </>
  );
};
export default Home;
