"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateInput = void 0;

// eslint-disable-next-line import/prefer-default-export
var validateInput = function validateInput(kind, value, inputKey, maxLoan, desiredLoan, prevValue, isEditing, nameType, otherError) {
  var err = '';

  var formatPrice = function formatPrice(number) {
    return "SGD ".concat(Number(number).toLocaleString('en-US'));
  }; // eslint-disable-next-line no-mixed-operators


  var formatDesiredLoan = Math.ceil(desiredLoan * 10 / 9 / 100);

  switch (kind) {
    case 'cash-prepayment-amount':
      if (value % 1000 > 0) {
        err = 'Round this up/down to the nearest thousand';
        return err;
      }

      if (value % 1000 === 0 && value < maxLoan) {
        err = 'The total prepayment amount must be at least S$5,000 in multiples of $1,000.';
        return err;
      }

      if (value === 0) {
        if (inputKey) {
          return err = 'Round this up/down to the nearest thousand';
        } else {
          return err = '';
        }
      }

      return err;

    case 'preferred-easiCredit-limit':
      if (desiredLoan <= 800) {
        if (value < 1000) {
          err = 'The minimum amount is SGD 1,000';
        }
      }

      if (desiredLoan >= 900 && value < formatDesiredLoan * 100) {
        err = "At least ".concat(formatPrice(formatDesiredLoan * 100), " is needed to support your desired loan amount of ").concat(formatPrice(desiredLoan));
      }

      if (value % 100 > 0) {
        err = 'Please round off to the nearest SGD 100';
      }

      if (value === 0) {
        if (inputKey) {
          err = 'This field is required';
        } else {
          err = '';
        }
      }

      return err;

    case 'desired-loan-amount':
      if (value > 0 && value < 9999900) {
        if (prevValue && isEditing) {
          if (prevValue < value) {
            err = "This cannot exceed ".concat(formatPrice(prevValue), "  due to ").concat(nameType);
            return err;
          } else {
            err = '';
            return err;
          }
        }

        if (otherError) {
          err = nameType;
          return err;
        }

        if (value < 500) {
          err = 'The minimum loan amount is SGD 500';
          return err;
        }

        if (value > maxLoan) {
          err = 'This exceeds your maximum loan amount';
          return err;
        }

        if (value % 100 > 0) {
          err = 'Please round off to the nearest SGD 100';
          return err;
        }
      }

      if (value > 9999900) {
        err = 'The maximum loan amount is SGD 9,999,900';
        return err;
      }

      if (value === 0) {
        if (inputKey) {
          err = 'This field is required';
          return err;
        } else {
          err = '';
          return err;
        }
      }

    default:
      err = '';
      return err;
  }
};

exports.validateInput = validateInput;