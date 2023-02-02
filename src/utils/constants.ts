export const REGION = {
  MY: "MY",
  SG: "SG",
  HK: "HK",
  CN: "CN",
};

export const LANGUAGE = {
  ZH: "zh",
  EN: "en",
};
export const API_LINK = 'https://test.api.myinfo.gov.sg/com/v3/authorise';
export const REDIRECTURL = 'https://home-loan-services.ocbc-mfe.wearesection.com';
export const REDIRECTURL_BAU = 'https://internet-uat.ocbc.com/personal-banking/loans/mortgage-form-repricing-bau';
export const LIST_ATTRIBUTE_SIMULATOR = 'uinfin,name,aliasname,hanyupinyinname,hanyupinyinaliasname,marriedname,residentialstatus,birthcountry,sex,race,nationality,dob,email,mobileno,regadd,cpfcontributions,noa,hdbownership.outstandingloanbalance,hdbownership.monthlyloaninstalment,hdbownership.address,hdbownership.hdbtype,hdbownership.dateofpurchase,passexpirydate,passtype';
export const ATTRIBUTE_LIST_REPRICING_LENGTHENING = 'email,mobileno,name,aliasname,hanyupinyinname,hanyupinyinaliasname,marriedname,nationality,residentialstatus,uinfin,sex,dob,birthcountry,race,passtype,passexpirydate,regadd,ownerprivate,cpfhousingwithdrawal,hdbownership.hdbtype,hdbownership.noofowners,hdbownership.dateofpurchase,hdbownership.dateofownershiptransfer,hdbownership.leasecommencementdate,hdbownership.termoflease,hdbownership.balanceloanrepayment,hdbownership.outstandingloanbalance,hdbownership.monthlyloaninstalment,hdbownership.address,noa,cpfcontributions';
export const ATTRIBUTE_NONE_REPRICING = 'email,mobileno,name,aliasname,hanyupinyinname,hanyupinyinaliasname,marriedname,nationality,residentialstatus,uinfin,sex,dob,birthcountry,race,passtype,passexpirydate';
export const APEX_APP_ID_REPRICING_LENGTHENING_UAT = 'STG-193200032W-OCBC-MORTGAGEREPRICE';
export const SECRET_REPRICING_LENGTHENING_UAT = "kbMksFgNFJFo7eHIVQqi4cX15wiVsjSg"

export const APEX_APP_ID_NONE_REPRICING_UAT = 'STG-193200032W-OCBC-MORTGAGEPREPAYMENT';
export const SECRET_NONE_REPRICING_UAT = "dcTplsUy3ouq8CTShv2ZuCJyv7SjBwVy";

export const BANNER_STAGING = "https://ocbc.ext1.wearesection.com/iwov-resources/sg/ocbc/personal/data/loans-loanservicing-maintenance.json";
export const BANNER_PRODUCTION = "https://www.ocbc.com/iwov-resources/sg/ocbc/personal/data/loans-loanservicing-maintenance.json";

export const DATA_DOCUMENT_RESPONSE = {
  LoanAttachmentMgmtResp: {
    RespBody: {
      Message: {
        Results: ['']
      }
    }
  }
}

export const APEX_APP_ID_REPRICING_LENGTHENING_PROD = 'PROD-193200032W-OCBC-MORTGAGEREPRICE';
export const SECRET_REPRICING_PROD = "k7siyudd7Mwn19cWBwUxQRMZ97uvdt1S";

export const APEX_APP_ID_NONE_REPRICING_PROD = 'PROD-193200032W-OCBC-MORTGAGEPREPAYMENT';
export const SECRET_PREPAYMENT_PROD = "p207G8uu5gEt0D3FJMFoiOrzl09AjH8e"
export const ERROR = 'error';


export const TITLE_PAGE = 'Home Loan Services';
export const LINK_EXTERNAL_PAGE = 'https://www.ocbc.com/group/gateway';

export const URL_SINGPASS_FLOW = {
  checkInformation: '/sing-pass-form/check-information',
  propertyInformation: '/sing-pass-form/property-information',
  accountInformation: '/sing-pass-form/account-information',
  repricingRequest: '/sing-pass-form/repricing-request',
  nonRepricingRequest: '/sing-pass-form/non-repricing-request',
  review: '/sing-pass-form/review'
}

export const URL_MANUAL_FLOW = {
  personalInformation: '/manual-form/personal-information',
  propertyInformation: '/manual-form/property-information',
  accountInformation: '/manual-form/account-information',
  repricingRequest: '/manual-form/repricing-request',
  nonRepricingRequest: '/manual-form/non-repricing-request',
  review: '/manual-form/review'
}
export const URL_PERSONAL_BORROWER_MANUAL = '/manual-form/borrower/personal-information';
export const URL_PERSONAL_BORROWER_SINGPASS = '/sing-pass-form/borrower/personal-information';
export const URL_REVIEW_BORROWER_MANUAL = '/manual-form/borrower/review-submit';
export const URL_NON_REPRICING_BORROWER_MANUAL = '/manual-form/borrower/non-repricing-request';
export const URL_REPRICING_BORROWER_MANUAL = '/manual-form/borrower/repricing-request';

export const URL_REVIEW_BORROWER_SINGPASS = '/sing-pass-form/borrower/review-submit';

export const YES = 'Yes';
export const NO = 'No';
export const EDIT = 'Edit';
export const WIDTH_DIALOG_DEFAULT = 700;
export const LIST_DATA_INFORMATION = ["Repricing", "Lengthening of loan tenure"];
export const SINGAPORE = 'Singapore';
export const PERSONAL_INFORMATION = 'personal-information'
export const REPRICING_SLUG = 'repricing-request'
export const ERROR_OTP_MESSAGE = 'Please check if you have entered the correct OTP.'

export const TITLE_PAGE_LANDING = 'Manage your existing home loan';
export const TITLE_PAGE_LANDING_1 = 'When partial prepayment is selected as one of the request types, to show the following text after relevant fees are displayed';
export const TITLE_PAGE_LANDING_BORROWER = 'Managing your home loan';
export const SUB_TITLE_PAGE_LANDING = 'Apart from home loans, borrowers can also make requests regarding their term loans and construction loans. Complete one form for each mortgaged residential property.';
export const TEXT_OCBC_SUPPORT = 'OCBC Help and Support'
export const SUB_TITLE_PAGE_LANDING_1 = 'If you intend to make a partial or full prepayment of your bridging loan, please go to '
export const SUB_TITLE_PAGE_LANDING_2 = ' instead to download Home Loan Request Form to submit your request instead.'
export const SUB_TITLE_PAGE_LANDING_3 = '(No fees applicable as such no mention of fees on screen)'
export const SUB_TITLE_PAGE_LANDING_4 = "Please check the 'Partial Prepayment' section in your Letter of Offer (LO)/ latest Supplementary Letter of Offer (SLO) to confirm if any fees are payable."
export const SUB_TITLE_PAGE_LANDING_BORROWER = 'One of your co-borrowers have made a request regarding your home loan. We require you to verify the request.';
export const HOME_LOAN_REQUEST = 'HOME LOAN REQUESTS';
export const WHAT_YOU_NEED = 'WHAT YOU NEED';
export const UPLOAD_FILE_NRIC = 'NRIC';
export const UPLOAD_FILE_PASSPORT = 'Passport';
export const PLEASE_UPLOAD_A_DOCUMENT = 'Please upload a document';
export const YOU_CAN_UPLOAD_UP_TO_TWO_DOCUMENTS = 'You can upload up to 2 documents'
export const CONTACT_INFORMATION = "Contact information";
export const NO_UPLOAD_DOCUMENT = 'No documents required for this request'

export const ERROR_DETAIL_ADDRESS = {
  ErrorCode: '0120',
  ErrorDescription: 'Provider Error ',
}

export const DATA_CARD_CHECKBOX = [{
  label: 'Repricing',
  checked: false,
},
{
  label: 'Lengthening of loan tenure',
  checked: false,
},
{
  label: 'Shortening of loan tenure',
  checked: false,
},
{
  label: 'Partial prepayment',
  checked: false,
},
{
  label: 'Full redemption of loan',
  checked: false,
},
{
  label: 'Change of debiting account',
  checked: false,
}]
export const PERSONAL_INFORMATION_SINGPASS = {
  emailAddress: 'iamtracy@gmail.com',
  countryPhoneNumber: 'Singapore',
  phoneNumber: '98765432',
}

export const LIST_RADIO = [{
  text: 'Yes',
  checked: false,
},
{
  text: 'No',
  checked: false,
},
];

export const MAX_FILES = 2;
export const MAX_FILENAME = 50;
export const CHECK_INFORMATION = 'check-information';
export const INFORMATION = 'information';
export const NON_REPRICING = 'non-repricing-request';
export const PROPERTY_INFORMATION = 'property-information';
export const ACCOUNT_INFORMATION = 'account-information';
export const REPRICING_REQUEST = 'repricing-request';
export const DATA_TABS = [
  {
    id: 'check-information',
    numerical: '0',
    text: 'Check information from Singpass',
    check: false,
    status: true,
  },
  {
    id: 'property-information',
    numerical: '1',
    text: 'Mortgaged property address',
    check: false,
    status: true,
  },
  {
    id: 'account-information',
    numerical: '2',
    text: 'Loan account information',
    check: false,
    status: true,
  },
  {
    id: 'repricing-request',
    numerical: '2',
    text: 'Repricing request',
    check: false,
    status: true,
  },
  {
    id: 'review',
    numerical: '2',
    text: 'Review and submit',
    check: false,
    status: true,
  }
];

export const DATA_TABS_DDA_FULL_SELECTED = [
  {
    id: 'check-information',
    numerical: '0',
    text: 'Check information from Singpass',
    check: false,
    status: true,
  },
  {
    id: 'property-information',
    numerical: '1',
    text: 'Mortgaged property address',
    check: false,
    status: false,
  },
  {
    id: 'non-repricing-request',
    numerical: '2',
    text: 'Non-repricing requests',
    check: false,
    status: false,
  },
  {
    id: 'review',
    numerical: '3',
    text: 'Review and submit',
    check: false,
    status: false,
  }
];

export const DATA_TABS_DDA_MANUAL_FULL_SELECTED = [
  {
    id: 'personal-information',
    numerical: '0',
    text: 'Personal information',
    check: false,
    status: true,
  },
  {
    id: 'property-information',
    numerical: '1',
    text: 'Mortgaged property address',
    check: false,
    status: true,
  },
  {
    id: 'non-repricing-request',
    numerical: '2',
    text: 'Non-repricing requests',
    check: false,
    status: true,
  },
  {
    id: 'review',
    numerical: '3',
    text: 'Review and submit',
    check: false,
    status: true,
  }
];

export const DATA_TABS_DDA_BORROWER_SINGPASS = [
  {
    id: 'personal-information',
    numerical: '0',
    text: 'Check information from Singpass',
    check: false,
    status: true,
  },
  {
    id: 'review-submit',
    numerical: '1',
    text: 'Review and submit',
    check: false,
    status: false,
  }
];

export const DATA_TABS_DDA_BORROWER_MANUAL_LENGTH_ONLY = [
  {
    id: 'personal-information',
    numerical: '0',
    text: 'Personal information',
    check: false,
    status: true,
  },
  {
    id: 'non-repricing-request',
    numerical: '1',
    text: 'Non-repricing request',
    check: false,
    status: true,
  },
  {
    id: 'review-submit',
    numerical: '2',
    text: 'Review and submit',
    check: false,
    status: true,
  }
];


export const DATA_TABS_DDA_BORROWER_MANUAL_LENGTH_REPRICING = [
  {
    id: 'personal-information',
    numerical: '0',
    text: 'Personal information',
    check: false,
    status: true,
  },
  {
    id: 'repricing-request',
    numerical: '1',
    text: 'Repricing request',
    check: false,
    status: true,
  },
  {
    id: 'review-submit',
    numerical: '2',
    text: 'Review and submit',
    check: false,
    status: true,
  }
];

export const DATA_TABS_DDA_FULL_SELECTED_INVESTMENT = [
  {
    id: 'check-information',
    numerical: '0',
    text: 'Check information from Singpass',
    check: false,
    status: true,
  },
  {
    id: 'property-information',
    numerical: '1',
    text: 'Mortgaged property address',
    check: false,
    status: false,
  },
  {
    id: 'account-information',
    numerical: '2',
    text: 'Loan account information',
    check: false,
    status: false,
  },
  {
    id: 'review',
    numerical: '3',
    text: 'Review and submit',
    check: false,
    status: false,
  }
];


