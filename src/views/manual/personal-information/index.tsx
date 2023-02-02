/***
 *  PERSONAL INFORMATION
 *    >> child
 *      >> input base
 *      >> section wrapper
 *      >> input mobile
 *      >> button
 *      >> radio
 */
// import lib
import { saveFormData } from "@/store/form";
import { Grid } from "@material-ui/core";

//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// import component lib
import {
  Button, InputBase,
  InputNumberMobile, 
  Radio, SectionWrapper, Dialog
} from '@sectionsg/orc';
import classnames from "classnames/bind";
import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

// import image
import IconPersonalInformation from "../../../assets/images/personal-information.png";

// import data constant
import { LIST_COUNTRIES_CODE, LIST_PROPERTY_COUNTRY, LIST_RADIO, LIST_REQUEST_REPRICING, NEXT, NRIC, PASSPORT, PERSONAL_INFORMATION_SINGPASS, REVIEW, URL_MANUAL_FLOW, URL_NON_REPRICING_BORROWER_MANUAL, URL_REPRICING_BORROWER_MANUAL, URL_REVIEW_BORROWER_MANUAL } from '../../../utils/constants';

// import function
import { autoFocus, formatNameField, preventSpecialCharacters, restrictEmail, scrollToError, useComponentDidUpdate } from '../../../utils/utils';

// import types
import { IPersonalInformation } from './PersonalInformation.d';
import styles from "./PersonalInformation.scss";
import { loginSingPass } from "@/data-manager/info";
import ErrorMyInfo from "@/views/popup/ErrorMyInfo";


