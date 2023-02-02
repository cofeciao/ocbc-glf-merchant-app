/***
 * REVIEW PAGE - BORROWER - SINGPASS
 *    >> child
 *      >> contact information form
 *      >> mortgaged property address
 *      >> repricing request
 *      >> lengthening of loan tenure request
 *      >> agree
 * 
 */

/**
 * Import modules
 */
import classnames from "classnames/bind";
import React, { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { useHistory } from "react-router";
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import Error from '../../popup/Error';

/**
 * import ccon
 */
import IconReview from '../../../assets/images/icon-review.svg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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

/**
 * import constant
 */
import { CONDITION_AGREE, DATA_STATE_REPRICING_LENGTHENING, HREF_HOME_LOANS, IF_AN_OFFERS, IF_AN_OFFERS_IF_APPLICABLE, I_AGREE, NEXT, REPRESENT_A, REPRESENT_B, REPRESENT_C, REVIEW_PAGE, SUBMIT } from "@/utils/constants";
import { saveFormData, setStatusEditButton } from "@/store/form";
import { formatPhoneNumber } from "@/utils/utils";
import ReviewDemo from "@/views/demo/review-demo";
import { createLoanAppMgmt } from "@/data-manager/info";

/**
 * 
 * Render UI
 * @returns 
 */
const ReviewSingPassBorrower: React.FC<IJointBorrowerReview.IProps> = forwardRef(({ children }, ref) => {
  const cx = classnames.bind(styles);
  const history = useHistory();
  const [key, setKey] = useState(null);
  const [stateTermCondition, setStateTermCondition] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [dataError, setDataError] = useState();
  const [dialogId, setDialogId] = useState(null);
  const dispatch = useDispatch();
  // formRedux.myInfo.GetPersonDataRes.PersonData
  /**
  * Retrieves data from Store
  */
  const formReduxData = useSelector((state: any) => state.form);
  const formPersonalInformation = formReduxData && formReduxData.form && formReduxData.form.personalInformation;
  const personData = formReduxData.myInfo && formReduxData.myInfo.ApplicantDetails && formReduxData.myInfo.ApplicantDetails || {};


  const handleEditing = () => {
    const dataForm = { ...formReduxData.form, isEditing: true, myInfo: formReduxData.myInfo, stateTermCondition};
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
  * Handle download image
  */
  const handleDownLoadImage = (value: string, name: string) => {
    var a = document.createElement("a");
    a.href = "data:image/png;base64," + value; //Image Base64 Goes here
    a.download = `${name}.png`; //File name Here
    a.click(); //Downloaded file
  }


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

  /**
   * Handle call api submit
   */
   const handleSubmitForm = async (dataSubmit: any) => {
    setLoading(true);
    const responseLoansData = await createLoanAppMgmt(dataSubmit, 'AMEND');
      if(responseLoansData.LoansAppMgmtResp && responseLoansData.LoansAppMgmtResp.RespBody && responseLoansData.LoansAppMgmtResp.RespBody.Result.length) {
        setLoading(false);
        history.push('/confirmation')
      } else {
        setTimeout(() => {
          setLoading(false);
          setDataError(responseLoansData.LoansAppMgmtResp.ErrorDetail);
          openDialog();
        }, 1500)
      }
  }

  const handleNext = () => {
    if (stateTermCondition) {
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
				"PackageCode": formReduxData.form && formReduxData.form.formLanding && formReduxData.form.formLanding.yourRate || "",
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
            "MobileNumber": formPersonalInformation && formPersonalInformation.phoneNumber ? `${formPersonalInformation.countryPhoneNumber}${formPersonalInformation.phoneNumber}` : '',
            "EmailAddress": formPersonalInformation && formPersonalInformation.emailAddress || '',
          }]
				} : {}
			}
      handleSubmitForm(dataSubmit)
    } else {
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
        <SectionWrapperReview title="Contact information" backToUrl={() => { dispatch(setStatusEditButton(true)); history.push('/sing-pass-form/borrower/personal-information'); }} onClick={handleEditing}>
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
                content={formPersonalInformation  && `${formPersonalInformation.countryPhoneNumber} ${formPersonalInformation.phoneNumber}`}
              />
            </Grid>
          </Grid>
        </SectionWrapperReview>

        {/* Mortgaged property address */}
        {
          personData && personData.ApplicantModel && (
            <SectionWrapperReview title="Mortgaged property address" isButtonEdit={false}>
              <div className={cx(`font-weight-600`, 'address')}>
                {personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses.AddressModel[0].BlockNo}
                &nbsp;
                {personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses.AddressModel[0].Street}
                <br />
                {personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses.AddressModel[0].BuildingName}
                &nbsp;
                {personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses.AddressModel[0].Floor}
                -
                {personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses.AddressModel[0].Unit}
                &nbsp;
                <br />
                {personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses.AddressModel[0].Country}
                &nbsp;
                {personData && personData.ApplicantModel && personData.ApplicantModel[0].Addresses.AddressModel[0].PostalCode}
              </div>
            </SectionWrapperReview>
          )
        }

        {/*Repricing request*/}
        {
          handleCheckExistSection(DATA_STATE_REPRICING_LENGTHENING[0]) && (
            <SectionWrapperReview title="Repricing request" isButtonEdit={false}>
              <div className={cx('sub')}>
                {REVIEW_PAGE.subRepricing}
              </div>
              <div className={cx('documents')}>
                <div className={cx('title-small')}>
                  {REVIEW_PAGE.titleUpload}
                </div>
                <Grid container >
                  {
                    formReduxData.infoBorrowerRequest && formReduxData.infoBorrowerRequest.repricingRequest && formReduxData.infoBorrowerRequest.repricingRequest.map((item: any, idx: number) => (
                      <Grid
                        item lg={4} md={4} sm={12} xs={12}
                        className="pdr-20 block-half"
                        key={`agree${idx}`}
                      >
                        <div className={cx('info-document')}>
                          <p>{item.nameDocument}</p>
                          <Link
                            href={item.href}
                            classHover="linkUnderline"
                            target=""
                            fontSizeMB={14}
                          >
                            {item.nameFile}
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
        {
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
                        className="pdr-20 block-half"
                      >
                        <RowInfo
                          isBlock
                          label='Proposed new loan tenure' content={`${item.proposed} ${Number(item.proposed) === 1 ? 'year' : 'years'}`}
                        />
                      </Grid>
                    </>
                  ))
                }

              </Grid>
            </SectionWrapperReview>
          )
        }

        {/* Agree */}
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
          <Button backgroundClass="square" onClick={() => history.push('/sing-pass-form/borrower/personal-information')}>
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
export default ReviewSingPassBorrower;