export const DATA_TABS_REPRICING_SELECTED = [
  {
    id: 'check-information',
    numerical: '0',
    text: 'Check information from Singpass',
    check: false,
    status: true,
  },
  {
    id: 'property-information',
    numerical: '1',
    text: 'Mortgaged property address',
    check: false,
    status: false,
  },
  {
    id: 'account-information',
    numerical: '2',
    text: 'Loan account information',
    check: false,
    status: false,
  },
  // {
  //   id: 'repricing-request',
  //   numerical: '3',
  //   text: 'Repricing request',
  //   check: false,
  //   status: true,
  // },
  {
    id: 'review',
    numerical: '4',
    text: 'Review and submit',
    check: false,
    status: false,
  }
];

export const DATA_TABS_REPRICING_MANUAL_SELECTED = [
  {
    id: 'personal-information',
    numerical: '0',
    text: 'Personal information',
    check: false,
    status: true,
  },
  {
    id: 'property-information',
    numerical: '1',
    text: 'Mortgaged property address',
    check: false,
    status: true,
  },
  {
    id: 'account-information',
    numerical: '2',
    text: 'Loan account information',
    check: false,
    status: true,
  },
  {
    id: 'repricing-request',
    numerical: '3',
    text: 'Repricing request',
    check: false,
    status: true,
  },
  {
    id: 'review',
    numerical: '4',
    text: 'Review and submit',
    check: false,
    status: true,
  }
];

export const DATA_TABS_REPRICING_NO_LIST_DOCUMENT_MANUAL_SELECTED = [
  {
    id: 'personal-information',
    numerical: '0',
    text: 'Personal information',
    check: false,
    status: true,
  },
  {
    id: 'property-information',
    numerical: '1',
    text: 'Mortgaged property address',
    check: false,
    status: true,
  },
  {
    id: 'account-information',
    numerical: '2',
    text: 'Loan account information',
    check: false,
    status: true,
  },
  // {
  //   id: 'repricing-request',
  //   numerical: '3',
  //   text: 'Repricing request',
  //   check: false,
  //   status: true,
  // },
  {
    id: 'review',
    numerical: '4',
    text: 'Review and submit',
    check: false,
    status: true,
  }
];

export const DATA_TABS_NON_REPRICING_SELECTED = [
  {
    id: 'check-information',
    numerical: '0',
    text: 'Check information from Singpass',
    check: false,
    status: true,
  },
  {
    id: 'property-information',
    numerical: '1',
    text: 'Mortgaged property address',
    check: false,
    status: false,
  },
  {
    id: 'account-information',
    numerical: '2',
    text: 'Loan account information',
    check: false,
    status: false,
  },
  {
    id: 'non-repricing-request',
    numerical: '3',
    text: 'Non-repricing requests',
    check: false,
    status: false,
  },
  {
    id: 'review',
    numerical: '4',
    text: 'Review and submit',
    check: false,
    status: false,
  }
];

export const DATA_TABS_NON_REPRICING_MANUAL_SELECTED = [
  {
    id: 'personal-information',
    numerical: '0',
    text: 'Personal information',
    check: false,
    status: true,
  },
  {
    id: 'property-information',
    numerical: '1',
    text: 'Mortgaged property address',
    check: false,
    status: true,
  },
  {
    id: 'account-information',
    numerical: '2',
    text: 'Loan account information',
    check: false,
    status: true,
  },
  {
    id: 'non-repricing-request',
    numerical: '3',
    text: 'Non-repricing requests',
    check: false,
    status: true,
  },
  {
    id: 'review',
    numerical: '4',
    text: 'Review and submit',
    check: false,
    status: true,
  }
];

export const DATA_TABS_REP_NON_REPRICING_SELECTED = [
  {
    id: 'check-information',
    numerical: '0',
    text: 'Check information from Singpass',
    check: false,
    status: true,
  },
  {
    id: 'property-information',
    numerical: '1',
    text: 'Mortgaged property address',
    check: false,
    status: false,
  },
  {
    id: 'account-information',
    numerical: '2',
    text: 'Loan account information',
    check: false,
    status: false,
  },
  // {
  //   id: 'repricing-request',
  //   numerical: '3',
  //   text: 'Repricing request',
  //   check: false,
  //   status: true,
  // },
  {
    id: 'non-repricing-request',
    numerical: '4',
    text: 'Non-repricing requests',
    check: false,
    status: false,
  },
  {
    id: 'review',
    numerical: '5',
    text: 'Review and submit',
    check: false,
    status: false,
  }
];

export const DATA_TABS_REP_NON_REPRICING_MANUAL_SELECTED = [
  {
    id: 'personal-information',
    numerical: '0',
    text: 'Personal information',
    check: false,
    status: true,
  },
  {
    id: 'property-information',
    numerical: '1',
    text: 'Mortgaged property address',
    check: false,
    status: true,
  },
  {
    id: 'account-information',
    numerical: '2',
    text: 'Loan account information',
    check: false,
    status: true,
  },
  {
    id: 'repricing-request',
    numerical: '3',
    text: 'Repricing request',
    check: false,
    status: true,
  },
  {
    id: 'non-repricing-request',
    numerical: '4',
    text: 'Non-repricing requests',
    check: false,
    status: true,
  },
  {
    id: 'review',
    numerical: '5',
    text: 'Review and submit',
    check: false,
    status: true,
  }
];


