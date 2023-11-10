import enCommonContent from '../assets/translation/en-US/common/en.json';
import enMYContent from '../assets/translation/en-US/MY/en.json';
import enSGContent from '../assets/translation/en-US/SG/en.json';
import zhCommonContent from '../assets/translation/zh-CN/common/zh.json';
import zhMYContent from '../assets/translation/zh-CN/MY/zh.json';
import zhSGContent from '../assets/translation/zh-CN/SG/zh.json';
import enCommonErrorContent from '../assets/translation/en-US/common/error_en.json';
import enMYErrorContent from '../assets/translation/en-US/MY/error_en.json';
import enSGErrorContent from '../assets/translation/en-US/SG/error_en.json';
import zhCommonErrorContent from '../assets/translation/zh-CN/common/error_zh.json';
import zhMYErrorContent from '../assets/translation/zh-CN/MY/error_zh.json';
import zhSGErrorContent from '../assets/translation/zh-CN/SG/error_zh.json';
import { REGION } from './constants';


const initMultiLingual = (language: string, country: string) => {
  const messages = {
    en: {
      MY: enMYContent,
      SG: enSGContent,
      Common: enCommonContent,
    },
    zh: {
      MY: zhMYContent,
      SG: zhSGContent,
      Common: zhCommonContent,
    },
  };

  const errMessages = {
    en: {
      MY: enMYErrorContent,
      SG: enSGErrorContent,
      Common: enCommonErrorContent,
    },
    zh: {
      MY: zhMYErrorContent,
      SG: zhSGErrorContent,
      Common: zhCommonErrorContent,
    },
  };

  const localeMessages = messages[language];
  const errorMessages = errMessages[language];
  let contentMessage = {};
  switch (country) {
    case REGION.MY:
      contentMessage = {
        ...localeMessages.Common, ...localeMessages.MY, ...errorMessages.MY, ...errorMessages.Common,
      };
      break;
    case REGION.SG:
      contentMessage = {
        ...localeMessages.Common, ...localeMessages.SG, ...errorMessages.SG, ...errorMessages.Common,
      };
      break;
    default:

      break;
  }
  return contentMessage
}

export default initMultiLingual