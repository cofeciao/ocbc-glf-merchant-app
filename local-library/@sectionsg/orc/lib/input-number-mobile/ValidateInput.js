"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateInput = void 0;

/* eslint-disable no-plusplus */

/* eslint-disable no-case-declarations */

/* eslint-disable no-useless-escape */

/* eslint-disable import/prefer-default-export */
// kind: phone, email, code, unit_max_2, unit_max_3, block_number
var validateInput = function validateInput(kind, value, inputKey, valueInputCode, isPhoneSG) {
  var err = '';
  var regexPhone = new RegExp(/^(6|8|9)\d{7}$/);
  var regexPhoneEC = new RegExp(/^(8|9)\d{7}$/);

  switch (kind) {
    case 'required':
      if (value.length === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'least-phone-sg':
      if (!isPhoneSG && inputKey) {
        err = 'Please provide at least 1 Singapore number';
      } else {
        err = '';
      }

      return err;

    case 'phone':
      if (valueInputCode === '+65' || valueInputCode === 'Singapore') {
        if (!regexPhone.test(value) || value.length !== 8 || !regexPhone.test(value) && value.length > 1) {
          err = 'Please enter a valid mobile number';
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

    case 'phone-ec':
      if (valueInputCode === '+65' || valueInputCode === 'Singapore') {
        if (!regexPhoneEC.test(value) || value.length !== 8 || !regexPhoneEC.test(value) && value.length > 1) {
          err = 'Please enter a valid mobile number';
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

    case 'phone-home':
      if (valueInputCode === '+65' || valueInputCode === 'Singapore') {
        if (!regexPhone.test(value) || value.length !== 8 || !regexPhone.test(value) && value.length > 1) {
          err = 'Please enter a valid home number';
        } else {
          err = '';
        }
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'Please provide a home or office number';
        } else {
          err = '';
        }
      }

      return err;

    case 'phone-home-not-required':
      if (valueInputCode === '+65' || valueInputCode === 'Singapore') {
        if (!regexPhone.test(value) || value.length !== 8 || !regexPhone.test(value) && value.length > 1) {
          err = 'Please enter a valid home number';
        } else {
          err = '';
        }
      }

      if (value.length === 0) {
        err = '';
      }

      return err;

    case 'phone-office':
      if (valueInputCode === '+65' || valueInputCode === 'Singapore') {
        if (!regexPhone.test(value) || value.length !== 8 || !regexPhone.test(value) && value.length > 1) {
          err = 'Please enter a valid office number';
        } else {
          err = '';
        }
      }

      if (value.length === 0) {
        if (inputKey) {
          err = 'Please provide a home or office number';
        } else {
          err = '';
        }
      }

      return err;

    case 'phone-office-not-required':
      if (valueInputCode === '+65' || valueInputCode === 'Singapore') {
        if (!regexPhone.test(value) || value.length !== 8 || !regexPhone.test(value) && value.length > 1) {
          err = 'Please enter a valid office number';
        } else {
          err = '';
        }
      }

      if (value.length === 0) {
        err = '';
      }

      return err;

    case 'phone-paynow':
      if (valueInputCode === '+65' || valueInputCode === 'Singapore') {
        if (!regexPhone.test(value) || value.length !== 8) {
          err = 'This number is not linked to PayNow';
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

    default:
      err = '';
      return err;
  }
};

exports.validateInput = validateInput;