export const LIST_COUNTRIES = [{
  key: 'SG',
  value: 'Singapore',
},
{
  key: 'GB',
  value: 'United Kingdom',
},
{
  key: 'US',
  value: 'United States',
},
{
  key: 'AU',
  value: 'Australia',
},
{
  key: 'MY',
  value: 'Malaysia',
},
{
  key: 'JP',
  value: 'Japan',
},
{
  key: 'AF',
  value: 'Afghanistan',
},
{
  key: 'AL',
  value: 'Albania',
},
{
  key: 'DZ',
  value: 'Algeria',
},
{
  key: 'AS',
  value: 'American Samoa',
},
{
  key: 'AD',
  value: 'Andorra',
},
{
  key: 'AO',
  value: 'Angola',
},
{
  key: 'AI',
  value: 'Anguilla',
},
{
  key: 'AQ',
  value: 'Antarctica',
},
{
  key: 'AG',
  value: 'Antigua and Barbuda',
},
{
  key: 'AR',
  value: 'Argentina',
},
{
  key: 'AM',
  value: 'Armenia',
},
{
  key: 'AW',
  value: 'Aruba',
},
{
  key: 'AT',
  value: 'Austria',
},
{
  key: 'AZ',
  value: 'Azerbaijan',
},
{
  key: 'BS',
  value: 'Bahamas',
},
{
  key: 'BH',
  value: 'Bahrain',
},
{
  key: 'BD',
  value: 'Bangladesh',
},
{
  key: 'BB',
  value: 'Barbados',
},
{
  key: 'BY',
  value: 'Belarus',
},
{
  key: 'BE',
  value: 'Belgium',
},
{
  key: 'BZ',
  value: 'Belize',
},
{
  key: 'BJ',
  value: 'Benin',
},
{
  key: 'BM',
  value: 'Bermuda',
},
{
  key: 'BT',
  value: 'Bhutan',
},
{
  key: 'BO',
  value: 'Bolivia',
},
{
  key: 'BA',
  value: 'Bosnia and Herzegovina',
},
{
  key: 'BW',
  value: 'Botswana',
},
{
  key: 'BV',
  value: 'Bouvet Island',
},
{
  key: 'BR',
  value: 'Brazil',
},
{
  key: 'IO',
  value: 'British Indian Ocean Territory',
},
{
  key: 'BN',
  value: 'Brunei Darussalam',
},
{
  key: 'BG',
  value: 'Bulgaria',
},
{
  key: 'BF',
  value: 'Burkina Faso',
},
{
  key: 'BI',
  value: 'Burundi',
},
{
  key: 'KH',
  value: 'Cambodia',
},
{
  key: 'CM',
  value: 'Cameroon',
},
{
  key: 'CA',
  value: 'Canada',
},
{
  key: 'CV',
  value: 'Cape Verde',
},
{
  key: 'KY',
  value: 'Cayman Islands',
},
{
  key: 'CF',
  value: 'Central African Republic',
},
{
  key: 'TD',
  value: 'Chad',
},
{
  key: 'GG',
  value: 'Channel Islands and Guernsey',
},
{
  key: 'CL',
  value: 'Chile',
},
{
  key: 'CN',
  value: 'China',
},
{
  key: 'CX',
  value: 'Christmas Island',
},
{
  key: 'CC',
  value: 'Cocos (Keeling) Islands',
},
{
  key: 'CO',
  value: 'Colombia',
},
{
  key: 'KM',
  value: 'Comoros',
},
{
  key: 'CG',
  value: 'Congo',
},
{
  key: 'CD',
  value: 'Congo, The Democratic Republic of The',
},
{
  key: 'CK',
  value: 'Cook Islands',
},
{
  key: 'CR',
  value: 'Costa Rica',
},
{
  key: 'HR',
  value: 'Croatia',
},
{
  key: 'CU',
  value: 'Cuba',
},
{
  key: 'CY',
  value: 'Cyprus',
},
{
  key: 'CZ',
  value: 'Czech Republic',
},
{
  key: 'DK',
  value: 'Denmark',
},
{
  key: 'DJ',
  value: 'Djibouti',
},
{
  key: 'DM',
  value: 'Dominica',
},
{
  key: 'DO',
  value: 'Dominican Republic',
},
{
  key: '',
  value: 'Dronning Maud Land',
},
{
  key: 'EC',
  value: 'Ecuador',
},
{
  key: 'EG',
  value: 'Egypt',
},
{
  key: 'SV',
  value: 'El Salvador',
},
{
  key: 'GQ',
  value: 'Equatorial Guinea',
},
{
  key: 'ER',
  value: 'Eritrea',
},
{
  key: 'EE',
  value: 'Estonia',
},
{
  key: 'ET',
  value: 'Ethiopia',
},
{
  key: 'FK',
  value: 'Falkland Islands (Malvinas)',
},
{
  key: 'FO',
  value: 'Faroe Islands',
},
{
  key: 'FJ',
  value: 'Fiji',
},
{
  key: 'FI',
  value: 'Finland',
},
{
  key: 'FR',
  value: 'France',
},
{
  key: 'FRA',
  value: 'French Guyana',
},
{
  key: 'PF',
  value: 'French Polynesia',
},
{
  key: 'TF',
  value: 'French Southern Territories',
},
{
  key: 'GA',
  value: 'Gabon',
},
{
  key: 'GM',
  value: 'Gambia',
},
{
  key: 'GE',
  value: 'Georgia',
},
{
  key: 'DE',
  value: 'Germany',
},
{
  key: 'GI',
  value: 'Gibraltar',
},
{
  key: 'GR',
  value: 'Greece',
},
{
  key: 'GL',
  value: 'Greenland',
},
{
  key: 'GD',
  value: 'Grenada',
},
{
  key: 'GP',
  value: 'Guadeloupe',
},
{
  key: 'GU',
  value: 'Guam',
},
{
  key: 'GT',
  value: 'Guatemala',
},
{
  key: 'GN',
  value: 'Guinea',
},
{
  key: 'GW',
  value: 'Guinea-bissau',
},
{
  key: 'GY',
  value: 'Guyana',
},
{
  key: 'HT',
  value: 'Haiti',
},
{
  key: 'HM',
  value: 'Heard Island and Mcdonald Islands',
},
{
  key: 'VA',
  value: 'Holy See (Vatican City State)',
},
{
  key: 'HN',
  value: 'Honduras',
},
{
  key: 'HK',
  value: 'Hong Kong',
},
{
  key: 'HU',
  value: 'Hungary',
},
{
  key: 'IS',
  value: 'Iceland',
},
{
  key: 'IN',
  value: 'India',
},
{
  key: 'ID',
  value: 'Indonesia',
},
{
  key: 'IR',
  value: 'Iran, Islamic Republic of',
},
{
  key: 'IQ',
  value: 'Iraq',
},
{
  key: 'IE',
  value: 'Ireland',
},
{
  key: 'IM',
  value: 'Isle of Man',
},
{
  key: 'IT',
  value: 'Italy',
},
{
  key: 'CI',
  value: 'Ivory Coast (Cote Divoire)',
},
{
  key: 'JM',
  value: 'Jamaica',
},
{
  key: 'JE',
  value: 'Jersey',
},
{
  key: 'JO',
  value: 'Jordan',
},
{
  key: 'KZ',
  value: 'Kazakhstan',
},
{
  key: 'KE',
  value: 'Kenya',
},
{
  key: 'KI',
  value: 'Kiribati',
},
{
  key: 'KP',
  value: 'Korea, Democratic People\\\'s Republic of',
},
{
  key: 'KR',
  value: 'Korea, Republic of',
},
{
  key: 'KW',
  value: 'Kuwait',
},
{
  key: 'KG',
  value: 'Kyrgyzstan',
},
{
  key: 'LA',
  value: 'Lao People\\\'s Democratic Republic',
},
{
  key: 'LV',
  value: 'Latvia',
},
{
  key: 'LB',
  value: 'Lebanon',
},
{
  key: 'LS',
  value: 'Lesotho',
},
{
  key: 'LR',
  value: 'Liberia',
},
{
  key: 'LY',
  value: 'Libyan Arab Jamahiriya',
},
{
  key: 'LI',
  value: 'Liechtenstein',
},
{
  key: 'LT',
  value: 'Lithuania',
},
{
  key: 'LU',
  value: 'Luxembourg',
},
{
  key: 'MO',
  value: 'Macao',
},
{
  key: 'MK',
  value: 'Macedonia, The Former Yugoslav Republic of',
},
{
  key: 'MG',
  value: 'Madagascar',
},
{
  key: 'MW',
  value: 'Malawi',
},
{
  key: 'MV',
  value: 'Maldives',
},
{
  key: 'ML',
  value: 'Mali',
},
{
  key: 'MT',
  value: 'Malta',
},
{
  key: 'MH',
  value: 'Marshall Islands',
},
{
  key: 'MQ',
  value: 'Martinique',
},
{
  key: 'MR',
  value: 'Mauritania',
},
{
  key: 'MU',
  value: 'Mauritius',
},
{
  key: 'YT',
  value: 'Mayotte',
},
{
  key: 'MX',
  value: 'Mexico',
},
{
  key: 'FM',
  value: 'Micronesia, Federated States of',
},
{
  key: 'MD',
  value: 'Moldova, Republic of',
},
{
  key: 'MC',
  value: 'Monaco',
},
{
  key: 'MN',
  value: 'Mongolia',
},
{
  key: 'ME',
  value: 'Montenegro',
},
{
  key: 'MS',
  value: 'Montserrat',
},
{
  key: 'MA',
  value: 'Morocco',
},
{
  key: 'MZ',
  value: 'Mozambique',
},
{
  key: 'MM',
  value: 'Myanmar',
},
{
  key: 'NA',
  value: 'Namibia',
},
{
  key: 'NR',
  value: 'Nauru',
},
{
  key: 'NP',
  value: 'Nepal',
},
{
  key: 'NL',
  value: 'Netherlands',
},
{
  key: 'AN',
  value: 'Netherlands Antilles',
},
{
  key: 'NC',
  value: 'New Caledonia',
},
{
  key: 'NZ',
  value: 'New Zealand',
},
{
  key: 'NI',
  value: 'Nicaragua',
},
{
  key: 'NE',
  value: 'Niger',
},
{
  key: 'NG',
  value: 'Nigeria',
},
{
  key: 'NU',
  value: 'Niue',
},
{
  key: 'NF',
  value: 'Norfolk Island',
},
{
  key: 'MP',
  value: 'Northern Mariana Islands',
},
{
  key: 'NO',
  value: 'Norway',
},
{
  key: 'OM',
  value: 'Oman',
},
{
  key: 'PK',
  value: 'Pakistan',
},
{
  key: 'PW',
  value: 'Palau',
},
{
  key: 'PS',
  value: 'Palestinian Territory, Occupied',
},
{
  key: 'PA',
  value: 'Panama',
},
{
  key: '',
  value: 'Panama Canal Zone',
},
{
  key: 'PG',
  value: 'Papua New Guinea',
},
{
  key: 'PY',
  value: 'Paraguay',
},
{
  key: 'PE',
  value: 'Peru',
},
{
  key: 'PH',
  value: 'Philippines',
},
{
  key: 'PN',
  value: 'Pitcairn',
},
{
  key: 'PL',
  value: 'Poland',
},
{
  key: 'PT',
  value: 'Portugal',
},
{
  key: 'PR',
  value: 'Puerto Rico',
},
{
  key: 'QA',
  value: 'Qatar',
},
{
  key: 'RE',
  value: 'Reunion',
},
{
  key: 'RO',
  value: 'Romania',
},
{
  key: 'RU',
  value: 'Russian Federation',
},
{
  key: 'RW',
  value: 'Rwanda',
},
{
  key: 'SH',
  value: 'Saint Helena',
},
{
  key: 'KN',
  value: 'Saint Kitts and Nevis',
},
{
  key: 'LC',
  value: 'Saint Lucia',
},
{
  key: 'PM',
  value: 'Saint Pierre and Miquelon',
},
{
  key: 'VC',
  value: 'Saint Vincent and The Grenadines',
},
{
  key: 'WS',
  value: 'Samoa',
},
{
  key: 'SM',
  value: 'San Marino',
},
{
  key: 'ST',
  value: 'Sao Tome and Principe',
},
{
  key: 'SA',
  value: 'Saudi Arabia',
},
{
  key: 'SN',
  value: 'Senegal',
},
{
  key: 'RS',
  value: 'Serbia',
},
{
  key: 'SC',
  value: 'Seychelles',
},
{
  key: 'SL',
  value: 'Sierra Leone',
},
{
  key: 'SK',
  value: 'Slovakia',
},
{
  key: 'SI',
  value: 'Slovenia',
},
{
  key: 'SB',
  value: 'Solomon Islands',
},
{
  key: 'SO',
  value: 'Somalia',
},
{
  key: 'ZA',
  value: 'South Africa',
},
{
  key: 'GS',
  value: 'South Georgia and The South Sandwich Islands',
},
{
  key: 'ES',
  value: 'Spain',
},
{
  key: 'LK',
  value: 'Sri Lanka',
},
{
  key: '',
  value: 'Stateless',
},
{
  key: 'SD',
  value: 'Sudan',
},
{
  key: 'SR',
  value: 'Suriname',
},
{
  key: 'SJ',
  value: 'Svalbard and Jan Mayen',
},
{
  key: 'SZ',
  value: 'Swaziland',
},
{
  key: 'SE',
  value: 'Sweden',
},
{
  key: 'CH',
  value: 'Switzerland',
},
{
  key: 'SY',
  value: 'Syrian Arab Republic',
},
{
  key: 'TW',
  value: 'Taiwan, Province of China',
},
{
  key: 'TJ',
  value: 'Tajikistan',
},
{
  key: 'TZ',
  value: 'Tanzania, United Republic of',
},
{
  key: 'TH',
  value: 'Thailand',
},
{
  key: 'TL',
  value: 'Timor-leste',
},
{
  key: 'TG',
  value: 'Togo',
},
{
  key: 'TK',
  value: 'Tokelau',
},
{
  key: 'TO',
  value: 'Tonga',
},
{
  key: 'TT',
  value: 'Trinidad and Tobago',
},
{
  key: 'TN',
  value: 'Tunisia',
},
{
  key: 'TR',
  value: 'Turkey',
},
{
  key: 'TM',
  value: 'Turkmenistan',
},
{
  key: 'TC',
  value: 'Turks and Caicos Islands',
},
{
  key: 'TV',
  value: 'Tuvalu',
},
{
  key: 'UG',
  value: 'Uganda',
},
{
  key: 'UA',
  value: 'Ukraine',
},
{
  key: 'AE',
  value: 'United Arab Emirates',
},
{
  key: 'UM',
  value: 'United States Minor Outlying Islands',
},
{
  key: 'UY',
  value: 'Uruguay',
},
{
  key: 'UZ',
  value: 'Uzbekistan',
},
{
  key: 'VU',
  value: 'Vanuatu',
},
{
  key: 'VE',
  value: 'Venezuela',
},
{
  key: 'VN',
  value: 'Viet Nam',
},
{
  key: 'VG',
  value: 'Virgin Islands, British',
},
{
  key: 'VI',
  value: 'Virgin Islands, U.S.',
},
{
  key: '',
  value: 'Wake Island',
},
{
  key: 'WF',
  value: 'Wallis and Futuna',
},
{
  key: 'EH',
  value: 'Western Sahara',
},
{
  key: 'YE',
  value: 'Yemen',
},
{
  key: 'ZM',
  value: 'Zambia',
},
{
  key: 'ZW',
  value: 'Zimbabwe',
}]


export const LIST_CHECKBOX_YES_NO = [{
  text: 'Yes',
  checked: false,
},
{
  text: 'No',
  checked: false,
},
]

export const LIST_CHECKBOX_ACCEPT = [{
  text: '',
  check: false
}]

export const LIST_SELECT_PURPOSE = [{
  value: 'Owner Occupation',
  key: 'Owner Occupation',
},
{
  value: 'Investment',
  key: 'Investment',
}
]

export const LIST_SELECT_FULL_REDEMPTION = [
  {
    value: 'Sale of property',
    key: 'Sale of property',
  },
  {
    value: 'Refinancing with another bank',
    key: 'Refinancing with another bank',
  },
  {
    value: 'Paying off with own funds',
    key: 'Paying off with own funds',
  }
]


export const LIST_TERM_LOAN_YES_NO = [
  {
    text: 'Yes',
    checked: false
  },
  {
    text: 'No',
    checked: false
  }
]

export const LIST_RADIO_PREPAYMENT_INSTRUCTIONS = [
  {
    text: 'I agree to deduct the full redemption amount from the OCBC account used for my monthly instalments.',
    checked: false,
    disable: false,
  },
  {
    text: 'I will arrange for my appointed law firm to inform the Bank regarding the mode of settlement, including the use of CPF funds if relevant.',
    checked: false,
    disable: false,
  }
]

export const LIST_SELECT_LAW_FIRM_APPOINTMENT = [
  {
    value: `I agree to appoint a law firm from OCBC's panel`,
    key: `I agree to appoint a law firm from OCBC's panel`,
  },
  {
    value: `I want to appoint a specific law firm`,
    key: `I want to appoint a specific law firm`,
  }
]

export const LIST_SELECT_PARTIAL = [{
  value: 'SIBOR/COF',
  key: 'SIBOR/COF',
},
  {
  value: 'Fixed',
  key: 'Fixed',
},
{
  value: 'Others (e.g. Mortgage Board Rate and SORA)',
  key: 'Others (e.g. Mortgage Board Rate and SORA)',
}
]

export const DATA_FULL_REDEMPTION_ON_ALL_LOAN = {
  radio: {
    label: 'Two months from now, will a lock-in period still apply for at least one loan?'
  },
  select: {
    placeholder: 'Please select',
    label: 'Reason for full redemption'
  },
  selectNoFees: "We may ask you to return any cash reward you received when you refinanced your loan with us. Please refer to the 'Cash Reward Scheme' in your Letter of Offer (LO)/latest Supplementary Letter of Offer (SLO) to check if this applies to you.",
  selectNoFees1dot5: 'If you fully pay off your loan by refinancing with another financial institution during a specified period – as stated in your Letter of Offer (LO)/latest Supplementary Letter of Offer (SLO) – a prepayment fee of 1.5% of the outstanding loan amount will be charged.',
  selectNoFees1latest: "Please refer to the 'Full Redemption' section in your LO/latest SLO to check if any fee will be charged.",
  selectNoFees1reward: "In addition, we may ask you to return any cash reward you received when you refinanced your loan with us. Please refer to the 'Cash Reward Scheme' in your LO/latest SLO to check if this applies to you.",
  selectYesFees0dot75: 'If you sell your property and fully pay off your loan within the lock-in period, a prepayment fee of 0.75% of the outstanding loan amount will be charged.',
  selectYesFees0latest: "Please refer to the 'Full Redemption' section in your Letter of Offer (LO)/latest Supplementary Letter of Offer (SLO) to check if any fee will be charged.",
  selectYesFees1dot5: 'If you use your own funds or refinance with another financial institution to fully pay off your loan within the lock-in period, a prepayment fee of 1.5% of the outstanding loan amount will be charged.',
}

export const DATA_SHORTENING_OF_LOAN_TENURE = {
  msg: 'A processing fee of $500 is payable for your shortening of tenure request. Do ensure that the account from which the fee is to be deducted is active (i.e. a transaction has taken place in the last 12 months).'
}

export const DATA_SHORTENING_OF_LOAN_TENURE_COMBINATION = {
  msg: 'Fee information should be shown (which one depends on selected combination)'
}

export const DATA_DDA_ACCOUNT = {
  msg: 'We can only process your request via this portal if your new debiting account is to be a personal account (single or joint-alternate) with OCBC. If you intend to use a joint account operated with joint signing authority or a third party account, please go to ',
  textLink: 'OCBC Help and Support',
  textFinal: 'instead.',
  msgNoFee: 'No fee is payable for this change of debiting account request.'
}

