/*
 * CONTAINER SINGPASS-REVIEW
 *    >>> child
 *       >>  contact and review
 *       >>  information form
 *       >>  joint-borrowers
 *       >>  property address
 *       >>  account
 *       >>  repricing request
 *       >>  prepayment request
 *       >>  ReviewMore Component
 */

// import lib
import classNames from "classnames/bind";
import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import styles from "./ReviewSubmit.scss";
import PrintIcon from "@material-ui/icons/Print";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";

// import image
import edit from '../../../assets/images/edit.svg';
import editHover from '../../../assets/images/edit-hover.svg';

// import ReviewMore component
import ReviewMore from "./ReviewMore";

import { RowInfo, SectionWrapper, Link, Loading, Dialog } from "@sectionsg/orc";
import Error from '../../popup/Error';

//import image
import ReviewSubmitIcon from "../../../assets/images/review-submit-icon.png";

//import type
import { useSelector } from "react-redux";

import _, { truncate } from 'lodash';
import { useHistory } from "react-router";
import { DATA_CARD_CHECKBOX, LIST_DATA_UPLOAD, LIST_DATA_LABEL_UPLOAD,LIST_DATA_LABEL_SHOW, DATA_STATE_LENGTH_PARTIAL, DATA_STATE_LENGTH_SHORT, DATA_STATE_REPRICING_DDA, EDIT, LIST_PAYMENT_METHOD, LIST_SELECT_PARTIAL, NO, URL_SINGPASS_FLOW, YES, LIST_COUNTRIES_CODE } from "@/utils/constants";
import { saveFormData } from "@/store/form";
import { useDispatch } from "react-redux";
import { IReviewSubmit } from "./ReviewSubmit";


