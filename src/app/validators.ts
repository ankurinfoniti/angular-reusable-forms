import { Validator } from './models/types';

const isNotEmpty = (str: string) => str.length !== 0;
const createMinLengthCheck = (minLength: number) => (str: string) =>
  str.length >= minLength;
const createMinValueCheck = (minValue: number) => (value: number) =>
  value >= minValue;

export const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
// reg exp for american date format month day and year
export const dateRegex =
  /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

const createRegexCheck = (regex: RegExp) => (str: string) => regex.test(str);

export const isNotEmptyValidator: Validator = {
  checkFn: isNotEmpty,
  errorMessage: 'Field cannot be empty',
};

export const createMinLengthValidator = (minLength: number) => ({
  checkFn: createMinLengthCheck(minLength),
  errorMessage: `Field must be ${minLength} characters or longer`,
});

export const createMinValueValidator = (minValue: number) => ({
  checkFn: createMinValueCheck(minValue),
  errorMessage: `Field must be ${minValue} or over`,
});

export const createRegexValidator = (regex: RegExp, pattren: string) => ({
  checkFn: createRegexCheck(regex),
  errorMessage: `Field must be a valid ${pattren}`,
});