export const DATA_PARTIAL_PREPAYMENT = {
  radio: {
    label: 'A month from now, will the lock-in period still apply for the loan you are prepaying?'
  },
  select: {
    placeholder: 'Please select',
    label: 'Which type of interest rate applies to your loan?'
  },
  selectNoFees: 'The prepayment date will be the first Rate Review Date (RRD) after the required 1-month notice period. A prepayment fee of 1.5% of the prepayment amount is payable if payment is not made on the RRD. If the RRD is a non-working day, prepayment should be made on the preceding working day to avoid incurring this fee.',
  selectNoFeesApplicable: "",
  selectYesFees0dot5: 'A prepayment fee of 1.5% of the prepayment amount is payable if the remaining loan amount after prepayment is less than 50% of the original or (if applicable) repriced loan amount.',
  selectYesFees0date: 'The prepayment date will be the first Rate Review Date (RRD) after the required 1-month notice period. A prepayment fee of 1.5% of the prepayment amount is payable if payment is not made on the RRD. If the RRD is a non-working day, prepayment should be made on the preceding working day to avoid incurring this fee.',
  selectYesFees0if: 'If this prepayment fee is payable, there will be no additional prepayment fee if the remaining loan amount after prepayment is less than 50% of the original or (if applicable) repriced loan amount.',
  selectYesFees1dot5: 'A prepayment fee of 1.5% of the prepayment amount is payable.',
  selectYesFees3dot5: 'A prepayment fee of 1.5% of the prepayment amount is payable if the remaining loan amount after the prepayment is less than 50% of the original or (if applicable) repriced loan amount.'
}

export const DATA_LENGTHENING_OF_LOAN_TENURE = {
  select: {
    placeholder: 'Please select',
    label: 'Purpose of property'
  },
  selectFee500: 'A processing fee of $500 is payable for your lengthening of tenure request. This fee (if applicable) will be deducted after you accept our offer.',
}

export const DATA_STATE_REPRICING_LENGTHENING_PARTIAL = ['Repricing', 'Lengthening of loan tenure', 'Partial prepayment']
export const DATA_STATE_REPRICING_SHORT_PARTIAL = ['Repricing', 'Shortening of loan tenure', 'Partial prepayment']
export const DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA = ['Repricing', 'Lengthening of loan tenure', 'Partial prepayment', 'Change of debiting account']
export const DATA_STATE_REPRICING_PARTIAL = ['Repricing', 'Partial prepayment']
export const DATA_STATE_REPRICING_LENGTHENING = ['Repricing', 'Lengthening of loan tenure']
export const DATA_STATE_REPRICING_SHORT = ['Repricing', 'Shortening of loan tenure']
export const DATA_STATE_REPRICING_DDA = ['Repricing', 'Change of debiting account']
export const DATA_STATE_REPRICING_PARTIAL_LENGTHENING_DDA = ['Partial prepayment', 'Lengthening of loan tenure', 'Change of debiting account']
export const DATA_STATE_REPRICING_PARTIAL_SHORT_DDA = ['Partial prepayment', 'Shortening of loan tenure', 'Change of debiting account']
export const DATA_STATE_REPRICING_PARTIAL_DDA = ['Partial prepayment', 'Change of debiting account']
export const DATA_STATE_REPRICING_SHORTENING_DDA = ['Shortening of loan tenure', 'Change of debiting account']
export const DATA_STATE_REPRICING_LENGTHENING_DDA = ['Lengthening of loan tenure', 'Change of debiting account']
export const DATA_STATE_REPRICING_SHORT_PARTIAL_DDA = ['Repricing', 'Shortening of loan tenure', 'Partial prepayment', 'Change of debiting account']
export const DATA_STATE_REPRICING_LENGTHENING_DDA_MIX = ['Repricing', 'Lengthening of loan tenure', 'Change of debiting account']
export const DATA_STATE_REPRICING_SHORT_DDA_MIX = ['Repricing', 'Shortening of loan tenure', 'Change of debiting account']
export const DATA_STATE_LENGTH_PARTIAL = ['Lengthening of loan tenure', 'Partial prepayment']
export const DATA_STATE_LENGTH_SHORT = ['Shortening of loan tenure', 'Partial prepayment']
export const DATA_STATE_LENGTHENING_SHORT = ['Shortening of loan tenure', 'Lengthening of loan tenure']
export const DATA_STATE_DDA_SHORT = ['Shortening of loan tenure', 'Change of debiting account']
export const DATA_STATE_LENGTHENING_DDA = ['Lengthening of loan tenure', 'Change of debiting account']

export const DATA_STATE_LENGTHENING_PARTIAL_DDA = ['Lengthening of loan tenure','Partial prepayment', 'Change of debiting account']

export const DATA_STATE_PARTIAL_DDA = ['Repricing', 'Change of debiting account', 'Partial prepayment']
export const DATA_STATE_DDA = ['Change of debiting account']
export const DATA_REPRICING = ['Repricing'];
export const DATA_LENGTH = ['Lengthening of loan tenure'];
export const DATA_SHORT = ['Shortening of loan tenure'];
export const DATA_REPRICING_LENGTHENING = ['Repricing', 'Lengthening of loan tenure'];
export const DATA_REPRICING_LENGTHENING_SHORT = ['Repricing', 'Lengthening of loan tenure', 'Shortening of loan tenure'];
export const DATA_NON_REPRICING = ['Partial prepayment', 'Lengthening of loan tenure', 'Shortening of loan tenure', 'Change of debiting account'];
export const DATA_NON_REPRICING_1 = ['Shortening of loan tenure', 'Partial prepayment', 'Change of debiting account'];

export const DATA_MIX_THREE_OPT = {
  radio: {
    label: 'Will any of your loans still be within lock-in 1 month from now?'
  },
  select: {
    placeholder: 'Please select',
    label: 'What will your rate package be 1 month from now?'
  },
  feeOf500: 'A processing fee of $500 is payable (unless your loan comes with a free conversion) for your repricing request. This fee (if applicable) will be deducted after you accept our offer. Do ensure that the account from which the fee is to be deducted is active (i.e. a transaction has taken place in the last 12 months).'
}

export const FEE_OF_500 = 'A processing fee of $500 is payable (unless your loan comes with a free conversion) for your repricing request. This fee (if applicable) will be deducted after you accept our offer.';

export const FEE_OF_500_REPRICING = 'A processing fee of $500 is payable (unless your loan comes with a free conversion) for your repricing request. This fee (if applicable) will be deducted after you accept our offer. Do ensure that the account from which the fee is to be deducted is active (i.e. a transaction has taken place in the last 12 months).';

export const FEE_OF_500_LENGTHENING = 'A processing fee of $500 is payable for your lengthening of tenure request. This fee (if applicable) will be deducted after you accept our offer. Do ensure that the account from which the fee is to be deducted is active (i.e. a transaction has taken place in the last 12 months).';

export const FEE_OF_500_REPRICING_AND_LENGTHENING = 'A processing fee of $500 is payable (unless your loan comes with a free conversion) for your repricing and lengthening of tenure request. This fee (if applicable) will be deducted after you accept our offer. Do ensure that the account from which the fee is to be deducted is active (i.e. a transaction has taken place in the last 12 months).';



export const DATA_LANDING_DOCUMENT = {
  title: 'Documents you will need'
}

export const MANUAL = 'Manual';
export const SINGPASS = 'Singpass';
export const LENGTHEN_TENURE1 = 'lengthenTenure1';
export const LENGTHEN_TENURE2 = 'lengthenTenure2';

export const SLUG_POPUP = [
  'IRAS',
  'CPF contributions',
  'NOA',
  'CPF prop',
  'HDB',
  'OTP',
]

export const LIST_DOCUMENT_TENURE_2 = [
  {
    label: 'IRAS Property Dashboard page obtained via',
    link: 'IRAS myTax portal',
    href: '',
    popupName: 'IRAS'
  },
  {
    label: 'NRIC',
    link: '',
    href: '',
    popupName: 'IRAS'
  },
  // {
  //   label: 'Past 12 months’ CPF contribution history',
  //   link: '',
  //   href: '',
  //   popupName: 'CPF contributions'
  // },
  {
    label: 'IRAS Notice of Assessment',
    link: '',
    href: '',
    popupName: 'NOA'
  },
  {
    label: 'CPF Property Withdrawal',
    link: '',
    href: '',
    popupName: ''
  },
  {
    label: 'HDB infoweb printout – Financial Info',
    link: '',
    href: '',
    popupName: 'HDB'
  },
  // {
  //   label: 'Payslip',
  //   link: '',
  //   href: '',
  //   popupName: ''
  // }
];

export const LIST_DOCUMENT_JOINT_SG_TERM = [
  {
    label: 'Past 12 months’ CPF contribution history',
    link: '',
    href: '',
    popupName: 'CPF contributions'
  },
  {
    label: 'IRAS Notice of Assessment',
    link: '',
    href: '',
    popupName: 'NOA'
  },
  {
    label: 'CPF Property Withdrawal',
    link: '',
    href: '',
    popupName: ''
  },
  {
    label: 'HDB infoweb printout – Financial Info',
    link: '',
    href: '',
    popupName: 'HDB'
  }
];

export const LIST_DOCUMENT_JOINT_SG_NO_TERM = [
  {
    label: 'Past 12 months’ CPF contribution history',
    link: '',
    href: '',
    popupName: 'CPF contributions'
  },
  {
    label: 'IRAS Notice of Assessment',
    link: '',
    href: '',
    popupName: 'NOA'
  },
  {
    label: 'HDB infoweb printout – Financial Info',
    link: '',
    href: '',
    popupName: 'HDB'
  }
];

export const LIST_DOCUMENT_JOINT_NO_SG = [
  {
    label: 'Payslip',
    link: '',
    href: '',
    popupName: ''
  },
  {
    label: 'IRAS Notice of Assessment',
    link: '',
    href: '',
    popupName: 'NOA'
  }
];


export const LIST_DOCUMENT_JOINT_ONLY_LENGTH_SG = [
  {
    label: 'Past 12 months’ CPF contribution history',
    link: '',
    href: '',
    popupName: 'CPF contributions'
  },
  {
    label: 'IRAS Notice of Assessment',
    link: '',
    href: '',
    popupName: 'NOA'
  },
];

export const LIST_DOCUMENT_TENURE_1 = [
  {
    label: 'IRAS Property Dashboard page obtained via',
    link: 'IRAS myTax portal',
    href: '',
    popupName: 'IRAS'
  }
];


export const DATA_IRAS_POPUP = {
  title: 'IRAS Property Dashboard page',
  list: [
    {
      label: 'Go to',
      link: 'IRAS myTax portal',
      href: '/'
    },
    {
      label: `Select "Personal Tax" and log in using your Singpass account.`,
      link: '',
      href: ''
    },
    {
      label: `Go to Property > View Property Dashboard and click on "View Details" for your property. Save as PDF/print or screenshot this page. `,
      link: '',
      href: ''
    }
  ],
  printText: 'The printout/screenshot must show your name, address of property and applicable tax rate.'
};



export const DATA_HDB_POPUP = {
  title: 'HDB infoweb printout – Financial Info',
  list: [
    {
      label: 'Go to the ',
      link: 'HDB website',
      href: '/'
    },
    {
      label: `Log in using your Singpass account at "My HDBPage".`,
      link: '',
      href: ''
    },
    {
      label: `Click on "My Flat", "Purchased Flat" and then "Financial Info" under the "Purchased Flat" section on the left panel.`,
      link: '',
      href: ''
    }
  ],
  printText: 'Screenshot/print this page.'
};

export const DATA_NOA_POPUP = {
  title: 'IRAS Notice of Assessment',
  list: [
    {
      label: 'Go to the',
      link: 'IRAS website',
      href: '/'
    },
    {
      label: `Select "Personal Tax Matters".`,
      link: '',
      href: ''
    },
    {
      label: `Log in to myTaxPortal with your Singpass or IRAS PIN.`,
      link: '',
      href: ''
    },
    {
      label: `Go to "Notices" and select "Individual".`,
      link: '',
      href: ''
    },
    {
      label: `Click on "Notice of Assessment (Individual)" and screenshot/print this page.`,
      link: '',
      href: ''
    }
  ],
};


export const DATA_CPF_CONTRIBUTION_POPUP = {
  title: 'Past 12 months’ CPF contribution history',
  list: [
    {
      paragraphFirst: 'Log in to the',
      link: 'CPF',
      href: 'https://www.cpf.gov.sg/member',
      paragraphLast: 'site using your Singpass account.',
    },
    {
      label: `Go to "my cpf" on the top panel.`,
      link: '',
      href: ''
    },
    {
      label: `Under my statements, click on "Contribution History".`,
      link: '',
      href: ''
    },
    {
      label: `Select the past 12 months for date range.`,
      link: '',
      href: ''
    },
    {
      label: `Click on the icon on the top right to save as PDF.`,
      link: '',
      href: ''
    }
  ],
  printText: 'Screenshot/print this page. The screenshot/printout must clearly show:',
  listInfoPrint: [
    {
      label: 'Your name'
    },
    {
      label: 'CPF Account Number'
    },
    {
      label: 'Date range of CPF Contribution History'
    },
    {
      label: 'Name of employer'
    }
  ]
};

