import { DEFAULT_ERROR } from './constants';

const text = (value: string, intl: any) => {
  if (typeof (value) === 'string') {
    return intl.formatMessage({ id: value });
  }
  return value;
};

const error = (value: string, intl: any, defaultValue: string, params: object) => {
  if (typeof (value) === 'string') {
    let returnValue = intl.formatMessage({ id: value });
    let replacekey;
    if (returnValue === value && params) {
      for (var key in params) {
        replacekey = `{${key}}`;
        defaultValue = defaultValue.replace(replacekey, params[key]);
      }

      return defaultValue || text(DEFAULT_ERROR, intl);
    }

    if (returnValue.includes('%s')) {
      var splitted = returnValue.split(/(%s)/);
      var count = (returnValue.match(/%s/g) || []).length;

      if (count > 0) {
        var returnValueTmp = '';
        var j = 0;
        var startedStr = '';
        for (var i = 0; i < splitted.length; i++) {
          if (splitted[i] === '%s') {
            for (var key in params) {
              if (startedStr !== key) {
                returnValueTmp += params[key];
                startedStr = key;
                break;
              }
              startedStr = key;
            }
          } else {
            returnValueTmp += splitted[i];
          }
        }
        return returnValueTmp;
      }

      return defaultValue || text(DEFAULT_ERROR, intl);
    }
    for (var key in params) {
      replacekey = `{${key}}`;
      returnValue = returnValue.replace(replacekey, params[key]);
    }
    return returnValue || text(DEFAULT_ERROR, intl);
  }
  return value;
};

const textArray = (array: [string], intl: any) => {
  if (Array.isArray(array)) {
    const tempArray = array.map(value => text(value, intl))
    return tempArray;
  }
  return array;
};

const objectClassification = {
  text,
  error,
  textArray,
};

const languageTranslator = ({
  type, key, intl, defaultValue, params
}: { type?: string, key: string, intl: any, defaultValue?: string, params?: object }) => {
  const functions = objectClassification[type || 'text'];

  if (intl === null || intl === undefined) {
    throw new Error('intl is not define');
  }

  if (typeof functions === 'function') {
    return functions(key, intl, defaultValue, params);
  }
  throw new Error(`no such objectClassification "${type}"`);
};

export default languageTranslator;
