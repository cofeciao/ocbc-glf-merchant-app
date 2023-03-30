export type ICaptchaProps = {
  width?: number;
  height?: number;
  backgroundColor?: string;
  dotColor?: string;
  textColor?: string;
  lineColor?: string;
  captchaFontFamily?: string;
  fontMin?: string;
  fontMax?: string;
  captchaCode?: string;
  captchaLength?: number;
  onGeneratedCaptcha?: Function;
  methodReloadCaptcha?: Function;
};