export const DATA_CPF_PROP_POPUP = {
  title: 'CPF Property Withdrawal Statement',
  list: [
    {
      paragraphFirst: 'Log in to the',
      link: 'CPF',
      href: 'https://www.cpf.gov.sg/member',
      paragraphLast: 'site using your Singpass account.',
    },
    {
      label: `Go to "my cpf" on the top panel.`,
      link: '',
      href: ''
    },
    {
      label: `Under my dashboards, click on "Home ownership".`,
      link: '',
      href: ''
    },
    {
      label: `Select the property to view information.`,
      link: '',
      href: ''
    },
    {
      label: `Click on "Principal amount and accrued interest".`,
      link: '',
      href: ''
    },
    {
      label: `Click on the icon at the top right to save as PDF.`,
      link: '',
      href: ''
    }
  ],
  printText: 'The printout must show your name, address of property, principal amount withdrawn, accrued interest and the date.',
};

export const LIST_DOCUMENT_TENURE_2_OWNER_SG_NO_TERM = [
  {
    label: 'IRAS Property Dashboard page obtained via',
    link: 'IRAS myTax portal',
    href: '',
    popupName: 'IRAS'
  },
  {
    label: 'NRIC',
    link: '',
    href: '',
    popupName: ''
  },
];

export const DOCUMENT_UPLOAD_UI = [
  {
    key: '',
    label: 'IRAS Property Tax'
  },
  {
    key: '',
    label: 'NRIC'
  },
  {
    key: '',
    label: 'Utilities bill'
  },
  {
    key: '',
    label: 'Passport'
  },
  {
    key: '',
    label: 'IRAS NOA'
  },
  {
    key: '',
    label: 'CPF Property Withdrawal'
  },
  {
    key: '',
    label: 'HDB infoweb'
  },
  {
    key: '',
    label: 'Payslip'
  },
  {
    key: '',
    label: 'CPF contribution'
  }
]
export const LIST_DATA_UPLOAD = [
  'IRAS Property Dashboard page obtained via',
  'NRIC',
  'Utilities bill dated within past 3 months showing your name and residential address',
  'Past 12 months’ CPF contribution history',
  'IRAS Notice of Assessment',
  'CPF Property Withdrawal',
  'HDB infoweb printout – Financial Info',
  'Payslip',
  'Passport',
  'Past 3 months’ payslips',
  'CPF Property Withdrawal Statement'
]

export const LIST_DATA_LABEL_UPLOAD = [
  'Upload IRAS Property Dashboard page  ',
  'Upload Front and back of NRIC',
  'Upload Utilities bill dated within past 3 months showing your name and residential address',
  'Upload Employer CPF contribution history (past 12 months)',
  'Upload IRAS Notice of Assessment',
  'Upload CPF Property Withdrawal',
  'Upload HDB infoweb printout – Financial Info',
  'Upload Payslip',
  'Upload Passport',
  "Upload Past 3 months’ payslips",
  "Upload CPF Property Withdrawal Statement"
]

export const LIST_DATA_RENAMING_FILES = [
  'IRAS Property Tax',
  'NRIC',
  'Utilities bill',
  'CPF contribution',
  'IRAS NOA',
  'CPF Property Withdrawal',
  'HDB infoweb',
  'Payslip',
  'Passport',
  "Payslip",
  "CPF Property Withdrawal"
]


export const LIST_DATA_LABEL_SHOW = [
  'IRAS MyTax Portal Property Dashboard screenshot',
  'Front and back of NRIC',
  'Utilities bill dated within past 3 months showing your name and residential address',
  'Employer CPF contribution history (past 12 months)',
  'IRAS Notice of Assessment',
  'CPF Property Withdrawal',
  'HDB infoweb printout – Financial Info',
  'Payslip',
  'Passport',
  'Past 3 months’ payslips',
  'CPF Property Withdrawal Statement'
]

export const LIST_DOCUMENT_TENURE_2_INVEST_SG_NO_TERM = [
  {
    label: 'Past 12 months’ CPF contribution history',
    link: '',
    href: '',
    popupName: 'CPF contributions'
  },
  {
    label: 'IRAS Notice of Assessment',
    link: '',
    href: '',
    popupName: 'NOA'
  },
  {
    label: 'HDB infoweb printout – Financial Info',
    link: '',
    href: '',
    popupName: 'HDB'
  },
];

export const LIST_DOCUMENT_TENURE_2_OWNER_NONE_SG_NO_TERM = [
  {
    label: 'IRAS Property Dashboard page obtained via',
    link: 'IRAS myTax portal',
    href: '',
    popupName: 'IRAS'
  },
  {
    label: 'Utilities bill dated within past 3 months showing your name and residential address',
    link: '',
    href: '',
    popupName: ''
  },
  {
    label: 'Passport',
    link: '',
    href: '',
    popupName: ''
  },
];

export const LIST_DOCUMENT_TENURE_2_OWNER_SG_HAVE_TERM = [
  // {
  //   label: 'IRAS Property Dashboard page obtained via',
  //   link: 'IRAS myTax portal',
  //   href: '',
  //   popupName: 'IRAS'
  // },
  // {
  //   label: 'NRIC',
  //   link: '',
  //   href: '',
  //   popupName: ''
  // },
  // {
  //   label: 'Past 12 months’ CPF contribution history',
  //   link: '',
  //   href: '',
  //   popupName: 'CPF contributions'
  // },
  // {
  //   label: 'IRAS Notice of Assessment',
  //   link: '',
  //   href: '',
  //   popupName: 'NOA'
  // },
  {
    label: 'CPF Property Withdrawal',
    link: '',
    href: '',
    popupName: ''
  },
  {
    label: 'HDB infoweb printout – Financial Info',
    link: '',
    href: '',
    popupName: 'HDB'
  }
];

export const LIST_DOCUMENT_TENURE_2_OWNER_SG_HAVE_TERM_REPRICING_AND_NO_REPRICING_SG = [
  {
    label: 'CPF Property Withdrawal',
    link: '',
    href: '',
    popupName: ''
  },
  {
    label: 'HDB infoweb printout – Financial Info',
    link: '',
    href: '',
    popupName: 'HDB'
  },
  {
    label: 'NRIC',
    link: '',
    href: '',
    popupName: ''
  }
]

export const LIST_DOCUMENT_TENURE_2_OWNER_SG_HAVE_TERM_REPRICING_AND_NO_REPRICING_NOT_SG = [
  {
    label: 'CPF Property Withdrawal',
    link: '',
    href: '',
    popupName: ''
  },
  {
    label: 'HDB infoweb printout – Financial Info',
    link: '',
    href: '',
    popupName: 'HDB'
  },
  {
    label: 'Passport',
    link: '',
    href: '',
    popupName: ''
  }
]

export const LIST_DOCUMENT_TENURE_2_OWNER_NONE_SG_HAVE_TERM = [
  {
    label: 'IRAS Property Dashboard page obtained via',
    link: 'IRAS myTax portal',
    href: '',
    popupName: 'IRAS'
  },
  {
    label: 'Utilities bill dated within past 3 months showing your name and residential address',
    link: '',
    href: '',
    popupName: ''
  },
  {
    label: 'Payslip',
    link: '',
    href: '',
    popupName: ''
  },
  {
    label: 'IRAS Notice of Assessment',
    link: '',
    href: '',
    popupName: 'NOA'
  },
  {
    label: 'Passport',
    link: '',
    href: '',
    popupName: ''
  }
];

export const LIST_DOCUMENT_TENURE_2_INVEST_NONE_SG_HAVE_TERM = [
  // {
  //   label: 'Past 12 months’ CPF contribution history',
  //   link: '',
  //   href: '',
  //   popupName: 'CPF contributions'
  // },
  // {
  //   label: 'IRAS Notice of Assessment',
  //   link: '',
  //   href: '',
  //   popupName: 'NOA',
  // },
  {
    label: 'CPF Property Withdrawal Statement',
    link: '',
    href: '',
    popupName: 'CPF prop'
  },
  {
    label: 'HDB infoweb printout – Financial Info',
    link: '',
    href: '',
    popupName: 'HDB'
  }
];

export const LIST_DOCUMENT_NON_REPRICING_SG = [
  {
    label: 'NRIC',
    link: '',
    href: '',
    popupName: ''
  }
]

export const LIST_DOCUMENT_NON_REPRICING_NONE_SG = [
  {
    label: 'Passport',
    link: '',
    href: '',
    popupName: ''
  }
]


export const LIST_DOCUMENT_TENURE_2_INVEST_NONE_SG_BOTH_TERM = [
  {
    label: 'Past 3 months’ payslips',
    link: '',
    href: '',
    popupName: ''
  },
  {
    label: 'IRAS Notice of Assessment',
    link: '',
    href: '',
    popupName: 'NOA',
  },
  {
    label: 'Passport',
    link: '',
    href: '',
    popupName: ''
  },
];


export const LIST_NATIONAL = [
  {
    key: 'Singapore citizen/PR',
    value: 'Singapore citizen/PR',
  },
  {
    key: 'Foreigner',
    value: 'Foreigner',
  }
];

export const LIST_TERM_LOAN = [
  {
    key: 'do not have a term loan',
    value: 'do not have a term loan',
  },
  {
    key: 'have a term loan',
    value: 'have a term loan',
  }
];

export const DATA_DOCUMENT = {
  documentYouNeed: `Documents you’ll need if you are a`,
  and: 'and',
  forYourMortgaged: 'for your mortgaged property.'
}

export const NEXT = 'Next';
export const REVIEW = 'Review';
export const SUBMIT = 'Submit';
export const APPLY_WITH_SINGPASS = 'Apply with Singpass';
export const LOGIN_WITH_OCBC_MYINFO_SIMULATOR = 'Login with OCBC Myinfo Simulator'
export const LOGIN_WITH_SINGPASS = 'Log in with Singpass';
export const SPEED_UP_APPLICATION = 'Speed up application?';
export const DONT_HAVE_SINGPASS = `Do not have Singpass?`;
export const FILL_IN_ONLINE_APPLICATION_FORM = 'Fill in online application form';
export const WHAT_SERVICING_REQUEST = 'What request(s) would you like to make today?';
export const MSG_ERR_CARD_CHECKBOX = 'Please select at least one service';
export const REVIEW_SLUG = 'review';
export const LIST_ACCOUNT_NUMBER = [
  {
    name: 'one',
    value: '1',
  },
  {
    name: 'two',
    value: '2',
  },
  {
    name: 'three',
    value: '3',
  },
  {
    name: 'four',
    value: '4',
  },
]

export const LIST_BORROWER_NUMBER = [
  {
    name: 'Only myself',
    value: 'Only myself',
  },
  {
    name: '2 borrowers',
    value: '2 borrowers',
  },
  {
    name: '3 borrowers',
    value: '3 borrowers',
  },
  {
    name: '4 borrowers',
    value: '4 borrowers',
  },
]

