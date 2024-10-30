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
  const firstLetters = str.split(/-| /).map((s: string) => s[0]);
  const result = firstLetters.join("").toUpperCase();
  return result;
}

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
