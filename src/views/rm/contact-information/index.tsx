import classNames from "classnames";
import React, { forwardRef, useState } from "react";
import {
  Loading,
  Button,
  Category,
} from '@sectionsg/orc';
import { Link } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// import style
import styles from "./ContactInformation.scss";

// import constants
import { 
  URL_MANUAL_FLOW, 
  PERSONAL_INFORMATION_SINGPASS 
} from "@/utils/constants-rm";
import { SELF_SERVE_PAGE } from "@/utils/constants";

//import types
import { IContactInformation } from "./ContactInformation";
import ContactDetails from "./ContactDetails";
import SectionWrapper from "../SectionWrapper";


const ContactInformation: React.FC<IContactInformation.IProps> = forwardRef(({ handleCallAPI }, ref) => {
  const cx = classNames.bind(styles);
  const history = useHistory()
  

  // States
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

  const {
    list_step: {
      company_and_contact_information: {
        section: { contact_details },
      },
    },
  } = SELF_SERVE_PAGE;

// form
  const {
    register,
    formState: { errors, isValid, isDirty },
    watch,
    setValue,
    setError,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      ContactNumber: "",
    },
  });


  /**
   * Handle button prev
   */
  const handlePrev = () => {
    history.push('/rm/welcome')
  }

   /**
   * Handle button next
   */
   const handleNext = async () => {
    history.push(URL_MANUAL_FLOW.servicesApplied);
    
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
            <span className={cx('label')}>{title}</span>
            <span className={cx('content')}>{content}</span>
          </div>
        )
      }

  /**
   * render UI
   * @returns {HTML}
   */
    const renderTitleInformation = (title: string, subTitle: string) => {
      return (
        <div className={cx('group-title')}>
          <span className={cx('title')}>{title}</span>
          <span className={cx('sub-title')}>{subTitle}</span>
        </div>
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

      <Box className={cx('contact-information')}>
        <div className="contact-information-category" >
          <Category class="title">ACRA and contact information </Category>
        </div>

      <Box id="contact-information" className={cx('mt-dt-40')}>
        <SectionWrapper
          cx={cx}
          className={cx("contact-details-")}
          title={'ACRA details'}
          description={'Please ensure that these details from ACRA are updated.'}
        >
          <Grid container spacing={3}>
            <Grid item xs={4}>
              {renderItemInformation('Business name', 'AMZO Pte Ltd')}
              {renderItemInformation('Entity type', 'Private Limited Company')}
              {renderItemInformation('Registered address', '35 Bedok North Road #09-39 Singapore 674902')}
              {renderItemInformation('Directors', 'Lau Aik Miang S9300409F')}
              {renderItemInformation('', 'Zunaidi Zainal Azmian S9000555C')}
            </Grid>
            <Grid item xs={4}>
              {renderItemInformation('Unique Entity Number (UEN)', '2016347449N')}
              {renderItemInformation('Nature of business', 'Café / Restaurant')}
              {renderItemInformation('Mailing address', '35 Bedok North Road #09-39 Singapore 674902')}
            </Grid>
          </Grid>
        </SectionWrapper>
      </Box>
      
      <Box className={cx('mt-dt-40', 'mb-dt-56')}>
        <SectionWrapper
          cx={cx}
          className={cx("contact-details-")}
          title={'Contact details'}
          description={'Please ensure that these details are accurate.'}
        >
          <ContactDetails 
            cx={cx}
            errors={errors}
            register={register}
            setValue={setValue}
            setError={setError}
            data={contact_details}
          />
        </SectionWrapper>
      </Box>

      <Box className={cx('mt-dt-56')}>
        <SectionWrapper
            cx={cx}
            className={cx("contact-details-")}
            title={'Authorised person details'}
            description={'Please ensure that these details are accurate.'}
          >
            <ContactDetails 
              cx={cx}
              errors={errors}
              register={register}
              setValue={setValue}
              setError={setError}
              data={contact_details}
            />
          </SectionWrapper>  
      </Box>
             
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
    </Box>
  </React.Fragment>
  )
});

export default ContactInformation;