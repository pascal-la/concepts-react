export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isPalindrome(
  str: string,
  caseSensitive: boolean = false
): boolean {
  const result = str.split("").reverse().join("");

  return caseSensitive
    ? str === result
    : str.toLowerCase() === result.toLowerCase();
}

export function areAnagrams(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  const sortString = (str: string) => str.split("").sort().join("");

  return sortString(str1) === sortString(str2);
}

export function acronym(str: string): string {
  const words = str.split(/-| /).map((s: string) => s[0]);
  const result = words.join("").toUpperCase();
  return result;
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function emailCheck(email: string) {
  return emailRegex.test(email);
}

export function isStringNotEmpty(str: string) {
  return str.trim().length > 0;
}

// export function acronym(str: string): string {
//   const words = str.split(/-| /);
//   const result = words.reduce<string[]>((acc, curr) => {
//     acc.push(curr[0]);
//     return acc;
//   }, []);
//   return result.join("").toUpperCase();
// }

// export function acronym(str: string): string {
//   return str
//     .split(/[\s-]+/)
//     .map((word) => word.charAt(0).toUpperCase())
//     .join("");
// }

// export function acronym2(str: string): string {
//   let result = "";
//   let shouldTakeNextChar = true;

//   for (const char of str) {
//     if (shouldTakeNextChar && char !== " " && char !== "-") {
//       result += char.toUpperCase();
//     }
//     shouldTakeNextChar = char === " " || char === "-";
//   }

//   return result;
// }

// ===============================================================
//                              FOR
// ===============================================================

// const object = {
//   one: "One",
//   two: "Two",
//   three: "Three",
// };

// const array = ["One", "Two", "Three"];

// const string = "One two three";

// const forObject = () => {
//   let result = "";

//   for (let i = 0; i < Object.keys(object).length; i++) {
//     result += Object.values(object)[i];
//   }

//   return result;
// };

// const forArray = () => {
//   let result = "";

//   for (let i = 0; i < array.length; i++) {
//     result += array[i];
//   }

//   return result;
// };

// const forString = () => {
//   let result = "";

//   for (let i = 0; i < string.length; i++) {
//     result += string[i];
//   }

//   return result;
// };

// console.log(forObject());
// console.log(forArray());
// console.log(forString());

// const forInObject = (obj: { [key: string]: string }) => {
//   let result = "";

//   for (let i in obj) {
//     result += obj[i];
//   }

//   return result;
// };

// console.log(forInObject(object));

// const forOfArray = (arr: string[]) => {
//   let result = "";

//   for (let i in arr) {
//     result += arr[i];
//   }

//   return result;
// };

// console.log(forOfArray(array));

// const forEachArray = (arr: string[]) => {
//   let result = "";
//   arr.forEach((item) => (result += item));
//   return result;
// };

// console.log(forEachArray(array));

// ===============================================================
//
// ===============================================================
