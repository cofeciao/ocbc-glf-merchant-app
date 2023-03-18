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
import { useDispatch, useSelector } from "react-redux";
import { saveDataAcraAndContactInformationStep, saveDataAcraDetailStep } from "@/store/form";

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

//import types
import { IContactInformation } from "./ContactInformation";

//import components
import ContactDetails from "./ContactDetails";
import SectionWrapper from "../SectionWrapper";
import AuthorisedPersonDetails from "./AuthorisedPersonDetails";

const ContactInformation: React.FC<IContactInformation.IProps> = forwardRef(({ handleCallAPI }, ref) => {
  const cx = classNames.bind(styles);
  const history = useHistory()
  const dispatch = useDispatch();

  // get data from redux store
  const dataAcraDetail = useSelector((state: any) => state.form.dataAcraDetail);
  const { dataDetail } = dataAcraDetail;

  // States
  const [loading, setLoading] = useState(false);
  const [dataArca, setDataArca] = useState<any>({});

  const {
    LIST_STEP: {
      acra_and_contact_information: {
        section: { arca_detail, contact_detail, authorised_person_details },
      },
    },
  } = STEP_RM;

  /**
   * Retrieves data of Company And Contact Information step from Store
   */
  const acraAndContactInformationStep = useSelector(
    (state: any) => state.form.acraAndContactInformationStep
  );

// form datas
  const {
    register,
    formState: { errors, isValid, isDirty },
    setValue,
    setError,
    getValues,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      contact_detail: {
        contactNumber: acraAndContactInformationStep.contactNumber || "",
        salutation: acraAndContactInformationStep.salutation || "",
        name: acraAndContactInformationStep.name || "",
        email: acraAndContactInformationStep.email || "",
        designation: acraAndContactInformationStep.designation || "",
      },
      authorised_person_details: {
        contactNumber: acraAndContactInformationStep.contactNumber || "",
        salutation: acraAndContactInformationStep.salutation || "",
        name: acraAndContactInformationStep.name || "",
        email: acraAndContactInformationStep.email || "",
        designation: acraAndContactInformationStep.designation || "",
      }
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
    dispatch(saveDataAcraAndContactInformationStep({
      contact_detail: getValues().contact_detail,
      authorised_person_details: getValues().authorised_person_details,
    }))
  }

    /**
   * render UI Button
   * @returns {HTML}
   */
    const renderButton = () => {
      return (
        <Button 
          backgroundClass="bgGunmetalBluegrey" 
          onClick={handleNext}
          // disabled={!isValid || !isDirty}
        >
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
          title={contact_detail.title}
          description={contact_detail.description}
        >
          <ContactDetails 
            cx={cx}
            errors={errors}
            register={register}
            setValue={setValue}
            setError={setError}
            data={contact_detail}
            dataRedux={acraAndContactInformationStep}
          />
        </SectionWrapper>
      </Box>

      <Box className={cx('mt-dt-56')}>
        <SectionWrapper
          cx={cx}
          className={cx("contact-details-")}
          title={authorised_person_details.title}
          description={authorised_person_details.description}
        >
          <AuthorisedPersonDetails 
            cx={cx}
            errors={errors}
            register={register}
            setValue={setValue}
            setError={setError}
            data={authorised_person_details}
            dataRedux={acraAndContactInformationStep}
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