import { Validator } from './models/types';

const isNotEmpty = (str: string) => str.length !== 0;
const createMinLengthCheck = (minLength: number) => (str: string) =>
  str.length >= minLength;
const createMinValueCheck = (minValue: number) => (value: number) =>
  value >= minValue;

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const isEmail = (str: string) => emailRegex.test(str);

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

export const isEmailValidator = {
  checkFn: isEmail,
  errorMessage: 'Field must be a valid email address',
};
