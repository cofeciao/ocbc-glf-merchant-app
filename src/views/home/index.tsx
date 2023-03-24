// import modules
import { 
  Box, 
  Container, 
  Grid, 
  Button, 
  DialogContent, 
  Dialog
 } from "@material-ui/core";
import {
  Footer,
  Header,
  Loading,
  Category,
} from "@sectionsg/orc";
import classnames from "classnames/bind";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeCashlessPaymentMethods from "./HomeCashlessPaymentMethods";
import HomeThingsToTakeNoteOf from "./HomeThingsToTakeNoteOf";
import EntryDialog from "@/views/home/entry-dialog";

// import icons
import CloseIcon from '@material-ui/icons/Close';

// import images
import IconArrowRight from "@/assets/images/icon-arrow-right.svg";

// import constants
import {
  LINK_EXTERNAL_PAGE,
  TITLE_PAGE,
  HOME_PAGE,
  START,
  LIST_ROUTER,
} from "../../utils/constants";

// import types
import { ICheckBox } from "@/components/ListCheckBox/ListCheckBox";

// import style
import styles from "./Home.scss";

// render UI
const Home: React.FC = () => {
  const {
    TITLE_CASHLESS_PAYMENTS_HOME,
    CASHLESS_PAYMENTS_METHODS,
    THINGS_TO_TAKE_NOTE_OF,
  } = HOME_PAGE;
  const cx = classnames.bind(styles);
  const history = useHistory();
  const [key, setKey] = useState<number>(0);
  const [dataCardCheckbox, setDataCardCheckbox] = useState<ICheckBox[]>(
    CASHLESS_PAYMENTS_METHODS.data_list_checkbox
  );
  const [hasDataCheckbox, setHasDataCheckbox] = useState<boolean>(true);
  const [loading] = useState(false);
  const [interest, setInterest] = useState(false);
  const [openDialog, setOpenDialog] = useState<boolean>(true);

  /**
   * Back to Card Acceptance page
   */
  const handleRollBackPage = () => {
    // Temporarily reloading
    window.location.reload();
  };

  /**
   * Handle close Dialog
   */
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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
      <Dialog
        open={openDialog}
        onClose={handleRollBackPage}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={cx("icon-close")}><CloseIcon onClick={handleRollBackPage} /></div>
        <DialogContent>
          <EntryDialog onCloseDialog={handleCloseDialog} />
        </DialogContent>
      </Dialog>

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
        <Box className={cx("home-page-wrapper")}>
          <Grid container>
            {/* {Column left} */}
            <Grid item xs={12} md={3}>
              {/* Category */}
              <Box className="home-category">
                <Category class="">{TITLE_CASHLESS_PAYMENTS_HOME}</Category>
              </Box>
            </Grid>

            {/* {Column right} */}
            <Grid item xs={12} md={8}>
              {/* {Section Home Things To Take Note Of} */}
              <HomeThingsToTakeNoteOf
                cx={cx}
                listItem={THINGS_TO_TAKE_NOTE_OF.listItem}
                title={THINGS_TO_TAKE_NOTE_OF.title}
              />

              {/* {Section Home Cashless Payment Methods} */}
              <HomeCashlessPaymentMethods
                title={CASHLESS_PAYMENTS_METHODS.title}
                description={CASHLESS_PAYMENTS_METHODS.description}
                errorMessage={
                  CASHLESS_PAYMENTS_METHODS.messgase_error_list_checkbox
                }
                dataCardCheckbox={dataCardCheckbox}
                checkboxKey={key}
                cx={cx}
                getValueCheckbox={handleGetValueCheckbox}
              />

              {/* {Seperator} */}
              <Box className="section-seperator" />

              {/* Next button */}
              <Box
                className={cx("button-wrapper","d-flex justify-end mt-dt-40")}
              >
                <Button 
                  variant="contained" 
                  disabled={hasDataCheckbox}
                  onClick={handleClickButton}
                >
                  {START}
                  <img src={IconArrowRight} alt="icon arrow right" className={cx("arrow", "mrl-dt-5")} />
                </Button>   
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* {Footer} */}
      <Footer />
    </>
  );
};
export default Home;