export const LIST_COUNTRIES_CODE = [{
  name: 'Singapore',
  value: '+65',
  code: 'SG',
},
{
  name: 'Malaysia',
  value: '+60',
  code: 'MY',
},
{
  name: 'Afghanistan',
  value: '+93',
  code: 'AF',
},
{
  name: 'Albania',
  value: '+355',
  code: 'AL',
},
{
  name: 'Algeria',
  value: '+213',
  code: 'DZ',
},
{
  name: 'AmericanSamoa',
  value: '+1 684',
  code: 'AS',
},
{
  name: 'Andorra',
  value: '+376',
  code: 'AD',
},
{
  name: 'Angola',
  value: '+244',
  code: 'AO',
},
{
  name: 'Anguilla',
  value: '+1 264',
  code: 'AI',
},
{
  name: 'Antigua and Barbuda',
  value: '+1268',
  code: 'AG',
},
{
  name: 'Argentina',
  value: '+54',
  code: 'AR',
},
{
  name: 'Armenia',
  value: '+374',
  code: 'AM',
},
{
  name: 'Aruba',
  value: '+297',
  code: 'AW',
},
{
  name: 'Australia',
  value: '+61',
  code: 'AU',
},
{
  name: 'Austria',
  value: '+43',
  code: 'AT',
},
{
  name: 'Azerbaijan',
  value: '+994',
  code: 'AZ',
},
{
  name: 'Bahamas',
  value: '+1 242',
  code: 'BS',
},
{
  name: 'Bahrain',
  value: '+973',
  code: 'BH',
},
{
  name: 'Bangladesh',
  value: '+880',
  code: 'BD',
},
{
  name: 'Barbados',
  value: '+1 246',
  code: 'BB',
},
{
  name: 'Belarus',
  value: '+375',
  code: 'BY',
},
{
  name: 'Belgium',
  value: '+32',
  code: 'BE',
},
{
  name: 'Belize',
  value: '+501',
  code: 'BZ',
},
{
  name: 'Benin',
  value: '+229',
  code: 'BJ',
},
{
  name: 'Bermuda',
  value: '+1 441',
  code: 'BM',
},
{
  name: 'Bhutan',
  value: '+975',
  code: 'BT',
},
{
  name: 'Bosnia and Herzegovina',
  value: '+387',
  code: 'BA',
},
{
  name: 'Botswana',
  value: '+267',
  code: 'BW',
},
{
  name: 'Brazil',
  value: '+55',
  code: 'BR',
},
{
  name: 'British Indian Ocean Territory',
  value: '+246',
  code: 'IO',
},
{
  name: 'Bulgaria',
  value: '+359',
  code: 'BG',
},
{
  name: 'Burkina Faso',
  value: '+226',
  code: 'BF',
},
{
  name: 'Burundi',
  value: '+257',
  code: 'BI',
},
{
  name: 'Cambodia',
  value: '+855',
  code: 'KH',
},
{
  name: 'Cameroon',
  value: '+237',
  code: 'CM',
},
{
  name: 'Canada',
  value: '+1',
  code: 'CA',
},
{
  name: 'Cape Verde',
  value: '+238',
  code: 'CV',
},
{
  name: 'Cayman Islands',
  value: '+ 345',
  code: 'KY',
},
{
  name: 'Central African Republic',
  value: '+236',
  code: 'CF',
},
{
  name: 'Chad',
  value: '+235',
  code: 'TD',
},
{
  name: 'Chile',
  value: '+56',
  code: 'CL',
},
{
  name: 'China',
  value: '+86',
  code: 'CN',
},
{
  name: 'Christmas Island',
  value: '+61',
  code: 'CX',
},
{
  name: 'Colombia',
  value: '+57',
  code: 'CO',
},
{
  name: 'Comoros',
  value: '+269',
  code: 'KM',
},
{
  name: 'Congo',
  value: '+242',
  code: 'CG',
},
{
  name: 'Cook Islands',
  value: '+682',
  code: 'CK',
},
{
  name: 'Costa Rica',
  value: '+506',
  code: 'CR',
},
{
  name: 'Croatia',
  value: '+385',
  code: 'HR',
},
{
  name: 'Cuba',
  value: '+53',
  code: 'CU',
},
{
  name: 'Cyprus',
  value: '+537',
  code: 'CY',
},
{
  name: 'Czech Republic',
  value: '+420',
  code: 'CZ',
},
{
  name: 'Denmark',
  value: '+45',
  code: 'DK',
},
{
  name: 'Djibouti',
  value: '+253',
  code: 'DJ',
},
{
  name: 'Dominica',
  value: '+1 767',
  code: 'DM',
},
{
  name: 'Dominican Republic',
  value: '+1 849',
  code: 'DO',
},
{
  name: 'Ecuador',
  value: '+593',
  code: 'EC',
},
{
  name: 'Egypt',
  value: '+20',
  code: 'EG',
},
{
  name: 'El Salvador',
  value: '+503',
  code: 'SV',
},
{
  name: 'Equatorial Guinea',
  value: '+240',
  code: 'GQ',
},
{
  name: 'Eritrea',
  value: '+291',
  code: 'ER',
},
{
  name: 'Estonia',
  value: '+372',
  code: 'EE',
},
{
  name: 'Ethiopia',
  value: '+251',
  code: 'ET',
},
{
  name: 'Faroe Islands',
  value: '+298',
  code: 'FO',
},
{
  name: 'Fiji',
  value: '+679',
  code: 'FJ',
},
{
  name: 'Finland',
  value: '+358',
  code: 'FI',
},
{
  name: 'France',
  value: '+33',
  code: 'FR',
},
{
  name: 'French Guiana',
  value: '+594',
  code: 'GF',
},
{
  name: 'French Polynesia',
  value: '+689',
  code: 'PF',
},
{
  name: 'Gabon',
  value: '+241',
  code: 'GA',
},
{
  name: 'Gambia',
  value: '+220',
  code: 'GM',
},
{
  name: 'Georgia',
  value: '+995',
  code: 'GE',
},
{
  name: 'Germany',
  value: '+49',
  code: 'DE',
},
{
  name: 'Ghana',
  value: '+233',
  code: 'GH',
},
{
  name: 'Gibraltar',
  value: '+350',
  code: 'GI',
},
{
  name: 'Greece',
  value: '+30',
  code: 'GR',
},
{
  name: 'Greenland',
  value: '+299',
  code: 'GL',
},
{
  name: 'Grenada',
  value: '+1 473',
  code: 'GD',
},
{
  name: 'Guadeloupe',
  value: '+590',
  code: 'GP',
},
{
  name: 'Guam',
  value: '+1 671',
  code: 'GU',
},
{
  name: 'Guatemala',
  value: '+502',
  code: 'GT',
},
{
  name: 'Guinea',
  value: '+224',
  code: 'GN',
},
{
  name: 'Guinea-Bissau',
  value: '+245',
  code: 'GW',
},
{
  name: 'Guyana',
  value: '+595',
  code: 'GY',
},
{
  name: 'Haiti',
  value: '+509',
  code: 'HT',
},
{
  name: 'Honduras',
  value: '+504',
  code: 'HN',
},
{
  name: 'Hungary',
  value: '+36',
  code: 'HU',
},
{
  name: 'Iceland',
  value: '+354',
  code: 'IS',
},
{
  name: 'India',
  value: '+91',
  code: 'IN',
},
{
  name: 'Indonesia',
  value: '+62',
  code: 'ID',
},
{
  name: 'Iraq',
  value: '+964',
  code: 'IQ',
},
{
  name: 'Ireland',
  value: '+353',
  code: 'IE',
},
{
  name: 'Israel',
  value: '+972',
  code: 'IL',
},
{
  name: 'Italy',
  value: '+39',
  code: 'IT',
},
{
  name: 'Jamaica',
  value: '+1 876',
  code: 'JM',
},
{
  name: 'Japan',
  value: '+81',
  code: 'JP',
},
{
  name: 'Jordan',
  value: '+962',
  code: 'JO',
},
{
  name: 'Kazakhstan',
  value: '+7 7',
  code: 'KZ',
},
{
  name: 'Kenya',
  value: '+254',
  code: 'KE',
},
{
  name: 'Kiribati',
  value: '+686',
  code: 'KI',
},
{
  name: 'Kuwait',
  value: '+965',
  code: 'KW',
},
{
  name: 'Kyrgyzstan',
  value: '+996',
  code: 'KG',
},
{
  name: 'Latvia',
  value: '+371',
  code: 'LV',
},
{
  name: 'Lebanon',
  value: '+961',
  code: 'LB',
},
{
  name: 'Lesotho',
  value: '+266',
  code: 'LS',
},
{
  name: 'Liberia',
  value: '+231',
  code: 'LR',
},
{
  name: 'Liechtenstein',
  value: '+423',
  code: 'LI',
},
{
  name: 'Lithuania',
  value: '+370',
  code: 'LT',
},
{
  name: 'Luxembourg',
  value: '+352',
  code: 'LU',
},
{
  name: 'Madagascar',
  value: '+261',
  code: 'MG',
},
{
  name: 'Malawi',
  value: '+265',
  code: 'MW',
},
{
  name: 'Maldives',
  value: '+960',
  code: 'MV',
},
{
  name: 'Mali',
  value: '+223',
  code: 'ML',
},
{
  name: 'Malta',
  value: '+356',
  code: 'MT',
},
{
  name: 'Marshall Islands',
  value: '+692',
  code: 'MH',
},
{
  name: 'Martinique',
  value: '+596',
  code: 'MQ',
},
{
  name: 'Mauritania',
  value: '+222',
  code: 'MR',
},
{
  name: 'Mauritius',
  value: '+230',
  code: 'MU',
},
{
  name: 'Mayotte',
  value: '+262',
  code: 'YT',
},
{
  name: 'Mexico',
  value: '+52',
  code: 'MX',
},
{
  name: 'Monaco',
  value: '+377',
  code: 'MC',
},
{
  name: 'Mongolia',
  value: '+976',
  code: 'MN',
},
{
  name: 'Montenegro',
  value: '+382',
  code: 'ME',
},
{
  name: 'Montserrat',
  value: '+1664',
  code: 'MS',
},
{
  name: 'Morocco',
  value: '+212',
  code: 'MA',
},
{
  name: 'Myanmar',
  value: '+95',
  code: 'MM',
},
{
  name: 'Namibia',
  value: '+264',
  code: 'NA',
},
{
  name: 'Nauru',
  value: '+674',
  code: 'NR',
},
{
  name: 'Nepal',
  value: '+977',
  code: 'NP',
},
{
  name: 'Netherlands',
  value: '+31',
  code: 'NL',
},
{
  name: 'Netherlands Antilles',
  value: '+599',
  code: 'AN',
},
{
  name: 'New Caledonia',
  value: '+687',
  code: 'NC',
},
{
  name: 'New Zealand',
  value: '+64',
  code: 'NZ',
},
{
  name: 'Nicaragua',
  value: '+505',
  code: 'NI',
},
{
  name: 'Niger',
  value: '+227',
  code: 'NE',
},
{
  name: 'Nigeria',
  value: '+234',
  code: 'NG',
},
{
  name: 'Niue',
  value: '+683',
  code: 'NU',
},
{
  name: 'Norfolk Island',
  value: '+672',
  code: 'NF',
},
{
  name: 'Northern Mariana Islands',
  value: '+1 670',
  code: 'MP',
},
{
  name: 'Norway',
  value: '+47',
  code: 'NO',
},
{
  name: 'Oman',
  value: '+968',
  code: 'OM',
},
{
  name: 'Pakistan',
  value: '+92',
  code: 'PK',
},
{
  name: 'Palau',
  value: '+680',
  code: 'PW',
},
{
  name: 'Panama',
  value: '+507',
  code: 'PA',
},
{
  name: 'Papua New Guinea',
  value: '+675',
  code: 'PG',
},
{
  name: 'Paraguay',
  value: '+595',
  code: 'PY',
},
{
  name: 'Peru',
  value: '+51',
  code: 'PE',
},
{
  name: 'Philippines',
  value: '+63',
  code: 'PH',
},
{
  name: 'Poland',
  value: '+48',
  code: 'PL',
},
{
  name: 'Portugal',
  value: '+351',
  code: 'PT',
},
{
  name: 'Puerto Rico',
  value: '+1 939',
  code: 'PR',
},
{
  name: 'Qatar',
  value: '+974',
  code: 'QA',
},
{
  name: 'Romania',
  value: '+40',
  code: 'RO',
},
{
  name: 'Rwanda',
  value: '+250',
  code: 'RW',
},
{
  name: 'Samoa',
  value: '+685',
  code: 'WS',
},
{
  name: 'San Marino',
  value: '+378',
  code: 'SM',
},
{
  name: 'Saudi Arabia',
  value: '+966',
  code: 'SA',
},
{
  name: 'Senegal',
  value: '+221',
  code: 'SN',
},
{
  name: 'Serbia',
  value: '+381',
  code: 'RS',
},
{
  name: 'Seychelles',
  value: '+248',
  code: 'SC',
},
{
  name: 'Sierra Leone',
  value: '+232',
  code: 'SL',
},
{
  name: 'Slovakia',
  value: '+421',
  code: 'SK',
},
{
  name: 'Slovenia',
  value: '+386',
  code: 'SI',
},
{
  name: 'Solomon Islands',
  value: '+677',
  code: 'SB',
},
{
  name: 'South Africa',
  value: '+27',
  code: 'ZA',
},
{
  name: 'South Georgia and the South Sandwich Islands',
  value: '+500',
  code: 'GS',
},
{
  name: 'Spain',
  value: '+34',
  code: 'ES',
},
{
  name: 'Sri Lanka',
  value: '+94',
  code: 'LK',
},
{
  name: 'Sudan',
  value: '+249',
  code: 'SD',
},
{
  name: 'Suriname',
  value: '+597',
  code: 'SR',
},
{
  name: 'Swaziland',
  value: '+268',
  code: 'SZ',
},
{
  name: 'Sweden',
  value: '+46',
  code: 'SE',
},
{
  name: 'Switzerland',
  value: '+41',
  code: 'CH',
},
{
  name: 'Tajikistan',
  value: '+992',
  code: 'TJ',
},
{
  name: 'Thailand',
  value: '+66',
  code: 'TH',
},
{
  name: 'Togo',
  value: '+228',
  code: 'TG',
},
{
  name: 'Tokelau',
  value: '+690',
  code: 'TK',
},
{
  name: 'Tonga',
  value: '+676',
  code: 'TO',
},
{
  name: 'Trinidad and Tobago',
  value: '+1 868',
  code: 'TT',
},
{
  name: 'Tunisia',
  value: '+216',
  code: 'TN',
},
{
  name: 'Turkey',
  value: '+90',
  code: 'TR',
},
{
  name: 'Turkmenistan',
  value: '+993',
  code: 'TM',
},
{
  name: 'Turks and Caicos Islands',
  value: '+1 649',
  code: 'TC',
},
{
  name: 'Tuvalu',
  value: '+688',
  code: 'TV',
},
{
  name: 'Uganda',
  value: '+256',
  code: 'UG',
},
{
  name: 'Ukraine',
  value: '+380',
  code: 'UA',
},
{
  name: 'United Arab Emirates',
  value: '+971',
  code: 'AE',
},
{
  name: 'United Kingdom',
  value: '+44',
  code: 'GB',
},
{
  name: 'United States',
  value: '+1',
  code: 'US',
},
{
  name: 'Uruguay',
  value: '+598',
  code: 'UY',
},
{
  name: 'Uzbekistan',
  value: '+998',
  code: 'UZ',
},
{
  name: 'Vanuatu',
  value: '+678',
  code: 'VU',
},
{
  name: 'Wallis and Futuna',
  value: '+681',
  code: 'WF',
},
{
  name: 'Yemen',
  value: '+967',
  code: 'YE',
},
{
  name: 'Zambia',
  value: '+260',
  code: 'ZM',
},
{
  name: 'Zimbabwe',
  value: '+263',
  code: 'ZW',
},
{
  name: 'land Islands',
  value: '',
  code: 'AX',
},
{
  name: 'Antarctica',
  value: null,
  code: 'AQ',
},
{
  name: 'Bolivia, Plurinational State of',
  value: '+591',
  code: 'BO',
},
{
  name: 'Brunei Darussalam',
  value: '+673',
  code: 'BN',
},
{
  name: 'Cocos (Keeling) Islands',
  value: '+61',
  code: 'CC',
},
{
  name: 'Congo, The Democratic Republic of the',
  value: '+243',
  code: 'CD',
},
{
  name: 'Cote d\'Ivoire',
  value: '+225',
  code: 'CI',
},
{
  name: 'Falkland Islands (Malvinas)',
  value: '+500',
  code: 'FK',
},
{
  name: 'Guernsey',
  value: '+44',
  code: 'GG',
},
{
  name: 'Holy See (Vatican City State)',
  value: '+379',
  code: 'VA',
},
{
  name: 'Hong Kong',
  value: '+852',
  code: 'HK',
},
{
  name: 'Iran, Islamic Republic of',
  value: '+98',
  code: 'IR',
},
{
  name: 'Isle of Man',
  value: '+44',
  code: 'IM',
},
{
  name: 'Jersey',
  value: '+44',
  code: 'JE',
},
{
  name: 'Korea, Democratic People\'s Republic of',
  value: '+850',
  code: 'KP',
},
{
  name: 'Korea, Republic of',
  value: '+82',
  code: 'KR',
},
{
  name: 'Lao People\'s Democratic Republic',
  value: '+856',
  code: 'LA',
},
{
  name: 'Libyan Arab Jamahiriya',
  value: '+218',
  code: 'LY',
},
{
  name: 'Macao',
  value: '+853',
  code: 'MO',
},
{
  name: 'Macedonia, The Former Yugoslav Republic of',
  value: '+389',
  code: 'MK',
},
{
  name: 'Micronesia, Federated States of',
  value: '+691',
  code: 'FM',
},
{
  name: 'Moldova, Republic of',
  value: '+373',
  code: 'MD',
},
{
  name: 'Mozambique',
  value: '+258',
  code: 'MZ',
},
{
  name: 'Palestinian Territory, Occupied',
  value: '+970',
  code: 'PS',
},
{
  name: 'Pitcairn',
  value: '+872',
  code: 'PN',
},
{
  name: 'Réunion',
  value: '+262',
  code: 'RE',
},
{
  name: 'Russia',
  value: '+7',
  code: 'RU',
},
{
  name: 'Saint Barthélemy',
  value: '+590',
  code: 'BL',
},
{
  name: 'Saint Helena, Ascension and Tristan Da Cunha',
  value: '+290',
  code: 'SH',
},
{
  name: 'Saint Kitts and Nevis',
  value: '+1 869',
  code: 'KN',
},
{
  name: 'Saint Lucia',
  value: '+1 758',
  code: 'LC',
},
{
  name: 'Saint Martin',
  value: '+590',
  code: 'MF',
},
{
  name: 'Saint Pierre and Miquelon',
  value: '+508',
  code: 'PM',
},
{
  name: 'Saint Vincent and the Grenadines',
  value: '+1 784',
  code: 'VC',
},
{
  name: 'Sao Tome and Principe',
  value: '+239',
  code: 'ST',
},
{
  name: 'Somalia',
  value: '+252',
  code: 'SO',
},
{
  name: 'Svalbard and Jan Mayen',
  value: '+47',
  code: 'SJ',
},
{
  name: 'Syrian Arab Republic',
  value: '+963',
  code: 'SY',
},
{
  name: 'Taiwan, Province of China',
  value: '+886',
  code: 'TW',
},
{
  name: 'Tanzania, United Republic of',
  value: '+255',
  code: 'TZ',
},
{
  name: 'Timor-Leste',
  value: '+670',
  code: 'TL',
},
{
  name: 'Venezuela, Bolivarian Republic of',
  value: '+58',
  code: 'VE',
},
{
  name: 'Viet Nam',
  value: '+84',
  code: 'VN',
},
{
  name: 'Virgin Islands, British',
  value: '+1 284',
  code: 'VG',
},
{
  name: 'Virgin Islands, U.S.',
  value: '+1 340',
  code: 'VI',
},
];

