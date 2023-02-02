/*
 * EXTENSION OF MANUAL-REVIEW
 *    >>> child
 *       >> Partial prepayment request
 *       >> Full redemption of all loans request
 *       >> Lengthening of loan tenure request
 *       >> Change of Direct Debiting Authorisation account request
 *       >> rules anh submit, prev
 */

import React, { useState } from "react";
import classnames from "classnames";
import _, { divide, slice } from "lodash";
import styles from "./Review.scss";

//import library material-ui
import Grid from "@material-ui/core/Grid";

// import image
import edit from '../../../assets/images/edit.svg';
import editHover from '../../../assets/images/edit-hover.svg';

// import constant
import { EDIT, LIST_CHECKBOX_ACCEPT,LIST_DATA_CURRENCY, LIST_REQUEST_REPRICING, URL_MANUAL_FLOW,DATA_CARD_CHECKBOX, YES, LIST_SELECT_FULL_REDEMPTION, NO, DATA_REPRICING_LENGTHENING, LIST_SELECT_PARTIAL, LIST_COUNTRIES, DATA_STATE_LENGTH_SHORT, DATA_NON_REPRICING_1, DATA_NON_REPRICING, LIST_BORROWER_NUMBER, LIST_NATIONAL, LIST_COUNTRIES_CODE } from "../../../utils/constants";

// import component
import { Checkbox, Button, RowInfo, SectionWrapper, Link } from "@sectionsg/orc";
import { useSelector } from "react-redux";

// import icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EditIcon from "@material-ui/icons/Edit";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router";
import { IReviewSubmit } from "./Review";
import { createLoanAppMgmt, loanAttachmentMgmt } from "@/data-manager/info";
import moment from "moment";
import { createLogger } from "redux-logger";
import { adobeAbandon, adobeErrorInfo } from "@/utils/adobeTracking";

