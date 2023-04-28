
/**
 * Use to convert a string value to text, eg: xxxx_xxx_xx => Xxxx xxx xx
 * @param {string} text
 * @returns
 */
export const convertValueToText = (text: string) => {
  if (typeof text !== "string") return "-";
  const convertedText = text
    .replace(/-/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase());
  return convertedText;
};

/**
 * Use to uppercase first letter, eg:
 * @param {string} text
 * @returns
 */
export const toUppercaseFirstLetter = (text: string) => {
  if (typeof text !== "string") return "-";
  return text.charAt(0).toUpperCase() + text.slice(1);
};
