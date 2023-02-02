import moment from 'moment';
import { getServer } from './configurations';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import { LIST_ATTRIBUTE_SIMULATOR, REDIRECTURL, REDIRECTURL_BAU } from '@/utils/constants';

const reqHeaderData = () => (
  {
    'RqUuid': new Date().getTime().toString(),
    'ClientId': 'ECO',
    'ClientCountry': 'SG',
    'TraxDateTime': moment().format()
  }
)

const globalRequestURI = process.env.APIServer;

console.log('process.env.env', process.env.env)

export const infoCountryCode = async () => {
  const response = await fetch(
    `${getServer().APIServer}/public/address-detail.json`,
    { method: 'GET' },
  );
  const data = await response.json();
  return data;
};

// Group by endpoint services develop
const APIv1 = ['loansappmgmt-los', 'tncmgmt-los', 'authgenerateotp-los', 'authvalidateotp/los']
const APIv2 = ['loanattachmentmgmt-los', 'getpersondataextsim', 'getpersondataext-los']
const APIv4 = []
const APIv3 = []
const APIv5 = ['custaddressinquiry']

const redirectURLLoginSingPass = () =>  {
  let url = process.env.myinfo.redirectUri;
  return url;
}

const renderUrlEnvEndPoint = (indexApi: number, indexDataApi: number) => {
  let urlEndPoint = '';
  const pathName = process.env.env === 'bau' ? '/ocbc/lsp/bau/1.0/post/' : '/ocbc/lsp/1.0/post/'
  if (indexApi === 5) {
    if (process.env.env !== 'staging') {
      urlEndPoint = globalRequestURI + '/ocbc/custadd/1.0' + '/' + APIv5[indexDataApi]
    } else {
      urlEndPoint = globalRequestURI + '/' + APIv5[indexDataApi]
    }
  }
  if (indexApi === 2) {
    if (process.env.env !== 'staging') {
      if (indexDataApi == 0) {
        urlEndPoint = globalRequestURI + pathName + APIv2[indexDataApi].replace(APIv2[indexDataApi], 'loanattachmentmgmt')
      }
      if (indexDataApi === 1) {
        urlEndPoint = globalRequestURI + '/ocbc/eco/2.0/post/' + APIv2[indexDataApi]
      }
      if (indexDataApi === 2) {
        urlEndPoint = globalRequestURI + pathName + APIv2[indexDataApi].replace(APIv2[indexDataApi], 'getpersondataext')
      }
    } else {
      urlEndPoint = globalRequestURI + '/' + APIv2[indexDataApi]
    }
  }
  if (indexApi === 1) {
    if (process.env.env !== 'staging') {
      urlEndPoint = globalRequestURI + pathName ;
      if (indexDataApi === 0) {
        urlEndPoint = urlEndPoint + APIv1[indexDataApi].replace(APIv1[indexDataApi], 'loansappmgmt')
      }
      if (indexDataApi === 1) {
        urlEndPoint = urlEndPoint + APIv1[indexDataApi].replace(APIv1[indexDataApi], 'tncmgmt')
      }
      if (indexDataApi === 2) {
        urlEndPoint = urlEndPoint + APIv1[indexDataApi].replace(APIv1[indexDataApi], 'authgenerateotp')
      }
      if (indexDataApi === 3) {
        urlEndPoint = urlEndPoint + APIv1[indexDataApi].replace(APIv1[indexDataApi], 'authvalidateotp')
      }
    } else {
      urlEndPoint = globalRequestURI + '/' + APIv1[indexDataApi]
    }
  }
  return urlEndPoint;
}

/**
 * API GET POSTAL CODE
 * @param code 
 * @returns 
 */
export const getPostalCode = async (code: string) => {
  const TransactionRefNo = Math.floor(Math.random() * 90000) + 10000
  const response = await fetch(
    `${renderUrlEnvEndPoint(5, 0)}`,
    {
      method: "POST", 
      headers: { 'Content-Type': 'application/json; charset=utf-8', Accept: 'application/json' },
      body: JSON.stringify({ 
        CustAddressInquiryReq: {
          ReqBody: {
            TransactionRefNo: TransactionRefNo,
            PostalCode: code,
            CountryCode: 'SG'
          },
          ReqHeader: reqHeaderData()
        }
      })
    })
    const data = await response.json();
    return data;
};

/**
 * API GENERATE OTP
 * @param code 
 * @returns 
 */
export const generateOtp = async (code: string) => {
  const response = await fetch(
    `${renderUrlEnvEndPoint(1, 2)}`,
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json; charset=utf-8', Accept: 'application/json' },
      body: JSON.stringify({ 
        AuthGenerateOTPReq: {
          ReqBody: {
            Action: "LOAN",
            Module: "LSP",
            UserType: "Customer",
            ApplicantGuid: code
          },
          ReqHeader: reqHeaderData()
        }
      })
    })
    const data = await response.json();
    return data;
};

/**
 * API GET DATA FROM OTP
 * @param value 
 * @param code 
 * @returns 
 */
export const validateOtp = async (value: string, code: string) => {
  const response = await fetch(
    `${renderUrlEnvEndPoint(1, 3)}`,
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json; charset=utf-8', Accept: 'application/json' },
      body: JSON.stringify({ 
        AuthValidateOTPReq: {
          ReqBody: {
            Action: "LOAN",
            Module: "LSP",
            UserType: "Customer",
            ApplicantGuid: code,
            VerificationCode: value
          },
          ReqHeader: reqHeaderData()
        }
      })
    })
    const data = await response.json();
    return data;
};

