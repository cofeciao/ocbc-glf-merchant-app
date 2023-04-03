import { makeStyles } from '@material-ui/core';
var useStyles = makeStyles(function (theme) {
  return {
    root: {},
    linkHref: {
      marginLeft: '5px'
    },
    listDocument: {
      '& ul': {
        '& li': {
          alignItems: 'center',
          listStyle: 'none',
          fontSize: theme.typography.$fzH4,
          fontWeight: 'normal',
          lineHeight: '1.67',
          color: theme.palette.$greyishBrown,
          marginBottom: '20px',
          position: 'relative',
          paddingLeft: '37px',
          fontFamily: theme.typography.fontFamily,
          '@media(max-width: 768px)': {
            fontSize: theme.typography.$fzH6
          },
          '&:last-child': {
            marginBottom: '40px'
          },
          '& a': {
            borderBottom: 0
          },
          '& svg': {
            position: 'absolute',
            left: 0,
            top: '3px',
            fill: theme.palette.$battleshipGrey,
            '@media(max-width: 768px)': {
              maxWidth: '19px',
              top: '-1px'
            }
          }
        }
      }
    },
    iconPopup: {
      marginLeft: '10px',
      display: 'inline-block',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transform: 'translateY(1px)',
      '&:hover': {
        '& img': {
          '&:first-child': {
            display: 'none'
          },
          '&:last-child': {
            display: 'inline-block'
          }
        }
      },
      '& img': {
        maxWidth: '16px',
        '&:last-child': {
          display: 'none'
        }
      }
    }
  };
});
export default useStyles;