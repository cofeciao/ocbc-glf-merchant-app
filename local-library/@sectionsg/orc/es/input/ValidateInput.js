/* eslint-disable no-plusplus */

/* eslint-disable no-case-declarations */

/* eslint-disable no-useless-escape */

/* eslint-disable import/prefer-default-export */
// kind: phone, email, code, unit_max_2, unit_max_3,
export var validateInput = function validateInput(kind, value, inputKey, exceptNumber, helperText) {
  var getNumberString = function getNumberString(valueInput) {
    var numb = valueInput.match(/\d/g);

    if (numb) {
      numb = numb.join('');
    } else {
      numb = '';
    }

    return numb;
  };

  var err = '';
  var regexPhone = new RegExp(/^(6|8|9)\d{7}$/);
  var regexPhoneMobile = new RegExp(/^(8|9)\d{7}$/);
  var regexNRIC = /^[0-9]+?[a-z0-9]$/igm;
  var regexPassword = /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/;
  var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var regexDigit = /^[a-zA-Z\s\.\'\-\,\/\@\\]+$/;
  var regexAccessCode = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
  var regexNumber = /^\d{1,6}$/;
  var regexNumberCard = /^\d+$/;
  var formatSpecial = /[!@#$%^&*(),.?":{}|<>]/g;
  var specialCharacters = /[<>?:;*|\\%&]/g;
  var regexCheckOnlyNumber = /^[0-9]*$/gm;
  var specials = /[^A-Za-z ]/g;

  if (value && value.length && specialCharacters.test(value) && kind === '') {
    err = 'Please do not use special characters';
    return err;
  }

  var validateNRIC = function validateNRIC(str) {
    if (str.length !== 9) {
      return false;
    } // eslint-disable-next-line no-param-reassign


    str = str.toUpperCase();
    var i;
    var icArray = []; // eslint-disable-next-line no-plusplus

    for (i = 0; i < 9; i++) {
      icArray[i] = str.charAt(i);
    }

    icArray[1] = parseInt(icArray[1], 10) * 2;
    icArray[2] = parseInt(icArray[2], 10) * 7;
    icArray[3] = parseInt(icArray[3], 10) * 6;
    icArray[4] = parseInt(icArray[4], 10) * 5;
    icArray[5] = parseInt(icArray[5], 10) * 4;
    icArray[6] = parseInt(icArray[6], 10) * 3;
    icArray[7] = parseInt(icArray[7], 10) * 2;
    var weight = 0;

    for (i = 1; i < 8; i++) {
      weight += icArray[i];
    }

    var offset = icArray[0] === 'T' || icArray[0] === 'G' ? 4 : 0;
    var temp = (offset + weight) % 11;
    var st = ['J', 'Z', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
    var theAlpha;

    if (icArray[0] === 'S' || icArray[0] === 'T') {
      theAlpha = st[temp];
    }

    return icArray[8] === theAlpha;
  };

  var validateFIN = function validateFIN(str) {
    if (str.length !== 9) {
      return false;
    } // eslint-disable-next-line no-param-reassign


    str = str.toUpperCase();
    var i;
    var icArray = [];

    for (i = 0; i < 9; i++) {
      icArray[i] = str.charAt(i);
    }

    icArray[1] = parseInt(icArray[1], 10) * 2;
    icArray[2] = parseInt(icArray[2], 10) * 7;
    icArray[3] = parseInt(icArray[3], 10) * 6;
    icArray[4] = parseInt(icArray[4], 10) * 5;
    icArray[5] = parseInt(icArray[5], 10) * 4;
    icArray[6] = parseInt(icArray[6], 10) * 3;
    icArray[7] = parseInt(icArray[7], 10) * 2;
    var weight = 0;

    for (i = 1; i < 8; i++) {
      weight += icArray[i];
    }

    var offset = icArray[0] === 'T' || icArray[0] === 'G' ? 4 : 0;
    var temp = (offset + weight) % 11;
    var fg = ['X', 'W', 'U', 'T', 'R', 'Q', 'P', 'N', 'M', 'L', 'K'];
    var theAlpha;

    if (icArray[0] === 'F' || icArray[0] === 'G') {
      theAlpha = fg[temp];
    }

    return icArray[8] === theAlpha;
  };

  switch (kind) {
    case 'required':
      if (value === undefined || value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'required-select':
      if (value && value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'auth-code':
      if (value.length === 0) {
        if (inputKey) {
          err = 'Please enter the auth code';
        } else {
          err = '';
        }
      } else if (inputKey) {
        err = 'Invalid auth code';
      } else {
        err = '';
      }

      return err;

    case 'account-number':
      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      if (!regexCheckOnlyNumber.test(value)) {
        err = 'Enter only numbers';
      }

      return err;

    case 'helper-required':
      if (value.length === 0) {
        if (inputKey) {
          err = helperText;
        } else {
          err = '';
        }
      }

      return err;

    case 'loanTenure':
      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      if (parseInt(value) > 35 || parseInt(value) < 1) {
        err = 'Min 1 year, max 35 years';
      }

      return err;

    case 'phone':
      if (!regexPhone.test(value) || value.length !== 8 || !regexPhone.test(value) && value.length > 1) {
        err = 'Please enter a valid mobile number';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'phone-home':
      if (!regexPhone.test(value) || value.length !== 8 || !regexPhone.test(value) && value.length > 1) {
        err = 'Please enter a valid home number';
      } else {
        err = '';
      }

      if (value.length === 0) {
        err = '';
      }

      return err;

    case 'phone-office':
      if (!regexPhone.test(value) || value.length !== 8 || !regexPhone.test(value) && value.length > 1) {
        err = 'Please enter a valid office number';
      } else {
        err = '';
      }

      if (value.length === 0) {
        err = '';
      }

      return err;

    case 'phone_main':
      if (!regexPhone.test(value) || value.length !== 8) {
        err = 'Please enter a valid mobile number';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'email':
      var isvalid = regexEmail.test(value);

      if (isvalid) {
        err = '';
      } else {
        err = 'Please enter a valid email address';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'post_code_singapore':
      if (value.length < 6) {
        err = 'Please enter a valid postal code';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'post_code':
      if (value.length === 0) {
        if (inputKey) {
          err = 'Please enter a valid postal code';
        } else {
          err = '';
        }
      } else {
        err = '';
      }

      return err;

    case 'block_number':
      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      if (value.length > 6) {
        err = 'Please use maximum of 6 characters';
      }

      return err;

    case 'account-number':
      if (value.length > 0 && value.length >= 6 && value.length <= 19) {
        err = '';
      } else {
        err = 'Your account number must have 6 to 19 digits';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'phone-paynow':
      if (!regexPhoneMobile.test(value) || value.length !== 8) {
        err = 'Please enter a valid mobile number';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'nric-passport':
      if (value.charAt(0) === 'S' || value.charAt(0) === 'T') {
        if (!validateNRIC(value)) {
          err = 'Please enter a valid NRIC';
        } else {
          err = '';
        }
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'fin-number':
      if (!validateFIN(value)) {
        err = 'Please enter a valid FIN';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'nric-only':
      if (!validateNRIC(value)) {
        err = 'Please enter a valid NRIC';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'passport':
      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'card-number':
      if (value.length > 0 && value.length !== 16) {
        err = 'Your card number must have 16 digits';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'virtual-payment':
      if (value.length > 0 && value.length !== 16) {
        err = 'Your virtual payment address must have 16 characters';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'card-number-amex':
      if (value.length > 0 && value.length !== 15) {
        err = 'Your card number must have 15 digits';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'card-diners':
      if (value.length > 0 && value.length !== 14) {
        err = 'Your card number must have 14 digits';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'name-nric':
      if (!regexDigit.test(value)) {
        err = 'Please use only letters (A-Z), dash or comma';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'nric':
      if (!regexNRIC.test(value) || value.length !== 4) {
        err = 'Please enter the last 4 characters e.g., 123A';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'userID':
      if (value.length < 6 || value.length > 15) {
        err = 'Please use 6 to 15 characters, including at least one letter';
      } else {
        err = '';
      } // eslint-disable-next-line no-restricted-globals


      if (!isNaN(value)) {
        err = 'Your user ID cannot be all numbers';
      } else {
        err = '';
      }

      if (value.length === 0) {
        err = '';
      }

      return err;

    case 'accessCode':
      var accessCode = regexAccessCode.test(value); // eslint-disable-next-line vars-on-top

      if (value.length < 6 || value.length > 14) {
        err = 'Please use between 6 and 14 characters';
      } else if (!accessCode) {
        err = 'Please enter a valid access code';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'year':
      if (value.length < 4) {
        err = '';
      }

      if (value.length === 0) {
        err = '';
      }

      return err;

    case 'day':
      if (Number(value) > 31) {
        err = '';
      }

      if (value.length === 0) {
        err = '';
      }

      return err;

    case 'month':
      if (Number(value) > 12) {
        err = '';
      }

      if (value.length === 0) {
        err = '';
      }

      return err;

    case 'password':
      if (!regexPassword.test(value)) {
        err = 'Please include a number (0-9), uppercase letter (A-Z) and lowercase letter (a-z)';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'pin':
      if (value.length !== 6) {
        err = 'Please use 6 digits';
      } else if (!regexNumber.test(value)) {
        err = 'Please enter a valid PIN ';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'digital-card-number':
      if (value.length !== 8) {
        err = 'Please use 8 digits';
      } else if (!regexNumberCard.test(value)) {
        err = 'Please enter a valid card number ';
      } else if (exceptNumber === value) {
        err = 'Please enter a valid card number ';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'four-characters-of-nric-pass-port-number':
      if (value.length !== 4) {
        err = 'Please use 4 characters';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'digital-easicredit-number':
      if (exceptNumber === value) {
        err = 'Please enter a valid EasiCredit number';
      } else if (value.length !== 12) {
        err = 'Please use 12 digits';
      } else if (!regexNumberCard.test(value)) {
        err = 'Please enter a valid EasiCredit number';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'atm-card':
      var checkSpecialCharacter = specials.test(value);

      if (checkSpecialCharacter || getNumberString(value).length > 0) {
        err = 'Please use only letters (A-Z)';
      } else if (/\b(Bank)\b/gi.test(value)) {
        err = 'Please remove "bank"';
      } else if (value.length > 19) {
        err = 'Please use not more than 19 characters';
      } else {
        err = '';
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    default:
      err = '';
      return err;
  }
};