// @ts-check

import { isNumberObject } from "util/types";

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let sum = 0;
  sum = Number(array1.join('')) + Number(array2.join(''));
  console.log(Number(array1.join('')));

  return sum;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let reverseStr = String(value).split("");
  reverseStr = reverseStr.reverse();
  let palindrome = reverseStr.join("");

  if (palindrome === String(value))
    return true
  else return false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === ("" || null || undefined))
    return 'Required field';
  else {
    if (Number(input) && Number(input) !== 0)
      return "";
    else return 'Must be a number besides 0';
  }
}
