/***
 *  ACCOUNT INFORMATION
 *    >> child
 *      >> input base
 *      >> section wrapper
 *      >> input mobile
 *      >> button
 *      >> row info
 *      >> select
 *      >> dialog
 */
// import lib
import classnames from "classnames/bind";
import React, { useState, useEffect, useRef, useLayoutEffect, forwardRef, useImperativeHandle } from "react";
import styles from "./AccountInformation.scss";
import { v4 as uuidv4 } from 'uuid';
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getLoanCreate, getTnc, saveFormData, setDataForm } from "@/store/form";
import {
  SectionWrapper,
  Select,
  Dialog,
  InputBase,
  InputNumberMobile,
  RowInfo,
  Button,
  Loading,
} from '@sectionsg/orc';

//import icon
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// import image
import IconAccountInformation from "../../../assets/images/account-information.png";
import myInfo from '../../../assets/images/icon-logo-3.png';
import myInfoBlue from '../../../assets/images/icon-info-blue.svg';
import Error from '../../popup/Error';

// import constant
import { DATA_CARD_CHECKBOX, DATA_REPRICING_LENGTHENING_SHORT, DATA_STATE_LENGTH_PARTIAL, DATA_STATE_LENGTH_SHORT, DATA_STATE_PARTIAL_DDA, DATA_STATE_REPRICING_DDA, DATA_STATE_REPRICING_LENGTHENING, DATA_STATE_REPRICING_LENGTHENING_DDA, DATA_STATE_REPRICING_LENGTHENING_DDA_MIX, DATA_STATE_REPRICING_PARTIAL, DATA_STATE_REPRICING_PARTIAL_DDA, DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA, DATA_STATE_REPRICING_PARTIAL_SHORT_DDA, DATA_STATE_REPRICING_SHORT, DATA_STATE_REPRICING_SHORTENING_DDA, DATA_STATE_REPRICING_SHORT_DDA_MIX, DATA_STATE_REPRICING_SHORT_PARTIAL, ERROR, LIST_ACCOUNT_NUMBER, LIST_BORROWER_NUMBER, LIST_COUNTRIES, LIST_COUNTRIES_CODE, LIST_DATA_TNC, LIST_REQUEST_REPRICING, LIST_SELECT_PURPOSE, NEXT, PERSONAL_INFORMATION_SINGPASS, REGION, REVIEW, URL_SINGPASS_FLOW } from '../../../utils/constants';

// import function
import { preventSpecialCharacters, restrictEmail, formatNameField, scrollToError, restrictOnlyDigital, useComponentDidUpdate, handleFormatCPFContributionsList, formatDataAddressHdbownership, formatDataHdbownership, autoFocus, mapCpfWithDrawDetail } from '../../../utils/utils';

// import interface
import { IAccountInformation } from './AccountInformation.d'

// import content dialog
import LoanAccountNumber from '../../popup/LoanAccountNumber';

import _ from "lodash";
import { createLoanAppMgmt, getTncmgmt } from "@/data-manager/info";
import moment from "moment";
import { adobeErrorInfo } from "@/utils/adobeTracking";


const cx = classnames.bind(styles);

