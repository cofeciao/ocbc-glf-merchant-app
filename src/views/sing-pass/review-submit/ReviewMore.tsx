/*
* EXTENSION OF SINGPASS-REVIEW
*    >>> child
*       >>  Full redemption of all  loans request
*       >>  Lengthening of loan tenure request
*       >>  Change of Direct Debiting Authorisation account request
*       >>  Rules and submit , prev...
*/
// import lib 
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Grid from "@material-ui/core/Grid";
import styles from "./ReviewSubmit.scss";

// import image
import edit from '../../../assets/images/edit.svg';
import editHover from '../../../assets/images/edit-hover.svg';

// import constant
import {
  DATA_CARD_CHECKBOX,
    DATA_FULL_REDEMPTION_ON_ALL_LOAN,
    DATA_REPRICING_LENGTHENING,
    DATA_STATE_REPRICING_LENGTHENING_DDA,
    DATA_STATE_REPRICING_LENGTHENING_DDA_MIX,
    DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA,
    DATA_STATE_REPRICING_SHORTENING_DDA,
    EDIT,
    LIST_BORROWER_NUMBER,
    LIST_CHECKBOX_ACCEPT, LIST_COUNTRIES, LIST_COUNTRIES_CODE, LIST_REQUEST_REPRICING, LIST_SELECT_FULL_REDEMPTION, LIST_SELECT_PURPOSE, NO, REGION, URL_SINGPASS_FLOW, YES,
  } from "../../../utils/constants";

// import icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EditIcon from "@material-ui/icons/Edit";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// import component lib
import { Checkbox, Button, RowInfo, SectionWrapper, Link } from "@sectionsg/orc";
import classnames from "classnames";
import { UndoOutlined } from "@material-ui/icons";
import _, { stubTrue } from "lodash";
import { saveFormData } from "@/store/form";
import { useDispatch } from "react-redux";
import { createLoanAppMgmt, loanAttachmentMgmt } from "@/data-manager/info";
import moment from "moment";
import { formatDataHdbownership, formatDataAddressHdbownership, mapCpfWithDrawDetail } from "@/utils/utils";
import { adobeAbandon, adobeErrorInfo } from "@/utils/adobeTracking";

