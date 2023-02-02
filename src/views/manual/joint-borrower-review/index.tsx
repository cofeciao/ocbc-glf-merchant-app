/**
 * Import modules
 */
import classnames from "classnames/bind";
import React, { useState, useImperativeHandle, forwardRef, useEffect } from "react";
import { useHistory } from "react-router";
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { createLoanAppMgmt } from "@/data-manager/info";

/**
 * import ccon
 */
import IconReview from '../../../assets/images/icon-review.svg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import edit from '../../../assets/images/edit.svg';
import editHover from '../../../assets/images/edit-hover.svg';
import Error from '../../popup/Error';
/**
 * import lib
 */
import { SectionWrapperReview, RowInfo, Link, Checkbox, Button, Dialog, Loading } from '@sectionsg/orc';

/**
 * import styles
 */
import styles from "./JoinBorrowerReview.scss";

/**
 * import types
 */
import { IJointBorrowerReview } from './JointBorrowerReview'

//import lodash
import _ from "lodash";

/**
 * import constant
 */
import { CONDITION_AGREE, DATA_STATE_REPRICING_LENGTHENING, HREF_HOME_LOANS, IF_AN_OFFERS, IF_AN_OFFERS_IF_APPLICABLE, I_AGREE, NEXT, REPRESENT_A, REPRESENT_B, REPRESENT_C, REVIEW_PAGE, SUBMIT, LIST_REQUEST_REPRICING, EDIT, URL_NON_REPRICING_BORROWER_MANUAL, URL_REPRICING_BORROWER_MANUAL, LIST_COUNTRIES } from "@/utils/constants";
import { saveFormData, setStatusEditButton } from "@/store/form";
import { formatPhoneNumber } from "@/utils/utils";
import ReviewDemo from "@/views/demo/review-demo";
import moment from "moment";

/**
 * 
 * Render UI
 * @returns 
 */
