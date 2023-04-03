import classNames from "classnames";
import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import {
  Loading,
  Button,
  Category,
} from '@sectionsg/orc';
import { Link } from "react-router-dom";
import { Grid, Box, Typography } from "@material-ui/core";
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
  STEP_RM,
  WELCOME_PATH,
  NEXT,
  CONTINUE_LATER
} from "@/utils/constants-rm";

//import types
import { IContactInformation } from "./ContactInformation";

//import components
import ContactDetails from "./ContactDetails";
import SectionWrapper from "../SectionWrapper";
import AuthorisedPersonDetails from "./AuthorisedPersonDetails";
import _ from "lodash";

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
      acraAndContactInformation: {
        title,
        section: { arcaDetail, contactDetail, authorisedPersonDetails },
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
      contactDetail: {
        contactNumber: acraAndContactInformationStep.contactNumber || "",
        salutation: acraAndContactInformationStep.salutation || "",
        name: acraAndContactInformationStep.name || "",
        email: acraAndContactInformationStep.email || "",
        designation: acraAndContactInformationStep.designation || "",
      },
      authorisedPersonDetails: {
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
    history.push(WELCOME_PATH)
  }

  /**
   * handle back to page when click on stepper
   */
  useImperativeHandle(ref, () => ({
    validateForm() {
      return true
      // if (acraAndContactInformationStep) {
      //   if (_.isEmpty(acraAndContactInformationStep)) {
      //     return true;
      //   }
      //   return handleNext();
      // }
      // return true;
    },
  }));

   /**
   * Handle button next
   */
   const handleNext = async () => {
    history.push(URL_MANUAL_FLOW.servicesApplied);
    dispatch(saveDataAcraAndContactInformationStep({
      contactDetail: getValues().contactDetail,
      authorisedPersonDetails: getValues().authorisedPersonDetails,
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
          {NEXT}
          <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
        </Button>
      )
    }

  /**
   * render UI
   * @returns {HTML}
   */
    const renderItemInformation = (title: string, content: string | []) => {
      return (
        <div className={cx('group-item')}>
          <Typography className={cx("title")}>{title}</Typography>
          {Array.isArray(content) ? (
            content.map((item: IContactInformation.IDirectors, index: number) => (
              <Typography key={index} className={cx("content")}>
                &#8226; {`${item.name} ${item.nricNumber}`}
              </Typography>
              ))
            ) : (
            <Typography className={cx("content")}>{content}</Typography>
          )}
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
    if (arcaDetail) {
      getDataAcraDetail(arcaDetail)
    }
  }, [arcaDetail])

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
          <Category class="title">{title}</Category>
        </div>

      <Box id="contact-information" className={cx('mt-dt-40')}>
        <SectionWrapper
          cx={cx}
          className={cx("contact-details-acra-details")}
          title={arcaDetail.title}
          description={arcaDetail.description}
        >
          <Grid container spacing={1}>
            <Grid item xs={4}>{renderItemInformation('Business name', dataArca.businessName)}</Grid>
            <Grid item xs={4}>{renderItemInformation('Unique Entity Number (UEN)', dataArca.uniqueEntityNumber)}</Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>{renderItemInformation('Entity type', dataArca.entityType)}</Grid>
            <Grid item xs={4}>{renderItemInformation('Nature of business', dataArca.natureOfBusiness)}</Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>{renderItemInformation('Registered address', dataArca.registeredAddress)}</Grid>
            <Grid item xs={4}>{renderItemInformation('Mailing address', dataArca.mailingAddress)}</Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>{renderItemInformation('Directors', dataArca.directors)}</Grid>
          </Grid>
        </SectionWrapper>
      </Box>

      <Box className={cx('mt-dt-40', 'mb-dt-56')}>
        <SectionWrapper
          cx={cx}
          className={cx("contact-details-")}
          title={contactDetail.title}
          description={contactDetail.description}
        >
          <ContactDetails
            cx={cx}
            errors={errors}
            register={register}
            setValue={setValue}
            setError={setError}
            data={contactDetail}
            dataRedux={acraAndContactInformationStep}
          />
        </SectionWrapper>
      </Box>

      <Box className={cx('mt-dt-56')}>
        <SectionWrapper
          cx={cx}
          className={cx("contact-details-")}
          title={authorisedPersonDetails.title}
          description={authorisedPersonDetails.description}
        >
          <AuthorisedPersonDetails
            cx={cx}
            errors={errors}
            register={register}
            setValue={setValue}
            setError={setError}
            data={authorisedPersonDetails}
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
            <Link to="/">{CONTINUE_LATER}</Link>
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