const AccountInformation: React.FC<IAccountInformation.IProps> = forwardRef(({ checkMatchOptionNonRepricing, checkMatchOptionNonRepricingAndPricingInvestment, children }, ref) => {
  const [dialogId, setDialogId] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [key, setKey] = useState<number>(null);
  const [loading, setLoading] = useState(false);
  const [renderData, setRenderData] = useState<boolean>(false)
  const [categoryDialog, setCategoryDialog] = useState<string>('');
  const [dataError, setDataError] = useState();
  const formRedux = useSelector((state: any) => state.form);
  const dataListChecked = formRedux && formRedux.form &&  formRedux.form.formLanding && formRedux.form.formLanding.listChecked ? formRedux.form.formLanding.listChecked : [];
  const personalInformation = formRedux && formRedux.form && formRedux.form.personalInformation  ? formRedux.form.personalInformation : {}
  // get data from redux store
  const formLandingData = useSelector((state: any) => state.form);
  const [accountInformation, setAccountInformation] = useState({
    accountNumber: '',
    borrowerNumber: '',
    countryPhoneNumber1: formLandingData && formLandingData.form && formLandingData.form.personalInformation && formLandingData.form.personalInformation.countryPhoneNumber  || PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber,
    phoneNumber1: formLandingData && formLandingData.form && formLandingData.form.personalInformation && formLandingData.form.personalInformation.phoneNumber,
    emailAddress1: formLandingData && formLandingData.form && formLandingData.form.personalInformation && formLandingData.form.personalInformation.emailAddress
  })

  /**
   * Render data
   */
  const renderAttributeData = () => {
    let object: any = {};
    for(var i = 0; i < 4; i++) {
      object[`accountNumber${i + 1}`] = '';
      object[`errorAccountNumber${i + 1}`] = false;
      object[`emailAddress${i + 1}`] = i === 0 && (formLandingData && formLandingData.form && formLandingData.form.personalInformation && formLandingData.form.personalInformation.emailAddress);
      object[`errorEmailAddress${i + 1}`] = false;
      object[`phoneNumber${i + 1}`] = i === 0 && (formLandingData && formLandingData.form && formLandingData.form.personalInformation && formLandingData.form.personalInformation.phoneNumber);
      object[`countryPhoneNumber${i + 1}`] = i === 0 ? formLandingData && formLandingData.form && formLandingData.form.personalInformation && formLandingData.form.personalInformation.countryPhoneNumber : PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber;
      object[`errorPhoneNumber${i + 1}`] = false;
      object[`name${i + 1}`] = '';
      object[`errorName${i + 1}`] = false;
    }
    setAccountInformation({
      ...accountInformation,
      ...object
    })
  }

  /**
   * reset data Account
   */
  const resetDataAccount = () => {
    const numberAccount = accountInformation && Number(accountInformation.accountNumber);
    let object: any = {};
    for(var i = 0; i < 4; i++) {
      if (i < numberAccount && !_.isEmpty(accountInformation[`accountNumber${i + 1}`])) {
        object[`accountNumber${i + 1}`] = accountInformation[`accountNumber${i + 1}`]
      } else {
        object[`accountNumber${i + 1}`] = '';
      }
      object[`errorAccountNumber${i + 1}`] = false;
    }
    setAccountInformation({
      ...accountInformation,
      ...object
    })
  }

  /**
   * reset data Borrower
   */
   const resetDataBorrower = () => {
    let object: any = {};
    for(var i = 0; i < 4; i++) {
      object[`emailAddress${i + 1}`] = i === 0 ? (formLandingData && formLandingData.form && formLandingData.form.personalInformation && formLandingData.form.personalInformation.emailAddress) : i < formatBorrowerNumber ? accountInformation[`emailAddress${i + 1}`] : '';
      object[`errorEmailAddress${i + 1}`] = false;
      object[`phoneNumber${i + 1}`] = i === 0 ? (formLandingData && formLandingData.form && formLandingData.form.personalInformation && formLandingData.form.personalInformation.phoneNumber) : i < formatBorrowerNumber ? accountInformation[`phoneNumber${i + 1}`] : '';
      object[`countryPhoneNumber${i + 1}`] = i === 0 ? formLandingData && formLandingData.form && formLandingData.form.personalInformation && formLandingData.form.personalInformation.countryPhoneNumber : PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber;
      object[`errorPhoneNumber${i + 1}`] = false;
      object[`name${i + 1}`] = i < formatBorrowerNumber ? accountInformation[`name${i + 1}`] : '';
      object[`errorName${i + 1}`] = false;
    }
    setAccountInformation({
      ...accountInformation,
      ...object
    })
  }

  /**
   * Handle map data account
   */
   const mapDataAccount = () => {
    const lengthDataAccount = accountInformation && Number(accountInformation.accountNumber)
    const data = [];
    for (var i = 0; i < lengthDataAccount; i++) {
      data.push({
        "LoanAccountNo": accountInformation[`accountNumber${i + 1}`],
        "IsPrePayment": `${_.includes(formLandingData && formLandingData.form && formLandingData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.partialPrepayment[0])}`,
        "IsRepricing": `${_.includes(formLandingData && formLandingData.form && formLandingData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.repricing[0])}`,
        "IsLengtheningTenure": `${_.includes(formLandingData && formLandingData.form && formLandingData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0])}`,
        "IsShorteningTenure": `${_.includes(formLandingData && formLandingData.form && formLandingData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0])}`,
        "IsDDA": `${_.includes(formLandingData && formLandingData.form && formLandingData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.ddaAccount[0])}`,
        "IsFullRedemption":`${_.includes(formLandingData && formLandingData.form && formLandingData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0])}`,
      })
    }
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

  // const mapCpfWithDrawDetail = (formRedux: any) => {
  //   const data = [];
  //   const dataCpfWithDrawDetail =  formRedux.myInfo && formRedux.myInfo.cpfhousingwithdrawal && !_.isEmpty(formRedux.myInfo.cpfhousingwithdrawal.withdrawaldetails) && formRedux.myInfo.cpfhousingwithdrawal.withdrawaldetails ;
  //   if (dataCpfWithDrawDetail.length > 0) {
  //     for(var i = 0; i < dataCpfWithDrawDetail.length; i++ ) {
  //       data.push({
  //         "BlockNo": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].address && dataCpfWithDrawDetail[i].address.block && dataCpfWithDrawDetail[i].address.block.value || '',
  //         "Street": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].address && dataCpfWithDrawDetail[i].address.street && dataCpfWithDrawDetail[i].address.street.value || '',
  //         "Floor": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].address && dataCpfWithDrawDetail[i].address.floor && dataCpfWithDrawDetail[i].address.floor.value || '',
  //         "Unit": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].address && dataCpfWithDrawDetail[i].address.unit && dataCpfWithDrawDetail[i].address.unit.value || '',
  //         "PostalCode": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].address && dataCpfWithDrawDetail[i].address.postal && dataCpfWithDrawDetail[i].address.postal.value || '',
  //         "BuildingName": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].address && dataCpfWithDrawDetail[i].address.building && dataCpfWithDrawDetail[i].address.building.value || '',
  //         "Country": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].address && dataCpfWithDrawDetail[i].address.country && dataCpfWithDrawDetail[i].address.country.code || '',
  //         "AccruedInterestAmt": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].accruedinterestamt && dataCpfWithDrawDetail[i].accruedinterestamt.value || 0,
  //         "PrincipalWithdrawalAmt": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].principalwithdrawalamt && dataCpfWithDrawDetail[i].principalwithdrawalamt.value || 0,
  //         "TotalCPFAllowedForProperty": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].totalamountofcpfallowedforproperty && dataCpfWithDrawDetail[i].totalamountofcpfallowedforproperty.value || 0,
  //         // "MonthlyInstalmentAmt": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].monthlyinstalmentamt && dataCpfWithDrawDetail[i].monthlyinstalmentamt.value || 0,
  //         "CreatedBy": "",
  //         "UpdatedBy": "",
  //         "CreatedDate": moment().format(),
  //         "UpdatedDate": moment().format(),
  //         "IsActive": true
  //     })
  //     }
  //   }
  //   return data;
  // }

  const mapDataLengtheningShortening = () => {
    const lengthDataAccount = accountInformation && Number(accountInformation.accountNumber)
    const data = [];
    for (var i = 0; i < lengthDataAccount; i++) {
      data.push({
        "AccountId": accountInformation[`accountNumber${i + 1}`],
            "AdjustmentType": _.includes(formLandingData && formLandingData.form && formLandingData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]) ? "LengtheningLoanTenure" : "ShorterLoanTenure",
            "OutstandingLoanAmount": 0,
            "LoanCurrency": "SGD",
            "InterestRate": 0,
            "LockInEndDate": "2021-12-24T01:38:57.014Z",
            "CurrentMonthlyInstAmount": 0,
            "CurrentMonthlyInstCurrency": "",
            "ProposedRevisedMonthlyInstalment": 0,
            "CorrespondingLoanTenor": 0,
            "ProposedRevisedLoanTenor":  0,
            "CorrespondingMonthlyInstalment": 0,
            "ApplicableFees": 0
      })
    }
    return data;
  }

  const countBorrower = () => {
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
    const lengthDataBorrower = 1;
    const formLanding = formLandingData.form;
    const countryText = formLanding && formLanding.propertyInformation && formLanding.propertyInformation.country;
    const codeCountry = LIST_COUNTRIES.find(x => x.value === countryText);
    const data = [];
    for (var i = 0; i < lengthDataBorrower; i++) {
      data.push(
        {
        "RefID": i === 0 ? formRedux && formRedux.refId : '',
        "NRIC": i === 0 && formRedux && formRedux.myInfo.uinfin ? formRedux.myInfo.uinfin.value : '',
        "IdIssueCountry": "",
        "PassportNo": i === 0 && formLanding && formLanding.personalInformation && formLanding.personalInformation.passportNumber ? formLanding.personalInformation.passportNumber : '',
        "PassportExpiryDate": '',
        "FINExpiryDate": i === 0 && formRedux && formRedux.myInfo && formRedux.myInfo.nationality && formRedux.myInfo.nationality.code !== REGION.SG && formRedux && formRedux.myInfo.passexpirydate ? formRedux.myInfo.passexpirydate.value : '',
        "ApplicantType": i === 0  ? "Main" : "Joint",
        "DateofBirth": i === 0 && formRedux && formRedux.myInfo.dob ? formRedux.myInfo.dob.value : '',
        "Salutation": "",
        "NameinNRIC": i === 0 && formRedux && formRedux.myInfo.name ? formRedux.myInfo.name.value : '',
        "PreferredName": "",
        "HanyuPinyinName": i === 0 && formRedux && formRedux.myInfo.hanyupinyinname ? formRedux.myInfo.hanyupinyinname.value : '',
        "AliasName": i === 0 && formRedux && formRedux.myInfo.aliasname ? formRedux.myInfo.aliasname.value : '',
        "HanyuPinyinAliasName": i === 0 && formRedux && formRedux.myInfo.hanyupinyinaliasname ? formRedux.myInfo.hanyupinyinaliasname.value : '',
        "MarriedName": i === 0 && formRedux && formRedux.myInfo.marriedname ? formRedux.myInfo.marriedname.value : '',
        "MobileNumber": i === 0 ? formLanding && formLanding.personalInformation && formLanding.personalInformation.phoneNumber ? `${LIST_COUNTRIES_CODE.find(c => c.name === formLanding.personalInformation.countryPhoneNumber).value}${formLanding.personalInformation.phoneNumber}` : '' : accountInformation ? `${LIST_COUNTRIES_CODE.find(c => c.name === accountInformation[`countryPhoneNumber${i + 1}`]).value}${accountInformation[`phoneNumber${i + 1}`]}` : '',
        "EmailAddress": accountInformation && accountInformation[`emailAddress${i + 1}`] ? accountInformation[`emailAddress${i + 1}`] : '',
        "Race": i === 0 && formRedux && formRedux.myInfo.race ? formRedux.myInfo.race.code : '',
        "CountryOfBirth": i === 0 && formRedux && formRedux.myInfo.birthcountry ? formRedux.myInfo.birthcountry.desc : '',
        "NoOfDependentes": 0,
        "HomePhoneNo": "",
        "OptForeStatments": true,
        "OtherVariables": "",
        "ApplicationStatus": "None",
        "Status": "Draft",
        "ApplicantGuid": "00000000-0000-0000-0000-000000000000",
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
          ].concat(i === 0 ? formatDataAddressHdbownership(formatDataHdbownership(formLandingData)) : [])
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
   * Render more accountInformation attribute
   */
  useEffect(() => {
    renderAttributeData();
  }, []);
    
  /**
   * Render more accountInformation
   */
  useEffect(() => {
    if (!renderData) {
      resetDataAccount();
      setKey(null);
    }
  }, [accountInformation.accountNumber]);

  /**
   * Render more BorrowerInformation
   */
   useEffect(() => {
    if (!renderData) {
      resetDataBorrower();
      setKey(null);
    }
  }, [accountInformation.borrowerNumber]);
  
  /**
   * Function open dialog
   */
  const openDialog = (value: string) => {
    setDialogId(true);
    setCategoryDialog(value)
  };

  /**
   * Function close dialog
   */
  const closeDialog = () => {
    setDialogId(false);
  };

  /**
   * function get accountInformation attribute
   * @param name 
   * @param value 
   * @param error 
   * @returns {object}
   */
  const getAccountInformation = (name: string, value: string, error: string) => setAccountInformation({
    ...accountInformation,
    [name]: value,
    [`error${formatNameField(name)}`]: error !== '',
  });

  // format borrower number
  const formatBorrowerNumber = accountInformation.borrowerNumber === LIST_BORROWER_NUMBER[0].value ? 1 : Number(accountInformation.borrowerNumber.slice(0, 1))

  /**
   * Validate section account number
   * @returns {Boolean}
   */
  const validateAccountNumber = () => {
    let validate: boolean[] = [];
    for (var i = 0; i < Number(accountInformation.accountNumber); i ++) {
      let validateItem = !!(accountInformation[`accountNumber${i + 1}`] && !accountInformation[`errorAccountNumber${i + 1}`])
      validate.push(validateItem)
    }
    return !validate.includes(false);
  }

  /**
   * Validate section borrower number
   * @returns {Boolean}
   */
  const validateBorrowerNumber = () => {
    let validate: boolean[] = [];
    for (var i = 0; i < formatBorrowerNumber; i ++) {
      const validateName = i === 0 ? true : accountInformation[`name${i + 1}`] && !accountInformation[`errorName${i + 1}`]
      let validateItem = !!(accountInformation[`emailAddress${i + 1}`] && !accountInformation[`errorEmailAddress${i + 1}`] && accountInformation[`phoneNumber${i + 1}`] && !accountInformation[`errorPhoneNumber${i + 1}`] && validateName)
      validate.push(validateItem)
    }
    return !validate.includes(false);
  }

  const saveData = () => {
    const dataForm = {
      ...formLandingData.form,
      accountInformation: accountInformation
    };
    dispatch(saveFormData(dataForm));
  }

  /**
    * Condition show section account number
    */
   const showAccountNumber = formLandingData && formLandingData.form && formLandingData.form.formLanding && formLandingData.form.formLanding.listChecked && (formLandingData.form.formLanding.listChecked.length === 1 && formLandingData.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[1].label
   || formLandingData.form.formLanding.listChecked.length === 1 && formLandingData.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[2].label
   || formLandingData.form.formLanding.listChecked.length === 1 && formLandingData.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[3].label
   || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_LENGTH_PARTIAL))
   || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_LENGTHENING))
  || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_PARTIAL))
  || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORT))
  || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_LENGTH_SHORT))
  || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_LENGTHENING_DDA))
  // || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_DDA))
  || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORTENING_DDA))
  || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORTENING_DDA))
  || formLandingData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_PARTIAL_DDA))
  || formLandingData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA))
  || formLandingData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORT_DDA_MIX))
  || formLandingData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORT_PARTIAL))
  || formLandingData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_LENGTHENING_DDA_MIX))
  || formLandingData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_REPRICING_LENGTHENING_SHORT))
  || formLandingData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_PARTIAL_SHORT_DDA))
  || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_PARTIAL_DDA))
  || formLandingData.form.formLanding.listChecked.length > 2 && _.includes(formLandingData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[0].label)
  )

   /**
    * Condition show section borrower information
    */
   const showBorrowerInformation = formLandingData && formLandingData.form && formLandingData.form.formLanding && formLandingData.form.formLanding.listChecked && (formLandingData.form.formLanding.listChecked.length === 1 && formLandingData.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[0].label
   || formLandingData.form.formLanding.listChecked.length === 1 && formLandingData.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[1].label
   || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_LENGTHENING))
   || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_PARTIAL))
   || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_LENGTHENING_DDA))
   || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_DDA))
   || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORT))
  //  || formLandingData.form.formLanding.listChecked.length === 2 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORTENING_DDA))
   || formLandingData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_PARTIAL_DDA))
   || formLandingData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA))
   || formLandingData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORT_DDA_MIX))
   || formLandingData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_SHORT_PARTIAL))
   || formLandingData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_LENGTHENING_DDA_MIX))
   || formLandingData.form.formLanding.listChecked.length === 3 && _.isEqual(_.sortBy(formLandingData.form.formLanding.listChecked), _.sortBy(DATA_REPRICING_LENGTHENING_SHORT))
   || formLandingData.form.formLanding.listChecked.length > 1 && (_.includes(formLandingData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[0].label) || _.includes(formLandingData.form.formLanding.listChecked, DATA_CARD_CHECKBOX[1].label))
   );
   

   /**
    * Validate Form
    * @returns {Boolean}
    */
  const validateForm = () => {
    let validate = false;
    if (showAccountNumber && showBorrowerInformation) {
      validate = !!(validateAccountNumber() && validateBorrowerNumber() && accountInformation.accountNumber && accountInformation.borrowerNumber);
      return validate;
    }
    else if(showAccountNumber) {
      validate = !!(validateAccountNumber() && accountInformation.accountNumber);
      return validate;
    } else {
      validate = !!(validateBorrowerNumber() && accountInformation.borrowerNumber);
      return validate;
    }
  }

  	/**
   * Handle call api submit
   */
     const handleSubmitForm = async (dataSubmit: any) => {
      const formLanding = formLandingData.form;
      const listChecked = formLanding && formLanding.formLanding && formLanding.formLanding.listChecked ? formLanding.formLanding.listChecked : [];
      const conditionNoPricing = !_.includes(listChecked, DATA_CARD_CHECKBOX[0].label) && !_.includes(listChecked, DATA_CARD_CHECKBOX[4].label)
      if (_.isEmpty(formLandingData.dataForm)) {
        setLoading(true);
        const responseLoansData = await createLoanAppMgmt(dataSubmit, 'NEW');
        if(responseLoansData.LoansAppMgmtResp && responseLoansData.LoansAppMgmtResp.RespBody && responseLoansData.LoansAppMgmtResp.RespBody.Result.length) {
          setLoading(false);
          dispatch(getLoanCreate(responseLoansData.LoansAppMgmtResp.RespBody.Result[0].LoansAppMgmt));
          if (formLanding.isEditing) {
            history.push(URL_SINGPASS_FLOW.review)
          } else {
            if ((LIST_REQUEST_REPRICING.repricing[0] === formLanding.formLanding.listChecked[0] && formLanding.formLanding.listChecked.length === 1)
            ) {
              history.push(URL_SINGPASS_FLOW.review)
            } else if (checkMatchOptionNonRepricing() || checkMatchOptionNonRepricingAndPricingInvestment() || conditionNoPricing) {
              history.push(URL_SINGPASS_FLOW.nonRepricingRequest)
            } else {
              history.push(URL_SINGPASS_FLOW.repricingRequest)
            }
          }
        } else {
          setTimeout(() => {
            setLoading(false);
            adobeErrorInfo(responseLoansData.LoansAppMgmtResp)
            setDataError(responseLoansData.LoansAppMgmtResp.ErrorDetail)
            openDialog(ERROR);
          }, 1500)
        }
      } else {
        if ((LIST_REQUEST_REPRICING.repricing[0] === formLanding.formLanding.listChecked[0] && formLanding.formLanding.listChecked.length === 1)
          ) {
            history.push(URL_SINGPASS_FLOW.review)
          } else if (checkMatchOptionNonRepricing() || checkMatchOptionNonRepricingAndPricingInvestment() || conditionNoPricing) {
            history.push(URL_SINGPASS_FLOW.nonRepricingRequest)
          } else {
            history.push(URL_SINGPASS_FLOW.repricingRequest)
          }
      }
    }
  /**
   * 
   * @returns dataTnc
   */
   const renderDataTnc = () => {
    const isRepricingAndLengthening = _.includes(dataListChecked, LIST_REQUEST_REPRICING.repricing[0]) && _.includes(dataListChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0]);
    const dataTnc = isRepricingAndLengthening ? [LIST_DATA_TNC.fullRedemptionOfAllLoans, LIST_DATA_TNC.repricingandlengtheningOfLoanTenure] : [LIST_DATA_TNC.fullRedemptionOfAllLoans];
    dataListChecked && dataListChecked.map((item: any, index: number) => {
      if (item === LIST_REQUEST_REPRICING.repricing[0] && !isRepricingAndLengthening) {
        dataTnc.push(LIST_DATA_TNC.repricing)
      }
      if (item === LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0] && !isRepricingAndLengthening) {
        dataTnc.push(LIST_DATA_TNC.lengtheningOfLoanTenure)
      }
      if (item === LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0]) {
        dataTnc.push(LIST_DATA_TNC.shorteningOfLoanTenure)
      }
      if (item === LIST_REQUEST_REPRICING.partialPrepayment[0]) {
        dataTnc.push(LIST_DATA_TNC.partialPrepayment)
      }
      if (item === LIST_REQUEST_REPRICING.ddaAccount[0]) {
        dataTnc.push(LIST_DATA_TNC.ddaAccount)
      }
    })
    return dataTnc;
  }


  /**
   * Handle button next
   */
  const handleNext = async () => {
    const formLanding = formLandingData.form;
    const countryText = formLanding && formLanding.propertyInformation && formLanding.propertyInformation.country;
    const codeCountry = LIST_COUNTRIES.find(x => x.value === countryText);
    if (validateForm()) {
      const dataSubmit = {
        "ApplicationReceivedDate": formRedux && formRedux.myInfo && formRedux.myInfo.ApplicationReceivedDate ? formRedux.myInfo.ApplicationReceivedDate : '',
        "SystemRefNo": formRedux.myInfo && formRedux.myInfo.SystemRefNo ? formRedux.myInfo.SystemRefNo : '',
        "ApplicationCategory": formRedux && formRedux.myInfo && formRedux.myInfo.ApplicationCategory ? formRedux.myInfo.ApplicationCategory : "Repricing",
        "Status": "New",
        "BlockNo": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.blockNumber ? formLanding.propertyInformation.blockNumber : '',
        "Street": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.streetName ? formLanding.propertyInformation.streetName : '',
        "Floor": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.floor ? formLanding.propertyInformation.floor : '',
        "Unit": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.unit ? formLanding.propertyInformation.unit : '',
        "PostalCode": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.postalCode ? formLanding.propertyInformation.postalCode : '',
        "BuildingName": formLanding && formLanding.propertyInformation && formLanding.propertyInformation.stateCity ? formLanding.propertyInformation.stateCity : '',
        "Country": codeCountry && codeCountry.value,
        "NeedHelp": formRedux && formRedux.myInfo && formRedux.myInfo.NeedHelp ? formRedux.myInfo.NeedHelp : false,
        "JourneyType": formRedux.myInfo && formRedux.myInfo.JourneyType ? formRedux.myInfo.JourneyType : "SelfServe",
        "ChannelSource": formRedux && formRedux.myInfo && formRedux.myInfo.ChannelSource ? formRedux.myInfo.ChannelSource : "OneAdvisor",
        "SystemDevice": formRedux && formRedux.myInfo && formRedux.myInfo.SystemDevice  ? formRedux.myInfo.SystemDevice : "Chrome",
        "Comments": "",
        "PackageCode": formLanding && formLanding.formLanding && formLanding.formLanding.yourRate ? formLanding.formLanding.yourRate : '',
        "CreatedBy": formRedux && formRedux.myInfo && formRedux.myInfo.CreatedBy ? formRedux.myInfo.CreatedBy : "",
        "UpdatedBy": formRedux && formRedux.myInfo && formRedux.myInfo.UpdatedBy ? formRedux.myInfo.UpdatedBy :  "",
        "CreatedDate": moment().format(),
        "UpdatedDate": moment().format(),
        "IsActive": formRedux && formRedux.myInfo && formRedux.myInfo.IsActive ? formRedux.myInfo.IsActive : true,
        "ApplicationGuid": "00000000-0000-0000-0000-000000000000",
        "LockinMonths": formLanding && formLanding.formLanding && formLanding.formLanding.lockIn ? formLanding.formLanding.lockIn : '',
        "PurposeCode": "",
        "PurposeDesc": formLanding && formLanding.formLanding && formLanding.formLanding.purpose ? formLanding.formLanding.purpose : '',
        "ReasonCode": "",
        "ReasonDesc": "",
        "SacuId": formRedux && formRedux.myInfo && formRedux.myInfo.SacuId ? formRedux.myInfo.SacuId : "00000000-0000-0000-0000-000000000000",
        "AccountMapping": {
          "AccountModel": mapDataAccount().length > 0 ? mapDataAccount() : [
            {
              "IsPrePayment": `${_.includes(formLandingData && formLandingData.form && formLandingData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.partialPrepayment[0])}`,
              "IsRepricing": `${_.includes(formLandingData && formLandingData.form && formLandingData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.repricing[0])}`,
              "IsLengtheningTenure": `${_.includes(formLandingData && formLandingData.form && formLandingData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.lengtheningOfLoanTenure[0])}`,
              "IsShorteningTenure": `${_.includes(formLandingData && formLandingData.form && formLandingData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.shorteningOfLoanTenure[0])}`,
              "IsDDA": `${_.includes(formLandingData && formLandingData.form && formLandingData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.ddaAccount[0])}`,
              "IsFullRedemption":`${_.includes(formLandingData && formLandingData.form && formLandingData.form.formLanding.listChecked, LIST_REQUEST_REPRICING.fullRedemptionOfAllLoans[0])}`,
            }
          ]
        },
        "ChangeInLoanTenure": mapDataLengtheningShortening().length > 0 ? {
          "ChangeInTenureModel": mapDataLengtheningShortening()
        } : {},
        "RepricingDetails": {},
        "PrePaymentLoanDetails": {},
        "DDALoanDetails": {},
        "FullRedemption": {},
        "ApplicantDetails": {
          "ApplicantModel": mapDataBorrower() && mapDataBorrower().length > 0 ? mapDataBorrower() : []
        }
      }
      if (_.isEmpty(formLandingData.dataForm)) {
        setLoading(true);
        const dataTnc = await getTncmgmt(renderDataTnc());
        if (dataTnc && dataTnc.TNCMgmtResp && dataTnc.TNCMgmtResp.RespBody && dataTnc.TNCMgmtResp.RespBody.Result) {
          dispatch(getTnc(dataTnc.TNCMgmtResp.RespBody.Result));
            dispatch(setDataForm(dataSubmit));
            handleSubmitForm(dataSubmit);
            saveData();
          } else {
            setDataError(dataTnc && dataTnc.TNCMgmtResp && dataTnc.TNCMgmtResp.ErrorDetail)
            openDialog(ERROR);
          }
        } else {
          handleSubmitForm(dataSubmit);
          saveData();
        }
    } else {
      setKey(Date.now());
      scrollToError();
    }
  }

  /**
   * Function call back when click on stepper
   */
  useImperativeHandle(ref, () => ({
    validateForm() {
      if (formLandingData.form) {
        if (_.isEmpty(formLandingData.form.accountInformation)) {
          return true;
        }
        return validateAccountNumber() && validateBorrowerNumber();
      } return true;
    },
    handleNextPage() {
      if (formLandingData.form) {
        if (_.isEmpty(formLandingData.form.accountInformation)) {
          return true;
        }
        if (validateAccountNumber() && validateBorrowerNumber()) {
          saveData();
        } else {
          setKey(Date.now());
          scrollToError();
        }
      } return true;
    },
  }));

  /**
   * Function set data
   */
  useEffect(() => {
    const data = formLandingData.form;
    if (!data) return;
    if (data.accountInformation) {
      setRenderData(true);
      setAccountInformation(data.accountInformation);
    }
  }, []);
  
  /**
   * Handle button prev
   */
  const handlePrev = () => {
    history.push(URL_SINGPASS_FLOW.propertyInformation)
  }

  /**
   * Scroll to top
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  /**
   * render UI Button
   * @returns {HTML}
   */
   const renderButton = () => {
    return (
      <Button backgroundClass="bgGunmetalBluegrey" onClick={handleNext}>
        {formLandingData.form && formLandingData.form.isEditing ? <>
            {REVIEW}
            </> : <>
              {NEXT}
            </>
        }
        <ArrowForwardIcon className={cx('arrow', 'mrl-dt-5')} />
      </Button>
    )
   }
   const renderContentPopup = () => (
     <>
      {
          categoryDialog === ERROR && (
            <Error dataError={dataError}/>
          )
      }
      {
        categoryDialog !== ERROR && (
          <LoanAccountNumber />
        )
      }
     </>
   )
   const showTitle = formLandingData && formLandingData.form && formLandingData.form.formLanding && formLandingData.form.formLanding.listChecked.length === 1 && formLandingData.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[0].label
   || formLandingData && formLandingData.form && formLandingData.form.formLanding && formLandingData.form.formLanding.listChecked.length === 1 && formLandingData.form.formLanding.listChecked[0] === DATA_CARD_CHECKBOX[1].label
   || _.isEqual(_.sortBy(formLandingData && formLandingData.form && formLandingData.form.formLanding && formLandingData.form.formLanding.listChecked), _.sortBy(DATA_STATE_REPRICING_LENGTHENING));
  return (
    <>
      {loading && <div className={cx('container-loading')}>
        <div className={cx('content-loading')}>
          <Loading />
        </div>
      </div>}
      <section className={cx('account-information')}>
        <div className={"title-wrapper"}>
          <img src={IconAccountInformation} alt="icon" className={cx("left-image")} />
          <div className={cx("title-text d-flex align-flex-end")}><span>Loan account information</span></div>
        </div>
        <div className={'description'}>
          {
            showTitle && (
              <>
                We require the contact details of all your co-borrowers (if any) so that we can contact them for this request.
              </>
            )
          }</div>

        {/* Section account information */}
        <section id="account-information" className={cx('background-gray', 'mt-dt-40')}>
          {
            showAccountNumber && (
              <SectionWrapper title="Account numbers">
                <Grid container>
                  <Grid
                    item lg={6} md={6} sm={12} xs={12}
                    id="countryValueSelect"
                    className={accountInformation.accountNumber ? 'mb-dt-40' : ''}
                  >
                    <Select
                      label="How many loan accounts are there for your mortgaged property?"
                      listValues={LIST_ACCOUNT_NUMBER}
                      single
                      placeholder="Please select"
                      type=""
                      selectKey={key}
                      width={220}
                      positionLine={5}
                      defaultValue={accountInformation.accountNumber}
                      getValue={(value: IAccountInformation.IValueData) => {
                        setRenderData(false);
                        getAccountInformation(
                          'accountNumber',
                          value.value,
                          value.error,
                        );
                      }}
                    />
                  </Grid>
                </Grid>
                {
                  accountInformation.accountNumber && (
                    <div>Key in all the account numbers.
                      <span className="info-icon-wrapper" onClick={() => openDialog('')} aria-hidden="true">
                        <img src={myInfo} alt="myInfo-logo" className={cx('icons', 'icon-black')} />
                        <img src={myInfoBlue} alt="myInfo-logo" className={cx('icons', 'icon-blue')} />
                      </span>
                    </div>
                  )
                }
                <Grid container>
                  {
                    Array(Number(accountInformation.accountNumber)).fill(0).map((item, index) => (
                      <React.Fragment key={index}>
                        <Grid
                          item lg={4} md={4} sm={12} xs={12}
                          className={'mt-dt-30'}
                        >
                          <InputBase
                            label={`Loan account number ${index + 1}`}
                            placeholder=""
                            type="number"
                            size="medium"
                            inputKey={key}
                            id={uuidv4()}
                            maxLength={15}
                            kind="required"
                            preventSpecialCharacters={restrictOnlyDigital}
                            name={`accountNumber${index + 1}`}
                            value={accountInformation[`accountNumber${index + 1}`]}
                            getValue={(value: IAccountInformation.IValueData) => {
                              getAccountInformation(
                                `accountNumber${index + 1}`,
                                value.value,
                                value.error,
                              );
                            }}
                          />
                        </Grid>
                        <Grid
                          item lg={2} md={2} sm={12} xs={12}
                        />
                      </React.Fragment>
                    ))
                  }
                </Grid>
              </SectionWrapper>
            )
          }
        </section>
        {
          showBorrowerInformation && (
            <section id="borrower-information" className={cx('background-gray', 'mt-dt-10')}>
              <SectionWrapper title="Borrower information">
                <Grid container>
                  <Grid
                    item lg={5} md={5} sm={12} xs={12}
                    id="countryValueSelect"
                  >
                    <Select
                      label="How many borrowers are there for this property? This information is needed to process your request."
                      listValues={LIST_BORROWER_NUMBER}
                      single
                      placeholder="Please select"
                      type=""
                      selectKey={key}
                      width={220}
                      positionLine={5}
                      defaultValue={accountInformation.borrowerNumber}
                      getValue={(value: IAccountInformation.IValueData) => {
                        setRenderData(false);
                        getAccountInformation(
                          'borrowerNumber',
                          value.value,
                          value.error,
                        );
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  {
                    Array(formatBorrowerNumber).fill(0).map((item, index) => (
                        <React.Fragment key={index}>
                        <Grid item lg={12} md={12} sm={12} xs={12} className="mt-dt-30 title-text-small-bold">Borrower {index + 1} {index === 0 ? '(You)' : ''}</Grid>
                        {
                          index !== 0 && (
                            <Grid item lg={12} md={12} sm={12} xs={12} className={'mb-dt-30 mt-dt-20'}>
                              <InputBase
                                label={`Name`}
                                placeholder=""
                                type="text"
                                size="medium"
                                inputKey={key}
                                id={uuidv4()}
                                maxLength={70}
                                kind="name-nric"
                                name={`name${index + 1}`}
                                value={accountInformation[`name${index + 1}`]}
                                getValue={(value: IAccountInformation.IValueData) => {
                                  getAccountInformation(
                                    `name${index + 1}`,
                                    value.value,
                                    value.error,
                                  );
                                }}
                              />
                            </Grid>
                          )
                        }
                        <Grid item lg={5} md={5} sm={12} xs={12}
                          className="mt-dt-10 mb-mb-30"
                          id="emailAddress"
                        >
                          {
                            index === 0 ? (
                              <RowInfo label="Email address 1" content={personalInformation.emailAddress}/>
                            ) : (
                              <InputBase
                                label="Email address"
                                placeholder=""
                                type="email"
                                size="large"
                                name={`emailAddress${index + 1}`}
                                kind="email"
                                inputKey={key}
                                id={uuidv4()}
                                value={accountInformation[`emailAddress${index + 1}`]}
                                maxLength={50}
                                preventSpecialCharacters={restrictEmail}
                                getValue={(value: IAccountInformation.IValueData) => {
                                  getAccountInformation(
                                    `emailAddress${index + 1}`,
                                    value.value,
                                    value.error,
                                  );
                                }}
                              />
                            )
                          }
                        </Grid>
                        <Grid item lg={2} md={2} sm={12} xs={12} />
                        <Grid item lg={5} md={5} sm={12} xs={12}>
                          {
                            index === 0 ? (
                              <RowInfo label="Mobile number" content={`${LIST_COUNTRIES_CODE.find(c => c.name === personalInformation.countryPhoneNumber).value} ${personalInformation.phoneNumber}`}/>
                            ) : (
                              <InputNumberMobile
                                label="Mobile number"
                                countryCodes={LIST_COUNTRIES_CODE}
                                contactInformation={accountInformation}
                                preventSpecialCharacters={preventSpecialCharacters}
                                isPhoneSG={accountInformation[`countryPhoneNumber${index + 1}`] === PERSONAL_INFORMATION_SINGPASS.countryPhoneNumber}
                                keyValidate={key}
                                autoFocus={autoFocus}
                                inputNameSelect={index === 1 ? "phone-1" : index === 2 ? 'home-1' : 'office-1'}
                                inputNameBase={index === 1 ? "phone-2" : index === 2 ? 'home-2' : 'office-2'}
                                countryCode={`countryPhoneNumber${index + 1}`}
                                valueMobile={`phoneNumber${index + 1}`}
                                getContactInformation={getAccountInformation}
                                kind={'phone'}
                            />
                            )
                          }
                        </Grid>
                        </React.Fragment>
                    ))
                  }
                </Grid>
              </SectionWrapper>
            </section>
          )
        }
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
      </section>
      {/* Dialog */}
      <Dialog
        isOpen={dialogId}
        onRequestClose={closeDialog }
        width={700}
        hasCloseBtn={true}
      >
        {renderContentPopup()} 
      </Dialog>
    </>
  );
});
export default AccountInformation;