const PersonalInformation: React.FC<IJointBorrowerReview.IProps> = forwardRef(({ children }, ref) => {
  const cx = classnames.bind(styles);
  const history = useHistory();
  const [key, setKey] = useState(null);
  const [stateTermCondition, setStateTermCondition] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [dataError, setDataError] = useState();
  const [dialogId, setDialogId] = useState(null);
  const dispatch = useDispatch();

  /**
  * Retrieves data from Store
  */
  const formReduxData = useSelector((state: any) => state.form);
  const formPersonalInformation = formReduxData && formReduxData.form && formReduxData.form.personalInformation;
  const personData = formReduxData && formReduxData.myInfo && formReduxData.myInfo.GetPersonDataRes && formReduxData.myInfo.GetPersonDataRes.PersonData || {};

  const handleEditing = () => {
    const dataForm = { ...formReduxData.form, isEditing: true, stateTermCondition };
    dispatch(saveFormData(dataForm));
  };

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
   * Check exist section
   * @param {string} value  - Name section
   */
  const handleCheckExistSection = (value: string) => {
    return formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.listChecked.includes(value)
  }

  const handleCheckReadCondition = (value: any) => {
    setStateTermCondition(value)
  };

  const handleNext = async () => {
    if (stateTermCondition || I_AGREE[0].check) {
      const dataSubmit = {
				"ApplicationReceivedDate": formReduxData && formReduxData.myInfo.CreatedDate || "",
				"SystemRefNo": formReduxData && formReduxData.myInfo.SystemRefNo || "",
				"ApplicationCategory": "Repricing",
				"Status": formReduxData && formReduxData.myInfo.Status || "",
				"BlockNo": formReduxData && formReduxData.myInfo.BlockNo || "",
				"Street": formReduxData && formReduxData.myInfo.Street || "",
				"Floor": formReduxData && formReduxData.myInfo.Floor || "",
				"Unit": formReduxData && formReduxData.myInfo.Unit || "",
				"PostalCode": formReduxData && formReduxData.myInfo.PostalCode || "",
				"BuildingName": formReduxData && formReduxData.myInfo.BuildingName || "",
				"Country": formReduxData && formReduxData.myInfo.Country || "",
				"NeedHelp": formReduxData && formReduxData.myInfo.NeedHelp || false,
				"JourneyType": formReduxData && formReduxData.myInfo.JourneyType || "SelfServe",
				"ChannelSource": formReduxData && formReduxData.myInfo.ChannelSource || "OneAdvisor",
				"SystemDevice": formReduxData && formReduxData.myInfo.SystemDevice || "Chrome",
				"Comments": formReduxData && formReduxData.myInfo.Comments || '',
				"PackageCode": formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.yourRate|| "",
				"CreatedBy": formPersonalInformation && formPersonalInformation.emailAddress || "",
				"UpdatedBy": formPersonalInformation && formPersonalInformation.emailAddress || "",
				"CreatedDate": formReduxData && formReduxData.myInfo.CreatedDate || "",
				"UpdatedDate": formReduxData && formReduxData.myInfo.UpdatedDate || "",
				"IsActive": formReduxData && formReduxData.myInfo.IsActive,
				"ApplicationGuid": formReduxData && formReduxData.myInfo.ApplicationGuid || '',
				"LockinMonths": formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.lockIn || '',
				"PurposeCode": formReduxData && formReduxData.myInfo.PurposeCode || '',
				"PurposeDesc": formReduxData && formReduxData.myInfo.PurposeDesc || '',
				"ReasonCode": formReduxData && formReduxData.myInfo.ReasonCode || '',
				"ReasonDesc": formReduxData && formReduxData.myInfo.ReasonDesc || '',
				"SacuId": formReduxData && formReduxData.myInfo.SacuId || "00000000-0000-0000-0000-000000000000",
				"AccountMapping": formReduxData && formReduxData.myInfo && formReduxData && formReduxData.myInfo.AccountMapping ? {
					"AccountModel": formReduxData.myInfo.AccountMapping.AccountModel
				} : {},
				"RepricingDetails": formReduxData && formReduxData.myInfo && formReduxData && formReduxData.myInfo.RepricingDetails ? {
          "RepricingModel": formReduxData.myInfo.RepricingDetails.RepricingModel
        } : {},
				"PrePaymentLoanDetails": formReduxData && formReduxData.myInfo && formReduxData && formReduxData.myInfo.PrePaymentLoanDetails ? {
          "PrePaymentModel": formReduxData.myInfo.PrePaymentLoanDetails.PrePaymentModel
        } :
        {},
				"ChangeInLoanTenure": formReduxData && formReduxData.myInfo && formReduxData && formReduxData.myInfo.ChangeInLoanTenure ? {
          "ChangeInTenureModel": formReduxData.myInfo.ChangeInLoanTenure.ChangeInTenureModel
        } : {},
				"DDALoanDetails": formReduxData && formReduxData.myInfo && formReduxData && formReduxData.myInfo.DDALoanDetails ? {
          "DDAModel": formReduxData.myInfo.DDALoanDetails.DDAModel
        } : {},
				"FullRedemption": formReduxData && formReduxData.myInfo && formReduxData && formReduxData.myInfo.FullRedemption ? {
          "FullRedemptionModel": formReduxData.myInfo.FullRedemption.FullRedemptionModel
        } :
        {},
				"ApplicantDetails": formReduxData && formReduxData.myInfo && formReduxData && formReduxData.myInfo.ApplicantDetails ? {
					"ApplicantModel": [{
            ...formReduxData.myInfo.ApplicantDetails.ApplicantModel[0],
            "ResidentStatusCode": formReduxData && formReduxData.myInfo && formReduxData.myInfo.ApplicantDetails && formReduxData.myInfo.ApplicantDetails.ApplicantModel[0] && formReduxData.myInfo.ApplicantDetails.ApplicantModel[0].ResidentStatusCode === 'C' ? 'CZ' : 'PR',
            "CreatedBy": formPersonalInformation && formPersonalInformation.emailAddress || "",
            "UpdatedBy": formPersonalInformation && formPersonalInformation.emailAddress || "",
            "NRIC": formPersonalInformation && formPersonalInformation.nricNumber || '',
            "NameinNRIC": formPersonalInformation && formPersonalInformation.nameNric || formPersonalInformation && formPersonalInformation.namePassport,
            "PassportNo": formPersonalInformation && formPersonalInformation.passportNumber ? formPersonalInformation.passportNumber : '',
            "MobileNumber": formPersonalInformation && formPersonalInformation.phoneNumber ? `${formPersonalInformation.countryPhoneNumber}${formPersonalInformation.phoneNumber}` : '',
            "EmailAddress": formPersonalInformation && formPersonalInformation.emailAddress || '',
          }]
				} : {}
			}
      const responseLoansData = await createLoanAppMgmt(dataSubmit, 'AMEND');
      setLoading(true);
      if(responseLoansData.LoansAppMgmtResp && responseLoansData.LoansAppMgmtResp.RespBody && responseLoansData.LoansAppMgmtResp.RespBody.Result.length) {
        history.push('/confirmation');
        setLoading(false);
      } else {
        setTimeout(() => {
          setLoading(false);
          setDataError(responseLoansData.LoansAppMgmtResp.ErrorDetail);
          openDialog();
        }, 1500)
      }
    } else {
      setLoading(false);
      setKey(Date.now());
    }
  }

  /**
  * Render UI button
  * @function 
  * @returns 
  */
  const renderButton = () => {
    return (
      <Button className={cx('button-next')} backgroundClass="bgGunmetalBluegrey" onClick={handleNext}>
        {SUBMIT}
      </Button>
    )
  }

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
   * Pass function validateForm into hook ref
   * @function 
   * @returns 
 */
  useImperativeHandle(ref, () => ({
    validateForm() {
      return true
    },
  }));

   /**
   * Scroll to top
   */
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

  /**
   * Handle click previous button
   */
  const handleDetectBtnPrevious = () => {
    if (formReduxData.isBorrower) {
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
  }

  return (
    <>
    {loading && <div className={cx('container-loading')}>
        <div className={cx('content-loading')}>
          <Loading />
        </div>
      </div>}
    <div className={cx('mod-review')}>
      <div className={"title-wrapper"}>
        <img src={IconReview} alt="icon" className={cx("left-image")} />
        <div className={cx("title-text d-flex align-flex-end d-mb-block-425")}><span>{REVIEW_PAGE.title}</span></div>
      </div>

      <div className={'wrap-form-review'}>
        {/*Contact information form*/}
        <SectionWrapperReview title="Contact information" backToUrl={() => { dispatch(setStatusEditButton(true)); history.push('/manual-form/borrower/personal-information'); }} onClick={handleEditing}>
          <Grid container >
            <Grid
              item lg={6} md={6} sm={12} xs={12}
              className="mb-mb-30 pdr-20 block-half"
            >
              <RowInfo
                isBlock
                label='Email address' content={formPersonalInformation && formPersonalInformation.emailAddress}
              />
            </Grid>
            <Grid
              item lg={6} md={6} sm={12} xs={12}
              className="pdr-20 block-half"
            >
              <RowInfo
                isBlock
                label='Mobile number'
                content={formPersonalInformation && `${formPersonalInformation.countryPhoneNumber} ${formatPhoneNumber(formPersonalInformation.phoneNumber)}`}
              />
            </Grid>
          </Grid>
        </SectionWrapperReview>

        {/* Mortgaged property address */}
        {
          personData.regadd && personData.regadd.block && (
            <SectionWrapperReview title="Mortgaged property address" isButtonEdit={false}>
              <div className={cx(`font-weight-600`, 'address')}>
                {personData.regadd.block.value}
                &nbsp;
                {personData.regadd.street.value}
                <br />
                {personData.regadd.building.value}
                &nbsp;
                {personData.regadd.floor.value}
                -
                {personData.regadd.unit.value}
                &nbsp;
                <br />
                {personData.regadd.country.desc}
                &nbsp;
                {personData.regadd.postal.value}
              </div>
            </SectionWrapperReview>
          )
        }
        {/*Repricing request*/}
        {
          handleCheckExistSection(DATA_STATE_REPRICING_LENGTHENING[0]) && (
            <SectionWrapperReview title="Repricing request" backToUrl={() => { dispatch(setStatusEditButton(true)); history.push('/manual-form/borrower/repricing-request'); }} onClick={handleEditing}>
              <div className={cx('text-description mb-dt-30 mt-dt-0')}>
                {REVIEW_PAGE.subRepricing}
              </div>
              <div className={cx('documents')}>
                <div className={cx('title-text-small-bold')}>
                  {REVIEW_PAGE.titleUpload}
                </div>
                <Grid container >
                  {
                    formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.documentRequired.map((item: any, idx: number) => (
                      <Grid
                        item lg={4} md={4} sm={12} xs={12}
                        className="pdr-20 block-half"
                        key={`agree${idx}`}
                      >
                        <div className={cx('info-document')}>
                          <p>{item}</p>
                          <Link
                            classHover="linkUnderline"
                            target=""
                            fontSizeMB={14}
                            isOnClick
                            onClick={() => handleDownLoadImage(formReduxData.form && formReduxData.form.rePricingRequest && formReduxData.form.rePricingRequest && formReduxData.form.rePricingRequest[`${idx}`][0].contentType, formReduxData.form && formReduxData.form.rePricingRequest && formReduxData.form.rePricingRequest && formReduxData.form.rePricingRequest[`${idx}`][0].Attachment, formReduxData.form && formReduxData.form.rePricingRequest && formReduxData.form.rePricingRequest && formReduxData.form.rePricingRequest[`${idx}`][0].Name)}
                          >
                            {
                              formReduxData.form && formReduxData.form.rePricingRequest && formReduxData.form.rePricingRequest && formReduxData.form.rePricingRequest[`${idx}`][0].Name
                            }
                          </Link>
                        </div>
                      </Grid>
                    ))
                  }
                </Grid>

              </div>
            </SectionWrapperReview>
          )
        }

        {/*Lengthening of loan tenure request*/}
        {/* {
          handleCheckExistSection(DATA_STATE_REPRICING_LENGTHENING[1]) && (
            <SectionWrapperReview title="Lengthening of loan tenure request" isButtonEdit={false}>
              <Grid container className={cx('section')} >
                {
                  formReduxData.infoBorrowerRequest && formReduxData.infoBorrowerRequest.lengtheningOfLoanTenureRequest && formReduxData.infoBorrowerRequest.lengtheningOfLoanTenureRequest.loanAccounts.map((item: any, idx: number) => (
                    <>
                      <Grid
                        item lg={12} md={12} sm={12} xs={12}
                        className={cx('pdr-20 mb-30 block-half', 'item-first')}
                      >
                        <RowInfo
                          isBlock
                          label='Loan account number' content={item.numberAccount}
                        />
                      </Grid>
                      <Grid
                        item lg={12} md={12} sm={12} xs={12}
                        className="mb-mb-30 pdr-20 block-half"
                      >
                        <RowInfo
                          isBlock
                          label='Proposed new loan tenure' content={`${item.proposed} years`}
                        />
                      </Grid>
                    </>
                  ))
                }

              </Grid>

              {
                (formReduxData.form && formReduxData.form.formLanding
                  && formReduxData.form.formLanding.listChecked
                  && formReduxData.form.formLanding.listChecked.length === 1
                  && formReduxData.form.formLanding.listChecked[0] === LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]
                ) && (
                  <>
                    <div className={cx('documents')}>
                      <div className={cx('title-small-span')}>
                        <span>{REVIEW_PAGE.titleUpload}</span>
                        <div
                          className={cx('flexBtwSpace', 'btnBackSection', 'info-icon-wrapper')}
                          onClick={() => { dispatch(setStatusEditButton(true)); history.push(URL_NON_REPRICING_BORROWER_MANUAL); handleEditing() }}
                          aria-hidden="true"
                        >
                          <img src={edit} className={cx('isMr10', 'iconEdit', 'icon-black')} alt="edit" />
                          <img src={editHover} className={cx('isMr10', 'iconEdit', 'icon-blue')} alt="edit-hover" />
                          {' '}
                          {EDIT}
                        </div>
                      </div>
                      <Grid container >
                        {
                          formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.documentRequired.map((item: any, idx: number) => (
                            <Grid
                              item lg={4} md={4} sm={12} xs={12}
                              className="pdr-20 block-half"
                              key={`agree${idx}`}
                            >
                              <div className={cx('info-document')}>
                                <p>{item}</p>
                                <Link
                                  classHover="linkUnderline"
                                  target=""
                                  fontSizeMB={14}
                                  isOnClick
                                  onClick={() => handleDownLoadImage(formReduxData.form && formReduxData.form.noneRepricingRequests && formReduxData.form.noneRepricingRequests.listDocument[`${idx}`][0].Attachment, formReduxData.form && formReduxData.form.noneRepricingRequests && formReduxData.form.noneRepricingRequests.listDocument[`${idx}`][0].Name)}
                                >
                                  {
                                    formReduxData.form && formReduxData.form.noneRepricingRequests && formReduxData.form.noneRepricingRequests.listDocument[`${idx}`][0].Name
                                  }
                                </Link>
                              </div>
                            </Grid>
                          ))
                        }
                      </Grid>

                    </div>
                  </>
                )
              }
            </SectionWrapperReview>
          )
        } */}

        <Grid container>
          <Grid
            item lg={12} md={12} sm={12} xs={12}
            className="mt-0"
          >
            <ul>
              <li>
                <i>1.</i>
                <p>{CONDITION_AGREE}</p>
                <Checkbox
                  isFullWidth
                  list={I_AGREE}
                  name="hadReadAndInAddition"
                  checkBoxClass={cx('checkboxTermAndConditionOptional')}
                  getValue={(value: any) => {
                    handleCheckReadCondition(value.length > 0);
                  }}
                />
              </li>
              <li>
                <i>2.</i>
                <p>{IF_AN_OFFERS}
                  {` `}
                  <Link
                    href={HREF_HOME_LOANS}
                    classHover="linkUnderline"
                    target="_blank"
                    fontSizeMB={14}
                  >
                    {HREF_HOME_LOANS}
                  </Link>
                  {`.`}
                </p>

              </li>
              <li>
                <i>3.</i>
                <p>{IF_AN_OFFERS_IF_APPLICABLE}</p>
              </li>
              <li>
                <i>4.</i>
                <p>{IF_AN_OFFERS_IF_APPLICABLE}</p>
                <ul>
                  <li>
                    <i>
                      a.
                    </i>
                    <p>
                      {REPRESENT_A}
                    </p>
                  </li>
                  <li>
                    <i>
                      b.
                    </i>
                    <p>
                      {REPRESENT_B}
                    </p>
                  </li>
                  <li>
                    <i>
                      c.
                    </i>
                    <p>
                      {REPRESENT_C}
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </Grid>
        </Grid>
        {key !== null && !stateTermCondition && <div className={cx('error')}>Tick the box to acknowledge</div>}

        {/* Section button  */}
        <section className={cx('button-wrapper', 'd-flex space-between mt-dt-40')}>
          <Button backgroundClass="square" onClick={() => handleDetectBtnPrevious()}>
            <ArrowBackIcon className={cx('arrow')} />
          </Button>
          <div>
            <div className="d-inline">
              {children}
            </div>
            <div className="ml-dt-30 d-inline reverse-bg-button">
              {renderButton()}
            </div>
          </div>
        </section>
      </div>


      {/* Demo */}
      <ReviewDemo />

    </div>
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
export default PersonalInformation;
