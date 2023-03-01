import _ from "lodash";
import { useState } from "react";
import { useSelector } from "react-redux";
import { dataConfig, DATA_CARD_CHECKBOX } from "./constants";
import { getCookie } from "./utils";

export const getInitData = () => {
  const isProEnv = process.env.env === 'prod'
  const curUrl = window.location.href
  const curReferrer = document.referrer
  const curNav = navigator.userAgent
  const curDevice = window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'web'
  const adobeData = {
    pageInstanceID: isProEnv ? 'ocbcsgprod' : 'ocbcsgdev',
    page: {
      pageInfo: {
        siteSection: 'personal',
        subsectionP2: 'secured-loans',
        subsectionP3: 'home-loan-servicing',
        subsectionP4: 'application',
        pageType: 'information',
        pageURL: curUrl,
        referringURL: curReferrer,
        userAgent: curNav,
        browsingDevice: curDevice
      },
      siteInfo: {
        country: 'sg',
        language: 'en-US',
        evn: isProEnv ? 'prod' : 'uat'
      },
      applicationInfo: {
        applicationName: 'hls-application'
      },
      loanInfo: {
        journeyType: ''
      }
    },
    product: [{
      productInfo: {
        productID: '',
        productName: 'home-loan-servicing'
      },
      category: {
        primaryCategory: 'secured-loans'
      }
    }],
    version: '1.0'
  }
  window.ocbcData = adobeData
  return window.ocbcData;
}

export const getDataPage = (value: string) => {
  let data = dataConfig.filter(function (item: any) {
    if (item.path === value) {
      return item
    }
  })
  if (data.length) {
    return data[0]
  }
}


export const trackingData = (path: string, type: string) => {
  try {
    let dataInfo = getDataPage(path)
    let baseUrlTracking = 'sg:ocbc:personal:secured-loans:home-loan-servicing:'
    const dataCardCheckbox = getCookie('listChecked').split(',');
    const dataFormType = getCookie('formType');
    if (!dataInfo) return
    getInitData();
    window.ocbcData.page.pageInfo = {
      ...window.ocbcData.page.pageInfo,
      pageName: `${baseUrlTracking}${dataInfo.pageName}`,
      subsectionP5: dataInfo.subsectionP5,
      pageType: dataInfo.pageType,
      pageURL: window.location.href,
    }
    window.ocbcData.page.applicationInfo = {
      ...dataInfo.applicationInfo
    }
    window.ocbcData.page.formInfo = {
      ...dataInfo.formInfo
    }
    if (dataFormType !== 'Manual') {
      if (dataCardCheckbox.length >= 2 && _.includes(dataCardCheckbox, DATA_CARD_CHECKBOX[0].label))  {
        if (path === '/sing-pass-form/non-repricing-request') {
          window.ocbcData.page.applicationInfo.applicationStep4 = 'true';
        }
        if (path === '/sing-pass-form/review') {
          window.ocbcData.page.applicationInfo.applicationStep5 = 'true';
        }
      } else {
        if (path === '/sing-pass-form/review') {
          window.ocbcData.page.applicationInfo.applicationStep4 = 'true';
        }
      }
    } else {
      if (dataCardCheckbox.length >= 2 && _.includes(dataCardCheckbox, DATA_CARD_CHECKBOX[0].label) && !_.includes(dataCardCheckbox, DATA_CARD_CHECKBOX[1].label)) {
        if (path === '/rm/repricing-request') {
          window.ocbcData.page.applicationInfo.applicationStep4 = 'true';
        }
        if (path === '/rm/non-repricing-request') {
          window.ocbcData.page.applicationInfo.applicationStep5 = 'true';
        }
        if (path === '/rm/review') {
          window.ocbcData.page.applicationInfo.applicationStep6 = 'true';
        }
      } else if (dataCardCheckbox.length == 2 && _.includes(dataCardCheckbox, DATA_CARD_CHECKBOX[0].label) && _.includes(dataCardCheckbox, DATA_CARD_CHECKBOX[1].label)) {
        if (path === '/rm/non-repricing-request') {
          window.ocbcData.page.applicationInfo.applicationStep4 = 'true';
        }
        if (path === '/rm/review') {
          window.ocbcData.page.applicationInfo.applicationStep5 = 'true';
        }
      } else {
        if (path === '/rm/review') {
          window.ocbcData.page.applicationInfo.applicationStep4 = 'true';
        }
      }
    }
    if (path === '/confirmation') {
      window.ocbcData.page.formInfo = dataFormType !== 'Manual' ? 'myinfo' : 'manual'
    }
    window.ocbcData.page.applicationInfo.applicantType = 'main'
    window.ocbcData.page.loanInfo.journeyType = "self"
    console.log('window._satellite.track("dynamicdata")')
    console.log('window.ocbcData : ', window.ocbcData)
    window._satellite.track("dynamicdata")
  } catch (error) {
    console.log('Unable to track data: ', error.message)
  }
}

export const adobeErrorInfo = (data: any) => {
  let message = ''
  if (data && data.ErrorDetail && data.ErrorDetail.hasOwnProperty('ProviderError')) {
    message = data.ErrorDetail.ProviderError[0].ProviderErrorDetail
  } else {
    message = 'Network error. Please contact an OCBC home loan service specialist for assistance'
  }
  window.ocbcData.page.pageInfo.errorInfo = {
    errorMessage: `info: ${message}`,
    errorEvent: 'true'
  }
  console.log('window._satellite.track("dynamicdata")')
  console.log('window.ocbcData: ', window.ocbcData)
  window._satellite.track('dynamicdata')
}

var lastAccessField = '';
export const adobeLastField = (label: string) => {
  if (label) {
    lastAccessField = label;
    return label;
  }
}

export const adobeAbandon = () => {
  console.log("window._satellite.track('lastAccessField', this.lastAccessField)")
  console.log("window._satellite.track('formAbandonedStep')")
  window._satellite.track('lastAccessField', lastAccessField)
  window._satellite.track('formAbandonedStep')
}