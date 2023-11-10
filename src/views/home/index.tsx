// import modules
import classnames from "classnames/bind";
import _ from "lodash";
import React, { FocusEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

// import components
import HomeCashlessPaymentMethods from "./HomeCashlessPaymentMethods";
import HomeThingsToTakeNoteOf from "./HomeThingsToTakeNoteOf";
import Captcha from "@/components/Captcha/captcha";

// import images
import CloseIcon from "@/assets/images/icon-close.svg";

// import constants
import {
  LINK_EXTERNAL_PAGE,
  TITLE_PAGE,
  HOME_PAGE,
  LIST_ROUTER,
  ERROR_ICON,
} from "../../utils/constants";

// import types
import { ICheckBox } from "@/components/ListCheckBox/ListCheckBox";

// import style
import styles from "./Home.scss";

// import components
import {
  Box,
  Container,
  Grid,
  DialogContent,
  Dialog,
  TextField,
} from "@material-ui/core";
import Footer from "@/components/Footer";
import Category from "@/components/Category";
import Header from "@/components/Header";
import RedirectButton from "@/components/RedirectButton";
import OneTimeOTP from "@/components/OneTimeOTP";
import RetrieveDialog from "@/components/RetrieveDialogContent";
import EntryDialog from "@/components/EntryDialogContent";

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

  // states
  const [dataCardCheckbox, setDataCardCheckbox] = useState<ICheckBox[]>(
    CASHLESS_PAYMENTS_METHODS.data_list_checkbox
  );
  const [hasDataCheckbox, setHasDataCheckbox] = useState<boolean>(true);
  const [interest, setInterest] = useState(false);
  const [openEntryDialog, setOpenEntryDialog] = useState<boolean>(true);
  const [captchaCode, setCaptchaCode] = useState<string>("");
  const [exactCaptcha, setExactCaptcha] = useState<boolean>();
  const [inputCaptcha, setInputCaptcha] = useState<string>("");
  const [reloadCaptchaMethod, setReloadCaptchaMethod] = useState<Function>();
  const [openOneTimeOTPDialog, setOpenOneTimeOTPDialog] =
    useState<boolean>(false);
  const [openRetrieveDialog, setOpenRetrieveDialog] = useState<boolean>(false);

  /**
   * Handle Retrieve Dialog sucessful
   * @param {boolean} result
   */
  const handleRetrieveDialogSucessful = (result: boolean) => {
    if (result === true) {
      setOpenRetrieveDialog(false);
      setOpenOneTimeOTPDialog(true);
    }
  };

  /**
   * Handle Entry Dialog sucessful
   * @param {boolean} result
   */
  const handleEntryDialogSuccessful = (result: boolean) => {
    if (result === true) {
      setOpenRetrieveDialog(true);
      setOpenEntryDialog(false);
    }
  };

  /**
   * Handle One Time OTP successful
   * @param {boolean} result
   */
  const handleOneTimeOTPSucessful = (result: boolean) => {
    if (result === true) {
      history.push(LIST_ROUTER.transaction_and_card_acceptance_type);
    }
  };

  /**
   * Back to Card Acceptance page
   */
  const handleRollBackPage = () => {
    // Temporarily reloading
    window.location.reload();
  };

  /**
   * Handle close Entry Dialog
   */
  const handleCloseEntryDialog = () => {
    setOpenEntryDialog(false);
  };

  /**
   * Handle close Retrieve Dialog
   */
  const handleCloseRetrieveDialog = () => {
    setOpenRetrieveDialog(false);
    setOpenEntryDialog(true);
  };

  /**
   * Handle close Retrieve Dialog
   */
  const handleCloseOneTimeOtpDialog = () => {
    window.location.reload();
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

  /**
   * Handle Captcha reload
   */
  const reloadCaptcha = () => {
    typeof reloadCaptchaMethod === "function" && reloadCaptchaMethod();
  };

  // Render UI
  return (
    <>
      {/* {Entry Dialog} */}
      <Dialog
        open={openEntryDialog}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={cx("icon-close")}>
          <img src={CloseIcon} alt="icon close" onClick={handleRollBackPage} />
        </div>
        <DialogContent>
          <EntryDialog
            successful={handleEntryDialogSuccessful}
            onCloseDialog={handleCloseEntryDialog}
          />
        </DialogContent>
      </Dialog>

      {/* {Retrieve Dialog} */}
      <Dialog
        open={openRetrieveDialog}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={cx("icon-close")}>
          <img
            src={CloseIcon}
            alt="icon close"
            onClick={handleCloseRetrieveDialog}
          />
        </div>
        <DialogContent>
          <RetrieveDialog
            successful={handleRetrieveDialogSucessful}
            onCloseDialog={handleCloseRetrieveDialog}
            startNewApplication={(boolean: boolean) => setOpenRetrieveDialog(boolean)}
          />
        </DialogContent>
      </Dialog>

      {/* {One Time OTP Dialog} */}
      <Dialog
        open={openOneTimeOTPDialog}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={cx("icon-close")}>
          <img
            src={CloseIcon}
            alt="icon close"
            onClick={() => handleCloseOneTimeOtpDialog()}
          />
        </div>
        <DialogContent>
          <OneTimeOTP successful={handleOneTimeOTPSucessful} />
        </DialogContent>
      </Dialog>

      {/* {Header} */}
      <Header title={TITLE_PAGE} logoHref={LINK_EXTERNAL_PAGE} />

      {/* {Container} */}
      <Container className={cx("container")}>
        <Box className={cx("home-page-wrapper")}>
          <Grid container>
            {/* {Column left} */}
            <Grid item xs={12} lg={3}>
              {/* Category */}
              <Category>{TITLE_CASHLESS_PAYMENTS_HOME}</Category>
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

              {/* {Captcha Section} */}
              <Box className={cx("captcha-wrapper")}>
                <Grid item xs={12}>
                  <Grid container>
                    {/* {Captcha} */}
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
                <RedirectButton
                  disabledNextButton={hasDataCheckbox || !exactCaptcha}
                  variant="start"
                  onClickNext={handleClickButton}
                />
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