/**
 * API CREATE LOAN ATTACHMENT
 * @param signatureFiles 
 * @param type 
 * @param ApplicationGuid 
 * @param ApplicantGuid 
 * @returns 
 */
export const loanAttachmentMgmt = async (signatureFiles: any, type:string, ApplicationGuid: string, ApplicantGuid: string ) => {
  const AttachmentModel: any = []
  signatureFiles.map((items: any) => (
    items.reduce((result:any, file:any) => {
      const newFile = {
        LoanType: type,
        ApplicationGuid: ApplicationGuid,
        ApplicantGuid: ApplicantGuid,
        Name:file.Name,
        DocType:file.DocType,
        Attachment:file.Attachment
      }
      AttachmentModel.push(newFile)
      return AttachmentModel;
      }, [])
  ))

  const response = await fetch(
    `${renderUrlEnvEndPoint(2, 0)}`,
    {
      method: "POST", 
      headers: { 'Content-Type': 'application/json; charset=utf-8', Accept: 'application/json' },
      body: JSON.stringify({ 
        LoanAttachmentMgmtReq: {
          ReqBody: {
            Action: "CREATELOAN",
            LoanAttachment: [{
              AttachmentModel: AttachmentModel
            }]
          },
          ReqHeader: reqHeaderData()
        }
      })
    })
    const data = await response.json();
    return data;
};

/**
 * API GET LOAN INFO FROM OTP
 * @param value 
 * @param code 
 * @returns 
 */
export const getLoansInfoFromOtp = async (value: number, code: string) => {
  const response = await fetch(
    `${renderUrlEnvEndPoint(1, 0)}`,
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json; charset=utf-8', Accept: 'application/json' },
      body: JSON.stringify({ 
        LoansAppMgmtReq: {
          ReqBody: {
            Action: "GETBYAPPLICANTGUID",
            ActionType: "NEW",
            ApplicantGuid: code,
            OTP: value
          },
          ReqHeader: reqHeaderData()
        }
      })
    })
    const data = await response.json();
    return data;
};


/**
 * API CREATE LOAN APPMGMT
 * @param dataSubmit 
 * @param ActionType 
 * @returns 
 */
export const createLoanAppMgmt = async (dataSubmit: any, ActionType: string) => {
  const response = await fetch(
    `${renderUrlEnvEndPoint(1, 0)}`,
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json; charset=utf-8', Accept: 'application/json' },
      body: JSON.stringify({ 
        LoansAppMgmtReq: {
          ReqBody: {
            Action: "CREATE",
			      ActionType: ActionType || "NEW",
            LoansAppMgmt: dataSubmit,
          },
          ReqHeader: reqHeaderData()
        }
      })
    })
    const data = await response.json();
    return data;
}

export const simulatorLoginSingPass = async (authCode: any, apexAppId: string, clientSecret: string, listAttribute: string) => {
  const response = await fetch(
    `${renderUrlEnvEndPoint(2, 1)}`,
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json; charset=utf-8', Accept: 'application/json' },
      body: JSON.stringify({ 
        GetPersonDataExtReq: {
          ReqBody: {
            RedirectURL: 'abc',
            ApexClientId: apexAppId,
            ApexAppId: apexAppId,
            AuthCode: `${authCode}`,
            TransactionNumber: uuidv4() + '-' + new Date().toISOString(),
            AttributeList: LIST_ATTRIBUTE_SIMULATOR,
            Realm: '/myinfo-com',
            ClientSecret: clientSecret
          },
          ReqHeader: reqHeaderData()
        }
      })
    })
    const data = await response.json();
    return data;
}


/**
 * API LOGIN SINGPASS
 * @param code 
 * @param apexAppId 
 * @param clientSecret 
 * @param listAttribute 
 * @returns 
 */
export const loginSingPass = async (code: string, apexAppId: string, clientSecret: string, listAttribute: string) => {
  const response = await fetch(
    `${renderUrlEnvEndPoint(2, 2)}`,
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json; charset=utf-8', Accept: 'application/json' },
      body: JSON.stringify({ 
        GetPersonDataExtReq: {
          ReqBody: {
            RedirectURL: redirectURLLoginSingPass(),
            ApexClientId: apexAppId,
            ApexAppId: apexAppId,
            AuthCode: code,
            TransactionNumber: uuidv4() + '-' + new Date().toISOString(),
            AttributeList: listAttribute,
            Realm: '/myinfo-com',
            ClientSecret: clientSecret
          },
          ReqHeader: reqHeaderData()
        }
      })
    })
    const data = await response.json();
    return data;
}


/**
 * API GET TNCMGMT
 * @param value 
 * @param code 
 * @returns 
 */
//  https://pylon.ocbc.com:15043/ocbc/lsp/1.0/tncmgmt
 export const getTncmgmt = async (tncKeys: any) => {
  const response = await fetch(
    `${renderUrlEnvEndPoint(1, 1)}`,
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json; charset=utf-8', Accept: 'application/json' },
      body: JSON.stringify({ 
        TNCMgmtReq: {
          ReqBody: {
            TNCDetails: {
              TncKeys: tncKeys,
            }
          },
          ReqHeader: reqHeaderData()
        }
      })
    })
    const data = await response.json();
    return data;
};


