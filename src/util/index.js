/**
 *
 * @param {number} num
 * @returns string
 */
// eslint-disable-next-line import/prefer-default-export
export function toThousands(num) {
  return num.toLocaleString();
}

/**
 *
 * @param {string} str
 * @returns string
 */
export function splicHashString(str) {
  return `${str.substr(0, 4)}-${str.substr(str.length - 4)}`;
}