export const DATA_NONE_REPRICING_REQUEST = {
  titleRequest: 'Full redemption of all loans',
  title: 'Non-repricing requests',
  titlePartial: 'Partial prepayment',
  subTitlePartial: 'Your prepayment date will be 1 month from now so that there will be no interest-in-lieu fee.',
  subTitlePartialNo: 'Your prepayment date will be the next Rate Review Date (RRD) after the 1-month notice period. This is so that there will be no interest-in-lieu payable.',
  subTitlePartialNoOtherFixed: 'Your prepayment date will be 1 month from now so that there will be no interest-in-lieu payable.',
  subTitlePartialYes: 'Your prepayment date will be 1 month from now. This is so that there will be no interest-in-lieu payable on top of the prepayment fee.',
  subTitlePartialYesFixed: 'Your prepayment date will be 1 month from now. This is so that there will be no interest-in-lieu on top of the prepayment fee payable.',
  subTitlePartialYesCof: 'Your prepayment date will be the next Rate Review Date (RRD) after the 1-month notice period. This is so that there will be no interest-in-lieu payable or any other fees on top of the prepayment fee.',
  labelCheckboxPartial: 'Select at least one loan account to prepay',
  labelCheckboxLengthening: 'Select at least one loan account for lengthening of tenure',
  labelCheckboxShorten: 'Select at least one loan account for shortening of tenure',
  infoRow: 'Loan account number',
  labelSelect: 'Payment mode',
  placeholder: 'Please select',
  titleLengthening: 'Lengthening of loan tenure',
  titleShortening: 'Shortening of loan tenure',
  labelInput: 'Proposed new loan tenure (years)',
  labelInputLengthening: 'How many years do you wish to lengthen your tenure to?',
  labelInputRecingLength: 'Proposed new loan tenure:',
  labelInputShorten: 'How many years do you wish to shorten your tenure to?',
  titleDebiting: 'Change of Direct Debiting Authorisation account',
  subTitleDebiting: 'This will apply to all of your loan accounts for the mortgaged property.',
  currentDebiting: 'Account that you currently use',
  newOCBC: 'OCBC account that you now want to use',
  continueLater: 'Continue later',
  labelOptionToRevise: 'Monthly instalment option',
  cashPrepayment: 'Cash prepayment amount',
  enterNearestThousand: 'Round this up/down to the nearest thousand',
  CPFPrepaymentAmount: 'CPF prepayment amount',
  helpTextMonthlyInstalmentOption: 'If keeping the instalment amount unchanged results in the lengthening of your loan tenure, we will not be able to act on these instructions. Instead, we will have to revise your instalment amount while keeping the loan tenure unchanged. We will send you a letter with the revised monthly instalment amount.'
}

export const LIST_REPRICING_REQUEST = [{
  text: '0987654321',
  check: true,
},
{
  text: '2345678901',
  check: true,
},
{
  text: '6540680534',
  check: true,
},
{
  text: '4530498056',
  check: true,
}]


export const LIST_ACCOUNT_SINGLE = [{
  text: '0987654321',
  check: true,
}]


export const LIST_PAYMENT_METHOD = [{
  value: 'Cash only using OCBC debiting account',
  key: 'Cash only using OCBC debiting account',
},
{
  value: 'CPF only',
  key: 'CPF only',
},
{
  value: 'Cash using OCBC debiting account and CPF',
  key: 'Cash using OCBC debiting account and CPF',
}
]

export const LIST_PAYMENT_METHOD_FOREIGNER = [{
  value: 'Cash only using OCBC debiting account',
  key: 'Cash only using OCBC debiting account',
}
]

export const LIST_REQUEST_REPRICING = {
  multiple: [...DATA_STATE_REPRICING_LENGTHENING_PARTIAL_DDA],
  partialPrepayment: ['Partial prepayment'],
  lengtheningOfLoanTenure: ['Lengthening of loan tenure'],
  shorteningOfLoanTenure: ['Shortening of loan tenure'],
  fullRedemptionOfAllLoans: ['Full redemption of loan'],
  ddaAccount: ['Change of debiting account'],
  repricing: ['Repricing']
}

export const LIST_DATA_TNC = {
  repricing: 'Repricing',
  lengtheningOfLoanTenure: 'Lengthening_of_tenure',
  shorteningOfLoanTenure: 'Shortening_of_tenure',
  fullRedemptionOfAllLoans: 'For_all_request',
  ddaAccount: 'Change_of_DDA',
  partialPrepayment: 'Partial_prepayment',
  repricingandlengtheningOfLoanTenure: 'Repricing_and_Lengthening_of_tenure'
}

export const LIST_DATA_OPTION_TO_REVISE = [
  {
    value: 'Revise the instalment amount accordingly',
    key: 'Revise the instalment amount accordingly',
  },
  {
    value: 'Keep the instalment amount unchanged (for fully-disbursed loans only)',
    key: 'Keep the instalment amount unchanged (for fully-disbursed loans only)',
  }
]

export const LIST_DATA_CURRENCY = [
  {
    value: 'Singapore dollars (SGD)',
    key: 'Singapore dollars (SGD)',
  },
  {
    value: 'British Pounds (GBP)',
    key: 'British Pounds (GBP)',
  },
  {
    value: 'US dollar (USD)',
    key: 'US dollar (USD)',
  },
  {
    value: 'Australian dollars (AUD)',
    key: 'Australian dollars (AUD)',
  },
  {
    value: 'Malaysian Ringgit (MYR)',
    key: 'Malaysian Ringgit (MYR)',
  },
  {
    value: 'Japanese Yen (Yen)',
    key: 'Japanese Yen (Yen)',
  }
]

export const LIST_PROPERTY = ['Local', 'Overseas']

export const LIST_PROPERTY_COUNTRY = ['Singapore', 'Foreigner']

export const DAT_FULL_REDEMPTION_OF_ALL_LOANS = {
  subTitleTwoMonths: 'Your prepayment date will be 2 months from now so that there will not be any interest-in-lieu payable. If your loan is tagged to Singapore Inter-Bank Offer Rate (SIBOR), Singapore Overnight Rate (SOR) or Cost of Funds, the prepayment date will be the next Rate Review Date (RRD) following the 2 months’ notice period. If the RRD does not fall on a working day, prepayment should be made on the preceding working day to avoid incurring any prepayment fee.',
  subTitleThreeMonths: 'Your prepayment date will be 3 months from now so that there will not be any interest-in-lieu payable. If your loan is tagged to Singapore Inter-Bank Offer Rate (SIBOR), Singapore Overnight Rate (SOR) or Cost of Funds, the prepayment date will be the next Rate Review Date (RRD) following the 3 months’ notice period. If the RRD does not fall on a working day, prepayment should be made on the preceding working day to avoid incurring any prepayment fee.',
  labelLawFirmAppointment: 'Law firm appointment',
  labelInput: 'Law firm you want to appoint',
  helperTextInput: 'Provide full business name',
  labelRadio: 'Mode of settlement',
}

export const ACCOUNT_REQUEST = ['Single', 'Multiple']
export const LIST_DOCUMENT_REQUEST = ['IRAS Property Dashboard page obtained via', 'NRIC']

