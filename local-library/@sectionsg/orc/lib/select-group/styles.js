"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var styles = function styles(theme) {
  return {
    root: {},
    formControl: {
      minWidth: 120,
      width: '100%',
      '& div:-webkitAutofill': {
        '-webkitTextFillColor': 'yellow !important'
      },
      '& .MuiNativeSelect-select': {
        color: theme.palette.$clearBlue
      },
      '& .MuiInputBase-root': {
        width: '100%',
        '&::before': {
          borderBottom: '2px solid #2979ff'
        },
        '&::after': {
          borderBottom: '2px solid #2979ff'
        },
        '&:hover': {
          '&::before': {
            borderBottom: '2px solid #2979ff'
          }
        }
      },
      '& .MuiSelect-root': {
        color: theme.palette.$clearBlue,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        fontSize: theme.typography.$fzH4,
        lineHeight: '24px',
        '@media (max-width: 767px)': {
          lineHeight: '28px',
          fontSize: theme.typography.$fzH5,
          height: '28px'
        }
      },
      '& .MuiSelect-icon': {
        fill: theme.palette.$clearBlue
      },
      '& .MuiPopover-paper': {
        boxShadow: '0 2px 15px 8px rgba(0, 0, 0, 0.02)'
      }
    },
    tabs: {
      '& .MuiInputBase-root': {
        width: '100%',
        fontSize: '24px',
        lineHeight: '34px'
      },
      '& .MuiSelect-root': {
        fontSize: '24px',
        lineHeight: '34px',
        height: '34px'
      }
    },
    dropdownStyleSingle: {
      '& .MuiPaper-root': {
        height: 'auto',
        maxHeight: '350px',
        marginTop: '15px',
        borderRadius: '5px !important',
        boxShadow: '0 2px 15px 8px rgba(0, 0, 0, 0.02) !important',
        '@media (min-width: 768px)': {
          maxWidth: '380px!important',
          minWidth: '380px!important',
          paddingBottom: '5px'
        },
        '& .MuiListSubheader-gutters': {
          lineHeight: 'normal',
          paddingLeft: '20px',
          margin: '10px 0 5px',
          color: theme.palette.$lightGreyBlue,
          fontWeight: 'bold',
          fontSize: '18px'
        },
        '& .MuiList-root': {
          overflow: 'auto',
          padding: '0 !important',
          '& .MuiMenuItem-root': {
            whiteSpace: 'inherit !important',
            padding: '5px 20px !important',
            fontSize: theme.typography.$fzH4,
            lineHeight: 'normal',
            fontWeight: 'bold'
          },
          '& .MuiFormControlLabel-root': {
            width: '100%',
            display: 'block',
            '& .MuiTypography-body1': {
              fontSize: theme.typography.$fzBody,
              verticalAlign: 'middle'
            }
          },
          '& .Mui-selected': {
            backgroundColor: theme.palette.$iceBlue
          }
        },
        '& .MuiListItem-button': {
          '&:hover': {
            backgroundColor: theme.palette.$iceBlue
          }
        }
      }
    },
    positionRelative: {
      position: 'relative',
      width: '100%'
    },
    nameDefault: {
      position: 'absolute',
      color: theme.palette.$clearBlue,
      bottom: '5px'
    },
    optionSelect: {
      color: theme.palette.$battleshipGrey
    },
    optionSelectMain: {
      color: theme.palette.$greyishBrown
    }
  };
};

var _default = styles;
exports["default"] = _default;