// render UI
const ReviewSubmit: React.FC<IReviewSubmit.IReviewSubmitProps> = forwardRef(({ handleResetCallAPI, children }, ref) => {
  const history = useHistory();
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  // get data from redux store
  const formRedux = useSelector((state: any) => state.form);
  const conditionReduxData = formRedux && formRedux.form;
  const [loading, setLoading] = useState(false);
  const [dataError, setDataError] = useState();
  const [dialogId, setDialogId] = useState(null);
  /**
   * Function handle Stepper
   * @return {boolean}
   */
  useImperativeHandle(ref, () => ({
    validateForm() {
      return true;
    },
    handleNextPage() {
      return true;
    },
  }));

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
   * Handle download image
   */
  const handleDownLoadImage = (contentType: string, b64Data: string, name: string) => {
    var a = document.createElement("a");
    a.href =`data:${contentType};base64,${b64Data}` //Image Base64 Goes here
    a.download = `${name}`; //File name Here
    a.click(); //Downloaded file
  }

  /**
   * Scroll to top
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

   /**
   * 
   * @param label 
   * @returns {string}
   */
  const labelInput = (label: string) => {
    const indexLabel = _.findIndex(LIST_DATA_UPLOAD, item => item === label);
    return LIST_DATA_LABEL_SHOW[indexLabel]
  }
  
  /**
   * Function Editing
   */
  const handleEditing = () => {
    const dataForm = { ...formRedux.form, isEditing: false, myInfo: formRedux.myInfo };
    dispatch(saveFormData(dataForm));
  };

  return (
    <>
      {loading && <div className={cx('container-loading')}>
        <div className={cx('content-loading')}>
          <Loading />
        </div>
      </div>}
      <section className={cx("review-submit mod-review")}>
        {/* Part header for contact and review */}
        <div className={"title-wrapper"}>
          <img src={ReviewSubmitIcon} alt="" className={"left-image"} />
          <div className={"title-content d-flex space-between"}>
            <span className={"title-review d-block"}>Review and submit</span>
            <div className={"d-flex align-items-center"} onClick={() => window.print()}>
              <PrintIcon className={"print-icon"} style={{ fontSize: 14 }} />
              <span className={"text-action ml-dt-10 mr-dt-30"}>
                Print this page
              </span>
            </div>
          </div>
        </div>

        {/*Contact information form*/}

        <SectionWrapper
          className={"max-width-common-right br-5 p-30 mt-dt-40"}
          title="Contact information"
        >
          <Grid className={"max-width-common-right"}>
            <div className={"max-width-common-right d-flex space-between"}>
              <span className={"title-text-small-bold"}>You</span>
              <div
                className={cx('flexBtwSpace', 'btnBackSection', 'info-icon-wrapper')}
                onClick={() => {history.push(URL_SINGPASS_FLOW.checkInformation); handleEditing(); handleResetCallAPI()}}
                aria-hidden="true"
              >
                <img src={edit} className={cx('isMr10', 'iconEdit', 'icon-black')} alt="edit" />
                <img src={editHover} className={cx('isMr10', 'iconEdit', 'icon-blue')} alt="edit-hover" />
                {' '}
                {EDIT}
              </div>
            </div>
            <Grid container>
              <Grid
                item
                className={"mr-dt-80 mb-mb-30"}
                lg={3}
                md={3}
                sm={12}
                xs={12}
              >
                <RowInfo
                  label="Email address"
                  content={conditionReduxData && conditionReduxData.personalInformation && formRedux.form.personalInformation.emailAddress}
                />
              </Grid>
              <Grid
                item
                className={"mr-dt-80"}
                lg={3}
                md={3}
                sm={12}
                xs={12}
              >
                <RowInfo
                  label="Mobile number"
                  content={
                    ((conditionReduxData && conditionReduxData.personalInformation) ? LIST_COUNTRIES_CODE.find(c => c.name === formRedux.form.personalInformation.countryPhoneNumber).value : "") +
                    " " +
                    ((conditionReduxData && conditionReduxData.personalInformation) ? formRedux.form.personalInformation.phoneNumber : "")
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          {
            /** Passport number */
            conditionReduxData && conditionReduxData.personalInformation && conditionReduxData.personalInformation.passportNumber && (
              <Grid container>
                <Grid
                item
                className={"mr-dt-80 mt-dt-30"}
                lg={3}
                md={3}
                sm={12}
                xs={12}
              >
                <RowInfo
                  label="Passport number"
                  content={`${conditionReduxData && conditionReduxData.personalInformation && conditionReduxData.personalInformation.passportNumber}`}
                />
              </Grid>
            </Grid>
            )
          }
          {/* Your joint-borrowers */}
          {formRedux.form.accountInformation && (
            <>
              {formRedux.form.accountInformation.emailAddress2 && (
                <>
                  <div className={"block-form block-form-end mt-dt-20"}>
                    <div
                      className={"max-width-common-right d-flex space-between"}
                    >
                      <span className={"title-text-small-bold"}>
                        Your co-borrowers
                      </span>
                      <div
                        className={cx('flexBtwSpace', 'btnBackSection', 'info-icon-wrapper')}
                        onClick={() => {history.push(URL_SINGPASS_FLOW.accountInformation); handleEditing()}}
                        aria-hidden="true"
                      >
                        <img src={edit} className={cx('isMr10', 'iconEdit', 'icon-black')} alt="edit" />
                        <img src={editHover} className={cx('isMr10', 'iconEdit', 'icon-blue')} alt="edit-hover" />
                        {' '}
                        {EDIT}
                      </div>
                    </div>
                    {formRedux.form.accountInformation.emailAddress2 && (
                      <>
                        <Grid container>
                          <Grid
                            item
                            className={"mr-dt-80 mt-dt-20"}
                            lg={3}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <RowInfo
                              label="Name"
                              content={
                                formRedux.form.accountInformation.name2
                                  ? formRedux.form.accountInformation
                                      .name2
                                  : "-"
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            className={"mr-dt-80 mt-dt-20"}
                            lg={3}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <RowInfo
                              label="Email address"
                              content={
                                formRedux.form.accountInformation.emailAddress2
                                  ? formRedux.form.accountInformation
                                      .emailAddress2
                                  : "-"
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            className={"mr-dt-80 mt-dt-20"}
                            lg={3}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <RowInfo
                              label="Mobile number"
                              content={
                                formRedux.form.accountInformation.phoneNumber2
                                  ? LIST_COUNTRIES_CODE.find(c => c.name === formRedux.form.accountInformation
                                    .countryPhoneNumber2).value +
                                    " " +
                                    formRedux.form.accountInformation.phoneNumber2
                                  : "-"
                              }
                            />
                          </Grid>
                        </Grid>
                      </>
                    )}
                    {formRedux.form.accountInformation.emailAddress3 && (
                      <>
                        <Grid container>
                          <Grid
                            item
                            className={"mr-dt-80 mt-dt-20"}
                            lg={3}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <RowInfo
                              label="Name"
                              content={
                                formRedux.form.accountInformation.name3
                                  ? formRedux.form.accountInformation
                                      .name3
                                  : "-"
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            className={"mr-dt-80 mt-dt-20"}
                            lg={3}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <RowInfo
                              label="Email address"
                              content={
                                formRedux.form.accountInformation.emailAddress3
                                  ? formRedux.form.accountInformation
                                      .emailAddress3
                                  : "-"
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            className={"mr-dt-80 mt-dt-20"}
                            lg={3}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <RowInfo
                              label="Mobile number"
                              content={
                                formRedux.form.accountInformation.phoneNumber3
                                  ? LIST_COUNTRIES_CODE.find(c => c.name === formRedux.form.accountInformation
                                    .countryPhoneNumber3).value +
                                    " " +
                                    formRedux.form.accountInformation.phoneNumber3
                                  : "-"
                              }
                            />
                          </Grid>
                        </Grid>
                      </>
                    )}
                    {formRedux.form.accountInformation.emailAddress4 && (
                      <>
                        <Grid container>
                          <Grid
                            item
                            className={"mr-dt-80 mt-dt-20"}
                            lg={3}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <RowInfo
                              label="Name"
                              content={
                                formRedux.form.accountInformation.name4
                                  ? formRedux.form.accountInformation
                                      .name4
                                  : "-"
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            className={"mr-dt-80 mt-dt-20"}
                            lg={3}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <RowInfo
                              label="Email address"
                              content={
                                formRedux.form.accountInformation.emailAddress4
                                  ? formRedux.form.accountInformation
                                      .emailAddress4
                                  : "-"
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            className={"mr-dt-80 mt-dt-20"}
                            lg={3}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <RowInfo
                              label="Mobile number"
                              content={
                                formRedux.form.accountInformation.phoneNumber4
                                  ? LIST_COUNTRIES_CODE.find(c => c.name === formRedux.form.accountInformation
                                    .countryPhoneNumber4).value +
                                    " " +
                                    formRedux.form.accountInformation.phoneNumber4
                                  : "-"
                              }
                            />
                          </Grid>
                        </Grid>
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </SectionWrapper>

        {/* Mortgaged property address */}

        <SectionWrapper className={"max-width-common-right br-5 p-30 mt-dt-10"}>
          <div>
            <div className={"max-width-common-right d-flex space-between"}>
              <h3 className={"bold"}>Mortgaged property address</h3>
              <div
                className={cx('flexBtwSpace', 'btnBackSection', 'info-icon-wrapper')}
                onClick={() => {history.push(URL_SINGPASS_FLOW.propertyInformation); handleEditing()}}
                aria-hidden="true"
              >
                <img src={edit} className={cx('isMr10', 'iconEdit', 'icon-black')} alt="edit" />
                <img src={editHover} className={cx('isMr10', 'iconEdit', 'icon-blue')} alt="edit-hover" />
                {' '}
                {EDIT}
              </div>
            </div>
            <Grid
              item
              xs={4}
              className={"justify-start"}
              id="mortgagredPropertyAddress"
            >
              <Grid item className={"mt-dt-30"} lg={12} md={12} sm={12} xs={12}>
                <h3 className={"bold"}>
                {(conditionReduxData && conditionReduxData.propertyInformation ? formRedux.form.propertyInformation.blockNumber : "") + " " + (conditionReduxData && conditionReduxData.propertyInformation ? formRedux.form.propertyInformation.streetName : " ")}
                </h3>
                {
                  conditionReduxData && conditionReduxData.propertyInformation && formRedux.form.propertyInformation.streetAddressLine2 && (
                    <h3 className={"bold"}>
                      {formRedux.form.propertyInformation.streetAddressLine2}
                  </h3>
                  )
                }
                {
                  conditionReduxData && conditionReduxData.propertyInformation && formRedux.form.propertyInformation.stateCity && (
                    <h3 className={"bold"}>
                      {formRedux.form.propertyInformation.stateCity}
                  </h3>
                  )
                }
              </Grid>

              <Grid item lg={12} md={12} sm={12} xs={12}>
                <h3 className={"bold"}>
                  {
                    conditionReduxData && conditionReduxData.propertyInformation && (
                      <>
                      {
                        formRedux.form.propertyInformation.floor ? '#' + formRedux.form.propertyInformation.floor : ''
                      }
                      {
                        formRedux.form.propertyInformation.unit && formRedux.form.propertyInformation.floor ? '-' : ''
                      }
                      {
                        formRedux.form.propertyInformation.unit ? formRedux.form.propertyInformation.unit : ''
                      }
                      </>
                      
                    )
                  }
                </h3>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xs={12}>
                <h3 className={"bold"}>
                  {
                    conditionReduxData && conditionReduxData.propertyInformation && (
                      <>
                        {
                          formRedux.form.propertyInformation.country + ' ' + formRedux.form.propertyInformation.postalCode
                        }
                      </>
                    )
                  }
                </h3>
              </Grid>
            </Grid>
          </div>
        </SectionWrapper>

        {/* Loan account information */}
        {
            formRedux.form.accountInformation && Number(formRedux.form.accountInformation.accountNumber) > 0 && (
              <SectionWrapper
                className={"max-width-common-right br-5 p-30 pb-0 mt-dt-10"}
              >
                {/* Your information */}
                <div className={"block-form-end"}>
                  <div className={"max-width-common-right d-flex space-between"}>
                    <h3 className={"bold"}>Loan account information</h3>
                    <div
                      className={cx('flexBtwSpace', 'btnBackSection', 'info-icon-wrapper')}
                      onClick={() => {history.push(URL_SINGPASS_FLOW.accountInformation); handleEditing()}}
                      aria-hidden="true"
                    >
                      <img src={edit} className={cx('isMr10', 'iconEdit', 'icon-black')} alt="edit" />
                      <img src={editHover} className={cx('isMr10', 'iconEdit', 'icon-blue')} alt="edit-hover" />
                      {' '}
                      {EDIT}
                    </div>
                  </div>
                  <Grid container item lg={9} md={9} sm={12} xs={12} className={"mt-dt-30"}>
                    <Grid
                      className={"mr-dt-80 mb-dt-30"}
                      item
                      lg={4}
                      md={4}
                      sm={12}
                      xs={12}
                    >
                      {formRedux.form.accountInformation.accountNumber1 ? (
                        <RowInfo
                          label={formRedux.form.accountInformation.accountNumber2 ? 'Loan account 1' : 'Loan account'}
                          content={formRedux.form.accountInformation.accountNumber1}
                        />
                      ) : (
                        ""
                      )}
                    </Grid>
                    {formRedux.form.accountInformation.accountNumber2 && 
                    <Grid
                      className={"mr-dt-80 mb-dt-30"}
                      item
                      lg={4}
                      md={4}
                      sm={12}
                      xs={12}
                    >
                      {formRedux.form.accountInformation.accountNumber2 ? (
                        <RowInfo
                          label={'Loan account 2'}
                          content={formRedux.form.accountInformation.accountNumber2}
                        />
                      ) : (
                        ""
                      )}
                    </Grid>
                    }
                    
                    {formRedux.form.accountInformation.accountNumber3 && 
                    <Grid
                      className={"mr-dt-80 mb-dt-30"}
                      item
                      lg={4}
                      md={4}
                      sm={12}
                      xs={12}
                    >
                      {formRedux.form.accountInformation.accountNumber3 ? (
                        <RowInfo
                          label={'Loan account 3'}
                          content={formRedux.form.accountInformation.accountNumber3}
                        />
                      ) : (
                        ""
                      )}
                    </Grid>
                  }
                    
                    {formRedux.form.accountInformation.accountNumber4 && 
                    <Grid
                      className={"mr-dt-80 mb-dt-30"}
                      item
                      lg={4}
                      md={4}
                      sm={12}
                      xs={12}
                    >
                      {formRedux.form.accountInformation.accountNumber4 ? (
                        <RowInfo
                          label={'Loan account 4'}
                          content={formRedux.form.accountInformation.accountNumber4}
                        />
                      ) : (
                        ""
                      )}
                    </Grid>
                  }
                    
                  </Grid>
                </div>
              </SectionWrapper>
            )
          }
        {/* Repricing request */}
        {_.isEmpty(formRedux.form.rePricingRequest) && _.includes(conditionReduxData && conditionReduxData.formLanding && conditionReduxData.formLanding.listChecked, DATA_CARD_CHECKBOX[0].label) && (
          <SectionWrapper className={"max-width-common-right br-5 p-30 mt-dt-10"}>
            <div className={"block-form-end"}>
              <div className={"max-width-common-right d-flex space-between mb-mb-30"}>
                <h3 className={"bold"}>Repricing request</h3>
              </div>
              <Grid
                item
                xs={12}
                id="account-info"
              >
                <div className="mt-dt-20 bold">
                    A processing fee of S$500 is payable (unless your loan comes with a free conversion) for your repricing request.
                  </div>
              </Grid>
            </div>
          </SectionWrapper>
        )}
        {!_.isEmpty(formRedux.form.rePricingRequest) && (
          <SectionWrapper className={"max-width-common-right br-5 p-30 mt-dt-10"}>
            <div className={"block-form-end"}>
              <div className={"max-width-common-right d-flex space-between mb-mb-30"}>
                <h3 className={"bold"}>Repricing request</h3>
                <div
                  className={cx('flexBtwSpace', 'btnBackSection', 'info-icon-wrapper')}
                  onClick={() => {history.push(URL_SINGPASS_FLOW.repricingRequest); handleEditing()}}
                  aria-hidden="true"
                >
                  <img src={edit} className={cx('isMr10', 'iconEdit', 'icon-black')} alt="edit" />
                  <img src={editHover} className={cx('isMr10', 'iconEdit', 'icon-blue')} alt="edit-hover" />
                  {' '}
                  {EDIT}
                </div>
              </div>
              <div className={"mt-dt-30 title-text-small-bold"}>
                  Uploaded documents
                </div>
              <Grid item lg={12} md={12} sm={12} xs={12} id="repricingRequest" className={'mt-dt-20'}>
                {
                  formRedux.form.formLanding.documentRequired.map((itemLabel: any, index: number) => (
                    <Grid item
                      lg={4}
                      md={4}
                      sm={12}
                      xs={12}
                      className={'pdr-20'}
                      key={index}
                      >
                      <RowInfo
                        key={index}
                        label={labelInput(itemLabel)}
                        content={''}
                      />
                      {formRedux.form.rePricingRequest &&
                        formRedux.form.rePricingRequest[index].map((item: any, idx: number) => (
                          <React.Fragment key={idx}>
                            <Link
                              classHover="linkUnderline"
                              target=""
                              fontSizeMB={14}
                              isOnClick
                              onClick={() => handleDownLoadImage(item.contentType, item.Attachment, item.Name)}
                            >
                              {
                                item.Name
                              }
                            </Link>
                            <br />
                          </React.Fragment>
                        ))}
                    </Grid>
                  ))
                }
              </Grid>
            </div>
          </SectionWrapper>
        )}

        {/* Partial prepayment request */}
        {formRedux.form.noneRepricingRequests && (
          <>
          {formRedux.form.noneRepricingRequests.dataAccount && 
          <>
            {formRedux.form.noneRepricingRequests.dataAccount.dataAccountPartial.length >
              0 && (
              <SectionWrapper
                className={"max-width-common-right br-5 p-30 mt-dt-10"}
              >
                <div className={"block-form-end"}>
                  <div className={"max-width-common-right d-flex space-between"}>
                    <h3 className={"bold"}>Partial prepayment request</h3>
                    <div
                      className={cx('flexBtwSpace', 'btnBackSection', 'info-icon-wrapper')}
                      onClick={() => {history.push(URL_SINGPASS_FLOW.nonRepricingRequest); handleEditing()}}
                      aria-hidden="true"
                    >
                      <img src={edit} className={cx('isMr10', 'iconEdit', 'icon-black')} alt="edit" />
                      <img src={editHover} className={cx('isMr10', 'iconEdit', 'icon-blue')} alt="edit-hover" />
                      {' '}
                      {EDIT}
                    </div>
                  </div>

                  {/* content payment */}
                  {formRedux.form.noneRepricingRequests.dataAccount.dataAccountPartial.map(
                    (item: any, idx: number) => (
                      <React.Fragment key={idx}>
                      { item && (
                      <Grid
                        item
                        xs={12}
                        id="partialPrepaymentRequest"
                        className={`${idx === 0 ? 'mt-dt-30' : 'mt-dt-60'}`}
                      >
                        <Grid
                          item
                          xs={12}
                          id="account-info"
                        >
                          <RowInfo
                            label={formRedux.form.noneRepricingRequests.dataAccount.dataAccountPartial[1] ? `Loan account number` : 'Loan account number'}
                            content={item}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          id="info-payment"
                          className={"d-flex flex-wrap"}
                        >
                          <Grid
                            item
                            className={"mr-dt-80 mt-dt-30"}
                            lg={3}
                            md={3}
                            sm={12}
                            xs={12}
                          >
                            <RowInfo
                              label="Payment mode"
                              content={
                                formRedux.form.noneRepricingRequests[
                                  `paymentModeNumber${idx + 1}`
                                ]
                              }
                            />
                          </Grid>
                          {formRedux.form.noneRepricingRequests[
                            `paymentModeNumber${idx + 1}`
                          ] === "Cash only using OCBC debiting account" && (
                            <Grid
                              className={"mr-dt-80 mt-dt-30"}
                              item
                              lg={3}
                              md={3}
                              sm={12}
                              xs={12}
                            >
                              <RowInfo
                                label="Cash prepayment amount"
                                content={(!formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`] ? "SGD" : formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].slice((formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].indexOf("(")+1),formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].lastIndexOf(")"))) + " " +
                                  formRedux.form.noneRepricingRequests[
                                    `cashPrepaymentAmount${idx + 1}`
                                  ].toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                                }
                              />
                            </Grid>
                          )}

                          {formRedux.form.noneRepricingRequests[
                            `paymentModeNumber${idx + 1}`
                          ] === "CPF only" && (
                            <Grid
                              className={"mr-dt-80 mt-dt-30"}
                              item
                              lg={3}
                              md={3}
                              sm={12}
                              xs={12}
                            >
                              <RowInfo
                                label="CPF prepayment amount"
                                content={(!formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`] ? "SGD" : formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].slice((formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].indexOf("(")+1),formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].lastIndexOf(")"))) + " " +
                                  formRedux.form.noneRepricingRequests[
                                    `CPFPrepaymentAmount${idx + 1}`
                                  ].toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                                }
                              />
                            </Grid>
                          )}

                          {formRedux.form.noneRepricingRequests[
                            `paymentModeNumber${idx + 1}`
                          ] === "Cash using OCBC debiting account and CPF" ? (
                            <>
                            <Grid
                              className={"mr-dt-80 mt-dt-30"}
                              item
                              lg={3}
                              md={3}
                              sm={12}
                              xs={12}
                            >
                              <RowInfo
                                label="CPF prepayment amount"
                                content={(!formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`] ? "SGD" : formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].slice((formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].indexOf("(")+1),formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].lastIndexOf(")"))) + " " +
                                  formRedux.form.noneRepricingRequests[
                                    `CPFPrepaymentAmount${idx + 1}`
                                  ].toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                                }
                              />
                            </Grid>
                            <Grid
                              className={"mr-dt-80 mt-dt-30"}
                              item
                              lg={3}
                              md={3}
                              sm={12}
                              xs={12}
                            >
                              <RowInfo
                                label="Cash prepayment amount"
                                content={(!formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`] ? "SGD" : formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].slice((formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].indexOf("(")+1),formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].lastIndexOf(")"))) + " " +
                                  formRedux.form.noneRepricingRequests[
                                    `cashPrepaymentAmount${idx + 1}`
                                  ].toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                                }
                              />
                            </Grid>
                            </>
                          ) : (
                            ""
                          )}
                          
                          {_.includes(formRedux.form.formLanding.listChecked, DATA_CARD_CHECKBOX[1].label) && _.includes(formRedux.form.formLanding.listChecked, DATA_CARD_CHECKBOX[2].label) ? "" :
                          <>
                          {
                            formRedux.form.noneRepricingRequests[
                              `optionToRevise${idx + 1}`
                            ] && (
                              <Grid
                                className={"mr-dt-80 mt-dt-30"}
                                item
                                lg={3}
                                md={3}
                                sm={12}
                                xs={12}
                              >
                                <RowInfo
                                  label="Monthly instalment option"
                                  content={
                                    formRedux.form.noneRepricingRequests[
                                      `optionToRevise${idx + 1}`
                                    ]
                                  }
                                />
                              </Grid>
                            )
                          }
                          </>
                          }
                          
                        </Grid>
                      </Grid>
                      )}
                      </React.Fragment>
                    )
                  )}
                  {
                    formRedux.form.formLanding.lockIn && (
                      <Grid
                        item
                        xs={12}
                        id="partialPrepaymentRequest"
                        className={"mt-dt-30 mb-dt-60"}
                      >
                        <Grid item xs={12} id="account-info">
                        {formRedux.form.formLanding.lockIn === NO && 
                        <RowInfo
                            label="Fees"
                            content="Not applicable"
                          />
                        }
                          {(formRedux.form.formLanding.lockIn === YES && formRedux.form.formLanding.yourRate === LIST_SELECT_PARTIAL[1].value) &&
                        <RowInfo
                            label="Fees"
                            content="Prepayment fee of 1.5% of prepayment amount"
                          />
                        }
                        {(formRedux.form.formLanding.lockIn === YES && formRedux.form.formLanding.yourRate !== LIST_SELECT_PARTIAL[1].value) &&
                        <RowInfo
                            label="Fees"
                            content=" Prepayment fee of 1.5% of prepayment amount (if remaining loan amount after prepayment is less than 50% of original or repriced loan amount)"
                          />
                      }
                        </Grid>
                      </Grid>
                    )
                  }
                </div>
              </SectionWrapper>
            )}
          </>
          }
            
          </>
        )}
        {/* export review more Component */}
        <ReviewMore handleEditing={handleEditing} children={children} handleDownLoadImage={handleDownLoadImage} labelInput={labelInput} formRedux={formRedux} openDialog={openDialog} setDataError={setDataError} setLoading={setLoading} />
      </section>
      {/* Dialog */}
      <Dialog
        isOpen={dialogId}
        onRequestClose={closeDialog }
        width={700}
        hasCloseBtn={true}
      >
         <Error dataError={dataError}/>
      </Dialog>
    </>
  );
});

export default ReviewSubmit;
