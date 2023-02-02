/***
 *  PERSONAL INFORMATION
 *    >> child
 *      >> input base
 *      >> section wrapper
 *      >> input mobile
 *      >> button
 *      >> myInfo
 */
// import lib
import classnames from "classnames/bind";
import React, { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import styles from "./PersonalInformation.scss";
import { v4 as uuidv4 } from 'uuid';
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { loginSingPass } from '@/data-manager/info';

// import image
import IconPersonalInformation from "../../../assets/images/personal-information.png";
import IconSingPass from '../../../assets/images/singpass-logo.svg';

// import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// import data constant
import { APEX_APP_ID_NONE_REPRICING_UAT, APEX_APP_ID_REPRICING_LENGTHENING_UAT, ATTRIBUTE_LIST_REPRICING_LENGTHENING, ATTRIBUTE_NONE_REPRICING, DATA_CARD_CHECKBOX, LIST_COUNTRIES_CODE, PERSONAL_INFORMATION_SINGPASS, SECRET_NONE_REPRICING_UAT, SECRET_REPRICING_LENGTHENING_UAT, URL_REVIEW_BORROWER_SINGPASS, URL_SINGPASS_FLOW } from '../../../utils/constants';

// import types

import { IPersonalInformation } from './PersonalInformation.d'

// import function
import { formatNameField, restrictEmail, preventSpecialCharacters, scrollToError, getCookie, autoFocus } from '../../../utils/utils';

// import component lib
import {
  SectionWrapper,
  InputBase,
  InputNumberMobile,
  Button,
  Dialog,
  Loading
} from '@sectionsg/orc';

import { useSelector, useDispatch } from "react-redux";
import MyInfo from "./MyInfo";
import { getMyInfo, saveFormData, getRefId } from "@/store/form";
import JointMyInfo from "./JointMyInfo";
import ErrorMyInfo from "@/views/popup/ErrorMyInfo";
import _ from "lodash";

// define function
const PersonalInformation: React.FC<IPersonalInformation.IPersonalInformationProps> = forwardRef(({ handleCallAPI, isFullOption, hasHDB, children }, ref) => {
  const cx = classnames.bind(styles);
  const history = useHistory();
  const [key, setKey] = useState<number>(null);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [dialogId, setDialogId] = useState(null);
  const [dataError, setDataError] = useState('');
  const [agree, setAgree] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
   // get data from redux store
  const formRedux = useSelector((state: any) => state.form);
  // init data personal information
  const [personalInformation, setPersonalInformation] = useState({
    emailAddress: (formRedux.myInfo && formRedux.myInfo.ApplicantDetails && formRedux.myInfo.ApplicantDetails.ApplicantModel && formRedux.myInfo.ApplicantDetails.ApplicantModel[0].EmailAddress || formRedux.myInfo && formRedux.myInfo.email && formRedux.myInfo.email.value),
    countryPhoneNumber: (formRedux.myInfo && formRedux.myInfo.ApplicantDetails && formRedux.myInfo.ApplicantDetails.ApplicantModel && formRedux.myInfo.ApplicantDetails.ApplicantModel[0].MobileNumber.substring(0, 3) || `${formRedux.myInfo && formRedux.myInfo.mobileno && PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber}` || PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber),
    phoneNumber: (formRedux.myInfo && formRedux.myInfo.ApplicantDetails && formRedux.myInfo.ApplicantDetails.ApplicantModel && formRedux.myInfo.ApplicantDetails.ApplicantModel[0].MobileNumber.substring(3, formRedux.myInfo.ApplicantDetails.ApplicantModel[0].MobileNumber.length - 1) || formRedux.myInfo && formRedux.myInfo.mobileno && formRedux.myInfo.mobileno.nbr.value),
    errorEmailAddress: false,
    errorPhoneNumber: false,
    passportNumber: '',
    errorPassPortNumber: false,
  })

   useEffect(() => {
    setPersonalInformation({
      emailAddress: (formRedux.myInfo && formRedux.myInfo.ApplicantDetails && formRedux.myInfo.ApplicantDetails.ApplicantModel && formRedux.myInfo.ApplicantDetails.ApplicantModel[0].EmailAddress || formRedux.myInfo && formRedux.myInfo.email && formRedux.myInfo.email.value),
      countryPhoneNumber: (formRedux.myInfo && formRedux.myInfo.ApplicantDetails && formRedux.myInfo.ApplicantDetails.ApplicantModel && formRedux.myInfo.ApplicantDetails.ApplicantModel[0].MobileNumber.substring(0, 3) || `${formRedux.myInfo && formRedux.myInfo.mobileno && PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber}` || PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber),
      phoneNumber: (formRedux.myInfo && formRedux.myInfo.ApplicantDetails && formRedux.myInfo.ApplicantDetails.ApplicantModel && formRedux.myInfo.ApplicantDetails.ApplicantModel[0].MobileNumber.substring(3, formRedux.myInfo.ApplicantDetails.ApplicantModel[0].MobileNumber.length - 1) || formRedux.myInfo && formRedux.myInfo.mobileno && formRedux.myInfo.mobileno.nbr.value),
      errorEmailAddress: false,
      errorPhoneNumber: false,
      passportNumber: '',
      errorPassPortNumber: false
    })
  }, [formRedux.myInfo])

  /**
   * Function set data
   */
  useEffect(() => {
    const data = formRedux.form;
    if (!data) return;
    if (data.personalInformation) {
      setPersonalInformation(data.personalInformation);
    }
  }, []);

  // function get personalInformation attribute
  const getPersonalInformation = (name: string, value: string, error: string) => setPersonalInformation({
    ...personalInformation,
    [name]: value,
    [`error${formatNameField(name)}`]: error !== '',
  });

  // function validate form
  const validateForm = () => {
    let validate = false;
    if (formRedux && formRedux.myInfo.residentialstatus && (formRedux.myInfo.residentialstatus.code !== 'C' && formRedux.myInfo.residentialstatus.code !== 'P')) {
      validate = !!(personalInformation.emailAddress && !personalInformation.errorEmailAddress && personalInformation.phoneNumber && !personalInformation.errorPhoneNumber && personalInformation.passportNumber && !personalInformation.errorPassPortNumber);
    } else {
      validate = !!(personalInformation.emailAddress && !personalInformation.errorEmailAddress && personalInformation.phoneNumber && !personalInformation.errorPhoneNumber)
    }
    return validate;
  }

  // handle button next
  const handleNext = () => {
    if (validateForm()) {
      setShowMore(true);
      const dataForm = {
        ...formRedux.form,
        personalInformation: personalInformation
      };
      dispatch(saveFormData(dataForm));
    } else {
      setKey(Date.now());
      scrollToError();
    }
  }
  /**
   * Handle Stepper
   */
  useImperativeHandle(ref, () => ({
    validateForm() {
      if (validateForm()) {
        return true
      }
    },
  }));

  const contentShow = getCookie('listChecked') && getCookie('listChecked').length > 0 ? getCookie('listChecked').split(",") : [];

  const APEX_APP_ID = contentShow.find((x: any) => (x === DATA_CARD_CHECKBOX[0].label || x === DATA_CARD_CHECKBOX[1].label)) ? process.env.myinfo.clientIdRepricing : process.env.myinfo.clientIdNonRepricing;
  const SECRET = contentShow.find((x: any) => (x === DATA_CARD_CHECKBOX[0].label || x === DATA_CARD_CHECKBOX[1].label)) ? process.env.myinfo.secretRepricing : process.env.myinfo.secretNonRepricing;
  const ATTRIBUTE_LIST = contentShow.find((x: any) => (x === DATA_CARD_CHECKBOX[0].label || x === DATA_CARD_CHECKBOX[1].label)) ? process.env.myinfo.attributeListRepricing : process.env.myinfo.attributeListNonRepricing;
  const showModal = async () => {
    if (localStorage.getItem("authorCode") && _.isEmpty(formRedux.myInfo)) {
      setLoading(true);
      const data = await loginSingPass(localStorage.getItem("authorCode"), APEX_APP_ID, SECRET, ATTRIBUTE_LIST);
      if (data && data.GetPersonDataExtRes.ErrorDetail) {
        setLoading(false);
        setDataError(data.GetPersonDataExtRes.ErrorDetail)
        openDialog()
      } else {
        if (data && data.GetPersonDataExtRes && data.GetPersonDataExtRes.PersonData) {
          setLoading(false);
          dispatch(getMyInfo(data.GetPersonDataExtRes.PersonData));
          dispatch(getRefId(data.GetPersonDataExtRes.RefID))
        }
      }
    }
  }

  /**
   * Scroll to top
   */
  useEffect(() => {
    window.scrollTo(0, 0);
    showModal()
  }, [])


  /**
   * Handle next page
   * 
   */
  const handleClickNextButton = () => {
    if (formRedux.isBorrower) {
      history.push(URL_REVIEW_BORROWER_SINGPASS)
    } else {
      if (formRedux.form.isEditing) {
        history.push(URL_SINGPASS_FLOW.review)
      } else {
        history.push(URL_SINGPASS_FLOW.propertyInformation)
      }
    }
  }

  /**
   * Function open dialog
   */
   const openDialog = () => {
    setDialogId(true);
  };

  /**
   * Function close dialog
   */
  const closeDialog = () => {
    setDialogId(false);
  };


  /**
  * Render UI button
  * @function 
  * @returns 
  */
  const renderButton = () => {
    return (
      <>
        {
         showMore ? (
            <Button backgroundClass="bgGunmetalBluegrey" buttonType='' onClick={() => handleClickNextButton()}>
              {
                formRedux.form.isEditing ? (
                  <>
                    Review
                  </>
                ) : (
                  <>
                    Next
                  </>
                )
              }
              <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
            </Button>
          ) : (
            <Button backgroundClass="bgGunmetalBluegrey" buttonType='' onClick={() => {
              if (formRedux && formRedux.myInfo.residentialstatus && (formRedux.myInfo.residentialstatus.code !== 'C' && formRedux.myInfo.residentialstatus.code !== 'P')) {
                setAgree(true);
                if (agree) {
                  handleNext();
                }
              } else {
                handleNext()
              }
            }}>
              <>
                {formRedux && formRedux.myInfo.residentialstatus && (formRedux.myInfo.residentialstatus.code !== 'C' && formRedux.myInfo.residentialstatus.code !== 'P') && !agree ? 'I agree' : agree ? 
                "Next" : 'Okay'}
                {(agree) && <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />}
              </>
            </Button>
          )
        }
      </>
    )
  }

  /**
   * handle Detect Description
   * @returns string
   */
   const handleDetectDescription = () => {
    if (!formRedux.isBorrower) {
      return "We will use this email address and mobile number to contact you and verify your identity."
    } else {
      return "Update your contact information if required. We will use this email address and mobile number to contact you and verify your identity."
    }
  }

  return (
    <>
      {loading && <div className={cx('container-loading')}>
        <div className={cx('content-loading')}>
          <Loading />
        </div>
      </div>}
      <section className={cx('personal-information')}>
        <div className={"title-wrapper"}>
          <img src={IconPersonalInformation} alt="icon" className={cx("left-image")} />
          <div className={cx("title-text d-flex align-flex-end d-mb-block-425")}><span>Check information from</span> <img src={IconSingPass} alt="logo" className="mrl-dt-10 d-mb-block-425 mrl-mb-425-0 mrt-mb-425-10 mrl-dt-5"/></div>
        </div>
        <section id="personal-information" className={cx('mt-dt-40')}>
        {
          !showMore && (
            <SectionWrapper title="Your contact information" description={handleDetectDescription()}>
              <Grid container>
                <Grid item lg={5} md={5} sm={12} xs={12}
                  className="mb-mb-30"
                  id="emailAddress"
                >
                  <InputBase
                    label="Email address"
                    placeholder=""
                    type="email"
                    size="large"
                    name="emailAddress"
                    kind="email"
                    inputKey={key}
                    id={uuidv4()}
                    value={personalInformation.emailAddress || ''}
                    maxLength={50}
                    preventSpecialCharacters={restrictEmail}
                    getValue={(value: IPersonalInformation.IValueData) => {
                      getPersonalInformation(
                        'emailAddress',
                        value.value,
                        value.error,
                      );
                    }}
                  />
                </Grid>
                <Grid item lg={2} md={2} sm={12} xs={12} />
                <Grid item lg={5} md={5} sm={12} xs={12}>
                  <InputNumberMobile
                    label="Mobile number"
                    countryCodes={LIST_COUNTRIES_CODE}
                    contactInformation={personalInformation}
                    preventSpecialCharacters={preventSpecialCharacters}
                    isPhoneSG={personalInformation.countryPhoneNumber === PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber}
                    keyValidate={key}
                    autoFocus={autoFocus}
                    inputNameSelect="phone-1"
                    inputNameBase="phone-2"
                    countryCode="countryPhoneNumber"
                    valueMobile="phoneNumber"
                    getContactInformation={getPersonalInformation}
                    kind={'phone'}
                  />
                </Grid>
              </Grid>
            </SectionWrapper>
          )
        }
          {/* section myInfo */}
          {
            showMore &&
            <>
              {
                !formRedux.isBorrower ? (
                  <MyInfo
                    personData={formRedux.myInfo}
                    isFullOption={isFullOption}
                    formRedux={formRedux}
              />
                ) : (
                  <JointMyInfo
                    personData={formRedux.myInfo && formRedux.myInfo.ApplicantDetails}
                    isFullOption={isFullOption}
                    formRedux={formRedux}
                  />

                )
              }
            </>
          }
        </section>
        {
          agree && !showMore && (
            <section className="mt-dt-10">
              {/* Section personal information */}
              <SectionWrapper title="Your personal information">
              <Grid container>
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                >
                  <InputBase
                    label="Passport number"
                    placeholder=""
                    type="text"
                    size="large"
                    inputKey={key}
                    id={uuidv4()}
                    maxLength={15}
                    kind="required"
                    name="nric"
                    value={personalInformation.passportNumber}
                    getValue={(value: IPersonalInformation.IValueData) => {
                      getPersonalInformation(
                        'passportNumber',
                        value.value,
                        value.error,
                      );
                    }}
                  />
                </Grid>
              </Grid>
              </SectionWrapper>
            </section>
          )
        }
        {/* Section button  */}
        <section className={cx('button-wrapper', 'd-flex justify-end mt-dt-40')}>
          <div>
            <div className="d-inline">
              {children}
            </div>
            <div className="ml-dt-30 d-inline">
              {renderButton()}
            </div>
          </div>
        </section>
      </section>
      {/* Dialog */}
      <Dialog
        isOpen={dialogId}
        onRequestClose={closeDialog }
        width={700}
        hasCloseBtn={true}
      >
        <ErrorMyInfo
          title="We are unable to use your Myinfo records for this application"
          dataError={dataError}
          description="Would you like to continue with a manual application?"
          closeDialog={closeDialog}
          cx={cx}
        />
        {/* {renderContentPopup()}  */}
      </Dialog>
    </>
  );
});
export default PersonalInformation;