//render UI
const ReviewMore: React.FC<IReviewSubmit.IReviewSubmitProps> = ({ handleEditing, children, handleDownLoadImage, labelInput,  setLoading, setDataError, openDialog}) => {
  const cx = classnames.bind(styles);
  const history = useHistory();
  const [key, setKey] = useState(null);
  const [stateTermCondition, setStateTermCondition] = useState({
    isChecked: false,
  });

  const [currentDefault,setCurrentDefault] = useState('');

  // get store in redux
  const formRedux = useSelector((state: any) => state.form);
  const conditionReduxData = formRedux && formRedux.form;
  const formLanding = formRedux.form;


  /**
   * Handle check condition
   */
  const handleCheckCondition = () => {
    setStateTermCondition({
      isChecked: !stateTermCondition.isChecked,
    });
  };
  /**
   * Handle call api submit
   */
   const handleSubmitForm = async (dataSubmit: any) => {
    setLoading(true);
    const responseLoansData = await createLoanAppMgmt(dataSubmit, 'AMEND');
      if(responseLoansData.LoansAppMgmtResp && responseLoansData.LoansAppMgmtResp.RespBody && responseLoansData.LoansAppMgmtResp.RespBody.Result.length) {
        window.removeEventListener('beforeunload', adobeAbandon)
        setLoading(false);
        history.push('/confirmation')
      } else {
        setTimeout(() => {
          setLoading(false);
          adobeErrorInfo(responseLoansData.LoansAppMgmtResp)
          setDataError(responseLoansData.LoansAppMgmtResp.ErrorDetail);
          openDialog();
        }, 1500)
      }
  }

  /**
   * Handle map data account
   */
  const mapDataAccount = () => {
    const lengthDataAccount = conditionReduxData && conditionReduxData.accountInformation && Number(conditionReduxData.accountInformation.accountNumber)
    const data = [];
    for (var i = 0; i < lengthDataAccount; i++) {
      data.push({
        "LoanAccountNo": conditionReduxData.accountInformation[`accountNumber${i + 1}`],
        "IsPrePayment": `${_.includes(conditionReduxData && conditionReduxData.formLanding.listChecked, LIST_REQUEST_REPRICING.partialPrepayment[0])}`,
        "IsRepricing": `${_.includes(conditionReduxData && conditionReduxData.formLanding.listChecked, LIST_REQUEST_REPRICING.repricing[0])}`,
        "IsLengtheningTenure": `${_.includes(conditionReduxData && conditionReduxData.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0])}`,
        "IsShorteningTenure": `${_.includes(conditionReduxData && conditionReduxData.formLanding.listChecked, LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0])}`,
        "IsDDA": `${_.includes(conditionReduxData && conditionReduxData.formLanding.listChecked, LIST_REQUEST_REPRICING.ddaAccount[0])}`,
        "IsFullRedemption":`${_.includes(conditionReduxData && conditionReduxData.formLanding.listChecked, LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0])}`,
      })
    }
    return data;
  }

  /**
   * Handle map data prePayment
   */

   const mapDataPrePayment = () => {
    const data = [];
    conditionReduxData && conditionReduxData.noneRepricingRequests 
      && conditionReduxData.noneRepricingRequests.dataAccount && conditionReduxData.noneRepricingRequests.dataAccount.dataAccountPartial.map((item: string, index: number) => {
        if (!_.isEmpty(item)) {
          data.push({
            "AccountId": item,
            "OutstandingPrincipalAmount": 0,
            "UndisbursedLoanAmount": 0,
            "LoanCurrency": conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`] && conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].substring(
              conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].indexOf("(") + 1, conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].lastIndexOf(")")) || "SGD",
            "InterestRate": 0,
            "LockInEndDate": "",
            "PaymentModeCode": "",
            "PaymentModeDesc": conditionReduxData.noneRepricingRequests[`paymentModeNumber${index + 1}`] || "",
            "CashPaymentAmount": conditionReduxData.noneRepricingRequests[`cashPrepaymentAmount${index + 1}`] || 0,
            "CashPaymentCurrency": conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`] && conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].substring(
              conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].indexOf("(") + 1, conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].lastIndexOf(")")) || "SGD",
            "CpfPaymentAmount": conditionReduxData.noneRepricingRequests[`CPFPrepaymentAmount${index + 1}`] || 0,
            "CpfPaymentCurrency": conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`] && conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].substring(
              conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].indexOf("(") + 1, conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].lastIndexOf(")")) || "SGD",
            "ReviseMonthlyInstalmentCode": "",
            "ReviseMonthlyInstalmentDesc": conditionReduxData.noneRepricingRequests[`optionToRevise${index + 1}`],
            "CurrentMonthlyInstAmount": 0,
            "CurrentMonthlyInstCurrency": conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`] && conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].substring(
              conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].indexOf("(") + 1, conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].lastIndexOf(")")) || "SGD",
            "RevisedMonthlyInstalment": 0,
            "RevisedLoanTenor": 0,
            "SysGenRepaymentEffectiveDate": '',
            "ReqRepaymentEffectiveDate": '',
            "PrepaymentFees": 0,
            "CommitmentFees": 0,
            "InterestInlieu": 0
          })
        }
      })
      return data;
   }
     /**
   * Handle map data Lengthening of loan tenure || Shortening of loan tenure
   */
    const mapDataLengtheningShortening = () => {
      const data = [];
      conditionReduxData && conditionReduxData.noneRepricingRequests 
        && conditionReduxData.noneRepricingRequests.dataAccount && conditionReduxData.noneRepricingRequests.dataAccount.dataAccountLengthening.map((item: string, index: number) => {
          if (!_.isEmpty(item)) {
            data.push({
              "AccountId": item,
              "AdjustmentType": _.includes(formRedux && formRedux.form && formRedux.form.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]) ? "LengtheningLoanTenure" : "ShorterLoanTenure",
              "OutstandingLoanAmount": 0,
              "LoanCurrency":conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`] && conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].substring(
                conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].indexOf("(") + 1, conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].lastIndexOf(")")) || "SGD",
              "InterestRate": 0,
              "LockInEndDate": "",
              "CurrentMonthlyInstAmount": 0,
              "CurrentMonthlyInstCurrency": "",
              "ProposedRevisedMonthlyInstalment": 0,
              "CorrespondingLoanTenor": 0,
              "ProposedRevisedLoanTenor": conditionReduxData && conditionReduxData.noneRepricingRequests && Number(conditionReduxData.noneRepricingRequests[`loanTenure${index + 1}`]) || 0,
              "CorrespondingMonthlyInstalment": 0,
              "ApplicableFees": 0
            })
          }
        })
    return data;
    }

    const countBorrower = () => {
      const accountInformation = formLanding.accountInformation;
      let count = 0;
      if (accountInformation && accountInformation.borrowerNumber === LIST_BORROWER_NUMBER[1].value) {
        count = 2;
      } else if (accountInformation && accountInformation.borrowerNumber === LIST_BORROWER_NUMBER[2].value) {
        count = 3;
      } else if (accountInformation && accountInformation.borrowerNumber === LIST_BORROWER_NUMBER[3].value) {
        count = 4
      } else {
        count = 1;
      }
      return count;
    }
  
    /**
     * Handle map data account
     */
     const mapDataBorrower = () => {
      const accountInformation = formLanding.accountInformation;
      const lengthDataBorrower = formLanding.accountInformation && countBorrower() > 0 ? countBorrower() : 1 ;
      const countryText = formLanding && formLanding.propertyInformation && formLanding.propertyInformation.country;
      const codeCountry = LIST_COUNTRIES.find(x => x.value === countryText);
      const data = [];
      for (var i = 0; i < lengthDataBorrower; i++) {
        data.push(
          {
            "RefID": "",
            "NRIC": i === 0 && formLanding && formLanding.personalInformation && formLanding.personalInformation.nricNumber ? formLanding.personalInformation.nricNumber : '',
            "IdIssueCountry": "",
            "PassportNo": i === 0 && formLanding && formLanding.personalInformation && formLanding.personalInformation.passportNumber ? formLanding.personalInformation.passportNumber : '',
            "PassportExpiryDate": "",
            "FINExpiryDate": "",
            "ApplicantType": i === 0  ? "Main" : "Joint",
            "DateofBirth": "",
            "Salutation": "",
            "NameinNRIC": i === 0 ? formLanding && formLanding.personalInformation && formLanding.personalInformation.nameNric ? formLanding.personalInformation.nameNric : formLanding.personalInformation.namePassport ? formLanding.personalInformation.namePassport : '' : accountInformation && accountInformation[`name${i + 1}`] ? accountInformation[`name${i + 1}`] : '',
            "PreferredName": "",
            "HanyuPinyinName": "",
            "AliasName": "",
            "HanyuPinyinAliasName": "",
            "MarriedName": "",
            "MobileNumber": i === 0 ? formLanding && formLanding.personalInformation && formLanding.personalInformation.phoneNumber ? `${LIST_COUNTRIES_CODE.find(c => c.name === formLanding.personalInformation.countryPhoneNumber).value}${formLanding.personalInformation.phoneNumber}` : '' : accountInformation ? `${LIST_COUNTRIES_CODE.find(c => c.name === accountInformation[`countryPhoneNumber${i + 1}`]).value}${accountInformation[`phoneNumber${i + 1}`]}` : '',
            "EmailAddress": i === 0 ? formLanding && formLanding.personalInformation ? formLanding.personalInformation.emailAddress : '' : accountInformation && accountInformation[`emailAddress${i + 1}`] ? accountInformation[`emailAddress${i + 1}`] : '',
            "Race": "",
            "CountryOfBirth": "",
            "NoOfDependentes": 0,
            "HomePhoneNo": "",
            "OptForeStatments": true,
            "OtherVariables": "",
            "ApplicationStatus": i === 0 && formRedux && formRedux.loanCreate && formRedux.loanCreate.ApplicantDetails.ApplicantModel[0].ApplicationStatus || "None",
						"Status": i === 0 && formRedux && formRedux.loanCreate && formRedux.loanCreate.ApplicantDetails.ApplicantModel[0].Status || "Draft",
						"ApplicantGuid": i === 0 && formRedux && formRedux.loanCreate && formRedux.loanCreate.ApplicantDetails.ApplicantModel[0].ApplicantGuid || '00000000-0000-0000-0000-000000000000',
            "IsInvitedId": false,
            "IsBorrower": i === 0 ? false : true,
            "PreferredLanguage": "English",
            "RelationshipCode": "",
            "RelationshipDesc": "",
            "Others": "",
            "AcceptanceStatus": "None",
            "MyinfoFlow": false,
            "CreatedBy": "",
            "UpdatedBy": "",
            "CreatedDate": "",
            "UpdatedDate": "",
            "IsActive": true,
            "CustIDTypeCode": i === 0 ? formLanding && formLanding.personalInformation && formLanding.personalInformation.singaporeCitizen !== 'No' ? "IC" : "PP" : '',
            "CustIDTypeDesc": i === 0 ? formLanding && formLanding.personalInformation && formLanding.personalInformation.singaporeCitizen !== 'No' ? "NRIC" : "PASSPORT" : '',
            "ResidentStatusCode": '',
            "ResidentStatusDesc": '',
            "PassTypeCode": '',
            "PassTypeDesc": '',
            "GenderCode": "",
            "GenderDesc": "",
            "MaritalStatusCode": "",
            "MaritalStatusDesc": "",
            "EducationLevelCode": "",
            "EducationLevelDesc": "",
            "ResidentialTypeCode": "",
            "ResidentialTypeDesc": "",
            "NationalityCode": '',
            "NationalityDesc": '',
            "OutstandingHDBLoanBalance": 0,
            "MonthlyLoanInstallment": 0,
            "ExpectedRentalCurrency": "",
            "ExpectedMonthlyRental": 0,
            "CurrentFlatOwner": "",
            "OutstandingHDBLoan": "",
            "NumberOfOccupations": 0,
            "ConsentPDPA": true,
            "ConsentCBS": true,
            "EmploymentDetails": {},
            "Addresses": i === 0 ? {
              
            } : {},
          }
        )
      }
      return data;
    }
  /**
   * Handle next page
   */
  const handleNextPage = async () => {
    if (stateTermCondition.isChecked || LIST_CHECKBOX_ACCEPT[0].check) {
      const formLanding = formRedux.form;
      const countryText = conditionReduxData && conditionReduxData.propertyInformation && conditionReduxData.propertyInformation.country;
      const codeCountry = LIST_COUNTRIES.find(x => x.value === countryText);
      const dataMyInfo = formRedux && formRedux.loanCreate;
      const listDocument = formLanding && formLanding.rePricingRequest && formLanding.rePricingRequest || formLanding && formLanding.noneRepricingRequests && formLanding.noneRepricingRequests.listDocument && formLanding.noneRepricingRequests.listDocument || [];
      const newArray = formRedux.dataForm.ApplicantDetails.ApplicantModel.length > 1 ?  _.reject(formRedux.dataForm.ApplicantDetails.ApplicantModel, function(e) {
        return e.IsBorrower !== true;
      }) : []
      const dataSubmit = {
        ...formRedux.dataForm,
				"SystemRefNo": formRedux && formRedux.loanCreate && formRedux.loanCreate.SystemRefNo || '',
				"ApplicationCategory": "Repricing",
				"Status": formRedux && formRedux.loanCreate && formRedux.loanCreate.Status || '',
				"JourneyType": formRedux && formRedux.loanCreate && formRedux.loanCreate.JourneyType || '',
				"ApplicationGuid": formRedux && formRedux.loanCreate.ApplicationGuid || '',
        "BlockNo": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.blockNumber ? formLanding.propertyInformation.blockNumber : '',
        "Street": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.streetName ? formLanding.propertyInformation.streetName : '',
        "Floor": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.floor ? formLanding.propertyInformation.floor : '',
        "Unit": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.unit ? formLanding.propertyInformation.unit : '',
        "PostalCode": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.postalCode  ? formLanding.propertyInformation.postalCode : '',
        "BuildingName": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.stateCity ? formLanding.propertyInformation.stateCity : '',
        "Country": codeCountry && codeCountry.value,
        "PrePaymentLoanDetails": mapDataPrePayment().length > 0 ? {
          "PrePaymentModel": mapDataPrePayment()
        } : {},
        "ChangeInLoanTenure": mapDataLengtheningShortening().length > 0 ? {
          "ChangeInTenureModel": mapDataLengtheningShortening()
        } : {},
        "DDALoanDetails": formLanding && formLanding.noneRepricingRequests && formLanding.noneRepricingRequests.newOCBCAccountNumber ? {
          "DDAModel":  [{
              "NewDDAAccountNo": formLanding && formLanding.noneRepricingRequests && formLanding.noneRepricingRequests.newOCBCAccountNumber ? formLanding.noneRepricingRequests.newOCBCAccountNumber : ''
            }
          ]
        } : {},
        "AccountMapping": {
          "AccountModel": mapDataAccount().length > 0 ? mapDataAccount() : [
            {
              "IsPrePayment": `${_.includes(conditionReduxData && conditionReduxData.formLanding.listChecked, LIST_REQUEST_REPRICING.partialPrepayment[0])}`,
              "IsRepricing": `${_.includes(conditionReduxData && conditionReduxData.formLanding.listChecked, LIST_REQUEST_REPRICING.repricing[0])}`,
              "IsLengtheningTenure": `${_.includes(conditionReduxData && conditionReduxData.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0])}`,
              "IsShorteningTenure": `${_.includes(conditionReduxData && conditionReduxData.formLanding.listChecked, LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0])}`,
              "IsDDA": `${_.includes(conditionReduxData && conditionReduxData.formLanding.listChecked, LIST_REQUEST_REPRICING.ddaAccount[0])}`,
              "IsFullRedemption":`${_.includes(conditionReduxData && conditionReduxData.formLanding.listChecked, LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0])}`,
            }
          ],
        },
				"ApplicantDetails": {
					"ApplicantModel": mapDataBorrower() && mapDataBorrower().length > 0 ? mapDataBorrower() : []
				}
      }
      if (listDocument.length > 0) {
        const response = await loanAttachmentMgmt(listDocument, 'LSP', dataMyInfo.ApplicationGuid, dataMyInfo.ApplicantDetails.ApplicantModel[0].ApplicantGuid)
        if (response.LoanAttachmentMgmtResp.RespBody) {
          handleSubmitForm(dataSubmit)
        }
      } else {
        handleSubmitForm(dataSubmit)
      }
    } else {
      setKey(Date.now());
    }
  };

  /**
   * Handle Prev
   */
  const handlePrev = () => {
    const formLanding = formRedux.form;
     if ((LIST_REQUEST_REPRICING.repricing[0] === formLanding.formLanding.listChecked[0]) && formLanding.formLanding.listChecked.length === 1) {
       if (formLanding.formLanding.documentRequired.length > 0) {
        history.push(URL_MANUAL_FLOW.repricingRequest)
       } else {
        history.push(URL_MANUAL_FLOW.accountInformation);
       }
     } else if (!_.isEmpty(formRedux.form.noneRepricingRequests)){
       history.push(URL_MANUAL_FLOW.nonRepricingRequest)
     } else {
       history.push(URL_MANUAL_FLOW.repricingRequest)
     }
  };
  /**
   * render UI button
   * @returns {HTML}
   */
  const renderButton = () => {
    return (
      <Button
        backgroundClass="bgGunmetalBluegrey"
        onClick={() => handleNextPage()}
      >
        Submit
        <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
      </Button>
    );
  };

  //  indexRenderUpload = formLanding.formLanding.listChecked.findIndex((item: any) => DATA_NON_REPRICING_1.some((entry: any) => entry === item));
  const handleShowUpload = () => {
    let value = -1;
    if (_.includes(formLanding && formLanding.formLanding && formLanding.formLanding.listChecked, DATA_NON_REPRICING[0])) {
      value = 0;
    } else if (_.includes(formLanding && formLanding.formLanding && formLanding.formLanding.listChecked, DATA_NON_REPRICING[1])) {
      value = 1;
    } else  if (_.includes(formLanding && formLanding.formLanding && formLanding.formLanding.listChecked, DATA_NON_REPRICING[2])) {
      value = 2;
    } else value = 3;
    return value;
  }

  const renderUploadDocument = () => {
    return (
      <>
        {
          formRedux.form && formRedux.form.rePricingRequest === undefined && formRedux.form.noneRepricingRequests.listDocument !== undefined && (
            <div className={"mt-dt-30 title-text-small-bold"}>
              Uploaded documents
            </div>
          )
        }
        {
          <Grid container item lg={12} md={12} sm={12} xs={12} id="repricingRequest" className={formRedux.form && formRedux.form.rePricingRequest === undefined && formRedux.form.noneRepricingRequests.listDocument !== undefined ? 'mt-dt-20' : ''}>
          {
            <>
              {
                formRedux.form && formRedux.form.rePricingRequest === undefined  && formRedux.form.formLanding.documentRequired.map((itemLabel: any, index: number) => (
                  <Grid item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    className={'pdr-20 mb-mb-20'}>
                      <RowInfo
                        key={index}
                        label={labelInput(itemLabel)}
                        content={''}
                      />
                    {formRedux.form.noneRepricingRequests && formRedux.form.noneRepricingRequests.listDocument &&
                      formRedux.form.noneRepricingRequests.listDocument[index].map((item: any, idx: number) => (
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
            </>
          }
          </Grid>
        }
      </>
    )
  }
  return (
    <>
      {/* Partial prepayment request */}

      {formRedux.form.noneRepricingRequests && (
        <>
          {formRedux.form.noneRepricingRequests.dataAccount && (
            <>
              {formRedux.form.noneRepricingRequests.dataAccount
                .dataAccountPartial.length > 0 && (
                <SectionWrapper
                  className={"max-width-common-right br-5 p-30 mt-dt-10"}
                >
                  <div className={"block-form-end"}>
                    <div
                      className={"max-width-common-right d-flex space-between"}
                    >
                      <h3 className={"bold"}>Partial prepayment request</h3>
                      <div
                        className={cx('flexBtwSpace', 'btnBackSection', 'info-icon-wrapper')}
                        onClick={() => {history.push(URL_MANUAL_FLOW.nonRepricingRequest); handleEditing()}}
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
                        {
                          item && (
                          <Grid
                            container
                            item
                            xs={12}
                            id="partialPrepaymentRequest"
                            className={`${idx === 0 ? 'mt-dt-30' : 'mt-dt-60'}`}
                          >
                            <Grid
                              xs={12}
                              item
                              id="account-info"
                            >
                              <RowInfo
                                label={`Loan account number`}
                                content={item}
                              />
                            </Grid>
                            <Grid
                              xs={12}
                              item
                              id="info-payment"
                              className={"d-flex flex-wrap"}
                            >
                              <Grid
                                className={"mr-dt-80 mt-dt-30"}
                                item
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
                                    content={
                                      (
                                        !formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`] ? "SGD" : formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`] && formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].slice((formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].indexOf("(")+1),formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].lastIndexOf(")"))) + " " +
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
                                  lg={3}
                                  md={3}
                                  sm={12}
                                  xs={12}
                                  item
                                >
                                  <RowInfo
                                    label="CPF prepayment amount"
                                    content={(!formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`] ? "SGD" : formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`] && formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].slice((formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].indexOf("(")+1),formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].lastIndexOf(")"))) + " " +
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
                                  lg={3}
                                  md={3}
                                  sm={12}
                                  xs={12}
                                  item
                                >
                                  <RowInfo
                                    label="CPF prepayment amount"
                                    content={
                                      (!formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`] ? "SGD" : formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`] && formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].slice((formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].indexOf("(")+1),formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].lastIndexOf(")"))) + " " +
                                      formRedux.form.noneRepricingRequests[
                                        `CPFPrepaymentAmount${idx + 1}`
                                      ].toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                                    }
                                  />
                                </Grid>
                                <Grid
                                  className={"mr-dt-80 mt-dt-30"}
                                  lg={3}
                                  md={3}
                                  sm={12}
                                  xs={12}
                                  item
                                >
                                  <RowInfo
                                    label="Cash prepayment amount"
                                    content={
                                      (
                                        !formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`] ? "SGD" : formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`] && formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].slice((formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].indexOf("(")+1),formRedux.form.noneRepricingRequests[`currencyNumber${idx+1}`].lastIndexOf(")"))) + " " +
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
                              {
                                true && (
                                  <>
                                    {
                                      formRedux.form.noneRepricingRequests[
                                        `optionToRevise${idx + 1}`
                                      ] && (
                                        <Grid
                                          className={"mr-dt-80 mt-dt-30"}
                                          lg={3}
                                          md={3}
                                          sm={12}
                                          xs={12}
                                          item
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
                                )
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
                      container
                      item
                      xs={12}
                      id="partialPrepaymentRequest"
                      className={"mt-dt-30 mb-dt-60"}
                    >
                      <Grid xs={12} item id="account-info">
                      {/* {formRedux.form.formLanding.lockIn === NO && 
                      <RowInfo
                          label="Fees"
                          content="Not applicable"
                        />
                      } */}
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
                {handleShowUpload() === 0 ? renderUploadDocument() : ''}
                </SectionWrapper>
              )}
            </>
          )}
        </>
      )}

      {/* Full redemption of all loans request */}
      {_.isEqual(conditionReduxData && conditionReduxData.formLanding && formRedux.form.formLanding.listChecked,["Full redemption of loan"]) &&
           <SectionWrapper className={"max-width-common-right br-5 p-30 mt-dt-10"}>
            <div className={"block-form-end"}>
              <div className={"max-width-common-right d-flex space-between"}>
                <h3 className={"bold"}>
                Full redemption of all loans request
                </h3>
                <div
                  className={cx('flexBtwSpace', 'btnBackSection', 'info-icon-wrapper')}
                  onClick={() => {history.push(URL_MANUAL_FLOW.nonRepricingRequest);  handleEditing()}}
                  aria-hidden="true"
                >
                  <img src={edit} className={cx('isMr10', 'iconEdit', 'icon-black')} alt="edit" />
                  <img src={editHover} className={cx('isMr10', 'iconEdit', 'icon-blue')} alt="edit-hover" />
                  {' '}
                  {EDIT}
                </div>
              </div>
              <Grid
                container
                xs={12}
                item
                id="partialPrepaymentRequest"
                className={"mb-dt-60"}
              >
                <Grid container item lg={12} md={12} sm={12} xs={12} id="info-payment" className={"d-flex flex-wrap"}>

                  <Grid
                    className={"pr-dt-42 mt-dt-30"}
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                  >
                    <RowInfo
                      label="Reason for full redemption"
                      content={formRedux.form.noneRepricingRequests.reasonForFullRedemption}
                    />
                  </Grid>
                  <Grid
                    className={"pr-dt-42 mt-dt-30"}
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                  >
                    <RowInfo
                      label="Law firm appointment"
                      content={formRedux.form.noneRepricingRequests.lawFirmAppointment}
                    />
                  </Grid>
                  
                  <Grid
                    className={"pr-dt-42 mt-dt-30"}
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                  >
                    {
                      formRedux.form.noneRepricingRequests.businessName && (
                        <RowInfo
                        label="Law firm you want to appoint"
                        content={formRedux.form.noneRepricingRequests.businessName ? formRedux.form.noneRepricingRequests.businessName : ""}
                      />
                      )
                    }
                  </Grid>

                  <Grid
                    className={"pr-dt-42 mt-dt-30"}
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                  >
                    <RowInfo
                      label="Mode of settlement"
                      content={formRedux.form.noneRepricingRequests.prepaymentInstructions}
                    />
                  </Grid>
                  {/* full with yes and sale of property */}
                  {(formRedux.form.formLanding.lockIn === YES && formRedux.form.noneRepricingRequests.reasonForFullRedemption  === LIST_SELECT_FULL_REDEMPTION[0].value) && 
                  <Grid
                    className={"pr-dt-42 mt-dt-30"}
                    item
                    lg={7}
                    md={7}
                    sm={12}
                    xs={12}
                  >
                    <RowInfo
                      label="Fees"
                      isBlock
                      content="If you sell your property and fully pay off your loan within the lock-in period, a prepayment fee of 0.75% of the outstanding loan amount will be charged. Please refer to the 'Full Redemption' section in your Letter of Offer (LO)/latest Supplementary Letter of Offer (SLO) to check if any fee will be charged. In addition, we may ask you to return any cash reward you received when you refinanced your loan with us. Please refer to the 'Cash Reward Scheme' in your LO/latest SLO to check if this applies to you."
                    />
                  </Grid>
                  }
                  {/* full with no and Refinancing with another bank */}
                  {(formRedux.form.formLanding.lockIn === NO && formRedux.form.noneRepricingRequests.reasonForFullRedemption  === LIST_SELECT_FULL_REDEMPTION[1].value) && 
                  <Grid
                    className={"mr-dt-80 mt-dt-30"}
                    item
                    lg={7}
                    md={7}
                    sm={12}
                    xs={12}
                  >
                    <RowInfo
                      label="Fees"
                      isBlock
                      content="If you fully pay off your loan by refinancing with another financial institution during a specified period – as stated in your Letter of Offer (LO)/latest Supplementary Letter of Offer (SLO) – a prepayment fee of 1.5% of the outstanding loan amount will be charged. Please refer to the 'Full Redemption' section in your LO/latest SLO to check if any fee will be charged. In addition, we may ask you to return any cash reward you received when you refinanced your loan with us. Please refer to the 'Cash Reward Scheme' in your LO/latest SLO to check if this applies to you."
                    />
                  </Grid>
                  }
                  {/* full with Yes and Refinancing with another bank or Own funds */}
                  {(formRedux.form.formLanding.lockIn === YES && (formRedux.form.noneRepricingRequests.reasonForFullRedemption  === LIST_SELECT_FULL_REDEMPTION[1].value || formRedux.form.noneRepricingRequests.reasonForFullRedemption  === LIST_SELECT_FULL_REDEMPTION[2].value)) && 
                  <Grid
                    className={"mr-dt-80 mt-dt-30"}
                    item
                    lg={7}
                    md={7}
                    sm={12}
                    xs={12}
                  >
                    <RowInfo
                      label="Fees"
                      isBlock
                      content="If you use your own funds or refinance with another financial institution to fully pay off your loan within the lock-in period, a prepayment fee of 1.5% of the outstanding loan amount will be charged. Please refer to the 'Full Redemption' section in your Letter of Offer (LO)/latest Supplementary Letter of Offer (SLO) to check if any fee will be charged.  In addition, we may ask you to return any cash reward you received when you refinanced your loan with us. Please refer to the 'Cash Reward Scheme' in your LO/latest SLO to check if this applies to you."
                    />
                  </Grid>
                  }
                  {/* full with Yes and Refinancing with another bank or Own funds */}
                  {(formRedux.form.formLanding.lockIn === NO && (formRedux.form.noneRepricingRequests.reasonForFullRedemption  === LIST_SELECT_FULL_REDEMPTION[0].value || formRedux.form.noneRepricingRequests.reasonForFullRedemption  === LIST_SELECT_FULL_REDEMPTION[2].value)) && 
                  <Grid
                    className={"mr-dt-80 mt-dt-30"}
                    item
                    lg={7}
                    md={7}
                    sm={12}
                    xs={12}
                  >
                    <RowInfo
                      label="Fees"
                      isBlock
                      content="In addition, we may ask you to return any cash reward you received when you refinanced your loan with us. Please refer to the 'Cash Reward Scheme' in your LO/latest SLO to check if this applies to you."
                    />
                  </Grid>
                  }
                </Grid>
              </Grid>
            </div>
            {renderUploadDocument()}
          </SectionWrapper>
          }

      {/* Lengthening of loan tenure request */}
      {formRedux.form.noneRepricingRequests && (
        <>
          {formRedux.form.noneRepricingRequests.dataAccount && (
            <>
              {formRedux.form.noneRepricingRequests.dataAccount
                .dataAccountLengthening.length > 0 && (
                <SectionWrapper
                  className={"max-width-common-right br-5 p-30 mt-dt-10"}
                >
                  <div className={"block-form-end"}>
                    <div
                      className={"max-width-common-right d-flex space-between"}
                    >
                      <h3 className={"bold"}>{_.includes(formRedux.form.formLanding.listChecked, LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0])  ? "Shortening of loan tenure" : "Lengthening of loan tenure request"}</h3>
                      <div
                        className={cx('flexBtwSpace', 'btnBackSection', 'info-icon-wrapper')}
                        onClick={() => {history.push(URL_MANUAL_FLOW.nonRepricingRequest); handleEditing()}}
                        aria-hidden="true"
                      >
                        <img src={edit} className={cx('isMr10', 'iconEdit', 'icon-black')} alt="edit" />
                        <img src={editHover} className={cx('isMr10', 'iconEdit', 'icon-blue')} alt="edit-hover" />
                        {' '}
                        {EDIT}
                      </div>
                    </div>
                    {formRedux.form.noneRepricingRequests.dataAccount.dataAccountLengthening.map(
                      (item: any, idx: number) => (
                        <React.Fragment key={idx}>
                        { item && (
                        <Grid
                          container
                          xs={12}
                          item
                          id="partialPrepaymentRequest"
                         className={`mt-dt-30 ${idx === formRedux.form.noneRepricingRequests.dataAccount.dataAccountLengthening.length - 1 ? formRedux.form.rePricingRequest === undefined && formRedux.form.noneRepricingRequests.listDocument !== undefined ? 'mb-dt-40' : '' : 'mb-dt-60'}`}
                        >
                          <Grid xs={12} item id="account-info">
                            <RowInfo
                              label={
                                formRedux.form.noneRepricingRequests.dataAccount
                                  .dataAccountLengthening.length > 1
                                  ? `Loan account number`
                                  : "Loan account number"
                              }
                              content={item}
                            />
                          </Grid>
                          <Grid
                            xs={12}
                            id="info-payment"
                            item
                            className={"d-flex flex-wrap mt-dt-30"}
                          >
                            <RowInfo
                              label={`${_.includes(conditionReduxData && conditionReduxData.formLanding && formRedux.form.formLanding.listChecked, "Shortening of loan tenure") ? 'How many years do you wish to shorten your tenure to?' : 'How many years do you wish to lengthen your tenure to?'}`}
                              content={
                                formRedux.form.noneRepricingRequests[
                                  `loanTenure${idx + 1}`
                                ] + ` ${Number(formRedux.form.noneRepricingRequests[`loanTenure${idx+1}`]) === 1 ? 'year' : 'years'}`
                              }
                            />
                          </Grid>
                        </Grid>
                        )}
                        </React.Fragment>
                      )
                    )}
                    <Grid
                        container
                        xs={12}
                        item
                        id="partialPrepaymentRequest"
                        className={`mt-dt-30`}
                      >
                        <Grid xs={12} item id="account-info">
                          <RowInfo label={"Fees"} content={"Processing fee of $500"} />
                        </Grid>
                      </Grid>
                      {(handleShowUpload() === 1 || handleShowUpload() === 2) ? renderUploadDocument() : ''}
                  </div>
                </SectionWrapper>
              )}
            </>
          )}
        </>
      )}

      {/* Change of Direct Debiting Authorisation account request */}

      {formRedux.form.noneRepricingRequests && (
        <>
          {formRedux.form.noneRepricingRequests
            .newOCBCAccountNumber && (
            <>
              <SectionWrapper
                className={"max-width-common-right br-5 p-30 mt-dt-10"}
              >
                <div className={"block-form-end"}>
                  <div
                    className={"max-width-common-right d-flex space-between"}
                  >
                    <h3 className={"bold"}>
                    Change of Debiting account request
                    </h3>
                    <div
                      className={cx('flexBtwSpace', 'btnBackSection', 'info-icon-wrapper')}
                      onClick={() => {history.push(URL_MANUAL_FLOW.nonRepricingRequest); handleEditing()}}
                      aria-hidden="true"
                    >
                      <img src={edit} className={cx('isMr10', 'iconEdit', 'icon-black')} alt="edit" />
                      <img src={editHover} className={cx('isMr10', 'iconEdit', 'icon-blue')} alt="edit-hover" />
                      {' '}
                      {EDIT}
                    </div>
                  </div>
                  <Grid
                    container
                    xs={12}
                    item
                    id="partialPrepaymentRequest"
                    className={"mb-dt-60"}
                  >
                    <Grid
                      xs={12}
                      item
                      id="info-payment"
                      className={"d-flex flex-wrap"}
                    >
                      {/* <Grid
                        className={"mr-dt-80 mt-dt-30"}
                        lg={3}
                        md={3}
                        sm={12}
                        xs={12}
                      >
                        <RowInfo
                          label="Account that you currently use"
                          content={
                            formRedux.form.noneRepricingRequests
                              .currentDebitingAccountNumber
                          }
                        />
                      </Grid> */}

                      <Grid
                        className={"mr-dt-80 mt-dt-30"}
                        item
                        lg={4}
                        md={4}
                        sm={12}
                        xs={12}
                      >
                        <RowInfo
                          label="OCBC account that you now want to use"
                          content={
                            formRedux.form.noneRepricingRequests
                              .newOCBCAccountNumber
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
                {handleShowUpload() === 3 ? renderUploadDocument() : ''}
              </SectionWrapper>
            </>
          )}
        </>
      )}

      {/* Accept rules from */}

      <div className={"submit-rules-box mt-dt-30"}>
        <Grid xs={12} item id="acceptAndSubmit" className={"d-flex"}>
          <div className={cx("checkbox")}>
            <Checkbox
              list={LIST_CHECKBOX_ACCEPT}
              name="Accept rules"
              getValue={(value: string) => {
                handleCheckCondition();
                setKey(null);
              }}
            />
          </div>
          <ul id="contentRules" className="custom-list-style-number mrl-dt-15">
          <>
              {
                formRedux && formRedux.dataTnc.length > 0 && formRedux.dataTnc.map((item: any, index: number) => {
                  const dataTnc = item.TnCDescription.split(`\n`).filter((value: any) => Boolean(value.trim()));
                  const dataFormat = dataTnc[1];
                  const dataTncPrepayment = _.includes(dataFormat, 'www.cpf.gov.sg') ? dataFormat.split('www.cpf.gov.sg') : dataFormat;
                  const indexChidList = _.findIndex(dataTnc, function(o: any) { return _.includes(o, ':') });
                  return (
                    <React.Fragment key={index}>
                    <li className={"mb-dt-10"}>
                      <div className={"content-paragraph"}>
                        {dataTnc[0]}
                      </div>
                    </li>
                    {
                      !_.isEmpty(dataTnc[1]) && (
                        <li className={"mb-dt-10"}>
                          <div className={"content-paragraph"}>
                            { !_.includes(dataTnc[1], 'www.ocbc.com/homeloans') && !_.includes(dataFormat, 'www.cpf.gov.sg') && dataTnc[1]}
                            {_.includes(dataTnc[1], 'www.ocbc.com/homeloans') && dataTnc[1].replace('www.ocbc.com/homeloans.', '')}
                            {
                              _.includes(dataTnc[1], 'www.ocbc.com/homeloans') && (
                                <>
                                  <Link
                                    classHover="linkUnderline"
                                    target="_blank"
                                    fontSizeMB={14}
                                    href="https://www.ocbc.com/personal-banking/loans/new-purchase-of-hdb-private-property?pid=sg:en:others:loans:homeloan:Evergreen:Dec16:vanity:ocbc:generic::::"
                                  >
                                    www.ocbc.com/homeloans
                                  </Link>.
                                </>
                              )
                            }
                            {
                              _.includes(dataFormat, 'www.cpf.gov.sg') && dataTncPrepayment[0]
                            }
                            {
                              _.includes(dataFormat, 'www.cpf.gov.sg') && (
                                <Link
                                  classHover="linkUnderline"
                                  target="_blank"
                                  fontSizeMB={14}
                                  href="https://www.cpf.gov.sg/member"
                                >
                                  www.cpf.gov.sg
                                </Link>
                              )
                            }
                            {
                              _.includes(dataFormat, 'www.cpf.gov.sg') && dataTncPrepayment[1]
                            }
                          </div>
                        </li>
                      )
                    }
                    {
                      !_.isEqual(dataTnc[2] && dataTnc[2].substring(0,2), 'i.') && !_.isEqual(dataTnc[2] && dataTnc[2].substring(0,3), 'ii.') && !_.isEqual(dataTnc[2] && dataTnc[2].substring(0,4), 'iii.') && !_.isEmpty(dataTnc[2]) && (
                        <li className={"mb-dt-10"}>
                          <div className={"content-paragraph"}>
                            {dataTnc[2]}
                            {!_.isEmpty(dataTnc[indexChidList + 1]) && _.isEqual(dataTnc[indexChidList + 1] && dataTnc[indexChidList + 1].substring(0,2), 'i.') && (
                                <div className={"d-flex mb-dt-10 mt-dt-10"}>
                                  <div className={"content-paragraph"}>
                                    {dataTnc[indexChidList + 1]}
                                  </div>
                                </div>
                              )}
                              {
                                !_.isEmpty(dataTnc[indexChidList + 2]) && _.isEqual(dataTnc[indexChidList + 2] && dataTnc[indexChidList + 2].substring(0,3), 'ii.') && (
                                  <div className={"d-flex mb-dt-10 mt-dt-10"}>
                                    <div className={"content-paragraph"}>
                                      {dataTnc[indexChidList + 2]}
                                    </div>
                                </div>
                                )
                              }
                              {
                                !_.isEmpty(dataTnc[indexChidList + 3]) && _.isEqual(dataTnc[indexChidList + 3] && dataTnc[indexChidList + 3].substring(0,4), 'iii.') && (
                                  <div className={"d-flex mb-dt-10 mt-dt-10"}>
                                    <div className={"content-paragraph"}>
                                      {dataTnc[indexChidList + 3]}
                                    </div>
                                </div>
                                )
                              }
                              {
                                !_.isEmpty(dataTnc[indexChidList + 4]) && _.isEqual(dataTnc[indexChidList + 4] && dataTnc[indexChidList + 4].substring(0,3), 'iv.') && (
                                  <div className={"d-flex mb-dt-10 mt-dt-10"}>
                                    <div className={"content-paragraph"}>
                                      {dataTnc[indexChidList + 4]}
                                    </div>
                                </div>
                                )
                              }
                              {
                                !_.isEmpty(dataTnc[indexChidList + 5]) && _.isEqual(dataTnc[indexChidList + 5] && dataTnc[indexChidList + 5].substring(0,2), 'v.') && (
                                  <div className={"d-flex mb-dt-10 mt-dt-10"}>
                                    <div className={"content-paragraph"}>
                                      {dataTnc[indexChidList + 5]}
                                    </div>
                                </div>
                                )
                              }
                              {
                                !_.isEmpty(dataTnc[indexChidList + 6]) && _.isEqual(dataTnc[indexChidList + 6] && dataTnc[indexChidList + 6].substring(0,3), 'vi.') && (
                                  <div className={"d-flex mb-dt-10 mt-dt-10"}>
                                    <div className={"content-paragraph"}>
                                      {dataTnc[indexChidList + 6]}
                                    </div>
                                </div>
                                )
                              }
                              {
                                !_.isEmpty(dataTnc[indexChidList + 7]) && _.isEqual(dataTnc[indexChidList + 7] && dataTnc[indexChidList + 7].substring(0,4), 'vii.') && (
                                  <div className={"d-flex mb-dt-10 mt-dt-10"}>
                                    <div className={"content-paragraph"}>
                                      {dataTnc[indexChidList + 7]}
                                    </div>
                                </div>
                                )
                              }
                              {
                                !_.isEmpty(dataTnc[indexChidList + 8]) && _.isEqual(dataTnc[indexChidList + 8] && dataTnc[indexChidList + 8].substring(0,5), 'viii.') && (
                                  <div className={"d-flex mb-dt-10 mt-dt-10"}>
                                    <div className={"content-paragraph"}>
                                      {dataTnc[indexChidList + 8]}
                                    </div>
                                </div>
                                )
                              }
                          </div>
                        </li>
                      )
                    }
                    {
                      !_.isEqual(dataTnc[3] && dataTnc[3].substring(0,2), 'i.') && !_.isEqual(dataTnc[3] && dataTnc[3].substring(0,3), 'ii.') && !_.isEmpty(dataTnc[3]) && (
                        <li className={"mb-dt-10"}>
                          <div className={"content-paragraph"}>
                            {dataTnc[3]}
                          </div>
                        </li>
                      )
                    }
                    {
                      !_.isEqual(dataTnc[4] && dataTnc[4].substring(0,2), 'i.') && !_.isEqual(dataTnc[4] && dataTnc[4].substring(0,3), 'ii.') && !_.isEmpty(dataTnc[4]) && (
                        <li className={"mb-dt-10"}>
                          <div className={"content-paragraph"}>
                            {dataTnc[4]}
                          </div>
                        </li>
                      )
                    }
                  </React.Fragment>
                  )
                })
              }
            </>
          </ul>
        </Grid>
        {key !== null && (
          <div className={cx("error")}>Tick the box to acknowledge</div>
        )}
        {/* Button submit, continue late and prev */}
        <section
          className={cx("button-wrapper", "d-flex space-between mt-dt-40")}
        >
          <Button backgroundClass="square" onClick={() => handlePrev()}>
            <ArrowBackIcon className={cx("arrow")} />
          </Button>
          <div>
            <div className="d-inline">
              {children}
            </div>
            <div className="ml-dt-30 d-inline">{renderButton()}</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReviewMore;
