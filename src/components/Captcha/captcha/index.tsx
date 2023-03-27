import _ from "lodash";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyledCanvas } from "./Captcha.style";
import { DEFAULT } from "./utility";

const {
  WIDTH: DEFAULT_WIDTH,
  HEIGHT: DEFAULT_HEIGHT,
  BACKGROUND_COLOR: DEFAULT_BACKGROUND,
  DOT_COLOR: DEFAULT_DOT_COLOR,
  TEXT_COLOR: DEFAULT_TEXT_COLOR,
  LINE_COLOR: DEFAULT_LINE_COLOR,
  FONT_MIN: DEFAULT_FONT_MIN,
  FONT_MAX: DEFAULT_FONT_MAX,
  FONT_FAMILY: DEFAULT_FONT_FAMILY,
} = DEFAULT;

const Captcha: React.FC<any> = (props) => {
  const {
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
    backgroundColor = DEFAULT_BACKGROUND,
    dotColor = DEFAULT_DOT_COLOR,
    textColor = DEFAULT_TEXT_COLOR,
    lineColor = DEFAULT_LINE_COLOR,
    captchaFontFamily = DEFAULT_FONT_FAMILY,
    fontMin = DEFAULT_FONT_MIN,
    fontMax = DEFAULT_FONT_MAX,
    captchaCode,
    captchaLength = 6,
    onGeneratedCaptcha = () => {},
    methodReloadCaptcha = () => {},
  } = props;
  const canvasRef: React.RefObject<HTMLCanvasElement> = useRef();
  const [captcha, setCaptcha] = useState<string>();
  const [ctx, setCtx] = useState<any>();

  // Method to generate random captcha
  const generateCaptcha = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captchaString = "";
    for (let i = 0; i < captchaLength; i++) {
      let char = chars.charAt(Math.floor(Math.random() * chars.length));
      captchaString += char;
    }
    if (typeof onGeneratedCaptcha === "function")
      onGeneratedCaptcha(captchaString);
    return captchaString;
  }, [captchaLength]);

  const drawBackground = useCallback(() => {
    // Draw background color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Draw random dot
    for (let i = 0; i < 50; i++) {
      let x = Math.random() * canvasRef.current.width;
      let y = Math.random() * canvasRef.current.height;
      ctx.fillStyle = dotColor;
      ctx.fillRect(x, y, 2, 2);
    }
  }, [backgroundColor, ctx, dotColor]);

  const drawLine = useCallback(() => {
    ctx.beginPath();
    let x1 =
      Math.random() * (_.has(canvasRef, "current") && canvasRef.current.width);
    let y1 = Math.random() * canvasRef.current.height;
    ctx.moveTo(x1, y1);
    for (let i = 0; i < 10; i++) {
      let x2 = Math.random() * canvasRef.current.width;
      let y2 = Math.random() * canvasRef.current.height;
      ctx.quadraticCurveTo(x1, y1, (x1 + x2) / 2, (y1 + y2) / 2);
      x1 = x2;
      y1 = y2;
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = lineColor;
    ctx.stroke();
  }, [ctx, lineColor]);

  const drawText = useCallback(
    (captchaString) => {
      // Draw captcha text
      ctx.fillStyle = textColor;
      let x = 20;
      let y = 35;
      for (let i = 0; i < captchaString.length; i++) {
        let offset = Math.floor(Math.random() * 20) - 5;
        let char = captchaString.charAt(i);
        if (Math.random() < 0.3) {
          ctx.font = `bold ${fontMax} ${captchaFontFamily}`;
        } else {
          ctx.font = `bold ${fontMin} ${captchaFontFamily}`;
        }
        ctx.fillText(char, x, y + offset);
        x += 35;
      }
    },
    [captchaFontFamily, ctx, fontMax, fontMin, textColor]
  );

  const reGenerateCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
  }, [generateCaptcha]);

  useEffect(() => {
    if (typeof methodReloadCaptcha === "function")
      methodReloadCaptcha(() => reGenerateCaptcha);
  }, [reGenerateCaptcha, methodReloadCaptcha]);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      setCtx(canvasRef.current.getContext("2d"));
    }
  }, [canvasRef, height, width]);

  useEffect(() => {
    if (ctx) {
      setCaptcha(captchaCode || generateCaptcha());
    }
  }, [captchaCode, ctx, generateCaptcha]);

  useEffect(() => {
    if (captcha && ctx) {
      drawBackground();
      drawLine();
      drawText(captcha);
    }
  }, [captcha, ctx, drawBackground, drawLine, drawText]);

  return <StyledCanvas ref={canvasRef} />;
};

export default Captcha;