export const NRIC = 'NRIC'
export const PASSPORT = 'Passport'
export const UTILITY_BILL = 'Utilities bill dated within past 3 months showing your name and residential address'
export const PAYSLIPS = 'Payslip'
export const PAYSLIPS_THREE_MONTHS = 'Past 3 months’ payslips'
export const CPF_PROPERTY_WITHDRAWAL = 'CPF Property Withdrawal'

export const LIST_INPUT_CONVERT_NAME = [
  'IRAS MyTax Portal Property Dashboard screenshot',
  'front and back of NRIC',
  'Employer CPF contribution history (past 12 months)',
  'IRAS Notice of Assessment',
  'CPF Property Withdrawal',
  'HDB infoweb printout – Financial Info',
  'CPF Property Withdrawal Statement'
]

export const RESEND_PASSWORD = 'Rensend password';
export const SWITCH_TO_TOKEN = 'Switch to Token';
export const SWITCH_TO_SMS = 'Switch to SMS';
export const OKAY = 'Okay';
export const VERIFY_IT_IS_YOU = 'Verify it is you';
export const TYPE_VERIFY_IT_IS_YOU = ['one-time', 'otp', 'stepper-available'];
export const TITLE_ONE_TIME_VERIFY = 'Enter the one-time password sent to XXXX 4321';
export const TITLE_OTP_VERIFY = 'Press the "OTP" button on your hardware token, and enter the 6-digit code below.';
export const TITLE_OTP_VERIFY_DIGIT = 'Enter the 6-digit code';

export const STEP_INSTRUCTION = [{
  label: 'Launch your OCBC Mobile Banking app, and go to "More Services"',
  key: 'step1'
},
{
  label: 'Tap on "OneToken"',
  key: 'step2'
},
{
  label: 'Select "One Time Password"',
  key: 'step3'
},
{
  label: 'Enter the 6-digit code below',
  key: 'step4'
}
];

export const OTP_JOINT_MANUAL = [
  'repricing-lengthening-term-sg',
  'repricing-lengthening-no-term-sg',
  'repricing-lengthening-no-or-term-fr',
  'only-lengthening-no-or-term-sg',
  'only-lengthening-no-or-term-fr',
]

export const REVIEW_PAGE = {
  title: 'Review and submit',
  subRepricing: 'All loan accounts under the mortgaged property will be repriced.',
  titleUpload: 'Uploaded documents'
}

export const I_AGREE = [{
  text: '',
  check: false,
}]

export const CONDITION_AGREE = 'I agree that my repricing application is subject to the satisfactory conduct of all and any borrowers’, mortgagors’ and guarantors’ 	accounts with OCBC Bank. I further agree, and have the consent of all and any co-borrowers, mortgagors any guarantors to agree, 	that external bureau checks will be performed by OCBC Bank.'
export const IF_AN_OFFERS = 'If an offer is made and accepted pursuant to my application, the repricing will be binding (where applicable) on all and any borrowers, 	mortgagors and guarantors, in accordance with the applicable Terms and Conditions available at'
export const HREF_HOME_LOANS = 'www.ocbc.com/homeloans'
export const IF_AN_OFFERS_IF_APPLICABLE = 'If an offer is made and accepted pursuant to my application, I agree that the repricing fee – which will be stated in OCBC Bank’s email, 	if applicable – will be deducted from my deposit account (the one linked to my loan account).'
export const I_REPRESENT = 'I represent and warrant that:'
export const REPRESENT_A = 'the information provided in my application is true, accurate and complete;'
export const REPRESENT_B = 'I consent to OCBC Bank collecting and using my details to process and contact me for purposes of the application; and'
export const REPRESENT_C = 'where I have provided my co - borrowers’ details, I have their consent to provide their details to OCBC Bank, and for OCBC Bank to collect and use the details provided to process and contact them for purposes of the application.'

export const DATA_CONDITION_NON_PAYMENT_MODE = ['Shortening of loan tenure', 'Lengthening of loan tenure', 'Partial prepayment']


export const dataConfig = [
  {
    path: '',
    type: 'page',
    pageName: 'application:requirements',
    subsectionP5: 'requirements',
    pageType: 'application',
    category: {
      primaryCategory: 'secured-loans'
    },
  },
  { path: '/sing-pass-form/check-information',
    type: 'form',
    pageName: 'application:check-information',
    formName: 'hl-application-myinfo',
    eFormID: 'myinfo-information',
    formCategory: 'myinfo-information',
    formStep: 'form-start',
    subsectionP5: 'check-information',
    pageType: 'application',
    formInfo: {
      fillType: 'myinfo'
    },
    category: {
      primaryCategory: 'secured-loans'
    },
    categorySub: true,
    applicationInfo: {
      applicationName: 'hls-application',
      applicationStart: 'true',
      stepName: 'check-information'
    },
    // applicationInfoJoint: {
    //   applicationName: 'hls-application',
    //   coApplicationStart: 'true',
    //   applicantType: 'joint',
    //   stepName: 'check-information'
    // }
  },
  { path: '/sing-pass-form/property-information',
    type: 'form',
    pageName: 'application:property-information',
    formName: 'hl-application-myinfo',
    eFormID: 'myinfo-property-information',
    formCategory: 'myinfo-property-information',
    formStep: 'form-step2',
    subsectionP5: 'property-information',
    pageType: 'application',
    formInfo: {
      fillType: 'myinfo'
    },
    category: {
      primaryCategory: 'secured-loans'
    },
    categorySub: true,
    applicationInfo: {
      applicationName: 'hls-application',
      applicationStep2: 'true',
      stepName: 'property-information'
    },
    applicationRetrieve: true,
  },
  { path: '/sing-pass-form/account-information',
    type: 'form',
    pageName: 'application:account-information',
    formName: 'hl-application-myinfo',
    eFormID: 'myinfo-upload-document',
    formCategory: 'myinfo-upload-document',
    formStep: 'form-step3',
    subsectionP5: 'account-information',
    pageType: 'application',
    formInfo: {
      fillType: 'myinfo'
    },
    category: {
      primaryCategory: 'secured-loans'
    },
    categorySub: true,
    applicationInfo: {
      applicationName: 'hls-application',
      applicationStep3: 'true',
      stepName: 'account-information'
    },
    // applicationInfoJoint: {
    //   applicationName: 'hls-application',
    //   applicationStep3: 'true',
    //   applicantType: 'joint',
    //   stepName: 'account-information'
    // },
    applicationRetrieve: true,
    propertyDetails: true,
  },
  { path: '/sing-pass-form/non-repricing-request',
    type: 'form',
    pageName: 'application:non-repricing-request',
    formName: 'hl-application-myinfo',
    eFormID: 'myinfo-upload-document',
    formCategory: 'myinfo-upload-document',
    subsectionP5: 'non-repricing-request',
    pageType: 'application',
    formInfo: {
      fillType: 'myinfo'
    },
    category: {
      primaryCategory: 'secured-loans'
    },
    categorySub: true,
    applicationInfo: {
      applicationName: 'hls-application',
      stepName: 'non-repricing-request'
    },
    // applicationInfoJoint: {
    //   applicationName: 'hls-application',
    //   applicationStep3: 'true',
    //   applicantType: 'joint',
    //   stepName: 'non-repricing-request'
    // },
    applicationRetrieve: true,
    propertyDetails: true,
  },
  { path: '/sing-pass-form/review',
    type: 'form',
    pageName: 'application:review',
    formName: 'hl-application-myinfo',
    eFormID: 'myinfo-review',
    formCategory: 'myinfo-review',
    subsectionP5: 'review',
    pageType: 'application',
    formInfo: {
      fillType: 'myinfo'
    },
    category: {
      primaryCategory: 'secured-loans'
    },
    categorySub: true,
    applicationInfo: {
      applicationName: 'hls-application',
      stepName: 'review'
    },
    // applicationInfoJoint: {
    //   applicationName: 'hls-application',
    //   applicationStep4: 'true',
    //   applicantType: 'joint',
    //   stepName: 'review'
    // },
    applicationRetrieve: true,
    propertyDetails: true,
  },
  { path: '/manual-form/personal-information',
    type: 'form',
    pageName: 'application:personal-information',
    formName: 'hl-application-nonmyinfo',
    eFormID: 'nonmyinfo-information',
    formCategory: 'nonmyinfo-information',
    formStep: 'form-start',
    subsectionP5: 'personal-information',
    pageType: 'application',
    formInfo: {
      fillType: 'manual'
    },
    category: {
      primaryCategory: 'secured-loans'
    },
    categorySub: true,
    applicationInfo: {
      applicationName: 'hls-application',
      applicationStart: 'true',
      stepName: 'personal-information'
    },
    // applicationInfoJoint: {
    //   applicationName: 'hls-application',
    //   coApplicationStart: 'true',
    //   applicantType: 'joint',
    //   stepName: 'personal-information'
    // }
  },
  { path: '/manual-form/property-information',
    type: 'form',
    pageName: 'application:property-information',
    formName: 'hl-application-nonmyinfo',
    eFormID: 'nonmyinfo-property-information',
    formCategory: 'nonmyinfo-property-information',
    formStep: 'form-step2',
    subsectionP5: 'property-information',
    pageType: 'application',
    formInfo: {
      fillType: 'manual'
    },
    category: {
      primaryCategory: 'secured-loans'
    },
    categorySub: true,
    applicationRetrieve: true,
    applicationInfo: {
      applicationName: 'hls-application',
      applicationStep2: 'true',
      stepName: 'property-information'
    },
  },
  { path: '/manual-form/account-information',
    type: 'form',
    pageName: 'application:account-information',
    formName: 'hl-application-nonmyinfo',
    eFormID: 'nonmyinfo-account-information',
    formCategory: 'nonmyinfo-account-information',
    formStep: 'form-step3',
    subsectionP5: 'account-information',
    pageType: 'application',
    formInfo: {
      fillType: 'manual'
    },
    category: {
      primaryCategory: 'secured-loans'
    },
    categorySub: true,
    applicationRetrieve: true,
    applicationInfo: {
      applicationName: 'hls-application',
      applicationStep3: 'true',
      stepName: 'property-information'
    },
  },
  { path: '/manual-form/non-repricing-request',
    type: 'form',
    pageName: 'application:non-repricing-request',
    formName: 'hl-application-nonmyinfo',
    eFormID: 'nonmyinfo-non-repricing-request',
    formCategory: 'nonmyinfo-non-repricing-request',
    subsectionP5: 'non-repricing-request',
    pageType: 'application',
    formInfo: {
      fillType: 'manual'
    },
    category: {
      primaryCategory: 'secured-loans'
    },
    categorySub: true,
    applicationRetrieve: true,
    applicationInfo: {
      applicationName: 'hls-application',
      stepName: 'property-information'
    },
  },
  { path: '/manual-form/repricing-request',
    type: 'form',
    pageName: 'application:upload-documents',
    formName: 'hl-application-nonmyinfo',
    eFormID: 'nonmyinfo-upload-document',
    formCategory: 'nonmyinfo-upload-document',
    subsectionP5: 'upload-documents',
    pageType: 'application',
    formInfo: {
      fillType: 'manual'
    },
    category: {
      primaryCategory: 'secured-loans'
    },
    applicationRetrieve: true,
    categorySub: true,
    applicationInfo: {
      applicationName: 'hls-application',
      stepName: 'upload-documents'
    },
    // applicationInfoJoint: {
    //   applicationName: 'hls-application',
    //   applicationStep3: 'true',
    //   applicantType: 'joint',
    //   stepName: 'upload-documents'
    // },
    propertyDetails: true,
  },
  { path: '/manual-form/review',
    type: 'form',
    pageName: 'application:review',
    formName: 'hl-application-nonmyinfo',
    eFormID: 'nonmyinfo-review',
    formCategory: 'nonmyinfo-review',
    subsectionP5: 'review',
    pageType: 'application',
    formInfo: {
      fillType: 'manual'
    },
    category: {
      primaryCategory: 'secured-loans'
    },
    applicationRetrieve: true,
    categorySub: true,
    applicationInfo: {
      applicationName: 'hls-application',
      stepName: 'review'
    },
    // applicationInfoJoint: {
    //   applicationName: 'hls-application',
    //   applicationStep4: 'true',
    //   applicantType: 'joint',
    //   stepName: 'review'
    // },
    propertyDetails: true,
  },
  {
    path: '/confirmation',
    pageName: 'application:submitted',
    subsectionP5: 'submitted',
    pageType: 'application',
    applicationInfo: {
      applicationName: 'hls-application',
      applicationComplete: 'true',
      stepName: 'submitted'
    },
    // applicationInfoJoint: {
    //   applicationName: 'hls-application',
    //   coApplicationComplete: 'true',
    //   applicantType: 'joint',
    //   stepName: 'submitted',
    //   applicationID: ''
    // },
    propertyDetails: true,
    categorySub: true,
    category: {
      primaryCategory: 'secured-loans'
    },
    formInfo: {
      fillType: ''
    }
  } 
]