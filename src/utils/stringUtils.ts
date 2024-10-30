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

export function areAnagrams(str1: string, str2: string) {
  if (str1.length !== str2.length) return false;

  const sortString = (str: string) => str.split("").sort().join("");

  return sortString(str1) === sortString(str2);
}