// define function
const PersonalInformation: React.FC<IPersonalInformation.IProps> = forwardRef(({ handleCallAPI }, ref) => {
  const cx = classnames.bind(styles);
  const history = useHistory();
  const [key, setKey] = useState<number>(null);
  const dispatch = useDispatch();
  const [agree, setAgree] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false)
  const [onChangeRadio, setOnChangeRadio] = useState<boolean>(true)
  const [listRadio, setListRadio] = useState<IPersonalInformation.IRadio[]>(LIST_RADIO);
  const [listDocument, setListDocument] = useState([])
  const [dialogId, setDialogId] = useState(null);
  const [dataError, setDataError] = useState('');


  // init data personal information
  const [personalInformation, setPersonalInformation] = useState({
    countryPhoneNumber: PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber,
    phoneNumber: '',
    emailAddress: '',
    errorEmailAddress: false,
    errorPhoneNumber: false,
    singaporeCitizen: '',
    nameNric: '',
    nricNumber: '',
    errorNricNumber: false,
    errorPassPortNumber: false,
    passportNumber: '',
    namePassport: '',
  })


  /**
   * Scroll to top
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  * Retrieves data from Store
  */
  const formReduxData = useSelector((state: any) => state.form);

  // function get personalInformation attribute
  const getPersonalInformation = (name: string, value: any, error: string) => setPersonalInformation({
    ...personalInformation,
    [name]: value,
    [`error${formatNameField(name)}`]: error !== '',
  });

  /**
   *  Function reset personalInformation attribute
   * @returns {Object}
   */
  const resetData = () => setPersonalInformation({
    ...personalInformation,
    nameNric: '',
    nricNumber: '',
    errorNricNumber: false,
    errorPassPortNumber: false,
    passportNumber: '',
    namePassport: '',
  });

  /**
   * Function reset Data
   */
  useEffect(() => {
    if (!mounted) {
      if (personalInformation.singaporeCitizen !== '') {
      resetData();
      setKey(null);
    }
    }
  }, [personalInformation.singaporeCitizen]);

  /**
   * Function validate section your contact
   * @returns {Boolean}
   */
  const validateYourContact = () => !!(personalInformation.emailAddress && !personalInformation.errorEmailAddress && personalInformation.phoneNumber && !personalInformation.errorPhoneNumber);

  /**
   * Function validate section personal information
   * @returns {Boolean}
   */
  const validatePersonalInformation = () => {
    let validate = false;
    if (personalInformation.singaporeCitizen === LIST_RADIO[0].text) {
      validate = !!(personalInformation.nameNric && personalInformation.nricNumber && !personalInformation.errorNricNumber)
    } else {
      validate = !!(personalInformation.namePassport && personalInformation.passportNumber && !personalInformation.errorPassPortNumber)
    }
    return validate;
  }

  /**
   * handle change list document required
   */

  const handleChangeDocument = () => {
    const arrayDocument = formReduxData && formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.documentRequired;
    let newItems = arrayDocument;
    if (personalInformation.singaporeCitizen && personalInformation.singaporeCitizen === LIST_RADIO[0].text) {
      const index = _.findIndex(arrayDocument, function(item) { return item == PASSPORT })
      if (index > -1) {
        newItems = arrayDocument.map((item: any) => item === PASSPORT ? NRIC : item);
      }
    } else {
      const index = _.findIndex(arrayDocument, function(item) { return item == NRIC })
      if (index > -1) {
        newItems = arrayDocument.map((item: any) => item === NRIC ? PASSPORT : item);
      }
    }
    return newItems;
  }

  /**
   * Handle button next
   */
  const handleNext = () => {
    if (agree) {
      if (validateYourContact() && validatePersonalInformation()) {
        const dataForm = {
          ...formReduxData.form,
          personalInformation: personalInformation,
          residentialStatus: personalInformation.singaporeCitizen === LIST_RADIO[0].text ? LIST_PROPERTY_COUNTRY[0] : LIST_PROPERTY_COUNTRY[1],
          formLanding: {
            ...formReduxData.form.formLanding,
            documentRequired: formReduxData && formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.documentRequired.length > 0 ? handleChangeDocument() : []
          }
        };
        dispatch(saveFormData(dataForm));

        /**
         * handleCallAPI
         */
        handleCallAPI(personalInformation.singaporeCitizen);

        if (formReduxData.isBorrower) {
          if (formReduxData.form.isEditing) {
            history.push(URL_REVIEW_BORROWER_MANUAL)
          } else {
            if (formReduxData.form && formReduxData.form.formLanding
              && formReduxData.form.formLanding.listChecked
              && formReduxData.form.formLanding.listChecked.length === 1
              && formReduxData.form.formLanding.listChecked[0] === LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]
            ) {
              history.push(URL_NON_REPRICING_BORROWER_MANUAL)
            } else {
              history.push(URL_REPRICING_BORROWER_MANUAL)
            }
          }
        } else {
          if (formReduxData.form.isEditing) {
            history.push(URL_MANUAL_FLOW.review)
          } else {
            history.push(URL_MANUAL_FLOW.propertyInformation)
          }
        }

      } else {
        setKey(Date.now());
        scrollToError();
      }
    } else {
      if (validateYourContact()) {
        setAgree(true);
      } else {
        setKey(Date.now());
        scrollToError();
      }
    }
  }

  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button backgroundClass="bgGunmetalBluegrey" onClick={handleNext} buttonType=''>
        {
          formReduxData.form.isEditing ? (
            <>
              {REVIEW}
              {(formReduxData.form.isEditing) && <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />}
            </>
          ) : (
            <>
              {agree ? <>{NEXT}</> : 'I agree'}
              {(agree) && <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />}
            </>
          )
        }
      </Button>
    )
  }

  /**
   * handle back to page when click on stepper
   */
  useImperativeHandle(ref, () => ({
    validateForm() {
      if (formReduxData.form) {
        if (_.isEmpty(formReduxData.form.personalInformation)) {
          return true;
        }
        return handleNext();
      }
      return true;
    },
  }));

  /**
  *  Function set data
  */
  useEffect(() => {
    const data = formReduxData.form;
    if (!data) return;
    if (data && data.personalInformation) {
      setAgree(true);
      setPersonalInformation(data.personalInformation);
      setMounted(true);

      /**
       * Handle fetch radio checkbox
       */
      let listCheckbox: IPersonalInformation.IRadio[] = [];
      listCheckbox = [...LIST_RADIO];
      listCheckbox.map((item: IPersonalInformation.IRadio, idx: number) => {
        if (item.text === data.personalInformation.singaporeCitizen) {
          listCheckbox[idx] = {
            text: listCheckbox[idx].text,
            checked: true
          }
        }
      })
      setListRadio(listCheckbox);
    }
  }, [formReduxData.form && formReduxData.form.personalInformation]);

  /**
   * handle Detect Description
   * @returns string
   */
  const handleDetectDescription = () => {
    if (!formReduxData.isBorrower) {
      return "We will use this email address and mobile number to contact you and verify your identity."
    } else {
      return "We will use this email address and mobile number to contact you and verify your identity. These details will be used to update our records if your request(s) is/are approved."
    }
  }
  return (
    <>
      <section className={cx('personal-information')}>
        <div className={"title-wrapper"}>
          <img src={IconPersonalInformation} alt="icon" className={cx("left-image")} />
          <div className={cx("title-text d-flex align-flex-end")}><span>Personal information</span></div>
        </div>
        <section id="personal-information" className={cx('background-gray', 'mt-dt-40')}>
          {/* Section contact information */}
          <SectionWrapper title="Your contact information" description={handleDetectDescription()}>
            <Grid container>
              <Grid item lg={5} md={5} sm={12} xs={12}
                className="mb-30 mb-mb-30"
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
                  value={personalInformation.emailAddress}
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
        </section>
        {
          agree && (
            <section className="mt-dt-10">
              {/* Section personal information */}
              <SectionWrapper title="Your personal information">
                <Grid container>
                  <Grid
                    item
                    lg={5}
                    md={5}
                    sm={12}
                    xs={12}
                    id="selfEmployed"
                    className={personalInformation.singaporeCitizen ? "mb-dt-30" : ''}
                  >
                    <Radio
                      name="selfEmployed"
                      listCheckBox={listRadio}
                      label="Are you a Singapore Citizen or Permanent Resident (PR)?"
                      radioKey={key}
                      value={personalInformation.singaporeCitizen}
                      getValue={(value: IPersonalInformation.IValueData) => {
                        getPersonalInformation(
                          'singaporeCitizen',
                          value,
                          ''
                        );
                        setMounted(false);
                      }}
                    />
                  </Grid>
                </Grid>
                {
                  personalInformation.singaporeCitizen && personalInformation.singaporeCitizen === LIST_RADIO[0].text && (
                    <Grid container>
                      <Grid
                        item lg={5} md={5} sm={12} xs={12}
                        id="nameinnric"
                        className="mb-30 mb-mb-30"
                      >
                        <InputBase
                          label="Name in NRIC"
                          placeholder=""
                          type="text"
                          size="large"
                          id={uuidv4()}
                          inputKey={key}
                          maxLength={70}
                          kind="name-nric"
                          name="nameNric"
                          value={personalInformation.nameNric}
                          getValue={(value: IPersonalInformation.IValueData) => {
                            getPersonalInformation(
                              'nameNric',
                              value.value,
                              value.error,
                            );
                          }}
                        />
                      </Grid>
                      <Grid
                        item lg={2} md={2} sm={12} xs={12}
                      />
                      <Grid
                        item
                        lg={4}
                        md={4}
                        sm={12}
                        xs={12}
                      >
                        <InputBase
                          label="NRIC"
                          placeholder=""
                          type="text"
                          size="large"
                          inputKey={key}
                          id={uuidv4()}
                          maxLength={15}
                          kind="nric-only"
                          name="nricNumber"
                          value={personalInformation.nricNumber}
                          getValue={(value: IPersonalInformation.IValueData) => {
                            getPersonalInformation(
                              'nricNumber',
                              value.value,
                              value.error,
                            );
                          }}
                        />
                      </Grid>
                    </Grid>
                  )
                }
                {
                  personalInformation.singaporeCitizen && personalInformation.singaporeCitizen !== LIST_RADIO[0].text && (
                    <Grid container>
                      <Grid
                        item lg={5} md={5} sm={12} xs={12}
                        id="namePassport"
                        className="mb-30 mb-mb-30"
                      >
                        <InputBase
                          label="Name in passport"
                          placeholder=""
                          type="text"
                          size="large"
                          id={uuidv4()}
                          inputKey={key}
                          maxLength={70}
                          kind="required"
                          name="namePassport"
                          value={personalInformation.namePassport}
                          getValue={(value: IPersonalInformation.IValueData) => {
                            getPersonalInformation(
                              'namePassport',
                              value.value,
                              value.error,
                            );
                          }}
                        />
                      </Grid>
                      <Grid
                        item lg={2} md={2} sm={12} xs={12}
                      />
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
                  )
                }
              </SectionWrapper>
            </section>
          )
        }
        {/* Section button  */}
        <section className={cx('button-wrapper', 'd-flex justify-end mt-dt-40')}>
          <div>
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
