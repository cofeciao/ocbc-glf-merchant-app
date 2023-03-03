import classNames from "classnames";
import React, { forwardRef, useState } from "react";
import {
  Loading,
  Button,
  SectionWrapper,
  Radio,
  CardCheckbox,
  Checkbox
} from '@sectionsg/orc';
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconWelcome from "../../../assets/images/icon-welcome-login.svg";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// constants
import { 
  DATA_CARD_CHECKBOX_ACCEPTANCE1, 
  DATA_CARD_CHECKBOX_ACCEPTANCE2, 
  LIST_ECOMMERCE, 
  LIST_POINTS, 
  LIST_RADIO_QUESTION1, 
  LIST_REPAYMENT_PERIODS, 
  MSG_ERR_CARD_CHECKBOX, 
  OTHER_SERVICES, 
  URL_MANUAL_FLOW } from "@/utils/constants-rm";

// import style
import styles from "./ServicesApplied.scss";


const ServicesApplied= forwardRef(( ref) => {
  const cx = classNames.bind(styles);
  const history = useHistory()
  
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState<number>(0);
  const [agree, setAgree] = useState<boolean>(false);
  const [seeMore, setSeeMore] = useState<boolean>(false);

  const [groupCheckbox, setGroupCheckbox] = useState({
    pointSales: false,
    eCommerce: false,
  });
  const [groupCheckboxRepayment, setGroupCheckboxRepayment] = useState({
    instalmentPaymentPlan: false,
    directCurrencyConversion: false,
    mailOrder: false,
  });

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

    /**
   * render UI List Checkbox
   * @returns {HTML}
   */
  const renderListCheckboxTransaction = (label: string, list: any) => {
    return (
      <section className={cx("list-checkbox")}>
        <div className={cx("label")}>{label}</div>
        <Checkbox list={list} name="Accept rules" getValue={(value: string) => {
          setKey(null);
        }} />
      </section>
    )
  }

      /**
   * render UI List Checkbox
   * @returns {HTML}
   */
      const renderListCheckboxRepayment = (label: string, list: any) => {
        // const renderIcon = !seeMore ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />;
        return (
          <section className={cx("list-checkbox-repayment")}>
            <div className={cx("label")}>{label}</div>
            <Checkbox list={list} name="Accept rules" getValue={(value: string) => {
              setKey(null);
            }} />
            {/* <div className={cx('see-more')} onClick={() => setSeeMore(!seeMore)}>Show more repayment periods {renderIcon}</div> */}
          </section>
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
                    setGroupCheckbox((preState) => ({
                      ...preState,
                      pointSales: data.checked
                    }))
                    // handleGetValueCheckbox(data);
                  }}
                  className={cx("item-card")}
                />    
                {groupCheckbox.pointSales && 
                renderListCheckboxTransaction('Please select the payment options for your Point-of-Sales terminal', LIST_POINTS)}
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
                    setGroupCheckbox((preState) => ({
                      ...preState,
                      eCommerce: data.checked
                    }))                  }}
                  className={cx("item-card")}
                />      
                {groupCheckbox.eCommerce && 
                renderListCheckboxTransaction('Please select the payment options for your e-Commerce platform', LIST_ECOMMERCE)}
              </Grid>
            </Grid>
          </SectionWrapper>
       </section>

       <section className={cx('background-gray', 'mt-dt-10')}>
        <SectionWrapper title="Other services" description=''>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Radio
                name="instalmentPaymentPlan"
                listCheckBox={LIST_RADIO_QUESTION1}
                label={OTHER_SERVICES.titleQuestions1}
                radioKey={key}
                value={true}
                getValue={(value: any) => {
                  setGroupCheckboxRepayment((preState) => ({
                    ...preState,
                    instalmentPaymentPlan: value === 'Yes' ? true : false
                  }))
                }}
              />
              {groupCheckboxRepayment.instalmentPaymentPlan && 
              renderListCheckboxRepayment('Please select repayment periods offered', LIST_REPAYMENT_PERIODS)}
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={8}>
              <Radio
                name="directCurrencyConversion"
                listCheckBox={LIST_RADIO_QUESTION1}
                label={OTHER_SERVICES.titleQuestions2}
                radioKey={key}
                value={true}
                getValue={(value: any) => {
                  setGroupCheckboxRepayment((preState) => ({
                    ...preState,
                    directCurrencyConversion: value === 'Yes' ? true : false
                  }))
                }}
              />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={8}>
              <Radio
                name="mailOrder"
                listCheckBox={LIST_RADIO_QUESTION1}
                label={OTHER_SERVICES.titlequestions3}
                radioKey={key}
                value={true}
                getValue={(value: any) => {
                  setGroupCheckboxRepayment((preState) => ({
                    ...preState,
                    mailOrder: value === 'Yes' ? true : false
                  }))
                }}
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