import _ from "lodash";
import moment from "moment";
import { useEffect, useRef } from "react";

export const preventSpecialCharacters = (event) => {
  if (
    event.charCode === 46
    || event.charCode === 190
    || (event.charCode > 31 && (event.charCode < 48 || event.charCode > 57))
  ) {
    event.preventDefault();
    return false;
  }
  return true;
};

export const formatPhoneNumber = (phoneNumberString: string) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{4})(\d{4})$/);
  if (match) {
    return match[1] + ' ' + match[2];
  }
  return null;
}

export const restrictOnlyDigital = (event) => {
  var specials = /[^0-9]/g;
  var key = String.fromCharCode(event.which);
  if (specials.test(key)) {
    event.preventDefault();
    return false;
  }
  return true;
};


export const restrictSpecialCharacters = (event) => {
  var specials = /[^A-Za-z 0-9]/g;
  var key = String.fromCharCode(event.which);
  if (specials.test(key)) {
    event.preventDefault();
    return false;
  }
  return true;
};

export const formatNameField = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const scrollToError = function () {
  setTimeout(() => {
    const errorElements = document.querySelectorAll('[id^=errorType-label]');
    if (errorElements.length) {
      const firstElement = errorElements[0];
      const yOffset = -100;

      const y = firstElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, 100);
};


export const restrictEmail = (event) => {
  var specials = /[^A-Za-z 0-9 @ . _ -]/g;
  var key = String.fromCharCode(event.which);
  if (specials.test(key)) {
    event.preventDefault();
    return false;
  }
  return true;
}

export const moneyDisplayFormat = (num, precision) => {
  // if (!num) {
  //   return '';
  // }
  const arrDollarCents = num.toFixed(precision).split('.');
  const formattedDollars = arrDollarCents[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  if (precision === 0) {
    return formattedDollars;
  }
  return `${formattedDollars}.${(arrDollarCents[1]
    && (arrDollarCents[1].toString().length >= precision
      ? arrDollarCents[1]
      : arrDollarCents[1] + '0'.repeat(precision - arrDollarCents[1].length)))
    || '0'.repeat(precision)}`;
};

export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.toLowerCase().slice(1)
};


export const useComponentDidUpdate = (effect, dependencies) => {
  const hasMounted = useRef(false);

  useEffect(
    () => {
      if (!hasMounted.current) {
        hasMounted.current = true;
        return;
      }
      effect();
    },
    dependencies,
  );
};


/**
	 * Hanle format data
	 */

export const handleFormatCPFContributionsList = (data: any) => {
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

export const getCookie = (name: any) => {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [k,v] = el.split('=');
    cookie[k.trim()] = v;
  })
  return cookie[name];
}

export const checkMatchOption = (data: any, contentShow: any) => {
  return _.isEqual(_.sortBy(data), _.sortBy(contentShow))
}

export const detectUNIFINLabel = (value: string) => {
  const firstString = value.substring(0,1);
  if (firstString === 'S' || firstString === 'T') {
    return true
  }
  return false
}


/**
   * Handle convert array to a list document
   * @function
   * @param {Array} list - list input
   * @returns {Array}
   */
export const handleConvertArrListDocument = (list: any) => {
  let arr: string[] = [];
  list && list.map((item: any, idx: number) => {
    arr.push(item.label)
  });
  return arr;
}

export const formatDataHdbownership = (formLandingData: any) => {
  let array = [];
  if (formLandingData && formLandingData.myInfo && formLandingData.myInfo.hdbownership && _.isArray(formLandingData.myInfo.hdbownership)) {
    array = formLandingData.myInfo.hdbownership
  } else {
    if (formLandingData && formLandingData.myInfo && formLandingData.myInfo.hdbownership) {
      array.push(formLandingData && formLandingData.myInfo && formLandingData.myInfo.hdbownership)
    }
  }
  return array;
}

export const formatDataAddressHdbownership = (dataFormat: any) => {
  const array: any = [];
  if (dataFormat.length > 0) {
    dataFormat.map((item: any, index: number) => (
       array.push({
         "BlockNo": item && item.address ? item.address.block.value : '',
         "Street": item && item.address ? item.address.street.value : '',
         "Floor": item && item.address ? item.address.floor.value : '',
         "Unit": item && item.address ? item.address.unit.value : '',
         "PostalCode": item && item.address ? item.address.postal.value : '',
         "BuildingName": item && item.address ? item.address.building.value : '',
         "Country": item && item.address ? item.address.country.code : '',
         "CreatedBy": "",
         "UpdatedBy": "",
         "CreatedDate": moment().format(),
         "UpdatedDate": moment().format(),
         "IsActive": true,
         "AddressTypeCode": "P",
         "AddressTypeDesc": "MyInfo HDB address"
       })
     ))
   }
   return array;
  
 }


 export const autoFocus = (value, maxLength) => {
  const [fieldName, fieldIndex] = value.name.split("-");
  if (value.value.length >= maxLength) {
    // Check if it's not the last input field
    if (parseInt(fieldIndex, 10) < 3) {
      // Get the next input field
      const nextSibling = document.querySelector(
        `input[name=${fieldName}-${parseInt(fieldIndex, 10) + 1}]`
      );
      // If found, focus the next field
      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
  }
}


export const mapCpfWithDrawDetail = (formRedux: any) => {
  const data = [];
  const dataCpfWithDrawDetail =  formRedux.myInfo && formRedux.myInfo.cpfhousingwithdrawal && formRedux.myInfo.cpfhousingwithdrawal.withdrawaldetails && formRedux.myInfo.cpfhousingwithdrawal.withdrawaldetails[0] ? formRedux.myInfo.cpfhousingwithdrawal.withdrawaldetails : [] ;
  if (dataCpfWithDrawDetail.length > 0) {
    for(var i = 0; i < dataCpfWithDrawDetail.length; i++ ) {
      let country = ''
      if (dataCpfWithDrawDetail[i].address.country.code) {
        country = dataCpfWithDrawDetail[i].address.country.code
      } else if (dataCpfWithDrawDetail[i].address.country.value) {
        country = dataCpfWithDrawDetail[i].address.country.value
      } else {
        country = dataCpfWithDrawDetail[i].address.country
      }
      data.push({
        "BlockNo": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].address && dataCpfWithDrawDetail[i].address.block && dataCpfWithDrawDetail[i].address.block.value || '',
        "Street": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].address && dataCpfWithDrawDetail[i].address.street && dataCpfWithDrawDetail[i].address.street.value || '',
        "Floor": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].address && dataCpfWithDrawDetail[i].address.floor && dataCpfWithDrawDetail[i].address.floor.value || '',
        "Unit": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].address && dataCpfWithDrawDetail[i].address.unit && dataCpfWithDrawDetail[i].address.unit.value || '',
        "PostalCode": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].address && dataCpfWithDrawDetail[i].address.postal && dataCpfWithDrawDetail[i].address.postal.value || '',
        "BuildingName": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].address && dataCpfWithDrawDetail[i].address.building && dataCpfWithDrawDetail[i].address.building.value || '',
        // "Country": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].address && dataCpfWithDrawDetail[i].address.country && dataCpfWithDrawDetail[i].address.country.code || '',
        "Country": country,
        "AccruedInterestAmt": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].accruedinterestamt && Number(dataCpfWithDrawDetail[i].accruedinterestamt.value) || 0,
        "PrincipalWithdrawalAmt": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].principalwithdrawalamt && Number(dataCpfWithDrawDetail[i].principalwithdrawalamt.value) || 0,
        "TotalCPFAllowedForProperty": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].totalamountofcpfallowedforproperty && Number(dataCpfWithDrawDetail[i].totalamountofcpfallowedforproperty.value) || 0,
        "Monthlyinstalmentamt": dataCpfWithDrawDetail && dataCpfWithDrawDetail[i] && dataCpfWithDrawDetail[i].monthlyinstalmentamt && Number(dataCpfWithDrawDetail[i].monthlyinstalmentamt.value) || 0,
        "CreatedBy": "",
        "UpdatedBy": "",
        "CreatedDate": moment().format(),
        "UpdatedDate": moment().format(),
        "IsActive": true
    })
    }
  }
  return data;
}