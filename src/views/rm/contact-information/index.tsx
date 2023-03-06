import classNames from "classnames";
import React, { forwardRef, useEffect, useState } from "react";
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
  PERSONAL_INFORMATION_SINGPASS,
  STEP_RM
} from "@/utils/constants-rm";
import { SELF_SERVE_PAGE } from "@/utils/constants";

//import types
import { IContactInformation } from "./ContactInformation";
import ContactDetails from "./ContactDetails";
import SectionWrapper from "../SectionWrapper";
import { useDispatch } from "react-redux";
import { saveDataAcraDetailStep } from "@/store/form";
import { useSelector } from "react-redux";


const ContactInformation: React.FC<IContactInformation.IProps> = forwardRef(({ handleCallAPI }, ref) => {
  const cx = classNames.bind(styles);
  const history = useHistory()
  const dispatch = useDispatch();

  // get data from redux store
  const dataAcraDetail = useSelector((state: any) => state.form.dataAcraDetail);
  const { dataDetail } = dataAcraDetail;

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
  const [dataArca, setDataArca] = useState<any>({});

  const {
    list_step: {
      company_and_contact_information: {
        section: { contact_details },
      },
    },
  } = SELF_SERVE_PAGE;

  const {
    list_step: {
      acra_and_contact_information: {
        section: { arca_detail },
      },
    },
  } = STEP_RM;

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
   * Get data acra detail
   * @param data
   */
  const getDataAcraDetail = (data: any) => {
    dispatch(saveDataAcraDetailStep(data));
  };

   /**
   * Handle update state when dataListCheckbox updated from store
   */
   useEffect(() => {
    if (dataDetail) {
      setDataArca(dataDetail);
    }
  }, [dataDetail]);

  useEffect(() => {
    if (arca_detail) {
      getDataAcraDetail(arca_detail)
    }
  }, [arca_detail])
    
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
              {renderItemInformation('Business name', dataArca.business_name)}
              {renderItemInformation('Entity type', dataArca.entity_type)}
              {renderItemInformation('Registered address', dataArca.registered_address)}
              {renderItemInformation('Directors', dataArca.directors)}
              {renderItemInformation('', dataArca.user)}
            </Grid>
            <Grid item xs={4}>
              {renderItemInformation('Unique Entity Number (UEN)', dataArca.unique_entity_number)}
              {renderItemInformation('Nature of business', dataArca.nature_of_business)}
              {renderItemInformation('Mailing address', dataArca.mailing_address)}
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