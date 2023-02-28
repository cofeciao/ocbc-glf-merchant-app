import classNames from "classnames";
import React, { forwardRef, useState } from "react";
import {
  Loading,
  Button,
  SectionWrapper,
  Radio,
  CardCheckbox,
} from '@sectionsg/orc';
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconWelcome from "../../../assets/images/icon-welcome-login.svg";

// constants
import { DATA_CARD_CHECKBOX_ACCEPTANCE1, DATA_CARD_CHECKBOX_ACCEPTANCE2, LIST_RADIO_QUESTION1, MSG_ERR_CARD_CHECKBOX, OTHER_SERVICES, URL_MANUAL_FLOW } from "@/utils/constants";

// import style
import styles from "./ServicesApplied.scss";


const ServicesApplied= forwardRef(( ref) => {
  const cx = classNames.bind(styles);
  const history = useHistory()
  
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState<number>(0);
  const [agree, setAgree] = useState<boolean>(false);

  /**
   * Handle button prev
   */
  const handlePrev = () => {
    history.push(URL_MANUAL_FLOW.contactInformation);
  }

   /**
   * Handle button next
   */
   const handleNext = async () => {
     if (agree) {
       history.push(URL_MANUAL_FLOW.servicesApplied);
    }

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
          <SectionWrapper title="Transaction and card acceptance type" description='Both services automatically come with Mastercard and Visa.  '>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <CardCheckbox
                  label=""
                  textError={MSG_ERR_CARD_CHECKBOX}
                  dataCardCheckbox={DATA_CARD_CHECKBOX_ACCEPTANCE1}
                  lg={4}
                  md={4}
                  sm={6}
                  xs={12}
                  checkboxKey={key}
                  getValue={(data: any) => {
                    console.log(data)
                    // handleGetValueCheckbox(data);
                    // dispatch(saveListCheckbox(data));
                  }}
                  className={cx("item-card")}
                />    
              </Grid>
              <Grid item xs={12}>
                <CardCheckbox
                  label=""
                  textError={MSG_ERR_CARD_CHECKBOX}
                  dataCardCheckbox={DATA_CARD_CHECKBOX_ACCEPTANCE2}
                  lg={4}
                  md={4}
                  sm={6}
                  xs={12}
                  checkboxKey={key}
                  getValue={(data: any) => {
                    // handleGetValueCheckbox(data);
                    // dispatch(saveListCheckbox(data));
                  }}
                  className={cx("item-card")}
                />        
              </Grid>
            </Grid>
          </SectionWrapper>
       </section>

       <section className={cx('background-gray', 'mt-dt-10')}>
        <SectionWrapper title="Other services" description=''>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Radio
              name="prepaymentInstructions"
              listCheckBox={LIST_RADIO_QUESTION1}
              label={OTHER_SERVICES.titleQuestions1}
              radioKey={key}
              value={true}
              // getValue={(value: any) => {
              //   setValueFormRedemption(
              //     'prepaymentInstructions',
              //     value,
              //   );
              // }}
            />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={8}>
              <Radio
              name="prepaymentInstructions"
              listCheckBox={LIST_RADIO_QUESTION1}
              label={OTHER_SERVICES.titleQuestions2}
              radioKey={key}
              value={true}
              // getValue={(value: any) => {
              //   setValueFormRedemption(
              //     'prepaymentInstructions',
              //     value,
              //   );
              // }}
            />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={8}>
              <Radio
              name="prepaymentInstructions"
              listCheckBox={LIST_RADIO_QUESTION1}
              label={OTHER_SERVICES.titlequestions3}
              radioKey={key}
              value={true}
              // getValue={(value: any) => {
              //   setValueFormRedemption(
              //     'prepaymentInstructions',
              //     value,
              //   );
              // }}
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

});

export default ServicesApplied;