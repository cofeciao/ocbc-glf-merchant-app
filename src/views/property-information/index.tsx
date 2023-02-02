/***
 *  PROPERTY REQUEST
 *    >> child
 *      >> section wrapper
 *      >> select
 *      >> button
 *      >> input base
 */
// import lib
import classnames from "classnames/bind";
import React, { useState, useEffect, useLayoutEffect, forwardRef, useImperativeHandle } from "react";
import { Grid } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// import image
import IconPropertyInformation from '../../assets/images/property-information.png';

// import style
import styles from "./PropertyInformation.scss";

// import constant
import { LIST_COUNTRIES, LIST_REQUEST_REPRICING, NEXT, REVIEW, SINGPASS, URL_MANUAL_FLOW, URL_SINGPASS_FLOW } from '../../utils/constants';

// import interface
import { IPropertyInformation } from './PropertyInformation.d'

// import function
import { preventSpecialCharacters, restrictOnlyDigital, restrictSpecialCharacters, formatNameField, scrollToError, useComponentDidUpdate } from '../../utils/utils';

// import component lib
import {
  SectionWrapper,
  Select,
  InputBase,
  Button,
} from '@sectionsg/orc';
import { saveFormData } from "@/store/form";
import _ from "lodash";

// define function
const PropertyInformation: React.FC<IPropertyInformation.IProps> = forwardRef(({ getDataFromPostalCode, addressDetail, children }, ref) => {
  const cx = classnames.bind(styles);
  const history = useHistory();
  const dispatch = useDispatch();
  const [key, setKey] = useState<number>(null);
  const [edit, setEdit]= useState<boolean>(false)
  const [renderData, setRenderData] = useState<boolean>(false)
  // get data from redux store
  const formRedux = useSelector((state: any) => state.form);
  
  // init data property information
  const [propertyInformation, setPropertyInformation]= useState({
    country: LIST_COUNTRIES[0].value,
    postalCode: '',
    streetName: '',
    blockNumber: '',
    unit: '',
    floor: '',
    streetAddressLine2: '',
    stateCity: '',
    errorPostalCode: false,
    errorStreetName: false,
    errorBlockNumber: false,
    errorStateCity: false,
  })

  // function get propertyInformation attribute
  const getPropertyInformation = (name: string, value: string, error: string) => setPropertyInformation({
    ...propertyInformation,
    [name]: value,
    [`error${formatNameField(name)}`]: error !== '',
  });

  /**
   * Function reset propertyInformation attribute
   * @returns {Object}
   */
  const resetData = () => setPropertyInformation({
    ...propertyInformation,
    postalCode: '',
    streetName: '',
    blockNumber: '',
    unit: '',
    floor: '',
    streetAddressLine2: '',
    stateCity: '',
    errorPostalCode: false,
    errorStreetName: false,
    errorBlockNumber: false,
    errorStateCity: false,
  });
  
  /**
   * Function update state when select country change
   */
  useComponentDidUpdate(() => {
    if (!renderData) {
      resetData();
      setKey(null);
    }
  }, [propertyInformation.country]);

  /**
   * Function validate form
   * @returns {Boolean}
   */
  const validateForm = () => {
    let validate = false;
    if (propertyInformation.country) {
      if (propertyInformation.country === LIST_COUNTRIES[0].value) {
        validate = !!(propertyInformation.postalCode && !propertyInformation.errorPostalCode && propertyInformation.blockNumber && !propertyInformation.errorBlockNumber && propertyInformation.streetName && !propertyInformation.errorStreetName && propertyInformation.postalCode.length === 6);
      } else {
        validate = !!(propertyInformation.streetName && !propertyInformation.errorStreetName && propertyInformation.stateCity && !propertyInformation.errorStateCity);
      }
    }
    return validate;
  }

  /**
   * Scroll to top
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

 /**
  *  Function save form
  */
  const saveData = () => {
    const dataForm = {
      ...formRedux.form,
      propertyInformation: propertyInformation
    };
    dispatch(saveFormData(dataForm));
  };

  /**
   * Handle button next
   */
  const handleNext = () => {
    const formLanding = formRedux.form;
    if (validateForm()) {
      saveData();
      if (formLanding.isEditing) {
        if (formRedux.mainApplicant === SINGPASS) {
          history.push(URL_SINGPASS_FLOW.review)
        } else {
          history.push(URL_MANUAL_FLOW.review)
        }
      } else {
        if ((LIST_REQUEST_REPRICING.ddaAccount[0] === formLanding.formLanding.listChecked[0] || (LIST_REQUEST_REPRICING.ddaAccount[0] === formLanding.formLanding.listChecked[0] || formLanding.formLanding.listChecked[0] === LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0]) && formLanding.formLanding.listChecked.length === 1) ||
          (LIST_REQUEST_REPRICING.ddaAccount[0] === formLanding.formLanding.listChecked[0] || formLanding.formLanding.listChecked[0] === LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0]) && formLanding.formLanding.listChecked.length === 1) {
        if (formRedux.mainApplicant === SINGPASS) {
          history.push(URL_SINGPASS_FLOW.nonRepricingRequest)
        } else {
          history.push(URL_MANUAL_FLOW.nonRepricingRequest)
        }
      } else {
        if (formRedux.mainApplicant === SINGPASS) {
          history.push(URL_SINGPASS_FLOW.accountInformation)
        } else {
          history.push(URL_MANUAL_FLOW.accountInformation)
        }
        }
      }
    } else {
      setKey(Date.now());
      scrollToError();
    }
  }

  /**
   * Function set data
   */
  useLayoutEffect(() => {
    const data = formRedux.form;
    if (!data) return;
    if (data.propertyInformation) {
      setRenderData(true);
      setPropertyInformation(data.propertyInformation);
    }
  }, []);

  /**
   *  Function handle button prev
   */
  const handlePrev = () => {
    if (formRedux.mainApplicant === SINGPASS) {
      history.push(URL_SINGPASS_FLOW.checkInformation)
    } else {
      history.push(URL_MANUAL_FLOW.personalInformation)
    }  
  }

  /**
   * Function call back when click on stepper
   */
  useImperativeHandle(ref, () => ({
    validateForm() {
      if (formRedux.form) {
        if (_.isEmpty(formRedux.form.propertyInformation)) {
          return true;
        }
        return validateForm();
      } return true;
    },
    handleNextPage() {
      if (formRedux.form) {
        if (_.isEmpty(formRedux.form.personalInformation)) {
          return true;
        }
        if (validateForm()) {
          saveData();
        } else {
          setKey(Date.now());
          scrollToError();
        }
      } return true;
    },
  }));

  /**
   * Function update state when call api get data address detail
   */
  useEffect(() => {
    const data = formRedux.form;
    if (!data) return;
    if (data.propertyInformation && !edit) return
    if (addressDetail) {
      setPropertyInformation({
        ...propertyInformation,
        blockNumber: addressDetail.BuildingNumber,
        streetName: addressDetail.CityName,
        unit: addressDetail.UnitNumber,
        floor: addressDetail.POBoxNo,
      });
    } else {
      setPropertyInformation({
        ...propertyInformation,
        blockNumber: '',
        streetName: '',
        unit: '',
        floor: '',
      });
    }
  }, [addressDetail]);


  /**
   * render UI Button
   * @returns 
   */
  const renderButton = () => {
    return (
      <Button backgroundClass="bgGunmetalBluegrey" onClick={handleNext}>
        {formRedux.form && formRedux.form.isEditing ? <>
            {REVIEW}
            </> : <>
              {NEXT}
            </>
        }
        <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
      </Button>
    )
  }
  return (
    <>
      <section className={cx('property-information')}>
        <div className={"title-wrapper"}>
          <img src={IconPropertyInformation} alt="icon" className={cx("left-image")} />
          <div className={cx("title-text")}><span>Mortgaged property address</span></div>
        </div>
        {/* Section local (Singapore) */}
        <section id="property-address" className={cx('background-gray', 'mt-dt-40')}>
          <SectionWrapper title="Enter the address of your mortgaged property">
          <Grid container>
            <Grid
              item lg={4} md={4} sm={12} xs={12}
              id="countryValueSelect"
              className={'mb-dt-30'}
            >
              <Select
                label="Country"
                listValues={LIST_COUNTRIES}
                single
                placeholder="Please select"
                type="country"
                selectKey={key}
                width={220}
                positionLine={5}
                defaultValue={propertyInformation.country}
                getValue={(value: IPropertyInformation.IValueData) => {
                  setRenderData(false);
                  getPropertyInformation(
                    'country',
                    value.value,
                    value.error,
                  );
                }}
              />
            </Grid>
          </Grid>
          {/*  */}
          {
            propertyInformation.country !== '' && propertyInformation.country === LIST_COUNTRIES[0].value && (
              <div className={cx('')}>
                <Grid container>
                  <Grid
                    item lg={3} md={3} sm={12} xs={12}
                    id="postalCodeInside"
                    className={cx('mb-dt-30')}
                  >
                    <InputBase
                      label="Postal code"
                      placeholder=""
                      type="number"
                      size="large"
                      id={uuidv4()}
                      maxLength={6}
                      inputKey={key}
                      name="postalCode"
                      kind="post_code_singapore"
                      preventSpecialCharacters={preventSpecialCharacters}
                      value={propertyInformation.postalCode}
                      getValue={(value: IPropertyInformation.IValueData) => {
                        // getDataFromPostalCode(value.value)
                        setEdit(true);
                        getPropertyInformation(
                          'postalCode',
                          value.value,
                          value.error,
                        );
                      }}
                      handleCallApi={getDataFromPostalCode}
                    />
                    {/* {
                      addressDetail && addressDetail.ErrorCode && propertyInformation.postalCode.length < 6  && (
                        <span className={'text-blur'}>No address found for this postal code</span>
                      )
                    } */}
                  </Grid>
                  <Grid
                    item lg={4} md={4} sm={12} xs={12}
                    id="streetAddress"
                    className="mb-30"
                  />
                  <Grid
                    item lg={3} md={3} sm={12} xs={12}
                    id="postalCodeInside"
                    className={cx('mb-dt-30')}
                  >
                    <InputBase
                      label="Block/house number "
                      placeholder=""
                      type="text"
                      size="large"
                      id={uuidv4()}
                      maxLength={4}
                      inputKey={key}
                      name="blockNumber"
                      kind="required"
                      preventSpecialCharacters={restrictSpecialCharacters}
                      value={propertyInformation.blockNumber}
                      getValue={(value: IPropertyInformation.IValueData) => {
                        getPropertyInformation(
                          'blockNumber',
                          value.value,
                          value.error,
                        );
                      }}
                    />
                  </Grid>
                </Grid>
                <div className={cx('')}>
                  <Grid container>
                    <Grid
                      item lg={5} md={5} sm={12} xs={12}
                      id="streetName"
                      className="mb-mb-30 d-flex align-end"
                    >
                      <InputBase
                        label="Street name"
                        placeholder=""
                        type="text"
                        size="large"
                        inputKey={key}
                        name="streetName"
                        id={uuidv4()}
                        kind="required"
                        maxLength={32}
                        preventSpecialCharacters={restrictSpecialCharacters}
                        value={propertyInformation.streetName}
                        getValue={(value: IPropertyInformation.IValueData) => {
                          getPropertyInformation(
                            'streetName',
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
                      item lg={5} md={5} sm={12} xs={12}
                    >
                      <div className="label-cs">
                        Floor and unit number (if applicable)
                      </div>
                    <Grid container>
                        <Grid item lg={3} md={3} sm={3} xs={3}>
                          <InputBase
                            label=""
                            placeholder=""
                            id={uuidv4()}
                            type="text"
                            maxLength={7}
                            name="floor"
                            value={propertyInformation.floor}
                            preventSpecialCharacters={restrictSpecialCharacters}
                            getValue={(value: IPropertyInformation.IValueData) => {
                              getPropertyInformation(
                                'floor',
                                value.value,
                                value.error,
                              );
                            }}
                          />
                        </Grid>
                        <div className={cx('line-vertical')}>-</div>
                        <Grid item lg={3} md={3} sm={3} xs={3}>
                          <InputBase
                            label=""
                            placeholder=""
                            type="number"
                            maxLength={4}
                            id={uuidv4()}
                            name="unit"
                            value={propertyInformation.unit}
                            preventSpecialCharacters={restrictSpecialCharacters}
                            getValue={(value: IPropertyInformation.IValueData) => {
                              getPropertyInformation(
                                'unit',
                                value.value,
                                value.error,
                              );
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            )
          }
          {/* Section overseas */}
          {
            propertyInformation.country !== '' && propertyInformation.country !== LIST_COUNTRIES[0].value && (
              <>
                <Grid container>
                  <Grid
                    item lg={5} md={5} sm={12} xs={12}
                    id="streetAddress"
                    className="mb-dt-30"
                  >
                    <InputBase
                      label="Street name line 1"
                      placeholder=""
                      type="text"
                      size="large"
                      maxLength={100}
                      id={uuidv4()}
                      inputKey={key}
                      kind="required"
                      name="streetName"
                      value={propertyInformation.streetName}
                      getValue={(value: IPropertyInformation.IValueData) => {
                        getPropertyInformation(
                          'streetName',
                          value.value,
                          value.error,
                        );
                      }}
                    />
                  </Grid>
                  <Grid
                    item lg={2} md={2} sm={12} xs={12}
                  />
                  {/* <Grid
                    item lg={5} md={5} sm={12} xs={12}
                    id="streetAddressLine2"
                    className="mb-dt-30"
                  >
                    <InputBase
                      label="Street name line 2 (if applicable)"
                      placeholder=""
                      type="text"
                      id={uuidv4()}
                      maxLength={35}
                      size="large"
                      name="streetAddressLine2"
                      value={propertyInformation.streetAddressLine2}
                      getValue={(value: IPropertyInformation.IValueData) => {
                        getPropertyInformation(
                          'streetAddressLine2',
                          value.value,
                          value.error,
                        );
                      }}
                    />
                  </Grid> */}
                </Grid>
                <Grid container>
                  <Grid
                    item lg={5} md={5} sm={12} xs={12}
                    id="stateCity"
                  >
                    <InputBase
                      label="State/City"
                      placeholder=""
                      type="text"
                      id={uuidv4()}
                      size="large"
                      inputKey={key}
                      kind="required"
                      name="stateCity"
                      value={propertyInformation.stateCity}
                      getValue={(value: IPropertyInformation.IValueData) => {
                        getPropertyInformation(
                          'stateCity',
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
                    item lg={5} md={5} sm={12} xs={12}
                    id="postalCodeOutside"
                    className="d-flex"
                  >
                    <InputBase
                      label="Postal code"
                      placeholder=""
                      type="text"
                      size="large"
                      id={uuidv4()}
                      inputKey={key}
                      maxLength={35}
                      kind="aaaa"
                      name="postalCode"
                      value={propertyInformation.postalCode}
                      //preventSpecialCharacters={restrictOnlyDigital}
                      getValue={(value: IPropertyInformation.IValueData) => {
                        getPropertyInformation(
                          'postalCode',
                          value.value,
                          value.error,
                        );
                      }}
                    />
                  </Grid>
                </Grid>
              </>
            )
          }
          </SectionWrapper>
        </section>
      </section>
      {/* Section button  */}
      <section className={cx('button-wrapper', 'd-flex space-between mt-dt-40')}>
        <Button backgroundClass="square" onClick={() => handlePrev()}>
          <ArrowBackIcon className={cx('arrow')} />
        </Button>
        <div>
          <div className="d-inline">
            {children}
          </div>
          <div className="ml-dt-30 d-inline">
            {renderButton()}
          </div>
        </div>
      </section>
    </>
  );
});
export default PropertyInformation;
