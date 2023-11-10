import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    $white: '#f9f9f9',
    $sea: '#319988',
    $greyishBrown: '#484848',
    $clearBlue: '#2979ff',
    $veryLightPink: '#d9d9d9',
    $tiffanyBlue: '#79e0d6',
    $pale: '#fff2cf',
    $lightMustard: '#f6c468',
    $paleOrange: '#f4af62',
    $orangeyRed: '#ef473a',
    $salmon: '#fc7875',
    $lipstick: '#cb2d3e',
    $dustyBlue: '#5b85ae',
    $paleGrey: '#fafcfc',
    $lightPeriwinkle: ' #cae1ff',
    $softBlue: '#61a7db',
    $iceBlue: '#ebeff1',
    $paleCyan: '#baf4f2',
    $lightGreyBlue: '#b2bec4',
    $coolGrey: '#94a4ad',
    $blueGrey: '#7c909b',
    $oxfordGrey: '#6e8591',
    $battleshipGrey: '#667c88',
    $slateGrey: '#566b76',
    $gunmetal: '#495a63',
    $lightBlueGrey: '#d1d8db',
    $charcoalGrey: '#39474e',
    $lightGreyWhite: '#f7f8f9',
    $lightWhite: '#ffffff',
    $greenIcon: '#009c88',
    $prefixColor: '#888888',

    // alternative
    $dustyBlueAlt: '#4c739a',
    $paleOrangeAlt: '#f09328',
    $seaAlt: '#2c8778',
    $linkHover: '#4e78c0',
  },
  typography: {
    fontFamily: '\'OpenSans\', sans-serif', // specifying a new font
    $fzH1: '32px',
    $fzH2: '24px',
    $fzH3: '20px',
    $fzH4: '18px',
    $fzH5: '16px',
    $fzH6: '14px',
    $fzDes: '12px',
    $fzBody: '18px',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 769,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;