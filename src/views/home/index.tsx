// import modules
import {
  Header,
  Loading,
  Category,
} from "@sectionsg/orc";
import {
  Box,
  Container,
  Grid,
  Button,
  DialogContent,
  Dialog,
  TextField,
} from "@material-ui/core";
import classnames from "classnames/bind";
import _ from "lodash";
import React, { FocusEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeCashlessPaymentMethods from "./HomeCashlessPaymentMethods";
import HomeThingsToTakeNoteOf from "./HomeThingsToTakeNoteOf";
import EntryDialog from "@/views/home/entry-dialog";
import Captcha from "@/components/Captcha/captcha";

// import images
import CloseIcon from "@/assets/images/icon-close.svg"

// import icons
import IconArrowRight from "@/assets/images/icon-arrow-right.svg";

// import constants
import {
  LINK_EXTERNAL_PAGE,
  TITLE_PAGE,
  HOME_PAGE,
  START,
  LIST_ROUTER,
  ERROR_ICON,
} from "../../utils/constants";

// import types
import { ICheckBox } from "@/components/ListCheckBox/ListCheckBox";

// import style
import styles from "./Home.scss";
import Footer from "@/components/Footer";

// render UI
const Home: React.FC = () => {
  const {
    TITLE_CASHLESS_PAYMENTS_HOME,
    CASHLESS_PAYMENTS_METHODS,
    THINGS_TO_TAKE_NOTE_OF,
    CAPTCHA: { LABEL_GET_ANOTHER_CODE, HELPER_TEXT, LABEL_TEXT_FIELD },
  } = HOME_PAGE;
  const cx = classnames.bind(styles);
  const history = useHistory();

  // State
  const [dataCardCheckbox, setDataCardCheckbox] = useState<ICheckBox[]>(
    CASHLESS_PAYMENTS_METHODS.data_list_checkbox
  );
  const [hasDataCheckbox, setHasDataCheckbox] = useState<boolean>(true);
  const [loading] = useState(false);
  const [interest, setInterest] = useState(false);
  const [openDialog, setOpenDialog] = useState<boolean>(true);
  const [captchaCode, setCaptchaCode] = useState<string>("");
  const [exactCaptcha, setExactCaptcha] = useState<boolean>();
  const [inputCaptcha, setInputCaptcha] = useState<string>("");
  const [reloadCaptchaMethod, setReloadCaptchaMethod] = useState<Function>();

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

  const reloadCaptcha = () => {
    typeof reloadCaptchaMethod === "function" && reloadCaptchaMethod();
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
        TransitionProps={{ style: { backgroundColor: "rgba(177, 184, 197, 0.7)" }}}
      >
        <div className={cx("icon-close")}>
          <img src={CloseIcon} alt="icon close" onClick={handleRollBackPage} />
        </div>
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
            <Grid item xs={12} lg={8}>
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
                cx={cx}
                getValueCheckbox={handleGetValueCheckbox}
              />

              {/* {Captcha} */}
              <Box className={cx("captcha-wrapper")}>
                <Grid item xs={12}>
                  <Grid container>
                    {/* {CAPTCHA} */}
                    <Grid item xs={12} md={3}>
                      <Captcha
                        textColor="black"
                        captchaCode={captchaCode}
                        backgroundColor="white"
                        onGeneratedCaptcha={(captcha: string) =>
                          setCaptchaCode(captcha)
                        }
                        methodReloadCaptcha={(callback: Function) =>
                          setReloadCaptchaMethod(callback)
                        }
                      />
                    </Grid>

                    {/* {TextField} */}
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        label={LABEL_TEXT_FIELD}
                        variant="filled"
                        error={
                          exactCaptcha === false && _.size(inputCaptcha) && true
                        }
                        helperText={
                          exactCaptcha === false && _.size(inputCaptcha)
                            ? `${ERROR_ICON} ${HELPER_TEXT}`
                            : ""
                        }
                        onBlur={(event: FocusEvent<HTMLInputElement>) => {
                          setInputCaptcha(event.target.value);
                          if (_.size(event.target.value)) {
                            if (event.target.value !== captchaCode) {
                              setExactCaptcha(false);
                            } else {
                              setExactCaptcha(true);
                            }
                          }
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                {/* {Button} */}
                <Grid item xs={12}>
                  <Box
                    component="a"
                    onClick={() => reloadCaptcha()}
                    className={cx("get-another-code-button mt-16")}
                  >
                    {LABEL_GET_ANOTHER_CODE}
                  </Box>
                </Grid>
              </Box>

              {/* {Divider} */}
              <Box id={cx("divider")} />

              {/* {Next Button} */}
              <Box
                className={cx("button-wrapper", "d-flex justify-end mt-dt-40")}
              >
                <Button
                  variant="contained"
                  disabled={hasDataCheckbox || !exactCaptcha}
                  onClick={handleClickButton}
                >
                  {START}
                  <img
                    src={IconArrowRight}
                    alt="icon arrow right"
                    className={cx("arrow", "mrl-dt-5")}
                  />
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
