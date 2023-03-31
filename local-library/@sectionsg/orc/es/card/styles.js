var stylesCard = function stylesCard(theme) {
  return {
    root: {},
    cardWrapper: {
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 15px 8px rgba(0, 0, 0, 0.02)',
      padding: '40px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    cardAnimationWrapper: {
      marginTop: '48px'
    },
    rowInfoContent: {
      fontSize: '24px',
      fontWeight: '600',
      '@media (max-width: 767px)': {
        fontSize: '16px'
      }
    },
    cardtype: {
      fontWeight: 'bold',
      fontSize: '24px',
      minHeight: '68px',
      lineHeight: '34px',
      '@media (max-width: 767px)': {
        minHeight: 'unset',
        fontSize: '18px',
        lineHeight: '30px'
      }
    },
    cardNames: {
      fontWeight: 'bold',
      marginTop: '54px',
      minHeight: '37px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      fontSize: theme.typography.$fzH4,
      lineHeight: '24px',
      '& >div': {
        width: '100%'
      },
      '@media (max-width: 767px)': {
        marginTop: '25px',
        minHeight: 'unset',
        lineHeight: '28px',
        fontSize: theme.typography.$fzH5
      }
    },
    cardPromoWrapper: {
      cursor: 'pointer'
    }
  };
};

var stylesCardAnimation = function stylesCardAnimation(theme) {
  return {
    root: {},
    cardAnimation: {
      textAlign: 'center'
    },
    cardAction: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.$clearBlue,
      fontSize: theme.typography.$fzH6,
      marginTop: '40px',
      cursor: 'pointer'
    },
    cardImageWrapper: {
      height: '255px',
      width: '255px',
      display: 'flex',
      alignItems: 'center',
      margin: '0 auto',
      justifyContent: 'center',
      position: 'relative'
    },
    cardShadow: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      maxWidth: '100%',
      maxHeight: '100%',
      zIndex: '-1'
    },
    cardImage: {
      maxWidth: '100%',
      maxHeight: '100%',
      position: 'relative',
      '&:after': {
        position: 'absolute',
        content: '',
        top: '0',
        left: '0',
        height: '20px',
        width: '20px',
        backgroundColor: 'red'
      }
    },
    flipIcon: {
      marginRight: '5px'
    }
  };
};

var stylesCardPromo = function stylesCardPromo(theme) {
  return {
    root: {},
    cardPromo: {
      alignItems: 'flex-start',
      backgroundColor: theme.palette.$white,
      borderRadius: '40px',
      borderBottomRightRadius: '0',
      display: 'flex',
      maxWidth: '100%',
      padding: function padding(props) {
        return props.paddingCustomize ? "".concat(props.paddingCustomize) : '10px 30px';
      },
      backgroundSize: 'contain',
      fontSize: theme.typography.$fzH5,
      lineHeight: '24px'
    },
    promoText: {
      marginLeft: '20px'
    },
    promoTitle: {
      marginBottom: '5px',
      fontWeight: 'bold'
    }
  };
};

var stylesPopup = function stylesPopup(theme) {
  return {
    dialogContentContainer: {
      padding: '30px 10px 10px'
    },
    dialogTitle: {
      fontSize: theme.typography.$fzH2,
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.42',
      letterSpacing: 'normal',
      paddingRight: '20px',
      '@media screen and (max-width: 767px)': {
        fontSize: theme.typography.$fzH3
      }
    },
    dialogDescription: {
      fontSize: theme.typography.$fzH5,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.67',
      color: '#525252',
      letterSpacing: 'normal',
      marginTop: '20px'
    }
  };
};

export { stylesCard, stylesCardAnimation, stylesCardPromo, stylesPopup };