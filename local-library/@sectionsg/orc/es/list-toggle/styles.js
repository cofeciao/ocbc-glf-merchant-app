var styles = function styles(theme) {
  return {
    root: {},
    listToggle: {
      display: 'inline-block',
      backgroundColor: theme.palette.$iceBlue,
      borderRadius: '35px',
      margin: '0 10px',
      position: 'relative',
      '@media (max-width: 860px)': {
        margin: '20px 0'
      }
    },
    itemToggle: {
      padding: '15px 30px',
      fontSize: theme.typography.$fzH2,
      lineHeight: '34px',
      fontWeight: 'bold',
      color: theme.palette.$coolGrey,
      display: 'inline-block',
      cursor: 'pointer',
      position: 'relative',
      zIndex: '1'
    },
    backgroundActive: {
      transition: '0.5s all',
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      backgroundColor: theme.palette.$lightWhite,
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      borderRadius: '35px',
      zIndex: '0'
    },
    active: {
      color: theme.palette.$battleshipGrey
    }
  };
};

export default styles;