const ReviewMore: React.FC<any> = ({ handleEditing, children, handleDownLoadImage, labelInput, formRedux, setLoading, setDataError, openDialog }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [key, setKey] = useState(null);
  const [stateTermCondition, setStateTermCondition] = useState({
    isChecked: false
  });
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
    const lengthDataAccount = formReduxData.form && formReduxData.form.accountInformation && Number(formReduxData.form.accountInformation.accountNumber)
    const data = [];
    for (var i = 0; i < lengthDataAccount; i++) {
      data.push({
        "LoanAccountNo": formReduxData.form.accountInformation[`accountNumber${i + 1}`],
        "IsPrePayment": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.partialPrepayment[0])}`,
        "IsRepricing": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.repricing[0])}`,
        "IsLengtheningTenure": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0])}`,
        "IsShorteningTenure": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0])}`,
        "IsDDA": `${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.ddaAccount[0])}`,
        "IsFullRedemption":`${_.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0])}`,
      })
    }
    return data;
  }

	/**
	 * Handle format data
	 */

	const handleFormatCPFContributionsList = (data: any) => {
		if (data) {
      return data.map((item: any, key: any) => {
        const data = {
          Month: '',
          DateStr: '',
          Employer: '',
          Amount: '',
        };
        _.mapKeys(item, (valueItem, keyItem) => {
          if (keyItem === 'month') {
            return data['Month'] = valueItem.value;
          } if (keyItem === 'date') {
            return data['DateStr'] = valueItem.value;
          } if (keyItem === 'amount') {
            return data['Amount'] = valueItem.value;
          }
          return data['Employer'] = valueItem.value;
        });
        return data;
      });
    }
    return [];
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
            "ReviseMonthlyInstalmentDesc": conditionReduxData.noneRepricingRequests[`optionToRevise${index + 1}`] || '',
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
							"AdjustmentType": _.includes(formReduxData && formReduxData.form && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]) ? "LengtheningLoanTenure" : "ShorterLoanTenure",
							"OutstandingLoanAmount": 0,
							"LoanCurrency": conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`] && conditionReduxData.noneRepricingRequests[`currencyNumber${index + 1}`].substring(
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

    /**
   * handle map data hdb owners
   * @returns 
   */

  const mapDataHdbOwner = () => {
    let formatData = [];
    const data = [] 
    if (formRedux && formRedux.myInfo.hdbownership && _.isArray(formRedux.myInfo.hdbownership)) {
      formatData = formRedux.myInfo.hdbownership;
    } else {
      formatData.push(formRedux.myInfo.hdbownership)
    }
    if (formatData && formatData.length > 0) {
      for(var i = 0; i < formatData.length; i++) {
        data.push({
          "NoOfOwners": formatData && formatData[i] && formatData[i].noofowners && Number(formatData[i].noofowners.value) || 0,
          "HdbTypeCode": formatData && formatData[i] && formatData[i].hdbtype && formatData[i].hdbtype.code || '',
          "HdbTypeDesc": formatData && formatData[i] && formatData[i].hdbtype && formatData[i].hdbtype.desc || '',
          "LeaseCommencementDate": formatData && formatData[i] && formatData[i].leasecommencementdate && formatData[i].leasecommencementdate.value || '',
          "TermOfLease": formatData && formatData[i] && formatData[i].termoflease && Number(formatData[i].termoflease.value) || 0,
          "DateofPurchase": formatData && formatData[i] && formatData[i].dateofpurchase && formatData[i].dateofpurchase.value || '',
          "DateofOwnershiptransfer": formatData && formatData[i] && formatData[i].dateofownershiptransfer && formatData[i].dateofownershiptransfer.value || '',
          "BalanceLoanrepaymentinMnths": formatData && formatData[i] && formatData[i].balanceloanrepayment && Number(formatData[i].balanceloanrepayment.months.value) + Number(formatData[i].balanceloanrepayment.years.value) * 12 || 0,
          "OutstandingLoanbalance": formatData && formatData[i] && formatData[i].outstandingloanbalance && Number(formatData[i].outstandingloanbalance.value) || 0,
          "MonthlyLoanInstalment": formatData && formatData[i] && formatData[i].monthlyloaninstalment && Number(formatData[i].monthlyloaninstalment.value) || 0,
      })
      }
    }
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
    const lengthDataBorrower = formLanding.accountInformation && countBorrower() > 0 ? countBorrower() : 1;
    const accountInformation = formLanding.accountInformation;
    const countryText = formLanding && formLanding.propertyInformation && formLanding.propertyInformation.country;
    const codeCountry = LIST_COUNTRIES.find(x => x.value === countryText);
    const data = [];
    for (var i = 0; i < lengthDataBorrower; i++) {
      data.push(
        {
        "ApplicationStatus": i === 0 && formRedux && formRedux.loanCreate && formRedux.loanCreate.ApplicantDetails.ApplicantModel[0].ApplicationStatus || "None",
        "Status": i === 0 && formRedux && formRedux.loanCreate && formRedux.loanCreate.ApplicantDetails.ApplicantModel[0].Status || "Draft",
        "ApplicantGuid": i === 0 && formRedux && formRedux.loanCreate && formRedux.loanCreate.ApplicantDetails.ApplicantModel[0].ApplicantGuid || '00000000-0000-0000-0000-000000000000',
        "RefID": i === 0 && formRedux && formRedux.refId ? formRedux.refId : "",
        "NRIC": i === 0 && formRedux && formRedux.myInfo.uinfin ? formRedux.myInfo.uinfin.value : '',
        "IdIssueCountry": "",
        "PassportNo": i === 0 && formLanding && formLanding.personalInformation && formLanding.personalInformation.passportNumber ? formLanding.personalInformation.passportNumber : '',
        "PassportExpiryDate": '',
        "FINExpiryDate": i === 0 && formRedux && formRedux.myInfo && formRedux.myInfo.nationality && formRedux.myInfo.nationality.code !== REGION.SG && formRedux && formRedux.myInfo.passexpirydate ? formRedux.myInfo.passexpirydate.value : '',
        "ApplicantType": i === 0  ? "Main" : "Joint",
        "DateofBirth": i === 0 && formRedux && formRedux.myInfo.dob ? formRedux.myInfo.dob.value : '',
        "Salutation": "",
        "NameinNRIC": i === 0 ? formRedux && formRedux.myInfo.name ? formRedux.myInfo.name.value : '' : accountInformation && accountInformation[`name${i + 1}`] ? accountInformation[`name${i + 1}`] : '',
        "PreferredName": "",
        "HanyuPinyinName": i === 0 && formRedux && formRedux.myInfo.hanyupinyinname ? formRedux.myInfo.hanyupinyinname.value : '',
        "AliasName": i === 0 && formRedux && formRedux.myInfo.aliasname ? formRedux.myInfo.aliasname.value : '',
        "HanyuPinyinAliasName": i === 0 && formRedux && formRedux.myInfo.hanyupinyinaliasname ? formRedux.myInfo.hanyupinyinaliasname.value : '',
        "MarriedName": i === 0 && formRedux && formRedux.myInfo.marriedname ? formRedux.myInfo.marriedname.value : '',
        "MobileNumber": i === 0 ? formLanding && formLanding.personalInformation && formLanding.personalInformation.phoneNumber ? `${LIST_COUNTRIES_CODE.find(c => c.name === formLanding.personalInformation.countryPhoneNumber).value}${formLanding.personalInformation.phoneNumber}` : '' : accountInformation ? `${LIST_COUNTRIES_CODE.find(c => c.name === accountInformation[`countryPhoneNumber${i + 1}`]).value}${accountInformation[`phoneNumber${i + 1}`]}` : '',
        "EmailAddress": i === 0 ? formLanding && formLanding.personalInformation ? formLanding.personalInformation.emailAddress : '' : accountInformation && accountInformation[`emailAddress${i + 1}`] ? accountInformation[`emailAddress${i + 1}`] : '',
        "Race": i === 0 && formRedux && formRedux.myInfo.race ? formRedux.myInfo.race.code : '',
        "CountryOfBirth": i === 0 && formRedux && formRedux.myInfo.birthcountry ? formRedux.myInfo.birthcountry.desc : '',
        "NoOfDependentes": 0,
        "HomePhoneNo": "",
        "OptForeStatments": true,
        "OtherVariables": "",
        "IsInvitedId": false,
        "IsBorrower": i === 0 ? false : true,
        "PreferredLanguage": "English",
        "RelationshipCode": "",
        "RelationshipDesc": "",
        "Others": "",
        "AcceptanceStatus": "None",
        "MyinfoFlow": true,
        "CreatedBy": "",
        "UpdatedBy": "",
        "CreatedDate": i === 0 ? moment().format() : '',
        "UpdatedDate": i === 0 ? moment().format() : '',
        "IsActive": i === 0 && formRedux && formRedux.myInfo && formRedux.myInfo.IsActive ? formRedux.myInfo.IsActive : true,
        "CustIDTypeCode": i === 0  ? formRedux && formRedux.myInfo.residentialstatus && (formRedux.myInfo.residentialstatus.code === 'C' || formRedux.myInfo.residentialstatus.code === 'P')  ? "IC" : "PP" : '',
        "CustIDTypeDesc": i === 0 ? formRedux && formRedux.myInfo.residentialstatus && (formRedux.myInfo.residentialstatus.code === 'C' || formRedux.myInfo.residentialstatus.code === 'P') ? "NRIC" : "PASSPORT" : '',
        "ResidentStatusCode":  i === 0 && formRedux && formRedux.myInfo && formRedux.myInfo.residentialstatus && formRedux.myInfo.residentialstatus.code || '',
        "ResidentStatusDesc": i === 0 && formRedux && formRedux.myInfo && formRedux.myInfo.residentialstatus ? formRedux.myInfo.residentialstatus.desc : '',
        "PassTypeCode": i === 0 && formRedux && formRedux.myInfo && formRedux.myInfo.passtype ? formRedux.myInfo.passtype.code : '',
        "PassTypeDesc": i === 0 && formRedux && formRedux.myInfo && formRedux.myInfo.passtype && formRedux.myInfo.passtype.desc || '',
        "GenderCode": i === 0 && formRedux && formRedux.myInfo.sex ? formRedux.myInfo.sex.code : '',
        "GenderDesc": i === 0 && formRedux && formRedux.myInfo.sex ? formRedux.myInfo.sex.desc : '',
        "MaritalStatusCode": "",
        "MaritalStatusDesc": "",
        "EducationLevelCode": "",
        "EducationLevelDesc": "",
        "ResidentialTypeCode": "",
        "ResidentialTypeDesc": "",
        "NationalityCode": i === 0 && formRedux && formRedux.myInfo && formRedux.myInfo.nationality && formRedux.myInfo.nationality.code ? formRedux.myInfo.nationality.code : '',
        "NationalityDesc": i === 0 && formRedux && formRedux.myInfo && formRedux.myInfo.nationality && formRedux.myInfo.nationality.desc ? formRedux.myInfo.nationality.desc  : '',
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
        "Addresses": i === 0  ? {
          "AddressModel": [
            {
              "BlockNo": formRedux && formRedux.myInfo.regadd && formRedux.myInfo.regadd.block ? formRedux.myInfo.regadd.block.value : '',
              "Street": formRedux && formRedux.myInfo.regadd && formRedux.myInfo.regadd.street ? formRedux.myInfo.regadd.street.value : '',
              "Floor": formRedux && formRedux.myInfo.regadd && formRedux.myInfo.regadd.floor ? formRedux.myInfo.regadd.floor.value : '',
              "Unit": formRedux && formRedux.myInfo.regadd && formRedux.myInfo.regadd.unit ? formRedux.myInfo.regadd.unit.value : '',
              "PostalCode": formRedux && formRedux.myInfo.regadd && formRedux.myInfo.regadd.postal ? formRedux.myInfo.regadd.postal.value : '',
              "BuildingName": formRedux && formRedux.myInfo.regadd && formRedux.myInfo.regadd.building ? formRedux.myInfo.regadd.building.value : '',
              "Country": formRedux && formRedux.myInfo.regadd && formRedux.myInfo.regadd.country ? formRedux.myInfo.regadd.country.code : '',
              "CreatedBy": "",
              "UpdatedBy": "",
              "AddressLine1": formRedux && formRedux.myInfo.regadd && formRedux && formRedux.myInfo.regadd.line1 ? formRedux && formRedux.myInfo.regadd.line1.value : '',
              "AddressLine2": formRedux && formRedux.myInfo.regadd && formRedux && formRedux.myInfo.regadd.line2 ? formRedux && formRedux.myInfo.regadd.line2.value : '',
              "AddressLine3":"",
              "AddressLine4":"",
              "CreatedDate": moment().format(),
              "UpdatedDate": moment().format(),
              "IsActive": true,
              "AddressTypeCode": "H",
              "AddressTypeDesc": "Resident"
            },
          ].concat(i === 0 ? formatDataAddressHdbownership(formatDataHdbownership(formRedux)) : [])
        } : {},
        "HasSacData": false,
        "NoaList":  i === 0 && formRedux && formRedux.myInfo.noa && formRedux.myInfo.noa.amount ? {
          "NOAModel": [{
              "Amount": formRedux && formRedux.myInfo.noa && formRedux.myInfo.noa.amount ? formRedux.myInfo.noa.amount.value : '',
              "YearOfAssessment": formRedux && formRedux.myInfo.noa && formRedux.myInfo.noa.yearofassessment ? formRedux.myInfo.noa.yearofassessment.value : '',
              "Employment": formRedux && formRedux.myInfo.noa && formRedux.myInfo.noa.employment ? formRedux.myInfo.noa.employment.value : '',
              "Trade": formRedux && formRedux.myInfo.noa && formRedux.myInfo.noa.trade ? formRedux.myInfo.noa.trade.value : '',
              "Rent": formRedux && formRedux.myInfo.noa && formRedux.myInfo.noa.rent ? formRedux.myInfo.noa.rent.value : '',
              "InterestRate": formRedux && formRedux.myInfo.noa && formRedux.myInfo.noa.interest ? formRedux.myInfo.noa.interest.value : '',
              "TaxClearence": formRedux && formRedux.myInfo.noa && formRedux.myInfo.noa.taxclearance ? formRedux.myInfo.noa.taxclearance.value : '',
              "Category": formRedux && formRedux.myInfo.noa && formRedux.myInfo.noa.category ? formRedux.myInfo.noa.category.value : ''
            }
          ]
        } : {},
        "CPFContributionsList": i === 0 && formRedux && formRedux.myInfo.cpfcontributions && formRedux.myInfo.cpfcontributions.history ? {
          "CPFContributionModel": handleFormatCPFContributionsList(formRedux && formRedux.myInfo.cpfcontributions && formRedux.myInfo.cpfcontributions.history)
        } : {},
        "HDBOwnershipDetails": i === 0 && formRedux && formRedux.myInfo.hdbownership ? {
          "HDBOwnershipModel": mapDataHdbOwner()
        } : {},
        "CPFWithdrawDetails": i === 0 && mapCpfWithDrawDetail(formRedux).length > 0 ? {
          "CPFWithdrawModel": mapCpfWithDrawDetail(formRedux)
          } : {}
        }
      )
    }
    return data;
   }

  /**
   * Handle next page
   */
  const handleNextPage = () => {
    const formLanding = formRedux.form;
    const countryText = formLanding && formLanding.propertyInformation && formLanding.propertyInformation.country;
    const codeCountry = LIST_COUNTRIES.find(x => x.value === countryText);
    const newArray = formRedux.dataForm.ApplicantDetails.ApplicantModel.length > 1 ? _.reject(formRedux.dataForm.ApplicantDetails.ApplicantModel, function(e) {
      return e.IsBorrower !== true;
    }) : []
    if (stateTermCondition.isChecked || LIST_CHECKBOX_ACCEPT[0].check) {
      const dataSubmit = {
        ...formRedux.dataForm,
				"SystemRefNo": formRedux && formRedux.loanCreate && formRedux.loanCreate.SystemRefNo,
				"Status": formRedux && formRedux.loanCreate && formRedux.loanCreate.Status,
				"ApplicationGuid": formRedux && formRedux.loanCreate.ApplicationGuid || '',
        "BlockNo": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.blockNumber ? formLanding.propertyInformation.blockNumber : '',
        "Street": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.streetName ? formLanding.propertyInformation.streetName : '',
        "Floor": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.floor ? formLanding.propertyInformation.floor : '',
        "Unit": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.unit ? formLanding.propertyInformation.unit : '',
        "PostalCode": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.postalCode ? formLanding.propertyInformation.postalCode : '',
        "BuildingName": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.stateCity ? formLanding.propertyInformation.stateCity : '',
        "Country": codeCountry && codeCountry.value,
        "AccountMapping": {
          "AccountModel": mapDataAccount().length > 0 ? mapDataAccount() : [
            {
              "IsPrePayment": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.partialPrepayment[0])}`,
              "IsRepricing": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.repricing[0])}`,
              "IsLengtheningTenure": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0])}`,
              "IsShorteningTenure": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0])}`,
              "IsDDA": `${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.ddaAccount[0])}`,
              "IsFullRedemption":`${_.includes(formLanding &&  formLanding.formLanding && formLanding.formLanding.listChecked, LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0])}`,
            }
          ],
        },
        "PrePaymentLoanDetails": mapDataPrePayment().length > 0 ? {
          "PrePaymentModel": mapDataPrePayment()
        } : {},
        "ChangeInLoanTenure": mapDataLengtheningShortening().length > 0 ? {
          "ChangeInTenureModel": mapDataLengtheningShortening()
        } : {},
        "DDALoanDetails": formLanding && formLanding.noneRepricingRequests && formLanding.noneRepricingRequests.newOCBCAccountNumber ? {
          "DDAModel":  [{
              // "CurrentDDAAccountNo": formDataRepricing && formDataRepricing.currentDebitingAccountNumber ? formDataRepricing.currentDebitingAccountNumber : '',
              "NewDDAAccountNo": formLanding && formLanding.noneRepricingRequests && formLanding.noneRepricingRequests.newOCBCAccountNumber ? formLanding.noneRepricingRequests.newOCBCAccountNumber : ''
            }
          ]
        } : {},
        "ApplicantDetails": {
          "ApplicantModel": mapDataBorrower() && mapDataBorrower().length > 0 ? mapDataBorrower() : []
				}
      }
      handleSubmitForm(dataSubmit)
    } else {
      setKey(Date.now());
    }
  }
    /**
    * Retrieves data from Store
    */
  const formReduxData = useSelector((state: any) => state.form);
  const conditionReduxData = formReduxData && formReduxData.form;
  /**
   * Function handle prev
   */
  const cx = classnames.bind(styles);
  const handlePrev = () => {
    const formLanding = formReduxData.form;
    if (
      (LIST_REQUEST_REPRICING.repricing[0] ===
        formLanding.formLanding.listChecked[0] && formLanding.formLanding.listChecked.length === 1)
    ) {
      history.push(URL_SINGPASS_FLOW.accountInformation);
    } else if (
      LIST_REQUEST_REPRICING.repricing[0] ===
        formLanding.formLanding.listChecked[0] &&
      formLanding.formLanding.purpose !== LIST_SELECT_PURPOSE[1].value &&
      formLanding.formLanding.listChecked.length === 1
    ) {
      history.push(URL_SINGPASS_FLOW.repricingRequest);
    } else {
      history.push(URL_SINGPASS_FLOW.nonRepricingRequest);
    }
  };

  // render button
  const renderButton = () => {
    return (
      <Button backgroundClass="bgGunmetalBluegrey" onClick={() => handleNextPage()}>
        Submit
        <ArrowForwardIcon className={cx("arrow", "mrl-dt-5")} />
      </Button>
    )
   }
    return <>
          {/* Full redemption of all loans request */}
          {_.isEqual(conditionReduxData && conditionReduxData.formLanding && formReduxData.form.formLanding.listChecked,["Full redemption of loan"]) &&
           <SectionWrapper className={"max-width-common-right br-5 p-30 mt-dt-10"}>
            <div className={"block-form-end"}>
              <div className={"max-width-common-right d-flex space-between"}>
                <h3 className={"bold"}>
                Full redemption of all loans request
                </h3>
                <div
                  className={cx('flexBtwSpace', 'btnBackSection', 'info-icon-wrapper')}
                  onClick={() => {history.push(URL_SINGPASS_FLOW.nonRepricingRequest);  handleEditing()}}
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
                xs={12}
                id="partialPrepaymentRequest"
                className={"mb-dt-60"}
              >
                <Grid item lg={12} md={12} sm={12} xs={12} id="info-payment" className={"d-flex flex-wrap"}>

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
                      content={formReduxData.form.noneRepricingRequests.reasonForFullRedemption}
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
                      content={formReduxData.form.noneRepricingRequests.lawFirmAppointment}
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
                      formReduxData.form.noneRepricingRequests.businessName && (
                        <RowInfo
                        label="Law firm you want to appoint"
                        content={formReduxData.form.noneRepricingRequests.businessName ? formReduxData.form.noneRepricingRequests.businessName : ""}
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
                      content={formReduxData.form.noneRepricingRequests.prepaymentInstructions}
                    />
                  </Grid>
                  {/* full with yes and sale of property */}
                  {(formReduxData.form.formLanding.lockIn === YES && formReduxData.form.noneRepricingRequests.reasonForFullRedemption === LIST_SELECT_FULL_REDEMPTION[0].value) && 
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
                  {(formReduxData.form.formLanding.lockIn === NO && formReduxData.form.noneRepricingRequests.reasonForFullRedemption === LIST_SELECT_FULL_REDEMPTION[1].value) && 
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
                  {(formReduxData.form.formLanding.lockIn === YES && (formReduxData.form.noneRepricingRequests.reasonForFullRedemption === LIST_SELECT_FULL_REDEMPTION[1].value || formReduxData.form.noneRepricingRequests.reasonForFullRedemption === LIST_SELECT_FULL_REDEMPTION[2].value)) && 
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
                  {(formReduxData.form.formLanding.lockIn === NO && (formReduxData.form.noneRepricingRequests.reasonForFullRedemption === LIST_SELECT_FULL_REDEMPTION[0].value || formReduxData.form.noneRepricingRequests.reasonForFullRedemption === LIST_SELECT_FULL_REDEMPTION[2].value)) && 
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
          </SectionWrapper>
          }
         
          {/* Lengthening of loan tenure request  and  Shortening of loan tenure */}
          {formReduxData.form.noneRepricingRequests && formReduxData.form.noneRepricingRequests.dataAccount && formReduxData.form.noneRepricingRequests.dataAccount.dataAccountLengthening.length > 0  && 
          <SectionWrapper className={"max-width-common-right br-5 p-30 mt-dt-10"}>
            <div className={"block-form-end"}>
              <div className={"max-width-common-right d-flex space-between"}>
                <h3 className={"bold"}>{_.includes(formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0])  ? "Shortening of loan tenure" : "Lengthening of loan tenure request"}</h3>
                <div
                  className={cx('flexBtwSpace', 'btnBackSection', 'info-icon-wrapper')}
                  onClick={() => {history.push(URL_SINGPASS_FLOW.nonRepricingRequest);  handleEditing()}}
                  aria-hidden="true"
                >
                  <img src={edit} className={cx('isMr10', 'iconEdit', 'icon-black')} alt="edit" />
                  <img src={editHover} className={cx('isMr10', 'iconEdit', 'icon-blue')} alt="edit-hover" />
                  {' '}
                  {EDIT}
                </div>
              </div>
                {formReduxData.form.noneRepricingRequests.dataAccount.dataAccountLengthening.map((item: any,idx: number) => (
                  <React.Fragment key={idx}>
                    {
                      item && (
                        <Grid
                          item
                          xs={12}
                          id="partialPrepaymentRequest"
                          className={`mt-dt-30 ${idx === formReduxData.form.noneRepricingRequests.dataAccount.dataAccountLengthening.length - 1 ? formReduxData.form.rePricingRequest === undefined && formReduxData.form.noneRepricingRequests.listDocument !== undefined ? 'mb-dt-40' : '' : 'mb-dt-60'}`}
                        >
                          <Grid xs={12} item id="account-info">
                            <RowInfo label={!formReduxData.form.noneRepricingRequests.loanTenure2 ? "Loan account number" : `Loan account number`} content={item} />
                          </Grid>
                          <Grid xs={12} item id="info-payment" className={"d-flex flex-wrap mt-dt-30"}>
                            <RowInfo
                              label={`${_.includes(conditionReduxData && conditionReduxData.formLanding && formReduxData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0]) ? 'How many years do you wish to shorten your tenure to?' : 'How many years do you wish to lengthen your tenure to?'}`}
                              content={formReduxData.form.noneRepricingRequests[`loanTenure${idx+1}`] + ` ${Number(formReduxData.form.noneRepricingRequests[`loanTenure${idx+1}`]) === 1 ? 'year' : 'years'}`}
                            />
                        </Grid>
                      </Grid>
                      )
                    }
                  </React.Fragment>
              ))}
              <Grid
                item
                xs={12}
                id="partialPrepaymentRequest"
                className={`mt-dt-30`}
              >
                <Grid xs={12} item id="account-info">
                  <RowInfo label={"Fees"} content={"Processing fee of $500"} />
                </Grid>
              </Grid>
              {
                formReduxData.form && formReduxData.form.rePricingRequest === undefined && formReduxData.form.noneRepricingRequests.listDocument !== undefined && (
                  <div className={"mt-dt-30 title-text-small-bold"}>
                    Uploaded documents
                  </div>
                )
              }
              {
                <Grid container item lg={12} md={12} sm={12} xs={12} id="repricingRequest" className={formReduxData.form.rePricingRequest === undefined && formReduxData.form.noneRepricingRequests.listDocument !== undefined  ? 'mt-dt-20' : ''}>
                  <>
                    {
                      formReduxData.form && formReduxData.form.rePricingRequest === undefined  && formReduxData.form.formLanding.documentRequired.map((itemLabel: any, index: number) => (
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
                        {formReduxData.form.noneRepricingRequests &&
                          formReduxData.form.noneRepricingRequests.listDocument[index].map((item: any, idx: number) => (
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
               </Grid>
            }
            </div>
          </SectionWrapper>
        }
        {/* Change of Direct Debiting Authorisation account request */}
        {formReduxData.form.noneRepricingRequests && (formReduxData.form.noneRepricingRequests.newOCBCAccountNumber !== undefined && formReduxData.form.noneRepricingRequests.newOCBCAccountNumber !== '')  && 
          <SectionWrapper className={"max-width-common-right br-5 p-30 mt-dt-10"}>
            <div className={"block-form-end"}>
              <div className={"max-width-common-right d-flex space-between"} onClick={() => {history.push(URL_SINGPASS_FLOW.nonRepricingRequest); handleEditing()}}>
                <h3 className={"bold"}>
                Change of Debiting account request
                </h3>
                <div
                  className={cx('flexBtwSpace', 'btnBackSection', 'info-icon-wrapper')}
                  onClick={() => {history.push(URL_SINGPASS_FLOW.nonRepricingRequest);  handleEditing()}}
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
                xs={12}
                id="partialPrepaymentRequest"
                className={"mb-dt-60"}
              >
                <Grid xs={12} item id="info-payment" className={"d-flex flex-wrap"}>

                  {/* <Grid
                    className={"mr-dt-80 mt-dt-30"}
                    item
                    lg={3}
                    md={3}
                    sm={12}
                    xs={12}
                  >
                    <RowInfo
                      label="Account that you currently use"
                      content={formReduxData.form.noneRepricingRequests.currentDebitingAccountNumber}
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
                      content={formReduxData.form.noneRepricingRequests.newOCBCAccountNumber}
                    />
                  </Grid>

                </Grid>
              </Grid>
            </div>
          </SectionWrapper>
        }

      {/* Accept rules from */}
      <div className={"submit-rules-box mt-dt-30"}>
        <Grid item xs={12} id="acceptAndSubmit" className={"d-flex"}>
          <div className={cx('checkbox')}>
            <Checkbox list={LIST_CHECKBOX_ACCEPT} name="Accept rules" getValue={(value: string) => {
              handleCheckCondition();
              setKey(null);
            }} />
          </div>
           <ul id="contentRules" className="custom-list-style-number mrl-dt-15">
            <>
              {
                formReduxData && formReduxData.dataTnc.length > 0 && formReduxData.dataTnc.map((item: any, index: number) => {
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
                            { _.includes(dataFormat, 'www.cpf.gov.sg') && dataTncPrepayment[1] && dataTncPrepayment[1]}
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
        {(key !== null) && <div className={cx('error')}>Tick the box to acknowledge</div>}

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
};

export default ReviewMore;
