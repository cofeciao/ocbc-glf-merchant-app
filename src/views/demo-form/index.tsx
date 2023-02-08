// import modules
import {
  InputBase,
  Radio,
  InputNumberMobile,
  Header,
  Footer,
  Button,
} from "@sectionsg/orc";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ListCheckBox from "@/components/ListCheckBox";

// import constants
import {
  LIST_COUNTRIES_CODE,
  LIST_RADIO,
  TITLE_PAGE,
  LINK_EXTERNAL_PAGE,
  NEXT,
  PERSONAL_INFORMATION_SINGPASS,
  LIST_PROPERTY_COUNTRY,
} from "../../utils/constants";

// import style
import styles from "./DemoForm.scss";

// import types
import { Container, Grid } from "@material-ui/core";
import classnames from "classnames/bind";
import { useHistory } from "react-router-dom";

//import icon
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { formatNameField, preventSpecialCharacters } from "@/utils/utils";

// render UI
const DemoForm = (props: any) => {
  const {} = props;
  const [listRadio, setListRadio] = useState(LIST_RADIO);
  const cx = classnames.bind(styles);
  const [key, setKey] = useState<number>(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const [agree, setAgree] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // init data personal information
  const [personalInformation, setPersonalInformation] = useState({
    countryPhoneNumber: PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber,
    phoneNumber: "",
    emailAddress: "",
    errorEmailAddress: false,
    errorPhoneNumber: false,
    singaporeCitizen: "",
    nameNric: "",
    nricNumber: "",
    errorNricNumber: false,
    errorPassPortNumber: false,
    passportNumber: "",
    namePassport: "",
  });

  // function get personalInformation attribute
  const getPersonalInformation = (name: string, value: any, error: string) =>
    setPersonalInformation({
      ...personalInformation,
      [name]: value,
      [`error${formatNameField(name)}`]: error !== "",
    });

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        onClick={() => {
          history.push("/");
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

  return (
    <>
      <Header
        namePage={TITLE_PAGE}
        backLink={{ name: TITLE_PAGE, href: LINK_EXTERNAL_PAGE }}
      />

      <Container className={cx("container")}>
        <section className={cx("landing-page")}>
          <Grid container className={cx("form-submit")}>
            <Grid item lg={8} md={4} sm={12} xs={12}>
              <InputBase
                label="Full name"
                placeholder=""
                type="text"
                size="large"
                inputKey={key}
                id={"123"}
                maxLength={15}
                kind="nric-only"
                name="nricNumber"
                getValue={(value: any) => {
                  getPersonalInformation(
                    "emailAddress",
                    value.value,
                    value.error
                  );
                }}
              />
            </Grid>

            <Grid item lg={8} md={5} sm={12} xs={12}>
              <InputNumberMobile
                label="Mobile number"
                countryCodes={LIST_COUNTRIES_CODE}
                keyValidate={key}
                inputNameSelect="phone-1"
                inputNameBase="phone-2"
                countryCode="countryPhoneNumber"
                valueMobile="phoneNumber"
                kind={"phone"}
                getContactInformation={getPersonalInformation}
                contactInformation={personalInformation}
                preventSpecialCharacters={preventSpecialCharacters}
                isPhoneSG={
                  personalInformation.countryPhoneNumber ===
                  PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber
                }
              />
            </Grid>

            <Grid item lg={8} md={5} sm={12} xs={12} id="selfEmployed">
              <Radio
                name="selfEmployed"
                listCheckBox={listRadio}
                label="Are you a Singapore Citizen or Permanent Resident (PR)?"
                radioKey={key}
                getValue={(value: any) => {
                  getPersonalInformation("singaporeCitizen", value, "");
                  setMounted(false);
                }}
              />
            </Grid>
          </Grid>
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
export default DemoForm;
