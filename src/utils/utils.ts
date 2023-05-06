import { IGroupRadios } from "@/components/GroupRadio/GroupRadio";

/**
 * Use for random Reference number
 * @param {number} numberOfDigits
 * @returns
 */
export const generateRandomReferenceNumber = () => {
  const numbers = '0123456789';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  // generate 8 random numbers
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    result += numbers[randomIndex];
  }

  // generate 3 random letters
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    result += letters[randomIndex];
  }

  return result;
}

/**
 * Use for random numbers
 * @param {number} numberOfDigits
 * @returns
 */
export const generateRandomNumber = (numberOfDigits: number) => {
  let randomNumber = "";
  for (let i = 0; i < numberOfDigits; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }
  return randomNumber.toString();
};

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

/**
 * Use to update radio list to get new data from changes
 * @param {string} value
 * @param {IGroupRadios.IRadio} listRadio
 * @returns
 */
export const updateDataListRadio = (value: string, listRadio: IGroupRadios.IRadio[]) => {
  const newData: any = listRadio.reduce((acc, item) => {
    const newItem: any = { ...item }; // Create a new object to avoid changing the original object
    if (newItem.text === value) {
      newItem.checked = true;
    } else {
      newItem.checked = false;
    }
    acc.push(newItem);
    return acc;
  }, []);
  return newData;
};