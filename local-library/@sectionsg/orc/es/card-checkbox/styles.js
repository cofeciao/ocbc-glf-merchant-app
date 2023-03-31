import { makeStyles } from '@material-ui/core';
var useStyles = makeStyles(function (theme) {
  return {
    root: {},
    carCheckbox: {
      '& .MuiFormControl-root': {
        width: '100%'
      },
      '& .MuiFormGroup-root': {
        flexDirection: 'row',
        width: '100%'
      },
      '& .MuiCheckbox-root': {
        color: theme.palette.$veryLightPink
      },
      '& .MuiButtonBase-root': {
        padding: 0,
        width: 20
      },
      '& .MuiIconButton-colorSecondary:hover': {
        backgroundColor: 'transparent'
      },
      '& .MuiCheckbox-colorSecondary.Mui-checked': {
        color: theme.palette.$lightWhite
      },
      '& .MuiSvgIcon-root': {
        fontSize: '26px !important',
        marginTop: -2
      },
      '& label': {
        borderRadius: '5px',
        padding: '17px 20px 17px 20px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        position: 'relative',
        marginLeft: 0,
        minHeight: 86,
        boxSizing: 'border-box',
        width: '100%',
        alignItems: 'flex-start',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: 5,
          backgroundColor: theme.palette.$slateGrey,
          display: 'block',
          borderRadius: '5px 0px 0px 5px'
        }
      }
    },
    radioItem: {
      padding: '10px',
      '@media(max-width: 835px)': {
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    fromControlLabel: {
      transition: 'all .4s'
    },
    label: {
      fontSize: theme.typography.$fzBody,
      fontWeight: 'normal',
      fontStyle: 'normal',
      color: theme.palette.$battleshipGrey,
      paddingLeft: '10px',
      maxWidth: '240px',
      '@media screen and (max-width: 768px)': {
        fontSize: theme.typography.$fzH5
      }
    },
    icon: {
      maxWidth: '20px',
      flex: '0 0 20px',
      height: '20px',
      borderRadius: '4px',
      border: "1px solid ".concat(theme.palette.$veryLightPink),
      boxSizing: 'border-box',
      position: 'relative',
      marginTop: 2,
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)'
      },
      '@media screen and (max-width: 768px)': {
        maxWidth: '18px',
        flex: '0 0 18px',
        height: '18px'
      }
    },
    checkBoxChecked: {
      backgroundColor: theme.palette.$battleshipGrey
    },
    labelChecked: {
      color: theme.palette.$lightWhite
    },
    textErr: {
      fontSize: theme.typography.$fzH6,
      fontWeight: 'normal',
      lineHeight: '1.71',
      color: theme.palette.$lipstick,
      paddingLeft: '10px',
      marginTop: '0px'
    },
    title: {
      fontFamily: theme.typography.fontFamily,
      paddingLeft: '10px',
      fontSize: theme.typography.$fzBody,
      fontWeight: 'normal',
      lineHeight: '1.67',
      color: theme.palette.$greyishBrown,
      marginBottom: '30px'
    }
  };
});
export default useStyles;