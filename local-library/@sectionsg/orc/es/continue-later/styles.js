import { makeStyles } from '@material-ui/core/styles';
var useStyles = makeStyles(function (theme) {
  return {
    dialogTitle: {
      fontSize: theme.typography.$fzH2,
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.42',
      letterSpacing: 'normal',
      '@media (max-width: 767px)': {
        fontSize: '20px'
      }
    },
    dialogDescription: {
      fontSize: theme.typography.$fzH5,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.75',
      color: theme.palette.$greyishBrown,
      letterSpacing: 'normal',
      marginTop: '20px'
    },
    dialogButton: {
      fontSize: theme.typography.$fzH5,
      display: 'flex',
      alignItems: 'center',
      marginTop: '40px'
    }
  };
}, 'saved-application');
export default useStyles;