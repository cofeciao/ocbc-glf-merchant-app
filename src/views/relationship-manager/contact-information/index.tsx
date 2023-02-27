import classNames from "classnames";
import React, { useState } from "react";
import {
  Loading,
  Button,
  SectionWrapper,
  Select,
  InputNumberMobile,
  InputBase
} from '@sectionsg/orc';
import { v4 as uuidv4 } from 'uuid';


//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconWelcome from "../../../assets/images/icon-welcome-login.svg";

// import style
import styles from "./ContactInformation.scss";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";
import { DATA_LENGTHENING_OF_LOAN_TENURE, LIST_COUNTRIES_CODE } from "@/utils/constants";
import { PERSONAL_INFORMATION_SINGPASS } from "@/utils/constants";
import { formatNameField, preventSpecialCharacters, restrictEmail } from "@/utils/utils";
import { Link } from "react-router-dom";
import { IContactInformation } from "./ContactInformation";


const ContactInformation = () => {
  const cx = classNames.bind(styles);
  const history = useHistory()
  
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState<number>(0);

  const [contactInformation, setContactInformation] = useState({
    salution: "",
    name: "",
    designation: "",
    email: "",
    contactNumber: "",
    countryPhoneNumber: PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber,
  });


  /**
   * Handle button prev
   */
  const handlePrev = () => {
    // history.push(URL_MANUAL_FLOW.propertyInformation)
  }

   /**
   * Handle button next
   */
   const handleNext = async () => {
    
  }

    /**
   * render UI Button
   * @returns {HTML}
   */
    const renderButton = () => {
      return (
        <Button backgroundClass="bgGunmetalBluegrey" onClick={handleNext}>
          Next
          <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
        </Button>
      )
    }

    /**
   * render UI
   * @returns {HTML}
   */
      const renderItemInformation = (title: string, content: string) => {
        return (
          <div className={cx('group-item')}>
            <span className={cx('title')}>{title}</span>
            <span className={cx('content')}>{content}</span>
          </div>
        )
      }

  // function get personalInformation attribute
  const getContactInformation = (name: string, value: any, error: string) =>
    setContactInformation({
      ...contactInformation,
      [name]: value,
      [`error${formatNameField(name)}`]: error !== "",
  });

  return (
    <React.Fragment>
      {loading && <div className={cx('container-loading')}>
          <div className={cx('content-loading')}>
            <Loading />
          </div>
        </div>
      }
      <section className={cx('contact-information')}>
        <div className={"title-wrapper"}>
          <img src={IconWelcome} alt="icon" className={cx("left-image")} />
          <div className={cx("title-text d-flex align-flex-end")}><span>ACRA and contact information</span></div>
        </div>

       <section id="contact-information" className={cx('background-gray', 'mt-dt-40')}>
          <SectionWrapper title="Your contact information" description='Please ensure that these details from ACRA are updated.'>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                {renderItemInformation('Business name', 'AMZO Pte Ltd')}
                {renderItemInformation('Entity type', 'Private Limited Company')}
                {renderItemInformation('Registered address', '35 Bedok North Road #09-39 Singapore 674902')}
                {renderItemInformation('Directors', 'Lau Aik Miang S9300409F')}
              </Grid>
              <Grid item xs={4}>
                {renderItemInformation('Unique Entity Number (UEN)', '2016347449N')}
                {renderItemInformation('Nature of business', 'Café / Restaurant')}
                {renderItemInformation('Mailing address', '35 Bedok North Road #09-39 Singapore 674902')}
                {renderItemInformation('', 'Zunaidi Zainal Azmian S9000555C')}
              </Grid>
            </Grid>
          </SectionWrapper>
       </section>

       <section className={cx('background-gray', 'mt-dt-10')}>
          <SectionWrapper title="Contact details" description='Please ensure that these details are accurate'>
            <Grid container>
              <Grid item lg={4} md={4} sm={12} xs={12} className={cx('mb-dt-30', 'mr-dt-20')}>
                <Select
                  label="Salution"
                  listValues={[{
                    value: "Mrs",
                    key: "mrs"
                  }]}
                  single
                  placeholder={DATA_LENGTHENING_OF_LOAN_TENURE.select.placeholder}
                  // selectKey={'keyValidation'}
                  defaultValue={contactInformation.salution}
                  getValue={(value: any) => {
                    // setContactInformation(
                    //   'salution',
                    //   value.value,
                    // );
                  }}
                />
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}></Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}></Grid>

              <Grid item lg={5} md={5} sm={12} xs={12} className={cx('mb-dt-30')}>
                <InputBase
                  label="Name"
                  placeholder=""
                  type="text"
                  size="large"
                  inputKey={key}
                  id={"123"}
                  maxLength={15}
                  kind="nric-only"
                  name="name"
                  getValue={(value: any) => {
                    getContactInformation(
                      "name",
                      value.value,
                      value.error
                    );
                  }}
                />
              </Grid>
              <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <InputBase
                  label="Designation"
                  placeholder=""
                  type="text"
                  size="large"
                  inputKey={key}
                  id={"123"}
                  maxLength={15}
                  kind="nric-only"
                  name="designation"
                  getValue={(value: any) => {
                    getContactInformation(
                      "designation",
                      value.value,
                      value.error
                    );
                  }}
                />
              </Grid>
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <InputBase
                    label="Email"
                    placeholder=""
                    type="email"
                    size="large"
                    name="email"
                    kind="email"
                    inputKey={key}
                    id={uuidv4()}
                    value={contactInformation.email}
                    maxLength={50}
                    preventSpecialCharacters={restrictEmail}
                    getValue={(value: IContactInformation.IValueData) => {
                      getContactInformation(
                        'email',
                        value.value,
                        value.error,
                      );
                    }}
                  />
              </Grid>
              <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
              <Grid
                item lg={5} md={5} sm={12} xs={12}
                id="countryValueSelect"
              >
                <InputNumberMobile
                  label="Contact number"
                  countryCodes={LIST_COUNTRIES_CODE}
                  keyValidate={key}
                  inputNameSelect="phone-1"
                  inputNameBase="phone-2"
                  countryCode="countryPhoneNumber"
                  valueMobile="phoneNumber"
                  kind={"phone"}
                  getContactInformation={getContactInformation}
                  contactInformation={contactInformation}
                  preventSpecialCharacters={preventSpecialCharacters}
                  isPhoneSG={
                    contactInformation.countryPhoneNumber ===
                    PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber
                  }
                />
              </Grid>
            </Grid>

          </SectionWrapper>
       </section>
             
        {/* Section button  */}
        <section className={cx('button-wrapper', 'd-flex space-between mt-dt-40')}>
          <Button backgroundClass="square" onClick={handlePrev}>
            <ArrowBackIcon className={cx('arrow')} />
          </Button>
          <div>
            <div className={cx('d-inline')}>
              <Link to="/">Continue later</Link>
            </div>
            <div className="ml-dt-30 d-inline">
              {renderButton()}
            </div>
          </div>
        </section>
      </section>
    </React.Fragment>
  )

}

export default ContactInformation;